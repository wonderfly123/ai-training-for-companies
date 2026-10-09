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
    "AI Training For Companies is a consultancy. Our team has designed, built, and deployed AI and automation systems for clients in events, consumer products, real estate, and fitness, and has trained enterprise engineering teams at SnapLogic and Snowflake.",
    "The program exists because the same lesson came up at every client: systems built by outsiders stop improving the day the outsiders leave. The durable fix is a team inside the company that can build and maintain them.",
  ],
  careerShort: [
    { label: "Founder", value: "Jordan Millhausen" },
    { label: "Team", value: "Jordan Millhausen, Anthony Huni" },
    { label: "Client systems", value: "5 in production across 4 industries" },
    { label: "Enterprise training", value: "SnapLogic AgentCreator bootcamps" },
  ],
};

export const people: Person[] = [
  {
    slug: "jordan-millhausen",
    name: "Jordan Millhausen",
    title: "Founder and lead instructor",
    lede: "Designed and shipped every client system shown on this site, and leads the program.",
    bio: [
      "Jordan Millhausen is a Solutions Engineer at Snowflake, where he works with enterprise engineering teams on data and AI architecture. Before that he was an Enterprise Sales Engineer at SnapLogic, where he led the AgentCreator bootcamps that taught customer teams to build their own AI agents and built the company's first GTM sales agent.",
      "As a consultant he has designed and deployed AI and operations systems for clients including Wonderfly, Windansea Coconuts, WD Capital, Hologram Pilates, and Applegate Ventures: a customer service text agent with human handoff, a daily document-writing pipeline, a CRM lead pipeline that replaced Zapier, a hologram control application, and a lead-routing website. All of them are in production.",
      "He holds a B.S. in Mechanical Engineering from the University of Maryland.",
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
          "Wonderfly: customer service SMS agent, operations systems, content engine",
          "Windansea Coconuts: event and wholesale operations app, daily Run of Show pipeline",
          "WD Capital: lead pipeline, monitoring dashboard, investor onboarding",
          "Hologram Pilates: control app for video, lights, and sound",
          "Applegate Ventures: lead-routing website",
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
  },
  {
    slug: "anthony-huni",
    name: "Anthony Huni",
    title: "PLACEHOLDER title",
    lede: "PLACEHOLDER: one line on Anthony's role in the program.",
    bio: ["PLACEHOLDER: Anthony's background, what he has built or run, and what he does in the program."],
    career: [
      {
        when: "PLACEHOLDER",
        org: "PLACEHOLDER organization",
        role: "PLACEHOLDER role",
        notes: ["PLACEHOLDER: one line of proof"],
      },
    ],
    linkedin: "https://www.linkedin.com/in/PLACEHOLDER",
    headshotLabel: "Anthony Huni, headshot",
  },
];
