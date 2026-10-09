import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Figure } from "@/components/ui/figure";
import { KvTable } from "@/components/ui/kv-table";
import { Button } from "@/components/ui/button";

const career = [
  { label: "Now", value: "Solutions Engineer, Snowflake" },
  { label: "2024 to 2026", value: "Enterprise Sales Engineer, SnapLogic" },
  { label: "2019 to 2024", value: "Systems Engineer, Northrop Grumman" },
  { label: "2020 to now", value: "Co-owner, Wonderfly, Windansea Coconuts, WD Capital" },
  { label: "Education", value: "B.S. Mechanical Engineering, University of Maryland" },
];

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
            <p>
              I co-own three businesses: an event venue company, a branded coconut company,
              and a real estate brokerage. None of them had a technology team, so I became
              it. On nights and weekends I built the systems that run them: a text agent
              that answers customers, a pipeline that writes the crew&apos;s run sheets every
              morning, a lead engine that replaced Zapier.
            </p>
            <p>
              During the day I work with enterprise engineering teams on data and AI
              architecture. At SnapLogic I ran the bootcamps that taught customer teams to
              build their own agents. I know what makes those teams stall, and what gets
              them shipping.
            </p>
          </div>
          <KvTable rows={career} className="mt-8" />
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
