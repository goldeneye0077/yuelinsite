from pydantic import BaseModel, EmailStr, Field

from app.schemas.site import Locale


class InquirySubmissionRequest(BaseModel):
    companyName: str = Field(min_length=1)
    contactName: str = Field(min_length=1)
    email: EmailStr
    phone: str = Field(min_length=1)
    interestCategory: str = Field(min_length=1)
    message: str = Field(min_length=1)
    locale: Locale
    sourcePage: str = Field(min_length=1)


class InquiryContractResponse(BaseModel):
    detail: str
