import { Container } from "@/components/ui/container";
import { metrics } from "@/content/metrics";

export function ProofStrip() {
  return (
    <section aria-label="Results" className="border-b border-rule">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-px border border-rule bg-rule lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-paper p-6">
              <p className="tabular font-mono text-3xl text-ink sm:text-4xl">{m.value}</p>
              <p className="mt-3 font-mono text-xs leading-snug text-ink-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
