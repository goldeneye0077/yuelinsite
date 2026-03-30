from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = Field(default='Yuelin Official Site API', alias='APP_NAME')
    app_env: str = Field(default='development', alias='APP_ENV')
    api_prefix: str = '/api'
    database_url: str = Field(
        default='postgresql+psycopg://yuelin:yuelin_dev@db:5432/yuelin_site',
        alias='DATABASE_URL',
    )
    cors_origins: list[str] = [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
    ]

    model_config = SettingsConfigDict(
        env_file_encoding='utf-8',
        extra='ignore',
        populate_by_name=True,
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
