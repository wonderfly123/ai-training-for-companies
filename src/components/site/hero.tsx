import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Figure } from "@/components/ui/figure";
import { MonoLabel } from "@/components/ui/mono-label";

export function Hero() {
  return (
    <section className="ruled border-b border-rule">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <MonoLabel>The program</MonoLabel>
            <h1 className="mt-4 max-w-xl font-sans text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[3.6rem]">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              An {site.pricing.weeks}-week, hands-on program for {site.pricing.cohortSize} at
              your company. They build one real system from your operations and ship it to
              production. We teach, review, and support it after.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/deck">View the deck</Button>
              <Button href="/contact" variant="ghost">
                Contact us
              </Button>
            </div>
          </div>
          <p className="max-w-md border-l border-ink pl-4 font-mono text-xs leading-relaxed text-ink-muted">
            Our consultants have built and deployed AI systems for clients in events, experiential
            marketing, real estate, and fitness, and trained enterprise engineering teams at
            SnapLogic and Snowflake.
          </p>
        </div>
        <Figure
          label="Windansea Coconuts activation at LDX3 New York"
          src="/images/hero-windansea-ldx3.jpg"
          caption="Windansea Coconuts at LDX3 New York. Event intake, run of show, and crew logistics for this activation ran on a system we built."
          aspect="aspect-[4/5]"
          priority
        />
      </Container>
    </section>
  );
}
