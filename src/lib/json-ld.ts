import { site } from "@/content/site";
import type { FaqItem } from "@/content/faq";

const CONTEXT = "https://schema.org" as const;

export function organization() {
  return {
    "@context": CONTEXT,
    "@type": "Organization" as const,
    name: site.name,
    url: site.url,
    email: site.contact.email,
    founder: { "@type": "Person" as const, name: site.founder.name },
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Baltimore",
      addressRegion: "MD",
      addressCountry: "US",
    },
    sameAs: [site.founder.linkedin],
  };
}

export function person() {
  return {
    "@context": CONTEXT,
    "@type": "Person" as const,
    name: site.founder.name,
    jobTitle: `${site.founder.title}, ${site.name}`,
    url: `${site.url}/about`,
    worksFor: { "@type": "Organization" as const, name: site.name, url: site.url },
    sameAs: [site.founder.linkedin],
  };
}

export function service() {
  return {
    "@context": CONTEXT,
    "@type": "Service" as const,
    name: `${site.pricing.weeks}-week AI engineer training cohort`,
    serviceType: "AI training for companies",
    description: site.description,
    url: `${site.url}/program`,
    provider: { "@type": "Organization" as const, name: site.name, url: site.url },
    areaServed: "US",
    offers: {
      "@type": "Offer" as const,
      price: String(site.pricing.cohortUsd),
      priceCurrency: "USD",
      url: `${site.url}/program`,
      description: `One cohort of ${site.pricing.cohortSize}, ${site.pricing.weeks} weeks, one system shipped to production.`,
    },
  };
}

export function faqPage(items: FaqItem[]) {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage" as const,
    mainEntity: items.map((f) => ({
      "@type": "Question" as const,
      name: f.question,
      acceptedAnswer: { "@type": "Answer" as const, text: f.answer },
    })),
  };
}
