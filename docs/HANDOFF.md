# AI Training For Companies: Handoff

Written 2026-10-12 for the partner building and selling this. Everything here is in the repo at `github.com/wonderfly123/ai-training-for-companies` (private; ask Jordan for access). Read this top to bottom once, then use the section headers as a reference.

---

## 1. What the business is

**AI Training For Companies** is a consultancy that trains a company's own employees to build AI systems and to work with AI the way the best users do. We do not sell software. We do not build and leave. We leave behind a working system and a team that can build the next one.

**One line:** We train your team to build AI systems in-house.

**Two things we teach, in every format:**

1. **Build.** A small team inside the company builds and owns an AI system on a real workflow from their operations. Think forward deployed engineer, grown in-house.
2. **Fluency.** Most teams have ChatGPT, Copilot, or Gemini and use them like a search box. The people getting ten times the output run Claude Code and Codex from the terminal, hand multi-step work to agents, and script the repetitive parts. We teach that on each person's real tasks.

**Why we win:** the instructors have shipped the systems. Every case study below is in production for a real client. Jordan also led AgentCreator bootcamps at SnapLogic and leads hands-on labs at Snowflake, so enterprise training is not new to us.

**Voice rules (apply to everything we publish):**

- Company voice, "we." Never "I." The business is not about Jordan.
- Jordan's companies are **clients** of this consultancy, never "businesses he owns."
- Plain statements. No clever contrast headlines ("Not X. Y."), no superlatives, no "unlock," "supercharge," "seamless," "cutting-edge." The site has a test that fails the build if those words appear.
- White background, black text. No gradients, no stock photos, no robots.

---

## 2. Offerings and pricing

All three are hands-on, use the client's real workflows, and end with something built. Prices are fixed fees, no per-seat charges, no software to license. Follow-on advisory is quoted per engagement.

| Offering | Format | Length | For | Price | Ends with |
|---|---|---|---|---|---|
| **One-day workshop** | In person, at their office | 1 day | Leadership and the people who run operations | $15,000 | Operations map, a working prototype of one system, ranked list of the next three, written plan within a week |
| **Three-day intensive** | Remote, Zoom | 3 days, 4 hours per day | Team of 4 to 8 | $7,500 | One working system against their real data, deployed, with a runbook. Each person using Claude Code or Codex on their own work |
| **Eight-week cohort** | On site or remote | 8 weeks | Team of 4 to 8 | $50,000 | One system in production, owned by their team. Monitoring, handoff, runbook, ranked next three, 30 days of support |

Full agendas, "what you walk away with," and "before day one" lists are on the site at `/offerings/workshop`, `/offerings/intensive`, `/offerings/cohort`, and in `src/content/offerings.ts`.

**Suggested sales motion:** the workshop is the entry offer. It is one day, it is on site, and it produces a ranked list of systems to build. The intensive or cohort is the natural next step to build the first item on that list. Do not lead with the cohort cold.

**Cohort week by week** (also in `src/content/program.ts`): 1 Foundations, 2 Pick the system, 3 Integrations, 4 Agents and tools, 5 Human in the loop, 6 Build week, 7 Evaluate and harden, 8 Deploy and own.

---

## 3. Proof: the projects

Each of these is a case study on the site at `/work/<slug>` and in `src/content/case-studies.ts`. Use the problem, what was built, and result exactly as written there; they have been reviewed for accuracy. Summary here so you can talk to them without the site open.

### Nekter (`/work/nekter`)
Customer success platform for SaaS teams. **Problem:** CSMs juggled Salesforce, Zendesk, call recordings, and email; churn signals were missed until the renewal was lost. **Built:** unified account view synced from Salesforce, Zendesk, and Chorus; health scores with history (Healthy, At Risk, Critical); AI-generated insights on every call, email, and ticket with sentiment, churn risk, and expansion signals; Slack and email alerts on health drops and expansion opportunities; "Barry," a natural-language assistant that turns a question into structured filters with Claude, searches transcripts and tickets, and streams an answer with sources. **Result:** risk reaches Slack before the renewal call; a CSM asks in plain English and gets the answer from the actual call. Stack: Next.js, Supabase, Claude, SendGrid, Slack API, Vercel. **Demo video** is the hero of the homepage.

