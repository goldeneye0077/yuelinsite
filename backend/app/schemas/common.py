from datetime import UTC, datetime
from typing import Generic, TypeVar

from pydantic import BaseModel, Field

T = TypeVar('T')


class ApiMeta(BaseModel):
    requestId: str | None = None
    generatedAt: datetime = Field(default_factory=lambda: datetime.now(UTC))


class ApiEnvelope(BaseModel, Generic[T]):
    success: bool = True
    data: T
    meta: ApiMeta
