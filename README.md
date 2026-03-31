# Shenzhen Yuelin Technology Official Site

Corporate website foundation for Shenzhen Yuelin Technology Co., Ltd., built for bilingual brand presentation and inquiry capture.

## Stack

- Frontend: React + Vite + React Query + React Router + VChart
- Backend: Python 3.11 + FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL
- Deployment baseline: Docker Compose

## Local Startup

```bash
docker compose up --build
```

Frontend: `http://localhost:5173`
Backend health: `http://localhost:8000/api/health`
Compose startup now applies Alembic migrations automatically before the API boots.

## Verification

```bash
docker compose config
docker compose run --rm frontend npm run build
docker compose run --rm frontend npm run test -- --run
docker compose run --rm backend pytest -q
```

## Repository Layout

- `frontend/` - React application shell
- `backend/` - FastAPI service, tests, and Alembic setup
- `.planning/` - GSD planning artifacts
