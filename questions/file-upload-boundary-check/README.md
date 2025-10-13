# File Upload Boundary Checking Challenge

## Overview

Security flagged that our upload endpoint happily accepts oversized archives and sneaky double-extension files. The helper `validate_upload` was supposed to enforce basic rules but no longer does.

## Candidate Task

Update `validate_upload` in `validator.py` so that uploads are rejected when:

- File size exceeds 5 MiB.
- Filename contains path traversal (`..`, leading slash, or backslash).
- Extension is not in the allowed list (`.jpg`, `.png`, `.gif`, `.pdf`).
- Magic bytes of the file do not match the declared extension (see tests for expectations).

## Getting Started

```bash
pytest
```

## Files

- `validator.py` – Contains the buggy `validate_upload` implementation.
- `test_validator.py` – Tests with inline malicious fixtures that currently fail.

## Acceptance Criteria

- Return `True` only for safe uploads.
- Return `(False, reason)` tuples for invalid files (tests check the message substring).
- Do not modify the test cases.

## Hints

- Use `pathlib` to normalize filenames.
- Compare first few bytes of the file against signature map.
- Keep error messages short but descriptive.
