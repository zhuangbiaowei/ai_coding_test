# Pandas Data Cleaning Task – Deduplication & Imputation

## Overview

Analysts receive weekly CSV exports of customer orders. The upstream system occasionally emits duplicate rows and missing shipment dates. A helper function `clean_orders` was meant to sanitize the data but a refactor broke both deduplication and imputation logic.

## Candidate Task

Update `clean_orders` in `cleaning.py` so that:

1. Duplicate `(order_id, customer_id)` pairs keep only the latest `updated_at` row.
2. `ship_date` is filled with the order's `updated_at` when missing.
3. Rows are sorted by `order_id` and `updated_at` ascending after cleaning.
4. The provided pytest suite passes (`pytest`).

## Getting Started

```bash
pip install -r requirements.txt
pytest
```

## Files

- `cleaning.py` – Contains the buggy `clean_orders` implementation.
- `test_cleaning.py` – Pytest cases describing expected behavior.
- `raw_orders.csv` – Sample messy data used by the tests.
- `README.md` / `requirements.txt` – Instructions and dependencies.

## Acceptance Criteria

- Function returns a new `DataFrame` without mutating the input.
- Deduplication chooses the most recent `updated_at` timestamp per composite key.
- Missing `ship_date` values are imputed correctly.
- Column order remains unchanged.

## Hints

- Pandas `drop_duplicates` has a `keep` argument that might help.
- Use `fillna` or `where` to copy values between columns.
- Remember to `sort_values` and `reset_index(drop=True)` before returning.
