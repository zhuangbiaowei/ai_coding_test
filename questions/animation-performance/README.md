# Animation Performance Optimization Exercise

## Overview

The landing page features a hero animation where feature cards float upward on page load. The current implementation uses layout-thrashing CSS properties and JavaScript that triggers needless reflows, causing dropped frames on mid-tier laptops.

## Candidate Task

Optimize the animation to hit a steady 60fps by limiting layout work:

- Prefer transform/opacity-based animations.
- Avoid triggering forced synchronous layouts in the scroll handler.
- Use `will-change` sparingly to hint the compositor.
- Keep the final design visually identical.

You may modify both `styles.css` and `animation.js` but must preserve the DOM structure found in `index.html`.

## Getting Started

Open `index.html` in a browser with DevTools performance monitor enabled. Scroll the page and observe layout thrashing warnings.

## Files

- `index.html` – Static markup for the hero section.
- `styles.css` – Contains inefficient keyframes and transition declarations.
- `animation.js` – Scroll-linked JavaScript that currently forces layout on every tick.
- `perf-notes.md` – Details the performance issues to look for.

## Acceptance Criteria

- The page animates smoothly in Chrome DevTools' performance panel with minimal layout/paint cost.
- No inline styles should be introduced.
- Keep bundle size small; pure CSS/vanilla JS only.

## Hints

- Use `requestAnimationFrame` to batch DOM writes.
- Switch from animating `top`/`left` to `transform: translate`.
- Re-use computed values instead of calling `getBoundingClientRect()` in a loop.
