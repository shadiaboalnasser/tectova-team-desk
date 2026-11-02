#!/usr/bin/env bash
# TECTOVA Team Desk deploy. Runs as root on the VM (OS Login + sudo), same pattern as the accounting deploy.
set -euo pipefail

APP_DIR="/var/www/team"
OWNER="shadi21985_gmail_com"
OWNER_HOME="/home/$OWNER"
HEALTH_URL="https://team.tectova-eng.com/"

# Git runs as root, so pass the owner's deploy key by absolute path.
# (A "~" or -F config path would expand to /root/.ssh and fail.)
export GIT_SSH_COMMAND="ssh -i $OWNER_HOME/.ssh/team_deploy -o IdentitiesOnly=yes -o UserKnownHostsFile=$OWNER_HOME/.ssh/known_hosts"
git config --global --add safe.directory "$APP_DIR"
cd "$APP_DIR"

echo "==> 1/6  Backup database"
runuser -u "$OWNER" -- "$OWNER_HOME/team-backup.sh"

echo "==> 2/6  Record current version (for rollback)"
PREV=$(git rev-parse HEAD)
echo "    current: $PREV"

echo "==> 3/6  Fetch latest code"
git fetch --quiet origin main
git reset --hard origin/main

echo "==> 4/6  Check files"
for f in *.php; do php -l "$f" >/dev/null; done
node --check assets/app.js

echo "==> 5/6  Reload PHP-FPM"
systemctl reload php8.2-fpm

echo "==> 6/6  Health check"
ok=0
for i in $(seq 1 10); do
  if curl -fsSk -o /dev/null --resolve team.tectova-eng.com:443:127.0.0.1 "$HEALTH_URL"; then ok=1; break; fi
  sleep 2
done

if [ "$ok" -ne 1 ]; then
  echo "!!  Health check FAILED, rolling back to $PREV"
  git reset --hard "$PREV"
  systemctl reload php8.2-fpm
  exit 1
fi

echo "==> OK  ($(git rev-parse --short HEAD))"
