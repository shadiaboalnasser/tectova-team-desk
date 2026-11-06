<?php
/* TECTOVA Team Desk — shared helpers (database, sign-in, errors). */
declare(strict_types=1);

if (!is_file(__DIR__ . '/config.php')) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    exit("config.php is missing. Copy config.sample.php to config.php and fill in the database details.");
}
$GLOBALS['TD_CFG'] = require __DIR__ . '/config.php';
date_default_timezone_set('UTC');

const TD_SESSION_DAYS = 30;
const TD_COOKIE = 'td_session';
/* owner = Admin (can be more than one), lead = Team Leader, accountant, employee = Engineer */
const TD_ROLES = ['owner', 'lead', 'accountant', 'employee'];
const TD_COUNTRIES = ['SY', 'EG', 'DE'];
const TD_DISC = ['ARC', 'STR', 'MEP', 'COORD', 'DOC', 'PM'];
const TD_LODS = ['', '100', '200', '300', '350', '400', '500'];
const TD_STATUSES = ['todo', 'doing', 'review', 'done'];
const TD_PRIOS = ['low', 'normal', 'high'];
const TD_PSTATUS = ['active', 'hold', 'closed'];
const TD_PPRIO = ['low', 'normal', 'high', 'urgent'];
const TD_CURS = ['EUR', 'USD', 'EGP', 'SYP'];

class ApiError extends Exception
{
    public int $status;
    public function __construct(string $code, int $status = 400)
    {
        parent::__construct($code);
        $this->status = $status;
    }
}

