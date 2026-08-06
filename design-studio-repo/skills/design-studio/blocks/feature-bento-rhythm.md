---
name: feature-bento-rhythm
category: feature
dial_compatibility: { variance: [BALANCED, WILD], motion: [CRISP, BOLD], density: [CRISP, BALANCED] }
when_to_use: 3-6 features with genuinely different visual weights; at least 2 can carry imagery.
not_for: 3 equal features (use asymmetric split), > 6 items (use tabs/list), mobile-only flows.
---

# Bento Grid With Rhythm

## Contract (P1 rules that make bento not-slop)
- N items = exactly N cells. No empty filler cell. Re-shape, never pad.
- ≥ 2-3 cells carry real imagery/gradient/pattern; never all flat-on-flat typography.
- One composition logic per grid (e.g. 1 hero cell + supporting cells), not random sizes.
- Cells share the radius system; internal spacing scale consistent.

## Composition recipes
- 3 items: 1+2 split (hero cell full-height left, two stacked right)
- 4 items: hero 2x2 + three singles, or 2+2 offset rows with vertical stagger
- 5 items: 3+2, middle cell of the trio is the visual anchor
- 6 items: 4 over 2 with one full-bleed image cell; beyond 6 use tabs, not bento

## Implementation notes
```css
.bento { display: grid; gap: 16px; grid-template-columns: 1fr; }
@media (min-width: 768px) {
  .bento-4 { grid-template-columns: repeat(4, 1fr); grid-auto-rows: 180px; }
  .bento-4 .hero-cell { grid-column: span 2; grid-row: span 2; }
  .bento-4 .wide { grid-column: span 2; }
}
.cell { border-radius: var(--radius-card); padding: 24px; background: var(--surface-elevated);
        display: flex; flex-direction: column; justify-content: flex-end; }
.cell img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
.cell.has-image { padding: 0; overflow: hidden; }
@media (max-width: 767px) { .bento { grid-auto-rows: auto; } .bento * { grid-column: auto !important; grid-row: auto !important; } }
```
- Media cells: `object-fit: cover`, explicit aspect ratio, meaningful alt or `alt=""` if purely decorative per a11y.md
- Copy cells: label ≤ 4 words + one-line supporting text, no paragraphs, no inner CTAs (one section-level CTA after the grid at most)
- Motion: one `whileInView` reveal for the grid (stagger 60ms), nothing looping

## Anti-patterns
Six white-on-white cells; equal 3-per-row cards cosplaying as bento; images jammed in cells
that fight the grid lines; eyebrow + split-header above it burning both budgets at once.
