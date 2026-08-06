# Stack: React Native

- Styling: StyleSheet or NativeWind (if present, match repo). Tokens in a theme module (colors/spacing/radii/typography) mirroring SKILL token-first order.
- Safe areas: `react-native-safe-area-context` (`useSafeAreaInsets`), P0 on every screen.
- Motion: Reanimated 3+ worklets (`withSpring` default; `withTiming` 200-350ms). No JS-thread loops. Gestures: Gesture Handler with haptics on commits.
- Lists: FlatList/FlashList with `keyExtractor`, `getItemLayout` where uniform, skeletons shaped like rows.
- Navigation: React Navigation; native stack for iOS-feel transitions, deep links configured.
- Type: base 15-17pt body; support Dynamic Type (`allowFontScaling`, test 130%); line-height multipliers per i18n.md for Arabic/CJK.
- RTL: `I18nManager` + logical props (`marginStart`, `paddingEnd`), mirrored icons; force one RTL test run per flow.
- Images: expo-image / FastImage, fixed aspect containers, placeholder blurhash.
- Inputs: keyboardAvoidingView, correct keyboardType + returnKeyType, secure fields, autofill hints (`textContentType`).
- 44pt targets minimum; `hitSlop` for small icons; `accessibilityLabel`/`role` on all touchables (a11y.md).
