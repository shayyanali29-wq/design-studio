# Rules: SEO, Metadata, Discoverability (greenfield)

A beautiful page nobody finds is art, not a website. All web output gets this pass (P1 unless noted).

## Document essentials
- One `h1` per page, headings in logical order, landmarks wired (P0, shared with a11y)
- `<title>`: primary phrase + brand, ≤ 60 chars, unique per page
- Meta description ≤ 155 chars, written for humans, includes the verb
- Canonical URL, html `lang` correct, viewport meta, charset utf-8 first
- Favicon + touch icons; theme-color meta matching brand

## Social / sharing
- Open Graph + Twitter card: title, description, image, type, url
- OG image 1200x630: generate per imagery.md template; readable at chat-thumbnail size; brand-true, no text-baked AI garble
- Multilingual: `hreflang` pairs for each locale + x-default; og:locale alternates

## Structured data (JSON-LD)
- Marketing: Organization + WebSite (+ FAQPage if real FAQ section)
- Commerce: Product with offers/price/availability/aggregateRating (only real data, P0 honesty)
- Local SMB: LocalBusiness with address/geo/hours/phone (drives maps visibility)
- Editorial: Article with author/datePublished/headline/image

## Performance = ranking (P1 budgets)
- LCP < 2.5s: hero image prioritized/preloaded, ≤ 200KB AVIF/WebP, text not waiting on JS
- INP < 200ms: critical JS ≤ 170KB; heavy libs lazy; no main-thread scroll handlers (already P0 in motion)
- CLS < 0.1: width/height on all media, font-display swap + size-adjust, no late-injected banners
- Run Lighthouse (or reason from budgets) inside the verify loop when the environment allows

## Content structure
- URL slugs: short, kebab-case, stable; localized slugs acceptable per locale
- Internal links descriptive (not "click here"); marketing pages link to real next steps
- Images: descriptive filenames + alt (shared P0 with a11y)
- Sitemap + robots when generating multi-page sites

## Redesign note (M4)
SEO migration is the #1 redesign risk: preserve slugs or map redirects 1:1, keep title/meta unless improving, never orphan ranking pages. See references/modes.md M4.
