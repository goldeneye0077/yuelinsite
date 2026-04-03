#!/bin/sh
set -eu

PROJECT_NAME="${COMPOSE_PROJECT_NAME:-yuelinsite}"
ENV_FILE="${ENV_FILE:-.env.prod}"
COMPOSE_FILE="${COMPOSE_FILE:-compose.prod.yaml}"
BACKUP_DIR="${BACKUP_DIR:-./backups}"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"

mkdir -p "$BACKUP_DIR"

set -a
. "$ENV_FILE"
set +a

OUTPUT_FILE="$BACKUP_DIR/postgres-$TIMESTAMP.sql.gz"

docker compose -p "$PROJECT_NAME" --env-file "$ENV_FILE" -f "$COMPOSE_FILE" exec -T db \
  pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" | gzip > "$OUTPUT_FILE"

echo "Backup written to $OUTPUT_FILE"
