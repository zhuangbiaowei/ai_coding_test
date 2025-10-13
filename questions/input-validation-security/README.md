# Input Validation Security Challenge

## Overview

This Flask API exposes a `/feedback` endpoint that saves visitor comments to SQLite and renders them on the homepage. A rushed rewrite removed all input validation, leaving the app vulnerable to SQL injection and stored XSS.

## Candidate Task

Harden the endpoint so that:

- User-provided `name` and `message` values are validated/sanitized.
- SQL queries use parameter binding instead of string concatenation.
- Rendered output escapes dangerous characters.
- The provided pytest suite (`pytest`) passes.

## Getting Started

```bash
pip install -r requirements.txt
pytest
```

## Files

- `app.py` – Flask application with vulnerable handlers.
- `schema.sql` – Schema used to initialize the SQLite database.
- `test_security.py` – Tests demonstrating injection/XSS issues.
- `requirements.txt` – Python dependencies.
- `README.md` – This file.

## Acceptance Criteria

- Prevent SQL injection (the tests attempt to drop the `feedback` table).
- Prevent stored XSS by escaping output in the template.
- Reject inputs longer than 200 characters with a 400 response.

## Hints

- Use `sqlite3` parameter placeholders (`?`).
- Consider using `markupsafe` or Flask's templating auto-escape features.
- Validate strings before writing to the database.
