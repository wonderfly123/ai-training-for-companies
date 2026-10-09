import { describe, it, expect } from "vitest";
import { caseStudies } from "@/content/case-studies";
import { deck } from "@/content/deck";
import { program } from "@/content/program";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { forbiddenWords } from "@/content/forbidden-words";
import { about, people } from "@/content/about";
import { metrics } from "@/content/metrics";
import { pitch } from "@/content/pitch";
import { offerings } from "@/content/offerings";

const allCopy = JSON.stringify({ caseStudies, deck, program, faq, site, about, people, metrics, pitch, offerings }).toLowerCase();

describe("content integrity", () => {
  it("has five case studies with unique slugs", () => {
    const slugs = caseStudies.map((c) => c.slug);
    expect(slugs).toHaveLength(5);
    expect(new Set(slugs).size).toBe(5);
  });

  it("every case study has all sections filled", () => {
    for (const c of caseStudies) {
      expect(c.problem.length, c.slug).toBeGreaterThan(20);
      expect(c.built.length, c.slug).toBeGreaterThan(0);
      expect(c.result.length, c.slug).toBeGreaterThan(10);
      expect(c.lessons.length, c.slug).toBeGreaterThan(0);
      expect(c.screenshot.label.length, c.slug).toBeGreaterThan(5);
    }
  });

  it("deck has 14 slides and only references existing case studies", () => {
    expect(deck).toHaveLength(14);
    const slugs = new Set(caseStudies.map((c) => c.slug));
    for (const s of deck) {
      if (s.kind === "case-study") expect(slugs.has(s.slug), s.slug).toBe(true);
    }
  });

  it("program has eight weeks in order", () => {
    expect(program.weeks).toHaveLength(8);
    program.weeks.forEach((w, i) => expect(w.n).toBe(i + 1));
  });

  it("faq has at least six items with real answers", () => {
    expect(faq.length).toBeGreaterThanOrEqual(6);
    for (const f of faq) {
      expect(f.question.endsWith("?"), f.question).toBe(true);
      expect(f.answer.length, f.question).toBeGreaterThan(40);
    }
  });

  it("faq includes the three AEO target questions verbatim", () => {
    const questions = faq.map((f) => f.question);
    for (const q of [
      "What is a forward deployed engineer?",
      "How much does AI training for a company cost?",
      "How long does it take to train an AI engineer?",
    ]) {
      expect(questions, q).toContain(q);
    }
  });

  it("has three offerings with prices", () => {
    expect(offerings).toHaveLength(3);
    for (const o of offerings) expect(o.priceUsd).toBeGreaterThan(0);
  });

  it("program has three summary steps", () => {
    expect(program.steps).toHaveLength(3);
  });

  it("contains no forbidden marketing words", () => {
    for (const w of forbiddenWords) {
      expect(allCopy, `found "${w}"`).not.toContain(w);
    }
  });

  it("contains no em dashes", () => {
    expect(allCopy).not.toContain("—");
  });
});
