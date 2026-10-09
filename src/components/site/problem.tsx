import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { deck } from "@/content/deck";

export function Problem() {
  const slide = deck.find((s) => s.kind === "problem");
  if (!slide || slide.kind !== "problem") return null;
  return (
    <section className="border-b border-rule">
      <Container className="py-20">
        <SectionHeading eyebrow="The problem" title={slide.heading} />
        <div className="mt-12 grid gap-px border border-rule bg-rule md:grid-cols-3">
          {slide.points.map((p) => (
            <div key={p.n} className="bg-paper p-6">
              <span className="font-mono text-xs text-accent">{p.n}</span>
              <h3 className="mt-3 font-sans text-xl font-medium text-ink">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
