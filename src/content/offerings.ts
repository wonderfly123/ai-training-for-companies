export interface AgendaItem {
  label: string;
  body: string;
}

export interface Offering {
  slug: string;
  name: string;
  format: string;
  duration: string;
  who: string;
  outcome: string;
  /** PLACEHOLDER prices for the workshop and intensive. Cohort price from Jordan. */
  priceUsd: number;
  includes: string[];
  /** How the time is spent. */
  agenda: AgendaItem[];
  /** What the company has at the end. */
  walkAway: string[];
  /** What needs to be true before day one. */
  before: string[];
}

export const offerings: Offering[] = [
  {
    slug: "workshop",
    name: "One-day workshop",
    format: "In person, at your office",
    duration: "1 day",
    who: "Leadership and the people who run operations",
    outcome:
      "Map your operations, see how the best AI users actually work, and leave with a plan and a working prototype of your first system.",
    priceUsd: 15000,
    includes: [
      "Operations mapping session with your team",
      "Hands-on session on working with AI the way the best users do",
      "Live build of one prototype against your real workflow",
      "Ranked list of the next three systems, with scope and effort",
      "Written plan delivered within a week",
    ],
    agenda: [
      {
        label: "Morning",
        body: "Map how work actually moves through your company. We find the places where people retype, wait, or guess, and rank them by what they cost you.",
      },
      {
        label: "Midday",
        body: "How the best AI users work. Your team already has ChatGPT or Copilot. We show the difference between asking a chatbot and running Claude Code, Codex, and agents on real tasks, then do it on yours.",
      },
      {
        label: "Afternoon",
        body: "We build a working prototype of one system from the morning's list, live, with your people at the keyboard.",
      },
      {
        label: "Close",
        body: "A ranked list of the next three systems, with rough scope and effort, and a decision on what to build first.",
      },
    ],
    walkAway: [
      "A written map of your operations and where AI pays off, delivered within a week",
      "A working prototype of one system, running against your real workflow",
      "A ranked list of the next three systems with scope and effort",
      "Everyone in the room set up with the tools and a workflow they used that day",
    ],
    before: [
      "The people who run operations in the room, plus whoever decides what gets built",
      "Access to one real workflow: the spreadsheet, inbox, or system it lives in",
      "A conference room and a projector. We bring the rest",
    ],
  },
  {
    slug: "intensive",
    name: "Three-day intensive",
    format: "Remote, over Zoom",
    duration: "3 days, 4 hours per day",
    who: "A team of 4 to 8",
    outcome:
      "Build a working AI system against your real data, and learn to work with AI the way the people getting ten times the output do.",
    priceUsd: 7500,
    includes: [
      "Twelve hours of hands-on instruction and building",
      "One working system connected to your real data",
      "Each person working with Claude Code or Codex on their own tasks",
      "Deployment and runbook",
      "Two weeks of questions answered after the session",
    ],
    agenda: [
      {
        label: "Day 1",
        body: "Foundations and tools. How LLM APIs actually work, structured outputs, tool use. Then the shift from chatbots to Claude Code, Codex, and agents, applied to each person's own work. Pick the system to build.",
      },
      {
        label: "Day 2",
        body: "Build. Connect the system to your real data and the tools you already run on. Design the human handoff: what it does alone, what it asks about.",
      },
      {
        label: "Day 3",
        body: "Harden and deploy. Tests, failure modes, monitoring, cost. Ship it, write the runbook, and rank what to build next.",
      },
    ],
    walkAway: [
      "One working AI system, deployed, connected to your real data",
      "A runbook your team can operate from",
      "Each participant using Claude Code or Codex on their own work, not just in the session",
      "A ranked list of what to build next",
      "Two weeks of questions answered after the session",
    ],
    before: [
      "Four to eight people who can block four hours a day for three days",
      "At least one person comfortable with code or data",
      "Access to the data and systems the project touches",
    ],
  },
  {
    slug: "cohort",
    name: "Eight-week cohort",
    format: "On site or remote",
    duration: "8 weeks",
    who: "A team of 4 to 8",
    outcome:
      "One system shipped to production inside your company, owned and understood by the people who built it, and a team that works with AI differently from here on.",
    priceUsd: 50000,
    includes: [
      "Eight weeks of instruction and working sessions",
      "Code and architecture review on your real project",
      "One AI system deployed to production",
      "Runbook, monitoring, and a ranked list of the next three systems",
      "Thirty days of support after the cohort",
    ],
    agenda: [
      {
        label: "Weeks 1 to 2",
        body: "Foundations and the pick. LLM APIs, structured outputs, tool use, and working with Claude Code and Codex on real tasks. Map operations and choose the system.",
      },
      {
        label: "Weeks 3 to 5",
        body: "Integrations, agents, and human handoff. Connect the systems the project needs, build the core, and decide what the system may do alone.",
      },
      {
        label: "Weeks 6 to 7",
        body: "Build week and hardening. Ship end to end behind a flag, then break it on purpose: tests, retries, monitoring, cost.",
      },
      {
        label: "Week 8",
        body: "Deploy and own. Production deploy, runbook, handoff to the wider team, and a presentation to leadership of what shipped.",
      },
    ],
    walkAway: [
      "One AI system in production, built and owned by your team",
      "Monitoring, human handoff, and a runbook",
      "A ranked list of the next three systems",
      "A team that scopes and ships the next project without outside help",
      "Thirty days of support after the cohort ends",
    ],
    before: [
      "Four to eight people with real time freed up for eight weeks",
      "One workflow you already know is broken and are willing to fix in public",
      "A sponsor who will attend the week-eight presentation",
    ],
  },
];

export function getOffering(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
