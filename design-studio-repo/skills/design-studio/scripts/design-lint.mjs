#!/usr/bin/env node
// design-lint.mjs - mechanical enforcement for Design Studio (universal-design-studio)
// Zero dependencies. Node 18+.
// Usage:
//   node scripts/design-lint.mjs <file-or-dir> [...more]
//   node scripts/design-lint.mjs src public/index.html
// Exit code 1 when any P0 finding exists. Fix P0s before shipping; justify or fix P1s.

import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const EXTS = new Set([".html", ".htm", ".jsx", ".tsx", ".vue", ".svelte", ".astro", ".mdx", ".css"]);

function collect(paths) {
  const files = [];
  const walk = (p) => {
    let st;
    try { st = statSync(p); } catch { console.error(`skip (not found): ${p}`); return; }
    if (st.isDirectory()) {
      for (const e of readdirSync(p)) {
        if (["node_modules", ".git", "dist", "build", ".next"].includes(e)) continue;
        walk(join(p, e));
      }
    } else if (EXTS.has(extname(p))) files.push(p);
  };
  paths.forEach(walk);
  return files;
}

function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index; i++) if (text[i] === "\n") line++;
  return line;
}

function add(findings, sev, rule, file, idx, text, hint) {
  findings.push({ sev, rule, file, line: lineOf(text, idx), hint });
}

const RULES = [
  // ---- P0: broken work ----
  { sev: "P0", id: "em-dash", re: /[—–]/g,
    hint: "em/en dash banned in display copy; use period, comma, colon, or hyphen" },
  { sev: "P0", id: "h-screen", re: /\bh-screen\b/g,
    hint: "use min-h-[100dvh] / min-height:100dvh for viewport-safe full height" },
  { sev: "P0", id: "scroll-listener", re: /addEventListener\(\s*['"`]scroll/g,
    hint: "scroll listeners banned: use IntersectionObserver, Motion useScroll, GSAP ScrollTrigger, or CSS scroll-driven animations" },
  { sev: "P0", id: "dead-image-host", re: /source\.unsplash\.com/g,
    hint: "source.unsplash.com is dead; generated image > brand asset > licensed stock URL > labeled slot" },
  // P0 handled specially: <img> without alt (see below)

  // ---- P1: fix or justify ----
  { sev: "P1", id: "font-cdn-link", re: /fonts\.(googleapis|gstatic)\.com/g,
    hint: "production web should self-host/next-font with swap+subset (CDN ok only in single-file M2 mode)" },
  { sev: "P1", id: "lucide-icons", re: /from\s+['"]lucide-react['"]/g,
    hint: "icon policy: Phosphor/Tabler/HugeIcons/Radix preferred; keep only if project standard, one family total" },
  { sev: "P1", id: "uncontrolled-image", re: /picsum\.photos|loremflickr|placehold\.co|via\.placeholder\.com/g,
    hint: "content-uncontrolled image URL; use generation/brand/licensed assets or a labeled TODO slot" },
];

function lintFile(file) {
  const text = readFileSync(file, "utf8");
  const findings = [];

  for (const r of RULES) {
    r.re.lastIndex = 0;
    let m, count = 0;
    while ((m = r.re.exec(text)) && count < 5) { add(findings, r.sev, r.id, file, m.index, text, r.hint); count++; }
    if (count === 5) findings.push({ sev: r.sev, rule: r.id + " (+more)", file, line: "-", hint: "more occurrences; fix all" });
  }

  // P0: img without alt
  const imgRe = /<img\b[^>]*>/gi;
  let m;
  while ((m = imgRe.exec(text))) if (!/\balt\s*=/.test(m[0]))
    add(findings, "P0", "img-missing-alt", file, m.index, text, "every <img> needs alt (meaningful text or alt=\"\" if decorative)");

  // P1: eyebrow ratio (uppercase micro-labels vs sections)
  const eyebrows = (text.match(/uppercase[^\n<>]{0,60}?tracking|tracking[^\n<>]{0,60}?uppercase/g) || []).length;
  const sections = Math.max(1, (text.match(/<section[\s>]/gi) || []).length);
  if (eyebrows > Math.ceil(sections / 3))
    findings.push({ sev: "P1", rule: "eyebrow-budget", file, line: "-",
      hint: `${eyebrows} uppercase micro-labels across ${sections} section(s); budget is ceil(sections/3) = ${Math.ceil(sections / 3)}` });

  // P1: marquee count (>1 per file/page)
  const marquees = (text.match(/marquee/gi) || []).length;
  if (marquees > 2)
    findings.push({ sev: "P1", rule: "marquee-max-one", file, line: "-",
      hint: `${marquees} 'marquee' references; max one marquee per page, and it must pause on hover/focus` });

  // P1: hairline on every row
  const borderB = (text.match(/\bborder-b\b/g) || []).length;
  if (borderB > 8)
    findings.push({ sev: "P1", rule: "hairline-every-row", file, line: "-",
      hint: `${borderB} border-b rows; group into chunks/cards with sparse dividers instead` });

  // P1: multiple h1
  const h1s = (text.match(/<h1[\s>]/gi) || []).length;
  if (h1s > 1)
    findings.push({ sev: "P1", rule: "multiple-h1", file, line: "-", hint: `${h1s} h1 elements; exactly one per page` });

  // P1: three equal cards suspicion
  if (/md:grid-cols-3|lg:grid-cols-3/.test(text) && /text-center/.test(text))
    findings.push({ sev: "P1", rule: "three-equal-cards?", file, line: "-",
      hint: "3-col centered grid detected; verify it is not the banned three-identical-cards pattern" });

  // P2: pure colors
  const pureBlack = (text.match(/#000000|#000\b/g) || []).length;
  const pureWhite = (text.match(/#ffffff|#fff\b/gi) || []).length;
  if (pureBlack >= 2 || pureWhite >= 2)
    findings.push({ sev: "P2", rule: "pure-black-white", file, line: "-",
      hint: "use off-black (zinc-950 class) and off-white surfaces; pure values kill depth" });

  // P2: z-index spam
  const zArbitrary = (text.match(/\bz-\[|zIndex\s*[:=]\s*["']?\d{2,}/g) || []).length;
  if (zArbitrary > 3)
    findings.push({ sev: "P2", rule: "z-index-spam", file, line: "-",
      hint: `${zArbitrary} arbitrary z values; define named layers (base/sticky/overlay/modal/toast)` });

  return findings;
}

const args = process.argv.slice(2);
if (!args.length) {
  console.log("usage: node design-lint.mjs <file-or-dir> [...more]");
  process.exit(2);
}

const files = collect(args);
const all = files.flatMap(lintFile);
const order = { P0: 0, P1: 1, P2: 2 };
all.sort((a, b) => order[a.sev] - order[b.sev]);

if (!all.length) {
  console.log(`design-lint: clean (${files.length} file(s) scanned)`);
  process.exit(0);
}

for (const f of all) {
  console.log(`${f.sev}  ${f.file}:${f.line}  [${f.rule}]  ${f.hint}`);
}
const counts = all.reduce((a, f) => ((a[f.sev] = (a[f.sev] || 0) + 1), a), {});
console.log(`\ndesign-lint: ${all.length} finding(s) | P0=${counts.P0 || 0} P1=${counts.P1 || 0} P2=${counts.P2 || 0} | ${files.length} file(s)`);
process.exit(counts.P0 ? 1 : 0);
