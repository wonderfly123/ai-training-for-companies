import { fluency } from "@/content/fluency";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FluencyBlock() {
  return (
    <section className="border-b border-rule">
      <Container className="py-20">
        <SectionHeading eyebrow={fluency.eyebrow} title={fluency.heading} lede={fluency.body} />
        <div className="mt-12 grid gap-px border border-rule bg-rule md:grid-cols-3">
          {fluency.points.map((p, i) => (
            <div key={p.title} className="bg-paper p-6">
              <span className="font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-sans text-xl font-medium text-ink">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
