# Design Systems Reference

## When to Use Official Design Systems

Use official design system packages when the brief matches a known platform or brand. **Never recreate official CSS by hand.**

---

## Official Design Systems

### Microsoft / Enterprise SaaS / Dashboards
**Package:** `@fluentui/react-components` or `@fluentui/web-components`

**When to use:**
- Microsoft products
- Enterprise SaaS applications
- Dashboard interfaces
- Office-like productivity tools

**Why:**
- Official Microsoft tokens
- Accessibility done right
- Consistent with Windows/Office ecosystem
- Mature component library

**Installation:**
```bash
npm install @fluentui/react-components
```

**Example:**
```tsx
import { Button, FluentProvider, webLightTheme } from '@fluentui/react-components';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button appearance="primary">Click me</Button>
    </FluentProvider>
  );
}
```

---

### Google-ish UI, Material-flavored Product
**Package:** `@material/web` + Material 3 tokens

**When to use:**
- Google products
- Material Design interfaces
- Android-style web apps
- Google Workspace integrations

**Why:**
- Official Material 3 implementation
- Themeable via Material Theming
- Consistent with Android/Google ecosystem
- Strong accessibility

**Installation:**
```bash
npm install @material/web
```

**Example:**
```html
<script type="module">
  import '@material/web/button/filled-button.js';
</script>

<md-filled-button>Click me</md-filled-button>
```

---

### IBM-style B2B / Enterprise Analytics
**Package:** `@carbon/react` + `@carbon/styles`

**When to use:**
- IBM products
- Enterprise analytics
- Data-heavy applications
- B2B enterprise tools

**Why:**
- Official Carbon Design System
- Mature data-density patterns
- Strong accessibility
- Enterprise-ready

**Installation:**
```bash
npm install @carbon/react @carbon/styles
```

**Example:**
```tsx
import { Button } from '@carbon/react';

function App() {
  return <Button>Click me</Button>;
}
```

---

### Shopify App Surfaces
**Package:** `polaris.js` web components / Polaris React

**When to use:**
- Shopify admin UI
- E-commerce management
- Merchant tools

**Why:**
- Required for Shopify admin UI
- Consistent with Shopify ecosystem
- Strong accessibility
- Merchant-tested

**Installation:**
```bash
npm install @shopify/polaris
```

**Example:**
```tsx
import { Button, AppProvider } from '@shopify/polaris';

function App() {
  return (
    <AppProvider i18n={{}}>
      <Button primary>Click me</Button>
    </AppProvider>
  );
}
```

---

### Atlassian / Jira-style Product
**Package:** `@atlaskit/*` + `@atlaskit/tokens`

**When to use:**
- Atlassian products
- Jira-like project management
- Confluence-like documentation
- Team collaboration tools

**Why:**
- Official Atlassian DS
- Consistent with Jira/Confluence
- Strong accessibility
- Enterprise-tested

**Installation:**
```bash
npm install @atlaskit/button @atlaskit/tokens
```

**Example:**
```tsx
import Button from '@atlaskit/button';

function App() {
  return <Button appearance="primary">Click me</Button>;
}
```

---

### GitHub-style Devtool / Community Page
**Package:** `@primer/css` or `@primer/react-brand`

**When to use:**
- GitHub-like interfaces
- Developer tools
- Community platforms
- Code-related applications

**Why:**
- Official Primer Design System
- Brand variant for marketing
- Strong accessibility
- Developer-tested

**Installation:**
```bash
npm install @primer/react
# or
npm install @primer/css
```

**Example:**
```tsx
import { Button } from '@primer/react';

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

---

### Public-sector UK Service
**Package:** `govuk-frontend`

**When to use:**
- UK government services
- Public sector applications
- Regulatory compliance

**Why:**
- Legally/regulatorily expected
- Strong accessibility
- Government-tested
- Trust-building

**Installation:**
```bash
npm install govuk-frontend
```

**Example:**
```html
<button class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```

---

### US Public-sector / Trust-first
**Package:** `uswds`

**When to use:**
- US government services
- Public sector applications
- Trust-first interfaces

**Why:**
- Required for US government
- Strong accessibility
- Government-tested
- Trust-building

**Installation:**
```bash
npm install uswds
```

**Example:**
```html
<button class="usa-button">Click me</button>
```

---

### Fast Local-business / Agency MVP
**Package:** Bootstrap 5.3

**When to use:**
- Quick prototypes
- Local business sites
- Agency MVPs
- Simple marketing sites

**Why:**
- Boring, fast, works
- Well-documented
- Large community
- Easy to customize

**Installation:**
```bash
npm install bootstrap
```

**Example:**
```html
<button class="btn btn-primary">Click me</button>
```

---

### Modern Accessible React Foundation
**Package:** `@radix-ui/themes`

**When to use:**
- Modern React applications
- Accessible-first design
- Custom design systems
- Headless component needs

**Why:**
- Primitives + polished theme
- Strong accessibility
- Highly customizable
- Modern React patterns

**Installation:**
```bash
npm install @radix-ui/themes
```

**Example:**
```tsx
import { Theme, Button } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <Button>Click me</Button>
    </Theme>
  );
}
```

---

### Modern SaaS Where You Own the Components
**Package:** shadcn/ui (`npx shadcn@latest add ...`)

**When to use:**
- Modern SaaS applications
- Custom design systems
- Full component ownership
- Tailwind-based projects

**Why:**
- You own the code
- Easy to customize
- Never ship default state
- Modern Tailwind patterns

**Installation:**
```bash
npx shadcn@latest init
npx shadcn@latest add button
```

**Example:**
```tsx
import { Button } from "@/components/ui/button"

