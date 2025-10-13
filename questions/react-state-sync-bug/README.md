# React Derived State Synchronization Bug

## Overview

This project contains a minimal React application that exposes a subtle state synchronization bug between a parent form and a derived child component. The component keeps an internal piece of state that should follow the `value` prop, but an incorrect `useEffect` dependency list causes it to fall out of sync after the first update.

## Goal for Candidates

Fix the derived state synchronization so that the child component always reflects the latest parent value while still allowing local edits. All provided tests should pass once the bug is resolved.

## Getting Started

```bash
npm install
npm test
```

The test suite uses [Vitest](https://vitest.dev/) with React Testing Library. The failing test highlights the regression scenario.

## Files

- `src/EditableField.jsx` – The buggy component that keeps a derived copy of the input value.
- `src/EditableField.test.jsx` – A failing test that demonstrates the stale state bug.
- `package.json` – Minimal tooling configuration with Vitest and React Testing Library.

## Expected Fix

Update the synchronization logic in `EditableField.jsx` so that internal state updates whenever the `value` prop changes. Be careful to avoid triggering unnecessary renders or wiping user edits while typing.

## Tips

- Review how `useEffect` dependency arrays work.
- Consider whether `useEffect` is the right tool or if `useLayoutEffect` / `useMemo` would be more appropriate.
- Ensure the component still emits `onChange` events correctly so the parent can update its own state.
