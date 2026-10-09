/**
 * Builds the PowerPoint version of the deck from the same content files the
 * site uses. Run: npm run deck:pptx
 */
import { createRequire } from "node:module";
import path from "node:path";
import { site } from "../src/content/site.ts";
import { deck } from "../src/content/deck.ts";
import { caseStudies, getCaseStudy } from "../src/content/case-studies.ts";
import { program } from "../src/content/program.ts";
import { metrics } from "../src/content/metrics.ts";

const require = createRequire(import.meta.url);
const pptxgen = require("pptxgenjs");
const { applyTheme } = require(
  "/Users/jordan/.claude/skills/synced/4646ab79-452a-48ad-bd41-5b8ada98af45_d6e143fb-532d-4566-87f3-cf93317bc29a/pptx/scripts/apply_theme.js",
);

const OUT = path.resolve("docs/deck/AI-Training-For-Companies.pptx");

const THEME = {
  name: "AI Training For Companies",
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  colors: {
    dk1: "161616",
    lt1: "FFFFFF",
    dk2: "595959",
    lt2: "F4F4F4",
    accent1: "161616",
    accent2: "595959",
    accent3: "8A8A8A",
    accent4: "B5B5B5",
    accent5: "D9D9D9",
    accent6: "E2E2E2",
    hlink: "161616",
    folHlink: "595959",
  },
};
const MONO = "Courier New";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = `${site.name} deck`;
pres.author = site.founder.name;
const C = pres.SchemeColor;

const W = 10;
const H = 5.625;
const M = 0.5; // margin
const CW = W - 2 * M; // content width
const TITLE_Y = 0.45;
const BODY_Y = 1.45;
const BODY_H = H - BODY_Y - 0.65;
const footerUrl = site.url.replace("https://", "");

// ---------- layouts ----------
pres.defineSlideMaster({
  title: "DARK",
  background: { color: THEME.colors.dk1 },
  objects: [
    {
      text: {
        text: site.name,
        options: { x: M, y: H - 0.5, w: 5, h: 0.25, fontFace: MONO, fontSize: 9, color: THEME.colors.accent4, margin: 0 },
      },
    },
    {
      text: {
        text: footerUrl,
        options: { x: W - M - 4, y: H - 0.5, w: 4, h: 0.25, fontFace: MONO, fontSize: 9, color: THEME.colors.accent4, align: "right", margin: 0 },
      },
    },
  ],
});

pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: THEME.colors.lt1 },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: M, y: TITLE_Y, w: CW - 1.3, h: 0.85, fontSize: 26, bold: true, color: THEME.colors.dk1, margin: 0, valign: "top" }, text: "" } },
    { text: { text: site.contact.email, options: { x: M, y: H - 0.5, w: 4, h: 0.25, fontFace: MONO, fontSize: 9, color: THEME.colors.dk2, margin: 0 } } },
    { text: { text: footerUrl, options: { x: 4.5, y: H - 0.5, w: 3.4, h: 0.25, fontFace: MONO, fontSize: 9, color: THEME.colors.dk2, align: "center", margin: 0 } } },
  ],
  slideNumber: { x: W - M - 1, y: H - 0.5, w: 1, h: 0.25, fontFace: MONO, fontSize: 9, color: THEME.colors.dk2, align: "right" },
});

// ---------- helpers ----------
type Opts = Record<string, unknown>;
function text(slide: any, str: string | any[], o: Opts) {
  slide.addText(str, { isTextBox: true, margin: 0, fontSize: 12, color: C.text1, valign: "top", ...o });
}
function label(slide: any, str: string, x: number, y: number, w: number) {
  text(slide, str.toUpperCase(), { x, y, w, h: 0.22, fontFace: MONO, fontSize: 8, color: C.text2, charSpacing: 2 });
}
function rule(slide: any, x: number, y: number, w: number, dark = false) {
  slide.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: dark ? THEME.colors.dk1 : THEME.colors.accent6, width: dark ? 1 : 0.75 } });
}
function card(slide: any, x: number, y: number, w: number, h: number) {
  slide.addShape(pres.ShapeType.rect, { x, y, w, h, fill: { color: THEME.colors.lt2 }, line: { color: THEME.colors.lt2, width: 0 } });
}
function numbered(slide: any, items: string[], x: number, y: number, w: number, rowH: number, fontSize = 11) {
  items.forEach((it, i) => {
    const yy = y + i * rowH;
    rule(slide, x, yy, w);
    text(slide, String(i + 1).padStart(2, "0"), { x, y: yy + 0.08, w: 0.35, h: rowH - 0.1, fontFace: MONO, fontSize: 8, color: C.text2 });
    text(slide, it, { x: x + 0.4, y: yy + 0.06, w: w - 0.4, h: rowH - 0.1, fontSize });
  });
  rule(slide, x, y + items.length * rowH, w);
}
function content(section: string) {
  pres.addSection({ title: section });
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: section });
  return s;
}
function title(slide: any, str: string) {
  slide.addText(str, { placeholder: "title" });
}

