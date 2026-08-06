# Stack: React / Next.js

- Default: Next.js App Router, Server Components for layout, client islands for interactivity.
  Any component using Motion, listeners, or pointer physics is an isolated leaf with `"use client"`.
- Styling: Tailwind v4 (`@tailwindcss/postcss` or Vite plugin; NOT the v3 `tailwindcss` postcss plugin). Tokens via `@theme` CSS-first config.
- Fonts: `next/font` (self-host, subset, `display: swap`). Never CDN `<link>` in production.
- Motion: `motion/react`. GSAP isolated in dedicated leaves with `gsap.context` + `ctx.revert()` cleanup.
- Icons: one library per app (Phosphor / Tabler / HugeIcons / Radix). `strokeWidth` standardized. Lucide only if project already depends on it.
- State: local first; `useMotionValue`/`useTransform` for continuous values (never useState for pointer/scroll).
- Images: `next/image` with sizes + priority on hero.
- i18n: `next-intl` or framework routing per locale; `dir` set per locale root layout.
- Dependencies: check package.json BEFORE importing; output install command first if missing.
