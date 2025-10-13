# Docker Image Optimization Exercise

## Overview

The marketing site ships as a static Next.js build. Our current Dockerfile ships the entire build toolchain in production, leading to 2GB images and slow deploys.

## Candidate Task

Rewrite the `Dockerfile` to:

- Use a multi-stage build so that production image only contains the compiled output.
- Install dependencies with `npm ci` to leverage lockfiles.
- Add a `HEALTHCHECK` that probes `http://localhost:3000/healthz`.
- Keep final image small (use an `alpine` base for runtime).

You may also add `.dockerignore` entries if helpful.

## Getting Started

```bash
docker build -t marketing-site:dev .
```

## Files

- `Dockerfile` – Current bloated image definition.
- `.dockerignore` – Missing important exclusions.
- `README.md` – This file.
- `package.json` / `server.js` – Minimal Next.js-like server stub.

## Acceptance Criteria

- Multi-stage build with separate builder/runtime stages.
- Runtime stage should only copy compiled assets and production dependencies.
- `HEALTHCHECK` should fail fast if the server is down.
- Node 18 runtime.

## Hints

- Use `npm ci --omit=dev` in the runtime stage.
- Leverage build cache by copying `package*.json` first.
- Consider using `node:18-alpine` for the final stage.
