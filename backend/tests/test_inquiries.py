from sqlalchemy import func, select

from app.models.inquiry import Inquiry


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
    assert payload['status'] == 'received'
    assert payload['detail'] == "Inquiry received. We'll get back to you shortly."

    with session_factory() as session:
        inquiry = session.scalar(select(Inquiry).where(Inquiry.id == payload['submissionId']))

    assert inquiry is not None
    assert inquiry.company_name == 'Demo Factory'
    assert inquiry.contact_name == 'Zhang Wei'
    assert inquiry.locale == 'en'
    assert inquiry.source_page == '/en/contact'
    assert inquiry.status == 'new'
    assert inquiry.client_ip == '203.0.113.10'
    assert inquiry.user_agent == 'pytest-suite'
    assert inquiry.referer == 'http://localhost:5173/en/contact'
    assert inquiry.consent_accepted is True
    assert inquiry.request_id is not None


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
    assert response.json()['detail'] == '请先确认已同意跃鳞科技处理本次咨询信息。'


def test_inquiry_submission_honeypot_does_not_persist(client, session_factory):
    response = client.post(
        '/api/v1/inquiries',
        json=build_payload(website='https://spam.invalid'),
    )

    assert response.status_code == 201
    assert response.json()['submissionId'] == 0

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
    assert limited_response.json()['detail'] == '提交过于频繁，请稍后再试。'
    assert int(limited_response.headers['retry-after']) >= 1
