import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { deck } from "@/content/deck";
import { program } from "@/content/program";

export function HowItWorks() {
  const fde = deck.find((s) => s.kind === "fde");
  return (
    <section className="border-b border-rule">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="The approach"
            title={fde && fde.kind === "fde" ? fde.heading : "A small team inside your company"}
            lede={fde && fde.kind === "fde" ? fde.definition : undefined}
          />
          {fde && fde.kind === "fde" && (
            <ul className="mt-8 space-y-3 border-t border-ink pt-6">
              {fde.points.map((p) => (
                <li key={p} className="flex gap-3 text-base leading-relaxed text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        <ol className="border-t border-ink">
          {program.steps.map((s) => (
            <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-rule py-6">
              <span className="font-mono text-sm text-ink-muted">{s.n}</span>
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
