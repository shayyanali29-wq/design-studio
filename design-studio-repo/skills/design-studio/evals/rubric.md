# Judge Rubric: universal-design-studio outputs (100 points)

Use an LLM judge with this rubric, screenshots + source attached. Score each brief in briefs.json.
Run the SAME brief with and without the skill to measure delta. Record model, skill version, date.

## A. Design Read & procedure (15)
- One-line Design Read declared before code (5)
- Dial levels explicit, justified by the brief, defaults not blindly used (5)
- Correct mode + domain + stack files followed (5)

## B. Consistency locks (15)
- One accent used identically everywhere (5)
- One radius system + one neutral family (5)
- Theme integrity: no mid-page light/dark flips; both themes addressed if applicable (5)

## C. Typography & copy (15)
- Fonts cover every locale's script; script rules respected (no letter-spacing on Arabic etc.) (5)
- Headline uses ONE move from copywriting.md; subtext fits formula (5)
- Zero em/en-dashes in display copy; no filler verbs; CTA intent unique (5)

## D. Layout & imagery (15)
- Hero rules: fold fit ~ visible CTA, 100dvh, top padding cap (5)
- Section-family variety; no 3-equal-cards; bento rules if used (5)
- Real/generated/licensed/labeled assets only; aspect + alt + dimensions (5)

## E. Accessibility & i18n (20)
- Contrast AA on text/UI; focus visible; alt text (6)
- Keyboard parity for custom widgets; marquee pause; reduced-motion collapse (6)
- RTL mirroring + logical properties + Intl formatting + expansion headroom (8)

## F. Domain correctness (10)
- Domain file rules for the brief's domain (states, forms, platform conventions) (10)

## G. Verification evidence (10)
- design-lint.mjs run, P0 count zero (5)
- Render check performed or honestly waived; top issues fixed (5)

## Scoring bands
90-100 ship it | 75-89 minor pass | 60-74 one fix cycle | < 60 fail, diagnose against tiers.
Regressions > 3 points on any single letter between versions block a skill release.

## Mechanical pre-check (judge may quote it)
```bash
node scripts/design-lint.mjs <output files>   # must exit 0 (no P0) for a passing run
```
