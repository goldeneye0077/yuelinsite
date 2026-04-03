ZH_COMPANY_NAME = '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8'


def test_site_bootstrap_contract_returns_supported_locales(client):
    response = client.get('/api/v1/site/bootstrap?locale=zh')

    assert response.status_code == 200
    payload = response.json()
    assert payload['locale'] == 'zh'
    assert payload['supportedLocales'] == ['zh', 'en']
    assert payload['companyName'] == ZH_COMPANY_NAME
    assert payload['navItems'][1]['key'] == 'products'
    assert payload['themeOptions'] == [
        {'key': 'light', 'label': '\u6d45\u8272'},
        {'key': 'dark', 'label': '\u6df1\u8272'},
    ]


def test_site_bootstrap_contract_returns_english_variant(client):
    response = client.get('/api/v1/site/bootstrap?locale=en')

    assert response.status_code == 200
    payload = response.json()
    assert payload['locale'] == 'en'
    assert payload['companyName'] == 'Shenzhen Yuelin Technology Co., Ltd.'
    assert payload['navItems'][1]['href'] == '/en/products'
    assert payload['themeOptions'][0]['label'] == 'Light'


def test_inquiry_contract_returns_phase_five_notice(client):
    response = client.post(
        '/api/v1/inquiries',
        json={
            'companyName': 'Demo Factory',
            'contactName': 'Zhang Wei',
            'email': 'zhang.wei@example.com',
            'phone': '13800000000',
            'interestCategory': 'industrial-sensors',
            'message': 'Need a distance sensing option for a conveyor line.',
            'website': '',
            'consentAccepted': True,
            'locale': 'zh',
            'sourcePage': '/zh/contact',
        },
    )

    assert response.status_code == 201
    payload = response.json()
    assert payload['status'] == 'received'
    assert payload['submissionId'] == 1
    assert payload['detail'] == '询盘已收到，我们会尽快与您联系。'
