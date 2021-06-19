from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_index_404():
    response = client.get("/")
    assert response.status_code == 404
    assert response.json() == {"detail": "Not Found"}


def test_no_access_to_api():
    response = client.get("/api/playground/")
    assert response.status_code == 405
    assert response.json() == {"detail": "Method Not Allowed"}


def test_post_code():
    response = client.post(
        "/api/playground/",
        headers={"Content-Type": "application/json"},
        json={"source": "print('Hello World!')"},
    )
    assert response.status_code == 200
    assert response.text == "Hello World!\n"
