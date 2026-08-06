# Output Modes

Detect from environment; if undetectable, spend your ONE question here, not on style.

## M1: Repo application
Signals: package.json, existing src/, framework config.
- Match the stack actually present (package.json is truth, not assumptions)
- React/Next specifics: `references/stacks/react-next.md`
- Astro/Vue/Svelte: `references/stacks/astro-vue-svelte.md`
- Verify every dependency before import; output install commands first

## M2: Single-file HTML
Signals: chat canvas/artifact context, "give me one file", no repo, non-technical user.
- ONE self-contained .html file. All CSS in `<style>`, all JS in `<script>`, zero build step.
- Web fonts via `@font-face`/font CDN `<link>` acceptable here (M2 has no bundler); still prefer system-stack fallbacks. Do not hotlink random assets.
- CDN libraries allowed sparingly (one animation lib max). Note in a comment that CDN Tailwind is dev-only.
- Must run by double-click. Test mentally for file:// quirks (no fetch of local JSON, no module imports from bare specifiers).
- For mobile-app mockups in M2: render screens inside simple device frames at 390x844 (iPhone) or 360x800 (Android) CSS boxes.
- The `render` step of the verify loop matters most here: state how the user previews (open file in browser).

## M3: Component / section only
Signals: "just the hero", "a pricing section", "redesign this nav".
- Deliver the component plus the token block it depends on. Nothing more.
- Match surrounding tokens if the project provides them (read TASTE.md / existing CSS first).

## M4: Audit / redesign
Signals: existing URL, repo, screenshots to improve.
- Phase 1, audit BEFORE changing anything:
  - brand tokens (colors, type, radii), information architecture, content inventory
  - SEO baseline (slugs, titles, structured data, ranking pages)
  - patterns to preserve (signature interactions, copy voice, a11y wins, analytics hooks)
  - dial reading of the current site (this is your baseline, not the default dials)
  - mechanical pass: run scripts/design-lint.mjs on the existing code
- Phase 2, classify: Preserve (modernize within brand) / Overhaul (new visual language, same content + IA) / Greenfield (brand itself changing).
- Phase 3, modernize in priority order, stop when the brief is satisfied:
  1. typography refresh  2. spacing/rhythm  3. color recalibration  4. motion layer  5. hero/key-section recomposition  6. full block replacement (last resort)
- Never change silently: URL slugs, nav labels, form field names/order, legal copy, analytics ids.

## M5: Mobile screens
Signals: "app", screen flow, iOS/Android, RN/Flutter repo.
- Load `references/domains/mobile-apps.md` (mandatory) + the stack file.
- Design at: iPhone 390x844pt (@3x assets), Android 360x800dp. Always show safe areas.
- Deliver screen-by-screen, with states (loading/empty/error) per screen, and a compact flow map (screen list + transitions).
