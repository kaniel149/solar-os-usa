# Review: Jennifer Walsh — Coastal Solar & Battery, Naples FL

**Reviewer:** Jennifer Walsh, Owner  
**Company:** Coastal Solar & Battery (15 employees, 180 installs/year)  
**Market:** Premium residential, avg home value $800K+  
**Revenue:** ~$6M/year  
**Current Stack:** Aurora Solar (3 seats), HubSpot CRM (free tier), DocuSign, Enphase monitoring  
**Date:** March 9, 2026

---

## Overall Impression

I like where this is headed, but it's not ready for my market yet. My customers are wealthy Naples homeowners spending $60K–$120K on solar+battery systems. They expect the same level of polish they get from their wealth manager or their Porsche dealership. Right now, Solar OS feels like a tool built for volume installers in California — not for a premium Florida operation like mine.

---

## Does This Feel PREMIUM Enough for My $800K+ Homeowners?

**Not yet. Score: 5/10**

The landing page has a dark "tech startup" aesthetic — amber/orange gradients on black. It looks fine for a SaaS product selling to installers, but that's not what my homeowners see. The real question is: what does the *proposal* look like that I'm sending to a retired surgeon in Pelican Bay? What does the *portal* look like when his wife checks their project status?

I see the proposal system has components (hero, simulation, gallery, financials, specs, timeline, contract, e-signature) — that's promising. But "beautiful proposal in 60 seconds" means nothing if I can't see it. I need to see the actual PDF or web proposal before I'd trust it with a $90K deal. My current Aurora proposals are decent but not gorgeous. I need *better*, not just *faster*.

**What premium means to me:**
- White-label with my Coastal Solar branding, not Solar OS branding
- Clean, minimal design — think Apple, not Amazon
- High-quality renders or imagery, not clip art
- A proposal that feels like a luxury brochure, not a spreadsheet

---

## Customer Portal — Can Homeowners Log In and See Project Status?

**Partially. Score: 6/10**

I found a Client Portal Page in the codebase. It's token-based (link access), shows production data, production history, site info, and has a refresh capability. That's a start.

**What I actually need:**
- A branded portal my homeowner can bookmark and return to anytime
- Project milestones: permit filed → permit approved → equipment ordered → install scheduled → inspection → PTO
- Photo updates from the install crew (my customers *love* seeing their panels go up)
- Push notifications or email updates at each milestone
- Post-install: live production monitoring they can show their neighbors
- A way to say "Hey, we just offset 100% of your electric bill this month" automatically

My wealthy customers don't call to ask status — they *expect* a portal. Right now I'm stitching this together with HubSpot emails and phone calls. If Solar OS nailed this, it would be the #1 reason I'd switch.

---

## Battery Storage Features — Is This Battery-First or Solar-First?

**Solar-first. That's a problem for my market. Score: 5/10**

The landing page says "Solar + Battery Design" and mentions Tesla Powerwall and Enphase IQ in the FAQ. But the entire positioning is solar-centric with battery as an add-on.

**In Naples, battery IS the sale.**

70% of my projects include battery storage. Post-Hurricane Ian, every homeowner in Collier County wants backup power. I don't sell "solar with optional battery" — I sell "hurricane protection with solar to pay for it." 

**What I need from a battery-first platform:**
- Whole-home backup sizing calculator (critical loads vs. full home)
- Battery-only proposals (some customers just want Powerwalls, no panels)
- Load panel configuration and automatic transfer switch details
- Storm preparedness mode / hurricane prep features
- Multi-battery stacking visualization (many of my jobs are 2-3 Powerwalls)
- Clear messaging: "Your home will stay powered for X hours during an outage"

The equipment database has Tesla Powerwall 3, Enphase IQ 5P, IQ 10T, Franklin WH, Generac — that's a solid lineup. But having them in a database and having battery-first workflows are two different things.

---

## Proposal Design — Will It Impress a Wealthy Homeowner?

**Can't fully evaluate — need to see actual output. Score: 5/10**

The proposal system has the right *components*: hero section, 3D simulation, photo gallery, financials with purchase/rental toggle, specs, timeline, contract with e-signature. The architecture is there.

**My concerns:**
- It mentions "cash/loan/lease/PPA comparisons" — good, but my customers almost always pay cash or do a home equity line. I need the cash option to feel premium, not like a budget comparison chart
- Is the e-signature legally binding in Florida? I currently pay $40/mo for DocuSign
- Can I customize the proposal template? Different layouts for different price points?
- Can I include a "hurricane protection" section specifically for battery proposals?

