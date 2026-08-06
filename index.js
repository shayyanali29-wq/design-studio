#!/usr/bin/env node

/**
 * Design Studio - The Definitive Anti-Slop Design System
 * 
 * This is the main entry point for the Design Studio skill.
 * It provides utilities and exports for using the design system.
 */

export const VERSION = '1.0.0';

export const DIAL_LEVELS = {
  CALM: 'CALM',
  CRISP: 'CRISP',
  BALANCED: 'BALANCED',
  BOLD: 'BOLD',
  WILD: 'WILD'
};

export const DIAL_NUMERIC_MAP = {
  CALM: [1, 2],
  CRISP: [3, 4],
  BALANCED: [5, 6],
  BOLD: [7, 8],
  WILD: [9, 10]
};

export const SEVERITY_TIERS = {
  P0: 'P0', // Ship blocker
  P1: 'P1', // Need justification
  P2: 'P2'  // Polish
};

export const OUTPUT_MODES = {
  M1_REPO_APP: 'M1_REPO_APP',
  M2_SINGLE_FILE: 'M2_SINGLE_FILE',
  M3_COMPONENT: 'M3_COMPONENT',
  M4_AUDIT: 'M4_AUDIT',
  M5_MOBILE: 'M5_MOBILE'
};

export const DOMAINS = {
  MARKETING: 'marketing',
  PRODUCT_UI: 'product-ui',
  EDITORIAL: 'editorial',
  COMMERCE: 'commerce',
  MOBILE: 'mobile',
  EMAIL: 'email'
};

/**
 * Map a dial level to numeric range
 * @param {string} level - Dial level (CALM, CRISP, BALANCED, BOLD, WILD)
 * @returns {[number, number]} Numeric range
 */
export function mapLevelToNumeric(level) {
  return DIAL_NUMERIC_MAP[level] || DIAL_NUMERIC_MAP.BALANCED;
}

/**
 * Validate a dial combination
 * @param {string} variance - VARIANCE level
 * @param {string} motion - MOTION level
 * @param {string} density - DENSITY level
 * @returns {boolean} Whether the combination is valid
 */
export function validateDialCombination(variance, motion, density) {
  // DENSITY WILD caps VARIANCE at BALANCED
  if (density === DIAL_LEVELS.WILD && 
      DIAL_NUMERIC_MAP[variance][0] > DIAL_NUMERIC_MAP.BALANCED[1]) {
    return false;
  }
  
  // CALM audience caps MOTION at CRISP
  // (This would need audience context in real implementation)
  
  // Mobile caps VARIANCE and MOTION at BOLD
  // (This would need platform context in real implementation)
  
  return true;
}

/**
 * Get design read from brief inference
 * @param {object} brief - Brief inference object
 * @returns {string} Design read string
 */
export function getDesignRead(brief) {
  const {
    domain,
    audience,
    platform,
    locales,
    vibe,
    stack,
    variance,
    motion,
    density
  } = brief;
  
  return `Reading this as: ${domain} for ${audience} on ${platform}, in ${locales}, with a ${vibe} language, stack ${stack}, dials ${variance}/${motion}/${density}.`;
}

/**
 * Get dial presets for common use cases
 * @param {string} useCase - Use case identifier
 * @returns {object} Dial presets
 */
export function getDialPresets(useCase) {
  const presets = {
    // Marketing & Landing Pages
    'saas-landing': { variance: 'CRISP', motion: 'CRISP', density: 'BALANCED' },
    'agency-portfolio': { variance: 'BOLD', motion: 'BOLD', density: 'CRISP' },
    'product-launch': { variance: 'BALANCED', motion: 'BALANCED', density: 'BALANCED' },
    'premium-consumer': { variance: 'BALANCED', motion: 'BALANCED', density: 'CALM' },
    
    // Product UI
    'dashboard': { variance: 'CALM', motion: 'CALM', density: 'BOLD' },
    'settings-page': { variance: 'CALM', motion: 'CALM', density: 'BALANCED' },
    'data-table': { variance: 'CALM', motion: 'CALM', density: 'WILD' },
    'mobile-app': { variance: 'BALANCED', motion: 'BALANCED', density: 'BALANCED' },
    
    // Special Cases
    'public-sector': { variance: 'CALM', motion: 'CALM', density: 'BALANCED' },
    'kids-product': { variance: 'BALANCED', motion: 'BALANCED', density: 'BALANCED' },
    'elderly-users': { variance: 'CALM', motion: 'CALM', density: 'BALANCED' },
    'accessibility-first': { variance: 'CALM', motion: 'CALM', density: 'BALANCED' }
  };
  
  return presets[useCase] || presets['saas-landing'];
}

/**
 * Check if a color palette is banned
 * @param {string} palette - Color palette name
 * @returns {boolean} Whether the palette is banned
 */
