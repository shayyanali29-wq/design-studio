# Example Pair: Mobile Screen (food delivery, Urdu + English, RTL)

Design Read: consumer food app for Pakistan, warm-plain voice, playful-premium,
BALANCED/CALM/BALANCED, locales [ur, en]. iOS 390x844 reference.

---

## BAD

- Top hero banner with marketing slogan "Elevate your cravings — seamlessly" in purple gradient
- Targets: 32px icon buttons crowding the top edge under the notch
- Latin-only font; Urdu strings fall back to a clashing system face, letter-spaced caps labels
- Checkout button top-right (unreachable), layout not mirrored in Urdu mode, back chevron still pointing left
- "Only 2 left!" banner with no inventory data behind it

---

## GOOD

Structure (bottom-up thumb logic, RTL-aware):

```
SafeArea (top: status bar)
Header: [search "کھانا تلاش کریں"]  [location chip: گلبرگ، لاہور ▾]   <- dir=rtl, start = right
Categories: horizontal snap row, 72x72 targets, real food photos (generated, warm grade)
Section: "آج کے مقبول ترین" (Today near you)
  Restaurant rows 96pt high: 1:1 photo / name (Nastaliq-safe line-height 2.0 only on display,
  UI uses Noto Naskh) / rating+distance / delivery time with icon
Sticky bottom: Cart pill "ٹوکری دیکھیں - ₨ 1,850" height 56pt, min 48pt target, above tab bar
Tab bar (4 tabs, labels ur): ہوم، تلاش، آرڈرز، پروفائل, icons mirrored correctly (back chevron points RIGHT in rtl)
```

Rules honored: 44pt+ targets, safe-area insets, logical properties (`ms-/pe-`), mirrored
directional icons only, numbers `dir=ltr` isolated inside RTL strings (₨ 1,850 formatted via
Intl.NumberFormat('ur-PK')), no fake urgency, skeleton rows shaped like restaurant rows for
loading, empty-basket state teaches + one action ("قریبی ریستوران دیکھیں").

Locale notes: Nastaliq only for display headings (≥ 18px, extra height), UI chrome in
Noto Naskh/IBM Plex Sans Arabic family for scan speed; no letter-spacing anywhere; expansion
tested with German-level worst case; English mode is the mirrored twin, not a second design.