### SnapLogic, internal build (`/work/snaplogic`)
GTM sales assistant, the company's first, built on SnapLogic AgentCreator. **Problem:** reps and sales engineers pulled account history from separate systems before every call. **Built:** an agent that pulls account context from connected systems and answers reps' questions on demand; it became the reference example for the AgentCreator bootcamps. **Result:** account briefs in seconds. **Note:** this copy is Jordan's draft from memory. Confirm details with him before using specifics on a call.

### Wonderfly (`/work/wonderfly`)
Event venue company. **Problem:** customers text evenings and weekends; staff replied Monday; bookings were lost. **Built:** an SMS agent on the venue's phone lines (OpenPhone) that answers from a knowledge base and live booking data, written to collect leads rather than pretend to book; confidence-based handoff that flags the conversation and posts to Discord when unsure; a staff dashboard for reading, takeover, per-line toggles, response time and token cost; business-hours gating, test mode, model switcher. Separately, a content engine that researches competitors, writes briefs and drafts for three brands, schedules posts, pulls analytics, and feeds winners and rejections back into next week's briefs. **Result:** replies in seconds, any hour; staff only touch what the agent flags. Stack: Next.js, Supabase, Claude, OpenPhone, Discord, Vercel cron.

### Windansea Coconuts (`/work/windansea-coconuts`)
Experiential marketing company running branded activations for some of the largest brands in the world, $1M+ revenue, two owners and seasonal crews. **Problem:** every closed deal was copied by hand into tasks, intake forms, and crew run sheets; wholesale invoices lived in a separate system. **Built:** Pipedrive closed-won webhook creates the ClickUp event, generates a unique intake link, emails the client; intake form writes answers and uploads back to the task; printable Banquet Event Order; Square invoice webhooks detect wholesale orders; decal order form that emails the vendor a PDF; a 7 AM daily job where Claude reads each upcoming event's fields, attachments, comments, and matching email threads, then writes or updates a versioned Run of Show as a Word document. **Result:** a closed deal becomes a staffed event with a current run sheet with nobody retyping it; failures email the owner with the payload. Stack: Next.js on Vercel, Pipedrive, Square, ClickUp, Gmail SMTP and IMAP, Claude structured outputs.

### Applegate Ventures (`/work/applegate-ventures`)
Buys homes as-is for cash in four states and partners with investors. **Problem:** property leads arrived through a chain of Zapier steps that duplicated records and failed silently. **Built:** one pipeline (normalize, filter, score, store, upsert to HubSpot, notify) with per-lead locks, raw payload storage, and a replay button; admin dashboard of every delivery; mapping of foreclosure stage, sale date, property type to HubSpot's allowed values with an alert when an invariant breaks; investor onboarding forms; skip-trace import across six states; a public site with seller and investor paths and server-validated forms. **Result:** Zapier is gone, every lead has an audit trail, million-dollar transactions run on it. Stack: Next.js 16, Neon Postgres, HubSpot, PropertyRadar webhooks, Vercel cron.

### Numbers on the site
Homepage metric strip (`src/content/metrics.ts`): **$6M+** client revenue supported by systems we built (from Jordan), **10** client systems in production (from Jordan), **10K+** customer conversations handled by AI agents we deployed and **200+** hours of manual work removed per month across clients. The last two are drafts Jordan asked for and has not verified. Do not quote them on a call until he confirms or replaces them.

---

## 4. The team page

`/people` lists Jordan Millhausen (Founder and lead instructor) and Anthony Huni (Enterprise sales). Anthony's bio, prior career row, LinkedIn, and headshot are still marked PLACEHOLDER in `src/content/about.ts`. Jordan's headshot is in; a larger original (the current one is 300 px) would help.

---

## 5. The website

