# Domain: Product UI (dashboards, SaaS apps, admin, data tools)

Different job than marketing: efficiency over impression. Load with: a11y.md + design-systems.md (real packages!) + color-layout.md.

## First decision: real design system vs custom
If the brief maps to an official system (Fluent, Material, Carbon, Polaris, Atlaskit, Primer, GOV.UK/USWDS, shadcn/ui, Radix Themes), USE IT. See `references/design-systems.md`. Do not hand-recreate enterprise CSS. One system per app.

## Layout grammar
- App shell: sidebar (collapsible, 240-280px) OR top-nav (≤ 64px) + content max-width per density
- Page header: title + primary action + breadcrumbs where depth > 2
- Content density per DENSITY dial; BOLD+ means 1px dividers instead of card boxes
- Every list has: default / hover / selected / loading-skeleton / empty / error / permission-denied states

## Data display
- Real tables: TanStack Table or AG Grid. Not divs. Sort/filter/pagination when rows > 20
- Numbers: tabular figures (`font-variant-numeric: tabular-nums`); mono at DENSITY WILD; right-align numeric columns; keep units consistent
- Charts: one library (Recharts/visx/ECharts); direct labels over legends where possible; accessible color-safe palettes + patterns for status; never 3D charts
- Status semantics: color + icon + text, never color alone

## Forms (the core of product UI)
- Label above input, helper text below label, error below input replacing helper, focus ring visible
- Validation: inline on blur for correctness, on submit for completeness; never error-on-first-keystroke
- Destructive actions: confirm pattern proportional to damage (type-to-confirm for irreversible)
- Autosave where edits are continuous; explicit save where edits are transactional
- Full keyboard flow: tab order logical, Enter submits, Esc cancels dialogs

## Navigation & wayfinding
- Active state unmistakable (weight + accent, not color alone)
- Command palette (Cmd+K) for BOLD+ density pro tools
- Deep-linkable state (filters/tab in URL) for anything a user might share

## Anti-slop for product UI
- No marketing-style heroes inside apps; no full-page gradient backgrounds behind data
- No fake-precise metrics in demos (label sample data clearly)
- No twelve-equally-weighted stat cards: hierarchy = one primary metric, then supporting
- Empty states teach: what goes here + how to add it + one action
- Settings pages: grouped, searchable at scale, no novelty layouts
