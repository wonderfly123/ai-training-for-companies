import { site } from "@/content/site";
import type { FaqItem } from "@/content/faq";
import { offerings } from "@/content/offerings";

const CONTEXT = "https://schema.org" as const;

export function organization() {
  return {
    "@context": CONTEXT,
    "@type": "Organization" as const,
    name: site.name,
    url: site.url,
    email: site.contact.email,
    founder: { "@type": "Person" as const, name: site.founder.name },
    sameAs: [site.founder.linkedin],
  };
}

export function person() {
  return {
    "@context": CONTEXT,
    "@type": "Person" as const,
    name: site.founder.name,
    jobTitle: `${site.founder.title}, ${site.name}`,
    url: `${site.url}/people#jordan-millhausen`,
    worksFor: { "@type": "Organization" as const, name: site.name, url: site.url },
    sameAs: [site.founder.linkedin],
  };
}

export function service() {
  return {
    "@context": CONTEXT,
    "@type": "Service" as const,
    name: "AI training for companies: virtual workshop, on-site workshop, and intensive",
    serviceType: "AI training for companies",
    description: site.description,
    url: `${site.url}/offerings`,
    provider: { "@type": "Organization" as const, name: site.name, url: site.url },
    areaServed: "US",
    offers: offerings.map((o) => ({
      "@type": "Offer" as const,
      name: o.name,
      price: String(o.priceUsd),
      priceCurrency: "USD",
      url: `${site.url}/offerings/${o.slug}`,
      description: `${o.duration}. ${o.format}. ${o.outcome}`,
    })),
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
