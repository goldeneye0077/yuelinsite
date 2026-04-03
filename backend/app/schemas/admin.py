from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field, field_validator

from app.schemas.site import Locale


class AdminSessionRequest(BaseModel):
    username: str = Field(min_length=1, max_length=64)
    password: str = Field(min_length=1, max_length=256)

    @field_validator('username', 'password', mode='before')
    @classmethod
    def strip_values(cls, value: str):
        if isinstance(value, str):
            return value.strip()
        return value


class AdminSessionResponse(BaseModel):
    authenticated: bool
    username: str
    expiresAt: datetime


class AdminInquiryRecord(BaseModel):
    id: int
    companyName: str
    contactName: str
    email: str
    phone: str
    interestCategory: str
    message: str
    locale: Locale
    sourcePage: str
    sourceContext: str | None
    status: str
    requestId: str | None
    clientIp: str | None
    referer: str | None
    createdAt: datetime


class AdminInquiryListResponse(BaseModel):
    items: list[AdminInquiryRecord]
    total: int
    page: int
    pageSize: int
    totalPages: int
    availableCategories: list[str]
    availableSourceContexts: list[str]


class AdminSessionLogoutResponse(BaseModel):
    status: Literal['signed_out']
