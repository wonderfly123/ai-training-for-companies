import type { Slide as SlideData } from "@/content/deck";
import { getCaseStudy } from "@/content/case-studies";
import { TitleBody, ProblemBody, FdeBody, TeacherBody } from "./bodies-intro";
import { CaseStudyBody, EnterpriseBody } from "./bodies-proof";
import { ProgramBody, OutcomesBody, PricingBody, FitBody, NextBody } from "./bodies-offer";

/** Maps a slide record to its body. Case-study slides look up the shared content. */
export function SlideBody({ slide, n }: { slide: SlideData; n: number }) {
  switch (slide.kind) {
    case "title":
      return <TitleBody />;
    case "problem":
      return <ProblemBody slide={slide} />;
    case "fde":
      return <FdeBody slide={slide} />;
    case "teacher":
      return <TeacherBody slide={slide} />;
    case "case-study": {
      const study = getCaseStudy(slide.slug);
      return study ? <CaseStudyBody study={study} n={n} /> : null;
    }
    case "enterprise":
      return <EnterpriseBody slide={slide} />;
    case "program":
      return <ProgramBody slide={slide} />;
    case "outcomes":
      return <OutcomesBody slide={slide} />;
    case "pricing":
      return <PricingBody slide={slide} />;
    case "fit":
      return <FitBody slide={slide} />;
    case "next":
      return <NextBody slide={slide} />;
  }
}

export function sectionLabel(slide: SlideData, caseIndex: number): string {
  switch (slide.kind) {
    case "title":
      return "";
    case "problem":
      return "The problem";
    case "fde":
      return "The fix";
    case "teacher":
      return "The instructor";
    case "case-study":
      return `Case ${String(caseIndex).padStart(2, "0")}`;
    case "enterprise":
      return "Enterprise";
    case "program":
      return "The program";
    case "outcomes":
      return "Outcomes";
    case "pricing":
      return "Pricing";
    case "fit":
      return "Fit";
    case "next":
      return "Next step";
  }
}
