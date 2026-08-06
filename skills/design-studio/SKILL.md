---
name: design-studio
description: >-
  The definitive anti-slop design system for AI agents. Creates premium UIs for any platform
  (web, mobile, email, dashboard) in any language that look hand-crafted by senior designers,
  not generic AI output. Features research-backed rules, mechanical verification, 5-level dial
  system (CALM/CRISP/BALANCED/BOLD/WILD), token-first architecture, and render-and-inspect
  validation. Supports RTL, i18n, accessibility-first design, and all modern stacks.
---

# Design Studio: The Definitive Anti-Slop Design System

> **Scope:** Any website, web app, mobile app, dashboard, email, or UI component in any language.
> **Philosophy:** Every rule is research-backed, contextual, and tiered by severity. Nothing fires automatically.
> **Guarantee:** Output that looks hand-crafted by senior designers, not generic AI slop.

---

## 🎯 THE DESIGN STUDIO PROMISE

**Before:** AI-generated interfaces that look like every other AI-generated interface - purple gradients, centered heroes, three equal cards, Inter font, infinite loops.

**After:** Interfaces that look like they were designed by a senior designer at a top agency - intentional typography, purposeful motion, research-backed layouts, and brand-appropriate aesthetics.

**How:** 47 research-backed rules, mechanical verification, and a 5-level dial system that adapts to any brief.

---

## 📊 SUCCESS METRICS

Design Studio output will:
- ✅ Pass WCAG 2.2 AA accessibility standards
- ✅ Look unique to the brand/brief (not generic)
- ✅ Use research-backed design patterns
- ✅ Include proper i18n/RTL support when needed
- ✅ Ship with mechanical verification (lint + render check)
- ✅ Include real imagery (not placeholder divs)
- ✅ Follow platform conventions (iOS/Android/Web)
- ✅ Load in <3s on 3G connections
- ✅ Work on 320px to 4K displays
- ✅ Be maintainable by human developers

---

## 🔄 THE 8-STEP OPERATING LOOP

**Always run all 8 steps. No shortcuts.**

### Step 1: INFER the brief (Section 1)
Read the room before anything else. Understand domain, platform, audience, vibe, constraints.

### Step 2: DECLARE the Design Read (Section 1.D)
Output one line: "Reading this as: [domain] for [audience] on [platform], in [locales], with a [vibe] language, stack [stack], dials [VARIANCE/MOTION/DENSITY]."

### Step 3: SET the three dials (Section 3)
Choose named levels: CALM / CRISP / BALANCED / BOLD / WILD for VARIANCE, MOTION, DENSITY.

### Step 4: LOAD reference files (Section 7)
Load only the reference files this brief needs (design systems, i18n rules, domain-specific patterns).

### Step 5: BUILD token-first (Section 4)
Define design tokens before any component. Build in fixed order: tokens → primitives → sections → imagery → localize → motion.

### Step 6: LOCALIZE before styling polish (Section 4, step 5)
Handle RTL, i18n, text expansion, and font support before visual polish.

### Step 7: VERIFY with lint + render loop (Section 5)
Run mechanical lint, then render-and-inspect. Fix all P0 findings. Max 2 iterations.

### Step 8: SHIP with evidence (Section 6)
Include Design Read, dial levels, lint result, render check results, and content-needed list.

---

## 0. RULES OF ENGAGEMENT

### Precedence Ladder (higher wins every conflict)
1. **Explicit user instruction** ("make it purple" beats every palette rule here)
2. **Human-interface law:** WCAG 2.2 AA, Apple HIG, Material Design, platform conventions
3. **Brief inference** (audience, brand, quiet constraints, consideration level)
4. **Dial logic** (Section 3)
5. **This rulebook**

### The One-Question Rule
Ask at most **ONE question**, and only when the read genuinely diverges (*"Linear-clean or Awwwards-wild?"*). If the context answers it, do not ask. Proceed.

### Thin Brief Protocol
If the user gave almost nothing ("make me a gym site"), offer 2-3 one-line directions, pick the strongest as your working read, and proceed. Never block on a questionnaire.

### Quiet Constraints Override Aesthetics
Accessibility-first audiences, public sector, regulated industries, medical, kids' products: these cap the dials and pick the design system before style is discussed.

