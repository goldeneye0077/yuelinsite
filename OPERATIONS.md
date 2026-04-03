# Operations Guide

This guide covers the first production operating baseline for the Yuelin official site.

## Environment Preparation

1. Copy `.env.prod.example` to `.env.prod`.
2. Replace `POSTGRES_PASSWORD` and `DATABASE_URL` with a strong password.
3. Set `CORS_ORIGINS` and `ALLOWED_HOSTS` to the real production hostnames or IP addresses.
4. Keep `WEB_CONCURRENCY` at `2` unless the server is very small.

## Deploy

Use the server-side helper after pulling the latest code:

```bash
./ops/deploy-prod.sh
```

The script:

- validates `compose.prod.yaml`
- rebuilds images
- runs migrations during backend startup
- restarts the stack in detached mode
- prints final service status

## Health Checks

- Frontend container: `/healthz`
- Backend health: `/api/health`
- Backend readiness: `/api/ready`

Recommended public smoke checks:

```bash
curl http://127.0.0.1:${FRONTEND_PORT}/healthz
curl http://127.0.0.1:${BACKEND_PORT}/api/health
curl http://127.0.0.1:${BACKEND_PORT}/api/ready
```

## Backups

Create a timestamped PostgreSQL dump on the server:

```bash
./ops/backup-postgres.sh
```

Default output directory: `./backups`

Restore example:

```bash
gunzip -c backups/<file>.sql.gz | docker compose -p yuelinsite --env-file .env.prod -f compose.prod.yaml exec -T db psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"
```

## Inquiry Operations Notes

- Inquiry submissions now record request metadata such as IP, referer, user agent, and request ID.
- Honeypot hits are ignored and do not enter the database.
- Repeated submissions from the same IP are rate-limited per the environment variables in `.env.prod`.

## Log Inspection

```bash
docker compose -p yuelinsite --env-file .env.prod -f compose.prod.yaml logs -f backend
docker compose -p yuelinsite --env-file .env.prod -f compose.prod.yaml logs -f frontend
```
