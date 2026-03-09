# Solar OS — Customer Review
## Maria Rodriguez | Operations Manager, Brightway Solar
### Miami, FL | 35 employees | 400+ installs/year | ~$12M revenue

**Date:** March 9, 2026  
**Current Stack:** Salesforce ($1,200/mo), custom permit tracking spreadsheet, Enphase monitoring, DocuSign, QuickBooks  
**Salesforce customization investment:** ~$25K

---

## First Impression

The landing page is clean, modern, and clearly designed by someone who understands the solar industry — not a generic SaaS template. The headline "Stop paying for 6 tools. Start closing in one." hits me immediately because that's exactly my situation. I'm running Salesforce + a messy Google Sheet for permits + Enphase + DocuSign + QuickBooks. Five tools. Six logins.

**What works:** The pain points section nails it. "6 tools, 6 logins, 6 invoices" — that's literally my life. The "Permitting is a nightmare" card? I almost laughed. I've lost entire weekends to Miami-Dade permit packages.

**What concerns me:** The testimonials look fabricated. "Mike Rodriguez, SunPeak Solar, San Diego" — I've been in Florida solar for 12 years and I know every installer worth knowing in the Southeast. I've never heard of SunPeak Solar or Sunshine State Energy. If these are real companies, link to them. If they're made up, that's a red flag for me. I need to trust the vendor I'm moving my business onto. Every installer I know checks references.

Also — "Now available in CA, TX, FL & NY" — but is the product actually live and deployed? Or is this a landing page for something in development? The "Get Early Access" CTA suggests it's not fully launched, which is a big deal if you're asking me to migrate off Salesforce.

---

## AHJ Database — The Make or Break Feature

This is where Solar OS could win me over or lose me entirely.

**The good:**
- Miami-Dade is in the database. Both City of Miami (fl-miami) AND Miami-Dade County unincorporated (fl-miami-dade-county). That's important because we do installs in both jurisdictions.
- The HVHZ (High Velocity Hurricane Zone) requirements are correctly noted — 175 mph wind load. This is accurate and shows someone actually researched Florida permitting.
- Miami-Dade NOA product approval requirement is flagged. This is critical. Half the panels that work in California can't be used in Miami-Dade.
- Fort Lauderdale / Broward County is included (fl-fort-lauderdale), with the correct 170 mph wind load. About 30% of our installs are in Broward.
- Cape Coral, Tampa, Orlando, Jacksonville, St. Pete — good Florida coverage overall (8 Florida jurisdictions).

**The bad:**
- There's no Coral Gables, Hialeah, Doral, or Homestead. These are separate municipalities within Miami-Dade County, each with their OWN building departments. In real life, we submit permits to Coral Gables separately from City of Miami. They have different processes, different reviewers, different turnaround times. Lumping them into "Miami-Dade County (Unincorporated)" is incorrect.
- No Pembroke Pines, Hollywood, Miramar, or Coral Springs in Broward County. These are among the biggest residential solar markets in South Florida.
- The 10-day average review time for Miami is actually optimistic. Plan review in City of Miami Building can take 15-20 business days during busy season (January–April). I've had permits sit for 3 weeks.
- Where's the actual permit GENERATION? The database has requirements lists, but does it auto-generate the structural calculations for HVHZ? Does it know which NOA-approved products to specify? The permit generator page in the codebase shows a search-and-browse interface, but I need to see actual document generation — site plans, single-line diagrams, load calculations pre-filled with my project data.

**Verdict on AHJ:** Promising foundation, but not deep enough for a company that does 400 installs/year in South Florida. I'd need at least 15-20 South Florida jurisdictions, not 3.

---

## ITC Calculator

This is well-built. The IRA bonus adders (domestic content +10%, energy community +10%, low-income +10/20%) are correctly implemented. The state incentive database is a nice touch — it correctly shows Florida has property tax exemption but no cash rebate, which is accurate.

The payback period calculator with annual rate increases and the 25-year ROI calculator with panel degradation are exactly what my sales reps need. Right now they're using a spreadsheet I built that does roughly the same thing, but having it integrated into proposals would save significant time.

**Missing:** No financing comparison (cash vs. loan vs. lease vs. PPA side-by-side). The landing page mentions this but I don't see it in the calculator code. Also no utility rate database — you'd need FPL rate structures for our territory, including TOU rates for commercial.

---

## Lead Sources

The US lead sources database is solid. EnergySage, Angi, Google Ads, referral tracking — these are our actual channels. The avg cost-per-lead and conversion rate benchmarks are in the right ballpark. We pay about $90/lead on EnergySage (they say $100, close enough) and our referral conversion is around 30% (they say 35%).

**What I like:** The ROI calculator per channel. Right now I track this manually in a spreadsheet. Having it built into the CRM would help me allocate my marketing budget better.

**Missing:** No Modernize, no Solar Reviews, no SolarQuotes. These are significant lead gen platforms for FL installers. Also no integration with Google Local Services Ads (LSA), which is becoming our best-performing paid channel.

