from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.api.router import api_router
from app.core.config import get_settings
from app.db.session import get_engine


def create_app() -> FastAPI:
    settings = get_settings()

    app = FastAPI(
        title=settings.app_name,
        version='0.1.0',
        docs_url='/api/docs',
        openapi_url='/api/openapi.json',
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )

    @app.get(f'{settings.api_prefix}/health', tags=['health'])
    def healthcheck():
        return {
            'status': 'ok',
            'service': 'api',
            'environment': settings.app_env,
        }

    @app.get(f'{settings.api_prefix}/ready', tags=['health'])
    def readiness():
        try:
            with get_engine().connect() as connection:
                connection.execute(text('SELECT 1'))
        except Exception as exc:  # pragma: no cover - readiness depends on env
            raise HTTPException(
                status_code=503,
                detail='Database unreachable',
            ) from exc

        return {'status': 'ready', 'database': 'reachable'}

    app.include_router(api_router, prefix='/api/v1')

    return app


app = create_app()
