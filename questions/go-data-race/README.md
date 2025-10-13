# Go Goroutine Data Race Challenge

## Overview

This module tracks active websocket sessions per region. A recent change parallelized the accounting logic but forgot proper synchronization, introducing a data race and sporadic panics during load tests.

## Candidate Task

Remove the data race while keeping the API ergonomic:

- `SessionRegistry.Increment(region string)` should be safe to call from many goroutines.
- `SessionRegistry.Snapshot()` must return a consistent copy of counts.
- The included tests (`go test ./...`) currently fail with `fatal error: concurrent map writes`.

## Getting Started

```bash
go test ./...
```

For extra validation, also run with the race detector:

```bash
go test -race ./...
```

## Files

- `session_registry.go` – Registry implementation with missing synchronization.
- `session_registry_test.go` – Tests that exercise concurrent access.
- `README.md` – This file.
- `go.mod` / `go.sum` – Module definition (no external deps).

## Acceptance Criteria

- Tests pass without panics when the race is fixed.
- API surface remains the same (method names & signatures).
- Avoid over-synchronizing (e.g., don't serialize everything unnecessarily).

## Hints

- A `sync.Mutex` or `sync.RWMutex` may be sufficient.
- Remember to protect both writes and reads to the map.
- Copy the internal map before returning it to callers.
