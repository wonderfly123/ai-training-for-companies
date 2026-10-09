import { site } from "@/content/site";
import { about } from "@/content/about";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Figure } from "@/components/ui/figure";
import { KvTable } from "@/components/ui/kv-table";
import { Button } from "@/components/ui/button";

export function AboutBlock() {
  return (
    <section className="border-b border-rule">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Figure
          n={6}
          label={`${site.founder.name}, headshot`}
          caption={`${site.founder.name}, ${site.founder.city}`}
          aspect="aspect-[4/5]"
        />
        <div>
          <SectionHeading
            eyebrow="Fig. 6 &nbsp; The instructor"
            title="Not a trainer who read about it. An operator who built it."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
            {about.shortBio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <KvTable rows={about.careerShort} className="mt-8" />
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              More about Jordan
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
