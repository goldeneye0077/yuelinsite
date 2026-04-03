from datetime import datetime

from sqlalchemy import Boolean, DateTime, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Inquiry(Base):
    __tablename__ = 'inquiries'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    company_name: Mapped[str] = mapped_column(String(160))
    contact_name: Mapped[str] = mapped_column(String(160))
    email: Mapped[str] = mapped_column(String(255))
    phone: Mapped[str] = mapped_column(String(64))
    interest_category: Mapped[str] = mapped_column(String(100))
    message: Mapped[str] = mapped_column(Text())
    locale: Mapped[str] = mapped_column(String(2), index=True)
    source_page: Mapped[str] = mapped_column(String(255))
    consent_accepted: Mapped[bool] = mapped_column(Boolean(), default=True)
    status: Mapped[str] = mapped_column(String(24), default='new', index=True)
    request_id: Mapped[str | None] = mapped_column(String(64), nullable=True, index=True)
    client_ip: Mapped[str | None] = mapped_column(String(64), nullable=True, index=True)
    user_agent: Mapped[str | None] = mapped_column(String(512), nullable=True)
    referer: Mapped[str | None] = mapped_column(String(512), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )
