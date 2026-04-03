import base64
import hashlib
import hmac
import json
from dataclasses import dataclass
from datetime import UTC, datetime, timedelta

from fastapi import Depends, HTTPException, Request, Response, status

from app.core.config import Settings, get_settings


@dataclass(frozen=True)
class AdminSessionIdentity:
    username: str
    expires_at: datetime


def authenticate_admin_credentials(
    username: str,
    password: str,
    settings: Settings,
) -> bool:
    return hmac.compare_digest(username, settings.admin_username) and hmac.compare_digest(
        password,
        settings.admin_password,
    )


def create_admin_session_token(
    username: str,
    settings: Settings,
) -> AdminSessionIdentity:
    expires_at = datetime.now(UTC) + timedelta(hours=settings.admin_session_ttl_hours)
    return AdminSessionIdentity(username=username, expires_at=expires_at)


def serialize_admin_session(
    session: AdminSessionIdentity,
    settings: Settings,
) -> str:
    payload = json.dumps(
        {
            'sub': session.username,
            'exp': int(session.expires_at.timestamp()),
        },
        separators=(',', ':'),
    ).encode('utf-8')
    encoded_payload = _urlsafe_b64encode(payload)
    signature = hmac.new(
        settings.admin_session_secret.encode('utf-8'),
        encoded_payload.encode('utf-8'),
        hashlib.sha256,
    ).digest()
    encoded_signature = _urlsafe_b64encode(signature)
    return f'{encoded_payload}.{encoded_signature}'


def parse_admin_session(
    token: str,
    settings: Settings,
) -> AdminSessionIdentity | None:
    try:
        encoded_payload, encoded_signature = token.split('.', 1)
    except ValueError:
        return None

    expected_signature = hmac.new(
        settings.admin_session_secret.encode('utf-8'),
        encoded_payload.encode('utf-8'),
        hashlib.sha256,
    ).digest()

    if not hmac.compare_digest(_urlsafe_b64encode(expected_signature), encoded_signature):
        return None

    try:
        payload = json.loads(_urlsafe_b64decode(encoded_payload))
    except (ValueError, json.JSONDecodeError):
        return None

    if not isinstance(payload, dict):
        return None

    username = payload.get('sub')
    expires_at_raw = payload.get('exp')

    if not isinstance(username, str) or not isinstance(expires_at_raw, int):
        return None

    expires_at = datetime.fromtimestamp(expires_at_raw, tz=UTC)

    if expires_at <= datetime.now(UTC):
        return None

    return AdminSessionIdentity(username=username, expires_at=expires_at)


def persist_admin_session_cookie(
    response: Response,
    token: str,
    settings: Settings,
) -> None:
    response.set_cookie(
        key=settings.admin_session_cookie_name,
        value=token,
        max_age=settings.admin_session_ttl_hours * 3600,
        httponly=True,
        secure=settings.admin_session_cookie_secure,
        samesite='lax',
        path='/api/v1/admin',
    )


def clear_admin_session_cookie(response: Response, settings: Settings) -> None:
    response.delete_cookie(
        key=settings.admin_session_cookie_name,
        httponly=True,
        secure=settings.admin_session_cookie_secure,
        samesite='lax',
        path='/api/v1/admin',
    )


def require_admin_session(
    request: Request,
    settings: Settings = Depends(get_settings),
) -> AdminSessionIdentity:
    token = request.cookies.get(settings.admin_session_cookie_name)

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Administrator login required.',
        )

    session = parse_admin_session(token, settings)

    if session is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Administrator session expired. Please sign in again.',
        )

    return session


def _urlsafe_b64encode(raw: bytes) -> str:
    return base64.urlsafe_b64encode(raw).decode('utf-8').rstrip('=')


def _urlsafe_b64decode(value: str) -> bytes:
    padding = '=' * (-len(value) % 4)
    return base64.urlsafe_b64decode(f'{value}{padding}')
