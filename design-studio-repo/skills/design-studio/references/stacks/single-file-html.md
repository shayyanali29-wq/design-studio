# Stack: Single-File HTML (M2)

For chat canvases, artifacts, non-technical users, quick demos. One .html file, zero build.

## Structure
- `<style>` block: CSS custom properties token block first (`:root { --accent: ... }`), `[data-theme="dark"]` or media-query overrides second, utilities last
- `<script>` at body end, vanilla JS; defer heavy work; no module bare-imports (breaks file://)
- Mobile-first CSS: base styles for < 768px, `min-width` media queries upward

## Libraries via CDN (sparingly)
- Zero dependencies preferred. If motion needed beyond CSS: ONE CDN script (e.g. GSAP) with SRI/hash where the CDN provides it
- Fonts via font CDN `<link>` acceptable here (no bundler exists); always include system fallbacks: `font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif` and script-specific fallbacks for non-Latin (see i18n.md)
- Tailwind Play CDN: allowed for demos ONLY; add a comment "dev-only, compile for production"

## Must-haves (P0/P1)
- Runs on double-click (file://): no fetch() of local JSON, no ES modules from bare specifiers, no absolute /paths
- All token values as CSS vars (theming works); dark mode via `prefers-color-scheme` + optional toggle storing to localStorage
- `min-height: 100dvh` hero rules, logical properties for RTL, reduced-motion media query
- Meta + OG tags included (seo.md); single h1; landmarks
- Images: generated/embedded data-URI for tiny assets, or labeled slots (no hotlink-roulette)

## Mobile-app mockups in M2
- Device frame: 390x844 (or 360x800) rounded box with notch/home-indicator hint; screens scrollable inside
- Show 1-3 key screens side by side; safe-area padding visible; tab bars fixed to frame bottom
