# Rules: Motion

Motion communicates or it gets cut. Four valid motives: hierarchy, storytelling, feedback, state transition.
"It looked cool" is not a motive. If you cannot say the motive in one sentence, delete the animation.

## Library discipline
- Web React: Motion (`motion/react`) default for UI/state; GSAP + ScrollTrigger for pinned scrolltelling only
- Three.js/WebGL: canvas moments only, lazy-loaded, isolated
- Single-file M2: CSS first; one CDN lib max if needed
- React Native: Reanimated (worklets), springs default. Flutter: implicit animations first, Rive for illustration
- Two animation DRIVERS never manipulate the same element/tree (GSAP vs Motion on one node = fights). Reading a reduced-motion hook from a lib inside another lib's component is fine; driving is not.

## Hard bans (P0)
- `window.addEventListener('scroll')`, `window.scrollY` in render state, rAF loops touching component state
- Animating layout properties (top/left/width/height); only transform + opacity
- Scroll-hijack without keyboard + touch alternative and a skip path
- Infinite loops on informational sections (loops only for genuinely live status)
- Grain/noise filters on scrolling containers (fixed, pointer-events-none pseudo-element only)

## Reduced motion (P0 above CRISP)
- `prefers-reduced-motion`: collapse reveals to instant, unpin pin-sections, stop marquees and hijacks
- Motion: `useReducedMotion()`. CSS: gate behind `@media (prefers-reduced-motion: no-preference)`

## Canonical skeletons (adapt, do not cargo-cult)

### Reveal on scroll (default move, BALANCED)
Use Motion `whileInView`, `viewport={{ once: true, amount: 0.3 }}`, duration 0.5-0.7s, ease `[0.16,1,0.3,1]`, 40-60ms stagger. For lists/stats/cards. Cheapest, safest, most useful.

### Sticky card stack (BOLD, when the story is sequential)
GSAP: pin each card except last at `start: "top top"`, scale/opacity of card i driven by card i+1's trigger, `end: "top top"`, scrub true, cleanup via `gsap.context(() => {...}).revert()`. Failure to avoid: triggers at "top center" causing half-scrolled states. Always `start: "top top"`.

### Horizontal pan (BOLD, images/galleries ONLY)
Pin wrapper, translate inner track `x: -(scrollWidth - innerWidth)`, `end: () => "+=" + distance`, scrub 1. Provide: keyboard arrows, touch swipe passthrough, visible progress, and a "skip section" anchor. Mobile: prefer native horizontal snap-scroll over hijack.

### Marquee (≤ 1 per page)
CSS keyframes on transform, duplicated content for seamless loop, `animation-play-state: paused` on `:hover` and `:focus-within`, `aria-hidden` on the duplicate copy (screen readers read it once).

### Magnetic/physics hover (BOLD+, desktop only)
Motion values + springs, never re-render loops; disable on touch (`matchMedia('(hover: none)')`).

## Duration/easing defaults
Micro 150-250ms, UI state 200-300ms, reveals 500-700ms, page transitions 250-350ms. Spring `stiffness 100, damping 20`. No linear easing except progress indicators.
