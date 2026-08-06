---
name: hero-asymmetric-split
category: hero
dial_compatibility: { variance: [CRISP, BOLD], motion: [CALM, BOLD], density: [CALM, BALANCED] }
when_to_use: Default hero for SaaS / premium consumer / product with one strong message and one strong asset.
not_for: Editorial manifesto reads (message IS the design), mobile-app screens.
stack: [html-tailwind-ish tokens; ports to react-next directly]
---

# Asymmetric Split Hero

## Sketch
```
| headline (7 cols)        |  real image (5 cols) |
| subtext                  |                      |
| [primary] secondary→     |                      |
```

## Contract
- ≤ 4 text elements, headline ≤ 2 lines desktop, subtext ≤ 20 words (copywriting.md)
- top padding ≤ 96px; `min-h-[100dvh]`; CTA above the fold
- one accent; primary solid CTA + quiet secondary; radius system consistent

## Reference implementation (web, token-first)
```html
<section class="hero">
  <div class="hero-grid">
    <div class="hero-copy">
      <h1><!-- outcome-led headline, <= 8 words --></h1>
      <p class="sub"><!-- value + differentiator + proof, <= 20 words --></p>
      <div class="cta-row">
        <a class="btn-primary" href="#"><!-- verb-first, <= 3 words --></a>
        <a class="btn-quiet" href="#"><!-- one quiet action --></a>
      </div>
    </div>
    <img class="hero-img" src="" alt="" width="1200" height="900">
  </div>
</section>
<style>
.hero { min-height: 100dvh; display: flex; align-items: center;
        padding-top: clamp(48px, 8vh, 96px); background: var(--surface); }
.hero-grid { margin-inline: auto; max-width: 1200px; padding-inline: 24px;
             display: grid; gap: 40px; align-items: center;
             grid-template-columns: 1fr; }
@media (min-width: 768px) { .hero-grid { grid-template-columns: 7fr 5fr; gap: 64px; } }
h1 { font-size: clamp(2.25rem, 2rem + 2vw, 3.75rem); letter-spacing: -0.02em;
     line-height: 1.05; font-weight: 600; color: var(--text); text-wrap: balance; }
.sub { margin-top: 20px; max-width: 52ch; line-height: 1.65; color: var(--text-muted);
       font-size: 1.125rem; }
.cta-row { margin-top: 32px; display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.btn-primary { min-height: 48px; padding-inline: 24px; border-radius: var(--radius-action);
               background: var(--accent); color: var(--on-accent); font-weight: 500;
               display: inline-flex; align-items: center; transition: transform .15s, background .2s; }
.btn-primary:active { transform: scale(.98); }
.btn-quiet { color: var(--text); text-decoration: underline; text-underline-offset: 4px; }
.hero-img { width: 100%; height: auto; border-radius: var(--radius-card);
            box-shadow: 0 24px 60px rgb(0 0 0 / .12); }
@media (prefers-reduced-motion: reduce) { .btn-primary { transition: none; } }
</style>
```

## Mobile fallback
Single column < 768px declared above; image after copy unless the product IS the image
(then image first, copy compact); CTA row wraps to full-width buttons ≥ 48px.

## RTL
Built on logical properties (`margin-inline`, `padding-inline`, `start`); flips free.

## Anti-patterns
Do not add an eyebrow + tagline + trust strip inside the hero (4-element cap). Do not stack two
solid CTAs. Do not let the grid become 50/50 at CRISP (that is a different block: split-even).
