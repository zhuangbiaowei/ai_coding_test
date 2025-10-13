# Express Request Queue Bug Scenario

## Overview

This minimal Express service simulates a slow third-party API. Requests should be processed sequentially so that only one outbound call is active at a time. A refactor introduced a race condition in the request queue, causing overlapping work and flaky responses under load.

## Candidate Task

Fix the queue implementation so that:

- Incoming requests are enqueued and processed strictly one at a time.
- Each response resolves in the order the requests were received.
- The provided Jest tests (`npm test`) pass consistently.

## Getting Started

```bash
npm install
npm test
```

The tests use [`supertest`](https://github.com/ladjs/supertest) to drive the Express app and simulate concurrent requests.

## Files

- `server.js` – Express application exposing `/enqueue` and `/stats` endpoints.
- `requestQueue.js` – Simple promise-based queue with a subtle race condition.
- `server.test.js` – Jest tests that currently fail because the queue allows concurrency.
- `README.md` – This file.

## Acceptance Criteria

- Queue guarantees FIFO processing regardless of how many requests arrive simultaneously.
- `/stats` accurately reports the maximum level of concurrency (should be 1 after the fix).
- Tests pass without adding external dependencies.

## Hints

- The bug is related to how the queue updates its `pending` flag/promise chain.
- You may need to ensure the `current` promise is always awaited before starting the next task.
- Avoid rewriting the service entirely—focus on the queue abstraction.
