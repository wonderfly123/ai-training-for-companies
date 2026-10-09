import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";
import { deck } from "@/content/deck";

export function ProofStrip() {
  const teacher = deck.find((s) => s.kind === "teacher");
  const stats = teacher && teacher.kind === "teacher" ? teacher.stats : [];
  return (
    <section aria-label="Proof" className="border-b border-rule">
      <Container className="grid grid-cols-2 divide-x divide-rule lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-8 ${i % 2 === 1 ? "pl-6" : "pr-6"} lg:px-6 lg:first:pl-0 lg:last:pr-0`}
          >
            <p className="tabular font-mono text-3xl text-ink sm:text-4xl">{s.value}</p>
            <MonoLabel className="mt-2 block normal-case tracking-normal">{s.label}</MonoLabel>
          </div>
        ))}
      </Container>
    </section>
  );
}
