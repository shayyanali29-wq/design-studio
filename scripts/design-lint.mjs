#!/usr/bin/env node

/**
 * Design Studio Lint Script
 * 
 * Mechanical verification for Design Studio output.
 * Checks for P0 violations (ship blockers) and P1 violations (need justification).
 * 
 * Usage: node scripts/design-lint.mjs <files...>
 * 
 * Exit codes:
 * - 0: All checks passed
 * - 1: P0 violations found (ship blocked)
 * - 2: P1 violations found (need justification)
 */

import fs from 'fs';
import path from 'path';

// ============================================================================
// CONFIGURATION
// ============================================================================

const P0_CHECKS = [
  'hero-fits-viewport',
  'navigation-single-line',
  'no-duplicate-cta',
  'bento-cell-count',
  'eyebrow-restraint',
  'zigzag-cap',
  'button-text-wrap',
  'button-contrast',
  'form-contrast',
  'no-placeholder-divs',
  'no-lorem-ipsum',
  'no-ai-purple-gradient',
  'no-inter-default',
  'no-serif-default',
  'no-fraunces',
  'no-instrument-serif',
  'prefers-reduced-motion',
  'wcag-contrast',
  'no-fake-screenshots',
  'real-imagery'
];

const P1_CHECKS = [
  'accent-color-lock',
  'radius-consistency',
  'warm-beige-justification',
  'motion-motivated',
  'marquee-max-one',
  'split-header-justification',
  'copy-register-consistency',
  'fake-precise-numbers'
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return null;
  }
}

function countOccurrences(content, pattern) {
  const matches = content.match(new RegExp(pattern, 'gi'));
  return matches ? matches.length : 0;
}

function findLinesWithPattern(content, pattern) {
  const lines = content.split('\n');
  const matches = [];
  
  lines.forEach((line, index) => {
    if (line.match(new RegExp(pattern, 'gi'))) {
      matches.push({
        line: index + 1,
        content: line.trim()
      });
    }
  });
  
  return matches;
}

// ============================================================================
// P0 CHECKS (Ship Blockers)
// ============================================================================

function checkHeroFitsViewport(content) {
  const issues = [];
  
  // Check for hero sections that might overflow
  const heroPatterns = [
    /min-h-\[100vh\]/g,  // Should use dvh
    /height:\s*100vh/g,  // Should use dvh
    /hero.*overflow/gi
  ];
  
  heroPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'hero-fits-viewport',
        severity: 'P0',
        message: 'Hero section uses 100vh instead of 100dvh. Use min-h-[100dvh] to prevent mobile layout jumping.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNavigationSingleLine(content) {
  const issues = [];
  
  // Look for navigation patterns that might wrap
  const navPatterns = [
    /nav.*flex.*flex-wrap/gi,
    /nav.*flex-wrap/gi,
    /navigation.*flex-wrap/gi
  ];
  
  navPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'navigation-single-line',
        severity: 'P0',
        message: 'Navigation uses flex-wrap which may cause wrapping at desktop. Ensure it fits on one line at 1024px.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoDuplicateCta(content) {
  const issues = [];
  
  // Look for duplicate CTA intents
  const ctaPatterns = [
    { intent: 'contact', patterns: ['contact', 'get in touch', 'let\'s talk', 'start a project', 'reach out'] },
    { intent: 'signup', patterns: ['sign up', 'get started', 'try free', 'start free'] },
    { intent: 'portfolio', patterns: ['view work', 'see work', 'browse projects', 'selected work'] }
  ];
  
  ctaPatterns.forEach(({ intent, patterns }) => {
    const found = patterns.filter(pattern => 
      content.toLowerCase().includes(pattern)
    );
    
    if (found.length > 1) {
      issues.push({
        rule: 'no-duplicate-cta',
        severity: 'P0',
        message: `Multiple CTA intents for "${intent}" found: ${found.join(', ')}. Use one label per intent.`,
        lines: []
      });
    }
  });
  
  return issues;
}

