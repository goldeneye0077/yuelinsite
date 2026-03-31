from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.inquiry import Inquiry
from app.schemas.inquiry import InquiryContractResponse, InquirySubmissionRequest

router = APIRouter(tags=['inquiries'])


@router.post(
    '/inquiries',
    response_model=InquiryContractResponse,
    status_code=status.HTTP_201_CREATED,
)
def submit_inquiry(
    payload: InquirySubmissionRequest,
    db: Session = Depends(get_db),
):
    inquiry = Inquiry(
        company_name=payload.companyName,
        contact_name=payload.contactName,
        email=payload.email,
        phone=payload.phone,
        interest_category=payload.interestCategory,
        message=payload.message,
        locale=payload.locale,
        source_page=payload.sourcePage,
    )
    db.add(inquiry)
    db.commit()
    db.refresh(inquiry)

    detail = (
        '询盘已收到，我们会尽快与您联系。'
        if payload.locale == 'zh'
        else "Inquiry received. We'll get back to you shortly."
    )

    return InquiryContractResponse(
        detail=detail,
        submissionId=inquiry.id,
        status='received',
    )
