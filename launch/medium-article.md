# How a Non-Developer Built a $49/mo SaaS That Replaces $500/mo in Tools

*The story of Solar OS — built from a Thai apartment with zero coding experience*

---

## I've been on rooftops. That's why this exists.

I'm not a tech founder. I'm a solar installer.

For the past several years, I've owned Navitas Solar, a residential solar installation company in Israel. I co-founded Solaris Energy in Panama. I've done site surveys in 40°C heat, argued with utility companies about interconnection paperwork, and lost deals because a proposal took three days instead of three minutes.

I know this industry from the inside — the permits, the inspections, the customers who call at 7 AM asking why their monitoring app shows a dip in production. I've lived it all.

And through all of it, one thing consistently drove me crazy: the software.

## The $500/month duct tape stack

If you run a small solar installation company, here's what your "tech stack" probably looks like:

**Aurora Solar** (~$150/month) for system design and proposals. It's powerful, but you're paying for a lot of features you don't use if you're a small residential crew.

**Monday.com** (~$80/month) for project management. You've set up a board with columns like "Permit Submitted," "Inspection Scheduled," "PTO Received." It works, sort of, but it wasn't built for solar and it shows.

**PandaDoc** (~$60/month) for contracts and e-signatures. Another login, another subscription, another place where data lives in isolation.

