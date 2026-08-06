# Dial Behavior Specifications

Five named levels per dial. Behavior is defined per level so execution is concrete, not vibes.

## VARIANCE (layout experimentation)

| Level | Behavior |
|---|---|
| CALM | Strict grid, equal columns, centered or left-aligned, identical card rhythm. Regulatory-safe. |
| CRISP | Mostly regular grid with ONE offset move per page (one asymmetric split, one oversized media cell). |
| BALANCED | Mixed section rhythm: at least 3 layout families per page; some asymmetry; varied aspect ratios. |
| BOLD | Asymmetric compositions, negative-margin overlaps, fractional grids (2fr 1fr 1fr), large empty zones. |
| WILD | Masonry, scroll-pinned narratives, collision layout, brutalist breaks. Brief must ask for it. |

Caps: mobile always collapses to single-column < 768px at BALANCED+ (declare per section). Mobile apps cap at BOLD. DENSITY WILD caps VARIANCE at BALANCED. Anti-center-bias rule: centered heroes are unrestricted at CALM/CRISP (they are often correct), discouraged at BALANCED, and need justification at BOLD+.

## MOTION

| Level | Behavior |
|---|---|
| CALM | Instant state changes. `:hover`/`:active` styles only. Reduced-motion is the experience. |
| CRISP | CSS transitions 150-300ms on transform/opacity. Fade/rise on entry. No scroll effects. |
| BALANCED | `whileInView` reveals, spring micro-interactions on CTAs (`stiffness:100 damping:20`), staggered lists. |
| BOLD | Scroll-triggered section choreography, ONE pinned or horizontal moment max, magnetic hover on key CTA. |
| WILD | Full scrolltelling, parallax layers, kinetic type. Brief must ask for it; reduced-motion fallback is P0. |

Rules at every level: animate transform/opacity only; no `window.addEventListener('scroll')`; no scroll-driven component state; infinite loops only for genuine live state; every animation needs a one-sentence motive (hierarchy / storytelling / feedback / state change); marquees max 1 per page and MUST pause on hover/focus; scroll-hijack needs keyboard + touch alternatives.

## DENSITY

| Level | Behavior |
|---|---|
| CALM | Gallery spacing (py-24 to py-40 sections), one idea per viewport. |
| CRISP | Generous product spacing (py-16 to py-24). |
| BALANCED | Standard marketing/product spacing (py-12 to py-16), scannable grouping. |
| BOLD | Data-rich: tables, stat clusters, tabs; 1px dividers over cards; still breathes at section level. |
| WILD | Cockpit: dense grids, mono for all figures, keyboard-first UX. Product UI only, never marketing. |

## Interaction matrix (hard caps, P1)

| Combination | Resolution |
|---|---|
| DENSITY WILD + any VARIANCE > BALANCED | cap VARIANCE at BALANCED |
| Trust/regulated/elderly brief + MOTION > CRISP | cap MOTION at CRISP |
| Mobile app + VARIANCE or MOTION > BOLD | cap at BOLD |
| Consideration high-stakes + DENSITY < BALANCED | raise to BALANCED, deepen content structure |

## Presets

| Brief | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| SaaS landing (mainstream) | CRISP-BALANCED | CRISP-BALANCED | BALANCED |
| Agency / portfolio (designer) | BOLD | BALANCED-BOLD | CRISP |
| Portfolio (developer) | CRISP | CRISP | BALANCED |
| Premium consumer / luxury | BALANCED | BALANCED | CALM-CRISP |
| SMB local business (restaurant, salon, gym) | CRISP | CALM-CRISP | BALANCED |
| Public sector / healthcare / finance | CALM | CALM | BALANCED-BOLD |
| Editorial / blog / docs | CALM-CRISP | CALM | BALANCED-BOLD |
| E-commerce catalog | CRISP | CRISP | BOLD |
| Kids / playful consumer | BALANCED-BOLD | BOLD | CRISP |
| Dashboard / analytics | CALM | CALM-CRISP | BOLD-WILD |
| Mobile social app | CRISP-BALANCED | BALANCED | BALANCED |
| Mobile utility app | CRISP | CRISP | BALANCED-BOLD |
