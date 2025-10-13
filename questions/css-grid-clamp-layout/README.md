# Responsive CSS Grid + `clamp()` Layout Challenge

## Overview

The marketing team designed a three-card hero layout that should remain balanced across mobile, tablet, and desktop breakpoints. A developer attempted to implement the spec with CSS Grid and `clamp()` sizing but introduced misalignment issues once the viewport crosses 768px.

## Candidate Task

Fix the responsive layout so that:

- Cards stack vertically on small screens (< 600px).
- Two columns appear on tablet screens (600px–1023px) with equal heights.
- Three columns render on desktop (>= 1024px) with consistent gutters.
- Feature images keep their aspect ratio and never overflow their cards.
- The `clamp()` based padding values scale smoothly without causing grid overflow.

You may only modify `styles.css`. The HTML structure is locked to simulate a design system constraint.

## Getting Started

Open `index.html` in a browser or run a static file server to inspect the layout. Resize the viewport to observe the misalignment at tablet and desktop widths.

## Files

- `index.html` – Static markup for the hero layout.
- `styles.css` – Contains the buggy grid definitions.
- `design-notes.md` – Summary of the intended responsive behavior and spacing tokens.

## Acceptance Criteria

- Grid tracks no longer collapse or overflow at any breakpoint.
- Visual spacing matches the `design-notes.md` spec within a few pixels.
- CSS keeps the `clamp()` approach but uses correct min/ideal/max values.
- No additional wrapper elements may be added to the HTML.

## Hints

- Inspect how `minmax()` interacts with fixed-width columns.
- Double-check padding and gap calculations when used inside `clamp()`.
- Consider using `aspect-ratio` to stabilize the image container.
