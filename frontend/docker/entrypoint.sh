#!/bin/sh
set -eu

STAMP_FILE="node_modules/.package-lock.stamp"
LOCK_DIR="node_modules/.install-lock"

needs_install() {
  [ ! -d "node_modules" ] || [ ! -f "$STAMP_FILE" ] || ! cmp -s package-lock.json "$STAMP_FILE"
}

if needs_install; then
  mkdir -p node_modules

  while ! mkdir "$LOCK_DIR" 2>/dev/null; do
    sleep 1
  done

  cleanup() {
    rmdir "$LOCK_DIR" 2>/dev/null || true
  }

  trap cleanup EXIT INT TERM

  if needs_install; then
    npm install
    cp package-lock.json "$STAMP_FILE"
  fi

  cleanup
  trap - EXIT INT TERM
fi

exec "$@"
