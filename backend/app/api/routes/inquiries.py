from fastapi import APIRouter, status

from app.schemas.inquiry import InquiryContractResponse, InquirySubmissionRequest

router = APIRouter(tags=['inquiries'])


@router.post(
    '/inquiries',
    response_model=InquiryContractResponse,
    status_code=status.HTTP_501_NOT_IMPLEMENTED,
)
def submit_inquiry(payload: InquirySubmissionRequest):
    return InquiryContractResponse(
        detail=(
            f'Inquiry contract accepted for {payload.sourcePage}. '
            'Persistence and delivery are scheduled for Phase 5.'
        )
    )
