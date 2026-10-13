import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Figure } from "@/components/ui/figure";
import { MonoLabel } from "@/components/ui/mono-label";

export function Hero() {
  return (
    <section className="border-b border-rule">
      <Container className="py-16 lg:py-20">
        <MonoLabel>AI training for companies</MonoLabel>
        <h1 className="mt-4 max-w-3xl font-sans text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[3.6rem]">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Everything from AI data pipelines to workflow best practices to 10x productivity with
          Claude Code, Codex, and agents. Hands-on, on your team&apos;s real work.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/offerings">See the offerings</Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
        <div className="mt-14">
          <Figure
            label="Nekter customer success platform, account health and Barry assistant"
            video="/videos/nekter-demo.mp4"
            caption="Nekter, a customer success platform we built: account health scores, churn and expansion signals from every interaction, and a natural-language assistant over the data."
            aspect="aspect-[2/1]"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
