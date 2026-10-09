import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyCard } from "./case-study-card";

interface CaseStudyGridProps {
  eyebrow?: string;
  title?: string;
  lede?: string;
}

export function CaseStudyGrid({
  eyebrow = "Fig. 4   The work",
  title = "Systems in production, built by the person teaching you",
  lede = "Every one of these runs a real business today. The code is available to review on request.",
}: CaseStudyGridProps) {
  return (
    <section className="border-b border-rule">
      <Container className="py-20">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-12 grid gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <CaseStudyCard key={c.slug} study={c} n={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
