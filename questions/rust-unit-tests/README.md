# Rust Unit Test Completion Exercise

## Overview

This crate provides a handful of utility functions for manipulating string-based IDs. The implementation is complete, but the corresponding test suite was left unfinished. Your task is to finish writing the unit tests so they properly validate the behavior.

## Candidate Task

Replace the `todo!()` and incorrect assertions in `tests/id_tools_test.rs` with real tests that cover:

- `normalize_id` lowercases input, trims whitespace, and replaces spaces with dashes.
- `check_digit` computes the Luhn check digit for the given base string.
- `mask_middle` preserves the first/last characters while masking the middle section.

The existing tests intentionally fail so you can see what needs to be covered.

## Getting Started

```bash
cargo test
```

## Files

- `src/lib.rs` – Production implementation (do not modify).
- `tests/id_tools_test.rs` – Incomplete tests you need to finish.
- `Cargo.toml` – Minimal crate configuration.

## Acceptance Criteria

- `cargo test` should pass once tests are implemented correctly.
- Keep tests readable and focused on observable behavior.
- Avoid modifying the library code—treat it as production.
