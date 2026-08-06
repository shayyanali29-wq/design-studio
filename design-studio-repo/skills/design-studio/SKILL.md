---
name: universal-design-studio
description: >-
  Design any website or mobile app UI, in any language, that does not look like generic AI output.
  Use whenever the user asks to design, build, redesign, or review a web page, landing page, web app,
  dashboard, e-commerce site, blog, portfolio, email, mobile app screen, or UI component.
  Reads the brief, picks platform and output mode, sets five-level design dials (CALM / CRISP /
  BALANCED / BOLD / WILD), builds token-first, then verifies with a mechanical lint pass and a
  render-and-inspect loop before shipping. Supports RTL and all writing systems.
---

# Design Studio: Universal Anti-Slop UI Skill

> Scope: any website, web app, or mobile app screen, in any language.
> Every rule is contextual and tiered by severity. Nothing fires automatically.

---

## THE OPERATING LOOP (always run all 8 steps)

1. **INFER** the brief (Section 1)
2. **DECLARE** the one-line Design Read (Section 1.D)
3. **SET** the three dials to named levels (Section 3)
4. **LOAD** only the reference files this brief needs (Section 7)
5. **BUILD** token-first in the fixed order (Section 4)
6. **LOCALIZE** before styling polish (Section 4, step 5)
7. **VERIFY** with lint + render loop (Section 5). Not optional.
8. **SHIP** with evidence, and update `TASTE.md` memory (Section 6)

---

## 0. RULES OF ENGAGEMENT

**Precedence ladder** (higher wins every conflict):
1. Explicit user instruction ("make it purple" beats every palette rule here)
2. Human-interface law: WCAG 2.2 AA, Apple HIG, Material Design, platform conventions
3. Brief inference (audience, brand, quiet constraints, consideration level)
4. Dial logic (Section 3)
5. This rulebook

**Ask at most ONE question**, and only when the read genuinely diverges (*"Linear-clean or Awwwards-wild?"*). If the context answers it, do not ask. Proceed.

**Thin brief?** If the user gave almost nothing ("make me a gym site"), offer 2-3 one-line directions, pick the strongest as your working read, and proceed. Never block on a questionnaire.

**Quiet constraints override aesthetics.** Accessibility-first audiences, public sector, regulated industries, medical, kids' products: these cap the dials and pick the design system before style is discussed.

**Honesty.** Use official design-system packages when one exists (`references/design-systems.md`). Label approximations as approximations ("web glassmorphism, not Apple Liquid Glass"). Never fake precision a brand does not claim.

**Severity tiers.** Every rule in this skill is tagged:
- **P0**: ship blocker. Output with a P0 violation is broken work.
- **P1**: fix it, or keep it with a one-line written justification.
- **P2**: polish. Address when time allows.

**Monorepo caution.** If other design skills are also active, THIS skill's dials win for layout/motion/density decisions; do not blend two aesthetic systems on one page.

---

## 1. BRIEF INFERENCE (read the room before anything)

### 1.A Signals to read, in order
1. **Domain**: marketing (landing/portfolio/event), product UI (dashboard/SaaS/tools), editorial (blog/docs/news), commerce (store/product/checkout), mobile app screens, email.
2. **Platform**: web, mobile native, or both.
3. **Environment**: repo project / chat canvas / single-file deliverable / existing codebase audit.
4. **Audience**: procurement panel, consumers, recruiters, general public. The audience picks the aesthetic, not your taste.
5. **Vibe words** the user used: "calm", "Linear-style", "Awwwards", "Apple-y", "playful", "serious B2B", "brutalist", "glassy", "warm", "premium".
6. **References**: URLs, screenshots, named products, competitors.
7. **Languages and locales**: which languages must the UI render? Any RTL (Arabic, Hebrew, Urdu, Persian)? CJK? This changes fonts, spacing, layout mirroring. Load `references/rules/i18n.md` the moment a non-English locale appears.
8. **Brand assets that exist**: logo, colors, type, photography. For redesigns these are starting material, not optional input.
9. **Consideration level**: impulse purchase vs high-stakes decision (medical, finance, enterprise). High-stakes needs depth and trust patterns, not ruthless cut-down.
10. **Quiet constraints**: a11y-first, regulated, public sector, kids. These OVERRIDE vibe.

### 1.B Anti-default discipline (P1)
Never default to the LLM house style: purple-blue gradient glow, centered hero over dark mesh, three equal feature cards, glassmorphism on everything, Inter + slate-900, infinite loops everywhere. Reach past them based on the read.

### 1.C Redesign detection (P0 when applicable)
Existing code/URL in the brief = redesign, not greenfield. Load `references/rules/redesign.md`... *(if the codebase exists, audit first: brand tokens, IA, SEO baseline, what to preserve. Never change URL slugs, nav labels, form field names, legal copy, or analytics hooks silently.)*

### 1.D Output the Design Read (P0)
Before any code, state one line:
> **"Reading this as: [domain] for [audience] on [platform], in [locales], with a [vibe] language, stack [stack], dials [VARIANCE/MOTION/DENSITY]."**

