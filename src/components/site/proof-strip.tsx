import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";
import { caseStudies } from "@/content/case-studies";

/** Client names, read from the case studies so the list never drifts. */
export function ProofStrip() {
  return (
    <section aria-label="Clients" className="border-b border-rule">
      <Container className="flex flex-wrap items-baseline gap-x-10 gap-y-3 py-6">
        <MonoLabel>Clients</MonoLabel>
        {caseStudies.map((c) => (
          <span key={c.slug} className="font-sans text-base font-medium text-ink">
            {c.company}
          </span>
        ))}
      </Container>
    </section>
  );
}