**Google Sheets** (free-ish, but your time isn't free) for lead tracking, financials, inventory, and everything else that doesn't fit anywhere. You have 47 tabs and a formula error somewhere that's been there for months.

**Calendly** (~$20/month) for scheduling site visits and installs. Fine for booking calls, awkward for coordinating a 3-person install crew across multiple job sites.

**Google Drive or Dropbox** (~$15/month) for permits, photos, contracts, and utility paperwork. Your folder structure made sense when you set it up. It doesn't anymore.

Total monthly cost: **$350-500.** Total integration between any of these tools: **zero.**

Every solar installer I know has some version of this setup. And every single one of them hates it.

## The move that changed everything

Six months ago, after two years of military reserve duty in Israel, I moved my family to Thailand. My wife, our three kids, and me — starting fresh in a new country.

Thailand gave me something I hadn't had in years: time to think.

And what I kept thinking about was that software stack. Not as a frustrated user anymore, but as someone who could see a clear opportunity: build one tool that does all of it. Purpose-built for solar. Simple enough for a 2-person crew. Affordable enough that switching is a no-brainer.

The problem was obvious. The market was clear. There was just one issue.

I don't know how to code.

## Enter Claude Code

I'd been following AI developments closely, and I'd heard about Claude Code — Anthropic's AI coding agent. The premise was appealing: describe what you want in plain English, and it writes the code.

I was skeptical. I'd tried AI tools before and found them useful for small tasks but not for building real products. Claude Code felt different.

I started with the core: a CRM pipeline for solar leads. I described the stages a solar deal goes through — lead capture, site visit, proposal, contract, permit submission, installation, inspection, PTO (permission to operate). Claude Code generated a drag-and-drop kanban board with those stages.

It worked. Not perfectly — I spent time refining, iterating, debugging. But the fundamental architecture was sound.

Over the next two weeks, I built out feature after feature:

**Day 1-3:** Authentication, database schema, core CRM pipeline. Setting up Supabase for the backend, React for the frontend.

**Day 4-6:** Proposal generator. I described the data solar proposals need (system size, panel count, estimated production, savings over 25 years, financing options) and Claude Code built a form that generates professional PDFs.

**Day 7-9:** Document management system. Upload permits, contracts, inspection photos — all organized per project. No more hunting through email threads or shared drives.

**Day 10-12:** Scheduling and crew management. A calendar view where you can assign install crews to jobs, see availability, and avoid double-bookings.

**Day 13-14:** Analytics dashboard. Close rates, revenue by month, average deal size, crew utilization. The numbers I always wanted but could never get without exporting CSVs and building pivot tables.

Total development cost: **$0.** Just my existing Claude subscription and free-tier infrastructure.

## The tech behind it

For the technical readers, here's what Solar OS runs on:

- **Frontend:** React + TypeScript + Vite + Tailwind CSS. Fast, modern, responsive.
- **Backend:** Supabase — Postgres database, authentication, file storage, edge functions. Everything in one place.
- **Hosting:** Vercel. Deploy with a git push.
- **Development:** Claude Code for all code generation, debugging, and architecture decisions.

The entire infrastructure runs on free tiers at low volume. As we scale, costs will grow, but the margins on a $49/month SaaS with cloud infrastructure are very healthy.

## Why vertical beats horizontal

I could have built a generic CRM. The world doesn't need another generic CRM.

What the world needs — or at least what the solar industry needs — is software that understands solar workflows natively.

When a solar installer opens Solar OS, they see pipeline stages that match their actual process. They see fields for panel wattage, inverter model, and utility company. They see document categories for "Permit Application," "Interconnection Agreement," and "PTO Confirmation."

They don't have to configure anything. They don't have to watch YouTube tutorials about setting up custom fields. It just works the way they work.

This is the advantage of building for your own industry. I didn't have to do customer interviews to figure out the workflow. I've lived the workflow. Every feature in Solar OS exists because I personally needed it.

## The Florida opportunity

I registered KANIEL TORD LLC in Florida for a reason.

Florida's residential solar market is booming. The state has excellent solar irradiance, rising electricity costs, and growing consumer interest in energy independence. There are thousands of small solar installation companies across the state — most of them 2-10 person operations.

These companies are my exact target market. They're too small to justify enterprise software, too sophisticated to run everything on spreadsheets, and too busy installing panels to spend time researching and stitching together five different SaaS products.

Solar OS gives them everything they need at a price that makes sense: **$49/month** for unlimited projects, or a **free tier** with up to 10 active projects for companies just getting started.

Compare that to their current $400-500/month Frankenstein stack.

## What I've learned

Building Solar OS taught me a few things I wasn't expecting:

**1. AI coding tools are production-ready.** I'm not talking about autocomplete or code snippets. Claude Code built full features — database schemas, API endpoints, complex UI components. The output needed refinement, but the foundation was solid every time.

**2. Product sense matters more than technical skill.** The hard part wasn't writing code. The hard part was deciding what to build, what to leave out, and how the workflow should feel. That's product thinking, and no AI tool can do it for you.

**3. Free tier beats free trial.** Small business owners have been burned by free trials that convert to charges. A genuinely free tier with real utility builds trust. And in a tight-knit industry like solar, trust spreads through word of mouth.

**4. The best time to build is when you can't code.** Sounds counterintuitive, but not knowing how to code forced me to think purely in terms of the user experience. I never got distracted by elegant architecture or clever abstractions. Every decision was "does this help the installer do their job?"

## What's next

Solar OS is live. The free tier is available now. I'm actively onboarding early users in Florida and collecting feedback.

On the roadmap:

- **Utility portal integrations** — auto-submit permit and interconnection applications
- **AI-powered lead scoring** — prioritize leads based on property data, consumption, and solar potential
- **Mobile app** — field crews need something that works on a phone at the job site
- **Financing integrations** — connect with solar loan providers directly from the proposal

## Try it

If you're a solar installer, a solar sales rep, or you know someone in the industry — I'd love your feedback.

Solar OS is free to start. No credit card required. No 14-day countdown timer.

**[Visit Solar OS →]**

And if you're a non-technical founder thinking about building software with AI tools — feel free to reach out. Happy to share what worked, what didn't, and how to avoid the mistakes I made along the way.

---

*Kaniel Tordjman is the founder of KANIEL TORD LLC and Solar OS. He owns Navitas Solar (Israel) and co-founded Solaris Energy (Panama). He currently lives in Thailand with his family and builds software from his apartment using AI tools and too much iced coffee.*
