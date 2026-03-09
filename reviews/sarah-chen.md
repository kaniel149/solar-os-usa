# Solar OS USA — Customer Review
## Sarah Chen, VP of Operations · PowerHome Solar · Orlando, FL
### Date: March 9, 2026

---

## Executive Summary

I spent 2 hours deep-diving into Solar OS — landing page, implementation guide, codebase architecture, data models, AHJ database, equipment catalog, utility database, ITC calculator, and lead source tracking. This is a **promising early-stage product** with genuinely impressive data infrastructure, but it is **not yet enterprise-ready** for a company at our scale (85 employees, 1,200 installs/year, multi-state). Below is my detailed assessment.

---

## 1. Landing Page Assessment

**Score: 7/10**

### What works:
- **Headline is perfect.** "Stop paying for 6 tools. Start closing in one." — that's literally my pain. You had me in the first 5 seconds.
- **Pain points section nails it.** Aurora cost callout ($170+/user/mo), 6 tools/6 logins/6 invoices, permitting nightmare. This is my daily reality.
- **Pricing is aggressive and clear.** $49/user/mo Pro plan vs. Aurora at $170+? That's a conversation-starter.
- **The permit generator "KILLER FEATURE" badge** — smart. That IS the killer feature for most installers.
- **No-contract, cancel-anytime** — removes friction for a pilot.

### What's missing or concerning:
- **"Now available in CA, TX, FL & NY"** — I see FL is listed, which is good. But I operate in GA and SC too. More on that below.
- **Testimonials feel fabricated.** "Mike Rodriguez, SunPeak Solar, San Diego" — I've been in this industry for 8 years and I've never heard of SunPeak Solar. If these are fake testimonials on a pre-launch product, just say "Early Access" and drop them. Fake social proof is a red flag for data-driven buyers like me.
- **No screenshots or product demo.** I want to SEE the product. A 60-second video or even static screenshots would increase conversion dramatically.
- **No mention of API, integrations, or data migration specifics.** The FAQ says "free migration from HubSpot" but gives no detail on how.
- **Enterprise tier says "Custom" with no starting price.** At 85 employees I'd need Enterprise (SSO, API, unlimited users). Give me a ballpark or I won't click "Contact Sales."
- **No security/compliance section.** No mention of SOC2, GDPR, data encryption, uptime SLA. For a company handling customer PII + financial data, this is table stakes.

---

## 2. Architecture Assessment

**Score: 5/10 — Not enterprise-ready yet**

### Tech Stack (from Implementation Guide):
- React 18 + TypeScript + Vite + Tailwind — **solid modern stack**, no complaints
- Zustand for state — lightweight, good for small apps, but concerning for complex multi-user workflows
- Supabase for backend — **this is the biggest concern**
- Auth via Clerk or Auth0 — good options, but "or" means it's not implemented yet
- TanStack Query + Axios — good API layer choices

### What concerns me:

**Supabase as the database layer:**
Supabase is great for MVPs and small-to-mid SaaS. But for an enterprise solar platform handling:
- 1,200+ projects/year per customer
- Multi-state operations with different AHJ requirements
- Real-time monitoring data from Enphase/SolarEdge APIs
- Document management (permit packages, contracts, photos)
- Financial data (proposals, invoicing, commissions)

I'd want to see a clear data architecture document. Row-level security policies? Multi-tenant isolation? Data retention policies? Backup/recovery SLAs?

**No backend API layer visible:**
The codebase is entirely frontend React. I see no Express/NestJS/tRPC server, no API routes, no middleware. This means:
- No server-side validation (all validation is client-side via Zod)
- No webhook endpoints for Enphase/SolarEdge/financing partner callbacks
- No background job processing (permit status polling, monitoring alerts)
- No rate limiting or API authentication layer

For a 1,200 install/year company pushing data through this daily, a purely frontend + Supabase architecture won't scale.