### What it is
A Next.js 16 app (App Router, React 19, TypeScript, Tailwind 4) with no CMS. All copy lives in typed content files under `src/content/`. Change a sentence there and it updates everywhere it is used, including the PowerPoint.

### Pages
| Route | Purpose |
|---|---|
| `/` | Hero with Nekter demo video, metrics, problem, approach, AI fluency, case study cards, offerings summary, who we are, FAQ, contact CTA |
| `/offerings` | Three offerings side by side, cohort week by week, outcomes, fit |
| `/offerings/[slug]` | Detail page per offering: agenda, what you walk away with, included, before day one |
| `/work` and `/work/[slug]` | Case study index and one page per project |
| `/people` | Team |
| `/contact` | Form (name, email, company, role, company size, message) posting to `/api/contact`, delivered by SMTP email |
| `/sitemap.xml`, `/robots.txt` | Generated |

SEO and answer-engine work is done: literal page titles, canonical URLs, Open Graph image generated from the design, JSON-LD for Organization, Person, Service with three Offers, and FAQPage. The FAQ is written as direct answers to the questions people type: "What is a forward deployed engineer?", "How much does AI training for a company cost?", "How long does it take to train an AI engineer?", "Do you teach how to use AI tools, or only how to build systems?"

### Where things live
```
src/content/site.ts          name, tagline, description, contact email, LinkedIn
src/content/offerings.ts     the three offerings, prices, agendas, walk-away lists
src/content/case-studies.ts  the five projects
src/content/program.ts       cohort weeks, outcomes, fit / not fit, three-step approach
src/content/fluency.ts       the "best AI users work differently" section
src/content/faq.ts           FAQ
src/content/metrics.ts       homepage numbers
src/content/about.ts         company description and the people
src/content/pitch.ts         PowerPoint copy only (short lines)
src/content/forbidden-words.ts  words that fail the build
public/images/               headshot, event photo
public/videos/nekter-demo.mp4
docs/deck/AI-Training-For-Companies.pptx   the deck, regenerated by `npm run deck:pptx`
docs/superpowers/            original design spec and build plan
```

### Running it
```bash
git clone https://github.com/wonderfly123/ai-training-for-companies.git
cd ai-training-for-companies
npm install
cp .env.example .env.local     # fill SMTP values for the contact form
npm run dev                    # http://localhost:3000
npm test && npm run lint && npm run build
npm run deck:pptx              # regenerate the PowerPoint from content
```

### Still placeholder
- `src/content/site.ts`: phone and calendar link. Contact email is Jordan's Gmail.
- Anthony's entry in `src/content/about.ts`.
- Screenshots: every gray box on a case study page names the exact screen to drop in. Add the image to `public/images/` and set `screenshot.src` on that case study. Jordan has a Windansea Banquet Event Order screenshot that needs customer details covered first; `scripts/redact-beo.py` does that once the file is at `assets/beo.png`.
- SMTP credentials for the contact form (`.env.example` lists them). Until set, the form returns a "not configured" error.
- Domain: `aitrainingforcompanies.com` was available by whois on 2026-10-09. Not purchased yet.

---

## 6. How to put it in front of people

**Use Vercel, not GitHub Pages.** GitHub Pages serves static files only. This site has a server route for the contact form, generates the Open Graph image on the server, and is a Next.js app. Vercel runs Next.js natively, deploys on every push to `main`, and gives you preview URLs for branches. Free tier is fine to start.

Steps, about ten minutes:

1. Go to vercel.com, sign in with the GitHub account that has access to the repo.
2. "Add New Project," import `ai-training-for-companies`. Framework is detected as Next.js. Leave build settings at defaults.
3. Under Environment Variables, add the SMTP values from `.env.example` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, `CONTACT_TO`). A Gmail app password works.
4. Deploy. You get a `*.vercel.app` URL immediately. Send that URL to anyone who needs to review the site.
5. When the domain is purchased, add it under Settings, Domains, and point DNS where Vercel tells you. Set `url` in `src/content/site.ts` to match.

