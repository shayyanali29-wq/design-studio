# Stack: Astro / Vue / Svelte

## Astro (content sites, marketing default pick)
- Islands: static HTML by default, hydrate ONLY interactive islands (`client:visible` for below-fold)
- Content collections for editorial/commerce catalogs; image via `astro:assets`
- Perfect fit for DENSITY ≤ BALANCED marketing + editorial; keep JS near zero, it wins CWV for free

## Vue (3, Composition API)
- Nuxt for apps (SSR, route rules); Pinia for shared state; transition components for CRISP-BALANCED motion; GSAP via directives/plugins for BOLD
- `<script setup>` SFCs; scoped styles or Tailwind; tokens as CSS vars on `:root`

## Svelte / SvelteKit
- Built-in `transition:`/`animate:` (flip) cover CRISP-BALANCED without a lib; spring/tweened from `svelte/motion` for physics
- Stores for shared state; form actions for P0-grade form behavior (progressive enhancement = free a11y/resilience)

## All three
- Tailwind works across; icon libs have wrappers (phosphor-svelte, vue tabler, etc.): one family
- i18n: sveltekit-i18n / @nuxtjs/i18n / astro-i18n routing; respect `dir` per locale
- Same P0 list applies: 100dvh, logical properties, no scroll listeners when the framework gives you observers/actions
