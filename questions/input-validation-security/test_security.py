import json

import pytest

from app import app


def post_feedback(client, name, message):
    return client.post(
        "/feedback",
        data=json.dumps({"name": name, "message": message}),
        content_type="application/json",
    )


def test_sql_injection_attempt_is_blocked():
    client = app.test_client()
    malicious = "Mallory'); DROP TABLE feedback; --"
    response = post_feedback(client, malicious, "hello")

    assert response.status_code == 200

    # second insert would fail if table dropped
    response = post_feedback(client, "Alice", "hi")
    assert response.status_code == 200
    assert "DROP" not in response.get_data(as_text=True)


def test_stored_xss_is_escaped():
    client = app.test_client()
    payload = "<script>alert('xss')</script>"
    response = post_feedback(client, "Bob", payload)
    assert response.status_code == 200
    assert payload not in response.get_data(as_text=True)


def test_long_input_rejected():
    client = app.test_client()
    long_name = "A" * 300
    response = post_feedback(client, long_name, "valid")
    assert response.status_code == 400
    assert "too long" in response.get_data(as_text=True).lower()
