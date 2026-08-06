# Domain: Commerce (storefront, product pages, checkout)

Trust + clarity sell. Load with: imagery.md (product shots are revenue) + product-ui.md (forms section) + seo.md (Product JSON-LD).

## Storefront / category
- Grid: strict rhythm (CALM-CRISP variance), consistent card anatomy: image / name / price / one signal (rating or badge max)
- Filtering: sidebar desktop, drawer mobile; active filters as removable chips; URL-reflected state
- Sort + result count visible; pagination or load-more (no uncontrolled infinite scroll with filters)
- Merchandising rows (new / bestsellers) use the same card anatomy, not novelty layouts

## Product page (PDP)
- Gallery: 4-8 real images, zoom on desktop, swipe on mobile, thumbnails reachable
- Buy box: name / price (localized currency formatting via Intl) / variant selectors (real states: in stock, low, out) / size guide link where relevant / primary CTA (solid, ≥ 48px tall) / shipping + returns microcopy
- Trust near CTA: delivery estimate, returns, secure payment marks (real marks only)
- Details: accordion for specs/care/shipping; spec tables follow grouped-chunk pattern, never hairline-per-row
- Reviews: real distribution summary (bar counts), verified badges, photos where available; never invent reviews, label sample content mock
- Recommendations: 4-8 items, same card anatomy

## Cart & checkout (highest-stakes forms on the web)
- Cart: editable quantities, remove-undo, honest totals early (shipping estimate before checkout)
- Checkout: single-column, guest first, address autocomplete friendly, field count minimal, express wallets first (Apple Pay / Google Pay) where stack allows
- Error handling: field-level + summary banner; preserve all input on error (P0)
- Currency, address format, phone format, name order: locale-correct per i18n.md (P0 for global stores)

## Anti-slop for commerce
- No fake urgency ("Only 3 left!" / countdown timers) unless real inventory data backs it (P0 honesty rule)
- No marketing-style hero consuming the PDP fold: product + buy box must be usable without scroll at desktop
- No stock-photo models for real products; generate consistent synthetic photography or label placeholders
