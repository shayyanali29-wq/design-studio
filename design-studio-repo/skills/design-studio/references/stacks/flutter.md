# Stack: Flutter

- Design tokens: ThemeData extensions (color, textTheme, spacing/radius constants) defined once, used everywhere; also drives dark theme (P1 both appearances).
- Layout: SafeArea always; MediaQuery for breakpoints; LayoutBuilder for adaptive (phone vs tablet).
- Text: `bodyMedium` 14-16sp as base; MediaQuery textScaler respected (wrap critical rows in Flexible); script fallbacks via `fontFamilyFallback` (Noto per i18n.md table).
- Motion: implicit widgets (AnimatedContainer, AnimatedOpacity) for CRISP; AnimationController + curves 250-350ms for BALANCED; Rive/Lottie for illustration moments; respect system reduced-motion (MediaQuery.disableAnimations).
- Lists: ListView.builder, slivers for scroll effects; shimmer package for skeletons; never blocking spinners for content lists.
- Navigation: go_router; deep links; predictable back behavior (P0 Android hardware back).
- RTL: automatic with logical widgets (EdgeInsetsDirectional, AlignmentDirectional); verify one ar flow; never absolute left/right positioning.
- State: Provider/Riverpod/Bloc per repo convention; forms: Form + TextFormField validators, focus nodes, error text per product-ui.md forms.
- Accessibility: Semantics labels on custom widgets; 48dp tap targets; contrast tokens pass on both themes.
