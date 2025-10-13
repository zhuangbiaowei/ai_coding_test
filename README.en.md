# AI Coding Test Questions Repository

## Project Introduction

This repository curates hands-on exercises for evaluating AI coding capabilities across frontend, backend, data tooling, and DevOps scenarios. Each question mirrors real-world debugging, optimization, or hardening tasks that an AI pair programmer may encounter.

## Project Structure

```
.
├── README.md          # Chinese documentation
├── README.en.md       # English documentation
├── LICENSE            # License file
└── questions/         # Test questions directory
```

## Usage

1. Clone or download the repository.
2. Browse the `questions/` directory and pick a scenario.
3. Read the README or inline comments inside the chosen folder to understand context and goals.
4. Implement the required fixes, tests, or configuration changes.
5. Run the provided test suite or manual checks to confirm your solution.

## Current Test Questions

### Frontend & Client Experiences
- `questions/html-css-navigation/` — Center the navigation bar across breakpoints and keep spacing consistent.
- `questions/left-side-navigation/` — Implement a hidden-by-default left nav that slides in when the cursor approaches the edge.
- `questions/animation-performance/` — Tune the hero animation CSS/JS to avoid forced layouts and maintain smooth 60fps playback.
- `questions/css-grid-clamp-layout/` — Fix the `clamp()`-driven CSS Grid layout so the three-card design aligns on mobile, tablet, and desktop.
- `questions/react-state-sync-bug/` — Repair the derived state sync so the child component reflects the latest `value` prop without breaking edits.
- `questions/typescript-prop-typing/` — Restore `<SmartSelect>` generics so `value` and `onChange` remain type-safe and inferred.

### Backend & Services
- `questions/concurrent-redis-reading/` — Remove the race condition in the Redis caching layer so `test_cache.py` passes reliably.
- `questions/express-request-queue/` — Fix the Express request queue so tasks execute sequentially and respond in FIFO order.
- `questions/file-upload-boundary-check/` — Reinstate upload validation to block oversized archives, path traversal, and spoofed extensions.
- `questions/input-validation-security/` — Harden the Flask `/feedback` endpoint against SQL injection and stored XSS while enforcing length limits.
- `questions/go-data-race/` — Add synchronization to the Go session registry to stop concurrent map writes and flaky tests.
- `questions/java-stream-aggregation/` — Correct the Java Stream aggregation to total fulfilled orders per region and include return adjustments.

### Data Processing & Scripting
- `questions/pandas-data-cleaning/` — Repair Pandas `clean_orders` to deduplicate, impute missing ship dates, and return a stable sort order.
- `questions/html-to-markdown/` — Extend the Ruby converter to translate HTML tables into proper Markdown tables.

### Infrastructure & Engineering Practices
- `questions/docker-image-optimization/` — Use a multi-stage Docker build with a health check to shrink the Next.js runtime image.
- `questions/github-actions-debug/` — Fix the GitHub Actions CI workflow to run on Node 18, install dependencies correctly, and execute tests.
- `questions/kubernetes-deployment/` — Adjust the `web-frontend` deployment readiness probe and rolling strategy to avoid downtime during rollouts.

### Language & Test Coverage
- `questions/rust-unit-tests/` — Complete the Rust `id_tools` unit tests to cover normalization, check digit calculation, and masking behavior.

## Contributing

Contributions are welcome—feel free to add new exercises, refine existing ones, or expand the documentation.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
