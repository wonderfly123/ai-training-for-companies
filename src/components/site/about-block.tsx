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
          label="Team photo or a screenshot of a client system"
          caption="Client work, in production"
          aspect="aspect-[4/5]"
        />
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="Consultants who build, then teach"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
            {about.shortBio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <KvTable rows={about.careerShort} className="mt-8" />
          <div className="mt-8">
            <Button href="/people" variant="ghost">
              Meet the team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
