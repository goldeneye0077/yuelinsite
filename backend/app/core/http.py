import json
import logging
import time
from contextvars import ContextVar
from datetime import UTC, datetime
from uuid import uuid4

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware

from app.schemas.common import ApiEnvelope, ApiMeta


request_id_context: ContextVar[str] = ContextVar('request_id', default='-')


class JsonLogFormatter(logging.Formatter):
    def format(self, record: logging.LogRecord) -> str:
        payload: dict[str, object] = {
            'timestamp': datetime.now(UTC).isoformat(),
            'level': record.levelname,
            'logger': record.name,
            'message': record.getMessage(),
            'request_id': getattr(record, 'request_id', request_id_context.get()),
        }

        for field in (
            'method',
            'path',
            'status_code',
            'duration_ms',
            'client_ip',
            'user_agent',
            'referer',
        ):
            value = getattr(record, field, None)
            if value not in (None, ''):
                payload[field] = value

        return json.dumps(payload, ensure_ascii=False)


def configure_logging(level: str) -> None:
    root_logger = logging.getLogger()

    if getattr(configure_logging, '_configured', False):
        root_logger.setLevel(level)
        return

    handler = logging.StreamHandler()
    handler.setFormatter(JsonLogFormatter())
    root_logger.handlers.clear()
    root_logger.addHandler(handler)
    root_logger.setLevel(level)
    configure_logging._configured = True


def get_logger(name: str) -> logging.Logger:
    return logging.getLogger(name)


def extract_client_ip(request: Request) -> str:
    forwarded_for = request.headers.get('x-forwarded-for')
    if forwarded_for:
        return forwarded_for.split(',')[0].strip()

    if request.client and request.client.host:
        return request.client.host

    return 'unknown'


def build_api_envelope(data, request: Request | None = None):
    request_id = None

    if request is not None:
        request_id = getattr(request.state, 'request_id', None)

    return ApiEnvelope(
        data=data,
        meta=ApiMeta(
            requestId=request_id,
        ),
    )


class RequestContextMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, *, enable_security_headers: bool = True):
        super().__init__(app)
        self.enable_security_headers = enable_security_headers
        self.logger = get_logger('yuelin.http')

    async def dispatch(self, request: Request, call_next):
        request_id = request.headers.get('x-request-id') or uuid4().hex
        token = request_id_context.set(request_id)
        request.state.request_id = request_id
        start_time = time.perf_counter()

        try:
            response = await call_next(request)
        except Exception:
            duration_ms = round((time.perf_counter() - start_time) * 1000, 2)
            self.logger.exception(
                'request_failed',
                extra={
                    'request_id': request_id,
                    'method': request.method,
                    'path': request.url.path,
                    'duration_ms': duration_ms,
                    'client_ip': extract_client_ip(request),
                    'user_agent': request.headers.get('user-agent'),
                    'referer': request.headers.get('referer'),
                },
            )
            raise
        finally:
            request_id_context.reset(token)

        duration_ms = round((time.perf_counter() - start_time) * 1000, 2)
        response.headers['X-Request-ID'] = request_id

        if self.enable_security_headers:
            response.headers['X-Content-Type-Options'] = 'nosniff'
            response.headers['X-Frame-Options'] = 'DENY'
            response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
            response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=()'
            response.headers['Cross-Origin-Opener-Policy'] = 'same-origin'

        self.logger.info(
            'request_completed',
            extra={
                'request_id': request_id,
                'method': request.method,
                'path': request.url.path,
                'status_code': response.status_code,
                'duration_ms': duration_ms,
                'client_ip': extract_client_ip(request),
                'user_agent': request.headers.get('user-agent'),
                'referer': request.headers.get('referer'),
            },
        )

        return response
