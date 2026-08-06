# Example Pair: Feature Section

Violations targeted: 3-equal-cards tell, eyebrow inflation, hairline-every-row, duplicate CTAs.

---

## BAD

```tsx
<span className="text-[11px] uppercase tracking-[0.2em]">002 — Capabilities</span>
<h2>Everything you need — and more</h2>
<div className="grid md:grid-cols-3 gap-6">
  {features.map(f => (
    <div className="rounded-2xl border bg-white/5 backdrop-blur p-8 text-center">
      <div className="w-10 h-10 mx-auto rounded-full bg-purple-500/20" />
      <h3 className="mt-4 font-semibold">{f.title}</h3>
      <p className="text-sm text-gray-400">{f.desc}</p>
      <a className="text-purple-300 text-sm mt-3 block" href="#">Learn more →</a>
    </div>
  ))}
</div>
```

Three identical cards, centered, icon-dots-in-tinted-circles, numbered eyebrow with em-dash,
vague heading, "Learn more" x3 (duplicate CTA intent), glass on all.

---

## GOOD (layout family: 2-col split with code visual)

```tsx
<section className="mx-auto max-w-[1200px] px-6 py-20">
  <h2 className="max-w-[20ch] text-3xl md:text-5xl font-semibold tracking-tight">
    Built for the whole review loop.
  </h2>
  <div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-12">
    <figure className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <img src="/assets/feature-summary.webp" alt="AI-generated PR summary highlighting the risky diff"
           width="1200" height="900" loading="lazy" />
      <figcaption className="p-6">
        <h3 className="font-semibold">Summaries that read the diff</h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">Every pull request opens with a plain-English brief and a risk flag.</p>
      </figcaption>
    </figure>
    <figure className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden md:mt-16">
      <img src="/assets/feature-comments.webp" alt="Draft review comments attached to specific lines"
           width="1200" height="900" loading="lazy" />
      <figcaption className="p-6">
        <h3 className="font-semibold">Comments drafted, you decide</h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">Accept, edit, or dismiss. Nothing posts without your review.</p>
      </figcaption>
    </figure>
  </div>
</section>
```

Why it wins: no eyebrow (budget spent on hero), concrete functional headline, staggered vertical
offset (CRISP variance move #1), real imagery per imagery.md, one story per figure, no CTA spam,
remembers the second zigzag break rule (next section must be a different family).
