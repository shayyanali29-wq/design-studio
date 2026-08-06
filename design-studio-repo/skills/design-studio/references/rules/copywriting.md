# Rules: Copywriting (the POSITIVE framework)

Taste is ~1/3 copy. Bans alone do not write good headlines. This file does.

## 1. Choose the voice first (one per project, record in TASTE.md)
| Voice | Sounds like | For |
|---|---|---|
| Clear-confident | Linear, Stripe docs | B2B SaaS, devtools, fintech |
| Warm-plain | a good local shop owner | SMB, clinics, community, food |
| Premium-quiet | Aesop, Arc'teryx | luxury, wellness, design goods |
| Playful-direct | Duolingo-ish (dosed) | consumer apps, kids, social |
| Formal-trust | gov services, clinics | public sector, legal, medical |
| Technical-precise | manuals that respect you | devtools, infra, engineering |

Rules: one register per page. No mixing marketing-punch, editorial prose, and engineer-mono unless the brand voice explicitly calls for it.

## 2. Headline patterns (pick ONE move per headline)
1. **Outcome**: "Ship fraud checks in an afternoon." (verb + outcome + qualifier)
2. **Time/friction delta**: "Payroll in 4 minutes, not 4 days."
3. **Contrarian**: "Your to-do app has too many features."
4. **Specificity**: "Uptime for 40,000 stores on 3 continents."
5. **Question** (sparingly): "What if your CRM wrote the follow-up?"
6. **Literal** (trust briefs): "Apply for a residence permit." No cleverness where people are anxious.

Never: clever-pun slop, hollow abstraction ("Rethink everything"), or stacking two moves in one line. Headline length: marketing ≤ 8 words; product UI titles ≤ 5.

## 3. Subtext formula (the 20-word block)
**Value + differentiator + proof, one breath.**
> "[What you get] [why it is different], [why believe it]."
- "One workspace for specs, tasks, and docs, so engineering and design stop drifting. Free for teams up to 10."
If the value cannot be said in 20 words, the positioning is unclear. Fix positioning, not the word cap. High-stakes consideration: allow up to 35 words + deeper sections below.

## 4. CTA system
- One label per intent across the whole page/app (contact intent: "Talk to us" everywhere, not five synonyms)
- Verb-first, concrete: "Start free trial", "Book a call", "See pricing", "Get the app"
- Primary CTA ≤ 3 words. Button text title case OR sentence case, consistent per project
- Secondary CTAs are quiet (ghost/link style), never competing volume
- Destructive CTAs name the damage: "Delete project", not "Confirm"

## 5. Proof & trust language
- Numbers only when real or labeled mock. Rounded real numbers beat fake precision.
- Testimonial formula: specific problem + specific change + name/role/org. 3 lines max.
- Logo walls: real marks only; heading optional ("Trusted by teams at" is fine; "Quietly in use at" is not).
- Guarantees and policies in plain sentences near the CTA, not buried.

## 6. Microcopy that ships quality
- Forms: labels are nouns ("Work email"), helpers answer "why/format", errors say what happened + how to fix ("Enter a valid email, like name@studio.com")
- Empty states: what goes here + how to add it + one action button
- 404/error pages: what happened, one way back, no jokes on payment flows
- Loading: skeletons shaped like the destination; spinners only for short indeterminate waits

## 7. Multilingual copy (works with i18n.md)
- Write the source copy expansion-aware: CTA labels survive +40% length (German, Urdu formal registers)
- Idioms and puns do not travel; keep headlines literal when localization is planned
- CTAs in RTL languages stay verb-first and short; never force emoji to carry meaning across cultures
- Numbers, dates, currencies via Intl APIs, never string-concatenated
- Name people and brands in sample data locale-appropriately (no "John Doe" in a Karachi bakery demo: use "Ayesha Khan", "Noor Bakery")

## 8. Ship-check (self-audit before verify loop)
Read every visible string aloud in your head. Fix anything grammatically broken, unclear in referent, cute-but-wrong, or trying-too-hard. Plain and true beats clever and hollow.