Examples:
- *"Reading this as: B2B SaaS landing for technical buyers on web, English + German, Linear-clean language, Next.js + Tailwind, CRISP/CRISP/BALANCED."*
- *"Reading this as: food-delivery mobile app screens for young consumers in Pakistan, Urdu (RTL) + English, playful premium language, React Native, BALANCED/BOLD/BALANCED."*
- *"Reading this as: clinic website redesign for elderly patients, Urdu + English, trust-first language, single-file HTML, CALM/CALM/BALANCED."*

---

## 2. OUTPUT MODES (detect from environment, or ask your one question)

| Mode | Detect | Rules |
|---|---|---|
| **M1 Repo app** | package.json exists | Follow `references/stacks/react-next.md` (or the stack actually present) |
| **M2 Single-file HTML** | chat canvas, artifact, "one file", no repo | Load `references/stacks/single-file-html.md`. ALL CSS/JS inline, no build step |
| **M3 Component only** | "just the hero", "a pricing section" | Deliver the component + its tokens, nothing more |
| **M4 Audit / redesign** | existing URL/code | Audit report first, then changes. See 1.C |
| **M5 Mobile screens** | "app", "iOS", "Android", screen flow | Load `references/domains/mobile-apps.md` + `references/stacks/react-native.md` or `flutter.md` |

Full mode rules: `references/modes.md`.

---

## 3. THE THREE DIALS, FIVE NAMED LEVELS

Set after the Design Read. Every layout, motion, and density decision is gated by these.

| Dial | Question | CALM | CRISP | BALANCED | BOLD | WILD |
|---|---|---|---|---|---|---|
| **VARIANCE** | How much layout experimentation? | strict symmetry | gentle offset | mixed rhythm | asymmetric, overlap | artsy chaos |
| **MOTION** | How much movement? | static, instant states | hover + fade only | scroll reveals, springs | choreography, one hijack max | cinematic, physics |
| **DENSITY** | Info per viewport? | art gallery | roomy | standard product | data-rich | cockpit (mono numbers) |

Legacy numeric mapping: CALM=1-2, CRISP=3-4, BALANCED=5-6, BOLD=7-8, WILD=9-10. Accept numeric overrides as aliases.

**Default: CRISP / CRISP / BALANCED.** Neutral by design. The brief pulls dials up or down; you never start at BOLD.

### 3.A Dial inference quick table
| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| minimalist / calm / editorial / Linear-style | CRISP | CALM-CRISP | CALM-CRISP |
| premium consumer / Apple-y / luxury | BALANCED | BALANCED | CALM |
| playful / Awwwards / agency / experimental | BOLD-WILD | BOLD-WILD | CRISP-BALANCED |
| SMB local business / restaurant / clinic / general public | CRISP | CALM-CRISP | BALANCED |
| trust-first / public sector / regulated / elderly | CALM | CALM | BALANCED-BOLD |
| dashboard / analytics / ops tool | CALM-CRISP | CALM | BOLD-WILD |
| mobile app, any kind | ≤ BOLD | ≤ BOLD | BALANCED-BOLD |
| redesign (preserve brand) | match existing | match +1 step | match existing |

Full behavior tables, level-by-level output specs, interaction caps, and mobile overrides: `references/dials.md`.

**Interaction caps (P1):** DENSITY WILD caps VARIANCE at BALANCED. CALM audience (elderly, regulated) caps MOTION at CRISP. On mobile, VARIANCE and MOTION are each capped at BOLD. High VARIANCE must collapse to single column under 768px.

---

## 4. BUILD ORDER (fixed sequence, do not reorder)

1. **TOKENS FIRST.** Define design tokens before any component: color roles (surface, surface-elevated, text, text-muted, accent, on-accent, border), type scale, spacing scale, radius scale, shadow scale, motion durations. CSS variables, Tailwind `@theme`, or platform equivalent. **One accent color. One radius system. One warm-or-cool neutral family. Locked.**
2. **PRIMITIVES + FULL STATES.** Buttons, inputs, cards, nav with hover / active / focus-visible / disabled / loading / empty / error. Nothing ships as happy-path-only.
3. **SECTIONS / SCREENS.** Per the loaded domain file. Compose real content, not lorem ipsum. If real content is missing, build with the best inference and end with a "Content needed" list.
4. **IMAGERY.** Per `references/rules/imagery.md`: generation tool first, brand assets second, licensed stock third, labeled placeholder slot last. Never div-fake screenshots, never random-URL photos whose content you cannot control.
5. **LOCALIZE.** For any non-English or multilingual brief: logical CSS properties (start/end, not left/right), mirrored directional icons, Intl-formatted numbers/dates, fonts that actually cover the target scripts, +30-40% text-expansion headroom. `references/rules/i18n.md`.
6. **MOTION PASS.** Only now, per MOTION dial. Animate transform/opacity only. `prefers-reduced-motion` honored above CRISP. `references/rules/motion.md`.
7. **VERIFY** (Section 5).

