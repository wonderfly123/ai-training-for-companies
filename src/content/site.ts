export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  founder: {
    name: string;
    title: string;
    linkedin: string;
    headshotAlt: string;
    headshot: string;
  };
  contact: {
    email: string;
    phone: string;
    calendar: string;
  };
  pricing: {
    cohortUsd: number;
    cohortSize: string;
    weeks: number;
  };
}

/**
 * Single source of truth for anything that will be swapped later.
 * Every PLACEHOLDER value is intentional until the domain, email,
 * and booking link exist.
 */
export const site: SiteConfig = {
  name: "AI Training For Companies",
  tagline: "We train your team to build AI systems in-house.",
  description:
    "Hands-on AI training for companies: build AI systems your team owns, and learn to work with AI the way the best users do, with Claude Code, Codex, and agents on your real tasks. A one-day workshop, a three-day intensive, or an eight-week cohort.",
  url: "https://aitrainingforcompanies.com",
  founder: {
    name: "Jordan Millhausen",
    title: "Founder",
    linkedin: "https://www.linkedin.com/in/jordan-millhausen",
    headshotAlt: "Jordan Millhausen",
    headshot: "/images/jordan-millhausen.jpg",
  },
  contact: {
    email: "millhausenjordan@gmail.com",
    phone: "PLACEHOLDER",
    calendar: "PLACEHOLDER",
  },
  pricing: {
    cohortUsd: 50000,
    cohortSize: "4 to 8 people",
    weeks: 8,
  },
};
