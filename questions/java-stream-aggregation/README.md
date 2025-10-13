# Java Stream Aggregation Correction Challenge

## Overview

`SalesCalculator` summarizes order totals by region using Java Streams. A hurried refactor flattened the map reduction logic, so regional totals are now wildly incorrect.

## Candidate Task

Fix the aggregation so that:

- Totals are grouped by region.
- Only orders marked `status == FULFILLED` are counted.
- Negative adjustments (returns) are applied.
- The provided parameterized JUnit tests pass (`mvn test`).

## Getting Started

```bash
mvn test
```

## Files

- `pom.xml` – Maven configuration using JUnit 5.
- `src/main/java/com/example/SalesCalculator.java` – Contains buggy stream pipeline.
- `src/test/java/com/example/SalesCalculatorTest.java` – Parameterized tests describing expected aggregates.
- `README.md` – This file.

## Acceptance Criteria

- Do not replace Streams with manual loops; fix the pipeline.
- Preserve the `Order` and `SalesCalculator` API surface.
- Ensure BigDecimal math remains precise.

## Hints

- Filter by status before collecting.
- Use `Collectors.groupingBy` + `Collectors.reducing` or `Collectors.toMap` with merge function.
- Remember to start from `BigDecimal.ZERO` when summing.
