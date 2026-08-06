# Rules: Color, Spacing, Layout

## Color
- ONE accent per page/app (P0). Saturation < 80% unless brand demands otherwise. The accent repeats identically across sections (color consistency lock).
- Neutrals: pick warm OR cool family once; never mix warm gray and cool gray on one page (P1).
- Surfaces: off-white (not #FFFFFF-feeling pure) + off-black (zinc-950 class), no pure #000/#FFF blocks (P2).
- AI-purple/blue-glow gradient: banned as default (P1). Permitted when the brand IS purple; execute with intent (harmonized neutrals, restrained gradient), not glow-slop.
- Premium-consumer trap palette (warm beige + brass/clay/oxblood + espresso text): P1 default-ban for cookware/wellness/artisan/luxury briefs unless the brand literally owns it. Alternatives, rotate via TASTE.md: cold luxury (silver/chrome/smoke), forest (deep green + bone + amber), black-and-tan, cobalt + cream, terracotta + slate, olive + brick, pure mono + one saturated pop.
- Dark mode: brand-driven choice, not dogma. If dual: tokens once at root (`dark:` variant or CSS vars, one strategy), hierarchy parity in both modes, brand color recognizable in both, TEST BOTH before shipping (P1). Chapter-level theme flips mid-page = P0.

## Spacing & mechanics
- Spacing scale token (4px base); sections separated by space, not borders, wherever possible
- Container: `max-w-[1200-1400px] mx-auto px-4 md:px-6`; marketing text narrower inside
- Cards only when elevation means hierarchy; else `border-t`, `divide-y`, or whitespace. Shadows tinted to surface hue, never pure black on light.
- Radius: ONE system (P0): all-sharp (0), all-soft (8-16px), or all-pill (actions only). Mixed allowed only as a documented rule followed everywhere.
- Z-index: named layers (base/sticky/overlay/modal/toast), not arbitrary z-50 spam (P2).
- Web vitals budgets (P1): critical JS ≤ 170KB, hero image ≤ 200KB (AVIF/WebP), subset fonts, lazy-load below-fold media, LCP image prioritized.
- Viewport: `min-h-[100dvh]` for full-height heroes (P0, never `h-screen`); grid not flexbox percentage math for columns.

## Layout patterns (web)
- Section rhythm: alternate layout families; one family max once per page at BALANCED+; 8 sections need ≥ 4 families (P1).
- Zigzag (image-text alternating): max 2 consecutive, then break with full-width/vertical/bento (P1).
- Bento: N items = N cells (no empty filler cells); ≥ 2-3 cells with real imagery/gradient/pattern, never all-flat-on-flat (P1).
- Eyebrow micro-labels: budget 1 per 3 sections, hero counts (P1, lint-checked). Plain topic words when used; NEVER numbered eyebrows (00/INDEX, 001-Capabilities) (P1).
- Marquee: ≤ 1 per page, pauses on hover/focus (P0 a11y + P1 taste).
- Centered hero: free at CALM/CRISP, discouraged at BALANCED, justify at BOLD+ (see dials.md; fixes older skills overcorrecting into an "everything asymmetric" house style).
- Mobile: every multi-col section declares its < 768px single-column collapse in the same component (P1).
