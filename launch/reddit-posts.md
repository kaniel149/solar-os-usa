# Reddit Launch Posts — Solar OS

---

## 1. r/solar

### Title
We built a free alternative to Aurora's CRM — feedback welcome

### Body

Hey r/solar,

I own a solar installation company in Israel (Navitas Solar) and co-founded one in Panama. I've spent years using Aurora, Monday.com, PandaDoc, and spreadsheets to manage everything — and hating every minute of juggling between them.

So I built **Solar OS** — a single platform that handles the full solar workflow:

- Lead tracking and sales pipeline (lead → site visit → proposal → contract → permit → install → PTO)
- Proposal generation with system sizing and savings estimates
- Project management per install
- Document storage (permits, contracts, interconnection apps)
- Crew scheduling
- Analytics dashboard

It's built specifically for small residential installers (2-10 person teams) who can't justify $400-500/mo in software subscriptions.

**Pricing:** Free tier with up to 10 active projects. Pro is $49/mo for unlimited.

I'm not trying to replace Aurora's design tool — this is about everything else. The CRM, the project tracking, the document chaos, the scheduling.

Looking for honest feedback from people who actually do this work. What's missing? What would make you switch from your current setup?

Happy to give early access to anyone here who wants to try it.

---

## 2. r/SaaS

### Title
From Excel hell to SaaS: How I built Solar OS with AI

### Body

Quick background: I own a solar installation company. For years, I managed leads in Google Sheets, proposals in PandaDoc, projects in Monday.com, schedules in Calendly, and documents in Google Drive. Total cost: ~$500/month. Total integration between them: zero.

I'm not a developer. Never have been. But I kept looking at this mess and thinking: this should be one tool.

Six months ago I moved to Thailand and finally had time to build it. I used **Claude Code** (Anthropic's AI coding agent) to build the entire product. React + TypeScript + Tailwind on the frontend, Supabase on the backend, deployed on Vercel.

**Time to MVP: ~2 weeks.**
**Development cost: $0** (just my Claude subscription).

The product is called **Solar OS** — a vertical SaaS for residential solar installers. CRM, proposals, project tracking, documents, scheduling, and analytics in one platform.

**What I've learned about vertical SaaS:**

1. **Domain expertise is your moat.** I know what solar installers need because I am one. Generic CRM builders can't replicate that.

2. **The TAM is smaller but the willingness to pay is real.** Small solar crews are spending $400-500/mo on disconnected tools. Consolidating at $49/mo is an easy sell.

3. **AI coding tools changed the economics.** A non-developer can now build production software. The barrier isn't code anymore — it's knowing what to build.

4. **Free tier > free trial for SMBs.** Small business owners have been burned by trials that expire. A real free tier builds trust.

Revenue model: Free (10 projects) → Pro $49/mo → Team $99/mo.

Starting in Florida where the residential solar market is booming. Would love to hear from other vertical SaaS founders — what worked for your GTM?

---

## 3. r/startups

### Title
Launching a vertical SaaS for solar installers — lessons from building with Claude Code

### Body

I'm a solar company owner (Israel + Panama), not a software developer. I moved to Thailand with my family and built a SaaS product in ~2 weeks using Claude Code. Here's what I learned.

**The problem:** Small solar installation companies (2-10 people) use 5-6 disconnected tools to run their business. Aurora for design, Monday for tracking, PandaDoc for proposals, Sheets for everything else. It costs $400-500/month and nothing talks to anything.

**The product:** Solar OS — one platform that handles the entire solar workflow. CRM, proposals, project management, documents, scheduling, analytics. $49/month replaces $500/month in tools.

**The build process:**

I described features in plain English to Claude Code. It wrote the code. I iterated, tested, and deployed. Tech stack: React, TypeScript, Tailwind, Supabase, Vercel.

This is not a toy project — it's a full-featured platform with auth, role-based access, real-time data, file storage, and a drag-and-drop pipeline.

**Lessons:**

1. **Build for your own industry first.** I wasted zero time on customer discovery because I AM the customer. I know what sucks because I've lived it.

2. **AI doesn't replace product sense.** Claude Code wrote the code, but I made every product decision. Knowing WHAT to build matters more than knowing HOW.

3. **Vertical > horizontal for bootstrappers.** Competing with Salesforce is suicide. Competing with "Salesforce but for solar" is a real business.

4. **Florida is the wedge.** Huge residential solar market, lots of small installers, no dominant vertical tool. Perfect beachhead.

5. **$0 launch is possible.** Supabase free tier, Vercel free tier, Claude subscription I already had. Total infrastructure cost at launch: $0/month.

**Current status:** Live product, launching in Florida. KANIEL TORD LLC registered. Free tier available.

What would you do differently? Open to feedback on GTM strategy.

---

## 4. r/SideProject

### Title
Built an all-in-one solar platform in 2 weeks

### Body

I own solar companies in Israel and Panama. Got tired of paying $500/mo for 6 different tools that don't talk to each other. Moved to Thailand, opened Claude Code, and built the tool I always wanted.

**Solar OS** — CRM, proposals, project tracking, documents, scheduling, and analytics for solar installers. All in one platform.

**Stack:**
- React + TypeScript + Vite + Tailwind
- Supabase (DB, auth, storage, edge functions)
- Vercel
- Built entirely with Claude Code (I'm not a developer)

**Timeline:** ~2 weeks from idea to working product

**Cost to build:** $0 (Claude subscription + free tiers)

**Pricing:** Free for up to 10 projects. $49/mo for unlimited.

The key advantage: I actually know the solar industry. Every feature exists because I personally needed it while running my company.

Launching in Florida first. Would love feedback — especially from anyone who's built vertical SaaS for a specific industry.

[Link]

---

## 5. r/Entrepreneur

### Title
How I turned my solar company's frustration into a SaaS product

### Body

I've owned a solar installation company (Navitas Solar) in Israel for several years and co-founded Solaris Energy in Panama. Running these businesses taught me one thing: the software situation for small solar companies is terrible.

Here's what a typical small installer's tech stack looks like:

- Aurora Solar: ~$150/mo (design + proposals)
- Monday.com: ~$80/mo (project tracking)
- PandaDoc: ~$60/mo (contracts)
- Google Workspace: ~$30/mo (docs, sheets, email)
- Calendly: ~$20/mo (scheduling)
- Random file storage: ~$10-30/mo

**Total: $350-500/month.** For a 3-person crew doing 5-10 installs a month, that's a significant overhead. And none of these tools are built for solar — you're constantly adapting generic software to a specific workflow.

**What I built:**

Solar OS — a single platform purpose-built for residential solar installers. It handles leads, proposals, project management, documents, scheduling, and analytics. One login, one subscription.

**How I built it:**

I don't code. I used Claude Code (an AI coding agent) to build the entire product from my apartment in Thailand. Described what I wanted, iterated on the output, deployed on Vercel with Supabase as the backend. Two weeks. Zero development cost.

**The business model:**

- Free tier (10 active projects) — gets people in the door
- Pro at $49/month — unlimited projects, analytics
- Team at $99/month — multi-user, permissions, white-label

**Why I think this works:**

1. I'm not guessing at product-market fit. I AM the market.
2. The residential solar industry in Florida is exploding. Thousands of small companies, very few purpose-built tools.
3. At $49/mo vs $500/mo, the value prop sells itself.
4. Solar installers are a tight community. Word of mouth is powerful.

KANIEL TORD LLC is registered in Florida. Launching there first, expanding state by state.

Has anyone else built software for their own industry? Curious how you handled the transition from operator to SaaS founder.