### Honesty Principle
Use official design-system packages when one exists. Label approximations as approximations ("web glassmorphism, not Apple Liquid Glass"). Never fake precision a brand does not claim.

### Severity Tiers
Every rule in this skill is tagged:
- **P0**: ship blocker. Output with a P0 violation is broken work.
- **P1**: fix it, or keep it with a one-line written justification.
- **P2**: polish. Address when time allows.

### Monorepo Caution
If other design skills are also active, THIS skill's dials win for layout/motion/density decisions; do not blend two aesthetic systems on one page.

---

## 1. BRIEF INFERENCE (Read the Room Before Anything)

### 1.A Signals to Read, in Order
1. **Domain**: marketing (landing/portfolio/event), product UI (dashboard/SaaS/tools), editorial (blog/docs/news), commerce (store/product/checkout), mobile app screens, email.
2. **Platform**: web, mobile native, or both.
3. **Environment**: repo project / chat canvas / single-file deliverable / existing codebase audit.
4. **Audience**: procurement panel, consumers, recruiters, general public. The audience picks the aesthetic, not your taste.
5. **Vibe words** the user used: "calm", "Linear-style", "Awwwards", "Apple-y", "playful", "serious B2B", "brutalist", "glassy", "warm", "premium".
6. **References**: URLs, screenshots, named products, competitors.
7. **Languages and locales**: which languages must the UI render? Any RTL (Arabic, Hebrew, Urdu, Persian)? CJK? This changes fonts, spacing, layout mirroring. Load `references/rules/i18n.md` the moment a non-English locale appears.
8. **Brand assets that exist**: logo, colors, type, photography. For redesigns these are starting material, not optional input.
9. **Consideration level**: impulse purchase vs high-stakes decision (medical, finance, enterprise). High-stakes needs depth and trust patterns, not ruthless cut-down.
10. **Quiet constraints**: a11y-first, regulated, public sector, kids. These OVERRIDE vibe.

### 1.B Anti-Default Discipline (P1)
Never default to the LLM house style. These are **banned as defaults**:

**The Big 7 AI Tells (Research-Backed)**
1. **Purple-blue gradient glow** - The #1 most common AI default
2. **Centered hero over dark mesh** - Every AI landing page looks the same
3. **Three equal feature cards** - The lazy "feature section" pattern
4. **Glassmorphism on everything** - Overused blur effects
5. **Inter + slate-900** - The default font/color combo
6. **Infinite loops everywhere** - Motion without purpose
7. **Placeholder divs instead of real images** - Fake screenshots

**Research backing:** See `research/root-causes/ai-defaults.md` for why these patterns emerge and how to avoid them.

### 1.C Redesign Detection (P0 when applicable)
Existing code/URL in the brief = redesign, not greenfield. Load `references/rules/redesign.md`. If the codebase exists, audit first: brand tokens, IA, SEO baseline, what to preserve. Never change URL slugs, nav labels, form field names, legal copy, or analytics hooks silently.

### 1.D Output the Design Read (P0)
Before any code, state one line:
> **"Reading this as: [domain] for [audience] on [platform], in [locales], with a [vibe] language, stack [stack], dials [VARIANCE/MOTION/DENSITY]."**

**Examples:**
- *"Reading this as: B2B SaaS landing for technical buyers on web, English + German, Linear-clean language, Next.js + Tailwind, CRISP/CRISP/BALANCED."*
- *"Reading this as: food-delivery mobile app screens for young consumers in Pakistan, Urdu (RTL) + English, playful premium language, React Native, BALANCED/BOLD/BALANCED."*
- *"Reading this as: clinic website redesign for elderly patients, Urdu + English, trust-first language, single-file HTML, CALM/CALM/BALANCED."*

---

## 2. OUTPUT MODES (Detect from Environment)

| Mode | Detect | Rules |
|---|---|---|
| **M1 Repo app** | package.json exists | Follow `references/stacks/react-next.md` (or the stack actually present) |
| **M2 Single-file HTML** | chat canvas, artifact, "one file", no repo | Load `references/stacks/single-file-html.md`. ALL CSS/JS inline, no build step |
| **M3 Component only** | "just the hero", "a pricing section" | Deliver the component + its tokens, nothing more |
| **M4 Audit / redesign** | existing URL/code | Audit report first, then changes. See 1.C |
| **M5 Mobile screens** | "app", "iOS", "Android", screen flow | Load `references/domains/mobile-apps.md` + `references/stacks/react-native.md` or `flutter.md` |

