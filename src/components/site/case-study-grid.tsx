import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";
import { MonoLabel } from "@/components/ui/mono-label";
import { CaseStudyCard } from "./case-study-card";

interface CaseStudyGridProps {
  eyebrow?: string;
  title?: string;
  lede?: string;
}

export function CaseStudyGrid({
  eyebrow = "Client work",
  title = "Systems we built for clients",
  lede = "Each one is in production today. Code walkthroughs are available on request.",
}: CaseStudyGridProps) {
  return (
    <section className="border-b border-rule">
      <Container className="py-20">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-12 grid gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <CaseStudyCard key={c.slug} study={c} n={i + 1} />
          ))}
          <Link
            href="/contact"
            className="group flex flex-col justify-between gap-6 bg-paper-deep p-6 transition-colors hover:bg-ink hover:text-paper"
          >
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <MonoLabel className="group-hover:text-paper">
                  {String(caseStudies.length + 1).padStart(2, "0")}
                </MonoLabel>
                <MonoLabel accent>Next</MonoLabel>
              </div>
              <p className="mt-4 font-sans text-sm font-semibold">Your company</p>
              <h3 className="mt-1 font-sans text-xl font-medium leading-snug tracking-[-0.01em]">
                The next one gets built by your team, with us in the room.
              </h3>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] group-hover:text-accent">
              Start the conversation &rarr;
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
