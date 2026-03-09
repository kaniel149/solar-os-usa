# How I Built a Solar SaaS Platform Without Writing a Single Line of Code

I'm not a software engineer. I'm a solar industry guy who got tired of duct-taping five different tools together to run an installation business. So I built my own platform.

Not by learning to code. Not by hiring an expensive development team. I used AI coding tools — what people now call "vibe coding" — to build a complete solar business management platform from idea to working product.

This is the story of how that happened, what the process actually looks like, and why I think every solar industry professional with domain expertise is sitting on a software opportunity they don't realize they have.

## What Is Vibe Coding?

"Vibe coding" is a term coined in early 2025 to describe building software by describing what you want in plain English and letting AI write the code. You don't need to know JavaScript, Python, or any programming language. You need to know what the software should do — and you need to be willing to iterate.

The tools that make this possible:

- **AI coding assistants** like Claude Code, Cursor, and GitHub Copilot that generate functional code from natural language descriptions
- **Modern frameworks** like React, Next.js, and Supabase that provide building blocks for web applications
- **Deployment platforms** like Vercel and Netlify that publish your application with a single click
- **Design systems** like Tailwind CSS that make professional-looking interfaces accessible without design skills

The key insight: **domain expertise is more valuable than coding expertise.** A solar installer who knows exactly what pipeline stages, proposal calculations, and permit workflows should look like can build better solar software than a developer who's never sold a solar system.

## Why I Built Solar OS

I'd been running a solar installation business and dealing with the same problems every small installer faces:

### The Tool Sprawl Problem

- **CRM:** Salesforce or HubSpot ($75–$150/user/month, plus customization)
- **Proposals:** PandaDoc ($35/user/month) or custom Word templates
- **Project management:** Monday.com ($24/user/month) or Trello
- **Contracts:** DocuSign ($25/user/month)
- **Monitoring:** SolarEdge or Enphase dashboards (separate platforms per inverter brand)
- **Scheduling:** Google Calendar or Calendly

Six tools. Six logins. Six subscriptions. And none of them talked to each other without expensive integrations.

### The "Not Built for Solar" Problem

Generic tools require endless customization to fit solar workflows. A standard CRM doesn't have pipeline stages for "Permit Submitted" or "Inspection Scheduled." A generic proposal tool doesn't calculate the federal ITC or net metering savings. A standard project management tool doesn't track AHJ-specific permit requirements.

I kept thinking: someone should build an all-in-one platform designed specifically for small solar installers. Then I realized that someone could be me — even without knowing how to code.

## The Build Process: Month by Month

### Month 1: Define the Product

Before touching any AI tool, I spent a month defining exactly what the platform needed to do. This is where domain expertise matters more than anything.

I mapped every workflow in my solar business:

1. **Lead comes in** → captured, qualified, assigned, followed up
2. **Site visit** → scheduled, completed, notes captured, photos stored
3. **Proposal** → generated from site visit data, sent with e-signature, tracked
4. **Contract** → signed digitally, payment collected, project created
5. **Permitting** → application generated, submitted, status tracked, approval noted
6. **Installation** → scheduled, crew assigned, completed, inspected
7. **Monitoring** → system connected, performance tracked, alerts triggered

For each workflow, I listed every data field, every status transition, every notification, and every document. This became my product specification — written in plain English, not technical documentation.

### Month 2: Prototype with AI

I started with Claude Code and a simple prompt approach:

**"Build me a web application for managing solar installation projects. It should have a lead pipeline with these stages: [list]. Each lead should have these fields: [list]. When a lead moves to 'Proposal Sent,' it should auto-generate a proposal PDF with these calculations: [formulas]."**

The first version was rough. But it worked. I could add leads, move them through stages, and see a basic pipeline. The AI generated the database schema, the user interface, and the business logic from my descriptions.

### Month 3–4: Iterate and Refine

This is where vibe coding gets real. The first version does 60% of what you need. The remaining 40% requires iteration — lots of it.

My daily process looked like this:

