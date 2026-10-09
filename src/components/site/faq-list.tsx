import { faq } from "@/content/faq";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqList() {
  return (
    <section className="border-b border-rule" id="faq">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading
          eyebrow="Fig. 7 &nbsp; Questions"
          title="Direct answers to the questions people actually ask"
        />
        <div className="border-t border-ink">
          {faq.map((item) => (
            <details key={item.question} className="group border-b border-rule">
              <summary className="flex items-start justify-between gap-6 py-5 font-sans text-lg font-medium text-ink">
                <span>{item.question}</span>
                <span className="faq-plus shrink-0 font-mono text-ink-muted" aria-hidden />
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-ink-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