Full mode rules: `references/modes.md`.

---

## 3. THE THREE DIALS, FIVE NAMED LEVELS

Set after the Design Read. Every layout, motion, and density decision is gated by these.

| Dial | Question | CALM | CRISP | BALANCED | BOLD | WILD |
|---|---|---|---|---|---|---|
| **VARIANCE** | How much layout experimentation? | strict symmetry | gentle offset | mixed rhythm | asymmetric, overlap | artsy chaos |
| **MOTION** | How much movement? | static, instant states | hover + fade only | scroll reveals, springs | choreography, one hijack max | cinematic, physics |
| **DENSITY** | Info per viewport? | art gallery | roomy | standard product | data-rich | cockpit (mono numbers) |

Legacy numeric mapping: CALM=1-2, CRISP=3-4, BALANCED=5-6, BOLD=7-8, WILD=9-10. Accept numeric overrides as aliases.

**Default: CRISP / CRISP / BALANCED.** Neutral by design. The brief pulls dials up or down; you never start at BOLD.

### 3.A Dial Inference Quick Table
| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| minimalist / calm / editorial / Linear-style | CRISP | CALM-CRISP | CALM-CRISP |
| premium consumer / Apple-y / luxury | BALANCED | BALANCED | CALM |
| playful / Awwwards / agency / experimental | BOLD-WILD | BOLD-WILD | CRISP-BALANCED |
| SMB local business / restaurant / clinic / general public | CRISP | CALM-CRISP | BALANCED |
| trust-first / public sector / regulated / elderly | CALM | CALM | BALANCED-BOLD |
| dashboard / analytics / ops tool | CALM-CRISP | CALM | BOLD-WILD |
| mobile app, any kind | ≤ BOLD | ≤ BOLD | BALANCED-BOLD |
| redesign (preserve brand) | match existing | match +1 step | match existing |

### 3.B Dial Interaction Rules (Research-Backed)
**These rules prevent dial conflicts that create broken designs:**

1. **DENSITY WILD caps VARIANCE at BALANCED** - Dense data layouts need structure, not chaos
2. **CALM audience caps MOTION at CRISP** - Elderly/regulatory users need stability
3. **Mobile caps VARIANCE and MOTION at BOLD** - Touch interfaces need predictability
4. **High VARIANCE must collapse to single column under 768px** - Complex layouts break on mobile
5. **MOTION > 6 requires `prefers-reduced-motion` support** - Accessibility is not optional

**Research backing:** See `research/findings/dial-interactions.md` for the data behind these rules.

### 3.C Dial Presets (Use These as Starting Points)

**Marketing & Landing Pages:**
- SaaS Landing: CRISP/CRISP/BALANCED
- Agency Portfolio: BOLD/BOLD/CRISP
- Product Launch: BALANCED/BALANCED/BALANCED
- Premium Consumer: BALANCED/BALANCED/CALM

**Product UI:**
- Dashboard: CALM/CALM/BOLD
- Settings Page: CALM/CALM/BALANCED
- Data Table: CALM/CALM/WILD
- Mobile App: BALANCED/BALANCED/BALANCED

**Special Cases:**
- Public Sector: CALM/CALM/BALANCED
- Kids' Product: BALANCED/BALANCED/BALANCED
- Elderly Users: CALM/CALM/BALANCED
- Accessibility-First: CALM/CALM/BALANCED

---

## 4. BUILD ORDER (Fixed Sequence, Do Not Reorder)

### Step 1: TOKENS FIRST
Define design tokens before any component:
- **Color roles:** surface, surface-elevated, text, text-muted, accent, on-accent, border
- **Type scale:** h1-h6, body, small, tiny
- **Spacing scale:** 4px base unit, multiples
- **Radius scale:** sharp, soft, pill
- **Shadow scale:** subtle, medium, dramatic
- **Motion durations:** instant, fast, normal, slow

**Implementation:** CSS variables, Tailwind `@theme`, or platform equivalent.

