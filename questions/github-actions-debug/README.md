# GitHub Actions CI Workflow Debugging

## Overview

A simple Node library ships with an automated test workflow. After bumping dependencies, the workflow started failing on `main`, but local runs succeed.

## Candidate Task

Fix `.github/workflows/ci.yml` so that the CI job passes. Currently it suffers from multiple issues:

- The Node version is too old for the project (requires >= 18).
- The install step uses `npm ci` even though the repository only tracks `package.json`.
- Tests aren't executed because the script name is misspelled.

The failing run can be reproduced locally with [`act`](https://github.com/nektos/act`) or by pushing to a fork.

## Getting Started

```bash
npm install
npm test
```

Local tests should pass; the issue lies solely in the workflow configuration.

## Files

- `.github/workflows/ci.yml` – Broken GitHub Actions workflow.
- `package.json` – Defines scripts & supported Node version.
- `src/index.js` – Trivial module with an intentionally wrong export to simulate test coverage.
- `src/index.test.js` – Jest tests to ensure the workflow actually runs them.

## Acceptance Criteria

- Workflow installs dependencies using `npm install`.
- Node setup uses version 18.x or `lts/*`.
- The test command matches the `npm test` script.
- Cache usage (if any) should not break the install step.

## Hints

- Use the `actions/setup-node` action correctly.
- Pay attention to job `defaults` vs step-level shells.
- Ensure test step depends on install step via ordering.
