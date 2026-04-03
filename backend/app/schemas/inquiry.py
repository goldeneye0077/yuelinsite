import re
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
    sourceContext: str | None = Field(default=None, max_length=80)
    website: str = Field(default='', max_length=255)
    consentAccepted: bool = False

    @field_validator(
        'companyName',
        'contactName',
        'phone',
        'interestCategory',
        'message',
        'sourcePage',
        'sourceContext',
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

    @field_validator('sourceContext')
    @classmethod
    def normalize_source_context(cls, value: str | None):
        if value is None:
            return None

        normalized = value.strip().lower()

        if not normalized:
            return None

        if re.fullmatch(r'[a-z0-9][a-z0-9-]{0,79}', normalized):
            return normalized

        return None


class InquiryContractResponse(BaseModel):
    detail: str
    submissionId: int
    status: Literal['received']
