<?php
/*
 * TECTOVA Team Desk — reminders. Run once an hour from the server's cron (or the hosting control panel):
 *   URL form:  https://team.example.com/cron.php?key=YOUR_CRON_KEY
 *   CLI form:  php /path/to/team/cron.php
 * Sends (phone notification and Telegram, no email): a daily reminder to log hours, a warning about a timer left running, project budget alerts at 80% and 100%,
 * a morning summary of pending approvals for the manager and team leaders, and a morning list of tasks due soon. Each message is sent once.
 */
declare(strict_types=1);
require __DIR__ . '/lib.php';
header('Content-Type: text/plain; charset=utf-8');

migrate();
if (PHP_SAPI !== 'cli' && !hash_equals(secret_key('cron_key'), (string)($_GET['key'] ?? ''))) {
    http_response_code(403);
    exit("forbidden\n");
}

$site = rtrim((string)cfg('site_url', ''), '/');
$reminderHour = (int)cfg('reminder_hour', 18);
$digestHour = 9;
$dry = PHP_SAPI === 'cli' && in_array('--dry-run', $argv ?? [], true);
$log = [];

/** Sends one reminder to a person: phone notification (if installed) and Telegram (if linked). Logged, never throws. */
function td_notify(array $u, string $title, string $body): void
{
    global $dry, $log;
    if ($dry) { $log[] = "[not sent] user {$u['id']} | $title"; return; }
    try {
        push_user((int)$u['id'], $title, $body, './', 'reminder');
        if (!empty($u['tg_chat']) && (int)$u['tg_on']) tg_send_user($u, $body);
        $log[] = "[sent] user {$u['id']} | $title";
    } catch (Throwable $e) {
        $log[] = "[FAILED] user {$u['id']} | " . $e->getMessage();
    }
}
function once(int $userId, string $kind, string $ref): bool
{
    if (q('SELECT 1 FROM td_notify_log WHERE user_id = ? AND kind = ? AND ref = ?', [$userId, $kind, $ref])->fetch()) return false;
    q('INSERT INTO td_notify_log (user_id, kind, ref, sent_at) VALUES (?,?,?,NOW())', [$userId, $kind, $ref]);
    return true;
}
function local_now(string $country): DateTimeImmutable
{
    return new DateTimeImmutable('now', new DateTimeZone(TD_TZ[$country] ?? 'Europe/Berlin'));
}
function is_workday(array $u, string $day): bool
{
    $w = (int)gmdate('w', strtotime($day . ' 00:00:00 UTC'));
    if (!in_array($w, user_workdays($u), true)) return false;
    if (q('SELECT 1 FROM td_holidays WHERE country = ? AND day = ?', [$u['country'], $day])->fetch()) return false;
    if (q("SELECT 1 FROM td_leaves WHERE user_id = ? AND status = 'approved' AND ? BETWEEN start_date AND end_date", [$u['id'], $day])->fetch()) return false;
    return true;
}
$foot = $site ? "\n\n$site" : '';

$users = q('SELECT * FROM td_users WHERE active = 1')->fetchAll();
$byId = [];
foreach ($users as $u) $byId[(int)$u['id']] = $u;

/* 1. Daily reminder to log hours */
foreach ($users as $u) {
    if (!(int)$u['notify']) continue;
    if (user_is_admin_dept((int)$u['id'])) continue;
    $now = local_now($u['country']);
    if ((int)$now->format('G') !== $reminderHour) continue;
    $day = $now->format('Y-m-d');
    if (!is_workday($u, $day)) continue;
    if (q('SELECT 1 FROM td_entries WHERE user_id = ? AND work_date = ?', [$u['id'], $day])->fetch()) continue;
    if (q('SELECT 1 FROM td_timers WHERE user_id = ?', [$u['id']])->fetch()) continue;
    if (!once((int)$u['id'], 'daily', $day)) continue;
    td_notify($u, 'تذكير: سجّل ساعات اليوم / Reminder: log today’s hours',
        "مرحباً {$u['name']}،\nلم تُسجَّل أي ساعات عمل لك اليوم ($day). سجّلها من صفحة \"وقتي\" قبل نهاية اليوم.\n\n" .
        "Hello {$u['name']},\nNo hours are logged for you today ($day). Please add them on the \"My time\" page." . $foot);
}

/* 2. Timer left running for more than 10 hours */
foreach (q('SELECT * FROM td_timers')->fetchAll() as $t) {
    $u = $byId[(int)$t['user_id']] ?? null;
    if (!$u || !(int)$u['notify']) continue;
    $hours = (now_ms() - (int)$t['start_ms']) / 3600000;
    if ($hours < 10 || !once((int)$u['id'], 'timer', (string)$t['start_ms'])) continue;
    $h = (int)floor($hours);
    td_notify($u, 'المؤقت ما زال يعمل / Your timer is still running',
        "مرحباً {$u['name']}،\nالمؤقت يعمل منذ $h ساعة. إذا نسيت إيقافه، افتح الموقع واضغط \"أوقف واحفظ\" وصحّح الوقت.\n\n" .
        "Hello {$u['name']},\nYour timer has been running for $h hours. If you forgot to stop it, open the site, stop it and correct the time." . $foot);
}

