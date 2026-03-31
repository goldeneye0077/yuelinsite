from sqlalchemy import select

from app.models.inquiry import Inquiry


def test_inquiry_submission_persists_to_database(client, session_factory):
    response = client.post(
        '/api/v1/inquiries',
        json={
            'companyName': 'Demo Factory',
            'contactName': 'Zhang Wei',
            'email': 'zhang.wei@example.com',
            'phone': '13800000000',
            'interestCategory': 'industrial-sensors',
            'message': 'Need a distance sensing option for a conveyor line.',
            'locale': 'en',
            'sourcePage': '/en/contact',
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


def test_inquiry_submission_rejects_invalid_email(client):
    response = client.post(
        '/api/v1/inquiries',
        json={
            'companyName': 'Demo Factory',
            'contactName': 'Zhang Wei',
            'email': 'not-an-email',
            'phone': '13800000000',
            'interestCategory': 'industrial-sensors',
            'message': 'Need a distance sensing option for a conveyor line.',
            'locale': 'zh',
            'sourcePage': '/zh/contact',
        },
    )

    assert response.status_code == 422