// ---------- slides ----------
let caseNo = 0;
deck.forEach((slide, idx) => {
  const n = idx + 1;
  switch (slide.kind) {
    case "title": {
      pres.addSection({ title: "Intro" });
      const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Intro" });
      text(s, site.tagline, { x: M, y: 1.3, w: 7.5, h: 1.6, fontSize: 40, bold: true, color: THEME.colors.lt1, valign: "top" });
      text(s, site.description, { x: M, y: 3.05, w: 6.6, h: 1.2, fontSize: 14, color: THEME.colors.accent5 });
      text(s, `${site.founder.name}, ${site.founder.title}`, { x: M, y: 4.45, w: 5, h: 0.3, fontFace: MONO, fontSize: 9, color: THEME.colors.accent4 });
      s.addNotes("Title slide. Read cold, no presenter.");
      break;
    }
    case "problem": {
      const s = content("Problem");
      title(s, slide.heading);
      const gap = 0.25;
      const cw = (CW - 2 * gap) / 3;
      slide.points.forEach((p, i) => {
        const x = M + i * (cw + gap);
        card(s, x, BODY_Y, cw, 2.9);
        text(s, p.n, { x: x + 0.3, y: BODY_Y + 0.3, w: 1, h: 0.25, fontFace: MONO, fontSize: 9, color: C.text2 });
        text(s, p.title, { x: x + 0.3, y: BODY_Y + 0.7, w: cw - 0.6, h: 0.5, fontSize: 16, bold: true });
        text(s, p.body, { x: x + 0.3, y: BODY_Y + 1.3, w: cw - 0.6, h: 1.4, fontSize: 12, color: C.text2 });
      });
      break;
    }
    case "fde": {
      const s = content("The fix");
      title(s, slide.heading);
      text(s, slide.definition, { x: M, y: BODY_Y + 0.1, w: 4.2, h: 2.2, fontSize: 14, color: C.text2 });
      numbered(s, slide.points, 5.2, BODY_Y + 0.1, 4.3, 0.72, 12);
      break;
    }
    case "teacher": {
      const s = content("Who teaches");
      title(s, slide.heading);
      s.addImage({ path: path.resolve("public" + site.founder.headshot), x: W - M - 1.1, y: 0.4, w: 1.1, h: 1.35, sizing: { type: "cover", w: 1.1, h: 1.35 } });
      text(s, slide.body, { x: M, y: BODY_Y + 0.05, w: CW - 1.4, h: 0.7, fontSize: 13, color: C.text2 });
      const mw = (CW - 3 * 0.15) / 4;
      metrics.forEach((m, i) => {
        const x = M + i * (mw + 0.15);
        card(s, x, BODY_Y + 0.8, mw, 0.95);
        text(s, m.value, { x: x + 0.15, y: BODY_Y + 0.9, w: mw - 0.3, h: 0.4, fontFace: MONO, fontSize: 20 });
        text(s, m.label, { x: x + 0.15, y: BODY_Y + 1.3, w: mw - 0.3, h: 0.42, fontFace: MONO, fontSize: 7, color: C.text2 });
      });
      const rows = slide.roles.map((r) => [
        { text: r.org, options: { bold: true, fontSize: 12, color: THEME.colors.dk1 } },
        { text: r.role, options: { fontSize: 11, color: THEME.colors.dk2 } },
        { text: r.note, options: { fontSize: 11, color: THEME.colors.dk1 } },
      ]);
      s.addTable(rows, {
        x: M,
        y: BODY_Y + 1.95,
        w: CW,
        colW: [1.8, 2.2, 5.0],
        rowH: 0.5,
        border: [
          { type: "solid", pt: 0.75, color: THEME.colors.accent6 },
          { type: "none" },
          { type: "solid", pt: 0.75, color: THEME.colors.accent6 },
          { type: "none" },
        ],
        margin: [0.08, 0.1, 0.08, 0],
        valign: "middle",
        fontFace: "Arial",
      });
      break;
    }
    case "case-study": {
      caseNo += 1;
      const study = getCaseStudy(slide.slug);
      if (!study) break;
      const s = content(`Case ${String(caseNo).padStart(2, "0")}`);
      label(s, `Case ${String(caseNo).padStart(2, "0")}  ·  ${study.company}  ·  ${study.role}`, M, 0.22, CW);
      title(s, study.title);
      const colW = 4.3;
      const rx = M + colW + 0.4;
      // left
      let y = BODY_Y;
      label(s, "Problem", M, y, colW);
      text(s, study.problem, { x: M, y: y + 0.25, w: colW, h: 1.25, fontSize: 11 });
      y += 1.55;
      label(s, "Result", M, y, colW);
      text(s, study.result, { x: M, y: y + 0.25, w: colW, h: 1.0, fontSize: 11 });
      y += 1.3;
      rule(s, M, y, colW, true);
      study.numbers.slice(0, 3).forEach((st, i) => {
        const yy = y + 0.08 + i * 0.3;
        text(s, st.label.toUpperCase(), { x: M, y: yy, w: 1.9, h: 0.26, fontFace: MONO, fontSize: 7, color: C.text2, charSpacing: 1 });
        text(s, st.value, { x: M + 1.95, y: yy, w: colW - 1.95, h: 0.26, fontSize: 10, bold: true });
      });
      // right
      label(s, "What was built", rx, BODY_Y, colW);
      numbered(s, study.built.slice(0, 3), rx, BODY_Y + 0.25, colW, 0.62, 10);
      const ly = BODY_Y + 0.25 + 3 * 0.62 + 0.3;
      label(s, "What your team learns from it", rx, ly, colW);
      study.lessons.slice(0, 3).forEach((l, i) => {
        text(s, l, { x: rx, y: ly + 0.28 + i * 0.3, w: colW, h: 0.3, fontSize: 10, bullet: { code: "25AA" } , margin: [0, 0, 0, 0] });
      });
      s.addNotes(`${study.company}. ${study.summary}`);
      break;
    }
    case "enterprise": {
      const s = content("Enterprise");
      title(s, slide.heading);
      const gap = 0.3;
      const cw = (CW - gap) / 2;
      slide.items.forEach((it, i) => {
        const x = M + i * (cw + gap);
        card(s, x, BODY_Y, cw, 3.0);
        text(s, it.org, { x: x + 0.3, y: BODY_Y + 0.3, w: cw - 0.6, h: 0.4, fontSize: 18, bold: true });
        text(s, it.role.toUpperCase(), { x: x + 0.3, y: BODY_Y + 0.72, w: cw - 0.6, h: 0.25, fontFace: MONO, fontSize: 8, color: C.text2, charSpacing: 1 });
        text(
          s,
          it.proof.map((p, j) => ({ text: p, options: { bullet: { code: "25AA" }, breakLine: j < it.proof.length - 1, paraSpaceAfter: 6 } })),
          { x: x + 0.3, y: BODY_Y + 1.15, w: cw - 0.6, h: 1.7, fontSize: 12 },
        );
      });
      break;
    }
    case "program": {
      const s = content("Program");
      title(s, slide.heading);
      text(s, program.summary, { x: M, y: 1.25, w: CW, h: 0.5, fontSize: 11, color: C.text2 });
      const gap = 0.15;
      const cw = (CW - 3 * gap) / 4;
      const ch = 1.5;
      program.weeks.forEach((w, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = M + col * (cw + gap);
        const y = 1.85 + row * (ch + gap);
        card(s, x, y, cw, ch);
        text(s, `WEEK ${String(w.n).padStart(2, "0")}`, { x: x + 0.15, y: y + 0.12, w: cw - 0.3, h: 0.2, fontFace: MONO, fontSize: 8, color: C.text2 });
        text(s, w.title, { x: x + 0.15, y: y + 0.34, w: cw - 0.3, h: 0.3, fontSize: 12, bold: true });
        text(s, w.body, { x: x + 0.15, y: y + 0.65, w: cw - 0.3, h: ch - 0.75, fontSize: 9, color: C.text2 });
      });
      break;
    }
    case "outcomes": {
      const s = content("Outcomes");
      title(s, slide.heading);
      text(s, slide.intro, { x: M, y: BODY_Y, w: 3.4, h: 1.2, fontSize: 13, color: C.text2 });
      numbered(s, program.outcomes, 4.3, BODY_Y, 5.2, 0.48, 11);
      break;
    }
    case "pricing": {
      const s = content("Pricing");
      title(s, slide.heading);
      const price = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(site.pricing.cohortUsd);
      card(s, M, BODY_Y, 3.6, 3.1);
      label(s, "One cohort", M + 0.3, BODY_Y + 0.3, 3);
      text(s, price, { x: M + 0.3, y: BODY_Y + 0.6, w: 3, h: 0.7, fontFace: MONO, fontSize: 34 });
      text(s, `${site.pricing.weeks} weeks · ${site.pricing.cohortSize} · one system shipped`, { x: M + 0.3, y: BODY_Y + 1.35, w: 3, h: 0.3, fontFace: MONO, fontSize: 8, color: C.text2 });
      text(s, slide.note, { x: M + 0.3, y: BODY_Y + 1.8, w: 3, h: 1.1, fontSize: 10, color: C.text2 });
      label(s, "Included", 4.6, BODY_Y + 0.05, 4.9);
      slide.includes.forEach((it, i) => {
        const yy = BODY_Y + 0.35 + i * 0.52;
        rule(s, 4.6, yy, 4.9);
        text(s, it, { x: 4.6, y: yy + 0.1, w: 4.9, h: 0.4, fontSize: 12 });
      });
      rule(s, 4.6, BODY_Y + 0.35 + slide.includes.length * 0.52, 4.9);
      break;
    }
    case "fit": {
      const s = content("Fit");
      title(s, slide.heading);
      const cw = (CW - 0.4) / 2;
      label(s, "A fit", M, BODY_Y, cw);
      numbered(s, program.fit, M, BODY_Y + 0.28, cw, 0.72, 11);
      label(s, "Not a fit", M + cw + 0.4, BODY_Y, cw);
      numbered(s, program.notFit, M + cw + 0.4, BODY_Y + 0.28, cw, 0.72, 11);
      break;
    }
    case "next": {
      pres.addSection({ title: "Next step" });
      const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Next step" });
      text(s, slide.heading.toUpperCase(), { x: M, y: 0.6, w: 5, h: 0.25, fontFace: MONO, fontSize: 9, color: THEME.colors.accent4, charSpacing: 2 });
      text(s, slide.body, { x: M, y: 1.0, w: 5.6, h: 2.2, fontSize: 22, bold: true, color: THEME.colors.lt1 });
      text(s, site.contact.email, { x: M, y: 3.4, w: 5.6, h: 0.4, fontFace: MONO, fontSize: 14, color: THEME.colors.lt1 });
      text(s, site.founder.linkedin.replace("https://", ""), { x: M, y: 3.85, w: 5.6, h: 0.3, fontFace: MONO, fontSize: 10, color: THEME.colors.accent4 });
      slide.steps.forEach((st, i) => {
        const yy = 1.0 + i * 0.75;
        s.addShape(pres.ShapeType.line, { x: 6.6, y: yy, w: 2.9, h: 0, line: { color: THEME.colors.dk2, width: 0.75 } });
        text(s, String(i + 1).padStart(2, "0"), { x: 6.6, y: yy + 0.12, w: 0.4, h: 0.3, fontFace: MONO, fontSize: 8, color: THEME.colors.accent4 });
        text(s, st, { x: 7.05, y: yy + 0.1, w: 2.45, h: 0.6, fontSize: 13, color: THEME.colors.lt1 });
      });
      s.addShape(pres.ShapeType.line, { x: 6.6, y: 1.0 + slide.steps.length * 0.75, w: 2.9, h: 0, line: { color: THEME.colors.dk2, width: 0.75 } });
      break;
    }
  }
  void n;
});

await pres.writeFile({ fileName: OUT });
await applyTheme(OUT, THEME);
console.log(`wrote ${OUT} (${deck.length} slides, ${caseStudies.length} case studies available)`);
