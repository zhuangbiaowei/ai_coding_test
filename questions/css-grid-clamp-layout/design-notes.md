# Design Notes

- **Spacing tokens**
  - Gutter between cards: `clamp(1.5rem, 2vw, 3rem)`
  - Card padding: `clamp(1.5rem, 2vw + 1rem, 3rem)` top/bottom and `clamp(1.25rem, 1vw + 1rem, 2rem)` left/right
- **Card layout**
  - Mobile (< 600px): one column
  - Tablet (600px–1023px): two columns of equal width, cards stretch to equal height
  - Desktop (>= 1024px): three columns, max grid width 1200px
- **Media**
  - Maintain 4:3 aspect ratio
  - Images must scale with card but never overflow container
- **Copy**
  - Content section should use gap token `--space-200`

The current implementation ignores several of these tokens and misuses `clamp()`, causing overflow and wrapping issues. Fix the CSS so that these notes become true in the rendered layout.
