import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";
import { metrics } from "@/content/metrics";

export function ProofStrip() {
  return (
    <section aria-label="Results" className="border-b border-rule">
      <Container className="grid grid-cols-2 divide-x divide-rule lg:grid-cols-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`py-8 ${i % 2 === 1 ? "pl-6" : "pr-6"} lg:px-6 lg:first:pl-0 lg:last:pr-0`}
          >
            <p className="tabular font-mono text-3xl text-ink sm:text-4xl">{m.value}</p>
            <MonoLabel className="mt-2 block">{m.label}</MonoLabel>
          </div>
        ))}
      </Container>
    </section>
  );
}
