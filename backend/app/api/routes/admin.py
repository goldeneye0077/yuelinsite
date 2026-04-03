from datetime import UTC

from fastapi import APIRouter, Depends, HTTPException, Query, Request, Response, status
from sqlalchemy import func, or_, select
from sqlalchemy.orm import Session

from app.core.admin_auth import (
    authenticate_admin_credentials,
    clear_admin_session_cookie,
    create_admin_session_token,
    persist_admin_session_cookie,
    require_admin_session,
    serialize_admin_session,
)
from app.core.config import Settings, get_settings
from app.core.http import extract_client_ip
from app.core.rate_limit import (
    AdminLoginRateLimiter,
    get_admin_login_rate_limiter,
)
from app.db.session import get_db
from app.models.inquiry import Inquiry
from app.schemas.admin import (
    AdminInquiryListResponse,
    AdminInquiryRecord,
    AdminSessionLogoutResponse,
    AdminSessionRequest,
    AdminSessionResponse,
)

router = APIRouter(prefix='/admin', tags=['admin'])


@router.post('/session', response_model=AdminSessionResponse)
def create_session(
    payload: AdminSessionRequest,
    request: Request,
    response: Response,
    settings: Settings = Depends(get_settings),
    rate_limiter: AdminLoginRateLimiter = Depends(get_admin_login_rate_limiter),
):
    client_ip = extract_client_ip(request)
    is_allowed, retry_after = rate_limiter.check(client_ip)

    if not is_allowed:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail='Too many administrator login attempts. Please try again later.',
            headers={'Retry-After': str(retry_after)},
        )

    if not authenticate_admin_credentials(payload.username, payload.password, settings):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Invalid administrator credentials.',
        )

    session = create_admin_session_token(payload.username, settings)
    persist_admin_session_cookie(response, serialize_admin_session(session, settings), settings)

    return AdminSessionResponse(
        authenticated=True,
        username=session.username,
        expiresAt=session.expires_at.astimezone(UTC),
    )


@router.get('/session', response_model=AdminSessionResponse)
def get_session(identity=Depends(require_admin_session)):
    return AdminSessionResponse(
        authenticated=True,
        username=identity.username,
        expiresAt=identity.expires_at.astimezone(UTC),
    )


@router.delete('/session', response_model=AdminSessionLogoutResponse)
def destroy_session(
    response: Response,
    settings: Settings = Depends(get_settings),
):
    clear_admin_session_cookie(response, settings)
    return AdminSessionLogoutResponse(status='signed_out')


@router.get('/inquiries', response_model=AdminInquiryListResponse)
def list_inquiries(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=100, alias='pageSize'),
    query: str | None = Query(default=None, min_length=1, max_length=160),
    interest_category: str | None = Query(default=None, alias='interestCategory'),
    source_context: str | None = Query(default=None, alias='sourceContext'),
    _identity=Depends(require_admin_session),
    db: Session = Depends(get_db),
):
    filters = []

    if query:
        normalized_query = f'%{query.strip()}%'
        filters.append(
            or_(
                Inquiry.company_name.ilike(normalized_query),
                Inquiry.contact_name.ilike(normalized_query),
                Inquiry.email.ilike(normalized_query),
                Inquiry.phone.ilike(normalized_query),
                Inquiry.message.ilike(normalized_query),
            )
        )

    if interest_category:
        filters.append(Inquiry.interest_category == interest_category.strip())

    if source_context:
        if source_context == '__none__':
            filters.append(Inquiry.source_context.is_(None))
        else:
            filters.append(Inquiry.source_context == source_context.strip())

    total = db.scalar(select(func.count()).select_from(Inquiry).where(*filters)) or 0
    total_pages = max(1, (total + page_size - 1) // page_size)

    items = db.scalars(
        select(Inquiry)
        .where(*filters)
        .order_by(Inquiry.created_at.desc(), Inquiry.id.desc())
        .offset((page - 1) * page_size)
        .limit(page_size)
    ).all()

    available_categories = db.scalars(
        select(Inquiry.interest_category)
        .distinct()
        .order_by(Inquiry.interest_category.asc())
    ).all()
    available_source_contexts = db.scalars(
        select(Inquiry.source_context)
        .where(Inquiry.source_context.is_not(None))
        .distinct()
        .order_by(Inquiry.source_context.asc())
    ).all()

    return AdminInquiryListResponse(
        items=[
            AdminInquiryRecord(
                id=item.id,
                companyName=item.company_name,
                contactName=item.contact_name,
                email=item.email,
                phone=item.phone,
                interestCategory=item.interest_category,
                message=item.message,
                locale=item.locale,
                sourcePage=item.source_page,
                sourceContext=item.source_context,
                status=item.status,
                requestId=item.request_id,
                clientIp=item.client_ip,
                referer=item.referer,
                createdAt=item.created_at,
            )
            for item in items
        ],
        total=total,
        page=page,
        pageSize=page_size,
        totalPages=total_pages,
        availableCategories=available_categories,
        availableSourceContexts=[value for value in available_source_contexts if value],
    )
