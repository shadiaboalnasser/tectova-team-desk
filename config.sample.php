<?php
/*
 * TECTOVA Team Desk — settings.
 * 1) Copy this file to config.php
 * 2) Fill in the MySQL details from your hosting control panel.
 * Never share config.php with anyone.
 */
return [
    'db_host' => 'localhost',          // often "localhost"; IONOS/Strato show a host such as db5001234.hosting-data.io
    'db_port' => null,                 // leave null unless your host gives a port
    'db_name' => 'DATABASE_NAME',
    'db_user' => 'DATABASE_USER',
    'db_pass' => 'DATABASE_PASSWORD',

    // Address of the site, used in links inside notifications
    'site_url' => 'https://team.example.com',
    // Largest file that can be uploaded to a project, in MB. Your hosting may allow less (upload_max_filesize).
    'max_upload_mb' => 50,
    // Telegram notifications (optional). Create a bot with @BotFather, then paste its token and its username (without @).
    'telegram_bot_token' => '',
    'telegram_bot_name' => '',
    // Local hour (0-23) when employees get the "log your hours" reminder
    'reminder_hour' => 18,
    // The secret keys for the hourly cron job and the accounting export are generated automatically.
    // You can copy the ready-made links from the "Team" page when signed in as the manager.
];
