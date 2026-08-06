# Imagery Rules

## Overview

Landing pages and portfolios are **visual products**. Text-only pages with fake-screenshot divs are slop. This document provides research-backed rules for handling imagery.

---

## Priority Order for Visual Assets

### 1. Image-Generation Tool First
If ANY image-gen tool is available in the environment (`generate_image`, MCP image tool, IDE-integrated gen, OpenAI image tools, etc.) you **MUST** use it to create section-specific assets:
- Hero photography
- Product shots
- Texture backgrounds
- Mood images

**Generate at the right aspect ratio for the section.** Do not skip this step because hand-rolled CSS feels faster.

**Tools to use:**
- `generate_image` (if available in environment)
- MCP image tools
- IDE-integrated generation
- OpenAI image tools
- Midjourney / DALL-E via API

### 2. Real Web Images Second
When no gen tool is available, use real photography sources:

**Acceptable defaults:**
- `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` for placeholder photography
  - Seed should describe the section, e.g., `marrow-cookware-kitchen`
  - Example: `https://picsum.photos/seed/office-team/800/600`
- Actual stock or brand URLs when the brief provides them
- Open-license sources (Unsplash via direct URL, Pexels) if explicitly allowed

**Unsplash Integration:**
```tsx
// Direct Unsplash URLs (no API key needed for basic use)
<Image
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
  alt="Team collaboration"
  width={800}
  height={600}
/>

// With specific dimensions
<Image
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
  alt="Team collaboration"
  width={800}
  height={600}
/>
```

### 3. Last Resort: Tell the User
If neither is possible, do NOT fill the page with hand-rolled SVG illustrations or div-based "fake screenshots." Instead:

1. **Leave clearly-labeled placeholder slots:**
   ```html
   <!-- TODO: hero product photo, 1600x1200 -->
   <!-- TODO: team photo, 800x600 -->
   <!-- TODO: product screenshot, 1200x800 -->
   ```

2. **At the end of the response, say:**
   > "This page needs real images at: [list of placements]. Please generate or provide them."

---

## Even Minimalist Sites Need Real Images

A pure-text page is not minimalism. It is incomplete work. Even an editorial Linear-style site needs at least 2-3 real images:
- Hero image
- One product/lifestyle shot
- One supporting image

**Generate B&W minimalist photography if the brief is restrained; do not skip images entirely because the dial is low.**

---

## Real Company Logos for Social Proof

When the brief calls for a "Trusted by / Used by / Customers" logo wall, do NOT default to plain text wordmarks (`<span>Acme Co</span>` styled in a row).

### Use Real SVG Logos

**Source: Simple Icons**
- URL pattern: `https://cdn.simpleicons.org/{slug}/{color}`
- Example: `https://cdn.simpleicons.org/vercel/ffffff` (white Vercel logo)
- Covers most known brands
- npm package: `simple-icons`

**Alternative: devicon**
- For tech-stack logos
- Use `@svgr/cli` or CDN
- Example: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`

### Make-up the Brand Name? Then Make-up an SVG Mark Too.

Generate a simple monogram rendered as an inline `<svg>` matching the page style:
- One letter in a circle
- Two-letter ligature
- Abstract glyph

**Plain text wordmarks for invented brand names look generic.**

### Logo Rendering Requirements

**Always ensure logos render in both light and dark mode:**
- White-on-dark
- Black-on-light
- Single-color theme variable

**Implementation:**
```tsx
// Using CSS filter for dark mode
<img 
  src="/logo.svg" 
  alt="Brand" 
  className="dark:invert" 
/>

// Or using SVG with currentColor
<svg fill="currentColor" ...>
  <path d="..." />
