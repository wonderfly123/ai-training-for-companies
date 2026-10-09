import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { program } from "@/content/program";

export function HowItWorks() {
  return (
    <section className="border-b border-rule bg-paper-deep">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="The approach"
          title="Your people build the systems. We make sure they can."
          lede="Companies that own their AI systems have a small team inside that builds and maintains them. Every format we offer trains that team on a real workflow from your operations."
        />
        <ol className="self-center">
          {program.steps.map((s) => (
            <li key={s.n} className="flex gap-6 border-t border-ink py-6 last:border-b">
              <span className="tabular font-mono text-4xl leading-none text-ink">{s.n}</span>
              <div>
                <h3 className="font-sans text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
