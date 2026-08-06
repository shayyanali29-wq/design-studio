# Domain: Editorial (blog, docs, news, magazine, long-form)

The text IS the product. Load with: typography.md + i18n.md (long-form line-height rules matter per script) + seo.md.

## Reading experience (all P0/P1)
- Measure: 60-75ch for Latin body text; CJK 30-40ch; Arabic 50-65ch. Wider = eye strain
- Line-height: 1.6-1.75 Latin; +10-20% for Arabic/Indic scripts; CJK 1.7-1.9
- Type scale: body 16-18px minimum (never 14px long-form); heading scale ratio 1.2-1.333
- Justification: left/start-aligned only. Never justify CJK or Arabic (breaks shaping and rivers)
- Serif IS allowed here (one case where it is the correct default); still cover target scripts

## Structure
- Article header: title (h1, one per page), standfirst/dek (1-2 sentences), author + date + reading time
- In-article rhythm: heading every 300-500 words, pull-quote sparingly (max 1 per 1000 words), figures with real captions only
- TOC for articles > 1500 words or docs; scroll-spy optional, must be keyboard operable
- Code in docs: real syntax theme (light + dark), copy button, line highlighting over line numbers everywhere

## Navigation & discovery
- Docs: sidebar tree, search-first (Cmd+K), prev/next, "was this helpful" at most
- Blog/news: card index with real cover images (or strong typographic covers per publication system), tags, author pages
- Related content: 3 items max, genuinely related, not "more slop"

## Anti-slop for editorial
- No hero image that is a div-gradient with the title over it; use real imagery or confident pure-typographic headers
- No infinite scroll on articles; paginate or "load more"
- No mid-paragraph newsletter modals; if capture is needed, end-of-article block
- Drop caps: allowed in magazine WILD reads only, never in docs

## Multilingual editorial (P1)
- RTL articles mirror the full column layout and TOC position
- Numeral system per locale via Intl; dates localized, not hardcoded formats
- Mixed-script pages (Latin brand in Urdu text) need tuned line-height accommodating both
