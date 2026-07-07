#!/usr/bin/env bash
# Deploy the built site to your own server over SSH (rsync).
#
# Usage:
#   DEPLOY_HOST=example.com DEPLOY_USER=deploy DEPLOY_PATH=/var/www/universal-paywall \
#     ./scripts/deploy-server.sh
#
# Serve the target directory with any static web server — see deploy/nginx.conf
# for a ready-made server block. The site is served from the domain root, so no
# BASE_PATH is needed for a self-hosted deploy.
set -euo pipefail

: "${DEPLOY_HOST:?set DEPLOY_HOST (e.g. example.com)}"
: "${DEPLOY_USER:?set DEPLOY_USER (the ssh user)}"
: "${DEPLOY_PATH:?set DEPLOY_PATH (e.g. /var/www/universal-paywall)}"

npm run build

rsync -az --delete \
  -e ssh \
  dist/ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"

echo "Deployed dist/ → ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}"
