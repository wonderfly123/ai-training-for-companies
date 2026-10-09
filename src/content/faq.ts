export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Written as direct answers to the literal questions people type into
 * search engines and ask answer engines. Keep each answer self-contained.
 */
export const faq: FaqItem[] = [
  {
    question: "What is AI training for companies?",
    answer:
      "AI training for companies teaches a company's own employees to build and run AI systems instead of buying them from a vendor. We offer three formats: a one-day workshop at your office, a three-day remote intensive, and an eight-week cohort that ships a system to production. Each is hands-on, uses your real workflows, and is taught by consultants who have built the same kind of systems for clients.",
  },
  {
    question: "What is a forward deployed engineer?",
    answer:
      "A forward deployed engineer, or FDE, is an engineer who works inside the business rather than in a separate technology department. They sit with operations, understand the actual workflow, and build software that fixes it. The term comes from enterprise software companies that place engineers at customer sites. An internal FDE does the same thing for their own company, and is the role this program trains people for.",
  },
  {
    question: "How much does AI training for a company cost?",
    answer:
      "Three fixed fees, listed on the offerings page: a one-day on-site workshop, a three-day remote intensive for a team of four to eight, and an eight-week cohort that ends with a system in production. No per-seat charges and no software to license. Follow-on advisory is quoted per engagement.",
  },
  {
    question: "How long does it take to train an AI engineer?",
    answer:
      "A three-day intensive is enough for a team to build a working system against real data with guidance. Eight weeks is enough to ship one to production and own it. Becoming fully independent takes a second and third project, which is why every format ends with a ranked list of what to build next.",
  },
  {
    question: "Do my employees need to be programmers?",
    answer:
      "No. The best teams mix operations people who know where the problems are with one or two people who are comfortable with code or data. Modern AI tooling lets non-programmers go further than they expect, and the program is structured so each person contributes where they are strongest.",
  },
  {
    question: "What does the company have at the end of the program?",
    answer:
      "One AI system running in production inside your company, built by your team, with monitoring, human handoff, and a runbook. You also have a team that understands how it works and a prioritized list of the next systems to build.",
  },
  {
    question: "Why train an internal team instead of hiring an AI consultant?",
    answer:
      "A consultant builds something and leaves, and the knowledge leaves with them. Every change afterward is another invoice. An internal team keeps building after the engagement ends, understands the business context a consultant never will, and costs nothing extra to maintain what they built.",
  },
  {
    question: "Who teaches the program?",
    answer:
      "Consultants who have built and deployed AI systems for clients. The program is led by founder Jordan Millhausen, who has shipped a GTM sales agent for SnapLogic, a customer success platform that surfaces churn risk, a customer service text agent, a daily document-writing pipeline, a CRM lead pipeline that replaced Zapier, and a hologram control application for clients in events, experiential marketing, real estate, fitness, and digital native companies. He is a Solutions Engineer at Snowflake, where he leads hands-on labs, and previously led the AgentCreator bootcamps at SnapLogic.",
  },
];
