# Rules: Anti-Slop Tells (severity-tiered)

Signatures that make output recognizable as unedited AI. Tiered so "mandatory" means something again.
Unless the brief explicitly asks for one of these, treat as listed.

## P0 (broken work if shipped)
| Tell | Fix |
|---|---|
| Em-dash `—` / en-dash `–` in display copy (headlines, labels, buttons, nav, captions) | period, comma, colon, hyphen, or line break |
| Div-based fake product screenshots (fake dashboards/terminals from styled divs) | real screenshot, generated image, real component preview, or none |
| Image URLs whose content you cannot control (dead `source.unsplash.com`, "picsum seed describes content") | generation > brand assets > licensed stock > labeled slot |
| Hand-rolled icon SVG paths | one icon library (Phosphor/Tabler/HugeIcons/Radix); no mixing families |
| `window.addEventListener('scroll')` / scroll-driven component state | Motion useScroll, GSAP ScrollTrigger, IntersectionObserver, CSS scroll-driven |
| `h-screen` full-height heroes | `min-h-[100dvh]` |
| Section-level light/dark flips mid-page | page theme lock, one exception as single deliberate device |
| White-on-white / invisible CTAs, contrast < AA | contrast audit per a11y.md |
| Missing alt text / missing keyboard support on custom widgets | a11y.md |
| Latin-only font on RTL/CJK/Indic brief | i18n.md coverage table |

## P1 (fix or justify in one line)
| Tell | Rule |
|---|---|
| 3 equal feature cards in a row | asymmetric grid / zigzag cap / bento |
| Eyebrow above EVERY section | budget 1 per 3 sections, hero counts |
| Numbered eyebrows (`00 / INDEX`, `001 - Capabilities`) | plain topic words or nothing |
| Version labels in hero (`V2.0`, `BETA`, `INVITE-ONLY`) | only for genuine launch briefs |
| Split-header floater paragraph top-right | stack under headline or aligned 2-col |
| Photo-credit captions on stock (`Frame XII - 35mm`) | functional caption or none |
| Pills/tags overlaid ON images | caption below, outside the image |
| Scroll cues (`Scroll`, animated mouse icons) | users know what scrolling is |
| Locale/weather/time strips (`LIS 14:23 - 18°C`) | only for genuinely place/time-relevant briefs |
| Decoration strip at hero bottom (`BRAND. MOTION. SPATIAL.`) | delete |
| Decorative status dots everywhere | semantic state only, ≤ 1 per section |
| Hairline border on every row of long lists | grouped chunks / cards / one sparse divider |
| Scoring bars with filled background tracks | number + icon, or trackless inline bar |
| Quote > 3 lines / attribution without role | cut; name + role + org |
| "Jane Doe", "Acme Corp", "Nexus", "SmartFlow" | realistic locale-appropriate names |
| Filler verbs (Elevate, Unleash, Seamless, Next-Gen, Revolutionize) | concrete verbs per copywriting.md |
| Fake-precise stats (92%, 4.1x) without data | real data or labeled mock |
| "Quietly in use at", "Field notes", "From the bench" labels | plain functional headings |
| Middle-dot `·` as universal separator | max 1 per metadata line; prefer hairlines/columns |
| Gradient text on big headlines / neon outer glows | weight + color hierarchy; inner borders, tinted shadows |
| Custom mouse cursors | never |
| shadcn/ui in default state | theme it to the project or do not use it |
| 6 white-on-white bento cells | 2-3 cells with real visual variation |

## P2 (polish)
| Tell | Rule |
|---|---|
| Pure #000000 / #FFFFFF surfaces | off-black / off-white |
| `rounded-lg` on everything / arbitrary z-index values | radius system / named layers |
| Vertical rotated agency text | only when brief is agency-experimental and it composes |
| `<br>`-forced headline linebreaks with italicized tail word | natural phrasing first, craft second |
