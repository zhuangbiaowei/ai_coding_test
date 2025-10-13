# TypeScript Generic Prop Typing Challenge

## Overview

The UI library exposes a reusable `<SmartSelect>` component that should infer its `value` type from the provided options. A regression loosened the prop typing so that almost anything can be passed in, defeating compile-time safety.

## Candidate Task

Restore the generic type safety for `<SmartSelect>` and ensure the `onChange` callback and `value` prop stay correctly typed. The `tsd` tests express the desired API surface and currently fail due to the overly-broad definitions.

## Getting Started

```bash
npm install
npm test
```

The repository uses [`tsd`](https://github.com/SamVerschueren/tsd) to assert the desired type relationships. The failing assertions point at the regression.

## Files

- `src/SmartSelect.tsx` – Component implementation with the incorrect generics.
- `smart-select.test-d.ts` – Type-level tests describing the expected usage scenarios.
- `package.json` / `tsconfig.json` – Minimal tooling setup for TypeScript + tsd.

## Acceptance Criteria

- `npm test` passes without type errors.
- `SmartSelect` should infer the option value type from `options`.
- Incorrect usages (wrong `value` type or callback signature) must be reported by TypeScript.
- Correct usages compile without issue.

## Hints

- You may need to reintroduce a generic type parameter to `SmartSelectProps`.
- Ensure `onChange` is typed to receive the derived option value type.
- Use read-only arrays to avoid accidental mutation requirements.
