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
      "AI training for companies teaches a company's own employees to work with AI and to build and run AI systems instead of buying them from a vendor. That covers everything from AI data pipelines to workflow best practices to 10x productivity with Claude Code, Codex, and agents. We offer three formats: a one-day virtual workshop over Zoom, a one-day workshop at your office, and a three-day intensive at your office that ends with a working system deployed. Each is hands-on, uses your real workflows, and is taught by consultants who have built the same kind of systems for clients.",
  },
  {
    question: "What is a forward deployed engineer?",
    answer:
      "A forward deployed engineer, or FDE, is an engineer who works inside the business rather than in a separate technology department. They sit with operations, understand the actual workflow, and build software that fixes it. The term comes from enterprise software companies that place engineers at customer sites. An internal FDE does the same thing for their own company, and is the role this program trains people for.",
  },
  {
    question: "How much does AI training for a company cost?",
    answer:
      "Three fixed fees, listed on the offerings page: $7,500 for a one-day virtual workshop, $15,000 for a one-day workshop at your office, and $25,000 for a three-day intensive at your office for a team of four to eight. No per-seat charges and no software to license. Follow-on advisory is quoted per engagement.",
  },
  {
    question: "How long does it take to train an AI engineer?",
    answer:
      "A three-day intensive is enough for a team to build and deploy a working system against real data with guidance. Becoming fully independent takes a second and third project, which is why every format ends with a ranked list of what to build next.",
  },
  {
    question: "Do you teach how to use AI tools, or only how to build systems?",
    answer:
      "Both. Most teams already have ChatGPT, Copilot, or Gemini and use them like a search box. The people getting 10x the output work differently: they run Claude Code and Codex from the terminal, hand multi-step work to agents, and script the repetitive parts. Every format includes hands-on time on that way of working, applied to each person's real tasks.",
  },
  {
    question: "Do my employees need to be programmers?",
    answer:
      "No. The best teams mix operations people who know where the problems are with one or two people who are comfortable with code or data. Modern AI tooling lets non-programmers go further than they expect, and the program is structured so each person contributes where they are strongest.",
  },
  {
    question: "What does the company have at the end?",
    answer:
      "It depends on the format. After the virtual workshop, everyone is set up with Claude Code or Codex and has handed one repetitive task to an agent or a script. After the on-site workshop, you have a map of your operations, a working prototype, and a ranked list of what to build. After the three-day intensive, you have a working AI system deployed against your real data, a runbook, and a team that understands how it works.",
  },
  {
    question: "Why train an internal team instead of hiring an AI consultant?",
    answer:
      "A consultant builds something and leaves, and the knowledge leaves with them. Every change afterward is another invoice. An internal team keeps building after the engagement ends, understands the business context a consultant never will, and costs nothing extra to maintain what they built.",
  },
  {
    question: "Who teaches the program?",
    answer:
      "Consultants who have built and deployed AI systems for clients. The program is led by founder Jordan Millhausen, who has shipped a GTM sales agent for SnapLogic, a customer success platform that surfaces churn risk, a customer service text agent, a daily document-writing pipeline, and a CRM lead pipeline that replaced Zapier for clients in events, experiential marketing, real estate, and digital native companies. He is a Solutions Engineer at Snowflake, where he works with big data at Snowflake, helping some of the world's most advanced companies understand and implement AI and leads hands-on labs, and previously led the AgentCreator bootcamps at SnapLogic.",
  },
];
