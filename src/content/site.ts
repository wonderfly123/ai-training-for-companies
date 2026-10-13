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
}

/**
 * Single source of truth for anything that will be swapped later.
 * Every PLACEHOLDER value is intentional until the domain, email,
 * and booking link exist.
 */
export const site: SiteConfig = {
  name: "AI Training For Companies",
  tagline: "We train your team to work with AI and build AI systems you own.",
  description:
    "Hands-on AI training for companies, from AI data pipelines to workflow best practices to 10x productivity with Claude Code, Codex, and agents, on your team's real work. A one-day virtual workshop, a one-day on-site workshop, or a three-day on-site intensive.",
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
};
