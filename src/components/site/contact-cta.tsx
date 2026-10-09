import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MonoLabel } from "@/components/ui/mono-label";

export function ContactCta() {
  return (
    <section className="ruled">
      <Container className="py-20">
        <MonoLabel>Next step</MonoLabel>
        <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          Tell us the one workflow in your company that wastes the most human time.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-muted">That is the first conversation.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/contact">Start the conversation</Button>
          <a
            href={`mailto:${site.contact.email}`}
            className="font-mono text-sm text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            {site.contact.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
