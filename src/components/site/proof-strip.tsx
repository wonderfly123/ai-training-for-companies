import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";

const stats = [
  { value: "3", label: "Operating businesses co-owned" },
  { value: "~$400K", label: "Windansea summer revenue, two years running" },
  { value: "$300K", label: "Fortune 500 deal closed at SnapLogic" },
  { value: "$10M+", label: "Process savings at Northrop Grumman" },
];

export function ProofStrip() {
  return (
    <section aria-label="Proof" className="border-b border-rule">
      <Container className="grid grid-cols-2 divide-x divide-rule lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`py-8 ${i % 2 === 1 ? "pl-6" : "pr-6"} lg:px-6 lg:first:pl-0 lg:last:pr-0`}>
            <p className="tabular font-mono text-3xl text-ink sm:text-4xl">{s.value}</p>
            <MonoLabel className="mt-2 block normal-case tracking-normal">{s.label}</MonoLabel>
          </div>
        ))}
      </Container>
    </section>
  );
}
