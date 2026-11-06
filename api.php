<?php
/* TECTOVA Team Desk — JSON API. Every permission check happens here, on the server. */
declare(strict_types=1);
require __DIR__ . '/lib.php';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
header('Referrer-Policy: same-origin');

function out($data): void
{
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/* ---------- shapes sent to the browser ---------- */
function sid($v): ?string { return $v === null ? null : (string)$v; }
function fmt_num($v): string { return $v === null ? '' : rtrim(rtrim(number_format((float)$v, 2, '.', ''), '0'), '.'); }
function user_out(array $u, bool $withEmail): array
{
    $o = ['id' => sid($u['id']), 'name' => $u['name'], 'country' => $u['country'], 'discipline' => $u['discipline'],
        'jobTitle' => $u['job_title'], 'role' => $u['role'], 'active' => (bool)$u['active'], 'dailyHours' => (float)$u['daily_hours'],
        'workDays' => user_workdays($u), 'leadId' => sid($u['lead_id']), 'leaveAllowance' => (float)$u['leave_allowance'], 'tg' => !empty($u['tg_chat']), 'teamId' => sid($u['team_id'] ?? null), 'deleted' => !empty($u['deleted']),
        'topMgmt' => (bool)($u['top_mgmt'] ?? false), 'roleId' => sid($u['role_id'] ?? null), 'weeklyHours' => isset($u['weekly_hours']) && $u['weekly_hours'] !== null ? (float)$u['weekly_hours'] : null];
    if ($withEmail) { $o['email'] = $u['email']; $o['notify'] = (bool)$u['notify']; $o['phone'] = (string)($u['phone'] ?? ''); }
    return $o;
}
function project_out(array $p, bool $owner = false): array
{
    $o = ['id' => sid($p['id']), 'code' => $p['code'], 'name' => $p['name'], 'client' => $p['client'], 'location' => $p['location'],
        'budget' => fmt_num($p['budget_hours']), 'color' => $p['color'], 'status' => $p['status'], 'createdBy' => sid($p['created_by']),
        'folderUrl' => $p['folder_url'], 'priority' => $p['priority'] ?? 'normal', 'clientId' => sid($p['client_id'] ?? null)];
    if ($owner) { $o['contractValue'] = fmt_num($p['contract_value']); $o['contractCurrency'] = $p['contract_currency']; }
    return $o;
}
function phase_out(array $h): array
{
    return ['id' => sid($h['id']), 'projectId' => sid($h['project_id']), 'name' => $h['name'], 'budget' => fmt_num($h['budget_hours']), 'sort' => (int)$h['sort']];
}
function task_out(array $t): array
{
    return ['id' => sid($t['id']), 'title' => $t['title'], 'projectId' => sid($t['project_id']), 'assignee' => sid($t['assignee_id']),
        'discipline' => $t['discipline'], 'lod' => $t['lod'], 'status' => $t['status'], 'priority' => $t['priority'],
        'estimate' => fmt_num($t['estimate']), 'due' => $t['due'] ?? '', 'spec' => $t['spec'] ?? '', 'createdBy' => sid($t['created_by']),
        'phaseId' => sid($t['phase_id']), 'links' => $t['links'] ?? '', 'start' => $t['start_date'] ?? '',
        'needsQc' => (bool)($t['needs_qc'] ?? 0), 'reviewer' => sid($t['reviewer_id'] ?? null), 'qcBy' => sid($t['qc_by'] ?? null),
        'qcAt' => !empty($t['qc_at']) ? strtotime($t['qc_at'] . ' UTC') * 1000 : 0,
        'doneAt' => !empty($t['done_at']) ? strtotime($t['done_at'] . ' UTC') * 1000 : 0,
        'updatedAt' => isset($t['updated_at']) ? strtotime($t['updated_at'] . ' UTC') * 1000 : 0,
        'groupId' => sid($t['group_id'] ?? null), 'sort' => (int)($t['sort_order'] ?? 0), 'milestone' => !empty($t['milestone']),
        'msUid' => isset($t['ms_uid']) ? (int)$t['ms_uid'] : null, 'baseStart' => $t['base_start'] ?? '', 'baseDue' => $t['base_due'] ?? ''];
}
function file_out(array $f): array
{
    return ['id' => sid($f['id']), 'projectId' => sid($f['project_id']), 'kind' => $f['kind'], 'title' => $f['title'], 'url' => $f['url'] ?? '',
        'name' => $f['orig_name'] ?? '', 'size' => $f['size'] === null ? null : (int)$f['size'], 'category' => $f['category'], 'note' => $f['note'],
        'userId' => sid($f['created_by']), 'at' => strtotime($f['created_at'] . ' UTC') * 1000, 'scope' => $f['scope'] ?? 'project', 'visibility' => $f['visibility'] ?? 'all'];
}
function client_out(array $c, bool $full): array
{
    $o = ['id' => sid($c['id']), 'name' => $c['name']];
    if ($full) $o += ['contact' => $c['contact'], 'email' => $c['email'], 'phone' => $c['phone'], 'country' => $c['country'], 'website' => $c['website'], 'notes' => $c['notes'] ?? '', 'createdBy' => sid($c['created_by'])];
    return $o;
}
function event_out(array $e, array $guests): array
{
    return ['id' => sid($e['id']), 'title' => $e['title'], 'descr' => $e['descr'] ?? '', 'start' => (int)$e['start_ms'], 'end' => (int)$e['end_ms'], 'location' => $e['location'],
        'meet' => $e['meet_url'], 'projectId' => sid($e['project_id']), 'createdBy' => sid($e['created_by']), 'guests' => $guests];
}
function comment_out(array $c): array
{
    return ['id' => sid($c['id']), 'userId' => sid($c['user_id']), 'body' => $c['body'], 'at' => strtotime($c['created_at'] . ' UTC') * 1000,
        'taskId' => sid($c['task_id']), 'projectId' => sid($c['project_id']), 'parentId' => sid($c['parent_id'] ?? null)];
}
function subtask_out(array $s): array
{
    return ['id' => sid($s['id']), 'taskId' => sid($s['task_id']), 'title' => $s['title'], 'done' => (bool)$s['done'], 'sort' => (int)$s['sort']];
}
function entry_out(array $e): array
{
    return ['id' => sid($e['id']), 'userId' => sid($e['user_id']), 'date' => $e['work_date'], 'start' => (int)$e['start_ms'], 'end' => (int)$e['end_ms'],
        'minutes' => (int)$e['minutes'], 'projectId' => sid($e['project_id']), 'taskId' => sid($e['task_id']), 'phaseId' => sid($e['phase_id']),
        'note' => $e['note'], 'manual' => (bool)$e['manual']];
}
function timer_out(array $t): array
{
    return ['projectId' => sid($t['project_id']), 'taskId' => sid($t['task_id']), 'phaseId' => sid($t['phase_id']), 'note' => $t['note'], 'start' => (int)$t['start_ms']];
}

/* ---------- permission helpers ---------- */
function is_owner(array $me): bool { return $me['role'] === 'owner'; }
function is_lead(array $me): bool { return $me['role'] === 'lead'; }
function need_owner(array $me): void { if (!is_owner($me)) throw new ApiError('forbidden', 403); }
/** Admin or accountant: payroll, profitability, full reports and the accounting export. */
function is_finance(array $me): bool { return has_perm($me, 'finance'); }
/** All projects and all their tasks (the Admin, or a role with "projects"). */
function all_projects(array $me): bool { return has_perm($me, 'projects'); }
/** A team leader who only works inside their own team and projects. */
function lead_scoped(array $me): bool { return is_lead($me) && !all_projects($me); }
function need_perm(array $me, string $k): void { if (!has_perm($me, $k)) throw new ApiError('forbidden', 403); }
function skill_editor(array $me, int $teamId): bool
{
    if (has_perm($me, 'team')) return true;
    return is_lead($me) && in_array($teamId, led_team_ids((int)$me['id']), true);
}
function need_finance(array $me): void { if (!is_finance($me)) throw new ApiError('forbidden', 403); }
function can_create(array $me): bool { return all_projects($me) || is_lead($me); }
function can_edit_row(array $me, array $row): bool
{
    return all_projects($me) || (is_lead($me) && (int)$row['created_by'] === (int)$me['id']);
}
/** Manager, the team leader who created the task, or the leader of the engineer it is assigned to. */
function can_edit_task(array $me, array $task): bool
{
    if (can_edit_row($me, $task)) return true;
    if (!is_lead($me)) return false;
    if (!empty($task['assignee_id'])) {
        if ((int)$task['assignee_id'] === (int)$me['id']) return true;
        return in_array((int)$task['assignee_id'], lead_member_ids((int)$me['id']), true);
    }
    return in_array((int)$task['project_id'], lead_project_ids((int)$me['id']), true);
}
/** Anyone who can edit the task, or the person it is assigned to. */
function can_work_task(array $me, array $task): bool
{
    return can_edit_task($me, $task) || (int)$task['assignee_id'] === (int)$me['id'];
}

/* ---------- v2.16: minutes of meeting ---------- */
function mom_row(?int $id): array
{
    $m = $id ? q('SELECT * FROM td_moms WHERE id = ?', [$id])->fetch() : null;
    if (!$m) throw new ApiError('mom_not_found', 404);
    return $m;
}
function mom_can_see(array $me, array $m): bool
{
    if (is_owner($me) || (int)$m['created_by'] === (int)$me['id']) return true;
    if (in_array((int)$me['id'], array_map('intval', json_decode((string)$m['attendees'], true) ?: []), true)) return true;
    return is_lead($me) && $m['project_id'] && in_array((int)$m['project_id'], lead_project_ids((int)$me['id']), true);
}
function mom_can_edit(array $me, array $m): bool
{
    return (int)$m['created_by'] === (int)$me['id'] || is_owner($me);
}
function mom_out(array $m, bool $full): array
{
    $o = ['id' => sid($m['id']), 'title' => $m['title'], 'eventId' => sid($m['event_id']), 'projectId' => sid($m['project_id']), 'meetingAt' => (int)$m['meeting_ms'],
        'attendees' => array_map('strval', json_decode((string)$m['attendees'], true) ?: []), 'guestsExt' => $m['guests_ext'], 'lang' => $m['lang'], 'status' => $m['status'],
        'createdBy' => sid($m['created_by']), 'sentAt' => $m['sent_at'] ? strtotime($m['sent_at'] . ' UTC') * 1000 : 0, 'hasContent' => !empty($m['content'])];
    if ($full) { $o['transcript'] = (string)$m['transcript']; $o['content'] = json_decode((string)$m['content'], true) ?: null; }
    else { $c = json_decode((string)$m['content'], true) ?: []; $o['summary'] = mb_substr((string)($c['summary'] ?? ''), 0, 300); }
    return $o;
}
function mom_action_out(array $a): array
{
    return ['id' => sid($a['id']), 'momId' => sid($a['mom_id']), 'text' => $a['text'], 'ownerId' => sid($a['owner_id']), 'ownerName' => $a['owner_name'],
        'due' => $a['due'] ?? '', 'done' => (bool)$a['done']];
}
/** Keeps only the known parts of the minutes, as plain strings. */
function mom_clean(array $c): array
{
    $s = fn($v, $n = 4000) => mb_substr(is_string($v) ? trim($v) : '', 0, $n);
    $l = fn($v) => array_values(array_filter(array_map(fn($x) => $s($x, 1000), is_array($v) ? array_slice($v, 0, 100) : []), 'strlen'));
    $topics = [];
    foreach (is_array($c['topics'] ?? null) ? array_slice($c['topics'], 0, 50) : [] as $tp) {
        if (!is_array($tp)) continue;
        $t = $s($tp['title'] ?? '', 300);
        $pts = $l($tp['points'] ?? []);
        if ($t !== '' || $pts) $topics[] = ['title' => $t, 'points' => $pts];
    }
    return ['summary' => $s($c['summary'] ?? '', 6000), 'topics' => $topics, 'decisions' => $l($c['decisions'] ?? []), 'open_issues' => $l($c['open_issues'] ?? []),
        'next_meeting' => $s($c['next_meeting'] ?? '', 500)];
}
function mom_set_actions(int $mid, array $list): void
{
    $old = [];
    foreach (q('SELECT * FROM td_mom_actions WHERE mom_id = ?', [$mid])->fetchAll() as $a) $old[(int)$a['id']] = $a;
    $keep = [];
    foreach (array_values(array_slice($list, 0, 200)) as $i => $a) {
        if (!is_array($a)) continue;
        $text = s_str($a['text'] ?? '', 500);
        if ($text === '') continue;
        $owner = s_int($a['ownerId'] ?? null);
        if ($owner && !q('SELECT id FROM td_users WHERE id = ?', [$owner])->fetch()) $owner = null;
        $due = preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)($a['due'] ?? '')) ? (string)$a['due'] : null;
        $aid = s_int($a['id'] ?? null);
        $done = !empty($a['done']) ? 1 : 0;
        if ($aid && isset($old[$aid])) {
            q('UPDATE td_mom_actions SET text=?, owner_id=?, owner_name=?, due=?, sort=?, done=?, done_at=IF(?, COALESCE(done_at, NOW()), NULL) WHERE id=?',
              [$text, $owner, $owner ? '' : s_str($a['ownerName'] ?? '', 120), $due, $i, $done, $done, $aid]);
            $keep[$aid] = true;
        } else {
            q('INSERT INTO td_mom_actions (mom_id, text, owner_id, owner_name, due, sort, done, done_at) VALUES (?,?,?,?,?,?,?,' . ($done ? 'NOW()' : 'NULL') . ')',
              [$mid, $text, $owner, $owner ? '' : s_str($a['ownerName'] ?? '', 120), $due, $i, $done]);
        }
    }
    foreach (array_keys($old) as $o) if (!isset($keep[$o])) q('DELETE FROM td_mom_actions WHERE id = ?', [$o]);
}
/** Who may pass or return a task's control check: the Admin, the team leader who created it, or its named reviewer. */
function can_qc(array $me, array $task): bool
{
    return can_edit_task($me, $task) || (!empty($task['reviewer_id']) && (int)$task['reviewer_id'] === (int)$me['id']);
}
/** Control check messages: "sent" goes to the checker (or the creator), "ok" and "back" go to the engineer. */
function notify_qc(array $task, array $by, string $kind, string $note = ''): void
{
    $d = ['t' => $task['title'], 'p' => project_label((int)$task['project_id']), 'by' => $by['name'], 'note' => $note];
    if ($kind === 'sent') notify_user((int)($task['reviewer_id'] ?: $task['created_by']), 'qc_sent', $d, (int)$by['id'], (int)$task['id']);
    else notify_user((int)$task['assignee_id'], $kind === 'ok' ? 'qc_ok' : 'qc_back', $d, (int)$by['id'], (int)$task['id']);
}
/** One line in a task's activity log. */
function log_act(int $taskId, int $userId, string $kind, string $detail = ''): void
{
    q('INSERT INTO td_activity (task_id, user_id, kind, detail, created_at) VALUES (?,?,?,?,NOW())', [$taskId, $userId, $kind, mb_substr($detail, 0, 255)]);
}
/** Tells the new assignee (bell, Telegram, email). */
function notify_assigned(array $task, int $assigneeId, array $by): void
{
    notify_user($assigneeId, 'task_assigned', ['t' => $task['title'], 'p' => project_label((int)$task['project_id']), 'due' => $task['due'] ?? '', 'by' => $by['name']],
        (int)$by['id'], isset($task['id']) ? (int)$task['id'] : null);
}
/** Who plans schedules (import from MS Project, groups, links, baseline): the Admins and the team leaders. */
function can_plan(array $me): bool { return can_create($me); }
/** May this person hand the task to $to? The Admin always; a team leader for tasks they may edit, or unassigned tasks, and only to themselves or their engineers. */
function can_assign(array $me, array $task, ?int $to): bool
{
    if (all_projects($me)) return true;
    if (!is_lead($me)) return false;
    $mine = lead_member_ids((int)$me['id']);
    $okTask = can_edit_task($me, $task) || empty($task['assignee_id']) || (int)$task['assignee_id'] === (int)$me['id'];
    return $okTask && ($to === null || $to === (int)$me['id'] || in_array($to, $mine, true));
}
function group_row(?int $id): array
{
    $g = $id ? q('SELECT * FROM td_task_groups WHERE id = ?', [$id])->fetch() : null;
    if (!$g) throw new ApiError('group_not_found', 404);
    return $g;
}
function check_group_for_project(?int $gid, int $pid): ?int
{
    if (!$gid) return null;
    $g = group_row($gid);
    if ((int)$g['project_id'] !== $pid) throw new ApiError('invalid_value');
    return $gid;
}
function next_sort(int $pid): int
{
    $a = (int)q('SELECT COALESCE(MAX(sort_order), 0) m FROM td_tasks WHERE project_id = ?', [$pid])->fetch()['m'];
    $b = (int)q('SELECT COALESCE(MAX(sort_order), 0) m FROM td_task_groups WHERE project_id = ?', [$pid])->fetch()['m'];
    return max($a, $b) + 1;
}
function add_days(string $d, int $n): string { return date('Y-m-d', strtotime($d . ' 12:00:00 UTC') + $n * 86400); }
function day_diff(string $a, string $b): int { return (int)round((strtotime($b . ' 12:00:00 UTC') - strtotime($a . ' 12:00:00 UTC')) / 86400); }
/**
 * After a task moves later, moves the tasks that depend on it later too, keeping their length.
 * Never moves anything earlier. Returns how many tasks moved.
 */
function push_successors(int $taskId, int $uid): int
{
    $moved = 0; $queue = [$taskId]; $guard = 0;
    while ($queue && $guard++ < 5000) {
        $pid = array_shift($queue);
        $p = q('SELECT id, start_date, due FROM td_tasks WHERE id = ?', [$pid])->fetch();
        if (!$p) continue;
        $pS = $p['start_date'] ?: $p['due']; $pD = $p['due'] ?: $p['start_date'];
        if (!$pS) continue;
        foreach (q('SELECT d.kind, d.lag_days, t.id, t.start_date, t.due FROM td_task_deps d JOIN td_tasks t ON t.id = d.task_id WHERE d.pred_id = ?', [$pid])->fetchAll() as $s) {
            $sS = $s['start_date'] ?: $s['due']; $sD = $s['due'] ?: $s['start_date'];
            if (!$sS) continue;
            $lag = (int)$s['lag_days'];
            $shift = 0;
            switch ($s['kind']) {
                case 'SS': $shift = day_diff($sS, add_days($pS, $lag)); break;
                case 'FF': $shift = day_diff($sD, add_days($pD, $lag)); break;
                case 'SF': $shift = day_diff($sD, add_days($pS, $lag)); break;
                default:   $shift = day_diff($sS, add_days($pD, 1 + $lag));
            }
            if ($shift <= 0) continue;
            $ns = $s['start_date'] ? add_days($s['start_date'], $shift) : null;
            $nd = $s['due'] ? add_days($s['due'], $shift) : null;
            q('UPDATE td_tasks SET start_date = ?, due = ?, updated_at = NOW() WHERE id = ?', [$ns, $nd, $s['id']]);
            if ($nd) log_act((int)$s['id'], $uid, 'due', $nd);
            $moved++;
            $queue[] = (int)$s['id'];
        }
    }
    return $moved;
}
/** True if linking $taskId after $predId would make a loop. */
function dep_loop(int $taskId, int $predId): bool
{
    $seen = []; $st = [$predId]; $g = 0;
    while ($st && $g++ < 10000) {
        $x = array_pop($st);
        if ($x === $taskId) return true;
        if (isset($seen[$x])) continue;
        $seen[$x] = 1;
        foreach (q('SELECT pred_id FROM td_task_deps WHERE task_id = ?', [$x])->fetchAll() as $r) $st[] = (int)$r['pred_id'];
    }
    return false;
}
/** Keeps only tag ids that exist; at most 12 per item. */
function clean_tag_ids($v, string $scope): array
{
    if (!is_array($v)) return [];
    $ids = array_values(array_unique(array_filter(array_map(fn($x) => (int)$x, $v), fn($x) => $x > 0)));
    $ids = array_slice($ids, 0, 12);
    if (!$ids) return [];
    $ok = q('SELECT id FROM td_tags WHERE scope = ? AND id IN (' . implode(',', $ids) . ')', [$scope])->fetchAll();
    return array_map(fn($r) => (int)$r['id'], $ok);
}
function set_tags(string $table, string $col, int $id, array $tagIds): void
{
    q("DELETE FROM $table WHERE $col = ?", [$id]);
    foreach ($tagIds as $tg) q("INSERT INTO $table ($col, tag_id) VALUES (?, ?)", [$id, $tg]);
}
function tag_map(string $table, string $col): array
{
    $m = [];
    foreach (q("SELECT $col k, tag_id FROM $table ORDER BY tag_id")->fetchAll() as $r) $m[(string)$r['k']][] = (string)$r['tag_id'];
    return $m;
}
function project_row(?int $id): array
{
    $p = $id ? q('SELECT * FROM td_projects WHERE id = ?', [$id])->fetch() : null;
    if (!$p) throw new ApiError('project_not_found', 404);
    return $p;
}
function task_row(?int $id): array
{
    $t = $id ? q('SELECT * FROM td_tasks WHERE id = ?', [$id])->fetch() : null;
    if (!$t) throw new ApiError('task_not_found', 404);
    return $t;
}
function check_task_for_project(?int $taskId, int $projectId): ?int
{
    if (!$taskId) return null;
    $t = task_row($taskId);
    if ((int)$t['project_id'] !== $projectId) throw new ApiError('task_not_in_project');
    return $taskId;
}
function check_phase_for_project(?int $phaseId, int $projectId): ?int
{
    if (!$phaseId) return null;
    $h = q('SELECT project_id FROM td_phases WHERE id = ?', [$phaseId])->fetch();
    if (!$h || (int)$h['project_id'] !== $projectId) throw new ApiError('phase_not_in_project');
    return $phaseId;
}
function clean_url(string $u): string
{
    $u = trim($u);
    return preg_match('#^https?://[^\s<>"]+$#i', $u) ? mb_substr($u, 0, 500) : '';
}
function clean_links($v): string
{
    $out = [];
    foreach (preg_split('/\R/', s_str($v, 4000)) as $line) {
        $u = clean_url($line);
        if ($u !== '') $out[] = $u;
        if (count($out) >= 15) break;
    }
    return implode("\n", $out);
}
/** A phone number as the person typed it, if it looks like one: digits, spaces, + ( ) - only. */
function clean_phone($v): string
{
    $p = trim(is_scalar($v) ? (string)$v : '');
    if ($p === '') return '';
    if (!preg_match('/^\+?[0-9 ()\-]{6,24}$/', $p) || strlen(phone_digits($p)) < 7 || strlen(phone_digits($p)) > 15) throw new ApiError('bad_phone');
    return $p;
}
function user_row(int $id): array
{
    $u = q('SELECT * FROM td_users WHERE id = ?', [$id])->fetch();
    if (!$u) throw new ApiError('user_not_found', 404);
    return $u;
}
function day_add(string $d, int $n): string { return gmdate('Y-m-d', strtotime($d . ' 00:00:00 UTC') + $n * 86400); }