**What would impress my homeowner:**
- A proposal that opens like a website (not a PDF), works on iPad
- Aerial imagery of their actual roof with panel placement overlaid
- A section showing "During Hurricane Ian, your system would have provided X days of power"
- Financing that shows total 25-year savings alongside home value increase

---

## Enphase Monitoring Integration — Can I Show Customers Their System?

**Unclear from what I see. Score: 4/10**

The landing page mentions "Fleet Monitoring" with "real-time alerts, production tracking, and O&M workflows." The Client Portal page pulls production data and shows history charts. But I don't see explicit Enphase API integration.

**What I need:**
- Direct Enphase Enlighten API pull — I have 140+ active Enphase systems
- Per-panel production visible in the customer portal (Enphase's strength)
- Automatic alerts when a microinverter goes offline (currently I use Enphase Installer Toolkit)
- Battery charge/discharge visualization in real-time
- If I'm paying $99/user/mo for Solar OS, I shouldn't also need Enphase Installer Toolkit at $50/mo/seat

If Solar OS replaces my Enphase monitoring dashboard AND my CRM AND my proposal tool, that's compelling. If it just duplicates some of what Enphase already gives me for free, it's not worth it.

---

## AHJ / Permitting for Naples

**Collier County is MISSING. Score: 3/10**

This is a dealbreaker for launch. I searched the AHJ database — no Collier County, no Naples. The closest Florida entries are Miami-Dade, Tampa, Orlando, Jacksonville, St. Pete, Fort Lauderdale, and Cape Coral (Lee County, next door to me). 

Cape Coral being there is nice since Lee County has similar wind requirements, but Collier County has its own permitting office and its own quirks. FL says they support Florida as a launch state, but if you don't have my actual jurisdiction, the "permit generator" feature is useless to me.

**Collier County specifics I need:**
- Wind load: 150 mph (we're in the wind-borne debris region post-Ian updates)
- FBC 8th Edition compliance
- Collier County Growth Management permit portal
- Separate electrical permit required
- FPL interconnection (not Duke, not OUC — FPL)
- FL Product Approval required for all components
- Hurricane strapping / uplift calculations are heavily scrutinized here post-Ian

---

## Scores (1-10)

| Category | Score | Notes |
|----------|-------|-------|
| **Landing Page** | 7 | Clean, professional, good messaging for mid-market. Not premium enough for my segment. |
| **Feature Set** | 6 | Right ideas (CRM + proposals + permits + monitoring), but battery features underdeveloped and my AHJ is missing |
| **Premium Feel** | 5 | Feels like a startup tool, not a luxury experience. My brand is premium — my tools need to match. |
| **Would I Try It?** | 5 | Not today. But if they added Collier County AHJ, a premium proposal template, real Enphase integration, and a customer portal with project tracking — I'd trial it in a heartbeat. |

**Overall: 5.75/10**

---

## What Would Make My Naples Homeowners Say "Wow"

1. **A customer portal that feels like a luxury concierge app** — project timeline, live production, savings counter, photo updates. Something my homeowner shows their neighbor at the country club.

2. **Hurricane protection front and center** — "Your 3-Powerwall system provides 72 hours of whole-home backup" as the headline of the proposal, not buried in specs.

3. **White-glove proposal design** — aerial view of their actual roof, premium typography, my Coastal Solar branding prominent. Think Restoration Hardware catalog, not Home Depot flyer.

4. **Post-install monitoring dashboard** — branded with my company, showing real-time Enphase data, monthly savings reports auto-emailed, and a "your system just prevented X lbs of CO2" counter (my customers love telling their friends).

5. **Collier County in the AHJ database** — with real permit requirements, FPL interconnection details, and post-Hurricane Ian updated wind load specs.

6. **Battery-first workflow option** — let me start a proposal from "backup power needs" instead of always starting from "solar system size."

---

## Bottom Line

Solar OS has good bones. The all-in-one concept is exactly what I need — I'm tired of Aurora + HubSpot + DocuSign + Enphase as four separate tools. But right now it's built for a 500-install/year California volume shop, not a 180-install/year Florida premium operation. 

**If they nail the premium experience and battery-first workflow, I'd pay $99/user/mo for 8 seats ($792/mo) without blinking — that's still less than my Aurora bill.** But they need to earn it. My customers notice cheap. And they tell their friends.

— Jennifer Walsh, Coastal Solar & Battery, Naples FL
