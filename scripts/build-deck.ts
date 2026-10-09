/**
 * Builds the PowerPoint pitch deck. Run: npm run deck:pptx
 * Copy lives in src/content/pitch.ts. Ten slides, one idea each.
 */
import { createRequire } from "node:module";
import path from "node:path";
import { site } from "../src/content/site.ts";
import { offerings, formatUsd } from "../src/content/offerings.ts";
import { metrics } from "../src/content/metrics.ts";
import { caseStudies } from "../src/content/case-studies.ts";
import { pitch } from "../src/content/pitch.ts";

const require = createRequire(import.meta.url);
const pptxgen = require("pptxgenjs");
const { applyTheme } = require(
  "/Users/jordan/.claude/skills/synced/4646ab79-452a-48ad-bd41-5b8ada98af45_d6e143fb-532d-4566-87f3-cf93317bc29a/pptx/scripts/apply_theme.js",
);

const OUT = path.resolve("docs/deck/AI-Training-For-Companies.pptx");
const INK = "161616";
const MUTED = "595959";
const LIGHT = "E2E2E2";
const PAPER = "FFFFFF";
const TINT = "F4F4F4";
const MONO = "Courier New";

const THEME = {
  name: "AI Training For Companies",
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  colors: {
    dk1: INK, lt1: PAPER, dk2: MUTED, lt2: TINT,
    accent1: INK, accent2: MUTED, accent3: "8A8A8A", accent4: "B5B5B5", accent5: "D9D9D9", accent6: LIGHT,
    hlink: INK, folHlink: MUTED,
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625
pres.theme = { headFontFace: "Arial", bodyFontFace: "Arial" };
pres.title = `${site.name} pitch`;
pres.author = site.founder.name;
const C = pres.SchemeColor;

const W = 10, H = 5.625, M = 0.6, CW = W - 2 * M;
const footerUrl = site.url.replace("https://", "");

pres.defineSlideMaster({
  title: "DARK",
  background: { color: INK },
  objects: [
    { text: { text: site.name, options: { x: M, y: H - 0.5, w: 5, h: 0.25, fontFace: MONO, fontSize: 9, color: "B5B5B5", margin: 0 } } },
  ],
});
pres.defineSlideMaster({
  title: "LIGHT",
  background: { color: PAPER },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: M, y: 0.55, w: CW, h: 0.9, fontSize: 28, bold: true, color: INK, margin: 0, valign: "top" }, text: "" } },
    { text: { text: site.name, options: { x: M, y: H - 0.5, w: 5, h: 0.25, fontFace: MONO, fontSize: 9, color: MUTED, margin: 0 } } },
    { text: { text: footerUrl, options: { x: W - M - 4, y: H - 0.5, w: 4, h: 0.25, fontFace: MONO, fontSize: 9, color: MUTED, align: "right", margin: 0 } } },
  ],
});

type Opts = Record<string, unknown>;
function text(slide: any, str: string, o: Opts) {
  slide.addText(str, { isTextBox: true, margin: 0, color: C.text1, valign: "top", ...o });
}
function label(slide: any, str: string, x: number, y: number, w: number) {
  text(slide, str.toUpperCase(), { x, y, w, h: 0.22, fontFace: MONO, fontSize: 8, color: C.text2, charSpacing: 2 });
}
function rule(slide: any, x: number, y: number, w: number, dark = false) {
  slide.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: dark ? INK : LIGHT, width: dark ? 1 : 0.75 } });
}
function lines(slide: any, items: string[], x: number, y: number, w: number, rowH: number, fontSize: number) {
  items.forEach((it, i) => {
    const yy = y + i * rowH;
    rule(slide, x, yy, w, i === 0);
    text(slide, String(i + 1).padStart(2, "0"), { x, y: yy + 0.12, w: 0.4, h: rowH - 0.15, fontFace: MONO, fontSize: 9, color: C.text2 });
    text(slide, it, { x: x + 0.5, y: yy + 0.1, w: w - 0.5, h: rowH - 0.15, fontSize });
  });
  rule(slide, x, y + items.length * rowH, w);
}
function light(section: string, title: string) {
  pres.addSection({ title: section });
  const s = pres.addSlide({ masterName: "LIGHT", sectionTitle: section });
  s.addText(title, { placeholder: "title" });
  return s;
}

// 1. Title
{
  pres.addSection({ title: "Open" });
  const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Open" });
  s.addImage({ path: path.resolve("public/images/hero-windansea-ldx3.jpg"), x: 6.2, y: 0, w: 3.8, h: H, sizing: { type: "cover", w: 3.8, h: H } });
  text(s, site.tagline, { x: M, y: 1.5, w: 5.2, h: 2.0, fontSize: 36, bold: true, color: PAPER });
  text(s, "One day at your office. Three days over Zoom. Eight weeks to production.", { x: M, y: 3.6, w: 5.2, h: 0.5, fontFace: MONO, fontSize: 11, color: "B5B5B5" });
}

// 2. Problem
{
  const s = light("Problem", pitch.problemHeading);
  pitch.problem.forEach((p, i) => {
    text(s, p, { x: M, y: 1.75 + i * 0.95, w: CW, h: 0.8, fontSize: 24, color: i === 2 ? C.text1 : C.text2 });
  });
}