---

## CRM Codebase Assessment

I browsed the page structure and component library. There's a LOT here:

**Impressive breadth:**
- Kanban board, table view, calendar view, AND map view for projects — Salesforce only gives me table + Kanban out of the box
- Permit generator page with AHJ search
- Monitoring page (fleet monitoring)
- Quotes/proposals system
- Team management
- Project import modal (Salesforce migration potential)
- Roof scanner / designer
- Construction tracking page
- CFO dashboard with financial reporting

**Concerns:**
- Many pages reference Hebrew-language comments and Israeli-market features (IEC inspections, Nipendo automation, "cemetery" status with Hebrew notes). This tells me the product was originally built for the Israeli market and is being adapted for the US. That's not inherently bad — Israel is a mature solar market — but it raises questions about how US-specific the workflows really are.
- No DocuSign or e-signature integration visible in the codebase
- No QuickBooks or accounting integration
- No Enphase/SolarEdge API monitoring integration (the monitoring page exists but I need to see actual API connections)
- No financing partner integrations (Sunlight Financial, Mosaic, GoodLeap, Dividend Finance — these are critical for residential solar)

---

## What Features Excite Me

1. **AHJ Permit Generator** — If this actually generates permit packages (not just lists requirements), it would eliminate my biggest operational bottleneck. We spend $50-75 per permit package in admin labor.
2. **All-in-one pipeline** — Lead → Sale → Design → Permit → Install → PTO in one system. Salesforce can do this, but it cost me $25K in customization and STILL doesn't flow naturally.
3. **Fleet monitoring dashboard** — Having monitoring in the same system as my CRM would be huge. Right now Enphase monitoring is a separate login, and when a customer calls about performance, my team has to switch between systems.
4. **Mobile site survey** — Our roof measurements currently go into a Google Form → Google Sheet → Salesforce manually. A native mobile survey tool would save 20 min per site visit.
5. **ITC calculator with bonus adders** — Properly handles domestic content, energy communities, and low-income bonuses. Most tools still show a flat 30%.

---

## What's MISSING for a 35-Person Company

### Critical (Would block adoption):
1. **Role-based access control** — I have sales reps who should see leads but not financials, installers who need project details but not pricing, and an office manager who needs everything. Can I set permissions per role?
2. **Multi-location / territory management** — We have crews in Miami-Dade, Broward, and Palm Beach. I need territory assignment and reporting by region.
3. **Financing integrations** — 70% of our residential deals use third-party financing (GoodLeap, Mosaic, Sunlight). If I can't pull financing pre-quals and send loan docs from within the CRM, it's a dealbreaker.
4. **Accounting integration** — QuickBooks sync for invoicing. We invoice at milestones (contract signing, rough electric, final inspection, PTO). This needs to be automated.
5. **DocuSign or e-signature** — The landing page mentions "e-signature built in" but I don't see evidence of this in the codebase. We do 400+ contracts/year — this is non-negotiable.
6. **Audit trail / compliance** — Florida requires certain documentation retention. I need timestamped records of every change to a project, who made it, and when.

### Important (Would influence decision):
7. **Commission tracking** — Salesforce tracks my reps' commissions by deal. $150/kW for door-to-door, $100/kW for self-generated leads. I need this built in.
8. **Inventory management** — I have $200K in panel and inverter inventory at any given time. Basic inventory tracking (what's in stock, what's allocated to projects, what needs ordering) would be valuable.
9. **Utility interconnection tracking** — After install, we submit interconnection applications to FPL. This can take 30-60 days. I need to track this in the pipeline.
10. **Customer portal** — Homeowners constantly call asking "what's the status of my install?" A self-service portal would reduce inbound calls by 40%.

### Nice to Have:
11. **Automated text/email sequences** — Post-install follow-ups, review requests, referral asks
12. **Reporting / business intelligence** — Close rates by rep, avg deal size by lead source, install time by crew, permit turnaround by jurisdiction
13. **Photo documentation** — Pre-install, mid-install, post-install photos attached to the project record

---

## Pricing Analysis

**Current spend:**
- Salesforce: $1,200/mo (8 users × $150)
- Aurora Solar: $0 (we use manual design + HelioScope at ~$180/mo)
- DocuSign: ~$75/mo
- Enphase monitoring: included with equipment
- QuickBooks: ~$80/mo
- Google Sheets (permits): $0 but costs me ~15 hours/week in labor
- **Total: ~$1,535/mo + ~$3,000/mo in permit admin labor**

**Solar OS pricing at my scale:**
- I need 8 CRM users + maybe 4 field users
- Pro plan ($49/user): Too limited (10 users max, 50 permits/mo — we do 35+ permits/month)
- **Business plan ($99/user × 12 users = $1,188/mo):** This is where I'd land

