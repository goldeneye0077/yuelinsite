from typing import Literal

from pydantic import BaseModel, EmailStr, Field, field_validator

from app.schemas.site import Locale


class InquirySubmissionRequest(BaseModel):
    companyName: str = Field(min_length=1, max_length=160)
    contactName: str = Field(min_length=1, max_length=160)
    email: EmailStr
    phone: str = Field(min_length=1, max_length=64)
    interestCategory: str = Field(min_length=1, max_length=100)
    message: str = Field(min_length=1, max_length=2000)
    locale: Locale
    sourcePage: str = Field(min_length=1, max_length=255)
    website: str = Field(default='', max_length=255)
    consentAccepted: bool = False

    @field_validator(
        'companyName',
        'contactName',
        'phone',
        'interestCategory',
        'message',
        'sourcePage',
        'website',
        mode='before',
    )
    @classmethod
    def strip_required_strings(cls, value: str):
        if isinstance(value, str):
            return value.strip()
        return value

    @field_validator('sourcePage')
    @classmethod
    def validate_source_page(cls, value: str):
        if '://' in value or not value.startswith('/'):
            raise ValueError('sourcePage must be an internal path.')

        return value


class InquiryContractResponse(BaseModel):
    detail: str
    submissionId: int
    status: Literal['received']
