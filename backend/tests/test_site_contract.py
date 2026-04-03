ZH_COMPANY_NAME = '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8'
ZH_LIGHT_LABEL = '\u6d45\u8272'
ZH_DARK_LABEL = '\u6df1\u8272'
ZH_SUCCESS_DETAIL = (
    '\u8be2\u76d8\u5df2\u6536\u5230\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002'
)


def test_site_bootstrap_contract_returns_supported_locales(client):
    response = client.get('/api/v1/site/bootstrap?locale=zh')

    assert response.status_code == 200
    payload = response.json()
    assert payload['success'] is True
    assert payload['data']['locale'] == 'zh'
    assert payload['data']['supportedLocales'] == ['zh', 'en']
    assert payload['data']['companyName'] == ZH_COMPANY_NAME
    assert payload['data']['navItems'][1]['key'] == 'products'
    assert payload['data']['themeOptions'] == [
        {'key': 'light', 'label': ZH_LIGHT_LABEL},
        {'key': 'dark', 'label': ZH_DARK_LABEL},
    ]
    assert payload['meta']['generatedAt']


def test_site_bootstrap_contract_returns_english_variant(client):
    response = client.get('/api/v1/site/bootstrap?locale=en')

    assert response.status_code == 200
    payload = response.json()
    assert payload['success'] is True
    assert payload['data']['locale'] == 'en'
    assert payload['data']['companyName'] == 'Shenzhen Yuelin Technology Co., Ltd.'
    assert payload['data']['navItems'][1]['href'] == '/en/products'
    assert payload['data']['themeOptions'][0]['label'] == 'Light'


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
            'sourceContext': 'about',
        },
    )

    assert response.status_code == 201
    payload = response.json()
    assert payload['success'] is True
    assert payload['data']['status'] == 'received'
    assert payload['data']['submissionId'] == 1
    assert payload['data']['detail'] == ZH_SUCCESS_DETAIL
