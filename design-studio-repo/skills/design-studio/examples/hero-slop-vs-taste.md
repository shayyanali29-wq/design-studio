# Example Pair: SaaS Landing Hero

Design Read: B2B SaaS landing for technical buyers, Linear-clean voice, CRISP/CRISP/BALANCED.

---

## BAD (composite of real AI defaults — do not ship)

```tsx
<section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
  <span className="text-xs uppercase tracking-[0.2em] text-purple-300">v2.0 — Now in Beta</span>
  <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
    Elevate Your Workflow — Seamlessly.
  </h1>
  <p className="text-gray-300 max-w-xl">
    Our next-gen revolutionary platform empowers teams to unleash productivity
    with seamless integrations and cutting-edge AI — trusted by 92.4% of users.
  </p>
  <div className="flex gap-4">
    <button className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-lg">Get Started Free</button>
    <button className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-lg">Learn More</button>
  </div>
  <span className="text-xs text-gray-500 animate-bounce mt-10">↓ Scroll to explore</span>
</section>
```

Violations: h-screen, purple-gradient glow, gradient text, em-dashes x3, version-label eyebrow,
filler verbs (Elevate/Seamless/unleash/next-gen), fake-precise 92.4%, two identical equal-weight
CTAs, scroll cue, subtext > 20 words, centered-by-default at CRISP variance, glass on everything.

---

## GOOD (passes P0 list)

```tsx
<section className="min-h-[100dvh] flex items-center">
  <div className="mx-auto max-w-[1200px] px-6 pt-16 grid md:grid-cols-12 gap-10 items-center">
    <div className="md:col-span-7">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-50">
        Review pull requests in half the time.
      </h1>
      <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Diffly summarizes every diff, flags risk, and drafts comments. Free for teams up to 5.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <a className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white
                      transition hover:bg-emerald-700 active:scale-[0.98]
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
           href="/signup">Start free trial</a>
        <a className="font-medium text-zinc-900 underline underline-offset-4 hover:text-emerald-700 dark:text-zinc-100"
           href="/demo">Watch the 2-min demo</a>
      </div>
    </div>
    <div className="md:col-span-5">
      {/* Generated per imagery.md: product render on zinc-tinted backdrop, 4:3 */}
      <img src="/assets/hero-diffly.webp" alt="Diffly reviewing a pull request with AI-suggested comments"
           width="1200" height="900" className="rounded-2xl shadow-xl shadow-zinc-900/10" loading="eager" fetchpriority="high" />
    </div>
  </div>
</section>
```

Why it wins: outcome-led headline (8 words), value+differentiator+proof subtext (16 words), one
accent locked (emerald), one radius system, primary vs quiet-secondary CTA hierarchy, real image
with alt + dimensions (CLS), off-pure surfaces, no tells, tokens via Tailwind theme.