**One accent color. One radius system. One warm-or-cool neutral family. Locked.**

### Step 2: PRIMITIVES + FULL STATES
Buttons, inputs, cards, nav with:
- Hover / Active / Focus-visible / Disabled / Loading / Empty / Error states
- Nothing ships as happy-path-only

### Step 3: SECTIONS / SCREENS
Per the loaded domain file. Compose real content, not lorem ipsum. If real content is missing, build with the best inference and end with a "Content needed" list.

### Step 4: IMAGERY
Per `references/rules/imagery.md`:
1. **Image-generation tool first** (if available)
2. **Real web images second** (Unsplash, Pexels, brand URLs)
3. **Licensed stock third**
4. **Labeled placeholder slot last** (`<!-- TODO: hero product photo, 1600x1200 -->`)

**Never:** div-fake screenshots, random-URL photos whose content you cannot control.

### Step 5: LOCALIZE
For any non-English or multilingual brief:
- Logical CSS properties (start/end, not left/right)
- Mirrored directional icons
- Intl-formatted numbers/dates
- Fonts that actually cover the target scripts
- +30-40% text-expansion headroom
- Load `references/rules/i18n.md`

### Step 6: MOTION PASS
Only now, per MOTION dial:
- Animate transform/opacity only
- `prefers-reduced-motion` honored above CRISP
- Load `references/rules/motion.md`

### Step 7: VERIFY (Section 5)
Not optional. Run mechanical lint + render-and-inspect.

---

## 5. VERIFICATION LOOP (P0, Mandatory)

### 5.1 Mechanical Lint
After generating, run on every output file:
```bash
node scripts/design-lint.mjs <files...>
```

**What it checks:**
- P0 violations (ship blockers)
- P1 violations (need justification)
- Accessibility issues
- Performance problems
- Code quality issues

Fix all P0 findings. Justify P1s in one line or fix them. If Node is unavailable, do the equivalent grep checks by eye.

### 5.2 Render and Inspect
If the environment can run a server or render a preview:
1. Serve it
2. Screenshot it (both light and dark if themed; smallest and largest viewport)
3. Compare against the Design Read
4. Fix the top 3 visual issues
5. Max 2 iterations

If rendering is impossible in this environment, say so and do a static self-review instead: re-read the code as a browser would render it.

### 5.3 Ship with Evidence
The final message includes:
- The Design Read
- Dial levels
- Lint result (or manual-check summary)
- What the render check caught and fixed
- Content-needed list if any

### 5.4 Pre-Flight Checklist (Before Shipping)
**All must pass. No exceptions.**

**Layout & Structure:**
- [ ] Hero fits in initial viewport (headline ≤2 lines, subtext ≤20 words)
- [ ] Navigation renders on single line at desktop
- [ ] No duplicate CTA intent on page
- [ ] Bento grids have exact cell count (no empty cells)
- [ ] Max 1 eyebrow per 3 sections
- [ ] Max 2 consecutive zigzag sections

**Typography:**
- [ ] Display headlines use recommended fonts (not Inter as default)
- [ ] Serif only when justified (brand brief or editorial aesthetic)
- [ ] Italic descenders have clearance (leading-[1.1] minimum)
- [ ] Button text fits on one line at desktop

**Color & Contrast:**
- [ ] One accent color locked across page
- [ ] No purple-blue gradient glow as default
- [ ] Warm beige/brass palette only when justified
- [ ] All text passes WCAG AA contrast (4.5:1 body, 3:1 large)
- [ ] Button text readable against button background

**Motion:**
- [ ] Motion is motivated (has a reason)
- [ ] `prefers-reduced-motion` supported above CRISP
- [ ] Max 1 marquee per page
- [ ] No infinite loops without purpose

**Accessibility:**
- [ ] All interactive elements have focus states
- [ ] Form inputs have labels
- [ ] Images have alt text
- [ ] Color is not the only way to convey information

**Performance:**
- [ ] No layout shifts (CLS < 0.1)
- [ ] Images optimized (WebP/AVIF when possible)
- [ ] Fonts self-hosted or loaded with `font-display: swap`
- [ ] No render-blocking resources

**Content:**
- [ ] No lorem ipsum (real or inferred content)
- [ ] No placeholder divs (real images or labeled slots)
- [ ] No AI-hallucinated copy
- [ ] One copy register per page

