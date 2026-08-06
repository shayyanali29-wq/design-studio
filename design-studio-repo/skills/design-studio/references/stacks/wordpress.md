# Stack: WordPress (block themes, Gutenberg, WooCommerce)

The world's largest share of "make me a website" requests. Treat it as a first-class target.

## Deliverable shapes (ask your ONE question if unclear)
1. **Block patterns** (recommended): self-contained `register_block_pattern` HTML with inline-block markup; tokens map to `theme.json`
2. **theme.json tokens**: color palette, fontFamilies, spacing scale, radius (via styles), matching SKILL token-first order
3. **Single HTML/CSS block** for one section (when the user edits visually and pastes into a Custom HTML block)
4. **Child-theme CSS layer** for classic themes: scoped overrides, no `!important` wars

## Rules
- Work WITH the block editor: group/stack/row blocks, preset spacing, no custom absolute-position contraptions editors will break
- theme.json = the token file: one accent, one radius scale, font families incl. script coverage (enqueue Noto families via Google Fonts integration or self-host for Arabic/Urdu/CJK briefs)
- WooCommerce: follow commerce.md domain; never style over the checkout's accessibility markup; hooks not template nukes
- Performance: no slider plugins, no animation frameworks; CSS + IntersectionObserver inline where needed; WP already ships too much JS
- Multilingual: WPML/Polylang-compatible structure; RTL via WordPress core `is_rtl()` and logical CSS; never assume LTR in patterns
- Admin-discretion: everything you add must survive a non-technical editor dragging blocks around; lock template-locked patterns where layout integrity matters
