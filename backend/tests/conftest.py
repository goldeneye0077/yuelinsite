import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.core.config import get_settings
from app.core.rate_limit import get_admin_login_rate_limiter, get_inquiry_rate_limiter
from app.db.base import Base
from app.db.session import get_db
from app.main import app


@pytest.fixture
def session_factory():
    engine = create_engine(
        'sqlite://',
        connect_args={'check_same_thread': False},
        poolclass=StaticPool,
        future=True,
    )
    testing_session_factory = sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=engine,
    )
    Base.metadata.create_all(bind=engine)

    yield testing_session_factory

    Base.metadata.drop_all(bind=engine)


@pytest.fixture
def client(session_factory):
    def override_get_db():
        db = session_factory()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_get_db

    with TestClient(app) as test_client:
        yield test_client

    app.dependency_overrides.clear()


@pytest.fixture(autouse=True)
def reset_inquiry_rate_limiter():
    limiter = get_inquiry_rate_limiter()
    limiter.reset()
    yield
    limiter.reset()


@pytest.fixture(autouse=True)
def reset_admin_login_rate_limiter():
    limiter = get_admin_login_rate_limiter()
    limiter.reset()
    yield
    limiter.reset()


@pytest.fixture(autouse=True)
def reset_settings_cache():
    get_settings.cache_clear()
    yield
    get_settings.cache_clear()
