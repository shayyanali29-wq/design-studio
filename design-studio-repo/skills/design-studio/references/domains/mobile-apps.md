# Domain: Mobile Apps (iOS, Android, cross-platform screens)

Platform conventions are law here. Load with: a11y.md (touch targets) + i18n.md (mirroring) + the stack file (react-native.md / flutter.md / modes.md M2 for single-file mockups).

## Non-negotiable platform rules (P0)
- Touch targets: iOS ≥ 44x44pt, Android ≥ 48x48dp, padding included
- Safe areas: every screen respects notch, status bar, home indicator (`SafeAreaView` / `MediaQuery.padding`)
- Navigation conventions:
  - iOS: large-title nav bars, back chevron top-left, tab bar bottom (≤ 5 tabs), swipe-back from edge preserved
  - Android: top app bar per Material 3, back arrow, navigation bar or bottom nav, hardware back works
  - Never invent a pattern that fights these. Bottom tabs OR drawer, not both clumsily
- Text scaling: layouts survive 130% dynamic type / font scale without truncation of critical actions
- Thumb zone: primary actions in bottom half; destructive actions never alone at bottom edge

## Screen anatomy checklist (per screen)
- States: loading (skeleton of final layout, not spinners), empty (teach + one action), error (plain language + retry), offline (what still works), permission-denied (how to fix in Settings)
- Lists: row height ≥ 56dp/pt comfortable, separators hairline not heavy cards when DENSITY ≥ BOLD
- Keyboards: correct type per field (email, phone, number), return key labeled (Search/Send/Done), keyboard avoids focused field
- Headers: one clear title; no marketing-style slogans inside apps

## Motion on mobile
- Level ≤ BOLD. Springs over curves (Reanimated `withSpring`), screen transitions 250-350ms
- Shared-element transitions for master-detail where stack supports it; gesture-driven only with haptic + cancel paths
- Pull-to-refresh only where content refreshes; no decorative infinite loops on battery

## RTL (P0 for Arabic/Hebrew/Urdu apps)
- Full auto-mirroring: navigation direction, back chevrons, progress indicators, swipe gestures
- Tab order flips; icons with directionality flip; media/brand/clock icons never flip
- Test one full flow in ar/he/ur before shipping

## Theming & dark mode
- Material tokens / iOS semantic colors or app token set; both appearances designed, not inverted-by-default
- Elevation = shadow on Android, blur/translucency fluency on iOS; do not mix metaphors

## Deliverable format
- List of screens + flow map first; then screen-by-screen specs; redlines optional
- In M2 single-file mode: device frames 390x844 / 360x800, 1x CSS, real string budgets for two locales
- In RN/Flutter repos: load the matching stack file before writing components