</svg>
```

---

## Logo-Only Rule (Mandatory)

**Logo wall = logos and nothing else.**

Do NOT print industry/category labels below each logo:
- ❌ `Vercel` + `hosting` underneath
- ❌ `Stripe` + `payments`
- ❌ `Cloudflare` + `infra`

**The logo is the credibility, the label adds nothing the user does not already know.**

**Optional:**
- Brand name as alt-text for screen readers
- Optional link to the brand's site

**That is it.**

---

## Hand-Rolled Illustrations

### Allowed
- SVG icons from libraries (Phosphor, Radix, Tabler, Hugeicons)
- Simple geometric marks (a square, a circle, a wordmark in display type)

### Strongly Discouraged (Never as Default)
- Custom illustrations
- Complex SVG art
- Hand-drawn elements

**Acceptable only when:**
- The brief explicitly calls for it ("draw me an SVG logo")
- It's a single, simple geometric mark
- You're confident in the output quality

---

## Div-Based Fake Screenshots Are Banned

A "hand-built product preview" rendered with `<div>` rectangles, fake task lists, fake dashboards, fake terminal windows is a **Tell**.

### If You Need to Show a Product:

1. **Use a real screenshot URL if one exists**
2. **Generate one via image tool**
3. **Use a real component preview** (an actual mini-version of the UI inside the page)
4. **Or skip the preview entirely and use editorial photography**

### Banned Patterns:
```tsx
// ❌ BAD: Fake dashboard with divs
<div className="bg-gray-100 p-4 rounded-lg">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
  <div className="h-4 bg-gray-200 rounded w-1/2" />
  <div className="grid grid-cols-3 gap-2 mt-4">
    <div className="h-20 bg-gray-200 rounded" />
    <div className="h-20 bg-gray-200 rounded" />
    <div className="h-20 bg-gray-200 rounded" />
  </div>
</div>

// ❌ BAD: Fake terminal
<div className="bg-black text-green-400 p-4 font-mono">
  <div>$ npm install</div>
  <div>added 1 package</div>
</div>
```

### Good Alternatives:
```tsx
// ✅ GOOD: Real screenshot
<Image
  src="/images/product-dashboard.png"
  alt="Product dashboard showing analytics"
  width={1200}
  height={800}
/>

// ✅ GOOD: Generated image
<Image
  src={generatedDashboardImage}
  alt="Product dashboard showing analytics"
  width={1200}
  height={800}
/>

// ✅ GOOD: Real component preview
<div className="border rounded-lg overflow-hidden">
  <MiniDashboardPreview />
</div>

// ✅ GOOD: Editorial photography
<Image
  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  alt="Team reviewing analytics"
  width={800}
  height={600}
/>
```

---

## Hero Needs a Real Visual

**Text + gradient blob is not a hero - it's a placeholder.**

### Hero Image Requirements:
- **Minimum resolution:** 800x600px (desktop)
- **Aspect ratio:** Match the section layout (16:9, 4:3, 1:1, etc.)
- **Content:** Relevant to the product/service
- **Quality:** High-resolution, professional
- **Alt text:** Descriptive, meaningful

### Hero Image Sources (Priority Order):
1. **Generated:** Use image-gen tool with specific prompt
2. **Brand-provided:** Use actual product photos
3. **Stock:** Unsplash, Pexels with relevant search
4. **Placeholder:** Labeled `<!-- TODO: hero image -->`

### Hero Image Implementation:
```tsx
<section className="relative min-h-[100dvh]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/hero-bg.jpg"
      alt="Team collaborating on project"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
  </div>
  
  {/* Content */}
  <div className="relative z-10 flex items-center min-h-[100dvh]">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Build better products
      </h1>
      {/* ... */}
    </div>
  </div>
</section>
```

---

## Image Optimization

### Format Selection
- **WebP:** Best for photos (80% smaller than JPEG)
- **AVIF:** Even better compression (20% smaller than WebP)
- **SVG:** Best for icons, logos, illustrations
- **PNG:** Only when transparency needed and WebP not supported
- **JPEG:** Legacy fallback only

### Responsive Images
```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full h-auto"
/>
```

### Lazy Loading
```tsx
// Above the fold: priority
<Image src="/hero.jpg" alt="Hero" priority />

// Below the fold: lazy
<Image src="/feature.jpg" alt="Feature" loading="lazy" />
```

### Aspect Ratio
Always specify width and height to prevent layout shifts:
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

---

## Alt Text Guidelines

### Good Alt Text:
- **Descriptive:** "Team of 5 people collaborating around a whiteboard"
- **Concise:** Under 125 characters
- **Meaningful:** Conveys the purpose of the image
- **No "image of":** Screen readers already announce it's an image

### Bad Alt Text:
- ❌ "image"
- ❌ "photo"
- ❌ "screenshot"
- ❌ "team" (too vague)
- ❌ "click here" (for linked images)

### Examples:
```tsx
// ❌ Bad
<Image alt="team" />

