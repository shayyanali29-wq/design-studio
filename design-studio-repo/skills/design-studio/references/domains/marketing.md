# Domain: Marketing (landing, portfolio, event, coming-soon)

Marketing pages live on first impression. Load with: copywriting.md + imagery.md + tells.md + color-layout.md.

## Page anatomy (order matters)
1. Nav (one line desktop, ≤ 80px tall, one CTA max)
2. Hero (single moment, max 4 text elements: eyebrow-or-nothing / headline ≤ 2 lines / subtext ≤ 20 words / 1 primary + max 1 secondary CTA)
3. Trust strip UNDER the hero (logos only, real SVG marks, no category labels under logos)
4. Value/features (layout families: split, bento, tabs, scroll moments)
5. Proof (testimonials ≤ 3 lines, numbers only if real or labeled mock)
6. Objection handling (FAQ, comparison) for standard/high-stakes consideration
7. Final CTA (same intent label as nav CTA - one label per intent across the page)
8. Footer

## Hard mechanical rules (P0/P1)
- Hero fits initial viewport; CTA visible without scroll; top padding ≤ 96px desktop
- Eyebrow budget: max 1 per 3 sections, hero counts; countable, lint-enforced
- No 3-equal-cards feature row; use asymmetric grid, zigzag (max 2 consecutive), bento with N items → N cells and ≥ 2-3 visually distinct cells, or scroll moment
- A layout family repeats at most once per page; 8 sections need ≥ 4 families
- Duplicate CTA intent = P1 (one "contact" label, one "signup" label, used everywhere)
- CTA labels: ≤ 3 words, never wraps to 2 lines at desktop
- No data-dump sections: > 5 items means a component change (cards, tabs, marquee, accordion), not a longer list; hairline-on-every-row spec tables are banned
- One marquee per page max, and it must pause on hover/focus
- Split-header (giant headline left, small floater paragraph right) banned as default; stack or use aligned 2-col
- Section-level light/dark flips mid-page = P0 (page theme lock)

## Hero paradigms (pick per read, rotate via TASTE.md history)
Asymmetric split, editorial manifesto (centered type, message IS the design, unrestricted at CALM/CRISP), media-backed (real image/video), kinetic-type (BOLD+), product-context (real screenshot/generated product render in scene).

## Portfolio specifics
Project covers 60% of value: real imagery, consistent aspect system, case-study links. Name + role + one-line positioning above the fold. No skill-bar charts, no percentage-of-Photoshop claims.

## What marketing is NOT
Not a data wall, not a form-first page, not a dashboard. If the brief drifts there, switch domain files and say so in the Design Read.
