interface Point {
  n: string;
  title: string;
  body: string;
}

export type Slide =
  | { kind: "title" }
  | { kind: "problem"; heading: string; points: Point[] }
  | { kind: "fde"; heading: string; definition: string; points: string[] }
  | {
      kind: "teacher";
      heading: string;
      body: string;
      roles: { org: string; role: string; note: string }[];
    }
  | { kind: "case-study"; slug: string }
  | {
      kind: "enterprise";
      heading: string;
      items: { org: string; role: string; proof: string[] }[];
    }
  | { kind: "program"; heading: string }
  | { kind: "outcomes"; heading: string; intro: string }
  | { kind: "pricing"; heading: string; note: string; includes: string[] }
  | { kind: "fit"; heading: string }
  | { kind: "next"; heading: string; body: string; steps: string[] };

/** Fourteen slides. Written to be read without a presenter. */
export const deck: Slide[] = [
  { kind: "title" },
  {
    kind: "problem",
    heading: "Why AI projects stall inside companies",
    points: [
      {
        n: "01",
        title: "Tools without builders",
        body: "Licenses get bought. A few people use them for email. Operations do not change.",
      },
      {
        n: "02",
        title: "Consultants who leave",
        body: "A vendor builds something and leaves. Every change after that is a new invoice to someone who no longer remembers how it works.",
      },
      {
        n: "03",
        title: "Strategy without execution",
        body: "There is a roadmap. Nobody inside can build the first item on it.",
      },
    ],
  },
  {
    kind: "fde",
    heading: "The fix is a small team inside your company that builds and owns the systems",
    definition:
      "A forward deployed engineer works inside the business, understands the actual workflow, and ships software that fixes it. Enterprise software companies place them at customer sites. We train your own people to do the job.",
    points: [
      "They know your business, so they build the right thing the first time.",
      "They stay, so the systems get maintained and the next one gets built.",
      "They cost what you already pay them, not a retainer.",
      "Four of them can automate more of a 200-person company than any vendor will.",
    ],
  },
  {
    kind: "teacher",
    heading: "Taught by consultants who have shipped this for clients",
    body: "Every system in this deck was built by our team for a client and is in production today. We have also trained enterprise engineering teams at SnapLogic and Snowflake.",
    roles: [
      {
        org: "Snowflake",
        role: "Solutions engineering",
        note: "Data and AI architecture with enterprise engineering teams. Leads hands-on labs",
      },
      {
        org: "SnapLogic",
        role: "Enterprise sales engineering",
        note: "Led AgentCreator bootcamps, built a GTM sales agent, supported a $300K Fortune 500 deal",
      },
      {
        org: "Client work",
        role: "Ten systems in production",
        note: "SnapLogic, Nekter, Wonderfly, Windansea Coconuts, Applegate Ventures",
      },
    ],
  },
  { kind: "case-study", slug: "wonderfly" },
  { kind: "case-study", slug: "windansea-coconuts" },
  { kind: "case-study", slug: "applegate-ventures" },
  { kind: "case-study", slug: "nekter" },
  {
    kind: "enterprise",
    heading: "Enterprise training experience",
    items: [
      {
        org: "SnapLogic",
        role: "Enterprise sales engineering, 2024 to 2026",
        proof: [
          "Led AgentCreator bootcamps teaching customer teams to build AI agents on their own data",
          "Built the company's first GTM sales AI agent",
          "Supported a $300K Fortune 500 deal",
        ],
      },
      {
        org: "Snowflake",
        role: "Solutions engineering, 2026 to present",
        proof: [
          "Data and AI architecture with enterprise engineering teams",
          "Leads hands-on labs for customer teams",
        ],
      },
    ],
  },
  { kind: "program", heading: "Eight weeks, one shipped system" },
  {
    kind: "outcomes",
    heading: "What your team can do when it ends",
    intro: "Things they could not do in week one and can do unsupervised in week nine.",
  },
  {
    kind: "pricing",
    heading: "One fee, one cohort, one system in production",
    note: "Follow-on advisory after the cohort is quoted per engagement. No per-seat charges, no software to license.",
    includes: [
      "Eight weeks of instruction and working sessions, on site or remote",
      "Code review and architecture guidance on your real project",
      "One AI system deployed to production inside your company",
      "Runbook, monitoring, and a ranked list of the next three systems",
      "Thirty days of questions answered after the cohort ends",
    ],
  },
  { kind: "fit", heading: "Who this is for, and who it is not for" },
  {
    kind: "next",
    heading: "Next step",
    body: "Reply to the email this came with, or write to the address below. Tell us the one workflow in your company that wastes the most human time.",
    steps: [
      "A 30-minute call about that workflow",
      "A one-page proposal naming the system and the cohort",
      "Week one",
    ],
  },
];
