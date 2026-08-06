# Rules: Typography

## Defaults (override by domain/brief)
- Display: `text-4xl md:text-6xl tracking-tight leading-[1.05]` (marketing hero: size planned WITH the image, see domains/marketing.md)
- Body: `text-base leading-relaxed max-w-[65ch]`; long-form per domains/editorial.md
- Scale ratio: 1.2-1.25 product, 1.25-1.333 marketing. Declare it as a token, do not eyeball sizes

## Font selection
- Do not default to Inter. First reach: Geist, Outfit, Satoshi, Cabinet Grotesk, or a brand-fit face. Inter is fine when the brief asks for neutral/system, or for accessibility-first/public-sector.
- Non-Latin briefs pick from the coverage table in `references/rules/i18n.md` FIRST. A beautiful Latin-only font on an Urdu page is broken work (P0).
- Hosting: `next/font` or self-hosted `@font-face` + `font-display: swap` + subsetting. Production `<link>` to font CDNs only in M2 single-file mode.
- Two families max per project (sans + mono, or sans + display). Weight range within a family is your hierarchy, not new families.

## Pairings that work
Geist + Geist Mono. Satoshi + JetBrains Mono. Cabinet Grotesk + Inter Tight. Söhne-style grotesks + IBM Plex Mono. Editorial serif + neutral grotesk for UI chrome.

## Serif discipline (P1; per-domain)
- Serif default ONLY for editorial/luxury/heritage/publication briefs with a stated reason, and always per domains/editorial.md
- Banned as default display serif: Fraunces, Instrument Serif (the two LLM crutches). If serif justified, rotate via TASTE.md history; pool: PP Editorial-style transitional, Tiempos-style text serif, Canela-style display, Noto Serif for script coverage.
- Never inject a random serif word into a sans headline for "interest". Emphasis = italic or bold of the SAME family.
- If a serif is used with display italic words containing `y g j p q`: `leading-[1.1]` minimum + `pb-1` reserve (descender clipping check, P1).

## Rules that travel everywhere
- Real typographic quotes (" ") for quotations, never straight quotes in display copy
- Apostrophes typographic (') in user-facing strings
- Numbers in data contexts: `tabular-nums`; ranges use hyphen (2018-2026, $40-80)
- One emphasis move per headline; screaming scale is not hierarchy (weight + color first)
- All-caps: only for tiny labels (≤ 12px, tracking 0.15-0.2em), never caps body text, NEVER caps or letter-spacing on Arabic-script text (breaks joining, P0)
- Justified text: never on web UI; allowed only in print-emulating editorial at narrow measures with hyphens: auto
