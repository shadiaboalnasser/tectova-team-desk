# TECTOVA Team Desk

A self-hosted team & project management app (PWA) for TECTOVA — runs on ordinary
shared PHP/MySQL hosting, with no dependency on any Google or Claude service, so
it works from Syria, Egypt and Germany alike.

التطبيق يعمل على استضافة PHP/MySQL عادية، بدون أي خدمة خارجية.
**دليل التركيب الكامل بالعربي:** [`README-AR.txt`](README-AR.txt).

## Features

- Projects, tasks and team members
- Employee hour logging with a daily reminder
- Accounting export (links available on the **Team** page as the manager)
- Optional Telegram notifications
- Installable PWA (offline shell via `sw.js`, `manifest.json`)
- Arabic-first, RTL interface

## Requirements

- PHP **8.0+** with extensions: `openssl`, `curl`, `mbstring`, `pdo_mysql`
- MySQL or MariaDB
- An SSL certificate (Let's Encrypt is fine)
- Apache (uses the bundled `.htaccess`)

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | App shell (loads `assets/app.css`, `assets/app.js`) |
| `api.php` | Backend API endpoint |
| `lib.php` | Shared backend logic |
| `cron.php` | Hourly job (reminders, maintenance) |
| `install.php` | One-time installer (creates the `td_*` tables) |
| `config.sample.php` | Copy to `config.php` and fill in DB details |
| `assets/` | CSS, JS and logos |
| `fonts/`, `icons/` | Web fonts and PWA icons |
| `manifest.json`, `sw.js` | PWA manifest and service worker |

## Setup (short version)

1. Create a subdomain with SSL pointing to an empty folder (e.g. `/team`).
2. Create a MySQL database (all tables are prefixed `td_`).
3. Copy `config.sample.php` → `config.php` and fill in the four DB values.
4. Upload all files **except** `config.sample.php` and `README-AR.txt`.
   Make sure the hidden `.htaccess` is uploaded too.
5. Open `https://your-subdomain/install.php` in the browser and follow it.

Full step-by-step instructions (in Arabic) are in [`README-AR.txt`](README-AR.txt).

## Configuration

All settings live in `config.php` (created from `config.sample.php`): database
credentials, `site_url`, `max_upload_mb`, optional Telegram bot token/name, and
the daily reminder hour. The cron and accounting-export secret keys are generated
automatically — copy the ready-made links from the **Team** page as the manager.

> **Never commit `config.php`.** It is ignored by `.gitignore` and must live on
> the server only.

## Development notes

- No build step and no Composer — it is plain PHP plus static assets.
- CI runs `php -l` on every `.php` file for PHP 8.0 and 8.3
  (see `.github/workflows/php-lint.yml`).

## License

Proprietary — internal TECTOVA project. All rights reserved.
