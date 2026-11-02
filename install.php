<?php
/*
 * TECTOVA Team Desk — one-time installer.
 * Creates the tables and the manager account. It refuses to run again once a manager exists.
 * Delete this file from the server after installing.
 */
declare(strict_types=1);
require __DIR__ . '/lib.php';
header('Content-Type: text/html; charset=utf-8');
header('X-Frame-Options: DENY');

/* Data carried over from the first version on claude.ai */
$CARRY_PROJECTS = [
    ['code' => '001', 'name' => 'Charles', 'client' => 'ALI', 'location' => '', 'color' => '#2a78d6', 'status' => 'active'],
];

$msg = '';
$ok = false;
$installed = false;
$dbError = '';
try {
    db();
    $installed = (bool)db()->query("SHOW TABLES LIKE 'td_users'")->fetch()
        && (bool)db()->query("SELECT id FROM td_users WHERE role = 'owner' LIMIT 1")->fetch();
} catch (Throwable $e) {
    $dbError = $e->getMessage();
}

if (!$installed && !$dbError && ($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $name = trim((string)($_POST['name'] ?? ''));
    $email = mb_strtolower(trim((string)($_POST['email'] ?? '')));
    $pass = (string)($_POST['password'] ?? '');
    $pass2 = (string)($_POST['password2'] ?? '');
    if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg = 'أدخل الاسم وبريداً صحيحاً. / Enter a name and a valid email.';
    } elseif (mb_strlen($pass) < 10) {
        $msg = 'كلمة السر 10 أحرف على الأقل. / Password must be at least 10 characters.';
    } elseif ($pass !== $pass2) {
        $msg = 'كلمتا السر غير متطابقتين. / The passwords do not match.';
    } else {
        try {
            migrate();
            q("INSERT INTO td_users (email, pass_hash, name, country, discipline, job_title, role, active, must_change_pw, created_at)
               VALUES (?,?,?,?,?,?,'owner',1,0,NOW())",
                [$email, password_hash($pass, PASSWORD_DEFAULT), mb_substr($name, 0, 120), 'DE', 'PM', 'CEO']);
            $ownerId = (int)db()->lastInsertId();
            if (!empty($_POST['carry'])) {
                foreach ($CARRY_PROJECTS as $p) {
                    q('INSERT INTO td_projects (code, name, client, location, color, status, created_by, created_at) VALUES (?,?,?,?,?,?,?,NOW())',
                        [$p['code'], $p['name'], $p['client'], $p['location'], $p['color'], $p['status'], $ownerId]);
                }
            }
            $ok = true;
        } catch (Throwable $e) {
            $msg = 'Database error: ' . $e->getMessage();
        }
    }
}
$h = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
?><!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TECTOVA Team Desk · Install</title>
<style>
body{font-family:system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif;background:#EEF1F3;color:#15202A;margin:0;padding:24px 16px}
main{max-width:520px;margin:0 auto;background:#fff;border:1px solid #CFD7DD;border-radius:8px;padding:24px}
h1{font-size:20px;margin:0 0 4px}p{color:#51606C;margin:0 0 16px;line-height:1.6}
label{display:grid;gap:4px;margin-bottom:12px;font-size:13px;color:#51606C}
input[type=text],input[type=email],input[type=password]{padding:9px 10px;border:1px solid #CFD7DD;border-radius:6px;font-size:15px}
button{background:#0A6870;color:#fff;border:0;border-radius:6px;padding:10px 18px;font-size:15px;cursor:pointer}
.err{background:#F8DFDC;color:#B0281F;padding:10px 12px;border-radius:6px;margin-bottom:14px}
.ok{background:#DFF0E6;color:#2C7A4D;padding:12px;border-radius:6px;margin-bottom:14px;line-height:1.7}
code{background:#EEF1F3;padding:1px 6px;border-radius:4px;direction:ltr;display:inline-block}
</style></head><body><main>
<h1>TECTOVA Team Desk</h1>
<?php if ($dbError): ?>
  <div class="err">لا يمكن الاتصال بقاعدة البيانات. راجع القيم في <code>config.php</code>.<br><small dir="ltr"><?= $h($dbError) ?></small></div>
<?php elseif ($ok): ?>
  <div class="ok"><b>تم التثبيت بنجاح.</b><br>1. احذف الملف <code>install.php</code> من الاستضافة الآن.<br>2. افتح <a href="./">الصفحة الرئيسية</a> وسجّل الدخول بالبريد وكلمة السر التي أدخلتها.</div>
<?php elseif ($installed): ?>
  <div class="ok">الموقع مثبّت مسبقاً. احذف <code>install.php</code> من الاستضافة، ثم افتح <a href="./">الصفحة الرئيسية</a>.</div>
<?php else: ?>
  <p>إنشاء الجداول وحساب المدير. يُستخدم مرة واحدة فقط.<br><span dir="ltr">Creates the tables and the manager account. Runs once.</span></p>
  <?php if ($msg): ?><div class="err"><?= $h($msg) ?></div><?php endif; ?>
  <form method="post" autocomplete="off">
    <label>الاسم الكامل / Full name<input type="text" name="name" required maxlength="120" value="<?= $h($_POST['name'] ?? '') ?>"></label>
    <label>البريد الإلكتروني / Email<input type="email" name="email" required value="<?= $h($_POST['email'] ?? '') ?>" dir="ltr"></label>
    <label>كلمة السر (10 أحرف على الأقل) / Password<input type="password" name="password" required minlength="10" dir="ltr"></label>
    <label>تأكيد كلمة السر / Repeat password<input type="password" name="password2" required minlength="10" dir="ltr"></label>
    <label style="display:flex;gap:8px;align-items:center"><input type="checkbox" name="carry" value="1" checked> نقل المشروع "Charles" من النسخة الأولى</label>
    <button type="submit">تثبيت / Install</button>
  </form>
<?php endif; ?>
</main></body></html>
