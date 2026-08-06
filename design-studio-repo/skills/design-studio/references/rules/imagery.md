# Rules: Imagery & Visual Assets

Text-only pages are not minimalism, they are unfinished work. Every visual product needs real visuals.

## Priority chain (P0, in order)
1. **Image-generation tool available?** Use it. Section-specific assets, correct aspect ratios. (Templates below.)
2. **Brand assets** provided by the user/brief.
3. **Licensed/controllable stock**: direct URLs the user supplied or explicit open-license sources you can name.
4. **Labeled placeholder slot**: `<!-- TODO: hero product photo, 1600x1200, warm kitchen scene -->` + a closing "Content needed" list.
NEVER: random photo services whose content you cannot control, dead hosts, div-fake screenshots, hand-rolled icon SVGs (icon libraries only).

## Generation prompt templates (adapt scene, keep the craft)
| Asset | Template |
|---|---|
| Hero product shot | "[product] on [surface/backdrop], soft directional light, gentle shadow, premium e-commerce photography, shallow depth of field, [ratio]". Keep background tinted to the page token color. |
| Lifestyle/context | "[persona] using [product] in [real setting], natural window light, candid editorial photography, muted grade, [ratio]" |
| Texture/abstract | "minimal macro texture of [material], subtle gradient, soft studio light, monochrome [brand hue], [ratio]" |
| B&W editorial | "black and white photography of [subject], high contrast, fine grain, gallery aesthetic, [ratio]" (Minimalist/Linear reads) |
| Product-in-app mock | "clean device mockup of [app] on [phone model], floating at slight angle on [surface], studio light, [ratio]" |
| Avatar set | "portrait headshot of [realistic diverse persona matching locale], neutral background, soft light, consistent framing, square" |
| OG image | per rules/seo.md (1200x630, safe margins, brand colors, readable at 300px wide) |

Rules for generated images: never include rendered text inside the image (AI text garbles), match grade/temperature to page tokens, generate dark/light variants when theming, keep a consistent art direction across all assets on one page.

## Aspect ratios by placement
Hero 16:10 or 3:2 (crop-safe), feature/bento 4:3 or 1:1, lifestyle band 21:9, avatars 1:1, OG 1.91:1, mobile app shots 9:19.5.

## Delivery & performance (P1)
AVIF/WebP, responsive `srcset`, explicit width/height (CLS), hero `priority`/preload, lazy below fold, ≤ 200KB hero, decorative images `alt=""`.

## Social proof & marks
- Logo walls: real SVGs (simple-icons CDN or package) for real brands; invented brands get simple invented monogram SVGs, never plain text wordmarks
- Logos render correctly in both themes; logos only, no category labels under each
- Avatars: believable photos (generated or provided), locale-appropriate diversity, never the gray-egg default

## Licensing (P1 honesty)
Only sources you can defend: generated, brand-supplied, or named open-license (Unsplash/Pexels direct URLs with credit line in code comment). When in doubt, placeholder slot + ask.
