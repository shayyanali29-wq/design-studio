# Design Studio

*The universal anti-slop UI skill for AI agents. Design any website or mobile app, in any language.*

[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Agent Skills compatible](https://img.shields.io/badge/agent--skills-compatible-blue)](https://github.com/vercel-labs/agent-skills)

**Design Studio** (`universal-design-studio`) is a portable Agent Skill that upgrades everything an
AI builds: landing pages, dashboards, e-commerce, blogs, portfolios, WordPress sites, and mobile
app screens. It reads the brief, declares a Design Read, sets five-level design dials
(CALM / CRISP / BALANCED / BOLD / WILD), builds token-first, then **proves its own work** with a
mechanical lint pass and a render-and-inspect loop before shipping.

Born from a deep, published teardown of the excellent `taste-skill` project: it keeps the
production-tested anti-slop rules and brief inference that made that skill great, and fixes its
three structural gaps: **no verification, ban-lists without golden examples, and one overloaded
single file.**

## Why it ships better UI

| Common AI-skill problem | Design Studio |
|---|---|
| 150+ rules, agent self-reports compliance | Tiered P0/P1/P2 rules + `design-lint.mjs` mechanical enforcement |
| Agent never sees its own output | Mandatory render-and-screenshot verify loop with evidence in the final message |
| Only bans, no examples of "great" | Golden before/after pairs + drop-in blocks |
| 800-line single file | 215-line core, progressive-disclosure references |
| "1-10" dials models can't execute | Five named levels with behavior tables, caps, and presets |
| Landing pages only | 5 domains: marketing, product UI (dashboards), editorial, commerce, mobile apps |
| English/Latin assumed | First-class i18n: RTL (Arabic, Urdu, Hebrew, Persian), CJK, Indic scripts, Intl APIs |
| React/Next assumed | Single-file HTML, Astro/Vue/Svelte, WordPress, React Native, Flutter adapters |
| Cross-project rules that can't execute | `TASTE.md` project memory makes rotation/consistency rules real |
| No way to measure quality | Eval harness: 12 regression briefs + 100-point judge rubric |

## Install

```bash
# Agent-skills CLI (scans skills/ folder)
npx skills add https://github.com/shayyanali29-wq/design-studio

# Install just this skill by name
npx skills add https://github.com/shayyanali29-wq/design-studio --skill "universal-design-studio"
```

Or copy `skills/design-studio/SKILL.md` into your project's skill context, or paste it into any
assistant's instructions.

## Quick start

1. Drop `skills/design-studio/` into your agent's skills directory (or install as above).
2. Ask for a design: *"Landing page for a bakery in Multan, Urdu + English, WhatsApp ordering."*
3. The agent declares a Design Read, sets dials, builds, then runs:

```bash
node skills/design-studio/scripts/design-lint.mjs <output files>
```

4. It renders, inspects, fixes, and ships with the evidence in the final message.

## Repository layout

```
skills/design-studio/        the skill (this is what installs)
  SKILL.md                   core operating loop (215 lines)
  references/                on-demand rulebooks: domains, rules, stacks, design systems
  examples/                  contrastive slop-vs-taste pairs
  blocks/                    golden drop-in blocks
  scripts/design-lint.mjs    zero-dependency mechanical linter (Node 18+)
  evals/                     12 regression briefs + judge rubric
  TASTE.template.md          project memory template
.claude-plugin/              Claude Code marketplace + plugin manifests
CHANGELOG.md                 release history
CONTRIBUTING.md              how to add blocks, examples, rules
LICENSE                      MIT
llms.txt                     machine-readable index
```

## Compatibility

Claude Code, Codex, Cursor, Gemini CLI (any agent that reads SKILL.md / AGENTS.md-style
instructions), plus plain paste-in for ChatGPT/Claude web. Stacks supported out of the box:
Next.js/React, Astro, Vue, Svelte, single-file HTML, WordPress (block patterns + theme.json),
React Native, Flutter.

## Acknowledgements

The anti-slop tell taxonomy evolves ideas first popularized by
[taste-skill](https://github.com/leonxlnx/taste-skill) (MIT). Design Studio restructures and
extends them with verification, examples, mobile, and internationalization.

## License

MIT. See [LICENSE](LICENSE).
