from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


from app.models.inquiry import Inquiry  # noqa: E402,F401