**Assessment:** At $1,188/mo for Business, it's slightly cheaper than my current Salesforce alone ($1,200/mo), and theoretically replaces Aurora/HelioScope + DocuSign + my permit spreadsheet nightmare. If the permit generator actually works and saves me 15 hours/week of admin time, the ROI is obvious — that's $3K+/month in saved labor.

**Would I pay more?** Yes. I'd pay $149/user for a true enterprise tier if it included:
- Guaranteed 99.9% uptime SLA
- Dedicated Florida support specialist
- Custom AHJ additions within 48 hours
- Financing partner API integrations
- Advanced reporting and dashboards
- SOC 2 compliance documentation

---

## Data Migration Concerns

This is my #1 anxiety. I have:
- ~3,200 historical projects in Salesforce (going back 6 years)
- ~800 active pipeline opportunities
- Custom fields for: HOA status, roof type, electrical panel brand, FPL account number, permit tracking status
- 400+ DocuSign completed contracts linked to Salesforce records
- Lead source attribution data for marketing ROI analysis

**Questions I need answered:**
1. Can you import custom Salesforce fields, or do I lose my data structure?
2. What about linked documents (contracts, permits, photos)?
3. Can I run both systems in parallel during migration?
4. What's the rollback plan if something goes wrong?
5. Do you preserve historical data integrity (timestamps, user attribution)?
6. The landing page says "fully migrated within 48 hours" — for 3,200 records with custom fields? I'm skeptical.

---

## Security & Compliance Questions

1. **Where is data hosted?** AWS? GCP? What region? For CCPA/CPRA compliance, I need to know.
2. **SOC 2 Type II certification?** My larger commercial clients (HOAs, property managers) ask for this.
3. **Data encryption?** At rest and in transit?
4. **Backup frequency?** RPO/RTO commitments?
5. **GDPR/CCPA compliance?** We have California referral partners who send us leads.
6. **User access logs?** I need to know who accessed what data and when.
7. **Two-factor authentication?** Non-negotiable for a system handling customer PII and financial data.
8. **Data portability?** If I leave Solar OS, can I export ALL my data in a standard format?

---

## Scores (1-10)

| Category | Score | Notes |
|----------|-------|-------|
| **Landing Page** | 7/10 | Excellent design, clear value prop. Loses points for fake testimonials and "early access" ambiguity. Is this launched or not? |
| **Feature Set** | 6/10 | Impressive breadth for a startup. AHJ database is a genuine differentiator. But critical enterprise features are missing (RBAC, financing, accounting integrations). Israeli-market DNA is visible and needs more US adaptation. |
| **Pricing** | 8/10 | Competitive, especially Business tier. Significantly cheaper than Salesforce + Aurora + DocuSign combined. The permit generator alone could justify the cost. |
| **Would I Try It?** | 5/10 | I'd do a pilot — maybe 2-3 users for 60 days on non-critical projects. But I wouldn't migrate my whole operation until I see: (a) real customer references I can call, (b) financing integrations, (c) deeper South Florida AHJ coverage, and (d) data migration proof with a dataset similar to mine. |

**Overall: 6.5/10** — Promising product with a genuine understanding of solar installer pain points. Not ready for a 35-person operation yet, but could be in 6-12 months.

---

## What Would Make Me Recommend This to Other Installers

1. **Prove the permit generator works in Miami-Dade HVHZ.** If you can auto-generate a permit-ready structural calculation package with correct wind loads, NOA-approved products, and Miami-Dade-specific forms — and get it approved on first submission — I'll be your biggest evangelist. This is the single most painful process in South Florida solar.

2. **Get 3-5 real Florida installers using it and let me talk to them.** Not testimonials on a webpage. Let me call an ops manager at a 20-50 person company and ask them about the migration, the bugs, the support response time.

3. **Build financing integrations.** GoodLeap and Mosaic at minimum. Without third-party financing in the workflow, your CRM is missing the step where 70% of deals actually close.

4. **Show me a real Salesforce migration.** Take a dataset of 500+ records with custom fields, linked documents, and historical data. Migrate it. Show me nothing was lost.

5. **Offer a "Salesforce Migration Guarantee."** If the migration doesn't preserve my data, or if within 90 days the platform doesn't meet my operational needs, you'll help me migrate back at no cost. That kind of confidence would get my attention.

6. **Get SOC 2 certified.** Or at least publish your security practices transparently. I'm handing you customer PII, financial data, and contractual documents.

---

## Final Thoughts

I've been burned before. Two years ago a vendor called "SolarNinja" promised the same all-in-one platform and went under in 8 months. My data was held hostage for 3 weeks.

Solar OS has better bones than SolarNinja ever did. The AHJ database, the ITC calculator, the lead source tracking — these show someone who actually understands the solar business, not just SaaS metrics. The fact that this was built on a production CRM used in the Israeli solar market gives it credibility.

But I need more than bones. I need muscle. Financing. Integrations. Compliance. Scale.

Show me those, and I'm not just a customer — I'm your reference account for South Florida.

— Maria Rodriguez  
Operations Manager, Brightway Solar  
Miami, FL
