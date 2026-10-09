export interface CareerEntry {
  when: string;
  org: string;
  role: string;
  notes: string[];
}

export interface About {
  lede: string;
  /** Short version used on the home page. */
  shortBio: string[];
  /** Long version used on /about. */
  bio: string[];
  career: CareerEntry[];
  /** Compressed career rows for the home page table. */
  careerShort: { label: string; value: string }[];
}

export const about: About = {
  lede: "Mechanical engineer by degree, systems engineer by training, business owner by accident, AI builder by necessity.",
  shortBio: [
    "I co-own three businesses: an event venue company, a branded coconut company, and a real estate brokerage. None of them had a technology team, so I became it. On nights and weekends I built the systems that run them: a text agent that answers customers, a pipeline that writes the crew's run sheets every morning, a lead engine that replaced Zapier.",
    "During the day I work with enterprise engineering teams on data and AI architecture. At SnapLogic I ran the bootcamps that taught customer teams to build their own agents. I know what makes those teams stall, and what gets them shipping.",
  ],
  bio: [
    "I did not set out to build software. I set out to run businesses, and the businesses kept needing software nobody was going to build for them. So I learned to build it, on nights and weekends, while working full time as an engineer.",
    "The first system was a bot that answered customer questions for our event venues. Then an operations app for the coconut company so a closed deal became a tracked event without anyone retyping it. Then a lead pipeline for the brokerage that replaced a tangle of Zapier steps. Each one taught me what actually matters when AI meets a real business: integrations, idempotency, human handoff, and knowing when a cron job beats an agent.",
    "My day job puts me in rooms with enterprise engineering teams trying to do the same thing at a larger scale. At SnapLogic I ran the bootcamps that taught customer teams to build their own agents. I have seen what makes teams stall and what gets them shipping, and that is what this program is built on.",
  ],
  career: [
    {
      when: "2026 to now",
      org: "Snowflake",
      role: "Solutions Engineer",
      notes: ["Data and AI architecture with enterprise engineering teams"],
    },
    {
      when: "2024 to 2026",
      org: "SnapLogic",
      role: "Enterprise Sales Engineer",
      notes: [
        "Led AgentCreator Bootcamps teaching customer teams to build AI agents",
        "Built the company's first GTM sales AI agent",
        "Closed a $300K Fortune 500 deal",
      ],
    },
    {
      when: "2019 to 2024",
      org: "Northrop Grumman",
      role: "Systems Engineer",
      notes: [
        "Managed development teams on NATO, MESA, Global Hawk, and SABR programs",
        "Process improvements credited with $10M+ in savings",
        "SECRET clearance",
      ],
    },
    {
      when: "2020 to now",
      org: "Wonderfly",
      role: "Co-owner, Solutions Architect",
      notes: ["Event venues in Baltimore. Built the SMS agent, ops systems, and content engine"],
    },
    {
      when: "Ongoing",
      org: "Windansea Coconuts",
      role: "Co-owner",
      notes: [
        "Branded coconuts for resorts and events. ~$400K summer revenue, two years running. Built the operations app",
      ],
    },
    {
      when: "2026 to now",
      org: "WD Capital",
      role: "Co-founder",
      notes: [
        "Real estate brokerage and syndication. Built the lead pipeline, dashboard, and investor onboarding",
      ],
    },
    {
      when: "2018",
      org: "University of Maryland, College Park",
      role: "B.S. Mechanical Engineering",
      notes: ["Dean's List. Two-time Bongsoon Kim TerpStart Scholarship recipient"],
    },
  ],
  careerShort: [
    { label: "Now", value: "Solutions Engineer, Snowflake" },
    { label: "2024 to 2026", value: "Enterprise Sales Engineer, SnapLogic" },
    { label: "2019 to 2024", value: "Systems Engineer, Northrop Grumman" },
    { label: "2020 to now", value: "Co-owner, Wonderfly, Windansea Coconuts, WD Capital" },
    { label: "Education", value: "B.S. Mechanical Engineering, University of Maryland" },
  ],
};