---

## 6. TASTE.md PROJECT MEMORY

After shipping, update or create `TASTE.md` in the project root:
- Design Read used
- Dial levels chosen
- Key design decisions and why
- What was banned and why
- Content still needed

This helps future agents understand the design system.

---

## 7. REFERENCE FILES

Load only what the brief needs:

### Design Systems
- `references/design-systems.md` - When to use official packages

### Rules
- `references/rules/i18n.md` - Internationalization
- `references/rules/redesign.md` - Redesign protocol
- `references/rules/imagery.md` - Image strategy
- `references/rules/motion.md` - Motion design
- `references/rules/typography.md` - Font rules
- `references/rules/color.md` - Color palette rules
- `references/rules/layout.md` - Layout patterns
- `references/rules/accessibility.md` - A11y requirements

### Domains
- `references/domains/marketing.md` - Landing pages, portfolios
- `references/domains/product-ui.md` - Dashboards, SaaS
- `references/domains/ecommerce.md` - Stores, product pages
- `references/domains/editorial.md` - Blogs, docs, news
- `references/domains/mobile-apps.md` - iOS/Android screens
- `references/domains/email.md` - Email templates

### Stacks
- `references/stacks/react-next.md` - React/Next.js
- `references/stacks/single-file-html.md` - Standalone HTML
- `references/stacks/react-native.md` - React Native
- `references/stacks/flutter.md` - Flutter
- `references/stacks/vue.md` - Vue.js
- `references/stacks/svelte.md` - Svelte

---

## 8. RESEARCH BACKING

Every rule in this skill is backed by research. See:

### Root Causes
- `research/root-causes/ai-defaults.md` - Why AI defaults are bad
- `research/root-causes/cognitive-biases.md` - Design biases to avoid
- `research/root-causes/accessibility-gaps.md` - Common a11y failures

### Findings
- `research/findings/dial-interactions.md` - How dials interact
- `research/findings/layout-patterns.md` - Effective layouts
- `research/findings/typography-pairs.md` - Font combinations
- `research/findings/color-psychology.md` - Color impact data

### Remediation
- `research/remediation/fixes.md` - Specific solutions
- `research/remediation/workarounds.md` - Platform limitations
- `research/remediation/alternatives.md` - When to use what

---

## 9. CANONICAL CODE PATTERNS

### Hero Section Template
```tsx
// Research-backed hero that fits viewport
<section className="min-h-[100dvh] flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div>
        <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-[65ch]">
          {subtext}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg">{primaryCta}</Button>
          <Button variant="outline" size="lg">{secondaryCta}</Button>
        </div>
      </div>
      
      {/* Right: Visual */}
      <div className="relative">
        <Image
          src={heroImage}
          alt={heroAlt}
          width={800}
          height={600}
          className="rounded-lg shadow-xl"
          priority
        />
      </div>
    </div>
  </div>
</section>
```

### Card Grid Template
```tsx
// Research-backed card grid with proper states
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card 
      key={item.id}
      className="group hover:shadow-lg transition-all duration-200"
    >
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="mt-4">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Real content, not lorem ipsum */}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>
```

### Navigation Template
```tsx
// Research-backed navigation that fits one line
<nav className="h-16 border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="flex items-center space-x-2">
      <Logo className="h-8 w-8" />
      <span className="font-bold text-xl">Brand</span>
    </Link>
    
    {/* Desktop Nav - Fits on one line */}
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
    
    {/* CTA */}
    <div className="flex items-center space-x-4">
      <Button variant="ghost">Sign in</Button>
      <Button>Get started</Button>
    </div>
    
    {/* Mobile Menu */}
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="h-6 w-6" />
    </Button>
  </div>
</nav>
```

---

## 10. BANNED PATTERNS (Research-Backed)

### The Big 7 (Always Banned as Defaults)
1. **Purple-blue gradient glow** - See `research/root-causes/ai-defaults.md#1`
2. **Centered hero over dark mesh** - See `research/root-causes/ai-defaults.md#2`
3. **Three equal feature cards** - See `research/root-causes/ai-defaults.md#3`
4. **Glassmorphism on everything** - See `research/root-causes/ai-defaults.md#4`
5. **Inter + slate-900** - See `research/root-causes/ai-defaults.md#5`
6. **Infinite loops everywhere** - See `research/root-causes/ai-defaults.md#6`
7. **Placeholder divs instead of real images** - See `research/root-causes/ai-defaults.md#7`

