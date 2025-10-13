# Kubernetes Deployment Fix Challenge

## Overview

The `web-frontend` deployment has been failing rollouts in staging. Engineers report that pods never become ready and rollouts take down too many replicas at once.

## Candidate Task

Update `manifests/deployment.yaml` so that:

- The readiness probe hits the correct port/path using `httpGet`.
- Probe timings are reasonable (`initialDelaySeconds`, `periodSeconds`, `timeoutSeconds`).
- Rolling update strategy keeps at least one replica serving traffic (e.g., `maxUnavailable: 0`, `maxSurge: 1`).
- Liveness probe remains untouched.

## Getting Started

Apply the manifest against a local cluster (kind, minikube, etc.) to observe the issues:

```bash
kubectl apply -f manifests/deployment.yaml
kubectl rollout status deployment/web-frontend
```

## Files

- `manifests/deployment.yaml` – Contains the broken readiness probe and deployment strategy.
- `README.md` – This file.

## Acceptance Criteria

- Readiness probe should target `/healthz` on container port `8080`.
- Rolling update parameters ensure zero downtime deployments.
- Deployment should successfully roll out with `kubectl rollout status`.

## Hints

- Use `httpGet` with `scheme: HTTP`.
- Consider adding `successThreshold` if needed.
- Double-check indentation; YAML is picky.