/** Labour cost per month, person, project and phase. Cost is null where pay or an exchange rate is missing. */
function labor_rows(?string $ym = null): array
{
    $where = $ym ? ' WHERE work_date >= ? AND work_date < ?' : '';
    $args = $ym ? [$ym . '-01', gmdate('Y-m-d', strtotime($ym . '-01 +1 month'))] : [];
    $rows = q("SELECT DATE_FORMAT(work_date, '%Y-%m') ym, user_id, project_id, phase_id, SUM(minutes) m FROM td_entries$where
               GROUP BY ym, user_id, project_id, phase_id", $args)->fetchAll();
    $pay = [];
    foreach (q('SELECT * FROM td_pay_settings')->fetchAll() as $r) $pay[(int)$r['user_id']] = $r;
    $fx = ['EUR' => 1.0];
    foreach (q('SELECT * FROM td_fx')->fetchAll() as $r) $fx[$r['currency']] = (float)$r['rate'];
    $extra = [];
    foreach (q('SELECT * FROM td_pay_months')->fetchAll() as $r) $extra[$r['ym'] . ':' . $r['user_id']] = $r;
    $tot = [];
    foreach ($rows as $r) { $k = $r['ym'] . ':' . $r['user_id']; $tot[$k] = ($tot[$k] ?? 0) + (int)$r['m']; }
    $costOf = [];
    foreach ($tot as $k => $mins) {
        [$ymk, $uidk] = explode(':', $k);
        $s = $pay[(int)$uidk] ?? null;
        if (!$s || (float)$s['amount'] <= 0) { $costOf[$k] = null; continue; }
        $rate = $fx[$s['currency']] ?? 0;
        if ($rate <= 0) { $costOf[$k] = null; continue; }
        $base = $s['pay_type'] === 'hourly' ? (float)$s['amount'] * $mins / 60 : (float)$s['amount'];
        $ex = $extra[$k] ?? null;
        $net = $base + ($ex ? (float)$ex['bonus'] - (float)$ex['deduction'] : 0);
        $costOf[$k] = $net / $rate;
    }
    foreach ($rows as &$r) {
        $k = $r['ym'] . ':' . $r['user_id'];
        $r['m'] = (int)$r['m'];
        $r['cost'] = $costOf[$k] === null ? null : $costOf[$k] * $r['m'] / max(1, $tot[$k]);
    }
    return $rows;
}

function local_date(int $ms, int $tzOffsetMin): string
{
    $tzOffsetMin = max(-840, min(840, $tzOffsetMin));
    return gmdate('Y-m-d', intdiv($ms, 1000) - $tzOffsetMin * 60);
}
function insert_entry(int $uid, int $pid, ?int $tid, int $start, int $end, string $date, string $note, bool $manual, ?int $phase = null): int
{
    $min = max(1, (int)round(($end - $start) / 60000));
    q('INSERT INTO td_entries (user_id, project_id, task_id, phase_id, start_ms, end_ms, minutes, work_date, note, manual, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,NOW())',
        [$uid, $pid, $tid, $phase, $start, $end, $min, $date, $note, $manual ? 1 : 0]);
    return (int)db()->lastInsertId();
}

function allocation_out(string $ym): array
{
    $users = []; foreach (q('SELECT id, name, email, country FROM td_users')->fetchAll() as $u) $users[(int)$u['id']] = $u;
    $projects = []; foreach (q('SELECT id, code, name, client FROM td_projects')->fetchAll() as $p) $projects[(int)$p['id']] = $p;
    $phases = []; foreach (q('SELECT id, name FROM td_phases')->fetchAll() as $h) $phases[(int)$h['id']] = $h['name'];
    $rows = labor_rows($ym);
    $userTot = [];
    foreach ($rows as $r) $userTot[(int)$r['user_id']] = ($userTot[(int)$r['user_id']] ?? 0) + $r['m'];
    $out = [];
    foreach ($rows as $r) {
        $u = $users[(int)$r['user_id']] ?? ['name' => '?', 'email' => '', 'country' => ''];
        $p = $projects[(int)$r['project_id']] ?? ['code' => '', 'name' => '?', 'client' => ''];
        $out[] = ['month' => $ym, 'employee' => $u['name'], 'email' => $u['email'], 'country' => $u['country'],
            'projectCode' => $p['code'], 'project' => $p['name'], 'client' => $p['client'],
            'phase' => $r['phase_id'] ? ($phases[(int)$r['phase_id']] ?? '') : '',
            'hours' => round($r['m'] / 60, 2), 'sharePercent' => round(100 * $r['m'] / max(1, $userTot[(int)$r['user_id']]), 1),
            'costEur' => $r['cost'] === null ? null : round($r['cost'], 2)];
    }
    return ['month' => $ym, 'rows' => $out];
}

/* ---------- request ---------- */
$action = (string)($_GET['a'] ?? '');
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$raw = file_get_contents('php://input');
$in = $raw ? json_decode($raw, true) : [];
if (!is_array($in)) $in = [];
if (!$in && $_POST) $in = $_POST;

try {
    migrate();

    /* ----- machine export for the accounting program (secret key in config.php) -----
       The key may come in the X-Export-Key header (preferred: stays out of server
       logs and Referer) or, for older callers, in the ?key= query parameter. */
    if ($action === 'allocation' && (isset($_SERVER['HTTP_X_EXPORT_KEY']) || isset($_GET['key']))) {
        $provided = (string)($_SERVER['HTTP_X_EXPORT_KEY'] ?? $_GET['key'] ?? '');
        if (!hash_equals(secret_key('export_key'), $provided)) throw new ApiError('forbidden', 403);
        out(allocation_out(s_ym($_GET['ym'] ?? '')));
    }

    /* ----- Telegram bot webhook (Telegram calls this with the secret token) ----- */
    if ($action === 'tg_webhook') {
        $hdr = (string)($_SERVER['HTTP_X_TELEGRAM_BOT_API_SECRET_TOKEN'] ?? '');
        if (tg_token() === '' || !hash_equals(secret_key('tg_secret'), $hdr)) throw new ApiError('forbidden', 403);
        if ($in) tg_handle_update($in);
        out(['ok' => true]);
    }

    /* ----- sign in (no session needed) ----- */
    if ($action === 'login') {
        if ($method !== 'POST') throw new ApiError('method', 405);
        $ip = client_ip();
        $fails = (int)q('SELECT COUNT(*) c FROM td_login_fail WHERE ip = ? AND at > ?', [$ip, time() - 900])->fetch()['c'];
        if ($fails >= 8) throw new ApiError('too_many_attempts', 429);
        $email = mb_strtolower(s_str($in['email'] ?? '', 190, true));
        $pass = (string)($in['password'] ?? '');
        $u = q('SELECT * FROM td_users WHERE email = ? AND active = 1', [$email])->fetch();
        if (!$u || !password_verify($pass, $u['pass_hash'])) {
            q('INSERT INTO td_login_fail (ip, at) VALUES (?, ?)', [$ip, time()]);
            q('DELETE FROM td_login_fail WHERE at < ?', [time() - 86400]);
            usleep(400000);
            throw new ApiError('bad_login', 401);
        }
        if (password_needs_rehash($u['pass_hash'], PASSWORD_DEFAULT)) {
            q('UPDATE td_users SET pass_hash = ? WHERE id = ?', [password_hash($pass, PASSWORD_DEFAULT), $u['id']]);
        }
        q('DELETE FROM td_login_fail WHERE ip = ?', [$ip]);
        $csrf = create_session((int)$u['id']);
        out(['ok' => true, 'csrf' => $csrf]);
    }

    $sess = current_session();
    if (!$sess) throw new ApiError('not_signed_in', 401);
    [$me, $session] = $sess;
    $uid = (int)$me['id'];

    if ($method === 'POST') {
        $hdr = $_SERVER['HTTP_X_CSRF'] ?? '';
        if (!is_string($hdr) || !hash_equals($session['csrf'], $hdr)) throw new ApiError('bad_csrf', 403);
    } elseif (!in_array($action, ['bootstrap', 'entries_month', 'pay_get', 'approvals_list', 'comments_list', 'comments_feed', 'files_list', 'file_get', 'activity_list', 'notif_list', 'work_split', 'events_list', 'mom_list', 'mom_get', 'profit', 'allocation', 'report_data'], true)) {
        throw new ApiError('method', 405);
    }

    /* A user who still has a temporary password may only change it or sign out. */
    if ((int)$me['must_change_pw'] === 1 && !in_array($action, ['bootstrap', 'password_change', 'logout'], true)) {
        throw new ApiError('must_change_password', 403);
    }

    switch ($action) {

    case 'bootstrap': {
        $owner = has_perm($me, 'see_all');
        $lead = is_lead($me);
        $canTeam = has_perm($me, 'team');
        $approver = has_perm($me, 'approve');
        $users = array_map(fn($u) => user_out($u, $canTeam || (int)$u['id'] === $uid), q('SELECT * FROM td_users ORDER BY name')->fetchAll());
        $roles = array_map(fn($r) => ['id' => sid($r['id']), 'name' => $r['name'], 'color' => $r['color'], 'perms' => array_values(array_intersect(TD_PERMS, json_decode((string)$r['perms'], true) ?: []))],
            q('SELECT * FROM td_roles ORDER BY name')->fetchAll());
        $skills = array_map(fn($k) => ['id' => sid($k['id']), 'teamId' => sid($k['team_id']), 'name' => $k['name'], 'sort' => (int)$k['sort']], q('SELECT * FROM td_skills ORDER BY team_id, sort, id')->fetchAll());
        $skillLv = [];
        foreach (q('SELECT user_id, skill_id, level FROM td_user_skills')->fetchAll() as $r) $skillLv[(string)$r['user_id']][(string)$r['skill_id']] = (int)$r['level'];
        $fin = is_finance($me);
        $projects = array_map(fn($p) => project_out($p, $fin), q('SELECT * FROM td_projects ORDER BY code, name')->fetchAll());
        $phases = array_map('phase_out', q('SELECT * FROM td_phases ORDER BY project_id, sort, id')->fetchAll());
        $tasks = array_map('task_out', q('SELECT * FROM td_tasks ORDER BY id')->fetchAll());
        $groups = array_map(fn($g) => ['id' => sid($g['id']), 'projectId' => sid($g['project_id']), 'parentId' => sid($g['parent_id']), 'name' => $g['name'],
            'sort' => (int)$g['sort_order'], 'msUid' => $g['ms_uid'] === null ? null : (int)$g['ms_uid']], q('SELECT * FROM td_task_groups ORDER BY project_id, sort_order, id')->fetchAll());
        $deps = array_map(fn($d) => ['task' => sid($d['task_id']), 'pred' => sid($d['pred_id']), 'kind' => $d['kind'], 'lag' => (int)$d['lag_days']], q('SELECT * FROM td_task_deps')->fetchAll());
        $subtasks = array_map('subtask_out', q('SELECT * FROM td_subtasks ORDER BY task_id, sort, id')->fetchAll());
        $tags = array_map(fn($g) => ['id' => sid($g['id']), 'name' => $g['name'], 'color' => $g['color'], 'scope' => $g['scope'], 'createdBy' => sid($g['created_by'])],
            q('SELECT * FROM td_tags ORDER BY name')->fetchAll());
        $tt = tag_map('td_task_tags', 'task_id');
        $pt = tag_map('td_project_tags', 'project_id');
        foreach ($tasks as &$tk) $tk['tags'] = $tt[$tk['id']] ?? [];
        unset($tk);
        $pl = [];
        foreach (q('SELECT project_id, user_id FROM td_project_leads')->fetchAll() as $r) $pl[(string)$r['project_id']][] = (string)$r['user_id'];
        foreach ($projects as &$pj) { $pj['tags'] = $pt[$pj['id']] ?? []; $pj['leads'] = $pl[$pj['id']] ?? []; }
        unset($pj);
        $seeClients = $owner || $lead || is_finance($me) || has_perm($me, 'clients') || all_projects($me);
        $clients = array_map(fn($c) => client_out($c, $seeClients), q('SELECT * FROM td_clients ORDER BY name')->fetchAll());
        $timers = [];
        $rows = $owner ? q('SELECT * FROM td_timers')->fetchAll() : q('SELECT * FROM td_timers WHERE user_id = ?', [$uid])->fetchAll();
        foreach ($rows as $t) $timers[(string)$t['user_id']] = timer_out($t);
        $totals = [];
        $cond = $owner ? '' : ' WHERE user_id = ' . $uid;
        foreach (q('SELECT user_id, project_id, SUM(minutes) m FROM td_entries' . $cond . ' GROUP BY user_id, project_id')->fetchAll() as $r) {
            $totals[(string)$r['user_id']]['p'][(string)$r['project_id']] = (int)$r['m'];
        }
        foreach (q('SELECT user_id, task_id, SUM(minutes) m FROM td_entries' . ($cond ? $cond . ' AND' : ' WHERE') . ' task_id IS NOT NULL GROUP BY user_id, task_id')->fetchAll() as $r) {
            $totals[(string)$r['user_id']]['t'][(string)$r['task_id']] = (int)$r['m'];
        }
        /* Team-level hours per project, phase and task: manager and team leaders */
        $team = ['p' => [], 'ph' => [], 't' => []];
        if ($owner || $lead || all_projects($me)) {
            foreach (q('SELECT project_id, phase_id, task_id, SUM(minutes) m FROM td_entries GROUP BY project_id, phase_id, task_id')->fetchAll() as $r) {
                $m = (int)$r['m'];
                $team['p'][(string)$r['project_id']] = ($team['p'][(string)$r['project_id']] ?? 0) + $m;
                if ($r['phase_id']) $team['ph'][(string)$r['phase_id']] = ($team['ph'][(string)$r['phase_id']] ?? 0) + $m;
                if ($r['task_id']) $team['t'][(string)$r['task_id']] = ($team['t'][(string)$r['task_id']] ?? 0) + $m;
            }
        }
        $fileCounts = [];
        foreach (q("SELECT project_id, COUNT(*) c FROM td_files WHERE scope = 'project' GROUP BY project_id")->fetchAll() as $r) $fileCounts[(string)$r['project_id']] = (int)$r['c'];
        $fileCounts['company'] = (int)q("SELECT COUNT(*) c FROM td_files WHERE scope = 'company'" . ($fin || has_perm($me, 'company') ? '' : " AND visibility = 'all'"))->fetch()['c'];
        $evToday = q('SELECT e.* FROM td_events e LEFT JOIN td_event_guests g ON g.event_id = e.id AND g.user_id = ? WHERE (e.created_by = ? OR g.user_id IS NOT NULL) AND e.end_ms >= ? AND e.start_ms <= ? ORDER BY e.start_ms LIMIT 20',
            [$uid, $uid, now_ms() - 3600000, now_ms() + 8 * 86400000])->fetchAll();
        $upcoming = array_map(fn($e) => event_out($e, []), $evToday);
        $comments = [];
        foreach (q('SELECT task_id, COUNT(*) c FROM td_comments WHERE task_id IS NOT NULL GROUP BY task_id')->fetchAll() as $r) $comments[(string)$r['task_id']] = (int)$r['c'];
        $snip = fn($c) => ['userId' => sid($c['user_id']), 'at' => strtotime($c['created_at'] . ' UTC') * 1000, 'body' => mb_substr($c['body'], 0, 90), 'taskId' => sid($c['task_id'])];
        $lastT = [];
        foreach (q('SELECT c.* FROM td_comments c JOIN (SELECT MAX(id) m FROM td_comments WHERE task_id IS NOT NULL GROUP BY task_id) x ON x.m = c.id')->fetchAll() as $c) $lastT[(string)$c['task_id']] = $snip($c);
        $cmtP = [];
        foreach (q('SELECT project_id, SUM(task_id IS NULL) own, COUNT(*) total, MAX(id) m FROM td_comments WHERE project_id IS NOT NULL GROUP BY project_id')->fetchAll() as $r) {
            $cmtP[(string)$r['project_id']] = ['own' => (int)$r['own'], 'all' => (int)$r['total'], 'lastId' => (int)$r['m']];
        }
        if ($cmtP) {
            $byId = [];
            foreach (q('SELECT * FROM td_comments WHERE id IN (' . implode(',', array_map(fn($x) => $x['lastId'], $cmtP)) . ')')->fetchAll() as $c) $byId[(int)$c['id']] = $c;
            foreach ($cmtP as $k => $v) { $cmtP[$k]['last'] = isset($byId[$v['lastId']]) ? $snip($byId[$v['lastId']]) : null; unset($cmtP[$k]['lastId']); }
        }
        $teams = array_map(fn($t) => ['id' => sid($t['id']), 'name' => $t['name'], 'discipline' => $t['discipline'], 'color' => $t['color'],
            'leadId' => sid($t['lead_id']), 'parentId' => sid($t['parent_id']), 'sort' => (int)$t['sort'], 'administrative' => (int)$t['administrative']], q('SELECT * FROM td_teams ORDER BY sort, name')->fetchAll());
        $y = (int)gmdate('Y');
        $holidays = array_map(fn($h) => ['id' => sid($h['id']), 'country' => $h['country'], 'day' => $h['day'], 'name' => $h['name']],
            q('SELECT * FROM td_holidays WHERE day BETWEEN ? AND ? ORDER BY day', [($y - 1) . '-01-01', ($y + 1) . '-12-31'])->fetchAll());
        $lq = $owner ? q('SELECT * FROM td_leaves WHERE end_date >= ? ORDER BY start_date', [($y - 1) . '-01-01'])
            : ($lead ? q('SELECT * FROM td_leaves WHERE end_date >= ? AND user_id IN (' . lead_member_sql($uid) . ',' . $uid . ') ORDER BY start_date', [($y - 1) . '-01-01'])
                                : q('SELECT * FROM td_leaves WHERE user_id = ? ORDER BY start_date', [$uid]));
        $leaves = array_map(fn($l) => ['id' => sid($l['id']), 'userId' => sid($l['user_id']), 'start' => $l['start_date'], 'end' => $l['end_date'],
            'kind' => $l['kind'], 'status' => $l['status'], 'note' => $l['note'], 'leadBy' => sid($l['lead_by']), 'decidedBy' => sid($l['decided_by'])], $lq->fetchAll());
        $weeks = [];
        foreach (q('SELECT * FROM td_weeks WHERE user_id = ? AND week_start >= ?', [$uid, gmdate('Y-m-d', time() - 120 * 86400)])->fetchAll() as $w) {
            $weeks[$w['week_start']] = ['status' => $w['status'], 'note' => $w['note']];
        }
        $pending = 0;
        if ($approver || $lead) {
            $pending = (int)q("SELECT COUNT(*) c FROM td_weeks w JOIN td_users u ON u.id = w.user_id WHERE w.status = 'submitted' AND w.user_id <> ?" .
                ($lead && !$approver ? " AND u.id IN (" . lead_member_sql($uid) . ")" : ''), [$uid])->fetch()['c'];
            $pending += leaves_waiting_for($me);
        }
        $rolePerms = [];
        foreach (['lead', 'accountant', 'employee'] as $r) $rolePerms[$r] = builtin_perms($r);
        out(['me' => user_out($me, true) + ['mustChangePw' => (bool)$me['must_change_pw'], 'perms' => eff_perms($me)], 'csrf' => $session['csrf'],
            'users' => $users, 'roles' => $roles, 'rolePerms' => $rolePerms, 'rolePermsDef' => array_diff_key(TD_ROLE_PERMS, ['owner' => 1]), 'skills' => $skills, 'skillLv' => (object)$skillLv, 'teams' => $teams, 'clients' => $clients, 'upcoming' => $upcoming, 'projects' => $projects, 'phases' => $phases, 'tasks' => $tasks, 'groups' => $groups, 'deps' => $deps, 'subtasks' => $subtasks, 'tags' => $tags, 'timers' => (object)$timers,
            'totals' => (object)$totals, 'team' => ['p' => (object)$team['p'], 'ph' => (object)$team['ph'], 't' => (object)$team['t']], 'fileCounts' => (object)$fileCounts, 'maxUpload' => max_upload_bytes(), 'comments' => (object)$comments, 'commentLast' => (object)$lastT, 'commentsP' => (object)$cmtP, 'holidays' => $holidays, 'leaves' => $leaves,
            'weeks' => (object)$weeks, 'pending' => $pending, 'now' => now_ms(),
            'push' => ['ready' => push_ready(), 'key' => ($vk = vapid_keys()) ? b64u($vk['pub']) : '', 'devices' => (int)q('SELECT COUNT(*) c FROM td_push_subs WHERE user_id = ?', [$uid])->fetch()['c']],
            'notifUnread' => (int)q('SELECT COUNT(*) c FROM td_notifications WHERE user_id = ? AND read_at IS NULL', [$uid])->fetch()['c'],
            'tg' => ['ready' => tg_token() !== '' && tg_bot_name() !== '', 'bot' => tg_bot_name(), 'linked' => !empty($me['tg_chat']), 'on' => (bool)$me['tg_on']],
            'admin' => $fin ? ['cronKey' => $owner ? secret_key('cron_key') : null, 'exportKey' => secret_key('export_key'), 'reminderHour' => (int)cfg('reminder_hour', 18), 'tgReady' => tg_token() !== '' && tg_bot_name() !== '', 'tgBot' => tg_bot_name(),
                'https' => str_starts_with((string)cfg('site_url', ''), 'https://')] : null]);
    }

    case 'logout':
        q('DELETE FROM td_sessions WHERE token_hash = ?', [$session['token_hash']]);
        set_session_cookie('', time() - 3600);
        out(['ok' => true]);

    case 'password_change': {
        $old = (string)($in['old'] ?? '');
        $new = (string)($in['new'] ?? '');
        if (!password_verify($old, $me['pass_hash'])) throw new ApiError('bad_password');
        if (mb_strlen($new) < 8 || mb_strlen($new) > 200) throw new ApiError('weak_password');
        if ($new === $old) throw new ApiError('same_password');
        q('UPDATE td_users SET pass_hash = ?, must_change_pw = 0 WHERE id = ?', [password_hash($new, PASSWORD_DEFAULT), $uid]);
        q('DELETE FROM td_sessions WHERE user_id = ? AND token_hash <> ?', [$uid, $session['token_hash']]);
        out(['ok' => true]);
    }

    /* ----- time tracking (always the signed-in user's own time) ----- */
    case 'timer_start': {
        if (user_is_admin_dept($uid)) throw new ApiError('no_project_hours', 403);
        $p = project_row(s_int($in['projectId'] ?? null));
        if ($p['status'] === 'closed') throw new ApiError('project_closed');
        $tid = check_task_for_project(s_int($in['taskId'] ?? null), (int)$p['id']);
        $phase = check_phase_for_project(s_int($in['phaseId'] ?? null), (int)$p['id']);
        $note = s_str($in['note'] ?? '', 200);
        $tz = (int)($in['tz'] ?? 0);
        if (week_locked($uid, local_date(now_ms(), $tz), $me['country'])) throw new ApiError('week_locked', 409);
        db()->beginTransaction();
        $old = q('SELECT * FROM td_timers WHERE user_id = ? FOR UPDATE', [$uid])->fetch();
        $now = now_ms();
        if ($old && $now - (int)$old['start_ms'] <= 16 * 3600000) {
            $od = local_date((int)$old['start_ms'], $tz);
            if (!week_locked($uid, $od, $me['country'])) {
                insert_entry($uid, (int)$old['project_id'], $old['task_id'] ? (int)$old['task_id'] : null, (int)$old['start_ms'], $now,
                    $od, $old['note'], false, $old['phase_id'] ? (int)$old['phase_id'] : null);
            }
        }
        q('REPLACE INTO td_timers (user_id, project_id, task_id, phase_id, note, start_ms) VALUES (?,?,?,?,?,?)', [$uid, $p['id'], $tid, $phase, $note, $now]);
        db()->commit();
        out(['ok' => true]);
    }

    case 'timer_stop': {
        $t = q('SELECT * FROM td_timers WHERE user_id = ?', [$uid])->fetch();
        if (!$t) out(['ok' => true, 'stopped' => false]);
        $now = now_ms();
        $start = (int)$t['start_ms'];
        if (!empty($in['discard'])) {
            q('DELETE FROM td_timers WHERE user_id = ?', [$uid]);
            out(['ok' => true, 'stopped' => false]);
        }
        if ($now - $start > 10 * 3600000 && empty($in['force'])) out(['ok' => true, 'long' => true]);
        $wd = local_date($start, (int)($in['tz'] ?? 0));
        if (week_locked($uid, $wd, $me['country'])) throw new ApiError('week_locked', 409);
        db()->beginTransaction();
        $id = insert_entry($uid, (int)$t['project_id'], $t['task_id'] ? (int)$t['task_id'] : null, $start, $now,
            $wd, $t['note'], false, $t['phase_id'] ? (int)$t['phase_id'] : null);
        q('DELETE FROM td_timers WHERE user_id = ?', [$uid]);
        db()->commit();
        out(['ok' => true, 'stopped' => true, 'id' => (string)$id]);
    }

    case 'entry_add': {
        if (user_is_admin_dept($uid)) throw new ApiError('no_project_hours', 403);
        $p = project_row(s_int($in['projectId'] ?? null));
        $tid = check_task_for_project(s_int($in['taskId'] ?? null), (int)$p['id']);
        $start = (int)($in['start'] ?? 0);
        $end = (int)($in['end'] ?? 0);
        $date = s_date($in['date'] ?? '', true);
        if ($start <= 0 || $end <= $start) throw new ApiError('bad_time');
        if ($end - $start > 24 * 3600000) throw new ApiError('too_long');
        if ($start > now_ms() + 86400000) throw new ApiError('future_time');
        if (week_locked($uid, $date, $me['country'])) throw new ApiError('week_locked', 409);
        $phase = check_phase_for_project(s_int($in['phaseId'] ?? null), (int)$p['id']);
        $id = insert_entry($uid, (int)$p['id'], $tid, $start, $end, $date, s_str($in['note'] ?? '', 200), true, $phase);
        if (!empty($in['fromTimer'])) q('DELETE FROM td_timers WHERE user_id = ?', [$uid]);
        out(['ok' => true, 'id' => (string)$id]);
    }

    case 'entry_delete': {
        $e = q('SELECT * FROM td_entries WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$e) throw new ApiError('entry_not_found', 404);
        if ((int)$e['user_id'] !== $uid && !is_owner($me)) throw new ApiError('forbidden', 403);
        if (!is_owner($me) && week_locked($uid, $e['work_date'], $me['country'])) throw new ApiError('week_locked', 409);
        q('DELETE FROM td_entries WHERE id = ?', [$e['id']]);
        out(['ok' => true]);
    }

    /* ----- reports: hours over a range of months, scoped to who may see whom ----- */
    case 'report_data': {
        $from = s_ym($_GET['from'] ?? '');
        $to = s_ym($_GET['to'] ?? '');
        if ($to < $from) [$from, $to] = [$to, $from];
        $start = $from . '-01';
        $end = gmdate('Y-m-d', strtotime($to . '-01 +1 month'));
        if ((strtotime($end) - strtotime($start)) / 86400 > 31 * 25) throw new ApiError('range_too_long');
        if (is_finance($me) || has_perm($me, 'see_all')) {
            $ids = array_map(fn($r) => (int)$r['id'], q('SELECT id FROM td_users')->fetchAll());
        } elseif (is_lead($me)) {
            $ids = array_merge([$uid], lead_member_ids($uid));
        } else {
            $ids = [$uid];
        }
        $in = implode(',', array_map('intval', array_unique($ids)));
        $rows = [];
        foreach (q("SELECT work_date, user_id, project_id, phase_id, task_id, SUM(minutes) m FROM td_entries
                    WHERE work_date >= ? AND work_date < ? AND user_id IN ($in)
                    GROUP BY work_date, user_id, project_id, phase_id, task_id ORDER BY work_date", [$start, $end])->fetchAll() as $r) {
            $rows[] = [$r['work_date'], sid($r['user_id']), sid($r['project_id']), sid($r['phase_id']), sid($r['task_id']), (int)$r['m']];
        }
        $weeks = [];
        foreach (q("SELECT user_id, week_start, status FROM td_weeks WHERE week_start >= ? AND week_start < ? AND user_id IN ($in)",
            [day_add($start, -7), $end])->fetchAll() as $w) $weeks[(string)$w['user_id']][$w['week_start']] = $w['status'];
        $leaves = [];
        foreach (q("SELECT user_id, start_date, end_date, kind FROM td_leaves WHERE status = 'approved' AND end_date >= ? AND start_date < ? AND user_id IN ($in)",
            [$start, $end])->fetchAll() as $l) $leaves[] = [sid($l['user_id']), $l['start_date'], $l['end_date'], $l['kind']];
        $holidays = [];
        foreach (q('SELECT country, day, name FROM td_holidays WHERE day >= ? AND day < ?', [$start, $end])->fetchAll() as $h) $holidays[] = [$h['country'], $h['day'], $h['name']];
        $cost = null;
        if (is_finance($me)) {
            $cost = [];
            foreach (labor_rows() as $r) {
                if ($r['ym'] < $from || $r['ym'] > $to || $r['cost'] === null) continue;
                $cost[] = [$r['ym'], sid($r['user_id']), sid($r['project_id']), round($r['cost'], 2)];
            }
        }
        out(['from' => $from, 'to' => $to, 'users' => array_map('strval', array_values(array_unique($ids))), 'rows' => $rows, 'weeks' => (object)$weeks,
            'leaves' => $leaves, 'holidays' => $holidays, 'cost' => $cost]);
    }

    case 'entries_month': {
        $ym = s_ym($_GET['ym'] ?? ($in['ym'] ?? ''));
        $mine = !empty($_GET['mine']) || !(is_finance($me) || has_perm($me, 'see_all'));
        $sql = 'SELECT * FROM td_entries WHERE work_date >= ? AND work_date < ?' . ($mine ? ' AND user_id = ' . $uid : '') . ' ORDER BY start_ms';
        $items = [];
        if (!$mine) foreach (q('SELECT id FROM td_users')->fetchAll() as $u) $items[(string)$u['id']] = [];
        else $items[(string)$uid] = [];
        $next = gmdate('Y-m-d', strtotime($ym . '-01 +1 month'));
        foreach (q($sql, [$ym . '-01', $next])->fetchAll() as $e) $items[(string)$e['user_id']][] = entry_out($e);
        $weeks = [];
        $wsql = 'SELECT * FROM td_weeks WHERE week_start >= ? AND week_start < ?' . ($mine ? ' AND user_id = ' . $uid : '');
        foreach (q($wsql, [day_add($ym . '-01', -7), $next])->fetchAll() as $w) $weeks[(string)$w['user_id']][$w['week_start']] = ['status' => $w['status'], 'note' => $w['note']];
        out(['ym' => $ym, 'items' => (object)$items, 'weeks' => (object)$weeks]);
    }

    /* ----- projects: manager and team leaders ----- */
    case 'project_save': {
        $id = s_int($in['id'] ?? null);
        $row = null;
        if ($id) {
            $row = project_row($id);
            if (!can_edit_row($me, $row)) throw new ApiError('forbidden', 403);
        } elseif (!can_create($me)) {
            throw new ApiError('forbidden', 403);
        }
        $color = preg_match('/^#[0-9A-Fa-f]{6}$/', (string)($in['color'] ?? '')) ? $in['color'] : '#2a78d6';
        $clientId = s_int($in['clientId'] ?? null);
        $clientRow = $clientId ? q('SELECT * FROM td_clients WHERE id = ?', [$clientId])->fetch() : null;
        if ($clientId && !$clientRow) throw new ApiError('client_not_found', 404);
        $v = [s_str($in['code'] ?? '', 40), s_str($in['name'] ?? '', 160, true), $clientRow ? mb_substr($clientRow['name'], 0, 160) : s_str($in['client'] ?? '', 160), s_str($in['location'] ?? '', 160),
            s_num($in['budget'] ?? null, 0, 1e7), $color, s_enum($in['status'] ?? 'active', TD_PSTATUS, 'active'), clean_url((string)($in['folderUrl'] ?? ''))];
        $phIn = is_array($in['phases'] ?? null) ? array_slice($in['phases'], 0, 30) : null;
        db()->beginTransaction();
        if ($id) {
            q('UPDATE td_projects SET code=?, name=?, client=?, location=?, budget_hours=?, color=?, status=?, folder_url=? WHERE id=?', [...$v, $id]);
        } else {
            q('INSERT INTO td_projects (code, name, client, location, budget_hours, color, status, folder_url, created_by, created_at) VALUES (?,?,?,?,?,?,?,?,?,NOW())', [...$v, $uid]);
            $id = (int)db()->lastInsertId();
        }
        if (array_key_exists('tags', $in)) set_tags('td_project_tags', 'project_id', $id, clean_tag_ids($in['tags'], 'project'));
        q('UPDATE td_projects SET priority = ?, client_id = ? WHERE id = ?', [s_enum($in['priority'] ?? 'normal', TD_PPRIO, 'normal'), $clientRow ? $clientId : null, $id]);
        /* The Admin names the project's team leaders; a team leader who creates a project leads it. */
        if (all_projects($me) && is_array($in['leads'] ?? null)) {
            $ok = [];
            foreach (array_slice($in['leads'], 0, 20) as $l) {
                $l = (int)$l;
                if ($l && q("SELECT id FROM td_users WHERE id = ? AND role = 'lead'", [$l])->fetch()) $ok[] = $l;
            }
            $before = lead_ids_of_project($id);
            set_project_leads($id, $ok);
            $pr = q('SELECT * FROM td_projects WHERE id = ?', [$id])->fetch();
            foreach (array_diff($ok, $before) as $l) notify_user($l, 'project_lead', ['p' => trim(($pr['code'] ? $pr['code'] . ' · ' : '') . $pr['name']), 'pid' => (string)$id, 'by' => $me['name']], $uid);
        } elseif (is_lead($me) && !$row) {
            q('INSERT IGNORE INTO td_project_leads (project_id, user_id) VALUES (?,?)', [$id, $uid]);
        }
        if (is_finance($me) && array_key_exists('contractValue', $in)) {
            q('UPDATE td_projects SET contract_value=?, contract_currency=? WHERE id=?',
                [s_num($in['contractValue'] ?? null, 0, 1e12), s_enum($in['contractCurrency'] ?? 'EUR', TD_CURS, 'EUR'), $id]);
        }
        if ($phIn !== null) {
            $existing = [];
            foreach (q('SELECT id FROM td_phases WHERE project_id = ?', [$id])->fetchAll() as $r) $existing[(int)$r['id']] = true;
            $keep = [];
            foreach (array_values($phIn) as $i => $ph) {
                if (!is_array($ph)) continue;
                $name = s_str($ph['name'] ?? '', 120);
                if ($name === '') continue;
                $bud = s_num($ph['budget'] ?? null, 0, 1e7);
                $pid2 = s_int($ph['id'] ?? null);
                if ($pid2 && isset($existing[$pid2])) {
                    q('UPDATE td_phases SET name=?, budget_hours=?, sort=? WHERE id=?', [$name, $bud, $i, $pid2]);
                    $keep[$pid2] = true;
                } else {
                    q('INSERT INTO td_phases (project_id, name, budget_hours, sort) VALUES (?,?,?,?)', [$id, $name, $bud, $i]);
                }
            }
            foreach (array_keys($existing) as $old) {
                if (isset($keep[$old])) continue;
                $used = (int)q('SELECT COUNT(*) c FROM td_entries WHERE phase_id = ?', [$old])->fetch()['c'];
                if ($used > 0) throw new ApiError('phase_has_entries', 409);
                q('UPDATE td_tasks SET phase_id = NULL WHERE phase_id = ?', [$old]);
                q('UPDATE td_timers SET phase_id = NULL WHERE phase_id = ?', [$old]);
                q('DELETE FROM td_phases WHERE id = ?', [$old]);
            }
        }
        db()->commit();
        out(['ok' => true, 'id' => (string)$id]);
    }

    case 'project_delete': {
        $row = project_row(s_int($in['id'] ?? null));
        if (!can_edit_row($me, $row)) throw new ApiError('forbidden', 403);
        $n = (int)q('SELECT COUNT(*) c FROM td_entries WHERE project_id = ?', [$row['id']])->fetch()['c'];
        if ($n > 0) throw new ApiError('project_has_entries', 409);
        db()->beginTransaction();
        q('DELETE FROM td_timers WHERE project_id = ?', [$row['id']]);
        q('DELETE FROM td_comments WHERE project_id = ? OR task_id IN (SELECT id FROM td_tasks WHERE project_id = ?)', [$row['id'], $row['id']]);
        q('DELETE FROM td_task_tags WHERE task_id IN (SELECT id FROM td_tasks WHERE project_id = ?)', [$row['id']]);
        q('DELETE FROM td_project_tags WHERE project_id = ?', [$row['id']]);
        foreach (q("SELECT stored FROM td_files WHERE project_id = ? AND kind = 'file'", [$row['id']])->fetchAll() as $f) {
            if ($f['stored'] && preg_match('/^[a-f0-9]{32}$/', $f['stored'])) @unlink(upload_dir() . '/' . $f['stored']);
        }
        q('DELETE FROM td_files WHERE project_id = ?', [$row['id']]);
        q('DELETE FROM td_task_deps WHERE task_id IN (SELECT id FROM td_tasks WHERE project_id = ?)', [$row['id']]);
        q('DELETE FROM td_tasks WHERE project_id = ?', [$row['id']]);
        q('DELETE FROM td_project_leads WHERE project_id = ?', [$row['id']]);
        q('DELETE FROM td_task_groups WHERE project_id = ?', [$row['id']]);
        q('DELETE FROM td_phases WHERE project_id = ?', [$row['id']]);
        q('DELETE FROM td_projects WHERE id = ?', [$row['id']]);
        db()->commit();
        out(['ok' => true]);
    }

    /* ----- tasks: manager and team leaders create; assignee may change status ----- */
    case 'task_save': {
        $id = s_int($in['id'] ?? null);
        $row = null;
        if ($id) {
            $row = task_row($id);
            if (!can_edit_task($me, $row)) throw new ApiError('forbidden', 403);
        } elseif (!can_create($me)) {
            throw new ApiError('forbidden', 403);
        }
        $p = project_row(s_int($in['projectId'] ?? null));
        if (lead_scoped($me) && (!$row || (int)$row['project_id'] !== (int)$p['id']) && (int)$p['created_by'] !== $uid
            && !in_array((int)$p['id'], lead_project_ids($uid), true)) throw new ApiError('not_your_project', 403);
        $assignee = s_int($in['assignee'] ?? null);
        if ($assignee && !q('SELECT id FROM td_users WHERE id = ?', [$assignee])->fetch()) throw new ApiError('user_not_found');
        /* A team leader assigns work only to their own engineers (or to themselves); an unchanged assignee is kept. */
        if (lead_scoped($me) && $assignee && $assignee !== $uid && !($row && (int)$row['assignee_id'] === $assignee)
            && !in_array($assignee, lead_member_ids($uid), true)) throw new ApiError('not_your_team', 403);
        $start = s_date($in['start'] ?? '');
        $due = s_date($in['due'] ?? '');
        if ($start && $due && $start > $due) throw new ApiError('bad_range');
        $status = s_enum($in['status'] ?? 'todo', TD_STATUSES, 'todo');
        $needsQc = !empty($in['needsQc']) ? 1 : 0;
        $reviewer = $needsQc ? s_int($in['reviewer'] ?? null) : null;
        if ($reviewer && !q('SELECT id FROM td_users WHERE id = ?', [$reviewer])->fetch()) throw new ApiError('user_not_found');
        $v = [(int)$p['id'], s_str($in['title'] ?? '', 200, true), $assignee, s_enum($in['discipline'] ?? 'ARC', TD_DISC, 'ARC'),
            s_enum((string)($in['lod'] ?? ''), TD_LODS, ''), $status,
            s_enum($in['priority'] ?? 'normal', TD_PRIOS, 'normal'), s_num($in['estimate'] ?? null, 0, 1e6), $due,
            s_str($in['spec'] ?? '', 6000), check_phase_for_project(s_int($in['phaseId'] ?? null), (int)$p['id']), clean_links($in['links'] ?? ''), $start];
        $groupIn = array_key_exists('groupId', $in);
        $groupId = $groupIn ? check_group_for_project(s_int($in['groupId'] ?? null), (int)$p['id']) : null;
        db()->beginTransaction();
        if ($id) {
            if ($groupIn) q('UPDATE td_tasks SET group_id = ? WHERE id = ?', [$groupId, $id]);
            elseif ((int)$row['project_id'] !== (int)$p['id']) q('UPDATE td_tasks SET group_id = NULL WHERE id = ?', [$id]);
            if (array_key_exists('milestone', $in)) q('UPDATE td_tasks SET milestone = ? WHERE id = ?', [!empty($in['milestone']) ? 1 : 0, $id]);
            q('UPDATE td_tasks SET project_id=?, title=?, assignee_id=?, discipline=?, lod=?, status=?, priority=?, estimate=?, due=?, spec=?, phase_id=?, links=?, start_date=?,
               done_at = CASE WHEN ? = \'done\' THEN COALESCE(done_at, NOW()) ELSE NULL END, updated_at=NOW() WHERE id=?', [...$v, $status, $id]);
            /* The person editing can always pass the check, so marking a control task done here records them as the checker. */
            $qcDone = $needsQc && $status === 'done';
            q('UPDATE td_tasks SET needs_qc = ?, reviewer_id = ?, qc_by = CASE WHEN ? THEN COALESCE(qc_by, ?) ELSE NULL END,
               qc_at = CASE WHEN ? THEN COALESCE(qc_at, NOW()) ELSE NULL END WHERE id = ?', [$needsQc, $reviewer, $qcDone ? 1 : 0, $uid, $qcDone ? 1 : 0, $id]);
            if ((int)$row['needs_qc'] !== $needsQc) log_act($id, $uid, $needsQc ? 'qc_on' : 'qc_off');
            if ($needsQc && (int)($row['reviewer_id'] ?? 0) !== (int)$reviewer) log_act($id, $uid, 'reviewer', (string)($reviewer ?? ''));
            /* activity: only what changed */
            if ($row['status'] !== $status) log_act($id, $uid, 'status', $row['status'] . '>' . $status);
            if ((int)$row['assignee_id'] !== (int)$assignee) log_act($id, $uid, 'assign', (string)($assignee ?? ''));
            if ((string)($row['due'] ?? '') !== (string)($due ?? '')) log_act($id, $uid, 'due', (string)($due ?? ''));
            if ((string)($row['start_date'] ?? '') !== (string)($start ?? '')) log_act($id, $uid, 'start', (string)($start ?? ''));
            if ($row['priority'] !== $v[6]) log_act($id, $uid, 'priority', $v[6]);
            if ($row['title'] !== $v[1]) log_act($id, $uid, 'title', $v[1]);
        } else {
            q('INSERT INTO td_tasks (project_id, title, assignee_id, discipline, lod, status, priority, estimate, due, spec, phase_id, links, start_date, done_at, created_by, created_at, updated_at)
               VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,' . ($status === 'done' ? 'NOW()' : 'NULL') . ',?,NOW(),NOW())', [...$v, $uid]);
            $id = (int)db()->lastInsertId();
            q('UPDATE td_tasks SET group_id = ?, milestone = ?, sort_order = ? WHERE id = ?', [$groupId, !empty($in['milestone']) ? 1 : 0, next_sort((int)$p['id']), $id]);
            q('UPDATE td_tasks SET needs_qc = ?, reviewer_id = ?, qc_by = ?, qc_at = ' . ($needsQc && $status === 'done' ? 'NOW()' : 'NULL') . ' WHERE id = ?',
              [$needsQc, $reviewer, $needsQc && $status === 'done' ? $uid : null, $id]);
            log_act($id, $uid, 'created');
            if ($needsQc) log_act($id, $uid, 'qc_on');
            if ($assignee) log_act($id, $uid, 'assign', (string)$assignee);
        }
        if (array_key_exists('tags', $in)) set_tags('td_task_tags', 'task_id', $id, clean_tag_ids($in['tags'], 'task'));
        q('UPDATE td_comments SET project_id = ? WHERE task_id = ?', [(int)$p['id'], $id]);
        /* subtasks typed into a new task's form */
        if (!$row && is_array($in['subtasks'] ?? null)) {
            $n = 0;
            foreach (array_slice($in['subtasks'], 0, 50) as $st) {
                $title = s_str($st, 200);
                if ($title === '') continue;
                q('INSERT INTO td_subtasks (task_id, title, sort, created_by, created_at) VALUES (?,?,?,?,NOW())', [$id, $title, $n++, $uid]);
            }
        }
        db()->commit();
        if ($assignee && (!$row || (int)$row['assignee_id'] !== $assignee)) {
            notify_assigned(['id' => $id, 'project_id' => $p['id'], 'title' => $v[1], 'due' => $due], $assignee, $me);
        } elseif ($row && $assignee && (string)($row['due'] ?? '') !== (string)($due ?? '') && $due) {
            notify_user($assignee, 'task_due', ['t' => $v[1], 'p' => project_label((int)$p['id']), 'due' => $due, 'by' => $me['name']], $uid, $id);
        }
        out(['ok' => true, 'id' => (string)$id]);
    }

    case 'task_status': {
        $row = task_row(s_int($in['id'] ?? null));
        if (!can_work_task($me, $row)) throw new ApiError('forbidden', 403);
        $st = s_enum($in['status'] ?? '', TD_STATUSES);
        /* A control task can only be closed by someone who may pass the check; for anyone else "done" means "send for control". */
        $qc = (int)$row['needs_qc'] === 1;
        $sent = false;
        if ($qc && $st === 'done' && !can_qc($me, $row)) { $st = 'review'; $sent = true; }
        if ($st !== $row['status']) {
            $pass = $qc && $st === 'done';
            q("UPDATE td_tasks SET status = ?, done_at = CASE WHEN ? = 'done' THEN COALESCE(done_at, NOW()) ELSE NULL END,
               qc_by = CASE WHEN ? THEN ? ELSE NULL END, qc_at = CASE WHEN ? THEN NOW() ELSE NULL END, updated_at = NOW() WHERE id = ?",
              [$st, $st, $pass ? 1 : 0, $uid, $pass ? 1 : 0, $row['id']]);
            log_act((int)$row['id'], $uid, 'status', $row['status'] . '>' . $st);
            if ($pass) log_act((int)$row['id'], $uid, 'qc_ok');
            if ($qc && $st === 'review') notify_qc($row, $me, 'sent');
            if ($pass) notify_qc($row, $me, 'ok');
            if (!$qc && $st === 'done' && (int)$row['assignee_id'] === $uid && $row['created_by']) {
                notify_user((int)$row['created_by'], 'task_done', ['t' => $row['title'], 'p' => project_label((int)$row['project_id']), 'by' => $me['name']], $uid, (int)$row['id']);
            }
        }
        out(['ok' => true, 'status' => $st, 'sentToQc' => $sent]);
    }

    /* Control check: pass (done) or return to the engineer with notes */
    case 'task_qc': {
        $row = task_row(s_int($in['id'] ?? null));
        if (!can_qc($me, $row)) throw new ApiError('forbidden', 403);
        $ok = ($in['decision'] ?? '') === 'ok';
        $note = s_str($in['note'] ?? '', 2000);
        if (!$ok && $note === '') throw new ApiError('qc_note_required');
        db()->beginTransaction();
        if ($ok) {
            q("UPDATE td_tasks SET status = 'done', done_at = COALESCE(done_at, NOW()), qc_by = ?, qc_at = NOW(), updated_at = NOW() WHERE id = ?", [$uid, $row['id']]);
            if ($row['status'] !== 'done') log_act((int)$row['id'], $uid, 'status', $row['status'] . '>done');
            log_act((int)$row['id'], $uid, 'qc_ok');
        } else {
            q("UPDATE td_tasks SET status = 'doing', done_at = NULL, qc_by = NULL, qc_at = NULL, updated_at = NOW() WHERE id = ?", [$row['id']]);
            if ($row['status'] !== 'doing') log_act((int)$row['id'], $uid, 'status', $row['status'] . '>doing');
            log_act((int)$row['id'], $uid, 'qc_back', mb_substr($note, 0, 200));
        }
        if ($note !== '') {
            q('INSERT INTO td_comments (task_id, project_id, user_id, body, created_at) VALUES (?,?,?,?,NOW())',
              [$row['id'], $row['project_id'], $uid, ($ok ? '✓ QC: ' : '↩ QC: ') . $note]);
        }
        db()->commit();
        notify_qc($row, $me, $ok ? 'ok' : 'back', $note);
        out(['ok' => true]);
    }

    /* Dragging a bar or card in the timeline / calendar: change dates only */
    case 'task_dates': {
        $row = task_row(s_int($in['id'] ?? null));
        if (!can_edit_task($me, $row) && !can_plan($me)) throw new ApiError('forbidden', 403);
        $start = s_date($in['start'] ?? '');
        $due = s_date($in['due'] ?? '');
        if ($start && $due && $start > $due) throw new ApiError('bad_range');
        q('UPDATE td_tasks SET start_date = ?, due = ?, updated_at = NOW() WHERE id = ?', [$start, $due, $row['id']]);
        if ($row['assignee_id'] && $due && (string)($row['due'] ?? '') !== (string)$due) {
            notify_user((int)$row['assignee_id'], 'task_due', ['t' => $row['title'], 'p' => project_label((int)$row['project_id']), 'due' => $due, 'by' => $me['name']], $uid, (int)$row['id']);
        }
        if ((string)($row['start_date'] ?? '') !== (string)($start ?? '')) log_act((int)$row['id'], $uid, 'start', (string)($start ?? ''));
        if ((string)($row['due'] ?? '') !== (string)($due ?? '')) log_act((int)$row['id'], $uid, 'due', (string)($due ?? ''));
        $moved = !empty($in['push']) ? push_successors((int)$row['id'], $uid) : 0;
        out(['ok' => true, 'moved' => $moved]);
    }

    case 'task_delete': {
        $row = task_row(s_int($in['id'] ?? null));
        if (!can_edit_task($me, $row)) throw new ApiError('forbidden', 403);
        db()->beginTransaction();
        q('UPDATE td_entries SET task_id = NULL WHERE task_id = ?', [$row['id']]);
        q('UPDATE td_timers SET task_id = NULL WHERE task_id = ?', [$row['id']]);
        q('DELETE FROM td_comments WHERE task_id = ?', [$row['id']]);
        q('DELETE FROM td_subtasks WHERE task_id = ?', [$row['id']]);
        q('DELETE FROM td_task_tags WHERE task_id = ?', [$row['id']]);
        q('DELETE FROM td_activity WHERE task_id = ?', [$row['id']]);
        q('DELETE FROM td_task_deps WHERE task_id = ? OR pred_id = ?', [$row['id'], $row['id']]);
        q('DELETE FROM td_tasks WHERE id = ?', [$row['id']]);
        db()->commit();
        out(['ok' => true]);
    }

    /* ----- team members: manager only ----- */
    case 'user_save': {
        need_perm($me, 'team');
        $id = s_int($in['id'] ?? null);
        $email = mb_strtolower(s_str($in['email'] ?? '', 190, true));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new ApiError('bad_email');
        $dupe = q('SELECT id FROM td_users WHERE email = ? AND id <> ?', [$email, $id ?? 0])->fetch();
        if ($dupe) throw new ApiError('email_taken', 409);
        $name = s_str($in['name'] ?? '', 120, true);
        $country = s_enum($in['country'] ?? 'DE', TD_COUNTRIES, 'DE');
        $disc = ($in['discipline'] ?? '') === '' ? '' : s_enum($in['discipline'], TD_DISC, 'ARC');
        $topMgmt = !empty($in['topMgmt']) ? 1 : 0;
        $title = s_str($in['jobTitle'] ?? '', 120);
        /* a built-in role, or "c<id>" for a role the Admin made: the person works like a team leader when that role has "lead" */
        $roleId = null;
        if (preg_match('/^c(\d+)$/', (string)($in['role'] ?? ''), $mm)) {
            $roleId = (int)$mm[1];
            if (!q('SELECT id FROM td_roles WHERE id = ?', [$roleId])->fetch()) throw new ApiError('invalid_value');
            $role = in_array('lead', role_perms($roleId), true) ? 'lead' : 'employee';
        } else $role = s_enum($in['role'] ?? 'employee', TD_ROLES, 'employee');
        if (!is_owner($me) && $role === 'owner') throw new ApiError('forbidden', 403);
        $weekly = s_num($in['weeklyHours'] ?? null, 1, 80);
        $active = !empty($in['active']) ? 1 : 0;
        $daily = s_num($in['dailyHours'] ?? 8, 1, 16) ?? 8;
        $notify = !array_key_exists('notify', $in) || !empty($in['notify']) ? 1 : 0;
        $wdIn = is_array($in['workDays'] ?? null) ? array_values(array_unique(array_filter(array_map('intval', $in['workDays']), fn($x) => $x >= 0 && $x <= 6))) : TD_DEFAULT_WORKDAYS;
        if (!$wdIn) throw new ApiError('no_workdays');
        if ($weekly) $daily = max(1, min(16, round($weekly / count($wdIn), 1)));
        $wd = implode(',', $wdIn);
        $allow = s_num($in['leaveAllowance'] ?? TD_DEFAULT_ALLOWANCE, 0, 60) ?? TD_DEFAULT_ALLOWANCE;
        $teamIn = array_key_exists('teamId', $in);
        $teamId = s_int($in['teamId'] ?? null);
        $phoneIn = array_key_exists('phone', $in);
        $phone = clean_phone($in['phone'] ?? '');
        if ($teamId && !q('SELECT id FROM td_teams WHERE id = ?', [$teamId])->fetch()) throw new ApiError('invalid_value');
        $pw = (string)($in['password'] ?? '');
        if ($pw !== '' && (mb_strlen($pw) < 8 || mb_strlen($pw) > 200)) throw new ApiError('weak_password');
        if ($id) {
            $row = q('SELECT * FROM td_users WHERE id = ?', [$id])->fetch();
            if (!$row || !empty($row['deleted'])) throw new ApiError('user_not_found', 404);
            /* Nobody can change their own role or switch themselves off, so there is always at least one active Admin. */
            if ($row['role'] === 'owner' && !is_owner($me)) throw new ApiError('forbidden', 403);
            if ((int)$row['id'] === $uid) { $role = $row['role']; $roleId = $row['role_id'] !== null ? (int)$row['role_id'] : null; $active = 1; }
            q('UPDATE td_users SET email=?, name=?, country=?, discipline=?, job_title=?, role=?, active=?, daily_hours=?, notify=?, work_days=?, leave_allowance=? WHERE id=?',
                [$email, $name, $country, $disc, $title, $role, $active, $daily, $notify, $wd, $allow, $id]);
            q('UPDATE td_users SET role_id = ?, weekly_hours = ?, top_mgmt = ? WHERE id = ?', [$roleId, $weekly, $topMgmt, $id]);
            if ($teamIn) q('UPDATE td_users SET team_id = ? WHERE id = ?', [$teamId, $id]);
            if ($phoneIn) q('UPDATE td_users SET phone = ? WHERE id = ?', [$phone, $id]);
            /* Someone who is no longer a team leader can't keep leading a team. */
            if (!in_array($role, ['lead', 'owner'], true)) q('UPDATE td_teams SET lead_id = NULL WHERE lead_id = ?', [$id]);
            if ($pw !== '') {
                q('UPDATE td_users SET pass_hash=?, must_change_pw=1 WHERE id=?', [password_hash($pw, PASSWORD_DEFAULT), $id]);
                q('DELETE FROM td_sessions WHERE user_id = ?', [$id]);
            }
            if (!$active) q('DELETE FROM td_sessions WHERE user_id = ?', [$id]);
        } else {
            if ($pw === '') throw new ApiError('weak_password');
            q('INSERT INTO td_users (email, pass_hash, name, country, discipline, job_title, role, active, daily_hours, notify, work_days, leave_allowance, team_id, must_change_pw, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,1,NOW())',
                [$email, password_hash($pw, PASSWORD_DEFAULT), $name, $country, $disc, $title, $role, $active, $daily, $notify, $wd, $allow, $teamId]);
            $id = (int)db()->lastInsertId();
            q('UPDATE td_users SET role_id = ?, weekly_hours = ?, top_mgmt = ? WHERE id = ?', [$roleId, $weekly, $topMgmt, $id]);
            if ($phoneIn) q('UPDATE td_users SET phone = ? WHERE id = ?', [$phone, $id]);
        }
        sync_team_leads();
        out(['ok' => true, 'id' => (string)$id]);
    }

    /* ----- v2.14: removing a team member (their past hours stay in the reports) ----- */
    case 'user_delete': {
        need_perm($me, 'team');
        $id = s_int($in['id'] ?? null);
        if ($id === $uid) throw new ApiError('cant_self', 409);
        $row = $id ? q('SELECT * FROM td_users WHERE id = ?', [$id])->fetch() : null;
        if (!$row || !empty($row['deleted'])) throw new ApiError('user_not_found', 404);
        if ($row['role'] === 'owner' && !is_owner($me)) throw new ApiError('forbidden', 403);
        db()->beginTransaction();
        /* The address is freed so it can be used again for someone new. */
        q("UPDATE td_users SET deleted = 1, active = 0, email = ?, tg_chat = NULL, team_id = NULL, phone = '' WHERE id = ?",
          [mb_substr($id . '#deleted#' . $row['email'], 0, 190), $id]);
        q('DELETE FROM td_project_leads WHERE user_id = ?', [$id]);
        q('DELETE FROM td_event_guests WHERE user_id = ?', [$id]);
        q('UPDATE td_teams SET lead_id = NULL WHERE lead_id = ?', [$id]);
        foreach (q("SELECT id FROM td_tasks WHERE assignee_id = ? AND status <> 'done'", [$id])->fetchAll() as $t) {
            q('UPDATE td_tasks SET assignee_id = NULL, updated_at = NOW() WHERE id = ?', [$t['id']]);
            log_act((int)$t['id'], $uid, 'assign', '');
        }
        q('UPDATE td_tasks SET reviewer_id = NULL WHERE reviewer_id = ?', [$id]);
        q('DELETE FROM td_sessions WHERE user_id = ?', [$id]);
        q('DELETE FROM td_timers WHERE user_id = ?', [$id]);
        db()->commit();
        sync_team_leads();
        out(['ok' => true]);
    }

    /* ----- v2.14: handing tasks to engineers, one or many at once ----- */
    case 'task_assign': {
        $ids = array_slice(array_values(array_filter(array_map('s_int', is_array($in['ids'] ?? null) ? $in['ids'] : []))), 0, 500);
        $to = s_int($in['assignee'] ?? null);
        if ($to) {
            $u = q('SELECT id, active, deleted FROM td_users WHERE id = ?', [$to])->fetch();
            if (!$u || !$u['active'] || $u['deleted']) throw new ApiError('user_not_found');
        }
        $done = 0; $skipped = 0; $titles = [];
        db()->beginTransaction();
        foreach ($ids as $tid) {
            $t = q('SELECT * FROM td_tasks WHERE id = ?', [$tid])->fetch();
            if (!$t || !can_assign($me, $t, $to)) { $skipped++; continue; }
            if ((int)$t['assignee_id'] === (int)$to) continue;
            q('UPDATE td_tasks SET assignee_id = ?, updated_at = NOW() WHERE id = ?', [$to, $tid]);
            log_act($tid, $uid, 'assign', (string)($to ?? ''));
            $titles[] = $t;
            $done++;
        }
        db()->commit();
        /* one notice per person, however many tasks they were given */
        if ($to && $titles && $to !== $uid) {
            $first = $titles[0];
            notify_user($to, 'task_assigned', ['t' => $first['title'] . (count($titles) > 1 ? ' +' . (count($titles) - 1) : ''),
                'p' => project_label((int)$first['project_id']), 'due' => $first['due'] ?? '', 'by' => $me['name']], $uid, count($titles) === 1 ? (int)$first['id'] : null);
        }
        out(['ok' => true, 'done' => $done, 'skipped' => $skipped]);
    }

    /* ----- v2.14: links between tasks (finish-to-start and the other three kinds) ----- */
    case 'task_deps_save': {
        $row = task_row(s_int($in['id'] ?? null));
        if (!can_edit_task($me, $row) && !can_plan($me)) throw new ApiError('forbidden', 403);
        $list = array_slice(is_array($in['preds'] ?? null) ? $in['preds'] : [], 0, 40);
        db()->beginTransaction();
        q('DELETE FROM td_task_deps WHERE task_id = ?', [$row['id']]);
        foreach ($list as $d) {
            $pid = s_int($d['id'] ?? null);
            if (!$pid || $pid === (int)$row['id']) continue;
            $pr = q('SELECT id, project_id FROM td_tasks WHERE id = ?', [$pid])->fetch();
            if (!$pr || (int)$pr['project_id'] !== (int)$row['project_id']) continue;
            if (dep_loop((int)$row['id'], $pid)) { db()->rollBack(); throw new ApiError('dep_loop', 409); }
            q('REPLACE INTO td_task_deps (task_id, pred_id, kind, lag_days) VALUES (?,?,?,?)',
              [$row['id'], $pid, s_enum(strtoupper((string)($d['kind'] ?? 'FS')), ['FS', 'SS', 'FF', 'SF'], 'FS'), max(-365, min(365, (int)($d['lag'] ?? 0)))]);
        }
        db()->commit();
        /* the task itself may now have to start later */
        $moved = 0;
        if (!empty($in['push'])) {
            foreach (q('SELECT pred_id FROM td_task_deps WHERE task_id = ?', [$row['id']])->fetchAll() as $r) $moved += push_successors((int)$r['pred_id'], $uid);
        }
        out(['ok' => true, 'moved' => $moved]);
    }

    /* ----- v2.14: schedule groups (summary rows, like in MS Project) ----- */
    case 'group_save': {
        if (!can_plan($me)) throw new ApiError('forbidden', 403);
        $id = s_int($in['id'] ?? null);
        $name = s_str($in['name'] ?? '', 200, true);
        if ($id) {
            $g = group_row($id);
            $parent = array_key_exists('parentId', $in) ? check_group_for_project(s_int($in['parentId'] ?? null), (int)$g['project_id']) : ($g['parent_id'] === null ? null : (int)$g['parent_id']);
            for ($x = $parent, $n = 0; $x && $n < 100; $n++) {
                if ($x === $id) throw new ApiError('team_loop');
                $x = (int)(q('SELECT parent_id FROM td_task_groups WHERE id = ?', [$x])->fetch()['parent_id'] ?? 0);
            }
            q('UPDATE td_task_groups SET name = ?, parent_id = ? WHERE id = ?', [$name, $parent, $id]);
        } else {
            $p = project_row(s_int($in['projectId'] ?? null));
            $parent = check_group_for_project(s_int($in['parentId'] ?? null), (int)$p['id']);
            q('INSERT INTO td_task_groups (project_id, parent_id, name, sort_order) VALUES (?,?,?,?)', [$p['id'], $parent, $name, next_sort((int)$p['id'])]);
            $id = (int)db()->lastInsertId();
        }
        out(['ok' => true, 'id' => (string)$id]);
    }
    case 'group_delete': {
        if (!can_plan($me)) throw new ApiError('forbidden', 403);
        $g = group_row(s_int($in['id'] ?? null));
        db()->beginTransaction();
        q('UPDATE td_task_groups SET parent_id = ? WHERE parent_id = ?', [$g['parent_id'], $g['id']]);
        q('UPDATE td_tasks SET group_id = ? WHERE group_id = ?', [$g['parent_id'], $g['id']]);
        q('DELETE FROM td_task_groups WHERE id = ?', [$g['id']]);
        db()->commit();
        out(['ok' => true]);
    }
    case 'schedule_baseline': {
        if (!can_plan($me)) throw new ApiError('forbidden', 403);
        $p = project_row(s_int($in['projectId'] ?? null));
        q('UPDATE td_tasks SET base_start = start_date, base_due = due WHERE project_id = ?', [$p['id']]);
        out(['ok' => true]);
    }

    /* ----- v2.14: a schedule read from an MS Project XML file (parsed in the browser, checked here) ----- */
    case 'schedule_import': {
        if (!can_plan($me)) throw new ApiError('forbidden', 403);
        $p = project_row(s_int($in['projectId'] ?? null));
        $pid = (int)$p['id'];
        $rows = is_array($in['tasks'] ?? null) ? $in['tasks'] : [];
        if (!$rows) throw new ApiError('missing_field');
        if (count($rows) > 3000) throw new ApiError('too_many');
        $makePhases = !empty($in['phases']);
        $map = is_array($in['assign'] ?? null) ? $in['assign'] : [];
        $mine = lead_scoped($me) ? lead_member_ids($uid) : [];
        $okUser = [];
        foreach ($map as $k => $v) {
            $u = s_int($v);
            if (!$u) continue;
            $ur = q('SELECT id, discipline, active, deleted FROM td_users WHERE id = ?', [$u])->fetch();
            if (!$ur || !$ur['active'] || $ur['deleted']) continue;
            if (lead_scoped($me) && $u !== $uid && !in_array($u, $mine, true)) continue;
            $okUser[(string)$k] = $ur;
        }
        $kind = [0 => 'FF', 1 => 'FS', 2 => 'SF', 3 => 'SS'];
        $stack = []; $phaseOf = []; $uidToTask = []; $uidToGroup = []; $preds = [];
        $created = 0; $updated = 0; $groups = 0; $given = [];
        $phaseSort = (int)q('SELECT COALESCE(MAX(sort), -1) m FROM td_phases WHERE project_id = ?', [$pid])->fetch()['m'];
        db()->beginTransaction();
        foreach (array_values($rows) as $i => $r) {
            $msu = s_int($r['uid'] ?? null);
            $lvl = max(1, min(30, (int)($r['level'] ?? 1)));
            $name = s_str($r['name'] ?? '', 200);
            if ($name === '' || $msu === null) continue;
            $sort = $i + 1;
            $parent = null;
            for ($l = $lvl - 1; $l >= 1; $l--) if (isset($stack[$l])) { $parent = $stack[$l]; break; }
            foreach (array_keys($stack) as $l) if ($l >= $lvl) unset($stack[$l]);
            if (!empty($r['summary'])) {
                $g = q('SELECT id FROM td_task_groups WHERE project_id = ? AND ms_uid = ?', [$pid, $msu])->fetch()
                  ?: q('SELECT id FROM td_task_groups WHERE project_id = ? AND ms_uid IS NULL AND name = ? LIMIT 1', [$pid, $name])->fetch();
                if ($g) q('UPDATE td_task_groups SET ms_uid = ? WHERE id = ?', [$msu, $g['id']]);
                if ($g) { $gid = (int)$g['id']; q('UPDATE td_task_groups SET name = ?, parent_id = ?, sort_order = ? WHERE id = ?', [$name, $parent, $sort, $gid]); }
                else { q('INSERT INTO td_task_groups (project_id, parent_id, name, sort_order, ms_uid) VALUES (?,?,?,?,?)', [$pid, $parent, $name, $sort, $msu]); $gid = (int)db()->lastInsertId(); }
                $groups++;
                $stack[$lvl] = $gid;
                $uidToGroup[$msu] = $gid;
                if ($makePhases && $parent === null) {
                    $ph = q('SELECT id FROM td_phases WHERE project_id = ? AND name = ?', [$pid, mb_substr($name, 0, 120)])->fetch();
                    if (!$ph) { q('INSERT INTO td_phases (project_id, name, budget_hours, sort) VALUES (?,?,NULL,?)', [$pid, mb_substr($name, 0, 120), ++$phaseSort]); $phaseOf[$gid] = (int)db()->lastInsertId(); }
                    else $phaseOf[$gid] = (int)$ph['id'];
                } elseif ($parent !== null && isset($phaseOf[$parent])) $phaseOf[$gid] = $phaseOf[$parent];
                continue;
            }
            $start = s_date($r['start'] ?? '') ?: null;
            $due = s_date($r['finish'] ?? '') ?: $start;
            if ($start && $due && $start > $due) $due = $start;
            $hours = s_num($r['hours'] ?? null, 0, 1e6);
            $ms = !empty($r['milestone']) ? 1 : 0;
            $phase = $parent !== null && isset($phaseOf[$parent]) ? $phaseOf[$parent] : null;
            $who = null;
            foreach ((is_array($r['res'] ?? null) ? $r['res'] : []) as $k) if (isset($okUser[(string)$k])) { $who = $okUser[(string)$k]; break; }
            /* the same task as before: by its MS Project id, or a task made here and exported (matched by title once) */
            $t = q('SELECT * FROM td_tasks WHERE project_id = ? AND ms_uid = ?', [$pid, $msu])->fetch()
              ?: q('SELECT * FROM td_tasks WHERE project_id = ? AND ms_uid IS NULL AND title = ? ORDER BY id LIMIT 1', [$pid, $name])->fetch();
            if ($t) {
                $tid = (int)$t['id'];
                q('UPDATE td_tasks SET ms_uid = ?, title = ?, start_date = ?, due = ?, estimate = ?, milestone = ?, group_id = ?, sort_order = ?,
                   base_start = COALESCE(base_start, ?), base_due = COALESCE(base_due, ?), updated_at = NOW() WHERE id = ?',
                  [$msu, $name, $start, $due, $hours, $ms, $parent, $sort, $start, $due, $tid]);
                if ($phase) q('UPDATE td_tasks SET phase_id = ? WHERE id = ?', [$phase, $tid]);
                if ((string)($t['due'] ?? '') !== (string)($due ?? '')) log_act($tid, $uid, 'due', (string)($due ?? ''));
                if ($who && !$t['assignee_id']) { q('UPDATE td_tasks SET assignee_id = ? WHERE id = ?', [$who['id'], $tid]); log_act($tid, $uid, 'assign', (string)$who['id']); $given[(int)$who['id']][] = $tid; }
                $updated++;
            } else {
                $status = (int)($r['pct'] ?? 0) >= 100 ? 'done' : ((int)($r['pct'] ?? 0) > 0 ? 'doing' : 'todo');
                q('INSERT INTO td_tasks (project_id, title, assignee_id, discipline, lod, status, priority, estimate, due, spec, phase_id, links, start_date, done_at, created_by, created_at, updated_at,
                   group_id, sort_order, milestone, ms_uid, base_start, base_due)
                   VALUES (?,?,?,?,\'\',?,\'normal\',?,?,?,?,\'\',?,' . ($status === 'done' ? 'NOW()' : 'NULL') . ',?,NOW(),NOW(),?,?,?,?,?,?)',
                  [$pid, $name, $who ? $who['id'] : null, $who ? $who['discipline'] : 'ARC', $status, $hours, $due, s_str($r['notes'] ?? '', 6000), $phase, $start, $uid,
                   $parent, $sort, $ms, $msu, $start, $due]);
                $tid = (int)db()->lastInsertId();
                log_act($tid, $uid, 'created');
                if ($who) { log_act($tid, $uid, 'assign', (string)$who['id']); $given[(int)$who['id']][] = $tid; }
                $created++;
            }
            $uidToTask[$msu] = $tid;
            $preds[$tid] = is_array($r['preds'] ?? null) ? array_slice($r['preds'], 0, 40) : [];
        }
        /* links: replaced for every task in the file */
        $links = 0;
        foreach ($preds as $tid => $list) {
            q('DELETE FROM td_task_deps WHERE task_id = ?', [$tid]);
            foreach ($list as $d) {
                $pu = s_int($d['uid'] ?? null);
                if ($pu === null || !isset($uidToTask[$pu]) || $uidToTask[$pu] === $tid) continue;
                q('REPLACE INTO td_task_deps (task_id, pred_id, kind, lag_days) VALUES (?,?,?,?)',
                  [$tid, $uidToTask[$pu], $kind[(int)($d['type'] ?? 1)] ?? 'FS', max(-365, min(365, (int)($d['lag'] ?? 0)))]);
                $links++;
            }
        }
        /* rows that are not in the file (made here, or dropped from the file) go after the imported ones, in their old order */
        $nx = count($rows);
        $keepT = $uidToTask ? implode(',', array_map('intval', array_values($uidToTask))) : '0';
        $keepG = $uidToGroup ? implode(',', array_map('intval', array_values($uidToGroup))) : '0';
        foreach (q("SELECT id FROM td_task_groups WHERE project_id = ? AND id NOT IN ($keepG) ORDER BY sort_order, id", [$pid])->fetchAll() as $g) q('UPDATE td_task_groups SET sort_order = ? WHERE id = ?', [++$nx, $g['id']]);
        foreach (q("SELECT id FROM td_tasks WHERE project_id = ? AND id NOT IN ($keepT) ORDER BY sort_order, id", [$pid])->fetchAll() as $t) q('UPDATE td_tasks SET sort_order = ? WHERE id = ?', [++$nx, $t['id']]);
        /* tasks that came from an earlier file but are not in this one: kept, and reported */
        $missing = [];
        if ($uidToTask) {
            $in_ = implode(',', array_map('intval', array_values($uidToTask)));
            foreach (q("SELECT id FROM td_tasks WHERE project_id = ? AND ms_uid IS NOT NULL AND id NOT IN ($in_)", [$pid])->fetchAll() as $m) $missing[] = (string)$m['id'];
        }
        db()->commit();
        foreach ($given as $to => $tids) {
            if ($to === $uid) continue;
            $first = task_row($tids[0]);
            notify_user($to, 'task_assigned', ['t' => $first['title'] . (count($tids) > 1 ? ' +' . (count($tids) - 1) : ''), 'p' => project_label($pid),
                'due' => $first['due'] ?? '', 'by' => $me['name']], $uid, count($tids) === 1 ? $tids[0] : null);
        }
        out(['ok' => true, 'created' => $created, 'updated' => $updated, 'groups' => $groups, 'links' => $links, 'missing' => $missing]);
    }

    /* ----- organisation tree: Admin only ----- */
    case 'team_save': {
        need_perm($me, 'team');
        $tid = s_int($in['id'] ?? null);
        if ($tid && !q('SELECT id FROM td_teams WHERE id = ?', [$tid])->fetch()) throw new ApiError('team_not_found', 404);
        $name = s_str($in['name'] ?? '', 80, true);
        $disc = s_enum($in['discipline'] ?? 'ARC', TD_DISC, 'ARC');
        $color = preg_match('/^#[0-9A-Fa-f]{6}$/', (string)($in['color'] ?? '')) ? $in['color'] : '#2F7FB5';
        $lead = s_int($in['leadId'] ?? null);
        if ($lead && !q("SELECT id FROM td_users WHERE id = ? AND role IN ('lead','owner')", [$lead])->fetch()) throw new ApiError('invalid_lead');
        $parent = s_int($in['parentId'] ?? null);
        if ($parent) {
            if (!q('SELECT id FROM td_teams WHERE id = ?', [$parent])->fetch()) throw new ApiError('team_not_found', 404);
            /* no loops: the parent can't be this team or one of its sub-teams */
            $p = $parent; $guard = 0;
            while ($p && $guard++ < 50) {
                if ($tid && $p === $tid) throw new ApiError('team_loop');
                $r = q('SELECT parent_id FROM td_teams WHERE id = ?', [$p])->fetch();
                $p = $r ? (int)$r['parent_id'] : 0;
            }
        }
        $members = is_array($in['members'] ?? null) ? array_values(array_unique(array_filter(array_map('intval', $in['members'])))) : null;
        $administrative = !empty($in['administrative']) ? 1 : 0;
        db()->beginTransaction();
        if ($tid) {
            q('UPDATE td_teams SET name = ?, discipline = ?, color = ?, lead_id = ?, parent_id = ?, administrative = ? WHERE id = ?', [$name, $disc, $color, $lead, $parent, $administrative, $tid]);
        } else {
            q('INSERT INTO td_teams (name, discipline, color, lead_id, parent_id, administrative, sort, created_at) VALUES (?,?,?,?,?,?,0,NOW())', [$name, $disc, $color, $lead, $parent, $administrative]);
            $tid = (int)db()->lastInsertId();
        }
        if ($members !== null) {
            $ok = $members ? array_map(fn($r) => (int)$r['id'], q('SELECT id FROM td_users WHERE id IN (' . implode(',', $members) . ')')->fetchAll()) : [];
            q('UPDATE td_users SET team_id = NULL WHERE team_id = ?' . ($ok ? ' AND id NOT IN (' . implode(',', $ok) . ')' : ''), [$tid]);
            if ($ok) q('UPDATE td_users SET team_id = ? WHERE id IN (' . implode(',', $ok) . ')', [$tid]);
        }
        /* The leader sits in the team they lead unless they already belong to another one. */
        if ($lead) q('UPDATE td_users SET team_id = ? WHERE id = ? AND team_id IS NULL', [$tid, $lead]);
        sync_team_leads();
        db()->commit();
        out(['ok' => true, 'id' => (string)$tid]);
    }
    case 'team_delete': {
        need_perm($me, 'team');
        $t = q('SELECT * FROM td_teams WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$t) throw new ApiError('team_not_found', 404);
        db()->beginTransaction();
        q('UPDATE td_teams SET parent_id = ? WHERE parent_id = ?', [$t['parent_id'], $t['id']]);
        q('UPDATE td_users SET team_id = NULL WHERE team_id = ?', [$t['id']]);
        q('DELETE FROM td_teams WHERE id = ?', [$t['id']]);
        sync_team_leads();
        db()->commit();
        out(['ok' => true]);
    }

    /* ----- payroll: admin and accountant ----- */
    case 'pay_get': {
        need_finance($me);
        $ym = s_ym($_GET['ym'] ?? '');
        $people = [];
        foreach (q('SELECT * FROM td_pay_settings')->fetchAll() as $r) {
            $people[(string)$r['user_id']] = ['type' => $r['pay_type'], 'amount' => (float)$r['amount'], 'currency' => $r['currency'], 'target' => (float)$r['target_hours']];
        }
        $fx = [];
        foreach (q('SELECT * FROM td_fx')->fetchAll() as $r) $fx[$r['currency']] = (float)$r['rate'];
        $items = [];
        foreach (q('SELECT * FROM td_pay_months WHERE ym = ?', [$ym])->fetchAll() as $r) {
            $items[(string)$r['user_id']] = ['bonus' => (float)$r['bonus'], 'deduction' => (float)$r['deduction'], 'paid' => (bool)$r['paid']];
        }
        out(['ym' => $ym, 'people' => (object)$people, 'fx' => (object)$fx, 'items' => (object)$items]);
    }

    case 'pay_setting_save': {
        need_finance($me);
        $u = s_int($in['userId'] ?? null);
        if (!$u || !q('SELECT id FROM td_users WHERE id = ?', [$u])->fetch()) throw new ApiError('user_not_found');
        q('REPLACE INTO td_pay_settings (user_id, pay_type, amount, currency, target_hours) VALUES (?,?,?,?,?)',
            [$u, s_enum($in['type'] ?? 'monthly', ['monthly', 'hourly']), s_num($in['amount'] ?? 0, 0) ?? 0, s_enum($in['currency'] ?? 'EUR', TD_CURS), s_num($in['target'] ?? 0, 0, 744) ?? 0]);
        out(['ok' => true]);
    }

    case 'pay_month_save': {
        need_finance($me);
        $ym = s_ym($in['ym'] ?? '');
        $u = s_int($in['userId'] ?? null);
        if (!$u) throw new ApiError('user_not_found');
        $field = s_enum($in['field'] ?? '', ['bonus', 'deduction', 'paid']);
        $val = $field === 'paid' ? (!empty($in['value']) ? 1 : 0) : (s_num($in['value'] ?? 0, 0) ?? 0);
        q("INSERT INTO td_pay_months (ym, user_id, $field) VALUES (?,?,?) ON DUPLICATE KEY UPDATE $field = VALUES($field)", [$ym, $u, $val]);
        out(['ok' => true]);
    }

    case 'fx_save': {
        need_finance($me);
        $cur = s_enum($in['currency'] ?? '', ['USD', 'EGP', 'SYP']);
        q('REPLACE INTO td_fx (currency, rate) VALUES (?, ?)', [$cur, s_num($in['rate'] ?? 0, 0, 1e9) ?? 0]);
        out(['ok' => true]);
    }

    /* ----- weekly approval: submit locks the week; manager or team leader approves or reopens ----- */
    case 'week_submit': {
        $ws = s_date($in['weekStart'] ?? '', true);
        if (week_start($ws, $me['country']) !== $ws) throw new ApiError('invalid_week');
        $today = local_date(now_ms(), (int)($in['tz'] ?? 0));
        if ($ws > $today) throw new ApiError('future_week');
        $t = q('SELECT start_ms FROM td_timers WHERE user_id = ?', [$uid])->fetch();
        if ($t) {
            $td = local_date((int)$t['start_ms'], (int)($in['tz'] ?? 0));
            if ($td >= $ws && $td <= day_add($ws, 6)) throw new ApiError('timer_running', 409);
        }
        $cur = q('SELECT status FROM td_weeks WHERE user_id = ? AND week_start = ?', [$uid, $ws])->fetch();
        if ($cur && $cur['status'] === 'approved') throw new ApiError('already_approved', 409);
        $status = is_owner($me) ? 'approved' : 'submitted';
        q("REPLACE INTO td_weeks (user_id, week_start, status, submitted_at, decided_by, decided_at, note) VALUES (?,?,?,NOW(),?,?, '')",
            [$uid, $ws, $status, is_owner($me) ? $uid : null, is_owner($me) ? gmdate('Y-m-d H:i:s') : null]);
        out(['ok' => true, 'status' => $status]);
    }

    case 'week_decide': {
        $appr = has_perm($me, 'approve');
        if (!is_lead($me) && !$appr) throw new ApiError('forbidden', 403);
        $target = user_row((int)s_int($in['userId'] ?? null));
        if ((int)$target['id'] === $uid && !is_owner($me)) throw new ApiError('forbidden', 403);
        if (!$appr && !in_array($target['role'], ['lead', 'employee'], true)) throw new ApiError('forbidden', 403);
        if (!$appr && !in_array((int)$target['id'], lead_member_ids($uid), true)) throw new ApiError('forbidden', 403);
        $ws = s_date($in['weekStart'] ?? '', true);
        $cur = q('SELECT status FROM td_weeks WHERE user_id = ? AND week_start = ?', [$target['id'], $ws])->fetch();
        if (!$cur) throw new ApiError('week_not_found', 404);
        $dec = s_enum($in['decision'] ?? '', ['approve', 'reject']);
        if ($cur['status'] === 'approved' && !$appr) throw new ApiError('forbidden', 403);
        q('UPDATE td_weeks SET status = ?, decided_by = ?, decided_at = NOW(), note = ? WHERE user_id = ? AND week_start = ?',
            [$dec === 'approve' ? 'approved' : 'rejected', $uid, s_str($in['note'] ?? '', 250), $target['id'], $ws]);
        notify_user((int)$target['id'], $dec === 'approve' ? 'week_ok' : 'week_no', ['ws' => $ws, 'note' => s_str($in['note'] ?? '', 250), 'by' => $me['name']], $uid);
        out(['ok' => true]);
    }

    case 'approvals_list': {
        $appr = has_perm($me, 'approve');
        if (!is_lead($me) && !$appr) throw new ApiError('forbidden', 403);
        $sql = "SELECT w.* FROM td_weeks w JOIN td_users u ON u.id = w.user_id WHERE w.user_id <> ? AND (w.status = 'submitted' OR w.decided_at >= ?)"
            . (!$appr ? " AND u.id IN (" . lead_member_sql($uid) . ")" : '') . ' ORDER BY w.status = \'submitted\' DESC, w.week_start DESC LIMIT 200';
        $list = [];
        foreach (q($sql, [$uid, gmdate('Y-m-d H:i:s', time() - 45 * 86400)])->fetchAll() as $w) {
            $we = day_add($w['week_start'], 6);
            $byP = [];
            $total = 0;
            foreach (q('SELECT project_id, SUM(minutes) m FROM td_entries WHERE user_id = ? AND work_date BETWEEN ? AND ? GROUP BY project_id',
                [$w['user_id'], $w['week_start'], $we])->fetchAll() as $r) { $byP[(string)$r['project_id']] = (int)$r['m']; $total += (int)$r['m']; }
            $list[] = ['userId' => sid($w['user_id']), 'weekStart' => $w['week_start'], 'weekEnd' => $we, 'status' => $w['status'], 'note' => $w['note'],
                'decidedBy' => sid($w['decided_by']), 'minutes' => $total, 'byP' => (object)$byP];
        }
        out(['items' => $list]);
    }

    /* ----- leave: everyone requests their own; the manager decides ----- */
    case 'leave_request': {
        $s = s_date($in['start'] ?? '', true);
        $e = s_date($in['end'] ?? '', true);
        if ($e < $s) throw new ApiError('bad_range');
        if ((strtotime($e) - strtotime($s)) / 86400 > 90) throw new ApiError('too_long');
        $kind = s_enum($in['kind'] ?? 'annual', ['annual', 'sick', 'unpaid', 'other'], 'annual');
        /* Two weeks' notice for everything except sick leave; the manager is exempt. */
        $today = (new DateTimeImmutable('now', new DateTimeZone(TD_TZ[$me['country']] ?? 'Europe/Berlin')))->format('Y-m-d');
        if ($kind !== 'sick' && !is_owner($me) && $s < day_add($today, TD_LEAVE_NOTICE_DAYS)) throw new ApiError('notice_too_short');
        $byYear = leave_days_by_year($me, $s, $e);
        $days = array_sum($byYear);
        if ($days <= 0) throw new ApiError('no_workdays_in_range');
        if ($kind === 'annual') {
            foreach ($byYear as $y => $n) {
                if (annual_taken($me, (int)$y) + $n > (float)$me['leave_allowance']) throw new ApiError('insufficient_balance', 409);
            }
        }
        $status = is_owner($me) ? 'approved' : (first_approvers($me) ? 'pending' : 'lead_approved');
        q('INSERT INTO td_leaves (user_id, start_date, end_date, kind, status, note, days, decided_by, created_at) VALUES (?,?,?,?,?,?,?,?,NOW())',
            [$uid, $s, $e, $kind, $status, s_str($in['note'] ?? '', 250), $days, is_owner($me) ? $uid : null]);
        $ld = ['who' => $me['name'], 's' => $s, 'e' => $e, 'days' => $days, 'kind' => $kind, 'by' => $me['name']];
        if ($status === 'pending') foreach (first_approvers($me) as $a) notify_user($a, 'leave_req', $ld, $uid);
        elseif ($status === 'lead_approved') foreach (approver_ids() as $o) notify_user($o, 'leave_req', $ld, $uid);
        out(['ok' => true, 'status' => $status, 'days' => $days]);
    }

    case 'leave_decide': {
        /* Step 1: the team leader. Step 2: the manager. The manager may decline at any step. */
        $l = q('SELECT * FROM td_leaves WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$l) throw new ApiError('leave_not_found', 404);
        $dec = s_enum($in['decision'] ?? '', ['approved', 'rejected']);
        $who = user_row((int)$l['user_id']);
        if ($l['status'] === 'pending') {
            $isFirst = in_array($uid, first_approvers($who), true);
            if ($dec === 'rejected' && ($isFirst || has_perm($me, 'approve'))) {
                q("UPDATE td_leaves SET status = 'rejected', decided_by = ? WHERE id = ?", [$uid, $l['id']]);
            } elseif ($dec === 'approved' && $isFirst) {
                q("UPDATE td_leaves SET status = 'lead_approved', lead_by = ?, lead_at = NOW() WHERE id = ?", [$uid, $l['id']]);
            } else {
                throw new ApiError(has_perm($me, 'approve') ? 'waiting_for_lead' : 'forbidden', 403);
            }
        } elseif ($l['status'] === 'lead_approved') {
            need_perm($me, 'approve');
            q('UPDATE td_leaves SET status = ?, decided_by = ? WHERE id = ?', [$dec, $uid, $l['id']]);
        } else {
            throw new ApiError('already_decided', 409);
        }
        $now = q('SELECT status FROM td_leaves WHERE id = ?', [$l['id']])->fetch()['status'];
        $ld = ['who' => $who['name'], 's' => $l['start_date'], 'e' => $l['end_date'], 'days' => (float)$l['days'], 'kind' => $l['kind'], 'by' => $me['name']];
        $map = ['lead_approved' => 'leave_lead', 'approved' => 'leave_ok', 'rejected' => 'leave_no'];
        if (isset($map[$now])) notify_user((int)$who['id'], $map[$now], $ld, $uid);
        if ($now === 'lead_approved') foreach (approver_ids() as $o) notify_user($o, 'leave_req', $ld, $uid);
        out(['ok' => true]);
    }

    case 'leave_cancel': {
        $l = q('SELECT * FROM td_leaves WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$l) throw new ApiError('leave_not_found', 404);
        if (!is_owner($me) && !((int)$l['user_id'] === $uid && in_array($l['status'], ['pending', 'lead_approved'], true))) throw new ApiError('forbidden', 403);
        q('DELETE FROM td_leaves WHERE id = ?', [$l['id']]);
        out(['ok' => true]);
    }

    case 'holiday_add': {
        need_perm($me, 'holidays');
        q('INSERT INTO td_holidays (country, day, name) VALUES (?,?,?) ON DUPLICATE KEY UPDATE name = VALUES(name)',
            [s_enum($in['country'] ?? '', TD_COUNTRIES), s_date($in['day'] ?? '', true), s_str($in['name'] ?? '', 120, true)]);
        out(['ok' => true]);
    }

    case 'holiday_delete': {
        need_perm($me, 'holidays');
        q('DELETE FROM td_holidays WHERE id = ?', [s_int($in['id'] ?? null)]);
        out(['ok' => true]);
    }

    case 'holidays_seed_de': {
        need_perm($me, 'holidays');
        $y = (int)($in['year'] ?? 0);
        if ($y < 2020 || $y > 2100) throw new ApiError('invalid_value');
        foreach (german_holidays($y) as $d => $n) q('INSERT IGNORE INTO td_holidays (country, day, name) VALUES (?,?,?)', ['DE', $d, $n]);
        out(['ok' => true]);
    }

    /* ----- tags: Admins and team leaders create them; Admins and the creator edit; Admins delete ----- */
    case 'tag_save': {
        if (!can_create($me)) throw new ApiError('forbidden', 403);
        $id = s_int($in['id'] ?? null);
        $name = s_str($in['name'] ?? '', 40, true);
        $color = preg_match('/^#[0-9A-Fa-f]{6}$/', (string)($in['color'] ?? '')) ? $in['color'] : '#2F7FB5';
        $scope = s_enum($in['scope'] ?? 'task', ['project', 'task'], 'task');
        if ($id) {
            $cur = q('SELECT scope FROM td_tags WHERE id = ?', [$id])->fetch();
            if ($cur) $scope = $cur['scope'];
        }
        $dupe = q('SELECT id FROM td_tags WHERE scope = ? AND name = ? AND id <> ?', [$scope, $name, $id ?? 0])->fetch();
        if ($dupe) {
            if (!$id) out(['ok' => true, 'id' => (string)$dupe['id'], 'existing' => true]);
            throw new ApiError('tag_exists', 409);
        }
        if ($id) {
            $g = q('SELECT * FROM td_tags WHERE id = ?', [$id])->fetch();
            if (!$g) throw new ApiError('tag_not_found', 404);
            if (!can_edit_row($me, $g)) throw new ApiError('forbidden', 403);
            q('UPDATE td_tags SET name = ?, color = ? WHERE id = ?', [$name, $color, $id]);
        } else {
            if ((int)q('SELECT COUNT(*) c FROM td_tags')->fetch()['c'] >= 200) throw new ApiError('too_many');
            q('INSERT INTO td_tags (name, color, scope, created_by, created_at) VALUES (?,?,?,?,NOW())', [$name, $color, $scope, $uid]);
            $id = (int)db()->lastInsertId();
        }
        out(['ok' => true, 'id' => (string)$id]);
    }

    case 'tag_delete': {
        need_owner($me);
        $id = s_int($in['id'] ?? null);
        db()->beginTransaction();
        q('DELETE FROM td_task_tags WHERE tag_id = ?', [$id]);
        q('DELETE FROM td_project_tags WHERE tag_id = ?', [$id]);
        q('DELETE FROM td_tags WHERE id = ?', [$id]);
        db()->commit();
        out(['ok' => true]);
    }

    /* ----- subtasks: manager, the task's team leader, or the assignee ----- */
    case 'subtask_add': {
        $t = task_row(s_int($in['taskId'] ?? null));
        if (!can_work_task($me, $t)) throw new ApiError('forbidden', 403);
        if ((int)q('SELECT COUNT(*) c FROM td_subtasks WHERE task_id = ?', [$t['id']])->fetch()['c'] >= 100) throw new ApiError('too_many');
        $next = (int)q('SELECT COALESCE(MAX(sort), -1) + 1 n FROM td_subtasks WHERE task_id = ?', [$t['id']])->fetch()['n'];
        q('INSERT INTO td_subtasks (task_id, title, sort, created_by, created_at) VALUES (?,?,?,?,NOW())', [$t['id'], s_str($in['title'] ?? '', 200, true), $next, $uid]);
        $sid = (int)db()->lastInsertId();
        q('UPDATE td_tasks SET updated_at = NOW() WHERE id = ?', [$t['id']]);
        out(['ok' => true, 'id' => (string)$sid]);
    }

    case 'subtask_save': {
        $st = q('SELECT * FROM td_subtasks WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$st) throw new ApiError('subtask_not_found', 404);
        $t = task_row((int)$st['task_id']);
        if (!can_work_task($me, $t)) throw new ApiError('forbidden', 403);
        if (array_key_exists('done', $in)) {
            $done = !empty($in['done']) ? 1 : 0;
            if ($done !== (int)$st['done']) {
                q('UPDATE td_subtasks SET done = ?, done_by = ? WHERE id = ?', [$done, $done ? $uid : null, $st['id']]);
                log_act((int)$t['id'], $uid, $done ? 'sub_done' : 'sub_open', $st['title']);
            }
        }
        if (array_key_exists('title', $in)) q('UPDATE td_subtasks SET title = ? WHERE id = ?', [s_str($in['title'], 200, true), $st['id']]);
        q('UPDATE td_tasks SET updated_at = NOW() WHERE id = ?', [$t['id']]);
        out(['ok' => true]);
    }

    case 'subtask_delete': {
        $st = q('SELECT * FROM td_subtasks WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$st) throw new ApiError('subtask_not_found', 404);
        if (!can_work_task($me, task_row((int)$st['task_id']))) throw new ApiError('forbidden', 403);
        q('DELETE FROM td_subtasks WHERE id = ?', [$st['id']]);
        out(['ok' => true]);
    }

    case 'activity_list': {
        $t = task_row(s_int($_GET['task'] ?? null));
        $list = array_map(fn($a) => ['id' => sid($a['id']), 'userId' => sid($a['user_id']), 'kind' => $a['kind'], 'detail' => $a['detail'],
            'at' => strtotime($a['created_at'] . ' UTC') * 1000], q('SELECT * FROM td_activity WHERE task_id = ? ORDER BY id DESC LIMIT 60', [$t['id']])->fetchAll());
        out(['items' => $list]);
    }

    /* ----- project files and links: the whole team adds and opens them; the uploader or an Admin deletes ----- */
    case 'files_list': {
        if (($_GET['project'] ?? '') === 'company') {
            $rows = q("SELECT * FROM td_files WHERE scope = 'company'" . (is_finance($me) || has_perm($me, 'company') ? '' : " AND visibility = 'all'") . ' ORDER BY created_at DESC, id DESC')->fetchAll();
            out(['items' => array_map('file_out', $rows)]);
        }
        $p = project_row(s_int($_GET['project'] ?? null));
        $rows = q("SELECT * FROM td_files WHERE project_id = ? AND scope = 'project' ORDER BY created_at DESC, id DESC", [$p['id']])->fetchAll();
        out(['items' => array_map('file_out', $rows)]);
    }

    case 'file_upload': {
        if (!empty($me['readonly'])) throw new ApiError('forbidden', 403);
        $company = ($in['projectId'] ?? '') === 'company';
        if ($company) { need_perm($me, 'company'); $p = ['id' => null]; } else $p = project_row(s_int($in['projectId'] ?? null));
        $f = $_FILES['file'] ?? null;
        if (!$f || !is_array($f) || is_array($f['error'])) throw new ApiError('no_file');
        if ($f['error'] === UPLOAD_ERR_INI_SIZE || $f['error'] === UPLOAD_ERR_FORM_SIZE) throw new ApiError('file_too_big', 413);
        if ($f['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($f['tmp_name'])) throw new ApiError('upload_failed', 500);
        if ((int)$f['size'] > max_upload_bytes()) throw new ApiError('file_too_big', 413);
        $orig = trim(preg_replace('/[\x00-\x1f\/\\\\]+/u', '_', (string)$f['name']));
        $orig = mb_substr($orig !== '' ? $orig : 'file', 0, 200);
        $ext = strtolower(pathinfo($orig, PATHINFO_EXTENSION));
        if (!in_array($ext, TD_FILE_EXT, true) && !($company && in_array($ext, TD_CFILE_EXTRA, true))) throw new ApiError('file_type', 415);
        $stored = bin2hex(random_bytes(16));
        if (!move_uploaded_file($f['tmp_name'], upload_dir() . '/' . $stored)) throw new ApiError('upload_failed', 500);
        $mime = function_exists('mime_content_type') ? (string)@mime_content_type(upload_dir() . '/' . $stored) : '';
        $title = s_str($in['title'] ?? '', 200);
        q('INSERT INTO td_files (project_id, kind, title, stored, orig_name, mime, size, category, note, created_by, created_at, scope, visibility) VALUES (?,?,?,?,?,?,?,?,?,?,NOW(),?,?)',
            [$p['id'], 'file', $title !== '' ? $title : $orig, $stored, $orig, mb_substr($mime, 0, 120), (int)$f['size'],
             s_enum($in['category'] ?? 'other', $company ? TD_CFILE_CATS : TD_FILE_CATS, 'other'), s_str($in['note'] ?? '', 255), $uid,
             $company ? 'company' : 'project', $company ? s_enum($in['visibility'] ?? 'all', ['all', 'admin'], 'all') : 'all']);
        out(['ok' => true, 'item' => file_out(q('SELECT * FROM td_files WHERE id = ?', [(int)db()->lastInsertId()])->fetch())]);
    }

    case 'link_add': {
        $company = ($in['projectId'] ?? '') === 'company';
        if ($company) { need_perm($me, 'company'); $p = ['id' => null]; } else $p = project_row(s_int($in['projectId'] ?? null));
        $url = clean_url((string)($in['url'] ?? ''));
        if ($url === '') throw new ApiError('bad_url');
        $title = s_str($in['title'] ?? '', 200);
        q('INSERT INTO td_files (project_id, kind, title, url, category, note, created_by, created_at, scope, visibility) VALUES (?,?,?,?,?,?,?,NOW(),?,?)',
            [$p['id'], 'link', $title !== '' ? $title : preg_replace('#^https?://#i', '', mb_substr($url, 0, 200)), $url,
             s_enum($in['category'] ?? 'other', $company ? TD_CFILE_CATS : TD_FILE_CATS, 'other'), s_str($in['note'] ?? '', 255), $uid,
             $company ? 'company' : 'project', $company ? s_enum($in['visibility'] ?? 'all', ['all', 'admin'], 'all') : 'all']);
        out(['ok' => true, 'item' => file_out(q('SELECT * FROM td_files WHERE id = ?', [(int)db()->lastInsertId()])->fetch())]);
    }

    case 'file_update': {
        $f = q('SELECT * FROM td_files WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$f) throw new ApiError('file_not_found', 404);
        $co = $f['scope'] === 'company';
        if ((int)$f['created_by'] !== $uid && !is_owner($me) && !($co && has_perm($me, 'company'))) throw new ApiError('forbidden', 403);
        $url = $f['kind'] === 'link' ? clean_url((string)($in['url'] ?? $f['url'])) : null;
        if ($f['kind'] === 'link' && $url === '') throw new ApiError('bad_url');
        q('UPDATE td_files SET title = ?, category = ?, note = ?, url = ?, visibility = ? WHERE id = ?', [s_str($in['title'] ?? $f['title'], 200, true),
            s_enum($in['category'] ?? $f['category'], $co ? TD_CFILE_CATS : TD_FILE_CATS, 'other'), s_str($in['note'] ?? $f['note'], 255), $url,
            $co ? s_enum($in['visibility'] ?? $f['visibility'], ['all', 'admin'], 'all') : 'all', $f['id']]);
        out(['ok' => true]);
    }

    case 'file_delete': {
        $f = q('SELECT * FROM td_files WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$f) throw new ApiError('file_not_found', 404);
        if ((int)$f['created_by'] !== $uid && !is_owner($me) && !($f['scope'] === 'company' && has_perm($me, 'company'))) throw new ApiError('forbidden', 403);
        if ($f['kind'] === 'file' && $f['stored'] && preg_match('/^[a-f0-9]{32}$/', $f['stored'])) @unlink(upload_dir() . '/' . $f['stored']);
        q('DELETE FROM td_files WHERE id = ?', [$f['id']]);
        out(['ok' => true]);
    }

    case 'file_get': {
        $f = q("SELECT * FROM td_files WHERE id = ? AND kind = 'file'", [s_int($_GET['id'] ?? null)])->fetch();
        if (!$f || !preg_match('/^[a-f0-9]{32}$/', (string)$f['stored'])) throw new ApiError('file_not_found', 404);
        if ($f['scope'] === 'company' && $f['visibility'] === 'admin' && !is_finance($me) && !has_perm($me, 'company')) throw new ApiError('file_not_found', 404);
        $path = upload_dir() . '/' . $f['stored'];
        if (!is_file($path)) throw new ApiError('file_not_found', 404);
        $ext = strtolower(pathinfo((string)$f['orig_name'], PATHINFO_EXTENSION));
        $inline = !empty($_GET['view']) && in_array($ext, TD_INLINE_EXT, true);
        $types = ['pdf' => 'application/pdf', 'png' => 'image/png', 'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'webp' => 'image/webp'];
        $name = (string)$f['orig_name'];
        $ascii = preg_replace('/[^A-Za-z0-9._-]+/', '_', $name);
        header('Content-Type: ' . ($inline ? $types[$ext] : 'application/octet-stream'));
        header('Content-Length: ' . filesize($path));
        header('Content-Disposition: ' . ($inline ? 'inline' : 'attachment') . '; filename="' . $ascii . '"; filename*=UTF-8\'\'' . rawurlencode($name));
        header('Cache-Control: private, no-store');
        header("Content-Security-Policy: default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; sandbox");
        readfile($path);
        exit;
    }

    /* ----- comments on tasks and projects: everyone reads; task comments need the task's people, project comments are open to the team ----- */
    case 'comments_list': {
        if (!empty($_GET['project'])) {
            $p = project_row(s_int($_GET['project']));
            $rows = q('SELECT * FROM td_comments WHERE project_id = ? ORDER BY id DESC LIMIT 200', [$p['id']])->fetchAll();
        } else {
            $t = task_row(s_int($_GET['task'] ?? null));
            $rows = q('SELECT * FROM td_comments WHERE task_id = ? ORDER BY id DESC LIMIT 200', [$t['id']])->fetchAll();
        }
        out(['items' => array_map('comment_out', array_reverse($rows))]);
    }

    case 'comments_feed': {
        $where = [];
        $args = [];
        if ($pid = s_int($_GET['project'] ?? null)) { $where[] = 'project_id = ?'; $args[] = $pid; }
        if ($tid = s_int($_GET['task'] ?? null)) { $where[] = 'task_id = ?'; $args[] = $tid; }
        $kind = (string)($_GET['kind'] ?? '');
        if ($kind === 'project') $where[] = 'task_id IS NULL';
        if ($kind === 'task') $where[] = 'task_id IS NOT NULL';
        if ($uidF = s_int($_GET['user'] ?? null)) { $where[] = 'user_id = ?'; $args[] = $uidF; }
        $qq = trim((string)($_GET['q'] ?? ''));
        if ($qq !== '') { $where[] = 'body LIKE ?'; $args[] = '%' . addcslashes(mb_substr($qq, 0, 80), '%_\\') . '%'; }
        /* Matches can be replies; the page shows whole threads, newest first, each with all its replies. */
        $before = s_int($_GET['before'] ?? null);
        $hits = q('SELECT id, parent_id FROM td_comments' . ($where ? ' WHERE ' . implode(' AND ', $where) : '') . ' ORDER BY id DESC LIMIT 2000', $args)->fetchAll();
        $par = [];
        foreach ($hits as $h) $par[(int)$h['id']] = (int)$h['parent_id'];
        for ($i = 0; $i < 20; $i++) {
            $need = array_values(array_unique(array_filter(array_values($par), fn($p) => $p && !array_key_exists($p, $par))));
            if (!$need) break;
            foreach (q('SELECT id, parent_id FROM td_comments WHERE id IN (' . implode(',', $need) . ')')->fetchAll() as $r) $par[(int)$r['id']] = (int)$r['parent_id'];
            foreach ($need as $n) if (!array_key_exists($n, $par)) $par[$n] = 0;
        }
        $rootOf = function (int $id) use ($par): int { $g = 0; while (!empty($par[$id]) && $g++ < 30) $id = $par[$id]; return $id; };
        $roots = [];
        foreach ($hits as $h) $roots[$rootOf((int)$h['id'])] = true;
        $roots = array_keys($roots);
        rsort($roots);
        if ($before) $roots = array_values(array_filter($roots, fn($r) => $r < $before));
        $more = count($roots) > 40;
        $roots = array_slice($roots, 0, 40);
        $all = $roots;
        $level = $roots;
        for ($i = 0; $i < 20 && $level; $i++) {
            $level = array_map(fn($r) => (int)$r['id'], q('SELECT id FROM td_comments WHERE parent_id IN (' . implode(',', $level) . ')')->fetchAll());
            $all = array_merge($all, $level);
        }
        $rows = $all ? q('SELECT * FROM td_comments WHERE id IN (' . implode(',', $all) . ')')->fetchAll() : [];
        $pos = array_flip($roots);
        usort($rows, fn($a, $b) => (isset($pos[(int)$a['id']]) ? $pos[(int)$a['id']] : 1e9 + (int)$a['id']) <=> (isset($pos[(int)$b['id']]) ? $pos[(int)$b['id']] : 1e9 + (int)$b['id']));
        out(['items' => array_map('comment_out', $rows), 'more' => $more]);
    }

    case 'comment_add': {
        $body = s_str($in['body'] ?? '', 2000, true);
        /* A reply always hangs from the first comment of its thread, and lives where that comment lives. */
        $parent = null;
        if (!empty($in['parentId'])) {
            $parent = q('SELECT * FROM td_comments WHERE id = ?', [s_int($in['parentId'])])->fetch();
            if (!$parent) throw new ApiError('comment_not_found', 404);
            $replyTo = q('SELECT user_id FROM td_comments WHERE id = ?', [s_int($in['parentId'])])->fetch();
            if ($parent['task_id']) { $in['taskId'] = (string)$parent['task_id']; unset($in['projectId']); }
            else { unset($in['taskId']); $in['projectId'] = (string)$parent['project_id']; }
        }
        if (!empty($in['taskId'])) {
            $t = task_row(s_int($in['taskId']));
            if (!can_create($me) && (int)$t['assignee_id'] !== $uid && (int)$t['created_by'] !== $uid) throw new ApiError('forbidden', 403);
            q('INSERT INTO td_comments (task_id, project_id, user_id, body, parent_id, created_at) VALUES (?,?,?,?,?,NOW())', [$t['id'], $t['project_id'], $uid, $body, $parent ? $parent['id'] : null]);
            $cid = (string)db()->lastInsertId();
            $d = ['t' => $t['title'], 'p' => project_label((int)$t['project_id']), 'pid' => (string)$t['project_id'], 'body' => mb_substr($body, 0, 300), 'by' => $me['name']];
            $tid = (int)$t['id'];
            $watch = [(int)$t['assignee_id'], (int)$t['created_by'], (int)($t['reviewer_id'] ?? 0)];
        } else {
            $p = project_row(s_int($in['projectId'] ?? null));
            q('INSERT INTO td_comments (task_id, project_id, user_id, body, parent_id, created_at) VALUES (NULL,?,?,?,?,NOW())', [$p['id'], $uid, $body, $parent ? $parent['id'] : null]);
            $cid = (string)db()->lastInsertId();
            $d = ['t' => '', 'p' => project_label((int)$p['id']), 'pid' => (string)$p['id'], 'body' => mb_substr($body, 0, 300), 'by' => $me['name']];
            $tid = null;
            $watch = [(int)$p['created_by']];
        }
        /* People named with @ get a "mention"; the task's assignee, creator and checker get a "comment". */
        $ment = mentioned_users($body);
        foreach ($ment as $m) notify_user($m, 'mention', $d, $uid, $tid);
        if ($parent) {
            $rt = array_unique(array_filter([(int)$replyTo['user_id'], (int)$parent['user_id']]));
            foreach ($rt as $r) if (!in_array($r, $ment, true)) { notify_user($r, 'reply', $d, $uid, $tid); $ment[] = $r; }
        }
        foreach (array_unique(array_filter($watch)) as $w) if (!in_array($w, $ment, true)) notify_user($w, 'comment', $d, $uid, $tid);
        out(['ok' => true, 'id' => $cid]);
    }

    case 'comment_delete': {
        $c = q('SELECT * FROM td_comments WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$c) throw new ApiError('comment_not_found', 404);
        if ((int)$c['user_id'] !== $uid && !is_owner($me)) throw new ApiError('forbidden', 403);
        /* the comment and every reply below it */
        $ids = [(int)$c['id']];
        $level = $ids;
        for ($i = 0; $i < 20 && $level; $i++) {
            $level = array_map(fn($r) => (int)$r['id'], q('SELECT id FROM td_comments WHERE parent_id IN (' . implode(',', $level) . ')')->fetchAll());
            $ids = array_merge($ids, $level);
        }
        q('DELETE FROM td_comments WHERE id IN (' . implode(',', $ids) . ')');
        out(['ok' => true]);
    }

    /* ----- profitability and accounting export: admin and accountant ----- */
    case 'profit': {
        need_finance($me);
        $by = [];
        foreach (labor_rows() as $r) {
            $k = (string)$r['project_id'];
            $by[$k] = $by[$k] ?? ['minutes' => 0, 'costEur' => 0.0, 'missing' => false];
            $by[$k]['minutes'] += $r['m'];
            if ($r['cost'] === null) $by[$k]['missing'] = true; else $by[$k]['costEur'] += $r['cost'];
        }
        foreach ($by as &$b) $b['costEur'] = round($b['costEur'], 2);
        out(['projects' => (object)$by]);
    }

    /* ----- clients ----- */
    case 'client_save': {
        if (!can_create($me) && !has_perm($me, 'clients')) throw new ApiError('forbidden', 403);
        $cid = s_int($in['id'] ?? null);
        if ($cid && !has_perm($me, 'clients')) throw new ApiError('forbidden', 403);
        $email = trim((string)($in['email'] ?? ''));
        if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) throw new ApiError('bad_email');
        $site = trim((string)($in['website'] ?? ''));
        if ($site !== '' && !preg_match('#^https?://#i', $site)) $site = 'https://' . $site;
        $v = [s_str($in['name'] ?? '', 160, true), s_str($in['contact'] ?? '', 120), mb_substr($email, 0, 190), s_str($in['phone'] ?? '', 60), s_str($in['country'] ?? '', 80),
            $site !== '' ? clean_url($site) : '', s_str($in['notes'] ?? '', 2000)];
        if ($cid) {
            if (!q('SELECT id FROM td_clients WHERE id = ?', [$cid])->fetch()) throw new ApiError('client_not_found', 404);
            q('UPDATE td_clients SET name=?, contact=?, email=?, phone=?, country=?, website=?, notes=? WHERE id=?', [...$v, $cid]);
            q('UPDATE td_projects SET client = ? WHERE client_id = ?', [mb_substr($v[0], 0, 160), $cid]);
        } else {
            q('INSERT INTO td_clients (name, contact, email, phone, country, website, notes, created_by, created_at) VALUES (?,?,?,?,?,?,?,?,NOW())', [...$v, $uid]);
            $cid = (int)db()->lastInsertId();
        }
        out(['ok' => true, 'id' => (string)$cid]);
    }
    case 'client_delete': {
        need_perm($me, 'clients');
        $cid = s_int($in['id'] ?? null);
        if ((int)q('SELECT COUNT(*) c FROM td_projects WHERE client_id = ?', [$cid])->fetch()['c'] > 0) throw new ApiError('client_has_projects', 409);
        q('DELETE FROM td_clients WHERE id = ?', [$cid]);
        out(['ok' => true]);
    }

    /* ----- share of hours: who worked on which project, for a period ----- */
    case 'work_split': {
        $from = s_date($_GET['from'] ?? '') ?: '2000-01-01';
        $to = s_date($_GET['to'] ?? '') ?: '2999-12-31';
        $scope = '';
        if (!is_finance($me) && !has_perm($me, 'see_all')) $scope = is_lead($me) ? ' AND user_id IN (' . lead_member_sql($uid) . ',' . $uid . ')' : ' AND user_id = ' . $uid;
        $rows = q('SELECT user_id, project_id, SUM(minutes) m FROM td_entries WHERE work_date BETWEEN ? AND ?' . $scope . ' GROUP BY user_id, project_id', [$from, $to])->fetchAll();
        out(['items' => array_map(fn($r) => ['u' => (string)$r['user_id'], 'p' => (string)$r['project_id'], 'm' => (int)$r['m']], $rows)]);
    }

    /* ----- planner: meetings and events, seen only by the organiser and the people invited ----- */
    case 'events_list': {
        $from = (int)($_GET['from'] ?? 0);
        $to = (int)($_GET['to'] ?? 0) ?: PHP_INT_MAX;
        $evs = q('SELECT DISTINCT e.* FROM td_events e LEFT JOIN td_event_guests g ON g.event_id = e.id AND g.user_id = ?
                  WHERE (e.created_by = ? OR g.user_id IS NOT NULL) AND e.end_ms >= ? AND e.start_ms <= ? ORDER BY e.start_ms LIMIT 500', [$uid, $uid, $from, $to])->fetchAll();
        $gs = [];
        if ($evs) foreach (q('SELECT * FROM td_event_guests WHERE event_id IN (' . implode(',', array_map(fn($e) => (int)$e['id'], $evs)) . ')')->fetchAll() as $g)
            $gs[(int)$g['event_id']][] = ['userId' => (string)$g['user_id'], 'response' => $g['response']];
        out(['items' => array_map(fn($e) => event_out($e, $gs[(int)$e['id']] ?? []), $evs)]);
    }
    case 'event_save': {
        $eid = s_int($in['id'] ?? null);
        $old = null;
        if ($eid) {
            $old = q('SELECT * FROM td_events WHERE id = ?', [$eid])->fetch();
            if (!$old) throw new ApiError('event_not_found', 404);
            if ((int)$old['created_by'] !== $uid) throw new ApiError('forbidden', 403);
        }
        $start = (int)($in['start'] ?? 0);
        $end = (int)($in['end'] ?? 0);
        if ($start <= 0 || $end <= $start || $end - $start > 14 * 86400000) throw new ApiError('bad_time');
        $meet = trim((string)($in['meet'] ?? ''));
        if ($meet !== '') { $meet = clean_url($meet); if ($meet === '' || !str_starts_with($meet, 'https://')) throw new ApiError('bad_url'); }
        $pid = s_int($in['projectId'] ?? null);
        if ($pid) project_row($pid);
        $title = s_str($in['title'] ?? '', 200, true);
        $vals = [$title, s_str($in['descr'] ?? '', 4000), $start, $end, s_str($in['location'] ?? '', 200), $meet, $pid];
        $guests = [];
        foreach (array_slice(is_array($in['guests'] ?? null) ? $in['guests'] : [], 0, 200) as $g) {
            $g = (int)$g;
            if ($g && $g !== $uid && q('SELECT id FROM td_users WHERE id = ? AND active = 1', [$g])->fetch()) $guests[$g] = true;
        }
        $guests = array_keys($guests);
        db()->beginTransaction();
        if ($old) {
            q('UPDATE td_events SET title=?, descr=?, start_ms=?, end_ms=?, location=?, meet_url=?, project_id=?, updated_at=NOW() WHERE id=?', [...$vals, $eid]);
        } else {
            q('INSERT INTO td_events (title, descr, start_ms, end_ms, location, meet_url, project_id, created_by, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,NOW(),NOW())', [...$vals, $uid]);
            $eid = (int)db()->lastInsertId();
        }
        $before = array_map(fn($r) => (int)$r['user_id'], q('SELECT user_id FROM td_event_guests WHERE event_id = ?', [$eid])->fetchAll());
        $removed = array_diff($before, $guests);
        if ($removed) q('DELETE FROM td_event_guests WHERE event_id = ? AND user_id IN (' . implode(',', $removed) . ')', [$eid]);
        $moved = $old && ((int)$old['start_ms'] !== $start || (int)$old['end_ms'] !== $end || $old['meet_url'] !== $meet);
        foreach ($guests as $g) {
            q('INSERT IGNORE INTO td_event_guests (event_id, user_id) VALUES (?,?)', [$eid, $g]);
            if ($moved && in_array($g, $before, true)) q("UPDATE td_event_guests SET response = 'pending' WHERE event_id = ? AND user_id = ?", [$eid, $g]);
        }
        db()->commit();
        $d = ['t' => $title, 'start' => $start, 'end' => $end, 'meet' => $meet, 'eid' => (string)$eid, 'by' => $me['name']];
        foreach ($guests as $g) {
            if (!in_array($g, $before, true)) notify_user($g, 'event_invite', $d, $uid);
            elseif ($moved) notify_user($g, 'event_change', $d, $uid);
        }
        foreach ($removed as $g) notify_user($g, 'event_cancel', $d, $uid);
        out(['ok' => true, 'id' => (string)$eid]);
    }
    case 'event_delete': {
        $e = q('SELECT * FROM td_events WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$e) throw new ApiError('event_not_found', 404);
        if ((int)$e['created_by'] !== $uid) throw new ApiError('forbidden', 403);
        $gs = array_map(fn($r) => (int)$r['user_id'], q('SELECT user_id FROM td_event_guests WHERE event_id = ?', [$e['id']])->fetchAll());
        q('DELETE FROM td_event_guests WHERE event_id = ?', [$e['id']]);
        q('DELETE FROM td_events WHERE id = ?', [$e['id']]);
        if ((int)$e['end_ms'] > now_ms()) foreach ($gs as $g) notify_user($g, 'event_cancel', ['t' => $e['title'], 'start' => (int)$e['start_ms'], 'end' => (int)$e['end_ms'], 'by' => $me['name']], $uid);
        out(['ok' => true]);
    }
    case 'event_rsvp': {
        $eid = s_int($in['id'] ?? null);
        $r = s_enum($in['response'] ?? '', ['yes', 'no', 'maybe']);
        $st = q('UPDATE td_event_guests SET response = ? WHERE event_id = ? AND user_id = ?', [$r, $eid, $uid]);
        if (!q('SELECT 1 FROM td_event_guests WHERE event_id = ? AND user_id = ?', [$eid, $uid])->fetch()) throw new ApiError('event_not_found', 404);
        out(['ok' => true]);
    }


    /* ----- minutes of meeting (MoM): the organiser, the attendees, the project's team leaders and the Admin see them ----- */
    case 'mom_list': {
        $rows = q('SELECT * FROM td_moms ORDER BY meeting_ms DESC LIMIT 500')->fetchAll();
        $items = [];
        $ids = [];
        foreach ($rows as $m) {
            if (!mom_can_see($me, $m)) continue;
            $ids[] = (int)$m['id'];
            $items[] = mom_out($m, false);
        }
        $acts = $ids ? array_map('mom_action_out', q('SELECT * FROM td_mom_actions WHERE mom_id IN (' . implode(',', $ids) . ') ORDER BY done, due IS NULL, due, id')->fetchAll()) : [];
        out(['items' => $items, 'actions' => $acts]);
    }
    case 'mom_get': {
        $m = mom_row(s_int($_GET['id'] ?? null));
        if (!mom_can_see($me, $m)) throw new ApiError('forbidden', 403);
        out(['item' => mom_out($m, true), 'parts' => (int)q('SELECT COALESCE(MAX(seq) + 1, 0) n FROM td_mom_parts WHERE mom_id = ? AND seq >= 0', [$m['id']])->fetch()['n'],
            'actions' => array_map('mom_action_out', q('SELECT * FROM td_mom_actions WHERE mom_id = ? ORDER BY sort, id', [$m['id']])->fetchAll())]);
    }
    case 'mom_save': {
        $mid = s_int($in['id'] ?? null);
        $m = $mid ? mom_row($mid) : null;
        if ($m && !mom_can_edit($me, $m)) throw new ApiError('forbidden', 403);
        $eid = s_int($in['eventId'] ?? null);
        $ev = null;
        if ($eid) {
            $ev = q('SELECT * FROM td_events WHERE id = ?', [$eid])->fetch();
            if (!$ev) throw new ApiError('event_not_found', 404);
            $isGuest = (bool)q('SELECT 1 FROM td_event_guests WHERE event_id = ? AND user_id = ?', [$eid, $uid])->fetch();
            if ((int)$ev['created_by'] !== $uid && !$isGuest && !is_owner($me)) throw new ApiError('forbidden', 403);
        }
        $pid = s_int($in['projectId'] ?? null);
        if ($pid) project_row($pid);
        $att = [];
        foreach (array_slice(is_array($in['attendees'] ?? null) ? $in['attendees'] : [], 0, 200) as $a) { $a = (int)$a; if ($a && q('SELECT id FROM td_users WHERE id = ?', [$a])->fetch()) $att[$a] = true; }
        $att[$uid] = true;
        $content = $in['content'] ?? null;
        $vals = [s_str($in['title'] ?? '', 200, true), (int)($in['meetingAt'] ?? 0) ?: now_ms(), json_encode(array_keys($att)), s_str($in['guestsExt'] ?? '', 500),
            array_key_exists('transcript', $in) ? mb_substr((string)$in['transcript'], 0, 400000) : ($m['transcript'] ?? ''),
            is_array($content) ? json_encode(mom_clean($content), JSON_UNESCAPED_UNICODE) : ($m['content'] ?? null),
            s_enum($in['lang'] ?? 'auto', ['auto', 'ar', 'en'], 'auto'), $pid ?: ($ev['project_id'] ?? null), $eid];
        db()->beginTransaction();
        if ($m) {
            q('UPDATE td_moms SET title=?, meeting_ms=?, attendees=?, guests_ext=?, transcript=?, content=?, lang=?, project_id=?, event_id=?, updated_at=NOW() WHERE id=?', [...$vals, $m['id']]);
        } else {
            q('INSERT INTO td_moms (title, meeting_ms, attendees, guests_ext, transcript, content, lang, project_id, event_id, created_by, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,NOW(),NOW())', [...$vals, $uid]);
            $mid = (int)db()->lastInsertId();
        }
        if (is_array($in['actions'] ?? null)) mom_set_actions($mid, $in['actions']);
        db()->commit();
        out(['ok' => true, 'id' => (string)$mid]);
    }
    /* Final: everyone present gets the minutes, and each person with an action item gets theirs. */
    case 'mom_finalize': {
        $m = mom_row(s_int($in['id'] ?? null));
        if (!mom_can_edit($me, $m)) throw new ApiError('forbidden', 403);
        q("UPDATE td_moms SET status = 'final', sent_at = NOW(), updated_at = NOW() WHERE id = ?", [$m['id']]);
        $m = mom_row((int)$m['id']);
        $acts = q('SELECT * FROM td_mom_actions WHERE mom_id = ? ORDER BY sort, id', [$m['id']])->fetchAll();
        $names = [];
        $nameOf = function (int $id) use (&$names) { if (!isset($names[$id])) { $u = q('SELECT name FROM td_users WHERE id = ?', [$id])->fetch(); $names[$id] = $u ? $u['name'] : '—'; } return $names[$id]; };
        $text = mom_text($m, $acts, $nameOf);
        $p = $m['project_id'] ? project_label((int)$m['project_id']) : '';
        $sent = 0;
        if (!empty($in['notify'])) {
            foreach (json_decode((string)$m['attendees'], true) ?: [] as $a) {
                if ((int)$a === $uid) continue;
                notify_user((int)$a, 'mom_sent', ['t' => $m['title'], 'p' => $p, 'mid' => (string)$m['id'], 'text' => mb_substr($text, 0, 3500), 'by' => $me['name']], $uid);
                $sent++;
            }
            foreach ($acts as $a) if ($a['owner_id'] && !$a['done'])
                notify_user((int)$a['owner_id'], 'mom_action', ['t' => $m['title'], 'p' => $p, 'mid' => (string)$m['id'], 'item' => $a['text'], 'due' => $a['due'] ?? '', 'by' => $me['name']], $uid);
        }
        out(['ok' => true, 'sent' => $sent, 'text' => $text]);
    }
    case 'mom_action': {
        $a = q('SELECT * FROM td_mom_actions WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$a) throw new ApiError('not_found', 404);
        $m = mom_row((int)$a['mom_id']);
        if ((int)$a['owner_id'] !== $uid && !mom_can_edit($me, $m)) throw new ApiError('forbidden', 403);
        $done = !empty($in['done']) ? 1 : 0;
        q('UPDATE td_mom_actions SET done = ?, done_at = ' . ($done ? 'NOW()' : 'NULL') . ' WHERE id = ?', [$done, $a['id']]);
        out(['ok' => true]);
    }
    case 'mom_delete': {
        $m = mom_row(s_int($in['id'] ?? null));
        if ((int)$m['created_by'] !== $uid && !is_owner($me)) throw new ApiError('forbidden', 403);
        q('DELETE FROM td_mom_actions WHERE mom_id = ?', [$m['id']]);
        q('DELETE FROM td_mom_parts WHERE mom_id = ?', [$m['id']]);
        q('DELETE FROM td_moms WHERE id = ?', [$m['id']]);
        out(['ok' => true]);
    }

    /* ----- v2.17: roles the Admin makes, with the permissions ticked for each ----- */
    case 'role_save': {
        need_owner($me);
        $rid = s_int($in['id'] ?? null);
        $name = s_str($in['name'] ?? '', 80, true);
        $perms = array_values(array_intersect(TD_PERMS, is_array($in['perms'] ?? null) ? $in['perms'] : []));
        $color = preg_match('/^#[0-9A-Fa-f]{6}$/', (string)($in['color'] ?? '')) ? $in['color'] : '#5B6B7A';
        if ($rid) {
            if (!q('SELECT id FROM td_roles WHERE id = ?', [$rid])->fetch()) throw new ApiError('not_found', 404);
            q('UPDATE td_roles SET name = ?, perms = ?, color = ? WHERE id = ?', [$name, json_encode($perms), $color, $rid]);
        } else {
            q('INSERT INTO td_roles (name, perms, color, created_at) VALUES (?,?,?,NOW())', [$name, json_encode($perms), $color]);
            $rid = (int)db()->lastInsertId();
        }
        /* people with this role run a team only while the role has "lead" */
        $base = in_array('lead', $perms, true) ? 'lead' : 'employee';
        q("UPDATE td_users SET role = ? WHERE role_id = ? AND role <> 'owner'", [$base, $rid]);
        if ($base !== 'lead') q("UPDATE td_teams t JOIN td_users u ON u.id = t.lead_id SET t.lead_id = NULL WHERE u.role_id = ? AND u.role <> 'owner'", [$rid]);
        sync_team_leads();
        out(['ok' => true, 'id' => (string)$rid]);
    }
    /* the built-in roles' permissions, changed by the Admin (the Admin's own stay complete) */
    case 'role_builtin_save': {
        need_owner($me);
        $role = s_enum($in['role'] ?? '', ['lead', 'accountant', 'employee']);
        if (!empty($in['reset'])) {
            q('DELETE FROM td_meta WHERE k = ?', ['perms_' . $role]);
        } else {
            $perms = array_values(array_diff(array_intersect(TD_PERMS, is_array($in['perms'] ?? null) ? $in['perms'] : []), ['lead']));
            q('REPLACE INTO td_meta (k, v) VALUES (?, ?)', ['perms_' . $role, json_encode($perms)]);
        }
        out(['ok' => true]);
    }
    case 'role_delete': {
        need_owner($me);
        $rid = s_int($in['id'] ?? null);
        if ((int)q('SELECT COUNT(*) c FROM td_users WHERE role_id = ? AND deleted = 0', [$rid])->fetch()['c'] > 0) throw new ApiError('role_in_use', 409);
        q('UPDATE td_users SET role_id = NULL WHERE role_id = ?', [$rid]);
        q('DELETE FROM td_roles WHERE id = ?', [$rid]);
        out(['ok' => true]);
    }

    /* ----- v2.17: team capability matrix ----- */
    case 'skill_save': {
        $teamId = (int)s_int($in['teamId'] ?? null);
        if (!q('SELECT id FROM td_teams WHERE id = ?', [$teamId])->fetch()) throw new ApiError('team_not_found', 404);
        if (!skill_editor($me, $teamId)) throw new ApiError('forbidden', 403);
        $names = is_array($in['names'] ?? null) ? $in['names'] : [s_str($in['name'] ?? '', 80, true)];
        $sid = s_int($in['id'] ?? null);
        if ($sid) {
            $k = q('SELECT * FROM td_skills WHERE id = ? AND team_id = ?', [$sid, $teamId])->fetch();
            if (!$k) throw new ApiError('not_found', 404);
            q('UPDATE td_skills SET name = ? WHERE id = ?', [s_str($in['name'] ?? '', 80, true), $sid]);
            out(['ok' => true]);
        }
        $have = array_map(fn($r) => mb_strtolower($r['name']), q('SELECT name FROM td_skills WHERE team_id = ?', [$teamId])->fetchAll());
        $sort = (int)q('SELECT COALESCE(MAX(sort), 0) m FROM td_skills WHERE team_id = ?', [$teamId])->fetch()['m'];
        $n = 0;
        foreach (array_slice($names, 0, 40) as $nm) {
            $nm = s_str($nm, 80);
            if ($nm === '' || in_array(mb_strtolower($nm), $have, true)) continue;
            $have[] = mb_strtolower($nm);
            q('INSERT INTO td_skills (team_id, name, sort) VALUES (?,?,?)', [$teamId, $nm, ++$sort]);
            $n++;
        }
        out(['ok' => true, 'added' => $n]);
    }
    case 'skill_delete': {
        $k = q('SELECT * FROM td_skills WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$k) throw new ApiError('not_found', 404);
        if (!skill_editor($me, (int)$k['team_id'])) throw new ApiError('forbidden', 403);
        q('DELETE FROM td_user_skills WHERE skill_id = ?', [$k['id']]);
        q('DELETE FROM td_skills WHERE id = ?', [$k['id']]);
        out(['ok' => true]);
    }
    case 'skill_move': {
        $k = q('SELECT * FROM td_skills WHERE id = ?', [s_int($in['id'] ?? null)])->fetch();
        if (!$k) throw new ApiError('not_found', 404);
        if (!skill_editor($me, (int)$k['team_id'])) throw new ApiError('forbidden', 403);
        $list = q('SELECT id FROM td_skills WHERE team_id = ? ORDER BY sort, id', [$k['team_id']])->fetchAll(PDO::FETCH_COLUMN);
        $i = array_search($k['id'], $list);
        $j = $i + ((int)($in['dir'] ?? 1) < 0 ? -1 : 1);
        if ($i !== false && $j >= 0 && $j < count($list)) { [$list[$i], $list[$j]] = [$list[$j], $list[$i]]; }
        foreach ($list as $n => $id) q('UPDATE td_skills SET sort = ? WHERE id = ?', [$n + 1, $id]);
        out(['ok' => true]);
    }
    case 'skill_level': {
        $k = q('SELECT * FROM td_skills WHERE id = ?', [s_int($in['skillId'] ?? null)])->fetch();
        if (!$k) throw new ApiError('not_found', 404);
        if (!skill_editor($me, (int)$k['team_id'])) throw new ApiError('forbidden', 403);
        $u = user_row((int)s_int($in['userId'] ?? null));
        $lv = max(0, min(4, (int)($in['level'] ?? 0)));
        q('REPLACE INTO td_user_skills (user_id, skill_id, level, updated_by, updated_at) VALUES (?,?,?,?,NOW())', [$u['id'], $k['id'], $lv, $uid]);
        out(['ok' => true]);
    }

    /* ----- v2.18: this device receives push notifications ----- */
    case 'push_subscribe': {
        if (!push_ready()) throw new ApiError('push_off', 409);
        $ep = trim((string)($in['endpoint'] ?? ''));
        $p256 = (string)($in['keys']['p256dh'] ?? '');
        $auth = (string)($in['keys']['auth'] ?? '');
        if (strlen($ep) > 1000 || !push_endpoint_ok($ep)) throw new ApiError('push_bad', 400);
        if (strlen(b64u_dec($p256)) !== 65 || strlen(b64u_dec($auth)) !== 16) throw new ApiError('push_bad', 400);
        q('INSERT INTO td_push_subs (user_id, endpoint, ep_hash, p256dh, auth, ua, created_at) VALUES (?,?,?,?,?,?,NOW())
           ON DUPLICATE KEY UPDATE user_id = VALUES(user_id), p256dh = VALUES(p256dh), auth = VALUES(auth), ua = VALUES(ua)',
            [$uid, $ep, hash('sha256', $ep), $p256, $auth, mb_substr((string)($in['ua'] ?? ''), 0, 200)]);
        out(['ok' => true, 'devices' => (int)q('SELECT COUNT(*) c FROM td_push_subs WHERE user_id = ?', [$uid])->fetch()['c']]);
    }
    case 'push_unsubscribe': {
        q('DELETE FROM td_push_subs WHERE ep_hash = ? AND user_id = ?', [hash('sha256', trim((string)($in['endpoint'] ?? ''))), $uid]);
        out(['ok' => true, 'devices' => (int)q('SELECT COUNT(*) c FROM td_push_subs WHERE user_id = ?', [$uid])->fetch()['c']]);
    }
    case 'push_test': {
        $n = push_user($uid, 'TECTOVA Team Desk', "إشعار تجريبي: الإشعارات تعمل على هذا الجهاز ✓\nTest notification: push works on this device ✓", './', 'test');
        out(['ok' => true, 'sent' => $n]);
    }

    /* ----- notifications ----- */
    case 'notif_list': {
        if (random_int(1, 20) === 1) q('DELETE FROM td_notifications WHERE created_at < ?', [gmdate('Y-m-d H:i:s', time() - 120 * 86400)]);
        $items = array_map(fn($n) => ['id' => sid($n['id']), 'kind' => $n['kind'], 'actor' => sid($n['actor_id']), 'taskId' => sid($n['task_id']),
            'data' => (json_decode((string)$n['data'], true) ?: (object)[]), 'at' => strtotime($n['created_at'] . ' UTC') * 1000, 'read' => $n['read_at'] !== null],
            q('SELECT * FROM td_notifications WHERE user_id = ? ORDER BY id DESC LIMIT 60', [$uid])->fetchAll());
        out(['items' => $items, 'unread' => (int)q('SELECT COUNT(*) c FROM td_notifications WHERE user_id = ? AND read_at IS NULL', [$uid])->fetch()['c']]);
    }
    case 'notif_read': {
        if (!empty($in['all'])) q('UPDATE td_notifications SET read_at = NOW() WHERE user_id = ? AND read_at IS NULL', [$uid]);
        else q('UPDATE td_notifications SET read_at = COALESCE(read_at, NOW()) WHERE id = ? AND user_id = ?', [s_int($in['id'] ?? null), $uid]);
        out(['ok' => true, 'unread' => (int)q('SELECT COUNT(*) c FROM td_notifications WHERE user_id = ? AND read_at IS NULL', [$uid])->fetch()['c']]);
    }
    case 'notif_prefs': {
        q('UPDATE td_users SET notify = ?, tg_on = ? WHERE id = ?', [!empty($in['email']) ? 1 : 0, !empty($in['tg']) ? 1 : 0, $uid]);
        out(['ok' => true]);
    }
    /* ----- my profile: everyone keeps their own email and phone up to date ----- */
    case 'profile_save': {
        $phone = clean_phone($in['phone'] ?? '');
        $email = mb_strtolower(s_str($in['email'] ?? $me['email'], 190, true));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new ApiError('bad_email');
        if ($email !== mb_strtolower($me['email'])) {
            /* The email is the sign-in name, so changing it needs the current password. */
            if (!password_verify((string)($in['password'] ?? ''), $me['pass_hash'])) throw new ApiError('bad_password');
            if (q('SELECT id FROM td_users WHERE email = ? AND id <> ?', [$email, $uid])->fetch()) throw new ApiError('email_taken', 409);
        }
        q('UPDATE td_users SET email = ?, phone = ? WHERE id = ?', [$email, $phone, $uid]);
        out(['ok' => true]);
    }

    case 'tg_link': {
        if (tg_token() === '' || tg_bot_name() === '') throw new ApiError('tg_not_ready');
        $code = bin2hex(random_bytes(8));
        q('UPDATE td_users SET tg_code = ? WHERE id = ?', [$code, $uid]);
        out(['url' => 'https://t.me/' . rawurlencode(tg_bot_name()) . '?start=' . $code]);
    }
    case 'tg_check': {
        $u = user_row($uid);
        if (empty($u['tg_chat'])) { tg_poll(); $u = user_row($uid); }
        out(['linked' => !empty($u['tg_chat'])]);
    }
    case 'tg_unlink': {
        $u = user_row($uid);
        if (!empty($u['tg_chat'])) tg_call('sendMessage', ['chat_id' => $u['tg_chat'], 'text' => "تم إلغاء ربط Team Desk من الموقع.\nTeam Desk was unlinked from the site."]);
        q('UPDATE td_users SET tg_chat = NULL, tg_code = NULL WHERE id = ?', [$uid]);
        out(['ok' => true]);
    }
    case 'tg_test': {
        $u = user_row($uid);
        if (empty($u['tg_chat'])) throw new ApiError('tg_not_linked');
        if (!tg_send_user($u, "🔔 رسالة تجربة من TECTOVA Team Desk. الإشعارات تعمل.\nTest message from TECTOVA Team Desk. Notifications work.")) throw new ApiError('tg_failed', 502);
        out(['ok' => true]);
    }
    /* Admin: tell Telegram to deliver the bot's messages to this site (needs https). */
    case 'tg_setup': {
        need_owner($me);
        if (tg_token() === '' || tg_bot_name() === '') throw new ApiError('tg_not_ready');
        $site = rtrim((string)cfg('site_url', ''), '/');
        if (!str_starts_with($site, 'https://')) throw new ApiError('tg_https');
        $r = tg_call('setWebhook', ['url' => $site . '/api.php?a=tg_webhook', 'secret_token' => secret_key('tg_secret'), 'allowed_updates' => ['message']]);
        if (!$r) throw new ApiError('tg_failed', 502);
        if (empty($r['ok'])) throw new ApiError('tg_failed', 502);
        out(['ok' => true]);
    }

    case 'allocation':
        need_finance($me);
        out(allocation_out(s_ym($_GET['ym'] ?? '')));

    default:
        throw new ApiError('unknown_action', 404);
    }
} catch (ApiError $e) {
    try { if (db()->inTransaction()) db()->rollBack(); } catch (Throwable $ignored) {}
    http_response_code($e->status);
    echo json_encode(['error' => $e->getMessage()]);
} catch (Throwable $e) {
    try { if (db()->inTransaction()) db()->rollBack(); } catch (Throwable $ignored) {}
    error_log('[team-desk] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'server_error']);
}
