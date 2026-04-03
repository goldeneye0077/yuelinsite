# Shenzhen Yuelin Technology Official Site

Bilingual corporate website for Shenzhen Yuelin Technology Co., Ltd., focused on industrial-sensor brand presentation, solution communication, and inquiry capture.

## Stack

- Frontend: React + Vite + React Query + React Router + VChart
- Backend: Python 3.11 + FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL
- Deployment baseline: Docker Compose

## Quick Start

1. Copy `.env.example` to `.env` if you want to override the defaults.
2. Start the full stack:

```bash
docker compose up --build -d
```

3. Open the site and API health endpoints:

- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:8000/api/health`
- Backend readiness: `http://localhost:8000/api/ready`

Compose startup runs Alembic migrations automatically before the API boots.

## Production Deployment

The repo also includes a production-focused stack:

- `compose.prod.yaml`
- `frontend/Dockerfile.prod`
- `backend/Dockerfile.prod`
- `.env.prod.example`
- `OPERATIONS.md`
- `ops/deploy-prod.sh`
- `ops/backup-postgres.sh`

Typical deployment flow:

```bash
cp .env.prod.example .env.prod
./ops/deploy-prod.sh
```

The production compose file avoids bind mounts, disables frontend dev server usage, and uses restart policies suitable for a long-running server.
It also adds service health checks, stronger host validation defaults, and explicit inquiry rate-limit settings.

## Custom Ports

If `5173` or `8000` is already occupied, update these variables together:

- `FRONTEND_PORT`
- `BACKEND_PORT`
- `VITE_API_BASE_URL`
- `CORS_ORIGINS`

Example:

```bash
FRONTEND_PORT=4173
BACKEND_PORT=8100
VITE_API_BASE_URL=http://localhost:8100
CORS_ORIGINS=["http://localhost:4173","http://127.0.0.1:4173"]
docker compose up --build -d
```

## Verification

Run the core checks before handoff or release:

```bash
docker compose config
npm --prefix frontend run typecheck
npm --prefix frontend run lint
npm --prefix frontend run test -- --run
npm --prefix frontend run build
npm --prefix frontend audit --omit=dev
pytest -q backend
docker compose run --rm frontend npm run build
docker compose run --rm frontend npm run test -- --run
docker compose run --rm backend pytest -q
```

## Launch Handoff

- Environment defaults live in `.env.example`
- Production server defaults live in `.env.prod.example`
- Final smoke-test steps live in `LAUNCH_CHECKLIST.md`
- Production operations notes live in `OPERATIONS.md`
- Current planning and delivery history live under `.planning/`

## Repository Layout

- `frontend/` - React application
- `backend/` - FastAPI service, SQLAlchemy models, Alembic migrations, and tests
- `.planning/` - GSD planning artifacts and phase records
