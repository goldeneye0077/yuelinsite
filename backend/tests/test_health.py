def test_health_endpoint(client):
    response = client.get('/api/health')

    assert response.status_code == 200
    assert response.json() == {
        'status': 'ok',
        'service': 'api',
        'environment': 'development',
    }
    assert response.headers['x-content-type-options'] == 'nosniff'
    assert response.headers['x-frame-options'] == 'DENY'
    assert response.headers['x-request-id']
