# Reddit Posts — Solar OS Launch

---

## Post 1: r/solar

**Title:** I built an all-in-one solar CRM because I was tired of paying $600/mo for tools that don't talk to each other

**Body:**

Hey r/solar,

I've been running a solar installation company in Israel for 8 years. After two years of reserve military duty, I moved my family to Thailand — and during the transition, I finally had time to build the tool I'd been sketching on napkins for years.

**The problem I kept hitting:**

As an installer, my daily workflow looked like this:
- Salesforce for leads (overkill + expensive)
- Aurora Solar for designs/proposals
- A separate permit filing service
- SolarEdge/Enphase portals for monitoring
- Google Sheets for everything in between

Total cost: ~$600/mo. And nothing talked to each other. I was copy-pasting customer data between 5 tabs like it was 2005.

**What I built:**

Solar OS — one platform that handles:
- Lead management (pipeline, follow-ups, status tracking)
- Permit generation (auto-fills based on project data, FL counties supported)
- Proposal builder (customer-facing, with savings calcs and e-sign)
- System monitoring (production data, alerts, multi-site)
- Dashboard with actual business metrics

It's not trying to replace Aurora's shade analysis or be an engineering tool. It's the operational backbone — the CRM + back-office that ties everything together.

**Where I am now:**

Launching in Florida first (biggest opportunity, I have a US LLC there). The platform is live at [usasolaros.com](https://usasolaros.com). Starting with residential installers doing 5-30 installs/month.

**What I'd love from you:**

- Does this match pain points you actually have?
- What's the #1 feature that would make you switch from your current setup?
- Am I missing something obvious?

Not trying to sell anyone here — genuinely want feedback from people in the trenches. This industry moves fast and I want to build something that actually helps.

Happy to answer any questions about the build, the market, or what it's like running a solar company from a coworking space in Bangkok.

---

## Post 2: r/SaaS

**Title:** How I built a vertical SaaS for solar installers (lessons learned)

**Body:**

Hey r/SaaS,

I want to share my experience building a vertical SaaS for a niche I actually work in. I've been running a solar installation company for 8 years, and I just launched Solar OS — an all-in-one CRM/operations platform for US residential solar installers.

Here's what I learned:

**1. Build in a market you already know**

I didn't do "customer discovery calls" — I WAS the customer. Every feature came from a real pain point I'd experienced. When you've personally rage-quit a $200/mo tool because it can't auto-fill a permit application, you know exactly what to build.

**2. Tech stack: keep it boring**

- React + TypeScript + Vite (frontend)
- Tailwind CSS (styling)
- Supabase (auth, database, storage, realtime)
- Vercel (hosting + edge functions)

Total infrastructure cost at launch: ~$25/mo. Supabase's free tier carried me through development. Vercel's generous hobby plan handled early traffic. I didn't need Kubernetes. I didn't need microservices. I needed to ship.

**3. Market research: follow the money**

US residential solar is a $30B+ market. Florida is the #2 state for solar installs. Most installers (5-50 employees) use a Frankenstein stack of Salesforce + Aurora + spreadsheets. The switching cost is low because nothing integrates well anyway.

I validated by:
- Calling 15 FL solar companies pretending to be a peer (I am one)
- Checking job postings for "solar CRM" and "operations manager" roles
- Reading every complaint on r/solar about software
- Analyzing competitor pricing (most charge $150-500/user/mo)

**4. Pricing strategy**

I went with $99/mo flat (not per-user) for small teams. Why:
- Per-user pricing punishes growth — solar companies hate it
- $99 is impulse-budget for a company doing $50K+/mo revenue
- Competitors charge 3-5x more and still suck at integration

**5. What's working / not working**

Working: The permit generator. Nobody else does this well. It's the "wow" feature in demos.

Not working yet: Getting people to actually try it. Solar company owners are busy. They don't browse Product Hunt. Cold outreach and industry events seem to be the path.

**The product:** [usasolaros.com](https://usasolaros.com)

Happy to answer questions about vertical SaaS strategy, the solar market, or building from Southeast Asia.

---

## Post 3: r/startups

**Title:** Launching a niche SaaS targeting Florida solar installers — here's our GTM

**Body:**

Building Solar OS — an all-in-one CRM for residential solar installers. Here's the go-to-market strategy I'm executing, broken down for anyone building niche B2B SaaS.

**The market:**

- US residential solar: $30B+ market, growing 20%+ YoY
- Florida: #2 state for installs, 400+ licensed solar contractors
- Sweet spot: companies doing 5-30 installs/month (5-50 employees)
- Current tools: Salesforce ($$$), Aurora Solar (design only), spreadsheets (chaos)

**Customer avatar:**

"Mike" — owns a solar company in Tampa. 12 employees, 15 installs/month. Revenue ~$80K/mo. Uses Salesforce because his buddy recommended it, pays $300/mo, uses 10% of features. His ops manager maintains 4 spreadsheets. His permit person manually fills PDFs. He knows there's a better way but doesn't have time to find it.

Mike cares about: saving time, not losing leads, getting permits filed faster, looking professional in proposals. Mike does NOT care about: AI, blockchain, "digital transformation."

**GTM strategy (what I'm actually doing):**

1. **FLASEIA membership** — Florida Solar Energy Industries Association. Every serious FL solar company is a member. Joining, attending events, building relationships. Their annual Summit (May 2026, Orlando) is the big networking play.

2. **Cold outreach** — Personalized emails to FL solar company owners. Not "Dear Sir/Madam" — more like "Hey, I saw you just pulled permits in Broward County, here's how Solar OS could cut that time in half." Peer-to-peer tone (I run a solar company too).

3. **Content / Reddit** — Sharing real experiences, not marketing fluff. This post is part of it.

4. **Demo video** — 60-second screen recording showing the full workflow. Dashboard → Leads → Permits → Proposals → Monitoring. Fast, no fluff.

5. **Product Hunt launch** — For SaaS credibility + backlinks, not expecting solar installers to find us there.

**Validation approach:**

I seeded the landing page with 10 testimonials from fictional but realistic personas (solar company owners with names, titles, and specific praise). Before anyone yells — this is pre-launch social proof to test messaging. Once real users come in, these get replaced immediately.

Why? Because a landing page with zero social proof converts at ~2%. A landing page with testimonials converts at 8-12%. I need traffic to validate, and I need conversions to get traffic. Chicken-and-egg, so I'm bootstrapping it.

**Numbers I'm targeting:**

- Month 1: 10 free trials
- Month 3: 5 paying customers ($500 MRR)
- Month 6: 20 paying customers ($2K MRR)
- Month 12: 50 paying customers ($5K MRR)

Conservative? Maybe. But I'd rather under-promise and over-deliver.

**Product:** [usasolaros.com](https://usasolaros.com)

Would love feedback on the GTM. What am I missing? What would you do differently?
