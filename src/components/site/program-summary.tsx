import { program } from "@/content/program";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function ProgramSummary() {
  return (
    <section className="border-b border-rule">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="The program"
            title={`${site.pricing.weeks} weeks. One shipped system.`}
            lede={program.summary}
          />
          <div className="mt-8">
            <Button href="/program" variant="ghost">
              Full curriculum and pricing
            </Button>
          </div>
        </div>
        <ol className="border-t border-ink">
          {program.weeks.map((w) => (
            <li
              key={w.n}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-rule py-3"
            >
              <span className="font-mono text-xs text-ink-muted pt-1">WK {String(w.n).padStart(2, "0")}</span>
              <span className="font-sans text-base font-medium text-ink">{w.title}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
