#!/bin/sh
set -eu

STAMP_FILE="node_modules/.package-lock.stamp"

if [ ! -d "node_modules" ] || [ ! -f "$STAMP_FILE" ] || ! cmp -s package-lock.json "$STAMP_FILE"; then
  npm install
  cp package-lock.json "$STAMP_FILE"
fi

exec "$@"