### Premium Consumer Palette Ban (P0)
**Banned as default for premium-consumer briefs:**
- Backgrounds: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#faf7f1`, `#e8dfcb`
- Accents: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621`
- Text: `#1a1714`, `#1a1814`, `#1b1814`

**Why:** Every premium-consumer site uses this palette. The brand becomes invisible.

**Alternatives (rotate, do not reuse):**
- Cold Luxury: silver-grey + chrome + smoke
- Forest: deep green + bone + amber accent
- Black and Tan: true off-black + warm tan
- Cobalt + Cream: saturated blue against neutral
- Terracotta + Slate: warm rust against cool grey
- Olive + Brick + Paper: muted olive plus brick-red
- Pure monochrome + single saturated pop

### Layout Bans
- **Max 1 eyebrow per 3 sections** - The #1 violated rule
- **Max 2 consecutive zigzag sections** - Break with full-width
- **No empty bento cells** - Reshape grid, don't paste blank tile
- **No split headers by default** - Stack vertically unless justified
- **No duplicate CTA intent** - One label per intent per page

### Typography Bans
- **Inter as default** - Use Geist, Satoshi, Cabinet Grotesk first
- **Serif as default** - Only when brand brief or editorial aesthetic
- **Fraunces and Instrument Serif** - Banned as LLM favorites
- **Mixed-family emphasis** - Use italic/bold of same font

### Motion Bans
- **Unmotivated animation** - Must communicate hierarchy/story/feedback
- **More than 1 marquee per page** - Pick the best section
- **GSAP without purpose** - Each ScrollTrigger needs a reason
- **Motion without `prefers-reduced-motion`** - Accessibility first

---

## 11. SUCCESS STORIES

See `examples/` for case studies:
- `examples/case-studies/saas-landing.md` - B2B SaaS transformation
- `examples/case-studies/ecommerce.md` - Store redesign
- `examples/case-studies/mobile-app.md` - iOS app screens
- `examples/case-studies/public-sector.md` - Government service
- `examples/case-studies/agency-portfolio.md` - Creative studio

Each includes:
- Before/after screenshots
- Design Read used
- Dial levels chosen
- Key decisions and why
- Metrics (performance, accessibility, uniqueness)

---

## 12. QUICK REFERENCE

### The 5 Dials (Named Levels)
- **CALM** (1-2): Strict symmetry, static, art gallery density
- **CRISP** (3-4): Gentle offset, hover+fade, roomy density
- **BALANCED** (5-6): Mixed rhythm, scroll reveals, standard density
- **BOLD** (7-8): Asymmetric, choreography, data-rich density
- **WILD** (9-10): Artsy chaos, cinematic, cockpit density

### The 8-Step Loop
1. INFER brief
2. DECLARE Design Read
3. SET dials
4. LOAD references
5. BUILD token-first
6. LOCALIZE
7. VERIFY (lint + render)
8. SHIP with evidence

### The 3 Verification Steps
1. Mechanical lint (`node scripts/design-lint.mjs`)
2. Render and inspect (screenshot + compare)
3. Ship with evidence (Design Read + results)

### The 7 Research Areas
1. Root causes of AI defaults
2. Dial interaction rules
3. Layout pattern effectiveness
4. Typography pairings
5. Color psychology
6. Accessibility gaps
7. Platform conventions

---

## 13. GETTING HELP

### Documentation
- `README.md` - Overview and quick start
- `CHANGELOG.md` - Version history
- `CONTRIBUTING.md` - How to contribute
- `LICENSE` - MIT license

### Community
- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: Questions and ideas
- Pull Requests: Contributions welcome

### Research
- `research/` - All research backing
- `examples/` - Case studies and examples
- `scripts/` - Verification tools

---

**Remember:** Every rule is research-backed, contextual, and tiered by severity. Nothing fires automatically. Read the brief, set the dials, build token-first, verify mechanically, and ship with evidence.

**The goal:** Interfaces that look hand-crafted by senior designers, not generic AI slop.