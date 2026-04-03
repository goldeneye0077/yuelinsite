from sqlalchemy import select

from app.models.inquiry import Inquiry


def build_admin_credentials(**overrides):
    payload = {
        'username': 'admin',
        'password': 'admin123456',
    }
    payload.update(overrides)
    return payload


def build_inquiry(**overrides):
    payload = {
        'companyName': 'Admin Visible Factory',
        'contactName': 'Li Hua',
        'email': 'li.hua@example.com',
        'phone': '13900000000',
        'interestCategory': 'general-consultation',
        'message': 'Need a coordinated intake review.',
        'website': '',
        'consentAccepted': True,
        'locale': 'zh',
        'sourcePage': '/zh/contact',
        'sourceContext': 'about',
    }
    payload.update(overrides)
    return payload


def test_admin_session_login_sets_cookie(client):
    response = client.post('/api/v1/admin/session', json=build_admin_credentials())

    assert response.status_code == 200
    payload = response.json()
    assert payload['success'] is True
    assert payload['data']['authenticated'] is True
    assert payload['data']['username'] == 'admin'
    assert payload['meta']['requestId']
    assert 'yuelin_admin_session=' in response.headers['set-cookie']


def test_admin_inquiries_requires_login(client):
    response = client.get('/api/v1/admin/inquiries')

    assert response.status_code == 401


def test_admin_inquiries_returns_protected_records(client, session_factory):
    intake_response = client.post('/api/v1/inquiries', json=build_inquiry())
    assert intake_response.status_code == 201

    login_response = client.post('/api/v1/admin/session', json=build_admin_credentials())
    assert login_response.status_code == 200

    response = client.get('/api/v1/admin/inquiries')

    assert response.status_code == 200
    payload = response.json()
    assert payload['success'] is True
    assert payload['data']['total'] == 1
    assert payload['data']['items'][0]['companyName'] == 'Admin Visible Factory'
    assert payload['data']['items'][0]['sourceContext'] == 'about'
    assert payload['data']['availableCategories'] == ['general-consultation']
    assert payload['data']['availableSourceContexts'] == ['about']

    with session_factory() as session:
        inquiry = session.scalar(select(Inquiry).where(Inquiry.id == 1))

    assert inquiry is not None
    assert inquiry.source_context == 'about'