function checkBentoCellCount(content) {
  const issues = [];
  
  // Look for bento grids with empty cells
  const bentoPatterns = [
    /bento.*grid/gi,
    /grid.*bento/gi,
    /feature.*grid/gi
  ];
  
  bentoPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      // This is a heuristic - would need AST parsing for perfect detection
      issues.push({
        rule: 'bento-cell-count',
        severity: 'P0',
        message: 'Bento grid detected. Ensure cell count matches content count (no empty cells).',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkEyebrowRestraint(content) {
  const issues = [];
  
  // Count eyebrows (small uppercase labels above headlines)
  const eyebrowPatterns = [
    /uppercase.*tracking/gi,
    /tracking.*uppercase/gi,
    /text-\[11px\].*uppercase/gi,
    /font-mono.*text-\[10\.5px\].*uppercase/gi
  ];
  
  let eyebrowCount = 0;
  eyebrowPatterns.forEach(pattern => {
    eyebrowCount += countOccurrences(content, pattern.source);
  });
  
  // Count sections (h2, h3, etc.)
  const sectionCount = countOccurrences(content, /<h[2-6]/gi);
  
  if (sectionCount > 0 && eyebrowCount > Math.ceil(sectionCount / 3)) {
    issues.push({
      rule: 'eyebrow-restraint',
      severity: 'P0',
      message: `Too many eyebrows (${eyebrowCount}) for ${sectionCount} sections. Max 1 eyebrow per 3 sections.`,
      lines: []
    });
  }
  
  return issues;
}

function checkZigzagCap(content) {
  const issues = [];
  
  // Look for consecutive zigzag patterns
  const zigzagPatterns = [
    /grid-cols-.*items-center/gi,
    /flex.*items-center.*grid/gi
  ];
  
  zigzagPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 2) {
      issues.push({
        rule: 'zigzag-cap',
        severity: 'P0',
        message: `Too many consecutive zigzag sections (${matches.length}). Max 2 allowed. Break with full-width section.`,
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkButtonTextWrap(content) {
  const issues = [];
  
  // Look for buttons that might wrap
  const buttonPatterns = [
    /button.*whitespace-normal/gi,
    /button.*flex-wrap/gi,
    /btn.*whitespace-normal/gi
  ];
  
  buttonPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'button-text-wrap',
        severity: 'P0',
        message: 'Button text may wrap. Ensure button labels fit on one line at desktop (3 words max for primary CTAs).',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkButtonContrast(content) {
  const issues = [];
  
  // Look for potential contrast issues
  const contrastPatterns = [
    { bg: 'bg-white', text: 'text-white' },
    { bg: 'bg-transparent', text: 'text-white' },
    { bg: 'bg-black', text: 'text-black' }
  ];
  
  contrastPatterns.forEach(({ bg, text }) => {
    const pattern = new RegExp(`${bg}.*${text}|${text}.*${bg}`, 'gi');
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'button-contrast',
        severity: 'P0',
        message: `Button may have contrast issue: ${bg} with ${text}. Verify WCAG AA contrast (4.5:1 for body, 3:1 for large text).`,
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkFormContrast(content) {
  const issues = [];
  
  // Look for form elements with potential contrast issues
  const formPatterns = [
    /placeholder.*text-gray-300/gi,
    /placeholder.*text-gray-200/gi,
    /input.*bg-white.*text-white/gi
  ];
  
  formPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'form-contrast',
        severity: 'P0',
        message: 'Form element may have contrast issue. Verify WCAG AA contrast for placeholders, labels, and inputs.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoPlaceholderDivs(content) {
  const issues = [];
  
  // Look for placeholder divs
  const placeholderPatterns = [
    /placeholder.*div/gi,
    /fake.*screenshot/gi,
    /div.*background.*image/gi,
    /div.*product.*preview/gi
  ];
  
  placeholderPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-placeholder-divs',
        severity: 'P0',
        message: 'Placeholder divs detected. Use real images or labeled placeholder slots (<!-- TODO: ... -->).',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoLoremIpsum(content) {
  const issues = [];
  
  const loremPatterns = [
    /lorem ipsum/gi,
    /dolor sit amet/gi,
    /consectetur adipiscing/gi,
    /sed do eiusmod/gi
  ];
  
  loremPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-lorem-ipsum',
        severity: 'P0',
        message: 'Lorem ipsum detected. Use real or inferred content, not placeholder text.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoAiPurpleGradient(content) {
  const issues = [];
  
  const purplePatterns = [
    /purple.*gradient/gi,
    /gradient.*purple/gi,
    /blue.*purple.*gradient/gi,
    /purple.*blue.*glow/gi,
    /bg-gradient-to.*purple/gi,
    /from-purple.*to-blue/gi
  ];
  
  purplePatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-ai-purple-gradient',
        severity: 'P0',
        message: 'AI purple-blue gradient detected. Use brand-appropriate colors instead of default gradients.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoInterDefault(content) {
  const issues = [];
  
  const interPatterns = [
    /font-family.*Inter/gi,
    /font-inter/gi,
    /Inter.*sans-serif/gi
  ];
  
  interPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-inter-default',
        severity: 'P0',
        message: 'Inter font detected as default. Use alternative sans-serifs: Geist, Satoshi, Cabinet Grotesk, Outfit.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoSerifDefault(content) {
  const issues = [];
  
  const serifPatterns = [
    /font-serif/gi,
    /serif.*font/gi,
    /Georgia.*serif/gi,
    /Times.*serif/gi
  ];
  
  serifPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-serif-default',
        severity: 'P0',
        message: 'Serif font detected as default. Only use serif when brand brief or editorial aesthetic justifies it.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoFraunces(content) {
  const issues = [];
  
  const frauncesPatterns = [
    /Fraunces/gi,
    /font-fraunces/gi
  ];
  
  frauncesPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-fraunces',
        severity: 'P0',
        message: 'Fraunces font detected. This is banned as an LLM favorite. Use alternative serif fonts.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoInstrumentSerif(content) {
  const issues = [];
  
  const instrumentPatterns = [
    /Instrument.Serif/gi,
    /font-instrument/gi
  ];
  
  instrumentPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-instrument-serif',
        severity: 'P0',
        message: 'Instrument Serif detected. This is banned as an LLM favorite. Use alternative serif fonts.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkPrefersReducedMotion(content) {
  const issues = [];
  
  // Check if prefers-reduced-motion is supported when motion is used
  const motionPatterns = [
    /animation/gi,
    /transition/gi,
    /transform/gi,
    /gsap/gi,
    /motion/gi,
    /scrolltrigger/gi
  ];
  
  const hasMotion = motionPatterns.some(pattern => 
    countOccurrences(content, pattern.source) > 0
  );
  
  const hasReducedMotion = content.includes('prefers-reduced-motion') || 
                          content.includes('prefersReducedMotion');
  
  if (hasMotion && !hasReducedMotion) {
    issues.push({
      rule: 'prefers-reduced-motion',
      severity: 'P0',
      message: 'Motion detected without prefers-reduced-motion support. Add support for users with motion sensitivities.',
      lines: []
    });
  }
  
  return issues;
}

function checkWcagContrast(content) {
  const issues = [];
  
  // This is a simplified check - would need color parsing for full validation
  const lowContrastPatterns = [
    /text-gray-300/gi,
    /text-gray-200/gi,
    /text-gray-100/gi,
    /text-white.*bg-white/gi,
    /text-black.*bg-black/gi
  ];
  
  lowContrastPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'wcag-contrast',
        severity: 'P0',
        message: 'Potential WCAG contrast issue detected. Verify contrast ratios (4.5:1 for body, 3:1 for large text).',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkNoFakeScreenshots(content) {
  const issues = [];
  
  const fakePatterns = [
    /div.*screenshot/gi,
    /div.*product.*preview/gi,
    /div.*dashboard.*preview/gi,
    /div.*app.*preview/gi
  ];
  
  fakePatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'no-fake-screenshots',
        severity: 'P0',
        message: 'Fake screenshot divs detected. Use real images or image generation tools.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkRealImagery(content) {
  const issues = [];
  
  // Check if there are any images at all
  const imagePatterns = [
    /<img/gi,
    /Image.*src/gi,
    /background-image/gi,
    /url\(.*\.(jpg|jpeg|png|gif|webp|svg)/gi
  ];
  
  const imageCount = imagePatterns.reduce((sum, pattern) => 
    sum + countOccurrences(content, pattern.source), 0
  );
  
  // Check for placeholder slots
  const placeholderSlots = countOccurrences(content, /<!--\s*TODO.*image/gi);
  
  if (imageCount === 0 && placeholderSlots === 0) {
    issues.push({
      rule: 'real-imagery',
      severity: 'P0',
      message: 'No images detected. Use real images or labeled placeholder slots (<!-- TODO: ... -->).',
      lines: []
    });
  }
  
  return issues;
}

// ============================================================================
// P1 CHECKS (Need Justification)
// ============================================================================

function checkAccentColorLock(content) {
  const issues = [];
  
  // Look for multiple accent colors
  const accentPatterns = [
    /accent/gi,
    /primary/gi,
    /highlight/gi
  ];
  
  const accentColors = new Set();
  accentPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    matches.forEach(match => {
      // This is simplified - would need CSS parsing for full validation
      const colorMatch = match.content.match(/#[0-9a-f]{3,6}|rgb\(|hsl\(/gi);
      if (colorMatch) {
        colorMatch.forEach(color => accentColors.add(color));
      }
    });
  });
  
  if (accentColors.size > 1) {
    issues.push({
      rule: 'accent-color-lock',
      severity: 'P1',
      message: `Multiple accent colors detected (${accentColors.size}). Lock one accent color across the page.`,
      lines: []
    });
  }
  
  return issues;
}

function checkRadiusConsistency(content) {
  const issues = [];
  
  // Look for mixed radius values
  const radiusPatterns = [
    /rounded-sm/gi,
    /rounded-md/gi,
    /rounded-lg/gi,
    /rounded-xl/gi,
    /rounded-2xl/gi,
    /rounded-full/gi,
    /rounded-none/gi
  ];
  
  const radiusValues = new Set();
  radiusPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      radiusValues.add(pattern.source.replace(/\\/g, ''));
    }
  });
  
  if (radiusValues.size > 3) {
    issues.push({
      rule: 'radius-consistency',
      severity: 'P1',
      message: `Multiple radius values detected (${radiusValues.size}). Pick one radius system and stick to it.`,
      lines: []
    });
  }
  
  return issues;
}

function checkWarmBeigeJustification(content) {
  const issues = [];
  
  const warmBeigePatterns = [
    /#f5f1ea/gi,
    /#f7f5f1/gi,
    /#fbf8f1/gi,
    /#efeae0/gi,
    /#ece6db/gi,
    /#faf7f1/gi,
    /#e8dfcb/gi
  ];
  
  warmBeigePatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'warm-beige-justification',
        severity: 'P1',
        message: 'Warm beige/cream palette detected. This is banned as default for premium-consumer briefs. Justify with brand brief or use alternative palette.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkMotionMotivated(content) {
  const issues = [];
  
  // Look for animations without clear purpose
  const animationPatterns = [
    /animation.*infinite/gi,
    /animate.*loop/gi,
    /marquee/gi,
    /scroll.*hijack/gi
  ];
  
  animationPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'motion-motivated',
        severity: 'P1',
        message: 'Motion detected. Ensure each animation communicates hierarchy, storytelling, feedback, or state transition.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkMarqueeMaxOne(content) {
  const issues = [];
  
  const marqueeCount = countOccurrences(content, /marquee/gi);
  
  if (marqueeCount > 1) {
    issues.push({
      rule: 'marquee-max-one',
      severity: 'P1',
      message: `Multiple marquees detected (${marqueeCount}). Max 1 marquee per page.`,
      lines: []
    });
  }
  
  return issues;
}

function checkSplitHeaderJustification(content) {
  const issues = [];
  
  // Look for split header patterns
  const splitPatterns = [
    /col-span-7.*col-span-5/gi,
    /col-span-8.*col-span-4/gi,
    /grid-cols-.*7.*5/gi,
    /grid-cols-.*8.*4/gi
  ];
  
  splitPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'split-header-justification',
        severity: 'P1',
        message: 'Split header pattern detected. This is banned as default. Stack vertically unless there\'s a real compositional reason.',
        lines: matches
      });
    }
  });
  
  return issues;
}

function checkCopyRegisterConsistency(content) {
  const issues = [];
  
  // Look for mixed copy registers
  const technicalPatterns = [
    /\d+\.\d+.*ctx/gi,
    /tasks.*\d+/gi,
    /\d+.*switches/gi
  ];
  
  const editorialPatterns = [
    /elegant/gi,
    /beautiful/gi,
    /craft/gi,
    /artisan/gi
  ];
  
  const hasTechnical = technicalPatterns.some(pattern => 
    countOccurrences(content, pattern.source) > 0
  );
  
  const hasEditorial = editorialPatterns.some(pattern => 
    countOccurrences(content, pattern.source) > 0
  );
  
  if (hasTechnical && hasEditorial) {
    issues.push({
      rule: 'copy-register-consistency',
      severity: 'P1',
      message: 'Mixed copy registers detected (technical + editorial). Use one copy register per page.',
      lines: []
    });
  }
  
  return issues;
}

function checkFakePreciseNumbers(content) {
  const issues = [];
  
  // Look for fake precise numbers
  const fakeNumberPatterns = [
    /\d+\.\d+×/gi,
    /\d+%/gi,
    /\d+k/gi,
    /\d+\.\d+\s*mm/gi,
    /\d+\.\d+\s*lb/gi
  ];
  
  fakeNumberPatterns.forEach(pattern => {
    const matches = findLinesWithPattern(content, pattern.source);
    if (matches.length > 0) {
      issues.push({
        rule: 'fake-precise-numbers',
        severity: 'P1',
        message: 'Potentially fake precise numbers detected. Ensure numbers come from real data or are labeled as mock.',
        lines: matches
      });
    }
  });
  
  return issues;
}

// ============================================================================
// MAIN LINTING FUNCTION
// ============================================================================

function lintFile(filePath) {
  const content = readFile(filePath);
  if (!content) return { p0: [], p1: [] };
  
  const p0Issues = [];
  const p1Issues = [];
  
  // Run P0 checks
  p0Issues.push(...checkHeroFitsViewport(content));
  p0Issues.push(...checkNavigationSingleLine(content));
  p0Issues.push(...checkNoDuplicateCta(content));
  p0Issues.push(...checkBentoCellCount(content));
  p0Issues.push(...checkEyebrowRestraint(content));
  p0Issues.push(...checkZigzagCap(content));
  p0Issues.push(...checkButtonTextWrap(content));
  p0Issues.push(...checkButtonContrast(content));
  p0Issues.push(...checkFormContrast(content));
  p0Issues.push(...checkNoPlaceholderDivs(content));
  p0Issues.push(...checkNoLoremIpsum(content));
  p0Issues.push(...checkNoAiPurpleGradient(content));
  p0Issues.push(...checkNoInterDefault(content));
  p0Issues.push(...checkNoSerifDefault(content));
  p0Issues.push(...checkNoFraunces(content));
  p0Issues.push(...checkNoInstrumentSerif(content));
  p0Issues.push(...checkPrefersReducedMotion(content));
  p0Issues.push(...checkWcagContrast(content));
  p0Issues.push(...checkNoFakeScreenshots(content));
  p0Issues.push(...checkRealImagery(content));
  
  // Run P1 checks
  p1Issues.push(...checkAccentColorLock(content));
  p1Issues.push(...checkRadiusConsistency(content));
  p1Issues.push(...checkWarmBeigeJustification(content));
  p1Issues.push(...checkMotionMotivated(content));
  p1Issues.push(...checkMarqueeMaxOne(content));
  p1Issues.push(...checkSplitHeaderJustification(content));
  p1Issues.push(...checkCopyRegisterConsistency(content));
  p1Issues.push(...checkFakePreciseNumbers(content));
  
  return { p0: p0Issues, p1: p1Issues };
}

// ============================================================================
// REPORT GENERATION
// ============================================================================

function generateReport(results) {
  const totalP0 = results.reduce((sum, { p0 }) => sum + p0.length, 0);
  const totalP1 = results.reduce((sum, { p1 }) => sum + p1.length, 0);
  
  console.log('\n' + '='.repeat(80));
  console.log('DESIGN STUDIO LINT REPORT');
  console.log('='.repeat(80));
  
  if (totalP0 === 0 && totalP1 === 0) {
    console.log('\n✅ ALL CHECKS PASSED');
    console.log('No P0 or P1 violations found.');
    return 0;
  }
  
  if (totalP0 > 0) {
    console.log(`\n❌ P0 VIOLATIONS FOUND: ${totalP0}`);
    console.log('Ship blocked. Fix all P0 issues before shipping.');
    
    results.forEach(({ file, p0 }) => {
      if (p0.length > 0) {
        console.log(`\n📁 ${file}:`);
        p0.forEach(issue => {
          console.log(`  ❌ [P0] ${issue.rule}`);
          console.log(`     ${issue.message}`);
          if (issue.lines.length > 0) {
            console.log(`     Lines: ${issue.lines.map(l => l.line).join(', ')}`);
          }
        });
      }
    });
  }
  
  if (totalP1 > 0) {
    console.log(`\n⚠️  P1 VIOLATIONS FOUND: ${totalP1}`);
    console.log('Fix or justify each P1 issue.');
    
    results.forEach(({ file, p1 }) => {
      if (p1.length > 0) {
        console.log(`\n📁 ${file}:`);
        p1.forEach(issue => {
          console.log(`  ⚠️  [P1] ${issue.rule}`);
          console.log(`     ${issue.message}`);
          if (issue.lines.length > 0) {
            console.log(`     Lines: ${issue.lines.map(l => l.line).join(', ')}`);
          }
        });
      }
    });
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('SUMMARY');
  console.log('='.repeat(80));
  console.log(`P0 violations: ${totalP0}`);
  console.log(`P1 violations: ${totalP1}`);
  console.log(`Status: ${totalP0 > 0 ? 'BLOCKED' : 'NEEDS JUSTIFICATION'}`);
  console.log('='.repeat(80) + '\n');
  
  return totalP0 > 0 ? 1 : 2;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node scripts/design-lint.mjs <files...>');
    console.log('\nExample:');
    console.log('  node scripts/design-lint.mjs src/**/*.tsx src/**/*.css');
    process.exit(0);
  }
  
  const results = [];
  
  args.forEach(arg => {
    // Handle glob patterns
    if (arg.includes('*')) {
      // Simple glob handling - would need proper glob library in production
      console.log(`Note: Glob patterns not fully supported. Processing ${arg} as literal.`);
    }
    
    const filePath = path.resolve(arg);
    const result = lintFile(filePath);
    results.push({ file: arg, ...result });
  });
  
  const exitCode = generateReport(results);
  process.exit(exitCode);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { lintFile, generateReport };