---

## 5. VERIFICATION LOOP (P0, mandatory)

**5.1 Mechanical lint.** After generating, run on every output file:
```bash
node scripts/design-lint.mjs <files...>
```
Fix all P0 findings. Justify P1s in one line or fix them. If Node is unavailable, do the equivalent grep checks by eye.

**5.2 Render and inspect.** If the environment can run a server or render a preview: serve it, screenshot it (both light and dark if themed; smallest and largest viewport), and compare against the Design Read. Fix the top 3 visual issues. Max 2 iterations.
If rendering is impossible in this environment, say so and do a static self-review instead: re-read the code as a browser would render it.

**5.3 Ship with evidence.** The final message includes: the Design Read, dial levels, lint result (or manual-check summary), what the render check caught and fixed, and the Content-needed list if any.

---

## 6. TASTE.md PROJECT MEMORY

If a `TASTE.md` exists in the project root, read it before designing and respect its locked tokens and rotation history. After shipping, write or update it (see `TASTE.template.md`): chosen palette family per project type, fonts used, voice, dial levels, and one-line decisions log. Rotation rules ("not the same serif twice in a row", "not the same premium palette twice") are enforced THROUGH this file, never through assumed memory.

---

## 7. REFERENCE INDEX (load on demand only)

| When | Load |
|---|---|
| Any non-trivial mode question | `references/modes.md` |
| Dial behavior specs, caps, mobile overrides | `references/dials.md` |
| Landing / portfolio / marketing page | `references/domains/marketing.md` |
| Dashboard, SaaS app, data UI, forms-heavy | `references/domains/product-ui.md` |
| Blog, docs, news, long-form | `references/domains/editorial.md` |
| Store, product pages, checkout | `references/domains/commerce.md` |
| iOS / Android / RN / Flutter screens | `references/domains/mobile-apps.md` |
| Type scale, fonts, pairing, serif rules | `references/rules/typography.md` |
| Color, spacing, grids, layout patterns | `references/rules/color-layout.md` |
| The anti-slop tells list (severity-tiered) | `references/rules/tells.md` |
| Headlines, subtext, CTAs, voice, microcopy | `references/rules/copywriting.md` |
| Asset strategy + generation prompt templates | `references/rules/imagery.md` |
| Animation patterns, skeletons, forbidden APIs | `references/rules/motion.md` |
| Keyboard, ARIA, contrast, touch targets | `references/rules/a11y.md` |
| RTL, scripts, fonts by language, Intl | `references/rules/i18n.md` |
| Meta, OG, JSON-LD, CWV budgets | `references/rules/seo.md` |
| Official design-system packages | `references/design-systems.md` |
| Stack specifics | `references/stacks/{react-next, single-file-html, astro-vue-svelte, wordpress, react-native, flutter}.md` |
| Worked before/after examples | `examples/` |
| Drop-in golden blocks | `blocks/` |
| Regression testing of this skill | `evals/` |

---

## 8. P0 NON-NEGOTIABLES (the short list; full rulebook lives in references)

1. **Consistency locks**: one accent, one radius system, one neutral family, one icon library, one theme per page or screen flow.
2. **Contrast** WCAG AA minimum everywhere (4.5:1 text, 3:1 large text and UI). No white-on-white anything.
3. **Above the fold** on marketing: headline ≤ 2 lines desktop, subtext ≤ 20 words, primary CTA visible without scroll, hero top padding ≤ 96px, `min-h-[100dvh]` never `h-screen`.
4. **Real visuals**: generation/brand/licensed/labeled-slot only. No div-based fake app screenshots, no hand-rolled icon SVGs, no image URLs whose content you cannot verify.
5. **Em-dash (`—`) and en-dash (`–`) are P0-banned in all display copy** (headlines, labels, buttons, captions, nav) and P1-avoided in long-form body. Hyphen `-` for ranges and compounds.
6. **Reduced motion** honored when MOTION is above CRISP. No scroll-jacking without keyboard + touch alternatives. Marquees must pause on hover/focus.
7. **Keyboard and screen-reader parity** for every custom widget; visible focus state; 44px/48px touch targets on mobile.
8. **No `window.addEventListener('scroll')`**, no scroll-driven React state. Animate `transform`/`opacity` only.
9. **Dependencies verified** against package.json before import; install commands output first.
10. **Locale correctness**: fonts cover the brief's scripts (no Latin-only font on Arabic/CJK), logical properties for RTL, Intl for numbers/dates, expansion headroom on all fixed-size labels.
11. **Semantic web structure**: single `h1`, landmark regions, alt text on every image.
12. **Mobile collapse is explicit**: every multi-column layout declares its < 768px fallback; every mobile screen respects safe areas.

---

## 9. OUT OF SCOPE (say so and point elsewhere)

Realtime collaborative editing internals, 3D game UIs, print typesetting, email-client HTML (tables + inline CSS, has its own rulebook). Everything else, including dashboards and data-heavy product UI excluded by older anti-slop skills, is in scope via the domain files.
