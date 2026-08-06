# Contributing to Design Studio

Thanks for helping make AI-built interfaces better. Ground rules first:

1. **Every rule needs a severity tier** (P0 broken-work / P1 fix-or-justify / P2 polish) and,
   where possible, a **mechanical check** in `scripts/design-lint.mjs`. Prose-only rules decay;
   checked rules survive.
2. **Claims must be real.** No invented design systems, no "official" packages that do not exist,
   no image hosts whose content cannot be controlled. Label approximations as approximations.
3. **Examples beat prose.** A rule that ships without a before/after pair in `examples/` will
   usually not be obeyed.
4. **Keep the core lean.** SKILL.md stays under ~250 lines. Depth lives in `references/` and is
   loaded on demand.

## Adding a rule
- Pick the correct file under `references/rules/`.
- Tag severity, give the fix, add the mechanical check to design-lint.mjs if countable
  (include a test fixture line in your PR description showing it firing).

## Adding a block (`blocks/`)
- One block per file, using the frontmatter schema from the existing blocks:
  name, category, dial_compatibility, when_to_use, not_for, stack.
- Required body: sketch, contract, implementation, mobile fallback, RTL notes, anti-patterns.
- Must pass design-lint with zero P0.

## Adding an example pair (`examples/`)
- Format: Design Read header, BAD (with violation callouts), GOOD (with why-it-wins notes).
- Base BAD on patterns you have actually seen models produce.

## Adding an eval brief (`evals/briefs.json`)
- Cover a domain/locale combination not already present; define `expect.must` as checkable items.
- Run the rubric (evals/rubric.md) before claiming a quality improvement; attach scores for
  model + skill version.

## PR checklist
- [ ] design-lint runs clean on examples/blocks you touched (`node skills/design-studio/scripts/design-lint.mjs ...`)
- [ ] Severity tiers assigned; no priority inflation
- [ ] No em-dashes anywhere (yes, we eat our own cooking)
- [ ] README/CHANGELOG updated if user-facing
- [ ] Locale/RTL impact considered for any layout or typography change

## Reporting quality regressions
Open an issue with: model + version, skill version, the brief, the output (or screenshots), and
the rubric letter(s) hurt. Compare with-and-without-skill runs when possible.
