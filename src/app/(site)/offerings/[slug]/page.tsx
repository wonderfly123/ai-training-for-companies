import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { offerings, getOffering, formatUsd } from "@/content/offerings";
import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";
import { Button } from "@/components/ui/button";
import { NumberedList } from "@/components/ui/numbered-list";
import { KvTable } from "@/components/ui/kv-table";
import { ContactCta } from "@/components/site/contact-cta";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return offerings.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const o = getOffering(slug);
  if (!o) return {};
  return {
    title: `${o.name}: ${o.duration}, ${o.format}`,
    description: o.outcome,
    alternates: { canonical: `/offerings/${o.slug}` },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-t border-ink py-8 lg:grid-cols-[12rem_1fr] lg:gap-10">
      <MonoLabel>{label}</MonoLabel>
      <div>{children}</div>
    </div>
  );
}

export default async function OfferingPage({ params }: Params) {
  const { slug } = await params;
  const index = offerings.findIndex((o) => o.slug === slug);
  if (index === -1) notFound();
  const o = offerings[index];
  const others = offerings.filter((x) => x.slug !== o.slug);
  return (
    <>
      <section className="border-b border-rule">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:py-24">
          <div>
            <MonoLabel>{o.duration} &middot; {o.format}</MonoLabel>
            <h1 className="mt-4 font-sans text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              {o.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{o.outcome}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Ask about this</Button>
            </div>
          </div>
          <div>
            <KvTable
              rows={[
                { label: "Format", value: o.format },
                { label: "Length", value: o.duration },
                { label: "For", value: o.who },
                { label: "Price", value: formatUsd(o.priceUsd) },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-12">
          <Block label="How the time is spent">
            <dl className="border-t border-ink">
              {o.agenda.map((a) => (
                <div key={a.label} className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <dt className="font-sans text-base font-medium text-ink">{a.label}</dt>
                  <dd className="text-base leading-relaxed text-ink-muted">{a.body}</dd>
                </div>
              ))}
            </dl>
          </Block>
          <Block label="What you walk away with">
            <NumberedList items={o.walkAway} />
          </Block>
          <Block label="What is included">
            <NumberedList items={o.includes} dense />
          </Block>
          <Block label="Before day one">
            <NumberedList items={o.before} dense />
          </Block>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-10">
          <MonoLabel>Other formats</MonoLabel>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {others.map((x) => (
              <Link key={x.slug} href={`/offerings/${x.slug}`} className="font-sans text-xl font-medium text-ink hover:text-ink-muted">
                {x.name} &rarr;
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
