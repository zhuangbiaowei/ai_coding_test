# Performance Notes

- Animating `top` forces layout + paint on every frame.
- `card.offsetHeight` flushes the layout queue intentionally; avoid if possible.
- Scroll listener runs synchronously for every pixel moved and repeatedly calls `getBoundingClientRect()`.
- Consider batching DOM reads/writes inside `requestAnimationFrame`.
- `will-change` on multiple cards increases memory usage; use only when actively animating.