Every later `git push` to `main` redeploys. Pull requests get their own preview URL, which is the right way to review changes before they go live.

The alternative, if you only want to show someone the site and not run it: from the Vercel CLI run `npx vercel` in the repo for a one-off deployment URL. Still Vercel.

---

## 7. Outreach plan

### Who we sell to
Companies with 50 to 500 employees whose operations run on people retyping things between systems, and a CEO, COO, or head of operations who wants the capability in-house rather than rented. Industries where we have proof: events and venues, experiential marketing, real estate, and digital native companies (SaaS, like Nekter). A buyer needs at least four people who can give the program real time and one workflow they already know is broken.

Not a fit: companies that want a vendor to build it and walk away, teams that cannot free up time, projects that need a data platform built first, anyone who wants a strategy deck without shipping anything.

### The entry offer
Lead with the one-day workshop. It is a small decision ($15,000, one day, at their office), it gets us in the building with the people who run operations, and it ends with a ranked list of systems to build. The intensive or cohort is the follow-on to build the first one.

### Channels, in order of expected yield
1. **Warm network.** Jordan's contacts from Snowflake and SnapLogic customers, and the owners and operators around the existing clients (venue owners, event and experiential marketing companies, real estate investors). Ask each existing client for two introductions.
2. **LinkedIn.** Jordan's profile is `linkedin.com/in/jordan-millhausen`. Post one real artifact a week: a screenshot of a system in production with two sentences on what it replaced. No AI-generated thought leadership. Direct outreach to COO and VP Operations titles at companies in the four industries, referencing the specific case study closest to their business. There is an existing LinkedIn outreach tool in Jordan's archive (`~/Archive/linkedin_agent`) that drafts comments and messages for human approval; worth reviving.
3. **Cold email** to the same titles. The deck (`docs/deck/AI-Training-For-Companies.pptx`, 13 slides, written to be read without a presenter) is the attachment. Export to PDF before sending.
4. **Local.** Baltimore and DC business owner groups and chambers, where a one-day on-site workshop is an easy pitch.

### The sequence
1. **First touch.** One short email or message. Name the workflow we suspect is wasting their time (every company in these industries has the same three), one sentence on the closest case study, and the ask: a 30-minute call. Attach or link the deck.
2. **The call.** Ask about the one workflow that wastes the most human time. That is the whole agenda. Qualify on team availability and whether they want the capability in-house.
3. **One-page proposal** within 48 hours naming the format, the dates, the people who should attend, and the price. No long documents.
4. **Workshop.** Deliver it. The ranked list of next systems is the proposal for the intensive or cohort.
5. **Follow-on.** Propose the intensive or cohort to build item one on the list, with the same people in the room.

### Message, in plain words
"Your team has AI tools and nothing in the operation has changed. We come to your office for a day, map where people retype, wait, or guess, show your team how the best AI users actually work, and build a working prototype of the first fix with your people at the keyboard. You leave with a plan and a prototype. We have done this for an experiential marketing company, an event venue company, a real estate investor, and a SaaS company, and every one of those systems is still running."

### Targets for the first 90 days
Set these together, then track them in a shared sheet: conversations started, calls held, proposals sent, workshops delivered, follow-on engagements. A reasonable first quarter is two workshops delivered and one intensive or cohort sold from them. Price can move once there are three paid references.

---

## 8. Things to decide or fix soon

- Confirm or replace the two unverified homepage metrics (10K+ conversations, 200+ hours).
- Confirm the SnapLogic case study details.
- Fill in Anthony's bio, LinkedIn, and headshot.
- Buy the domain, set up the contact email on it, replace the Gmail address.
- Collect screenshots for the case study pages (Wonderfly dashboard, Windansea intake and Run of Show, Applegate webhook dashboard, SnapLogic agent).
- Set SMTP so the contact form delivers.
- Decide whether the Windansea event photo (which shows a Windansea client's branding) stays on the site. It is currently only on the deck's title slide.
