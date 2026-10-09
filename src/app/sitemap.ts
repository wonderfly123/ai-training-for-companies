import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { offerings } from "@/content/offerings";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["", "/offerings", "/work", "/people", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const work = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const offers = offerings.map((o) => ({
    url: `${site.url}/offerings/${o.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...fixed, ...offers, ...work];
}
