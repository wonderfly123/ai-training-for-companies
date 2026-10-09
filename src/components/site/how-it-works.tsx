import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { program } from "@/content/program";

export function HowItWorks() {
  return (
    <section className="border-b border-rule">
      <Container className="py-20">
        <SectionHeading
          eyebrow="The approach"
          title="Your people build the systems. We make sure they can."
          lede="Companies that own their AI systems have a small team inside that builds and maintains them. Every format we offer trains that team on a real workflow from your operations."
        />
        <ol className="mt-12 grid gap-px border border-rule bg-rule md:grid-cols-3">
          {program.steps.map((s) => (
            <li key={s.n} className="bg-paper p-6">
              <span className="font-mono text-xs text-ink-muted">{s.n}</span>
              <h3 className="mt-3 font-sans text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
