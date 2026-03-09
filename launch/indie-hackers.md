# Indie Hackers Post — Solar OS

## Title
I built an all-in-one solar platform that replaces 6 tools — $0 to launch

---

## Post

### The backstory

I own a solar installation company in Israel called Navitas Solar. I also co-founded Solaris Energy in Panama. I've been installing panels and selling solar systems for years.

Here's what running a small solar company actually looks like: you wake up, open Aurora for design, Monday.com for project tracking, PandaDoc for proposals, Google Sheets for financials, Calendly for scheduling, and some random folder system for permits and contracts. That's 6 logins, 6 subscriptions, 6 places where data lives but never talks to each other.

Total cost? Easily $400-500/month. For a 2-3 person crew, that's painful.

I always thought: someone should build one tool that does all of this. Turns out that someone was me.

### The move

Six months ago, I moved my family from Israel to Thailand. Two kids, a baby, my wife, and a mass of unfinished business ideas. After two years of military reserve duty, I needed a reset.

In Thailand, I had time to think. And what I kept thinking about was how broken the software situation is for small solar installers — especially in Florida, where the residential solar market is exploding but most crews are 2-5 people running everything on spreadsheets.

### Building with AI

Here's the thing: **I don't know how to code.** I've never written a line of production code in my life before this project.

I used Claude Code (Anthropic's coding agent) for everything. I'd describe what I wanted in plain English, iterate on the output, and deploy. The entire product was built this way.

I'm not saying it was easy — I had to learn how React works, how Supabase handles auth, how Vercel deployments behave. But I never wrote code from scratch. Claude Code did the heavy lifting. I did the product thinking.

Total time from idea to working product: **about 2 weeks of focused building.**

Total cash spent on development: **$0** (just my Claude subscription and existing free-tier infrastructure).

### What Solar OS does

It's a vertical SaaS for residential solar installers:

- **CRM & Pipeline** — Track leads through your solar sales cycle (lead → site visit → proposal → contract → permit → install → PTO)
- **Proposal Generator** — Create professional proposals with system sizing and savings calculations
- **Project Management** — Track every install from permit submission to interconnection
- **Document Management** — Permits, contracts, photos, inspection reports — organized per project
- **Scheduling** — Crew assignments and install calendar
- **Dashboard & Analytics** — Close rates, revenue tracking, crew utilization

One tool. One subscription. Replaces Aurora CRM + Monday + PandaDoc + Sheets + Calendly + file storage.

### Tech stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Supabase (Postgres, Auth, Storage, Edge Functions)
- **Hosting:** Vercel
- **AI tooling:** Claude Code for all development
- **Cost to run:** ~$0/month on free tiers until scale

### Revenue model

- Free tier: up to 10 active projects (full features)
- Pro: $49/month (unlimited projects, advanced analytics)
- Team: $99/month (multi-user, permissions, white-label)

Target market: small residential solar installers in Florida, expanding to other US states. There are thousands of these companies — most are 2-10 people and currently duct-taping their operations together.

### Lessons learned

1. **Domain expertise > technical skills.** I knew exactly what solar installers need because I am one. No amount of user research replaces lived experience.

2. **AI coding tools are real.** Claude Code didn't just autocomplete — it architected features, debugged issues, and shipped production code. The barrier to building software has genuinely dropped.

3. **Vertical SaaS is underrated.** Generic CRMs try to serve everyone and serve no one well. Solar has specific workflows (permit tracking, interconnection, NEM applications) that horizontal tools can't handle without heavy customization.

4. **Start with the market you know.** I could have built for any industry. I built for mine. That saved months of research and gave me instant credibility.

5. **Free tier as GTM.** Small solar crews are price-sensitive. Giving them a real free tier (not a 14-day trial) builds trust and creates word-of-mouth in a tight-knit industry.

### What's next

- Launching in Florida first (KANIEL TORD LLC is registered there)
- Building integrations with utility company portals
- Adding AI-powered lead scoring
- Mobile app for field crews

### The ask

I'd love feedback from this community:

**What would you want to see in a solar CRM?**

If you know anyone in the solar industry — installers, sales reps, company owners — I'd love an intro. And if you're building with AI coding tools, happy to share what worked and what didn't.

Thanks for reading. Happy to answer any questions about the build process, the market, or the tech.

— Kaniel
