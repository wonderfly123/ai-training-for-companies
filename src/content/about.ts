export interface CareerEntry {
  when: string;
  org: string;
  role: string;
  notes: string[];
}

export interface Person {
  slug: string;
  name: string;
  title: string;
  lede: string;
  bio: string[];
  career: CareerEntry[];
  linkedin: string;
  headshotLabel: string;
  headshot?: string;
}

export interface About {
  lede: string;
  intro: string;
  /** Company description used on the home page. */
  shortBio: string[];
  /** Facts table for the home page. */
  careerShort: { label: string; value: string }[];
}

export const about: About = {
  lede: "The team",
  intro:
    "AI Training For Companies is run by consultants who build AI systems for clients and then teach client teams to build the next ones. Every instructor has shipped production systems. None of them teach from slides alone.",
  shortBio: [
    "AI Training For Companies is a consultancy. Our team works with big data at Snowflake, helping some of the world's most advanced companies understand and implement AI, and has trained enterprise engineering teams through hands-on labs at Snowflake and bootcamps at SnapLogic. We have also designed, built, and deployed AI and automation systems for clients in events, experiential marketing, real estate, and digital native companies.",
    "The program exists because the same lesson came up at every client: systems built by outsiders stop improving the day the outsiders leave. The durable fix is a team inside the company that can build and maintain them.",
  ],
  careerShort: [
    { label: "Founder", value: "Jordan Millhausen" },
    { label: "Team", value: "Jordan Millhausen (instruction), Anthony Huni (enterprise sales)" },
    { label: "Client systems", value: "10 in production across 4 industries" },
    { label: "Enterprise", value: "Big data and AI at Snowflake, AgentCreator bootcamps at SnapLogic" },
  ],
};

export const people: Person[] = [
  {
    slug: "jordan-millhausen",
    name: "Jordan Millhausen",
    title: "Founder and lead instructor",
    lede: "Solutions Engineer at Snowflake, helping some of the world's most advanced companies understand and implement AI. Before that, led the AgentCreator bootcamps at SnapLogic. Designed and shipped every client system on this site.",
    bio: [
      "Jordan Millhausen is a Solutions Engineer at Snowflake, where he works with big data at Snowflake, helping some of the world's most advanced companies understand and implement AI, and leads hands-on labs for customer teams. Before that he was an Enterprise Sales Engineer at SnapLogic, where he led the AgentCreator bootcamps that taught customer teams to build their own AI agents and built the company's first GTM sales agent.",
      "As a consultant he has designed and deployed AI and operations systems for clients including SnapLogic, Nekter, Wonderfly, Windansea Coconuts, and Applegate Ventures: a GTM sales agent, a customer success platform that surfaces churn risk, a customer service text agent with human handoff, an event operations app with a daily document-writing pipeline, and a CRM lead pipeline that replaced Zapier. All of them are in production.",
      "He holds a B.S. in Mechanical Engineering from the University of Maryland.",
    ],
    career: [
      {
        when: "2026 to now",
        org: "Snowflake",
        role: "Solutions Engineer",
        notes: [
          "Big data and AI with some of the world's most advanced companies",
          "Helps customer teams understand and implement AI",
          "Leads hands-on labs for customer teams",
        ],
      },
      {
        when: "2024 to 2026",
        org: "SnapLogic",
        role: "Enterprise Sales Engineer",
        notes: [
          "Led AgentCreator bootcamps teaching customer teams to build AI agents",
          "Built the company's first GTM sales AI agent",
          "Supported a $300K Fortune 500 deal",
        ],
      },
      {
        when: "2020 to now",
        org: "Client work",
        role: "AI and operations systems consultant",
        notes: [
          "SnapLogic: the company's first GTM sales assistant, built on AgentCreator",
          "Nekter: customer success platform with health scores, alerts, and an AI assistant",
          "Wonderfly: customer service SMS agent, operations systems, content engine",
          "Windansea Coconuts: event and wholesale operations app, daily Run of Show pipeline",
          "Applegate Ventures: lead pipeline, monitoring dashboard, investor onboarding, and website",
        ],
      },
      {
        when: "2018",
        org: "University of Maryland, College Park",
        role: "B.S. Mechanical Engineering",
        notes: ["Dean's List. Two-time Bongsoon Kim TerpStart Scholarship recipient"],
      },
    ],
    linkedin: "https://www.linkedin.com/in/jordan-millhausen",
    headshotLabel: "Jordan Millhausen, headshot",
    headshot: "/images/jordan-millhausen.jpg",
  },
  {
    slug: "anthony-huni",
    name: "Anthony Huni",
    title: "Enterprise sales",
    lede: "Runs the commercial side: scoping, proposals, and the client relationship through the engagement.",
    bio: [
      "Anthony Huni leads enterprise sales for AI Training For Companies. He scopes each engagement, writes the proposal, and stays the client's point of contact from the first call through the final week.",
      "PLACEHOLDER: Anthony's background before this, one or two sentences.",
    ],
    career: [
      {
        when: "Now",
        org: "AI Training For Companies",
        role: "Enterprise sales",
        notes: ["Scoping, proposals, and client relationships"],
      },
      {
        when: "PLACEHOLDER",
        org: "PLACEHOLDER prior organization",
        role: "PLACEHOLDER role",
        notes: ["PLACEHOLDER: one line of proof"],
      },
    ],
    linkedin: "https://www.linkedin.com/in/PLACEHOLDER",
    headshotLabel: "Anthony Huni, headshot",
  },
];