1. Use the platform as if I were running my business
2. Notice something that doesn't work right or is missing
3. Describe the fix or feature in plain English to the AI
4. Review what it generates
5. Test it
6. Repeat

Some examples of iterative prompts:

- "The proposal PDF needs to show a financing comparison table with three options: cash purchase, 12-year loan at 5.9%, and 20-year loan at 6.9%. Calculate the monthly payment, total cost, and 25-year savings for each."
- "Add a permit tracking section. Each project should have fields for: permit type, AHJ name, submission date, approval date, permit number, and inspection date. Show a warning if a permit has been pending for more than 10 business days."
- "The dashboard should show: total pipeline value, number of active projects by stage, installations completed this month, and revenue this month."

### Month 5–6: Production-Ready

Getting from "it works for me" to "it works for other people" required:

- **User authentication** — Secure login, role-based access (admin, sales, project manager)
- **Multi-tenancy** — Each installation company gets their own isolated data
- **Error handling** — What happens when someone enters invalid data? When the internet drops during a form submission?
- **Mobile responsiveness** — Installers are in the field. The platform had to work on phones.
- **Data backup** — Automated daily backups. Non-negotiable.

AI tools handled most of this. I described the requirement, the AI generated the implementation, I tested it, and we iterated until it was solid.

## What I Learned About Vibe Coding

### Domain Expertise Is Your Superpower

The developers I talked to early on wanted to build features I didn't need and missed features I couldn't live without. They'd never submitted a permit to Miami-Dade County. They'd never tried to explain three financing options to a confused homeowner.

Knowing the problem space deeply means you make better product decisions. AI handles the code. You handle the "what should this software actually do?"

### You Still Need to Learn Basics

I didn't write code, but I learned what code does. I understand what a database is, what an API does, how authentication works, and what "deploying" means. You don't need to write React — but you need to know that your frontend talks to a backend that talks to a database.

Think of it like driving a car. You don't need to be a mechanic, but you should understand what the engine, brakes, and transmission do.

### Iteration Speed Is Everything

The reason AI-assisted building works isn't that it produces perfect code on the first try. It doesn't. The reason it works is that iteration is fast. Describe a change, get it implemented in minutes, test it, describe the next change. What would take a development team a sprint takes an afternoon.

### Some Things Still Need Humans

Payment processing (Stripe integration), security reviews, legal compliance (especially around e-signatures), and complex integrations with external APIs sometimes required human expertise. I worked with freelance developers for specific, well-defined tasks — not ongoing development, but targeted expertise.

## Why Solar Is Perfect for This Approach

The solar installation industry has a unique combination of factors that make it ideal for vibe-coded software:

1. **Deep domain expertise exists outside of tech** — Solar installers know their workflows better than any developer
2. **Existing tools are either too expensive or too generic** — There's a clear gap in the market
3. **Workflows are standardized enough to automate** — Lead → design → proposal → permit → install → monitor is consistent across companies
4. **The market is growing** — More installers entering the market means more potential users
5. **Small installers are underserved** — Enterprise tools are priced for large companies. Small installers get leftovers.

## Key Takeaways

- **Vibe coding lets domain experts build software** without learning to program — you describe what you want, AI generates the code
- **Domain expertise is more valuable than coding skill** when building industry-specific software
- **The build process is iterative** — expect 60% right on the first pass and plan for continuous refinement
- **You still need to understand basics** — not how to write code, but how software systems work
- **Solar is an ideal industry** for this approach because workflows are standardized, existing tools are overpriced, and small installers are underserved
- **The total build time was about 6 months** from concept to production-ready — a fraction of traditional development timelines and costs

## The Result: Solar OS

Solar OS is what came out of this process — an all-in-one platform built by someone who actually runs a solar business, for people who actually run solar businesses. CRM, proposals, contracts, permitting, project management, and monitoring in one place for $49/month.

No enterprise pricing. No six-month implementation. No features designed by developers who've never installed a panel.

**Try it yourself at [solaros.app](https://solaros.app) — start your free trial today.**
