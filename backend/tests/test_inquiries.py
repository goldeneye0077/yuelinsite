from sqlalchemy import func, select

from app.models.inquiry import Inquiry

ZH_CONSENT_DETAIL = (
    '\u8bf7\u5148\u786e\u8ba4\u5df2\u540c\u610f\u8dc3\u9cde\u79d1\u6280\u5904\u7406'
    '\u672c\u6b21\u54a8\u8be2\u4fe1\u606f\u3002'
)
ZH_RATE_LIMIT_DETAIL = (
    '\u63d0\u4ea4\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002'
)


def build_payload(**overrides):
    payload = {
        'companyName': 'Demo Factory',
        'contactName': 'Zhang Wei',
        'email': 'zhang.wei@example.com',
        'phone': '13800000000',
        'interestCategory': 'industrial-sensors',
        'message': 'Need a distance sensing option for a conveyor line.',
        'website': '',
        'consentAccepted': True,
        'locale': 'en',
        'sourcePage': '/en/contact',
        'sourceContext': None,
    }
    payload.update(overrides)
    return payload


def test_inquiry_submission_persists_to_database(client, session_factory):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(),
        headers={
            'User-Agent': 'pytest-suite',
            'Referer': 'http://localhost:5173/en/contact',
            'X-Forwarded-For': '203.0.113.10',
        },
    )

    assert response.status_code == 201
    payload = response.json()
    assert payload['success'] is True
    assert payload['data']['status'] == 'received'
    assert payload['data']['detail'] == "Inquiry received. We'll get back to you shortly."
    assert payload['meta']['requestId']

    with session_factory() as session:
        inquiry = session.scalar(
            select(Inquiry).where(Inquiry.id == payload['data']['submissionId'])
        )

    assert inquiry is not None
    assert inquiry.company_name == 'Demo Factory'
    assert inquiry.contact_name == 'Zhang Wei'
    assert inquiry.locale == 'en'
    assert inquiry.source_page == '/en/contact'
    assert inquiry.source_context is None
    assert inquiry.status == 'new'
    assert inquiry.client_ip == '203.0.113.10'
    assert inquiry.user_agent == 'pytest-suite'
    assert inquiry.referer == 'http://localhost:5173/en/contact'
    assert inquiry.consent_accepted is True
    assert inquiry.request_id is not None


def test_inquiry_submission_persists_source_context_for_internal_tracking(
    client,
    session_factory,
):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(sourceContext='about'),
    )

    assert response.status_code == 201

    with session_factory() as session:
        inquiry = session.scalar(select(Inquiry).where(Inquiry.id == 1))

    assert inquiry is not None
    assert inquiry.source_context == 'about'


def test_inquiry_submission_discards_invalid_source_context(client, session_factory):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(sourceContext='https://evil.invalid/about'),
    )

    assert response.status_code == 201

    with session_factory() as session:
        inquiry = session.scalar(select(Inquiry).where(Inquiry.id == 1))

    assert inquiry is not None
    assert inquiry.source_context is None


def test_inquiry_submission_rejects_invalid_email(client):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(email='not-an-email', locale='zh', sourcePage='/zh/contact'),
    )

    assert response.status_code == 422


def test_inquiry_submission_requires_consent(client):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(consentAccepted=False, locale='zh', sourcePage='/zh/contact'),
    )

    assert response.status_code == 400
    assert response.json()['detail'] == ZH_CONSENT_DETAIL


def test_inquiry_submission_honeypot_does_not_persist(client, session_factory):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(website='https://spam.invalid'),
    )

    assert response.status_code == 201
    assert response.json()['data']['submissionId'] == 0

    with session_factory() as session:
        total = session.scalar(select(func.count()).select_from(Inquiry))

    assert total == 0


def test_inquiry_submission_rate_limits_repeated_requests(client):
    for _ in range(5):
        response = client.post('/api/v1/inquiries', json=build_payload())
        assert response.status_code == 201

    limited_response = client.post(
        '/api/v1/inquiries',
        json=build_payload(locale='zh', sourcePage='/zh/contact'),
    )

    assert limited_response.status_code == 429
    assert limited_response.json()['detail'] == ZH_RATE_LIMIT_DETAIL
    assert int(limited_response.headers['retry-after']) >= 1
