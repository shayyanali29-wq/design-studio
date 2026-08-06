# Design Studio (universal-design-studio)

**Design any website or mobile app UI, in any language, without the generic AI look.**

A portable Agent Skill: one lean `SKILL.md` core plus progressive-disclosure references, worked
examples, golden blocks, a mechanical lint script, project memory, and an eval harness.

Born from a deep teardown of the excellent public `taste-skill` project. It keeps what made that
skill great (brief inference, production-tested anti-slop tells, redesign discipline) and rebuilds
the rest around three fixes: **verification instead of trust, positive craft instead of ban-lists
only, and progressive disclosure instead of one giant file.**

## What is different

| Problem in skills like v2 taste-skill | Design Studio's answer |
|---|---|
| ~165 rules, ~65 checkboxes, self-reported compliance | Tiered rules (P0/P1/P2) + `design-lint.mjs` mechanical enforcement |
| No feedback loop: agent never sees its output | Mandatory lint + render-and-screenshot verify loop |
| Ban-lists only, zero golden examples | `examples/` before/after pairs + `blocks/` golden implementations |
| 800-line single file, "lost in the middle" | ~150-line core; load only what the brief needs |
| False-precision 1-10 dials | Five named levels: CALM / CRISP / BALANCED / BOLD / WILD |
| Landing pages only | Domains: marketing, product UI, editorial, commerce, mobile apps |
| English-only, Latin-only fonts | First-class i18n: RTL, CJK, Arabic, Urdu, Indic scripts, Intl APIs |
| React/Next assumed | Stack modes: single-file HTML, React/Next, Astro/Vue/Svelte, WordPress, React Native, Flutter |
| Cross-project memory rules that cannot execute | `TASTE.md` project memory file makes rotation rules real |

## Install

```bash
# Agent-skills compatible install
npx skills add <this-repo-url>

# or copy the folder into your project's skills directory,
# or paste SKILL.md content into your assistant's instructions.
```

## The operating loop

```
INFER brief -> DECLARE Design Read -> SET dials -> LOAD references ->
BUILD token-first -> VERIFY (design-lint + render loop) -> SHIP with evidence -> update TASTE.md
```

## Layout

```
SKILL.md                  core skill (read first, always)
references/               on-demand rulebooks, domains, stacks
examples/                 contrastive before/after pairs
blocks/                   golden drop-in blocks (schema on each file)
scripts/design-lint.mjs   zero-dependency Node linter for AI-tell patterns
TASTE.template.md         project memory template
evals/                    briefs + rubric for regression testing
```

## Lint

```bash
node scripts/design-lint.mjs src/**/*.tsx public/index.html
```

Checks mechanically: em/en-dashes, `h-screen`, scroll listeners, dead image hosts,
Google-Fonts links, eyebrow-ratio, marquee counts, hairline-every-row, multiple `h1`,
missing `alt`, z-index spam, and more. Exit code 1 on P0 findings.

## License

MIT.