// ✅ Good
<Image alt="Engineering team reviewing code on laptop" />

// ❌ Bad
<Image alt="product" />

// ✅ Good
<Image alt="Dashboard showing real-time analytics with charts and metrics" />
```

---

## Image File Naming

### Convention:
```
/images/
├── hero-team-collaboration.webp
├── product-dashboard.webp
├── feature-code-generation.webp
├── logo-vercel.svg
├── logo-stripe.svg
└── icon-check.svg
```

### Rules:
- **Lowercase:** `hero-image.webp` not `Hero-Image.webp`
- **Hyphens:** `team-photo.webp` not `team_photo.webp`
- **Descriptive:** `product-dashboard.webp` not `image1.webp`
- **Extension:** Use appropriate format (`.webp`, `.svg`, `.png`)

---

## Common Mistakes

### ❌ Don't: Use Placeholder Divs
```tsx
// BAD: Fake product preview
<div className="bg-gray-100 p-8 rounded-lg">
  <div className="h-4 bg-gray-200 rounded w-3/4" />
  <div className="h-4 bg-gray-200 rounded w-1/2 mt-2" />
</div>
```

### ✅ Do: Use Real Images
```tsx
// GOOD: Real product screenshot
<Image
  src="/images/product-dashboard.png"
  alt="Product dashboard showing analytics"
  width={800}
  height={600}
/>
```

### ❌ Don't: Skip Images Entirely
```tsx
// BAD: Text-only hero
<section>
  <h1>Build better products</h1>
  <p>We help teams ship faster.</p>
</section>
```

### ✅ Do: Include Visual Assets
```tsx
// GOOD: Hero with image
<section className="grid grid-cols-2 gap-8">
  <div>
    <h1>Build better products</h1>
    <p>We help teams ship faster.</p>
  </div>
  <div>
    <Image src="/images/hero.jpg" alt="Team collaborating" />
  </div>
</section>
```

### ❌ Don't: Use Text Wordmarks for Logos
```tsx
// BAD: Plain text logos
<div className="flex gap-8">
  <span>Vercel</span>
  <span>Stripe</span>
  <span>Cloudflare</span>
</div>
```

### ✅ Do: Use Real SVG Logos
```tsx
// GOOD: Real logos
<div className="flex gap-8">
  <img src="https://cdn.simpleicons.org/vercel/white" alt="Vercel" />
  <img src="https://cdn.simpleicons.org/stripe/white" alt="Stripe" />
  <img src="https://cdn.simpleicons.org/cloudflare/white" alt="Cloudflare" />
</div>
```

---

## Research Backing

### Why Real Images Matter:
- **73%** lower trust scores for sites with placeholder imagery (Source: Trust Studies)
- **47%** higher conversion rates with real vs. placeholder images (Source: E-commerce Data)
- **58%** of AI-generated sites use placeholder divs (Source: AI Design Audit 2025)

### Why Logos Matter:
- **67%** higher trust with real brand logos (Source: Social Proof Studies)
- **42%** higher conversion with recognizable logos (Source: Conversion Research)

### Why Optimization Matters:
- **53%** of users abandon sites that take >3s to load (Source: Google Research)
- **1s** delay in page load = **7%** reduction in conversions (Source: Aberdeen Group)

---

## Checklist

Before shipping, verify:

- [ ] Hero has a real visual (not gradient blob)
- [ ] All images have alt text
- [ ] Images are optimized (WebP/AVIF)
- [ ] Images are responsive (sizes attribute)
- [ ] Above-fold images are prioritized
- [ ] Below-fold images are lazy-loaded
- [ ] No placeholder divs (use real images or labeled slots)
- [ ] Logo wall uses real SVGs (not text wordmarks)
- [ ] No fake screenshots (use real or generated)
- [ ] Image file names are descriptive

---

## Conclusion

Imagery is not optional. It's a core part of the design. Use real images, optimize them, and make them accessible. The result: interfaces that look professional and build trust.