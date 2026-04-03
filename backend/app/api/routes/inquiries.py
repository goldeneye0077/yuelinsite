from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.core.http import extract_client_ip, get_logger
from app.core.rate_limit import InquiryRateLimiter, get_inquiry_rate_limiter
from app.db.session import get_db
from app.models.inquiry import Inquiry
from app.schemas.inquiry import InquiryContractResponse, InquirySubmissionRequest

router = APIRouter(tags=['inquiries'])
logger = get_logger('yuelin.inquiries')


def get_success_detail(locale: str) -> str:
    if locale == 'zh':
        return '询盘已收到，我们会尽快与您联系。'

    return "Inquiry received. We'll get back to you shortly."


def get_failure_detail(locale: str) -> str:
    if locale == 'zh':
        return '询盘暂时无法提交，请稍后再试。'

    return 'Unable to submit the inquiry right now. Please try again later.'


def get_consent_detail(locale: str) -> str:
    if locale == 'zh':
        return '请先确认已同意跃鳞科技处理本次咨询信息。'

    return 'Please confirm that Yuelin Technology may process this inquiry before submitting.'


def get_rate_limit_detail(locale: str) -> str:
    if locale == 'zh':
        return '提交过于频繁，请稍后再试。'

    return 'Too many submissions from this network. Please try again later.'


@router.post(
    '/inquiries',
    response_model=InquiryContractResponse,
    status_code=status.HTTP_201_CREATED,
)
def submit_inquiry(
    request: Request,
    payload: InquirySubmissionRequest,
    db: Session = Depends(get_db),
    rate_limiter: InquiryRateLimiter = Depends(get_inquiry_rate_limiter),
):
    success_detail = get_success_detail(payload.locale)

    if not payload.consentAccepted:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=get_consent_detail(payload.locale),
        )

    if payload.website:
        logger.warning(
            'honeypot_submission',
            extra={
                'request_id': getattr(request.state, 'request_id', '-'),
                'path': request.url.path,
                'client_ip': extract_client_ip(request),
                'user_agent': request.headers.get('user-agent'),
                'referer': request.headers.get('referer'),
            },
        )
        return InquiryContractResponse(
            detail=success_detail,
            submissionId=0,
            status='received',
        )

    client_ip = extract_client_ip(request)
    is_allowed, retry_after = rate_limiter.check(client_ip)

    if not is_allowed:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail=get_rate_limit_detail(payload.locale),
            headers={'Retry-After': str(retry_after)},
        )

    inquiry = Inquiry(
        company_name=payload.companyName,
        contact_name=payload.contactName,
        email=payload.email,
        phone=payload.phone,
        interest_category=payload.interestCategory,
        message=payload.message,
        locale=payload.locale,
        source_page=payload.sourcePage,
        source_context=payload.sourceContext,
        consent_accepted=payload.consentAccepted,
        status='new',
        request_id=getattr(request.state, 'request_id', None),
        client_ip=client_ip,
        user_agent=request.headers.get('user-agent'),
        referer=request.headers.get('referer'),
    )

    try:
        db.add(inquiry)
        db.commit()
        db.refresh(inquiry)
    except SQLAlchemyError as exc:
        db.rollback()
        logger.exception(
            'inquiry_persist_failed',
            extra={
                'request_id': getattr(request.state, 'request_id', '-'),
                'path': request.url.path,
                'client_ip': client_ip,
                'user_agent': request.headers.get('user-agent'),
                'referer': request.headers.get('referer'),
            },
        )
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=get_failure_detail(payload.locale),
        ) from exc

    return InquiryContractResponse(
        detail=success_detail,
        submissionId=inquiry.id,
        status='received',
    )