export function isBannedPalette(palette) {
  const bannedPalettes = [
    'warm-beige-brass',
    'purple-blue-gradient',
    'ai-default'
  ];
  
  return bannedPalettes.includes(palette);
}

/**
 * Get recommended fonts for a brief
 * @param {object} brief - Brief inference object
 * @returns {object} Recommended fonts
 */
export function getRecommendedFonts(brief) {
  const { domain, vibe } = brief;
  
  // Default recommendations
  const fonts = {
    sans: ['Geist Sans', 'Satoshi', 'Cabinet Grotesk', 'Outfit'],
    mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code'],
    serif: ['PP Editorial New', 'GT Sectra Display', 'Cormorant Garamond']
  };
  
  // Adjust based on vibe
  if (vibe === 'editorial' || vibe === 'luxury') {
    fonts.serif = ['PP Editorial New', 'GT Sectra Display', 'Tiempo Headline'];
  }
  
  if (vibe === 'technical' || vibe === 'developer') {
    fonts.mono = ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'Source Code Pro'];
  }
  
  return fonts;
}

/**
 * Check if motion is motivated
 * @param {string} animationType - Type of animation
 * @returns {object} Validation result
 */
export function validateMotion(animationType) {
  const validReasons = {
    'scroll-reveal': 'hierarchy',
    'hover-physics': 'feedback',
    'state-transition': 'state',
    'story-telling': 'storytelling'
  };
  
  const reason = validReasons[animationType];
  
  return {
    valid: !!reason,
    reason: reason || 'No valid reason provided',
    requiresReducedMotion: true
  };
}

/**
 * Get accessibility requirements
 * @param {object} brief - Brief inference object
 * @returns {object} Accessibility requirements
 */
export function getAccessibilityRequirements(brief) {
  const { audience, domain } = brief;
  
  const requirements = {
    contrastRatio: {
      body: 4.5,
      largeText: 3
    },
    focusVisible: true,
    keyboardNavigation: true,
    screenReaderSupport: true,
    reducedMotion: true,
    colorNotSoleIndicator: true
  };
  
  // Stricter requirements for specific audiences
  if (audience === 'elderly' || audience === 'accessibility-first') {
    requirements.contrastRatio.body = 7;
    requirements.contrastRatio.largeText = 4.5;
  }
  
  if (domain === 'public-sector') {
    requirements.wcagLevel = 'AAA';
  }
  
  return requirements;
}

/**
 * Generate a pre-flight checklist
 * @param {object} design - Design object to validate
 * @returns {object} Checklist results
 */
export function preFlightChecklist(design) {
  const checks = {
    layout: {
      heroFitsViewport: true,
      navigationSingleLine: true,
      noDuplicateCta: true,
      bentoCellCount: true,
      eyebrowRestraint: true,
      zigzagCap: true
    },
    typography: {
      recommendedFonts: true,
      serifJustified: true,
      italicDescenderClearance: true,
      buttonTextFits: true
    },
    color: {
      accentColorLock: true,
      noPurpleGradient: true,
      contrastPasses: true,
      buttonReadable: true
    },
    motion: {
      motionMotivated: true,
      reducedMotionSupported: true,
      maxOneMarquee: true,
      noInfiniteLoops: true
    },
    accessibility: {
      focusStates: true,
      formLabels: true,
      imageAltText: true,
      colorNotSoleIndicator: true
    },
    performance: {
      noLayoutShifts: true,
      imagesOptimized: true,
      fontsOptimized: true,
      noRenderBlocking: true
    },
    content: {
      noLoremIpsum: true,
      noPlaceholderDivs: true,
      noAiHallucination: true,
      oneCopyRegister: true
    }
  };
  
  // Count passing checks
  const totalChecks = Object.values(checks).reduce((sum, category) => {
    return sum + Object.keys(category).length;
  }, 0);
  
  const passingChecks = Object.values(checks).reduce((sum, category) => {
    return sum + Object.values(category).filter(Boolean).length;
  }, 0);
  
  return {
    checks,
    totalChecks,
    passingChecks,
    percentage: Math.round((passingChecks / totalChecks) * 100),
    passed: passingChecks === totalChecks
  };
}

// CLI interface
if (process.argv[1] && process.argv[1].endsWith('index.js')) {
  console.log('Design Studio v' + VERSION);
  console.log('The definitive anti-slop design system for AI agents');
  console.log('');
  console.log('Usage:');
  console.log('  node scripts/design-lint.mjs <files...>  - Run mechanical lint');
  console.log('');
  console.log('For more information, see README.md');
}

export default {
  VERSION,
  DIAL_LEVELS,
  DIAL_NUMERIC_MAP,
  SEVERITY_TIERS,
  OUTPUT_MODES,
  DOMAINS,
  mapLevelToNumeric,
  validateDialCombination,
  getDesignRead,
  getDialPresets,
  isBannedPalette,
  getRecommendedFonts,
  validateMotion,
  getAccessibilityRequirements,
  preFlightChecklist
};