function cfg(string $k, $default = null)
{
    return $GLOBALS['TD_CFG'][$k] ?? $default;
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $dsn = 'mysql:host=' . cfg('db_host', 'localhost') . ';dbname=' . cfg('db_name') . ';charset=utf8mb4';
        if (cfg('db_port')) $dsn .= ';port=' . (int)cfg('db_port');
        $pdo = new PDO($dsn, cfg('db_user'), cfg('db_pass'), [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        $pdo->exec("SET time_zone = '+00:00'");
    }
    return $pdo;
}

function q(string $sql, array $p = []): PDOStatement
{
    $st = db()->prepare($sql);
    $st->execute($p);
    return $st;
}

function is_https(): bool
{
    if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') return true;
    return ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
}

function cookie_path(): string
{
    $dir = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
    return $dir === '' ? '/' : $dir . '/';
}

function set_session_cookie(string $value, int $expires): void
{
    setcookie(TD_COOKIE, $value, [
        'expires' => $expires,
        'path' => cookie_path(),
        'secure' => is_https(),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
}

function client_ip(): string
{
    return substr((string)($_SERVER['REMOTE_ADDR'] ?? '0'), 0, 64);
}

/** Returns [user row, session row] or null. */
function current_session(): ?array
{
    $tok = $_COOKIE[TD_COOKIE] ?? '';
    if (!is_string($tok) || !preg_match('/^[a-f0-9]{64}$/', $tok)) return null;
    $s = q('SELECT * FROM td_sessions WHERE token_hash = ? AND expires_at > ?', [hash('sha256', $tok), time()])->fetch();
    if (!$s) return null;
    $u = q('SELECT * FROM td_users WHERE id = ? AND active = 1', [$s['user_id']])->fetch();
    if (!$u) return null;
    return [$u, $s];
}

function create_session(int $userId): string
{
    $tok = bin2hex(random_bytes(32));
    $csrf = bin2hex(random_bytes(32));
    $exp = time() + TD_SESSION_DAYS * 86400;
    q('INSERT INTO td_sessions (token_hash, user_id, csrf, expires_at, created_at) VALUES (?,?,?,?,?)',
        [hash('sha256', $tok), $userId, $csrf, $exp, time()]);
    q('DELETE FROM td_sessions WHERE expires_at < ?', [time()]);
    set_session_cookie($tok, $exp);
    return $csrf;
}

function now_ms(): int
{
    return (int)floor(microtime(true) * 1000);
}

/* ---------- input validation ---------- */
function s_str($v, int $max, bool $required = false): string
{
    $v = is_scalar($v) ? trim((string)$v) : '';
    $v = mb_substr(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '', 0, $max);
    if ($required && $v === '') throw new ApiError('missing_field');
    return $v;
}
function s_enum($v, array $allowed, ?string $default = null): string
{
    $v = is_scalar($v) ? (string)$v : '';
    if (in_array($v, $allowed, true)) return $v;
    if ($default !== null) return $default;
    throw new ApiError('invalid_value');
}
function s_num($v, float $min = 0, float $max = 1e12): ?float
{
    if ($v === null || $v === '') return null;
    if (!is_numeric(str_replace(',', '.', (string)$v))) throw new ApiError('invalid_number');
    $n = (float)str_replace(',', '.', (string)$v);
    if ($n < $min || $n > $max) throw new ApiError('invalid_number');
    return $n;
}
function s_int($v): ?int
{
    if ($v === null || $v === '' || $v === 0 || $v === '0') return null;
    if (!is_numeric($v)) throw new ApiError('invalid_id');
    return (int)$v;
}
function s_date($v, bool $required = false): ?string
{
    $v = is_scalar($v) ? (string)$v : '';
    if ($v === '') {
        if ($required) throw new ApiError('missing_field');
        return null;
    }
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $v)) throw new ApiError('invalid_date');
    [$y, $m, $d] = array_map('intval', explode('-', $v));
    if (!checkdate($m, $d, $y)) throw new ApiError('invalid_date');
    return $v;
}
function s_ym($v): string
{
    $v = is_scalar($v) ? (string)$v : '';
    if (!preg_match('/^\d{4}-(0[1-9]|1[0-2])$/', $v)) throw new ApiError('invalid_month');
    return $v;
}

/* ---------- schema: versioned migrations, applied automatically ---------- */
const TD_SCHEMA_VERSION = 22;
function td_migrations(): array
{
    return [
        1 => [
            "CREATE TABLE IF NOT EXISTS td_users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(190) NOT NULL UNIQUE, pass_hash VARCHAR(255) NOT NULL,
              name VARCHAR(120) NOT NULL, country CHAR(2) NOT NULL DEFAULT 'DE', discipline VARCHAR(10) NOT NULL DEFAULT 'ARC', job_title VARCHAR(120) NOT NULL DEFAULT '',
              role ENUM('owner','lead','employee') NOT NULL DEFAULT 'employee', active TINYINT(1) NOT NULL DEFAULT 1, must_change_pw TINYINT(1) NOT NULL DEFAULT 1,
              created_at DATETIME NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_sessions (token_hash CHAR(64) PRIMARY KEY, user_id INT NOT NULL, csrf CHAR(64) NOT NULL, expires_at INT NOT NULL,
              created_at INT NOT NULL, INDEX (user_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "CREATE TABLE IF NOT EXISTS td_login_fail (id INT AUTO_INCREMENT PRIMARY KEY, ip VARCHAR(64) NOT NULL, at INT NOT NULL, INDEX (ip, at)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "CREATE TABLE IF NOT EXISTS td_projects (id INT AUTO_INCREMENT PRIMARY KEY, code VARCHAR(40) NOT NULL DEFAULT '', name VARCHAR(160) NOT NULL,
              client VARCHAR(160) NOT NULL DEFAULT '', location VARCHAR(160) NOT NULL DEFAULT '', budget_hours DECIMAL(10,1) NULL, color VARCHAR(9) NOT NULL DEFAULT '#2F7FB5',
              status ENUM('active','hold','closed') NOT NULL DEFAULT 'active', created_by INT NULL, created_at DATETIME NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_tasks (id INT AUTO_INCREMENT PRIMARY KEY, project_id INT NOT NULL, title VARCHAR(200) NOT NULL, assignee_id INT NULL,
              discipline VARCHAR(10) NOT NULL DEFAULT 'ARC', lod VARCHAR(5) NOT NULL DEFAULT '', status ENUM('todo','doing','review','done') NOT NULL DEFAULT 'todo',
              priority ENUM('low','normal','high') NOT NULL DEFAULT 'normal', estimate DECIMAL(10,1) NULL, due DATE NULL, spec TEXT NULL, created_by INT NULL,
              created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX (project_id), INDEX (assignee_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_entries (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, project_id INT NOT NULL, task_id INT NULL,
              start_ms BIGINT NOT NULL, end_ms BIGINT NOT NULL, minutes INT NOT NULL, work_date DATE NOT NULL, note VARCHAR(255) NOT NULL DEFAULT '',
              manual TINYINT(1) NOT NULL DEFAULT 0, created_at DATETIME NOT NULL, INDEX (user_id, work_date), INDEX (work_date), INDEX (project_id), INDEX (task_id))
              ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_timers (user_id INT PRIMARY KEY, project_id INT NOT NULL, task_id INT NULL, note VARCHAR(255) NOT NULL DEFAULT '',
              start_ms BIGINT NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_pay_settings (user_id INT PRIMARY KEY, pay_type ENUM('monthly','hourly') NOT NULL DEFAULT 'monthly',
              amount DECIMAL(14,2) NOT NULL DEFAULT 0, currency CHAR(3) NOT NULL DEFAULT 'EUR', target_hours DECIMAL(6,1) NOT NULL DEFAULT 0) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "CREATE TABLE IF NOT EXISTS td_pay_months (ym CHAR(7) NOT NULL, user_id INT NOT NULL, bonus DECIMAL(14,2) NOT NULL DEFAULT 0,
              deduction DECIMAL(14,2) NOT NULL DEFAULT 0, paid TINYINT(1) NOT NULL DEFAULT 0, PRIMARY KEY (ym, user_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "CREATE TABLE IF NOT EXISTS td_fx (currency CHAR(3) PRIMARY KEY, rate DECIMAL(18,6) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
        ],
        2 => [
            "ALTER TABLE td_users ADD COLUMN daily_hours DECIMAL(4,1) NOT NULL DEFAULT 8, ADD COLUMN notify TINYINT(1) NOT NULL DEFAULT 1",
            "ALTER TABLE td_projects ADD COLUMN contract_value DECIMAL(14,2) NULL, ADD COLUMN contract_currency CHAR(3) NOT NULL DEFAULT 'EUR',
              ADD COLUMN folder_url VARCHAR(500) NOT NULL DEFAULT '', ADD COLUMN alert_level SMALLINT NOT NULL DEFAULT 0",
            "ALTER TABLE td_tasks ADD COLUMN phase_id INT NULL, ADD COLUMN links TEXT NULL",
            "ALTER TABLE td_entries ADD COLUMN phase_id INT NULL, ADD INDEX (phase_id)",
            "ALTER TABLE td_timers ADD COLUMN phase_id INT NULL",
            "CREATE TABLE IF NOT EXISTS td_phases (id INT AUTO_INCREMENT PRIMARY KEY, project_id INT NOT NULL, name VARCHAR(120) NOT NULL,
              budget_hours DECIMAL(10,1) NULL, sort INT NOT NULL DEFAULT 0, INDEX (project_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_weeks (user_id INT NOT NULL, week_start DATE NOT NULL, status ENUM('submitted','approved','rejected') NOT NULL,
              submitted_at DATETIME NOT NULL, decided_by INT NULL, decided_at DATETIME NULL, note VARCHAR(255) NOT NULL DEFAULT '',
              PRIMARY KEY (user_id, week_start), INDEX (status)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_leaves (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL,
              kind ENUM('annual','sick','unpaid','other') NOT NULL DEFAULT 'annual', status ENUM('pending','approved','rejected') NOT NULL DEFAULT 'pending',
              note VARCHAR(255) NOT NULL DEFAULT '', decided_by INT NULL, created_at DATETIME NOT NULL, INDEX (user_id), INDEX (start_date))
              ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_holidays (id INT AUTO_INCREMENT PRIMARY KEY, country CHAR(2) NOT NULL, day DATE NOT NULL, name VARCHAR(120) NOT NULL,
              UNIQUE KEY (country, day)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_comments (id INT AUTO_INCREMENT PRIMARY KEY, task_id INT NOT NULL, user_id INT NOT NULL, body TEXT NOT NULL,
              created_at DATETIME NOT NULL, INDEX (task_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_notify_log (user_id INT NOT NULL, kind VARCHAR(30) NOT NULL, ref VARCHAR(40) NOT NULL,
              sent_at DATETIME NOT NULL, PRIMARY KEY (user_id, kind, ref)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
        ],
        3 => [
            "ALTER TABLE td_users ADD COLUMN work_days VARCHAR(20) NOT NULL DEFAULT '6,0,1,2,3,4'",
            /* Weeks were Sunday/Monday based before; move them to the Saturday start. */
            "UPDATE IGNORE td_weeks SET week_start = DATE_SUB(week_start, INTERVAL ((DAYOFWEEK(week_start) % 7)) DAY) WHERE DAYOFWEEK(week_start) <> 7",
        ],
        4 => [
            "ALTER TABLE td_users ADD COLUMN lead_id INT NULL, ADD COLUMN leave_allowance DECIMAL(4,1) NOT NULL DEFAULT 15",
            "ALTER TABLE td_leaves MODIFY status ENUM('pending','lead_approved','approved','rejected') NOT NULL DEFAULT 'pending',
              ADD COLUMN days DECIMAL(5,1) NULL, ADD COLUMN lead_by INT NULL, ADD COLUMN lead_at DATETIME NULL",
        ],
        5 => [
            /* v2.3 workspace: start dates for the timeline, subtasks and a per-task activity log */
            "ALTER TABLE td_tasks ADD COLUMN start_date DATE NULL, ADD COLUMN done_at DATETIME NULL",
            "CREATE TABLE IF NOT EXISTS td_subtasks (id INT AUTO_INCREMENT PRIMARY KEY, task_id INT NOT NULL, title VARCHAR(200) NOT NULL,
              done TINYINT(1) NOT NULL DEFAULT 0, sort INT NOT NULL DEFAULT 0, created_by INT NULL, done_by INT NULL, created_at DATETIME NOT NULL,
              INDEX (task_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_activity (id INT AUTO_INCREMENT PRIMARY KEY, task_id INT NOT NULL, user_id INT NOT NULL, kind VARCHAR(20) NOT NULL,
              detail VARCHAR(255) NOT NULL DEFAULT '', created_at DATETIME NOT NULL, INDEX (task_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
        ],
        6 => [
            /* v2.4: accountant role */
            "ALTER TABLE td_users MODIFY role ENUM('owner','lead','accountant','employee') NOT NULL DEFAULT 'employee'",
        ],
        7 => [
            /* v2.5: tags shared by projects and tasks */
            "CREATE TABLE IF NOT EXISTS td_tags (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40) NOT NULL, color VARCHAR(9) NOT NULL DEFAULT '#2F7FB5',
              created_by INT NULL, created_at DATETIME NOT NULL, UNIQUE KEY (name)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_task_tags (task_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY (task_id, tag_id), INDEX (tag_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "CREATE TABLE IF NOT EXISTS td_project_tags (project_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY (project_id, tag_id), INDEX (tag_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
        ],
        8 => [
            /* v2.6: separate project tags from task tags. A tag used on both is split into one of each. */
            "ALTER TABLE td_tags ADD COLUMN scope ENUM('project','task') NOT NULL DEFAULT 'task'",
            "ALTER TABLE td_tags DROP INDEX name",
            "ALTER TABLE td_tags ADD UNIQUE KEY scope_name (scope, name)",
            "UPDATE td_tags SET scope = 'project' WHERE id IN (SELECT tag_id FROM td_project_tags)",
            "INSERT INTO td_tags (name, color, created_by, created_at, scope)
              SELECT g.name, g.color, g.created_by, NOW(), 'task' FROM td_tags g WHERE g.scope = 'project' AND g.id IN (SELECT tag_id FROM td_task_tags)",
            "UPDATE td_task_tags x JOIN td_tags g ON g.id = x.tag_id AND g.scope = 'project' JOIN td_tags n ON n.name = g.name AND n.scope = 'task' SET x.tag_id = n.id",
        ],
        9 => [
            /* v2.7: comments on projects too. Every comment carries its project, so a project's log includes its tasks. */
            "ALTER TABLE td_comments MODIFY task_id INT NULL, ADD COLUMN project_id INT NULL, ADD INDEX (project_id)",
            "UPDATE td_comments c JOIN td_tasks t ON t.id = c.task_id SET c.project_id = t.project_id",
        ],
        10 => [
            /* v2.8: project files and links */
            "CREATE TABLE IF NOT EXISTS td_files (id INT AUTO_INCREMENT PRIMARY KEY, project_id INT NOT NULL, kind ENUM('file','link') NOT NULL,
              title VARCHAR(200) NOT NULL, url VARCHAR(500) NULL, stored VARCHAR(80) NULL, orig_name VARCHAR(255) NULL, mime VARCHAR(120) NULL,
              size BIGINT NULL, category VARCHAR(20) NOT NULL DEFAULT 'other', note VARCHAR(255) NOT NULL DEFAULT '', created_by INT NULL,
              created_at DATETIME NOT NULL, INDEX (project_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
        ],
        11 => [
            /* v2.9: tasks that need a control (QC) check before they count as done */
            "ALTER TABLE td_tasks ADD COLUMN needs_qc TINYINT(1) NOT NULL DEFAULT 0, ADD COLUMN reviewer_id INT NULL,
              ADD COLUMN qc_by INT NULL, ADD COLUMN qc_at DATETIME NULL",
        ],
        12 => [
            /* v2.10: notifications (bell, Telegram, email) */
            "CREATE TABLE IF NOT EXISTS td_notifications (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, kind VARCHAR(20) NOT NULL, actor_id INT NULL,
              task_id INT NULL, data TEXT NULL, read_at DATETIME NULL, created_at DATETIME NOT NULL, INDEX (user_id, read_at), INDEX (created_at))
              ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "ALTER TABLE td_users ADD COLUMN tg_chat VARCHAR(32) NULL, ADD COLUMN tg_code CHAR(16) NULL, ADD COLUMN tg_on TINYINT(1) NOT NULL DEFAULT 1",
        ],
        13 => [
            /* v2.11: organisation tree. Each existing team leader gets a team with the people who reported to them. */
            "CREATE TABLE IF NOT EXISTS td_teams (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(80) NOT NULL, discipline VARCHAR(10) NOT NULL DEFAULT 'ARC',
              color VARCHAR(9) NOT NULL DEFAULT '#2F7FB5', lead_id INT NULL, parent_id INT NULL, sort INT NOT NULL DEFAULT 0, created_at DATETIME NOT NULL,
              INDEX (parent_id), INDEX (lead_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "ALTER TABLE td_users ADD COLUMN team_id INT NULL, ADD INDEX (team_id)",
            "INSERT INTO td_teams (name, discipline, lead_id, created_at) SELECT CONCAT('فريق ', u.name), u.discipline, u.id, NOW() FROM td_users u
              WHERE u.role = 'lead' AND u.active = 1 AND NOT EXISTS (SELECT 1 FROM td_teams x WHERE x.lead_id = u.id)",
            "UPDATE td_users u JOIN td_teams t ON t.lead_id = u.lead_id SET u.team_id = t.id WHERE u.lead_id IS NOT NULL AND u.team_id IS NULL",
            "UPDATE td_users u JOIN td_teams t ON t.lead_id = u.id SET u.team_id = t.id WHERE u.team_id IS NULL",
        ],
        14 => [
            /* v2.13: project colours move to a colour-blind-safe palette (same order, so projects stay distinct). */
            "UPDATE td_projects SET color = CASE UPPER(color) WHEN '#2F7FB5' THEN '#2A78D6' WHEN '#D08A1E' THEN '#EB6834' WHEN '#3E9B6A' THEN '#1BAF7A' WHEN '#8A5BC7' THEN '#EDA100' WHEN '#C9466B' THEN '#E87BA4' WHEN '#2A9BA3' THEN '#008300' WHEN '#7A8B2E' THEN '#6250D6' WHEN '#6B7785' THEN '#E34948' WHEN '#B5652F' THEN '#2A78D6' WHEN '#4F6BD8' THEN '#EB6834' ELSE color END",
        ],
        15 => [
            /* v2.13: phone number on the profile, used to link Telegram by sharing a contact */
            "ALTER TABLE td_users ADD COLUMN phone VARCHAR(32) NOT NULL DEFAULT ''",
        ],
        16 => [
            /* v2.14: removing a team member, and project schedules imported from MS Project */
            "ALTER TABLE td_users ADD COLUMN deleted TINYINT(1) NOT NULL DEFAULT 0",
            "ALTER TABLE td_tasks ADD COLUMN group_id INT NULL",
            "ALTER TABLE td_tasks ADD COLUMN sort_order INT NOT NULL DEFAULT 0",
            "ALTER TABLE td_tasks ADD COLUMN milestone TINYINT(1) NOT NULL DEFAULT 0",
            "ALTER TABLE td_tasks ADD COLUMN ms_uid INT NULL",
            "ALTER TABLE td_tasks ADD COLUMN base_start DATE NULL",
            "ALTER TABLE td_tasks ADD COLUMN base_due DATE NULL",
            "ALTER TABLE td_tasks ADD INDEX td_tasks_msuid (project_id, ms_uid)",
            "UPDATE td_tasks SET sort_order = id WHERE sort_order = 0",
            "CREATE TABLE IF NOT EXISTS td_task_groups (id INT AUTO_INCREMENT PRIMARY KEY, project_id INT NOT NULL, parent_id INT NULL, name VARCHAR(200) NOT NULL,
              sort_order INT NOT NULL DEFAULT 0, ms_uid INT NULL, INDEX (project_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_task_deps (task_id INT NOT NULL, pred_id INT NOT NULL, kind CHAR(2) NOT NULL DEFAULT 'FS', lag_days SMALLINT NOT NULL DEFAULT 0,
              PRIMARY KEY (task_id, pred_id), INDEX (pred_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
        ],
        17 => [
            /* v2.15: project priority, clients, team leaders per project, comment replies, planner, company files */
            "ALTER TABLE td_projects ADD COLUMN priority ENUM('low','normal','high','urgent') NOT NULL DEFAULT 'normal', ADD COLUMN client_id INT NULL",
            "CREATE TABLE IF NOT EXISTS td_clients (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(160) NOT NULL, contact VARCHAR(120) NOT NULL DEFAULT '',
              email VARCHAR(190) NOT NULL DEFAULT '', phone VARCHAR(60) NOT NULL DEFAULT '', country VARCHAR(80) NOT NULL DEFAULT '', website VARCHAR(300) NOT NULL DEFAULT '',
              notes TEXT NULL, created_by INT NULL, created_at DATETIME NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "INSERT INTO td_clients (name, created_at) SELECT DISTINCT TRIM(p.client), NOW() FROM td_projects p
              WHERE TRIM(p.client) <> '' AND NOT EXISTS (SELECT 1 FROM td_clients c WHERE c.name = TRIM(p.client))",
            "UPDATE td_projects p JOIN td_clients c ON c.name = TRIM(p.client) SET p.client_id = c.id WHERE p.client_id IS NULL",
            "CREATE TABLE IF NOT EXISTS td_project_leads (project_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY (project_id, user_id), INDEX (user_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "INSERT IGNORE INTO td_project_leads (project_id, user_id) SELECT p.id, p.created_by FROM td_projects p JOIN td_users u ON u.id = p.created_by AND u.role = 'lead'",
            "INSERT IGNORE INTO td_project_leads (project_id, user_id) SELECT DISTINCT t.project_id, t.created_by FROM td_tasks t JOIN td_users u ON u.id = t.created_by AND u.role = 'lead'",
            "ALTER TABLE td_comments ADD COLUMN parent_id INT NULL, ADD INDEX (parent_id)",
            "CREATE TABLE IF NOT EXISTS td_events (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(200) NOT NULL, descr TEXT NULL, start_ms BIGINT NOT NULL, end_ms BIGINT NOT NULL,
              location VARCHAR(200) NOT NULL DEFAULT '', meet_url VARCHAR(500) NOT NULL DEFAULT '', project_id INT NULL, created_by INT NOT NULL,
              created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX (start_ms), INDEX (created_by)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_event_guests (event_id INT NOT NULL, user_id INT NOT NULL, response ENUM('pending','yes','no','maybe') NOT NULL DEFAULT 'pending',
              PRIMARY KEY (event_id, user_id), INDEX (user_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
            "ALTER TABLE td_files MODIFY project_id INT NULL, ADD COLUMN scope ENUM('project','company') NOT NULL DEFAULT 'project',
              ADD COLUMN visibility ENUM('all','admin') NOT NULL DEFAULT 'all'",
        ],
        18 => [
            /* v2.16: minutes of meeting (MoM) written with AI, and their action items */
            "CREATE TABLE IF NOT EXISTS td_moms (id INT AUTO_INCREMENT PRIMARY KEY, event_id INT NULL, project_id INT NULL, title VARCHAR(200) NOT NULL,
              meeting_ms BIGINT NOT NULL, attendees TEXT NULL, guests_ext VARCHAR(500) NOT NULL DEFAULT '', transcript MEDIUMTEXT NULL, content MEDIUMTEXT NULL,
              lang VARCHAR(5) NOT NULL DEFAULT 'auto', status ENUM('draft','final') NOT NULL DEFAULT 'draft', created_by INT NOT NULL,
              created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, sent_at DATETIME NULL, INDEX (event_id), INDEX (project_id), INDEX (created_by))
              ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_mom_actions (id INT AUTO_INCREMENT PRIMARY KEY, mom_id INT NOT NULL, text VARCHAR(500) NOT NULL, owner_id INT NULL,
              owner_name VARCHAR(120) NOT NULL DEFAULT '', due DATE NULL, done TINYINT(1) NOT NULL DEFAULT 0, done_at DATETIME NULL, sort INT NOT NULL DEFAULT 0,
              INDEX (mom_id), INDEX (owner_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_mom_parts (mom_id INT NOT NULL, seq INT NOT NULL, text MEDIUMTEXT NOT NULL, PRIMARY KEY (mom_id, seq)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
        ],
        19 => [
            /* v2.17: roles made by the Admin, weekly contract hours, and each team's capability matrix */
            "CREATE TABLE IF NOT EXISTS td_roles (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(80) NOT NULL, perms VARCHAR(500) NOT NULL DEFAULT '[]',
              color VARCHAR(7) NOT NULL DEFAULT '#5B6B7A', created_at DATETIME NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "ALTER TABLE td_users ADD COLUMN role_id INT NULL, ADD COLUMN weekly_hours DECIMAL(5,2) NULL",
            "CREATE TABLE IF NOT EXISTS td_skills (id INT AUTO_INCREMENT PRIMARY KEY, team_id INT NOT NULL, name VARCHAR(80) NOT NULL, sort INT NOT NULL DEFAULT 0,
              INDEX (team_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci",
            "CREATE TABLE IF NOT EXISTS td_user_skills (user_id INT NOT NULL, skill_id INT NOT NULL, level TINYINT NOT NULL DEFAULT 0, updated_by INT NULL,
              updated_at DATETIME NULL, PRIMARY KEY (user_id, skill_id), INDEX (skill_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
        ],
        20 => [
            /* v2.18: phones and browsers that receive push notifications (one row per device) */
            "CREATE TABLE IF NOT EXISTS td_push_subs (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, endpoint VARCHAR(1000) NOT NULL, ep_hash CHAR(64) NOT NULL,
              p256dh VARCHAR(120) NOT NULL, auth VARCHAR(40) NOT NULL, ua VARCHAR(200) NOT NULL DEFAULT '', created_at DATETIME NOT NULL, last_ok DATETIME NULL,
              UNIQUE KEY (ep_hash), INDEX (user_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
        ],
        21 => [
            /* administrative departments (e.g. accounting): their members do not log hours on projects */
            "ALTER TABLE td_teams ADD COLUMN administrative TINYINT(1) NOT NULL DEFAULT 0",
        ],
        22 => [
            /* top management: shown at the top of the org chart regardless of team-lead status */
            "ALTER TABLE td_users ADD COLUMN top_mgmt TINYINT(1) NOT NULL DEFAULT 0",
            "UPDATE td_users SET top_mgmt = 1 WHERE role = 'owner' AND id NOT IN (SELECT lead_id FROM td_teams WHERE lead_id IS NOT NULL)",
        ],
    ];
}

function schema_version(): int
{
    db()->exec("CREATE TABLE IF NOT EXISTS td_meta (k VARCHAR(40) PRIMARY KEY, v VARCHAR(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $r = q("SELECT v FROM td_meta WHERE k = 'schema'")->fetch();
    if ($r) return (int)$r['v'];
    /* An install from before versioning already has the version-1 tables. */
    return db()->query("SHOW TABLES LIKE 'td_users'")->fetch() ? 1 : 0;
}

/** Brings the database up to TD_SCHEMA_VERSION. Safe to call on every request. */
function migrate(): void
{
    $v = schema_version();
    if ($v >= TD_SCHEMA_VERSION) return;
    foreach (td_migrations() as $ver => $stmts) {
        if ($ver <= $v) continue;
        foreach ($stmts as $sql) {
            try {
                db()->exec($sql);
            } catch (PDOException $e) {
                /* Re-running a half-applied step: ignore "duplicate column/key" and "key already dropped" only. */
                if (!in_array((int)($e->errorInfo[1] ?? 0), [1060, 1061, 1091], true)) throw $e;
            }
        }
        q("REPLACE INTO td_meta (k, v) VALUES ('schema', ?)", [(string)$ver]);
    }
}

/** True when the user belongs to, or leads, an administrative team (no project hours). */
function user_is_admin_dept(int $uid): bool
{
    $r = q("SELECT 1 FROM td_users u LEFT JOIN td_teams t ON (t.id = u.team_id OR t.lead_id = u.id) WHERE u.id = ? AND t.administrative = 1 LIMIT 1", [$uid]);
    return (bool) $r->fetch();
}

/* ---------- calendar helpers (shared by the API and the reminder job) ---------- */
const TD_TZ = ['SY' => 'Asia/Damascus', 'EG' => 'Africa/Cairo', 'DE' => 'Europe/Berlin'];
/** Company work week: Saturday to Thursday, Friday off. PHP 'w' numbers, 0 = Sunday. */
const TD_DEFAULT_WORKDAYS = [6, 0, 1, 2, 3, 4];
/** Work days for one person (stored as "6,0,1,2,3,4"); falls back to the company week. */
function user_workdays(array $u): array
{
    $d = array_values(array_unique(array_filter(array_map('intval', explode(',', (string)($u['work_days'] ?? ''))), fn($x) => $x >= 0 && $x <= 6)));
    if (($u['work_days'] ?? '') === '' || !$d) return TD_DEFAULT_WORKDAYS;
    return $d;
}
/** First day of the company week containing $date: always Saturday. ($country is kept for older callers.) */
function week_start(string $date, string $country = ''): string
{
    $ts = strtotime($date . ' 00:00:00 UTC');
    $back = ((int)gmdate('w', $ts) - 6 + 7) % 7;
    return gmdate('Y-m-d', $ts - $back * 86400);
}
function week_locked(int $userId, string $date, string $country): bool
{
    $ws = week_start($date, $country);
    $r = q("SELECT status FROM td_weeks WHERE user_id = ? AND week_start = ?", [$userId, $ws])->fetch();
    return $r && in_array($r['status'], ['submitted', 'approved'], true);
}
function easter_ts(int $y): int
{
    $a = $y % 19; $b = intdiv($y, 100); $c = $y % 100; $d = intdiv($b, 4); $e = $b % 4; $f = intdiv($b + 8, 25);
    $g = intdiv($b - $f + 1, 3); $h = (19 * $a + $b - $d - $g + 15) % 30; $i = intdiv($c, 4); $k = $c % 4;
    $l = (32 + 2 * $e + 2 * $i - $h - $k) % 7; $m = intdiv($a + 11 * $h + 22 * $l, 451);
    $month = intdiv($h + $l - 7 * $m + 114, 31); $day = (($h + $l - 7 * $m + 114) % 31) + 1;
    return gmmktime(0, 0, 0, $month, $day, $y);
}
/** Nationwide German public holidays (state-only holidays are added by hand). */
function german_holidays(int $y): array
{
    $e = easter_ts($y);
    $d = fn(int $off) => gmdate('Y-m-d', $e + $off * 86400);
    return [
        "$y-01-01" => 'Neujahr', $d(-2) => 'Karfreitag', $d(1) => 'Ostermontag', "$y-05-01" => 'Tag der Arbeit',
        $d(39) => 'Christi Himmelfahrt', $d(50) => 'Pfingstmontag', "$y-10-03" => 'Tag der Deutschen Einheit',
        "$y-12-25" => '1. Weihnachtstag', "$y-12-26" => '2. Weihnachtstag',
    ];
}

/** Secret keys for the cron job and the accounting export: from config.php if set, otherwise generated once and stored. */
function secret_key(string $name): string
{
    $fromCfg = (string)cfg($name, '');
    if (strlen($fromCfg) >= 20) return $fromCfg;
    $r = q('SELECT v FROM td_meta WHERE k = ?', [$name])->fetch();
    if ($r) return $r['v'];
    $v = bin2hex(random_bytes(20));
    q('INSERT IGNORE INTO td_meta (k, v) VALUES (?, ?)', [$name, $v]);
    return (string)q('SELECT v FROM td_meta WHERE k = ?', [$name])->fetch()['v'];
}


/* ---------- leave rules ---------- */
const TD_LEAVE_NOTICE_DAYS = 14;
const TD_DEFAULT_ALLOWANCE = 15;
/** Working days in a leave, split by calendar year: [year => days]. Weekends and the person's public holidays don't count. */
function leave_days_by_year(array $u, string $start, string $end): array
{
    $work = user_workdays($u);
    $hol = [];
    foreach (q('SELECT day FROM td_holidays WHERE country = ? AND day BETWEEN ? AND ?', [$u['country'], $start, $end])->fetchAll() as $h) $hol[$h['day']] = true;
    $out = [];
    for ($d = $start; $d <= $end; $d = gmdate('Y-m-d', strtotime($d . ' 00:00:00 UTC') + 86400)) {
        if (!in_array((int)gmdate('w', strtotime($d . ' 00:00:00 UTC')), $work, true) || isset($hol[$d])) continue;
        $y = (int)substr($d, 0, 4);
        $out[$y] = ($out[$y] ?? 0) + 1;
    }
    return $out;
}
/** Annual leave already used or requested (not declined) in a year. */
function annual_taken(array $u, int $year, ?int $exceptId = null): float
{
    $n = 0.0;
    $rows = q("SELECT * FROM td_leaves WHERE user_id = ? AND kind = 'annual' AND status <> 'rejected' AND start_date <= ? AND end_date >= ?",
        [$u['id'], "$year-12-31", "$year-01-01"])->fetchAll();
    foreach ($rows as $l) {
        if ($exceptId && (int)$l['id'] === $exceptId) continue;
        $n += leave_days_by_year($u, $l['start_date'], $l['end_date'])[$year] ?? 0;
    }
    return $n;
}
/** Team leaders who give the first approval for this person: their own leader if set, otherwise any active leader. Empty = skip to the manager. */
function first_approvers(array $u): array
{
    if ($u['role'] !== 'employee') return [];
    /* Only the leader of the person's team (or the nearest one above it). No team leader: straight to the Admin. */
    if (!empty($u['lead_id'])) {
        $l = q("SELECT id FROM td_users WHERE id = ? AND role = 'lead' AND active = 1", [$u['lead_id']])->fetch();
        if ($l) return [(int)$l['id']];
    }
    return [];
}
/** Leave requests waiting for this person's decision. */
function leaves_waiting_for(array $me): int
{
    $n = has_perm($me, 'approve') ? (int)q("SELECT COUNT(*) c FROM td_leaves WHERE status = 'lead_approved'")->fetch()['c'] : 0;
    if ($me['role'] !== 'lead') return $n;
    foreach (q("SELECT l.user_id, u.* FROM td_leaves l JOIN td_users u ON u.id = l.user_id WHERE l.status = 'pending'")->fetchAll() as $r) {
        if (in_array((int)$me['id'], first_approvers($r), true)) $n++;
    }
    return $n;
}

/* ---------- project files ---------- */
const TD_FILE_CATS = ['drawings', 'models', 'contracts', 'reports', 'mail', 'other'];
/** Allowed upload types. Anything a browser could run as a page (html, svg, js, php…) is refused. */
const TD_FILE_EXT = ['pdf', 'dwg', 'dxf', 'ifc', 'rvt', 'rfa', 'nwd', 'nwc', 'bcf', 'bcfzip', 'xlsx', 'xls', 'csv', 'docx', 'doc', 'pptx', 'ppt',
    'png', 'jpg', 'jpeg', 'webp', 'zip', 'rar', '7z', 'txt', 'msg', 'eml'];
const TD_INLINE_EXT = ['pdf', 'png', 'jpg', 'jpeg', 'webp'];
/* Company files: logos, company profiles, legal papers and templates. Design formats are allowed there but always download, never open. */
const TD_CFILE_CATS = ['logos', 'profiles', 'legal', 'templates', 'presentations', 'hr', 'other'];
const TD_CFILE_EXTRA = ['svg', 'ai', 'eps', 'psd', 'indd'];
/** Folder for uploaded files; created on first use and closed to direct web access. */
function upload_dir(): string
{
    $dir = rtrim((string)cfg('upload_dir', __DIR__ . '/uploads'), '/');
    if (!is_dir($dir)) {
        if (!@mkdir($dir, 0750, true)) throw new ApiError('upload_dir', 500);
    }
    if (!is_file($dir . '/.htaccess')) {
        @file_put_contents($dir . '/.htaccess', "# Files are served only through api.php after sign-in\n<IfModule mod_authz_core.c>\n    Require all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\n    Deny from all\n</IfModule>\n");
        @file_put_contents($dir . '/index.html', '');
    }
    return $dir;
}
function ini_bytes(string $v): int
{
    $v = trim($v);
    if ($v === '') return 0;
    $n = (int)$v;
    switch (strtolower(substr($v, -1))) { case 'g': $n *= 1024; case 'm': $n *= 1024; case 'k': $n *= 1024; }
    return $n;
}
/** The real upload limit: the smallest of config.php and the hosting's PHP settings. */
function max_upload_bytes(): int
{
    $lim = [(int)cfg('max_upload_mb', 50) * 1048576];
    foreach (['upload_max_filesize', 'post_max_size'] as $k) { $b = ini_bytes((string)ini_get($k)); if ($b > 0) $lim[] = $b; }
    return min($lim);
}


/* ---------- notifications: in the app, on the phone (push) and by Telegram ---------- */
function tg_token(): string { return trim((string)cfg('telegram_bot_token', '')); }
function tg_bot_name(): string { return ltrim(trim((string)cfg('telegram_bot_name', '')), '@'); }
/** One call to the Telegram Bot API. Returns the decoded answer, or null when Telegram is not set up or can't be reached. */
function tg_call(string $method, array $params = []): ?array
{
    $tok = tg_token();
    if ($tok === '') return null;
    $url = rtrim((string)cfg('telegram_api', 'https://api.telegram.org'), '/') . '/bot' . $tok . '/' . $method;
    $body = json_encode($params, JSON_UNESCAPED_UNICODE);
    $res = false;
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $body, CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'], CURLOPT_CONNECTTIMEOUT => 4, CURLOPT_TIMEOUT => 6]);
        $res = curl_exec($ch);
        curl_close($ch);
    } else {
        $ctx = stream_context_create(['http' => ['method' => 'POST', 'header' => "Content-Type: application/json\r\n", 'content' => $body, 'timeout' => 6, 'ignore_errors' => true]]);
        $res = @file_get_contents($url, false, $ctx);
    }
    if (!is_string($res) || $res === '') return null;
    $d = json_decode($res, true);
    return is_array($d) ? $d : null;
}
/** Sends a Telegram message to one person. A person who blocked the bot is unlinked. */
function tg_send_user(array $u, string $text): bool
{
    if (empty($u['tg_chat'])) return false;
    $r = tg_call('sendMessage', ['chat_id' => $u['tg_chat'], 'text' => $text, 'disable_web_page_preview' => true]);
    if ($r && empty($r['ok']) && (int)($r['error_code'] ?? 0) === 403) {
        q('UPDATE td_users SET tg_chat = NULL WHERE id = ?', [$u['id']]);
    }
    return (bool)($r['ok'] ?? false);
}
/** Digits of a phone number, without a leading 00 (so "+963 9…" and "00963 9…" compare equal). */
function phone_digits(string $p): string
{
    $d = preg_replace('/\D+/', '', $p) ?? '';
    return str_starts_with($d, '00') ? substr($d, 2) : $d;
}
/** The active account whose profile phone matches a number shared in Telegram, or null. */
function user_by_phone(string $shared): ?array
{
    $s = phone_digits($shared);
    if (strlen($s) < 7) return null;
    $exact = [];
    $tail = [];
    foreach (q("SELECT * FROM td_users WHERE active = 1 AND phone <> ''")->fetchAll() as $u) {
        $d = phone_digits($u['phone']);
        if ($d === '') continue;
        if ($d === $s) $exact[] = $u;
        elseif (strlen($d) >= 9 && substr($d, -9) === substr($s, -9)) $tail[] = $u;  /* local format such as 09… */
    }
    if (count($exact) === 1) return $exact[0];
    if (!$exact && count($tail) === 1) return $tail[0];
    return null;
}
/** A one-button keyboard in Telegram that shares the person's own number. */
function tg_contact_keyboard(): array
{
    return ['keyboard' => [[['text' => '📱 مشاركة رقمي / Share my number', 'request_contact' => true]]], 'resize_keyboard' => true, 'one_time_keyboard' => true];
}
/** Handles one update from the bot: "/start CODE" links the account, a shared contact links it by phone, "/stop" unlinks it. */
function tg_handle_update(array $up): void
{
    $m = $up['message'] ?? null;
    if (!is_array($m) || !isset($m['chat']['id'])) return;
    $chat = (string)$m['chat']['id'];
    $text = trim((string)($m['text'] ?? ''));
    $site = rtrim((string)cfg('site_url', ''), '/');
    /* A contact the person shared about themselves: link the account whose profile has that phone. */
    if (isset($m['contact']['phone_number'])) {
        $own = isset($m['contact']['user_id'], $m['from']['id']) && (string)$m['contact']['user_id'] === (string)$m['from']['id'];
        $u = $own ? user_by_phone((string)$m['contact']['phone_number']) : null;
        if ($u) {
            q('UPDATE td_users SET tg_chat = NULL WHERE tg_chat = ? AND id <> ?', [$chat, $u['id']]);
            q('UPDATE td_users SET tg_chat = ?, tg_code = NULL, tg_on = 1 WHERE id = ?', [$chat, $u['id']]);
            tg_call('sendMessage', ['chat_id' => $chat, 'reply_markup' => ['remove_keyboard' => true],
                'text' => "✅ أهلاً {$u['name']}، تم ربط حسابك في TECTOVA Team Desk عن طريق رقم هاتفك. ستصلك الإشعارات هنا.\nHello {$u['name']}, your TECTOVA Team Desk account is linked by your phone number. Notifications will arrive here."]);
        } else {
            tg_call('sendMessage', ['chat_id' => $chat, 'reply_markup' => ['remove_keyboard' => true],
                'text' => $own ? "⚠️ لم نجد حساباً بهذا الرقم. أضف رقمك في Team Desk ← ملفي الشخصي، ثم شارك رقمك هنا مرة أخرى، أو اضغط «ربط تلغرام» من الموقع.\nNo account has this number. Add your number in Team Desk → My profile, then share it here again, or press “Link Telegram” on the site."
                              : "⚠️ شارك رقمك أنت عن طريق الزر، وليس جهة اتصال أخرى.\nPlease share your own number with the button, not another contact."]);
        }
        return;
    }
    if (preg_match('/^\/start(?:@\w+)?\s+([a-f0-9]{16})$/', $text, $mm)) {
        $u = q('SELECT * FROM td_users WHERE tg_code = ? AND active = 1', [$mm[1]])->fetch();
        if ($u) {
            q('UPDATE td_users SET tg_chat = NULL WHERE tg_chat = ? AND id <> ?', [$chat, $u['id']]);
            q('UPDATE td_users SET tg_chat = ?, tg_code = NULL, tg_on = 1 WHERE id = ?', [$chat, $u['id']]);
            tg_call('sendMessage', ['chat_id' => $chat, 'text' => "✅ أهلاً {$u['name']}، تم ربط حسابك في TECTOVA Team Desk. ستصلك الإشعارات هنا.\nHello {$u['name']}, your Team Desk account is linked. Notifications will arrive here.\n\nلإيقاف الإشعارات / To stop: /stop"]);
            return;
        }
        tg_call('sendMessage', ['chat_id' => $chat, 'text' => "⚠️ رمز الربط غير صالح أو قديم. افتح Team Desk واضغط «ربط تلغرام» مرة أخرى.\nThis link code is invalid or old. Open Team Desk and press “Link Telegram” again." . ($site ? "\n$site" : '')]);
        return;
    }
    if (preg_match('/^\/stop\b/', $text)) {
        q('UPDATE td_users SET tg_chat = NULL WHERE tg_chat = ?', [$chat]);
        tg_call('sendMessage', ['chat_id' => $chat, 'text' => "تم إلغاء الربط. لن تصلك إشعارات هنا.\nUnlinked. You won’t get notifications here."]);
        return;
    }
    tg_call('sendMessage', ['chat_id' => $chat, 'reply_markup' => tg_contact_keyboard(),
        'text' => "هذا بوت إشعارات TECTOVA Team Desk. للربط: اضغط «مشاركة رقمي» أدناه (إذا كان رقمك مضافاً في ملفك الشخصي على الموقع)، أو افتح الموقع ← ملفي الشخصي ← «ربط تلغرام».\n"
            . "This is the TECTOVA Team Desk notification bot. To link: tap “Share my number” below (if your number is in your profile on the site), or open the site → My profile → “Link Telegram”."]);
}
/** Without a webhook (or on a host without HTTPS), new messages to the bot are fetched on demand. */
function tg_poll(): void
{
    if (tg_token() === '') return;
    $r = q("SELECT v FROM td_meta WHERE k = 'tg_offset'")->fetch();
    $off = $r ? (int)$r['v'] : 0;
    $res = tg_call('getUpdates', ['offset' => $off, 'timeout' => 0, 'allowed_updates' => ['message']]);
    if (!$res || empty($res['ok'])) return;
    foreach ($res['result'] ?? [] as $up) {
        $off = max($off, (int)$up['update_id'] + 1);
        tg_handle_update($up);
    }
    q("REPLACE INTO td_meta (k, v) VALUES ('tg_offset', ?)", [(string)$off]);
}

/** The Telegram / email text for one notification, Arabic first then English. */
function notif_text(string $kind, array $d, ?array $u = null): string
{
    $when = '';
    if (isset($d['start'])) {
        try {
            $tz = new DateTimeZone(TD_TZ[$u['country'] ?? 'DE'] ?? 'Europe/Berlin');
            $a1 = (new DateTimeImmutable('@' . intdiv((int)$d['start'], 1000)))->setTimezone($tz);
            $a2 = (new DateTimeImmutable('@' . intdiv((int)($d['end'] ?? $d['start']), 1000)))->setTimezone($tz);
            $when = "\n🗓 " . $a1->format('D d.m.Y H:i') . '–' . $a2->format('H:i') . ' (' . $tz->getName() . ')';
        } catch (Throwable $e) {}
    }
    $meet = !empty($d['meet']) ? "\n🎥 {$d['meet']}" : '';
    $a = $d['by'] ?? '';
    $t = $d['t'] ?? '';
    $p = !empty($d['p']) ? "\n📁 {$d['p']}" : '';
    $n = !empty($d['note']) ? "\n💬 {$d['note']}" : '';
    $due = !empty($d['due']) ? "\n📅 {$d['due']}" : '';
    $range = isset($d['s']) ? "\n📅 {$d['s']} → {$d['e']}" . (!empty($d['days']) ? " ({$d['days']})" : '') : '';
    switch ($kind) {
        case 'task_assigned': return "📌 مهمة جديدة لك من $a\n$t$p$due\n\nNew task for you from $a: $t";
        case 'task_due':      return "📅 تغيّر موعد تسليم مهمتك\n$t$p$due\n\n$a changed the due date of: $t";
        case 'task_done':     return "✔️ أنجز $a المهمة\n$t$p\n\n$a finished: $t";
        case 'qc_sent':       return "🛡 بانتظار الكونترول منك\n$t$p\nأرسلها: $a\n\n$a sent \"$t\" for your QC check.";
        case 'qc_ok':         return "✅ تم اعتماد مهمتك بعد الكونترول\n$t$p$n\nاعتمدها: $a\n\n$a approved \"$t\" after QC.";
        case 'qc_back':       return "↩️ أُعيدت مهمتك للتعديل\n$t$p$n\nمن: $a\n\n$a returned \"$t\" for changes.";
        case 'comment':       return "💬 تعليق جديد من $a\n$t$p\n«{$d['body']}»\n\nNew comment from $a on \"$t\".";
        case 'mention':       return "📣 ذكرك $a في تعليق\n" . ($t !== '' ? "$t$p\n" : (($d['p'] ?? '') !== '' ? "📁 {$d['p']}\n" : '')) . "«{$d['body']}»\n\n$a mentioned you in a comment.";
        case 'leave_req':     return "🏖 طلب إجازة من {$d['who']} بانتظار قرارك$range\n\nLeave request from {$d['who']} is waiting for you.";
        case 'leave_lead':    return "🟡 وافق قائد الفريق ($a) على إجازتك، وهي الآن بانتظار موافقة الإدارة$range\n\nYour team leader approved your leave. It now waits for the manager.";
        case 'leave_ok':      return "✅ تمت الموافقة على إجازتك$range\nمن: $a\n\nYour leave was approved by $a.";
        case 'leave_no':      return "❌ رُفض طلب إجازتك$range\nمن: $a\n\nYour leave request was declined by $a.";
        case 'week_ok':       return "✅ اعتُمدت ساعات أسبوعك ({$d['ws']})\nمن: $a\n\nYour hours for the week of {$d['ws']} were approved.";
        case 'reply':         return "↪️ ردّ $a على تعليقك\n" . ($t !== '' ? "$t$p\n" : (($d['p'] ?? '') !== '' ? "📁 {$d['p']}\n" : '')) . "«{$d['body']}»\n\n$a replied to your comment.";
        case 'event_invite':  return "📅 دعوة: $t$when$meet\nمن: $a\n\n$a invited you to \"$t\".";
        case 'event_change':  return "🔁 تغيّر موعد: $t$when$meet\n\n$a updated \"$t\".";
        case 'event_cancel':  return "🚫 أُلغي: $t$when\n\n$a cancelled \"$t\".";
        case 'mom_sent':      return "📝 محضر الاجتماع جاهز: $t$p\nمن: $a\n\n" . ($d['text'] ?? '') . "\n\nMinutes of \"$t\" are ready.";
        case 'mom_action':    return "✅ بند جديد عليك من اجتماع: $t\n• {$d['item']}" . (!empty($d['due']) ? "\n📅 {$d['due']}" : '') . "\n\nNew action item for you from \"$t\".";
        case 'project_lead':  return "🏗 عيّنك $a قائد فريق على المشروع\n📁 {$d['p']}\n\n$a made you a team leader on this project.";
        case 'week_no':       return "❌ رُفضت ساعات أسبوعك ({$d['ws']})$n\nمن: $a\nراجعها وأعد إرسالها.\n\nYour hours for the week of {$d['ws']} were sent back. Please check and resubmit.";
    }
    return $kind;
}
const TD_NOTIF_SUBJ = ['task_assigned' => 'مهمة جديدة لك / New task', 'qc_sent' => 'بانتظار الكونترول / Ready for QC', 'qc_back' => 'أُعيدت للتعديل / Returned after QC',
    'leave_req' => 'طلب إجازة / Leave request', 'leave_ok' => 'تمت الموافقة على إجازتك / Leave approved', 'leave_no' => 'رُفض طلب الإجازة / Leave declined',
    'week_no' => 'رُفضت ساعات الأسبوع / Week sent back', 'mention' => 'ذكرك أحدهم / You were mentioned', 'event_invite' => 'دعوة / Invitation',
    'event_change' => 'تغيّر الموعد / Event updated', 'event_cancel' => 'أُلغي الموعد / Event cancelled', 'mom_sent' => 'محضر الاجتماع / Minutes of meeting',
    'mom_action' => 'بند عمل جديد / New action item'];
/** One notification for one person: saved for the bell, sent to their phone (push) and to Telegram if linked. Never throws. */
function notify_user(int $to, string $kind, array $data, ?int $actorId, ?int $taskId = null): void
{
    if ($to <= 0 || ($actorId !== null && $to === $actorId)) return;
    try {
        $u = q('SELECT * FROM td_users WHERE id = ? AND active = 1', [$to])->fetch();
        if (!$u) return;
        q('INSERT INTO td_notifications (user_id, kind, actor_id, task_id, data, created_at) VALUES (?,?,?,?,?,NOW())',
            [$to, $kind, $actorId, $taskId, json_encode($data, JSON_UNESCAPED_UNICODE)]);
        $text = notif_text($kind, $data, $u);
        $site = rtrim((string)cfg('site_url', ''), '/');
        if (!empty($u['tg_chat']) && (int)$u['tg_on']) tg_send_user($u, $text . ($site ? "\n\n$site" : ''));
        push_user($to, TD_NOTIF_SUBJ[$kind] ?? 'TECTOVA Team Desk', $text, './?notifs=1', $kind . ($taskId ? '-' . $taskId : ''));
    } catch (Throwable $e) {
        error_log('[team-desk] notify: ' . $e->getMessage());
    }
}
function project_label(?int $pid): string
{
    if (!$pid) return '';
    $p = q('SELECT code, name FROM td_projects WHERE id = ?', [$pid])->fetch();
    return $p ? trim(($p['code'] ? $p['code'] . ' · ' : '') . $p['name']) : '';
}
/** People named with @ in a comment: "@full name" or "@first-name". */
function mentioned_users(string $body): array
{
    if (mb_strpos($body, '@') === false) return [];
    $out = [];
    $low = mb_strtolower($body);
    foreach (q('SELECT id, name FROM td_users WHERE active = 1')->fetchAll() as $u) {
        $full = mb_strtolower(trim($u['name']));
        $first = preg_split('/\s+/u', $full)[0] ?? '';
        foreach (array_unique([$full, $first]) as $n) {
            if ($n === '' ) continue;
            if (preg_match('/(^|[\s(،,])@' . preg_quote($n, '/') . '(?=$|[\s.,،!?:)])/u', $low)) { $out[] = (int)$u['id']; break; }
        }
    }
    return array_values(array_unique($out));
}

/* ---------- organisation: teams in a tree, each with a team leader ---------- */
/** The teams this person leads, and every team below them. */
function led_team_ids(int $leadId): array
{
    $all = q('SELECT id, parent_id, lead_id FROM td_teams')->fetchAll();
    $kids = [];
    foreach ($all as $t) $kids[(int)$t['parent_id']][] = (int)$t['id'];
    $out = [];
    $stack = [];
    foreach ($all as $t) if ((int)$t['lead_id'] === $leadId) $stack[] = (int)$t['id'];
    while ($stack) {
        $x = array_pop($stack);
        if (isset($out[$x])) continue;
        $out[$x] = true;
        foreach ($kids[$x] ?? [] as $k) $stack[] = $k;
    }
    return array_keys($out);
}
/** Everyone a team leader is responsible for: the members of their teams and of the teams under them. */
function lead_member_ids(int $leadId): array
{
    $ids = led_team_ids($leadId);
    if (!$ids) return [];
    return array_map(fn($r) => (int)$r['id'], q('SELECT id FROM td_users WHERE id <> ? AND team_id IN (' . implode(',', $ids) . ')', [$leadId])->fetchAll());
}
/** SQL list of those people, safe to put in "IN (...)"; "0" when there is nobody. */
function lead_member_sql(int $leadId): string
{
    $ids = lead_member_ids($leadId);
    return $ids ? implode(',', $ids) : '0';
}
/** Keeps users.lead_id = the nearest team leader above each person (their own team's, or a parent team's if they lead it themselves). */
function sync_team_leads(): void
{
    $teams = [];
    foreach (q('SELECT id, parent_id, lead_id FROM td_teams')->fetchAll() as $t) $teams[(int)$t['id']] = $t;
    foreach (q('SELECT id, team_id, lead_id FROM td_users')->fetchAll() as $u) {
        $lead = null;
        $tid = (int)$u['team_id'];
        $guard = 0;
        while ($tid && isset($teams[$tid]) && $guard++ < 30) {
            $l = (int)$teams[$tid]['lead_id'];
            if ($l && $l !== (int)$u['id']) { $lead = $l; break; }
            $tid = (int)$teams[$tid]['parent_id'];
        }
        if ((int)$u['lead_id'] !== (int)$lead) q('UPDATE td_users SET lead_id = ? WHERE id = ?', [$lead, $u['id']]);
    }
}

/* ---------- v2.13: projects led by a team leader ---------- */
function lead_project_ids(int $uid): array
{
    return array_map(fn($r) => (int)$r['project_id'], q('SELECT project_id FROM td_project_leads WHERE user_id = ?', [$uid])->fetchAll());
}
function set_project_leads(int $pid, array $ids): void
{
    q('DELETE FROM td_project_leads WHERE project_id = ?', [$pid]);
    foreach ($ids as $u) q('INSERT IGNORE INTO td_project_leads (project_id, user_id) VALUES (?,?)', [$pid, (int)$u]);
}
function lead_ids_of_project(int $pid): array
{
    return array_map(fn($r) => (int)$r['user_id'], q('SELECT user_id FROM td_project_leads WHERE project_id = ?', [$pid])->fetchAll());
}

/* ---------- v2.16: AI for minutes of meeting ---------- */
/* ---------- v2.17: permissions ----------
   Each built-in role has a fixed set; a role made by the Admin has the boxes ticked for it.
   lead = runs a team (adds and assigns tasks to their engineers, first approval of their hours and leave). */
const TD_PERMS = ['lead', 'projects', 'see_all', 'approve', 'finance', 'clients', 'company', 'team', 'holidays'];
const TD_ROLE_PERMS = ['owner' => TD_PERMS, 'lead' => ['lead'], 'accountant' => ['finance', 'clients', 'company'], 'employee' => []];
function role_perms(?int $rid): array
{
    static $cache = [];
    if (!$rid) return [];
    if (!array_key_exists($rid, $cache)) {
        $r = q('SELECT perms FROM td_roles WHERE id = ?', [$rid])->fetch();
        $cache[$rid] = $r ? array_values(array_intersect(TD_PERMS, json_decode((string)$r['perms'], true) ?: [])) : [];
    }
    return $cache[$rid];
}
/** A built-in role's permissions: the Admin's set in td_meta, else the defaults. The Admin always has all of them;
    "lead" is what makes a Team leader, so it stays on for "lead" and off for the others. */
function builtin_perms(string $role): array
{
    if ($role === 'owner') return TD_PERMS;
    static $cache = [];
    if (isset($cache[$role])) return $cache[$role];
    $r = q('SELECT v FROM td_meta WHERE k = ?', ['perms_' . $role])->fetch();
    $p = $r ? (json_decode((string)$r['v'], true) ?: []) : (TD_ROLE_PERMS[$role] ?? []);
    $p = array_values(array_diff(array_intersect(TD_PERMS, $p), ['lead']));
    if ($role === 'lead') array_unshift($p, 'lead');
    return $cache[$role] = $p;
}
function eff_perms(array $u): array
{
    if (($u['role'] ?? '') === 'owner') return TD_PERMS;
    /* someone with a role the Admin made has exactly the boxes ticked for that role */
    if (!empty($u['role_id'])) return role_perms((int)$u['role_id']);
    return builtin_perms($u['role'] ?? 'employee');
}
function has_perm(array $me, string $k): bool { return in_array($k, eff_perms($me), true); }
/** Everyone who gives the final approval of leave: Admins and members of a role with "approve". */
function approver_ids(): array
{
    $ids = [];
    foreach (q('SELECT * FROM td_users WHERE active = 1 AND deleted = 0')->fetchAll() as $u) if (has_perm($u, 'approve')) $ids[] = (int)$u['id'];
    return $ids;
}

/* ---------- v2.18: Web Push (phone notifications for the installed app), no libraries ----------
   RFC 8291 (message encryption, aes128gcm) and RFC 8292 (VAPID). Keys are made once and kept in td_meta. */
function b64u(string $b): string { return rtrim(strtr(base64_encode($b), '+/', '-_'), '='); }
function b64u_dec(string $s): string { return (string)base64_decode(strtr($s, '-_', '+/') . str_repeat('=', (4 - strlen($s) % 4) % 4), true); }
function push_ready(): bool { return function_exists('openssl_pkey_derive') && function_exists('curl_init') && defined('OPENSSL_KEYTYPE_EC'); }
/** The server's VAPID key pair: ['d' => 32 bytes, 'pub' => 65 bytes uncompressed point]. */
function vapid_keys(): ?array
{
    if (!push_ready()) return null;
    $d = q("SELECT v FROM td_meta WHERE k = 'vapid_d'")->fetch();
    $p = q("SELECT v FROM td_meta WHERE k = 'vapid_pub'")->fetch();
    if ($d && $p) return ['d' => b64u_dec($d['v']), 'pub' => b64u_dec($p['v'])];
    $k = openssl_pkey_new(['curve_name' => 'prime256v1', 'private_key_type' => OPENSSL_KEYTYPE_EC]);
    if (!$k) return null;
    $e = openssl_pkey_get_details($k)['ec'];
    $pad = fn($s) => str_pad($s, 32, "\0", STR_PAD_LEFT);
    $dv = $pad($e['d']); $pub = "\x04" . $pad($e['x']) . $pad($e['y']);
    q("INSERT IGNORE INTO td_meta (k, v) VALUES ('vapid_d', ?), ('vapid_pub', ?)", [b64u($dv), b64u($pub)]);
    return vapid_keys_reload();
}
function vapid_keys_reload(): array
{
    return ['d' => b64u_dec(q("SELECT v FROM td_meta WHERE k = 'vapid_d'")->fetch()['v']), 'pub' => b64u_dec(q("SELECT v FROM td_meta WHERE k = 'vapid_pub'")->fetch()['v'])];
}
function ec_pub_pem(string $pub): string
{
    $der = hex2bin('3059301306072a8648ce3d020106082a8648ce3d030107034200') . $pub;
    return "-----BEGIN PUBLIC KEY-----\n" . chunk_split(base64_encode($der), 64, "\n") . "-----END PUBLIC KEY-----\n";
}
function ec_priv_pem(string $d, string $pub): string
{
    $der = hex2bin('30770201010420') . $d . hex2bin('a00a06082a8648ce3d030107a144034200') . $pub;
    return "-----BEGIN EC PRIVATE KEY-----\n" . chunk_split(base64_encode($der), 64, "\n") . "-----END EC PRIVATE KEY-----\n";
}
/** DER ECDSA signature to the raw 64-byte r||s that JWT ES256 uses. */
function ecdsa_raw(string $der): string
{
    $o = 2; if (ord($der[1]) & 0x80) $o += ord($der[1]) & 0x7f;
    $out = '';
    for ($i = 0; $i < 2; $i++) {
        $len = ord($der[$o + 1]); $v = substr($der, $o + 2, $len); $o += 2 + $len;
        $out .= str_pad(ltrim($v, "\0"), 32, "\0", STR_PAD_LEFT);
    }
    return $out;
}
function push_vapid_header(string $endpoint, array $keys): string
{
    $u = parse_url($endpoint);
    $aud = $u['scheme'] . '://' . $u['host'] . (isset($u['port']) ? ':' . $u['port'] : '');
    $site = trim((string)cfg('site_url', ''));
    $sub = (string)cfg('push_contact', '') ?: ($site !== '' ? $site : 'mailto:admin@example.com');
    $jwt = b64u('{"typ":"JWT","alg":"ES256"}') . '.' . b64u(json_encode(['aud' => $aud, 'exp' => time() + 12 * 3600, 'sub' => $sub], JSON_UNESCAPED_SLASHES));
    openssl_sign($jwt, $sig, openssl_pkey_get_private(ec_priv_pem($keys['d'], $keys['pub'])), OPENSSL_ALGO_SHA256);
    return 'vapid t=' . $jwt . '.' . b64u(ecdsa_raw($sig)) . ', k=' . b64u($keys['pub']);
}
/** RFC 8291: encrypts one message for one browser subscription. */
function push_encrypt(string $payload, string $uaPub, string $auth): string
{
    $eph = openssl_pkey_new(['curve_name' => 'prime256v1', 'private_key_type' => OPENSSL_KEYTYPE_EC]);
    $e = openssl_pkey_get_details($eph)['ec'];
    $pad = fn($s) => str_pad($s, 32, "\0", STR_PAD_LEFT);
    $asPub = "\x04" . $pad($e['x']) . $pad($e['y']);
    $secret = openssl_pkey_derive(openssl_pkey_get_public(ec_pub_pem($uaPub)), $eph, 32);
    $prkKey = hash_hmac('sha256', $secret, $auth, true);
    $ikm = hash_hmac('sha256', "WebPush: info\0" . $uaPub . $asPub . "\x01", $prkKey, true);
    $salt = random_bytes(16);
    $prk = hash_hmac('sha256', $ikm, $salt, true);
    $cek = substr(hash_hmac('sha256', "Content-Encoding: aes128gcm\0\x01", $prk, true), 0, 16);
    $nonce = substr(hash_hmac('sha256', "Content-Encoding: nonce\0\x01", $prk, true), 0, 12);
    $tag = '';
    $ct = openssl_encrypt($payload . "\x02", 'aes-128-gcm', $cek, OPENSSL_RAW_DATA, $nonce, $tag);
    return $salt . pack('N', 4096) . chr(65) . $asPub . $ct . $tag;
}
/** Push services the server may post to (no other addresses: the endpoint comes from a browser). */
function push_endpoint_ok(string $ep): bool
{
    $u = parse_url($ep);
    if (!$u || empty($u['host'])) return false;
    $host = strtolower($u['host']);
    foreach ((array)cfg('push_test_hosts', []) as $h) if ($host === $h) return true;
    if (($u['scheme'] ?? '') !== 'https') return false;
    foreach (['fcm.googleapis.com', 'android.googleapis.com', 'web.push.apple.com', 'push.apple.com', 'push.services.mozilla.com', 'notify.windows.com', 'push.microsoft.com'] as $ok)
        if ($host === $ok || str_ends_with($host, '.' . $ok)) return true;
    return false;
}
/** Sends to every device of a person; drops subscriptions the push service says are gone. Returns how many went out. */
function push_user(int $uid, string $title, string $body, string $url = './', string $tag = ''): int
{
    if (!push_ready()) return 0;
    $subs = q('SELECT * FROM td_push_subs WHERE user_id = ?', [$uid])->fetchAll();
    if (!$subs) return 0;
    $keys = vapid_keys();
    if (!$keys) return 0;
    $msg = json_encode(['title' => mb_substr($title, 0, 120), 'body' => mb_substr($body, 0, 600), 'url' => $url, 'tag' => $tag], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $n = 0;
    foreach ($subs as $s) {
        if (!push_endpoint_ok($s['endpoint'])) continue;
        try {
            $data = push_encrypt($msg, b64u_dec($s['p256dh']), b64u_dec($s['auth']));
            $ch = curl_init($s['endpoint']);
            curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $data, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 6, CURLOPT_CONNECTTIMEOUT => 3,
                CURLOPT_HTTPHEADER => ['Content-Type: application/octet-stream', 'Content-Encoding: aes128gcm', 'TTL: 86400', 'Urgency: normal',
                    'Authorization: ' . push_vapid_header($s['endpoint'], $keys)]]);
            curl_exec($ch);
            $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            if ($code >= 200 && $code < 300) { $n++; q('UPDATE td_push_subs SET last_ok = NOW() WHERE id = ?', [$s['id']]); }
            elseif (in_array($code, [400, 403, 404, 410], true)) q('DELETE FROM td_push_subs WHERE id = ?', [$s['id']]);
        } catch (Throwable $e) {
            error_log('[team-desk] push: ' . $e->getMessage());
        }
    }
    return $n;
}

/** Plain-text minutes for email and Telegram. */
function mom_text(array $m, array $actions, callable $nameOf): string
{
    $c = json_decode((string)$m['content'], true) ?: [];
    $o = [];
    $o[] = '📝 ' . $m['title'] . ' — ' . gmdate('Y-m-d', intdiv((int)$m['meeting_ms'], 1000));
    if (!empty($c['summary'])) { $o[] = ''; $o[] = $c['summary']; }
    if (!empty($c['topics'])) { $o[] = ''; foreach ($c['topics'] as $tp) { $o[] = '■ ' . ($tp['title'] ?? ''); foreach ($tp['points'] ?? [] as $pt) $o[] = '  - ' . $pt; } }
    if (!empty($c['decisions'])) { $o[] = ''; $o[] = 'القرارات / Decisions:'; foreach ($c['decisions'] as $x) $o[] = '  ✔ ' . $x; }
    if ($actions) { $o[] = ''; $o[] = 'بنود العمل / Action items:'; foreach ($actions as $a) $o[] = '  ☐ ' . $a['text'] . ' — ' . ($a['owner_id'] ? $nameOf((int)$a['owner_id']) : ($a['owner_name'] ?: '—')) . ($a['due'] ? ' · ' . $a['due'] : ''); }
    if (!empty($c['open_issues'])) { $o[] = ''; $o[] = 'نقاط مفتوحة / Open issues:'; foreach ($c['open_issues'] as $x) $o[] = '  ? ' . $x; }
    if (!empty($c['next_meeting'])) { $o[] = ''; $o[] = 'الاجتماع القادم / Next meeting: ' . $c['next_meeting']; }
    return implode("\n", $o);
}