**The codebase is a fork of an Israeli solar CRM (Navitas):**
The types file (`src/types/index.ts`) has Hebrew labels, Israeli-specific stages (חח"י = IEC, which is Israel's electric company), and workflow stages that map to Israeli solar permitting (גוש וחלקה = cadastral parcel numbers). The US adaptation is essentially a data layer swap (AHJ database, equipment, utilities) on top of an Israeli solar CRM.

This isn't inherently bad — the underlying CRM logic is mature and well-structured. But it means:
- Some business logic may still assume Israeli workflows
- The i18n/localization layer needs to be bulletproof
- Edge cases in US-specific flows may not be fully covered

---

## 3. AHJ Database — Multi-State Coverage

**Score: 6/10 — FL is strong, GA/SC are critical gaps**

### The numbers:
| State | AHJ Entries | My Need |
|-------|------------|---------|
| FL | 8 jurisdictions | ✅ Good — Orlando, Miami, Tampa, Jacksonville, Fort Lauderdale, Cape Coral, St. Pete covered |
| GA | 1 jurisdiction (Atlanta only) | ❌ Critical gap — I need Savannah, Augusta, Columbus, Marietta, Sandy Springs |
| SC | 0 jurisdictions | ❌ Dealbreaker — I need Charleston, Columbia, Greenville, Myrtle Beach |

**Total AHJ coverage: ~53 jurisdictions across 18 states.** That's a good start for the 4 launch states (CA, TX, FL, NY), but for my multi-state operation, Georgia and South Carolina are non-negotiable.

### What's good about the AHJ data:
- **Extremely detailed per-jurisdiction data:** required documents, wind loads, fire setbacks, rapid shutdown requirements, SolarAPP+ compatibility, permit fees, review timelines, contact info, online submission URLs
- **The AHJ type definitions are well-structured** — `RequiredDocument` union type covers all standard permit documents
- **Helper functions** (`findAHJByCity`, `searchAHJ`, `getAHJsByState`) are clean and useful
- **Florida HVHZ awareness** — correctly flags Miami-Dade as 175 mph HVHZ with NOA product approval requirements. This matters; many tools get this wrong.

### What's missing:
- **GA and SC coverage is essentially zero** — this alone prevents me from adopting
- **No county-level granularity in many areas** — Florida has 67 counties; you cover 8 cities
- **No automated AHJ lookup by address** — you'd need geocoding → county → jurisdiction mapping
- **No permit document template generation** — the data says what's required, but doesn't generate the actual documents

---

## 4. Equipment Database

**Score: 8/10 — Comprehensive and well-structured**

This is genuinely impressive:
- **16 panel models** across REC, Q CELLS, Canadian Solar, JinkoSolar, LONGi, Silfab, Mission Solar, Aptos
- **12 inverter models** — Enphase IQ8 series, SolarEdge HD-Wave + Energy Hub, Tesla, Generac, Fronius
- **8 battery models** — Tesla Powerwall 2/3, Enphase IQ 5P/10T, Franklin WH, SolarEdge Home, Generac PWRcell
- **10 racking systems** — IronRidge, Unirac, SnapNrack, Esdec
- **Domestic content tracking** (`madeInUSA` flag) for ITC bonus adder — smart detail

### What I'd add:
- **SunPower/Maxeon** — still a major premium residential brand
- **Commercial panel options** (bifacial, higher wattage utility-scale modules)
- **Custom equipment support** — we negotiate dealer pricing; I need to add our own cost-per-watt, not use catalog pricing
- **Dealer pricing tiers** — the `pricePerWatt` is retail/MSRP. We buy at 30-40% below. Need configurable pricing.

---

## 5. Utility & ITC Calculator

**Score: 8/10 — Solid and accurate**

### Utility Database:
- 20 major utilities across key solar states
- Net metering policy tracking (full-retail, net-billing, buy-all-sell-all, etc.)
- TOU rate structures
- Solar-friendly scoring (1-10)
- **FPL, Duke FL, TECO covered** — that's my Florida territory ✅
- **No Georgia Power or Duke Energy Carolinas** — needed for GA/SC operations ❌

### ITC Calculator:
- **Properly implements IRA provisions** — 30% base + 10% domestic content + 10% energy community + 10-20% low-income bonus
- **State incentive database** — FL property tax exemption correctly noted
- **Payback calculation with utility rate escalation** — standard 3%/year, accurate
- **25-year ROI calculation with panel degradation** — 0.5%/year, industry standard

### What's missing:
- **Loan/lease/PPA comparison** — the landing page promises cash/loan/lease/PPA comparisons, but the calculator only does cash analysis
- **Mosaic/GoodLeap/Sunlight integration** — these are our financing partners. I need dealer fee calculations and APR modeling
- **Commercial ITC vs. residential** — no MACRS depreciation modeling for commercial projects
- **State SREC/REC calculations** — not relevant for FL but critical for expansion into NJ, MA, IL markets

---

## 6. Lead Source Tracking

**Score: 7/10**

- **15 lead sources defined** with cost-per-lead, conversion rates, avg deal size
- **EnergySage and Angi included** — these are our top two paid sources
- **UTM tracking and attribution** built into the data model
- **ROI calculator per channel** — this is useful; we currently do this in Excel

### What's missing:
- **No CRM integration for lead routing** — how do leads flow in? API? Webhook? Manual entry?
- **No lead scoring model** — at 1,200 installs from ~4,000 leads/year, we need automated scoring
- **No duplicate detection** — with multiple lead sources, deduplication is critical
- **Canvassing/D2D territory management** — we have 15 D2D reps; need geo-territory assignment

---

## 7. API & Integrations

**Score: 2/10 — Major gap**

I found **zero evidence** of:
- REST API endpoints
- GraphQL schema
- Webhook receivers or emitters
- Third-party integration code (Enphase API, SolarEdge API, HubSpot, Zapier)
- OAuth flows for external services
- API documentation

The landing page mentions:
- "API access" (Business tier)
- "Custom integrations" (Enterprise tier)
- "EnergySage & Angi integrations included"
- "Enphase, SolarEdge, Tesla Powerwall" monitoring

But the codebase has **none of this implemented.** The monitoring service file (`dataSync.ts`) exists but I'd need to verify it has actual API integration code vs. stubs.

**For PowerHome Solar, API is non-negotiable.** We need:
1. **HubSpot ↔ Solar OS** bidirectional sync (or full CRM replacement)
2. **Enphase Enlighten API** for monitoring data
3. **SolarEdge monitoring API** for fleet management
4. **Mosaic/GoodLeap dealer portals** for financing status
5. **Zapier/Make integration** for workflow automation
6. **Webhooks** for real-time project status updates to our internal systems

---

## 8. Multi-State & Multi-Branch Support

**Score: 3/10**

### What exists:
- `brand.ts` has US/IL detection and locale switching
- State-based defaults (CA, TX, FL, NY) for utilities and incentives
- AHJ database is state-aware

### What's missing:
- **No multi-branch/office concept** — we have offices in Orlando, Atlanta, and Charleston. I need branch-level P&L, team assignment, and territory management
- **No organization/tenant hierarchy** — company → branch → team → user
- **No state-specific compliance workflows** — FL contractor licensing differs from GA and SC
- **No role-based access by territory** — my Atlanta manager shouldn't see Orlando pipeline details
- **No consolidated cross-branch reporting** — I need one dashboard for all 3 states

---

## 9. Reporting Capabilities

**Score: 3/10**

The implementation guide mentions Recharts for charts and a dashboard with stat cards, but I found:
- **No report builder or export functionality**
- **No saved report templates**
- **No scheduled reports** (weekly pipeline report, monthly revenue report)
- **No drill-down analytics** (conversion by source by state by rep)
- **No commission tracking/reporting**

I currently spend 4-6 hours/week pulling data from 6 systems into Excel. Solar OS needs to **eliminate** that workflow, not just reduce the number of systems.

---

## 10. Security Assessment

**Score: 2/10 — Not enterprise-ready**

| Requirement | Status |
|-------------|--------|
| SOC2 Type II | ❌ No mention |
| SSO (SAML/OIDC) | ⚠️ Planned (Auth0/Clerk) but not implemented |
| Role-based access (RBAC) | ⚠️ Basic team roles exist, no granular permissions |
| Data encryption at rest | ⚠️ Supabase default (depends on configuration) |
| Data encryption in transit | ✅ HTTPS assumed |
| Audit logging | ❌ No evidence of audit trail |
| 2FA/MFA | ⚠️ Depends on auth provider |
| Data residency | ❌ No mention |
| GDPR/CCPA compliance | ❌ No evidence |
| Penetration testing | ❌ No mention |
| Uptime SLA | ❌ No mention |
| Backup/recovery | ⚠️ Supabase default |

For a $35M/year company handling customer financial data, social security numbers (for financing applications), and property information — this security posture is insufficient.

---

## 11. Would This Replace HubSpot + Aurora?

### Replace HubSpot? **Not yet.**
HubSpot gives us:
- Email sequences and automation
- Marketing attribution
- Meeting scheduling
- Deal pipeline with custom stages
- Reporting dashboards
- 200+ integrations
- Mobile app for sales reps

Solar OS has better solar-specific pipeline stages and lead source tracking, but lacks the marketing automation, email, and integration ecosystem that HubSpot provides.

**Verdict:** Solar OS could replace HubSpot for CRM functionality IF it adds email integration, automation workflows, and a mobile app. Otherwise it's a downgrade.

### Replace Aurora? **Potentially, for proposals.**
Aurora gives us:
- 3D roof modeling with LIDAR data
- Shade analysis with Nearmap/Google imagery
- Accurate production modeling (PVWatts-grade)
- Bankable shade reports
- Permit-ready plan sets

Solar OS has:
- Equipment database (comparable)
- AHJ permit requirements (better than Aurora for this)
- ITC calculator (comparable)
- Proposal generation (concept, not implemented)

**Verdict:** Solar OS cannot replace Aurora's design capabilities (3D modeling, shade analysis, production modeling) but could supplement or replace Aurora's proposal and permitting workflows. We might keep Aurora for design + use Solar OS for CRM/permitting/monitoring, saving ~$500-800/mo vs. current stack.

---

## 12. What's Missing for a 1,200 Install/Year Company

1. **Mobile app for field crews** — site surveys, photo documentation, punch lists
2. **Scheduling & dispatch** — crew calendars, install scheduling, inspection coordination
3. **Inventory management** — warehouse tracking, BOM generation, PO creation
4. **Commission engine** — sales rep commissions with splits, tiers, clawbacks
5. **Document management** — contract templates, e-signature (DocuSign/PandaDoc integration)
6. **Customer portal** — project status tracking for homeowners
7. **Automated email/SMS workflows** — appointment reminders, status updates, review requests
8. **Quality control checklists** — install QC, inspection prep checklists
9. **Warranty tracking** — equipment warranty registration, claim management
10. **Financial reporting** — revenue recognition, cost tracking, margin analysis

---

## Scorecard

| Category | Score (1-10) | Notes |
|----------|:---:|-------|
| **Landing Page** | **7** | Great messaging, needs screenshots + real testimonials |
| **Feature Set** | **5** | Impressive data layer, but most features are planned not built |
| **Enterprise Readiness** | **3** | No API, no SSO, no multi-branch, no RBAC, no SOC2 |
| **Would I Try It?** | **4** | Not today — too many gaps for our scale |

---

## What Would Make Me Pilot This With One Team

If the Solar OS team delivered the following within 90 days, I'd pilot it with my Orlando residential team (15 people, ~30 installs/month):

1. **GA and SC AHJ coverage** — at least top 10 cities per state
2. **Working API with HubSpot sync** — bidirectional lead/deal sync so I don't lose my existing CRM data
3. **SSO via Auth0 or Okta** — non-negotiable for IT compliance
4. **Working permit package generator** — not just data about what's required, but actual PDF generation of site plans, single-line diagrams, etc.
5. **Enphase monitoring API integration** — even read-only fleet view would be valuable
6. **Multi-branch support** — I need to separate Orlando from Atlanta data
7. **Scheduled reports** — weekly pipeline report emailed to me every Monday at 8am
8. **90-day pilot agreement** — free or heavily discounted, with clear success metrics and exit clause

**My budget to replace current stack:** $3,500/mo (what I'm paying now). If Solar OS can deliver 80% of my current functionality at $2,000/mo or less, the ROI conversation is easy. At $49/user × 15 users = $735/mo for a pilot — that's compelling IF the product works.

---

## Final Thoughts

Solar OS has **exceptional domain knowledge** baked into its data layer. The AHJ database, equipment catalog, utility rates, ITC calculator, and lead source tracking show someone who deeply understands US residential solar operations. The landing page messaging is on-point and the pricing is aggressive.

But the product is **pre-revenue, pre-launch, and pre-API.** The codebase is a US localization of an Israeli solar CRM with a mature frontend but no visible backend API layer, no third-party integrations, and no enterprise security features.

**For a 10-person installer doing 200 installs/year in a single state?** This could be a game-changer in 6 months.

**For PowerHome Solar at 1,200 installs across 3 states?** Not yet. Check back in Q4 2026.

---

*— Sarah Chen, VP Operations, PowerHome Solar*
*sarah.chen@powerhomesolar.com*
