import json
from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = Field(default='Yuelin Official Site API', alias='APP_NAME')
    app_env: str = Field(default='development', alias='APP_ENV')
    api_prefix: str = '/api'
    database_url: str = Field(
        default='postgresql+psycopg://yuelin:yuelin_dev@db:5432/yuelin_site',
        alias='DATABASE_URL',
    )
    cors_origins: list[str] = Field(
        default_factory=lambda: [
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:4173',
            'http://127.0.0.1:4173',
        ],
        alias='CORS_ORIGINS',
    )

    model_config = SettingsConfigDict(
        env_file_encoding='utf-8',
        extra='ignore',
        populate_by_name=True,
    )

    @field_validator('cors_origins', mode='before')
    @classmethod
    def parse_cors_origins(cls, value: object):
        if isinstance(value, str):
            normalized = value.strip()

            if not normalized:
                return []

            if normalized.startswith('['):
                return json.loads(normalized)

            return [item.strip() for item in normalized.split(',') if item.strip()]

        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()
