# Official Design Systems (use the real package, never hand-craft a copy)

Honesty rule: if the brief reads as one of these, install the official package and own its theming.
Do not import tokens and override 90% of them. One system per project.

| Brief reads as | Package | Docs |
|---|---|---|
| Microsoft / enterprise SaaS | `@fluentui/react-components` | fluent2.microsoft.design |
| Google / Material product UI | `@material/web` + M3 tokens | m3.material.io |
| IBM-style B2B / analytics | `@carbon/react` `@carbon/styles` | carbondesignsystem.com |
| Shopify apps | Polaris web components / `@shopify/polaris` | shopify.dev |
| Atlassian products | `@atlaskit/*` | atlassian.design |
| GitHub-style devtool | `@primer/css` / Primer Brand | primer.style |
| UK public sector | `govuk-frontend` | design-system.service.gov.uk |
| US public sector | `uswds` | designsystem.digital.gov |
| Agency MVP speed | Bootstrap 5.3 | getbootstrap.com |
| Accessible React foundation | `@radix-ui/themes` | radix-ui.com/themes |
| Owned components, modern SaaS | shadcn/ui (never ship default state; theme radii/colors/type) | ui.shadcn.com |
| Modern marketing default | Tailwind v4 utilities + tokens | tailwindcss.com |
| iOS app | SwiftUI + HIG | developer.apple.com/design |
| Android app | Material 3 Compose | m3.material.io |

## Aesthetics that are NOT systems (label as approximations)
Glassmorphism, "Apple Liquid Glass" on web (Apple documents it for Apple platforms only; web versions are backdrop-filter approximations: say so in a comment), neo-brutalism, bento, aurora gradients, claymorphism. Build with native CSS and say what is being approximated.

## Install snippets (reality anchors)
```bash
npm i @fluentui/react-components
npm i @material/web
npm i @carbon/react @carbon/styles
npm i @radix-ui/themes
npx shadcn@latest init && npx shadcn@latest add button card input
npm i govuk-frontend
npm i bootstrap
# Shopify Polaris web components need the shopify-api-key meta + polaris.js script
```
