# Changelog

All notable changes to Design Studio are documented here.
Format follows Keep a Changelog; this project adheres to SemVer.

## [1.0.0] - 2026-08-06

Initial public release. Design Studio is the result of a full teardown and rebuild of the
anti-slop frontend skill pattern (see README acknowledgements).

### Added
- Core skill (`skills/design-studio/SKILL.md`, 215 lines): 8-step operating loop, one-line
  Design Read, five named dial levels (CALM / CRISP / BALANCED / BOLD / WILD), token-first build
  order, mandatory verification loop, P0/P1/P2 severity tiers.
- Domains (5): marketing, product UI (dashboards/data/forms), editorial, commerce, mobile apps.
- Rulebooks (10): typography, color/layout, severity-tiered tells, positive copywriting
  framework, imagery pipeline with generation prompt templates, motion, accessibility,
  internationalization/RTL, SEO/metadata, plus design-system honesty table.
- Output modes M1-M5: repo app, single-file HTML, component-only, audit/redesign, mobile screens.
- Stack adapters (6): react-next, single-file-html, astro-vue-svelte, wordpress, react-native,
  flutter.
- Golden examples (4): hero, feature section, mobile RTL screen, checkout form. Slop-vs-taste
  pairs with violation callouts.
- Golden blocks (2): hero-asymmetric-split, feature-bento-rhythm, each with schema frontmatter,
  contract, implementation, mobile/RTL fallbacks, anti-patterns.
- `scripts/design-lint.mjs`: zero-dependency Node linter mechanically enforcing em/en-dash bans,
  h-screen, scroll listeners, dead/uncontrolled image hosts, missing alt text, font CDN links,
  icon policy, eyebrow budget (ceil(sections/3)), marquee caps, hairline-every-row, multiple h1,
  three-equal-cards heuristic, pure-color and z-index abuse. Exit code 1 on P0.
- `TASTE.template.md`: project memory for locked tokens, voice, dial levels, and rotation history.
- Eval harness: 12 regression briefs across domains/locales (Urdu SMB, RTL commerce, gov portal,
  single-file bilingual portfolio, WordPress) + 100-point judge rubric with regression bands.
- Claude Code marketplace + plugin manifests.

### Changed vs. the taste-skill pattern (for users migrating)
- Numeric 1-10 dials -> five named levels (legacy numbers accepted as aliases).
- Default dials lowered from variance-high baseline to CRISP/CRISP/BALANCED, ending the
  "everything asymmetric" house style.
- Dual-mode dark/light dogma -> brand-driven theming with test-both requirement.
- Em-dash rule tiered: P0 in display copy, P1 in long-form body.
- Placeholder image guidance: content-uncontrolled photo URLs removed from the recommended chain.
- Block/vocabulary gap: vocabulary entries now ship with implementations iteratively via blocks/.
