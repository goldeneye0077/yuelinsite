import json
from functools import lru_cache

from pydantic import Field, field_validator, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = Field(default='Yuelin Official Site API', alias='APP_NAME')
    app_env: str = Field(default='development', alias='APP_ENV')
    log_level: str = Field(default='INFO', alias='LOG_LEVEL')
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
    allowed_hosts: list[str] = Field(
        default_factory=lambda: ['localhost', '127.0.0.1', 'testserver'],
        alias='ALLOWED_HOSTS',
    )
    inquiry_rate_limit_max_requests: int = Field(
        default=5,
        alias='INQUIRY_RATE_LIMIT_MAX_REQUESTS',
    )
    inquiry_rate_limit_window_seconds: int = Field(
        default=300,
        alias='INQUIRY_RATE_LIMIT_WINDOW_SECONDS',
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
            return cls._parse_list_setting(value)

        return value

    @field_validator('allowed_hosts', mode='before')
    @classmethod
    def parse_allowed_hosts(cls, value: object):
        if isinstance(value, str):
            return cls._parse_list_setting(value)

        return value

    @field_validator('log_level')
    @classmethod
    def normalize_log_level(cls, value: str):
        normalized = value.upper().strip()
        allowed_levels = {'CRITICAL', 'ERROR', 'WARNING', 'INFO', 'DEBUG'}

        if normalized not in allowed_levels:
            raise ValueError('LOG_LEVEL must be one of CRITICAL, ERROR, WARNING, INFO, DEBUG.')

        return normalized

    @model_validator(mode='after')
    def validate_production_settings(self):
        if self.app_env.lower() == 'production':
            if not self.cors_origins:
                raise ValueError('CORS_ORIGINS must not be empty in production.')

            if not self.allowed_hosts:
                raise ValueError('ALLOWED_HOSTS must not be empty in production.')

        return self

    @staticmethod
    def _parse_list_setting(value: str) -> list[str]:
        normalized = value.strip()

        if not normalized:
            return []

        if normalized.startswith('['):
            return json.loads(normalized)

        return [item.strip() for item in normalized.split(',') if item.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
