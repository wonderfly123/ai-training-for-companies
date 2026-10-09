import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { CaseStudyArticle } from "@/components/site/case-study-article";
import { ContactCta } from "@/components/site/contact-cta";
import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} (${study.company})`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  return (
    <>
      <CaseStudyArticle study={study} n={index + 1} />
      <Container className="border-t border-rule py-10">
        <MonoLabel>Next case</MonoLabel>
        <Link
          href={`/work/${next.slug}`}
          className="mt-2 block font-sans text-2xl font-medium text-ink hover:text-accent"
        >
          {next.company}: {next.title} &rarr;
        </Link>
      </Container>
      <ContactCta />
    </>
  );
}
