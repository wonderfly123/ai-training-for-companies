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
        <ol className="mt-12 max-w-4xl border-t border-ink">
          {slide.points.map((p) => (
            <li
              key={p.n}
              className="grid gap-3 border-b border-rule py-7 sm:grid-cols-[4rem_16rem_1fr] sm:gap-8"
            >
              <span className="font-mono text-sm text-ink-muted">{p.n}</span>
              <h3 className="font-sans text-2xl font-medium leading-tight text-ink">{p.title}</h3>
              <p className="text-base leading-relaxed text-ink-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