function App() {
  return <Button>Click me</Button>
}
```

---

### Tailwind-based Modern SaaS / AI Marketing
**Package:** Tailwind v4 utilities + `dark:` variant

**When to use:**
- Modern SaaS applications
- AI marketing sites
- Indie/small team builds
- Custom design systems

**Why:**
- Default for indie + small team builds
- Highly customizable
- Strong ecosystem
- Modern utility patterns

**Installation:**
```bash
npm install tailwindcss @tailwindcss/postcss
```

**Example:**
```tsx
function App() {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
      Click me
    </button>
  );
}
```

---

## Honesty Rules

### Use Official Packages
If the brief reads as one of the systems above, install and use the **official** package. Do not recreate its CSS by hand. Do not import a system's tokens but then override 90% of them.

### One System Per Project
Do not mix Fluent React with Carbon in the same tree. Do not import shadcn/ui components into a Material 3 app.

### Label Approximations
If you're approximating a design system (e.g., "web glassmorphism, not Apple Liquid Glass"), label it clearly in code comments.

---

## When the Brief is an Aesthetic, Not a System

For these directions, there is **no single official package**. Build with native CSS + Tailwind + a maintained component library. Be honest in code comments about what is borrowed inspiration vs. official material.

### Glassmorphism / "Frosted Glass"
- **Implementation:** `backdrop-filter`, layered borders, highlight overlays
- **Fallback:** Solid-fill fallback for `prefers-reduced-transparency`
- **Honesty:** "Web glassmorphism, not Apple Liquid Glass"

### Bento (Apple-style Tile Grids)
- **Implementation:** CSS Grid with mixed cell sizes
- **Honesty:** "Bento-inspired grid, not Apple's official implementation"

### Brutalism
- **Implementation:** Native CSS, monospace, raw borders
- **Honesty:** "Brutalist aesthetic, not a specific system"

### Editorial / Magazine
- **Implementation:** Serif type, asymmetric grid, generous whitespace
- **Honesty:** "Editorial layout, not a specific publication"

### Dark Tech / Hacker
- **Implementation:** Mono + accent neon, terminal motifs
- **Honesty:** "Dark tech aesthetic, not a specific system"

### Aurora / Mesh Gradients
- **Implementation:** SVG or layered radial gradients
- **Honesty:** "Aurora-inspired gradients, not a specific system"

### Kinetic Typography
- **Implementation:** Native CSS animations, scroll-driven animations, GSAP for hijacks
- **Honesty:** "Kinetic typography, not a specific system"

### Apple Liquid Glass
- **Apple documents this for Apple platforms only.** There is no official `liquid-glass.css`. Web implementations are approximations using `backdrop-filter` + layered borders + highlights. Label clearly as approximation.

---

## Decision Matrix

| Brief Reads As | Reach For | Why |
|----------------|-----------|-----|
| Microsoft / enterprise SaaS | `@fluentui/react-components` | Official Fluent UI |
| Google-ish UI | `@material web` | Official Material 3 |
| IBM-style B2B | `@carbon/react` | Official Carbon |
| Shopify app surfaces | `polaris.js` | Required for Shopify admin |
| Atlassian / Jira-style | `@atlaskit/*` | Official Atlassian DS |
| GitHub-style devtool | `@primer/css` | Official Primer |
| UK public-sector | `govuk-frontend` | Legally expected |
| US public-sector | `uswds` | Legally expected |
| Fast local-business | Bootstrap 5.3 | Boring, fast, works |
| Modern accessible React | `@radix-ui/themes` | Primitives + theme |
| Modern SaaS (own components) | shadcn/ui | You own the code |
| Tailwind-based modern SaaS | Tailwind v4 | Default for indie |

---

## Common Mistakes

### ❌ Don't: Recreate Official CSS
```css
/* BAD: Recreating Fluent UI by hand */
.fluent-button {
  background: #0078d4;
  border: 1px solid #0078d4;
  /* ... */
}
```

### ✅ Do: Use Official Package
```tsx
// GOOD: Using official Fluent UI
import { Button } from '@fluentui/react-components';
<Button appearance="primary">Click me</Button>
```

### ❌ Don't: Mix Design Systems
```tsx
// BAD: Mixing Fluent and Carbon
import { Button as FluentButton } from '@fluentui/react-components';
import { Button as CarbonButton } from '@carbon/react';
```

### ✅ Do: Use One System
```tsx
// GOOD: Using one system consistently
import { Button } from '@fluentui/react-components';
<Button appearance="primary">Click me</Button>
```

---

## Conclusion

Use official design systems when the brief matches a known platform. Be honest about approximations. Never mix systems. One system per project.

**The goal:** Consistent, accessible, brand-appropriate design that users trust.