/* 3. Project budget alerts at 80% and 100% */
$owners = q("SELECT * FROM td_users WHERE role = 'owner' AND active = 1")->fetchAll();
foreach (q('SELECT p.*, COALESCE(SUM(e.minutes), 0) used FROM td_projects p LEFT JOIN td_entries e ON e.project_id = p.id
            WHERE p.budget_hours > 0 AND p.status <> \'closed\' GROUP BY p.id')->fetchAll() as $p) {
    $pct = ((int)$p['used'] / 60) / (float)$p['budget_hours'] * 100;
    $level = $pct >= 100 ? 100 : ($pct >= 80 ? 80 : 0);
    if ($level < (int)$p['alert_level']) { q('UPDATE td_projects SET alert_level = ? WHERE id = ?', [$level, $p['id']]); continue; }
    if ($level === 0 || $level === (int)$p['alert_level']) continue;
    q('UPDATE td_projects SET alert_level = ? WHERE id = ?', [$level, $p['id']]);
    $to = [];
    foreach ($owners as $ow) if ((int)$ow['notify']) $to[(int)$ow['id']] = $ow;
    $creator = $byId[(int)$p['created_by']] ?? null;
    if ($creator && $creator['role'] === 'lead' && (int)$creator['notify']) $to[(int)$creator['id']] = $creator;
    $label = trim(($p['code'] ? $p['code'] . ' · ' : '') . $p['name']);
    $usedH = round((int)$p['used'] / 60, 1);
    foreach ($to as $r) {
        td_notify($r, "تنبيه ميزانية $level% · $label / Budget alert",
            "المشروع \"$label\" استهلك $usedH ساعة من أصل {$p['budget_hours']} ساعة مخططة (" . round($pct) . "%).\n\n" .
            "Project \"$label\" has used $usedH of {$p['budget_hours']} planned hours (" . round($pct) . "%)." . $foot);
    }
}

/* 4. Morning summary of pending approvals */
foreach ($users as $u) {
    if (!in_array($u['role'], ['owner', 'lead'], true) || !(int)$u['notify']) continue;
    $now = local_now($u['country']);
    if ((int)$now->format('G') !== $digestHour) continue;
    $weeks = (int)q("SELECT COUNT(*) c FROM td_weeks w JOIN td_users x ON x.id = w.user_id WHERE w.status = 'submitted' AND w.user_id <> ?" .
        ($u['role'] === 'lead' ? " AND x.id IN (" . lead_member_sql((int)$u['id']) . ")" : ''), [$u['id']])->fetch()['c'];
    $leaves = leaves_waiting_for($u);
    if ($weeks + $leaves === 0 || !once((int)$u['id'], 'digest', $now->format('Y-m-d'))) continue;
    td_notify($u, 'طلبات بانتظار موافقتك / Requests waiting for you',
        "مرحباً {$u['name']}،\nبانتظار موافقتك: $weeks أسبوع ساعات" . ($leaves ? " و$leaves طلب إجازة" : '') . ".\n\n" .
        "Hello {$u['name']},\nWaiting for you: $weeks timesheet week(s)" . ($leaves ? " and $leaves leave request(s)" : '') . '.' . $foot);
}

/* 5. Tasks due tomorrow (and anything already overdue), sent to the assignee with the morning summary */
foreach ($users as $u) {
    if (!(int)$u['notify']) continue;
    $now = local_now($u['country']);
    if ((int)$now->format('G') !== $digestHour) continue;
    $today = $now->format('Y-m-d');
    $tomorrow = $now->modify('+1 day')->format('Y-m-d');
    $rows = q("SELECT t.title, t.due, p.code FROM td_tasks t LEFT JOIN td_projects p ON p.id = t.project_id
               WHERE t.assignee_id = ? AND t.status <> 'done' AND t.due IS NOT NULL AND t.due <= ? ORDER BY t.due", [$u['id'], $tomorrow])->fetchAll();
    if (!$rows || !once((int)$u['id'], 'due', $today)) continue;
    $lines = [];
    foreach ($rows as $r) {
        $tag = $r['due'] < $today ? 'متأخرة / overdue' : ($r['due'] === $today ? 'اليوم / today' : 'غداً / tomorrow');
        $lines[] = '- ' . ($r['code'] ? $r['code'] . ' · ' : '') . $r['title'] . "  [{$r['due']} · $tag]";
    }
    td_notify($u, 'مهام قريبة من موعد التسليم / Tasks due soon',
        "مرحباً {$u['name']}،\nهذه مهامك المتأخرة أو المستحقة اليوم وغداً:\n\n" . implode("\n", $lines) . "\n\n" .
        "Hello {$u['name']},\nThese tasks of yours are overdue or due today/tomorrow (list above)." . $foot);
}

q('DELETE FROM td_notify_log WHERE sent_at < ?', [gmdate('Y-m-d H:i:s', time() - 120 * 86400)]);
echo $log ? implode("\n", $log) . "\n" : "nothing to send\n";