// 3. Fix
{
  const s = light("Fix", pitch.fixHeading);
  lines(s, pitch.fix, M, 1.75, CW, 0.85, 16);
}

// 4. Offerings
{
  const s = light("Offerings", pitch.offeringsHeading);
  text(s, pitch.offeringsSub, { x: M, y: 1.4, w: CW, h: 0.4, fontSize: 14, color: C.text2 });
  const gap = 0.2, cw = (CW - 2 * gap) / 3, y = 2.0, ch = 2.9;
  offerings.forEach((o, i) => {
    const x = M + i * (cw + gap);
    s.addShape(pres.ShapeType.rect, { x, y, w: cw, h: ch, fill: { color: TINT }, line: { color: TINT, width: 0 } });
    text(s, o.duration.toUpperCase(), { x: x + 0.25, y: y + 0.25, w: cw - 0.5, h: 0.22, fontFace: MONO, fontSize: 8, color: C.text2, charSpacing: 1 });
    text(s, o.name, { x: x + 0.25, y: y + 0.55, w: cw - 0.5, h: 0.4, fontSize: 16, bold: true });
    text(s, o.format, { x: x + 0.25, y: y + 0.95, w: cw - 0.5, h: 0.3, fontFace: MONO, fontSize: 9, color: C.text2 });
    text(s, o.outcome, { x: x + 0.25, y: y + 1.35, w: cw - 0.5, h: 1.1, fontSize: 11 });
    text(s, formatUsd(o.priceUsd), { x: x + 0.25, y: y + ch - 0.55, w: cw - 0.5, h: 0.4, fontFace: MONO, fontSize: 18 });
  });
}

// 5. Outcomes
{
  const s = light("Outcomes", pitch.outcomesHeading);
  lines(s, pitch.outcomes, M, 1.7, CW, 0.6, 14);
}

// 6. Proof
{
  const s = light("Proof", pitch.proofHeading);
  const gap = 0.15, mw = (CW - 3 * gap) / 4;
  metrics.forEach((m, i) => {
    const x = M + i * (mw + gap);
    s.addShape(pres.ShapeType.rect, { x, y: 1.7, w: mw, h: 1.5, fill: { color: TINT }, line: { color: TINT, width: 0 } });
    text(s, m.value, { x: x + 0.2, y: 1.9, w: mw - 0.4, h: 0.6, fontFace: MONO, fontSize: 28 });
    text(s, m.label, { x: x + 0.2, y: 2.55, w: mw - 0.4, h: 0.6, fontFace: MONO, fontSize: 8, color: C.text2 });
  });
  label(s, "Clients", M, 3.55, CW);
  text(s, caseStudies.map((c) => c.company).join("   ·   "), { x: M, y: 3.85, w: CW, h: 0.4, fontSize: 14, bold: true });
}

// 7 to 9. Cases
pitch.cases.forEach((c, i) => {
  const s = light(`Case ${i + 1}`, c.title);
  label(s, c.company, M, 0.3, CW);
  const rows: [string, string][] = [["Problem", c.problem], ["What we built", c.built], ["Result", c.result]];
  rows.forEach(([k, v], j) => {
    const y = 1.75 + j * 1.0;
    rule(s, M, y, CW, j === 0);
    label(s, k, M, y + 0.15, 2);
    text(s, v, { x: M + 2.2, y: y + 0.12, w: CW - 2.2, h: 0.8, fontSize: 15 });
  });
  rule(s, M, 1.75 + rows.length * 1.0, CW);
});

// 10. Price + next step
{
  pres.addSection({ title: "Close" });
  const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Close" });
  text(s, pitch.priceHeading, { x: M, y: 0.6, w: CW, h: 0.6, fontSize: 22, bold: true, color: PAPER });
  const cw = (CW - 2 * 0.2) / 3;
  offerings.forEach((o, i) => {
    const x = M + i * (cw + 0.2);
    text(s, o.name, { x, y: 1.4, w: cw, h: 0.35, fontSize: 13, bold: true, color: PAPER });
    text(s, `${o.duration} · ${o.format}`, { x, y: 1.75, w: cw, h: 0.45, fontFace: MONO, fontSize: 8, color: "B5B5B5" });
    text(s, formatUsd(o.priceUsd), { x, y: 2.3, w: cw, h: 0.6, fontFace: MONO, fontSize: 28, color: PAPER });
  });
  s.addShape(pres.ShapeType.line, { x: M, y: 3.3, w: CW, h: 0, line: { color: MUTED, width: 0.75 } });
  text(s, pitch.next, { x: M, y: 3.5, w: 5.6, h: 0.8, fontSize: 16, color: PAPER });
  text(s, site.contact.email, { x: M, y: 4.4, w: 5, h: 0.3, fontFace: MONO, fontSize: 12, color: PAPER });
  text(s, footerUrl, { x: 5.0, y: 4.4, w: 4.4, h: 0.3, fontFace: MONO, fontSize: 12, color: "B5B5B5", align: "right" });
}

await pres.writeFile({ fileName: OUT });
await applyTheme(OUT, THEME);
console.log(`wrote ${OUT} (10 slides)`);
