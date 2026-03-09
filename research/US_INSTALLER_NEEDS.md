# US Solar Installer Needs — Deep Research Report
**KANIEL TORD LLC | Rex Intelligence | Feb 25, 2026**

---

## 1. Pain Points Ranked by Frequency

### 🔴 CRITICAL (Mentioned everywhere)

**1. Tool Fragmentation — "Juggling 5-8 Disconnected Tools"**
- Installers routinely use separate tools for CRM, design, proposals, permitting, project management, monitoring, and financing
- No single platform covers lead-to-PTO workflow
- Data re-entry between systems is massive time waste
- *Source: r/solar — "one of the toughest parts of the job is dealing with multiple software tools that don't always work well together"*

**2. Software Pricing — Aurora at $170+/mo Per Seat Is "Too Much"**
- Aurora Solar widely regarded as best-in-class design tool but prohibitively expensive for small/mid installers
- *Source: r/solar — "I like Aurora best by far, but that $170 per month is a bit too much imo"*
- OpenSolar is free but has inferior imagery and limited features
- Small installers (1-10 person shops) can't justify $2K+/yr per designer
- Per-proposal pricing models penalize high-volume shops

**3. Permitting Is a Nightmare — Inconsistent AHJ Requirements**
- Every city/county has different requirements, different forms, different reviewers
- Plan reviewers often lack solar experience, causing arbitrary rejections
- *Source: r/solar (FL installer) — "the hoops I have to jump through with some cities is insane... most plan reviewers/inspectors don't have a lot of experience with solar"*
- Third-party structural engineering sign-offs cost $500-$1,000 per project
- Permit turnaround varies from days to months depending on jurisdiction
- No software adequately manages jurisdiction-specific requirements

**4. Poor Satellite/LIDAR Imagery**
- OpenSolar "in new areas has really crappy photos"
- New construction areas have zero or outdated imagery
- Aurora has better imagery but at premium cost
- Designers still need to visit sites when imagery fails
- *Source: r/solar — "Are there other cost effective alternatives especially for new construction areas?"*

**5. CRM Gaps — Visibility Kills Momentum**
- Many small installers still run on spreadsheets and email chains
- *Source: NEM 3 Worker's Guide — "A lack of visibility kills momentum and makes it incredibly hard to do business for sales, ops, and administration. If your ops team is forced to run solely off spreadsheets or email chains, run!"*
- Solar-specific CRMs (Sunbase ~$300/mo, JobNimbus, SetShape) are limited
- Salesforce/Zoho customization costs $5K-$30K
- No affordable CRM properly tracks lead → design → permit → install → PTO → monitor lifecycle

### 🟠 HIGH (Frequently mentioned)

**6. Slow Deal Velocity — Months from Sale to PTO**
- Simple residential installs taking 3-6 months from contract to PTO
- Cash flow problems from slow pipeline
- *Source: NEM 3 Worker's Guide — "if even the most basic deals take 3-6 months to be installed, not to mention PTO'd, the company can be susceptible to cash flow problems"*

**7. Battery/Storage Design Complexity**
- NEM 3.0 in California makes battery storage essential, not optional
- Existing tools struggle with battery sizing, TOU optimization, load profile analysis
- Sales teams not trained on battery value propositions
- Need to sell at $3.30/W or less to be competitive under NEM 3

**8. Financing Complexity**
- Multiple dealer fee structures, lender requirements, ITC adders
- Sales reps struggle to accurately model customer savings
- Different financing options (loan, lease, PPA, cash) need different proposal formats
- ITC bonus adders (domestic content, low-income, energy community) are confusing

**9. AutoCAD/Plan Set Production Bottleneck**
- Aurora exports 3D models to AutoCAD, but permit plan sets still require manual work
- Dedicated plan set designers needed — expensive headcount
- Each AHJ wants slightly different plan set formats
- Single-line diagrams, structural calcs, electrical calcs all separate workflows

**10. Monitoring Fragmentation**
- Different inverter brands (Enphase, SolarEdge, string inverters) each have their own monitoring portal
- No unified view across fleet for installers managing hundreds of systems
- Customer support requests require logging into different platforms per install
- O&M tracking is often manual

### 🟡 MODERATE

**11. State/Utility Rate Complexity**
- NEM 3.0 (CA), Value of Solar (MN), net billing vs net metering varies by state
- TOU rate schedules change frequently
- Accurate savings projections require up-to-date utility rate databases
- Many tools have outdated or incomplete rate data

**12. Proposal Generation — Speed vs. Accuracy Tradeoff**
- Sales teams want instant proposals at the door
- Engineering accuracy requires detailed design
- Two-step process (quick proposal → detailed design) is standard but clunky
- Homeowner-facing proposals need to be visually compelling

**13. Interconnection Application Complexity**
- Each utility has different interconnection forms and processes
- Tracking interconnection status is manual
- PTO delays are a major bottleneck

---

## 2. Feature Wishlist (with Source Quotes)

### Must-Have Features

| Feature | Installer Quote/Source |
|---------|----------------------|
| **All-in-one platform** (CRM + design + permits + monitoring) | "one of the toughest parts... multiple software tools that don't always work well together" — r/solar |
| **Affordable pricing** (<$100/mo for small shops) | "that $170 per month is a bit too much" — r/solar |
| **Auto-generated permit packages** per AHJ | "hoops I have to jump through with some cities is insane" — r/solar |
| **Good satellite imagery** everywhere | "Open Solar in new areas has really crappy photos" — r/solar |
| **AI-powered instant proposals** | "do you need better quoting software with AI?" — r/solar |
| **Battery + solar co-design** | NEM 3.0 mandate driving demand |
| **CRM with full pipeline visibility** | "A good CRM is the backbone of a solar company... single source of truth" — NEM 3 Guide |
| **Mobile-first field tools** | Installers need site survey, punch list, inspection checklist on phone |
| **Automated interconnection tracking** | Manual tracking across utilities is time sink |
| **Unified monitoring dashboard** | Multiple inverter brands need single pane of glass |

### Nice-to-Have Features

- AI shade analysis from phone photos
- Drone integration for roof measurements
- Automated structural engineering calcs
- Customer self-service portal (project status)
- Crew scheduling and dispatch
- Inventory/BOM management
- Integration with accounting (QuickBooks)
- E-signature built in
- Automated follow-up sequences for leads
- Referral tracking

---

## 3. Competitor Gaps Analysis

### Aurora Solar
- **Strengths:** Best-in-class design, excellent imagery, good proposal generation, strong brand
- **Gaps:** Expensive ($170+/seat/mo), no built-in CRM, no permitting automation, no monitoring, no field tools, no interconnection tracking
- **Opportunity:** Price-sensitive small installers are underserved

### OpenSolar
- **Strengths:** Free tier, proposal generation, basic design
- **Gaps:** Poor imagery in many areas, limited design accuracy, no CRM, no permitting, weak battery design
- **Opportunity:** "Free" attracts but doesn't retain — upgrades needed

### SolarEdge Designer / Enphase Design Tool
- **Strengths:** Free, integrated with their hardware
- **Gaps:** Only works with their hardware, limited to design only, no CRM/permitting/proposals
- **Opportunity:** Hardware-agnostic platform needed

### Helioscope (by Folsom Labs)
- **Strengths:** Good for commercial, accurate shading
- **Gaps:** Commercial-focused, no residential workflow, no CRM, expensive
- **Opportunity:** Residential + commercial in one platform

### Solar-Specific CRMs (Sunbase, SetShape, SolarNexus)
- **Strengths:** Industry-specific workflows
- **Gaps:** No design tools, limited integrations, small dev teams, basic features
- **Opportunity:** CRM + design + permitting = white space

### Generic CRMs (Salesforce, HubSpot, Zoho)
- **Strengths:** Powerful, customizable
- **Gaps:** Require $5K-$30K customization, no solar-specific features, no design integration
- **Opportunity:** Pre-built solar workflows beat custom builds

### Scoop Solar / PVComplete / Solo
- **Strengths:** Niche features (project management, commercial design)
- **Gaps:** Narrow focus, limited adoption, integration headaches
- **Opportunity:** Consolidation play

---

## 4. Recommended Features for Solar OS USA

### Phase 1: MVP (Months 1-4) — "Win Small Installers"
1. **Instant AI Proposals** — Address + utility bill = proposal in 60 seconds
2. **Integrated CRM** — Lead → sale → design → permit → install → PTO pipeline
3. **Solar + Battery Design** — Hardware-agnostic, NEM 3.0 aware, TOU optimization
4. **AHJ-Aware Permit Package Generator** — Auto-generate plan sets per jurisdiction
5. **Mobile Site Survey** — Phone-based roof measurement, photo documentation

### Phase 2: Growth (Months 5-8) — "Replace Their Stack"
6. **Unified Monitoring Dashboard** — Enphase, SolarEdge, string inverter APIs
7. **Interconnection Tracking** — Status tracking per utility
8. **Financing Calculator** — All major lenders, ITC adders, dealer fees
9. **E-Signatures & Document Management** — Built-in DocuSign alternative
10. **Customer Portal** — Self-service project status for homeowners

### Phase 3: Moat (Months 9-12) — "Lock-in & Scale"
11. **Automated Permit Submission** — Direct integration with SolarAPP+ and AHJ portals
12. **Crew Scheduling & Dispatch** — Calendar, route optimization, skill matching
13. **Inventory & BOM** — Track panels, inverters, racking per project
14. **Commercial Module** — Helioscope-class design for C&I
15. **API Marketplace** — QuickBooks, lenders, distributors, monitoring platforms

---

## 5. Market Positioning Opportunities

### Primary Position: "The Only All-in-One Solar Platform That's Actually Affordable"
- **Target:** Small-to-mid US residential installers (1-50 employees, 50-500 installs/year)
- **Price point:** $49-$99/user/month (vs Aurora $170+, Salesforce $150+)
- **Message:** "Stop paying for 6 tools. Start closing in one."

### Key Differentiators

1. **All-in-One** — No other platform covers CRM + design + permitting + monitoring + financing
2. **Affordable** — 50-70% cheaper than Aurora + CRM + monitoring stack
3. **Permitting Intelligence** — AHJ database with auto-generated, jurisdiction-compliant packages (biggest unmet need)
4. **NEM 3.0 / Battery Native** — Built for the storage era, not retrofitted
5. **Mobile-First Field Tools** — Designed for trucks, not desks

### Market Segments by Priority

| Segment | Size | Pain Level | Willingness to Switch |
|---------|------|-----------|----------------------|
| Small residential (1-10 people) | ~8,000 companies | 🔴 Extreme | 🟢 High — price sensitive, tool-fatigued |
| Mid residential (10-50 people) | ~2,000 companies | 🟠 High | 🟡 Medium — need migration path |
| Residential + commercial mix | ~1,500 companies | 🟠 High | 🟡 Medium — need both modules |
| Large national installers | ~50 companies | 🟡 Medium | 🔴 Low — custom internal tools |

### State-Specific Opportunities

- **California:** NEM 3.0 battery mandate = urgent need for solar+storage co-design. Largest market, most complex permitting.
- **Texas:** Fast-growing, minimal permitting in many areas, ERCOT interconnection unique
- **Florida:** Hurricane wind load calcs, complex AHJ requirements (as documented in research), high growth potential
- **Northeast (MA, NY, NJ, CT):** SREC/incentive complexity, older housing stock challenges
- **Arizona/Nevada:** NEM changes, extreme heat derating calculations needed

### Go-to-Market Strategy

1. **Freemium CRM** — Free CRM tier captures leads, upsell to design + permitting
2. **YouTube/Reddit Community** — These installers live on r/solar and YouTube. Content marketing > enterprise sales.
3. **SolarAPP+ Integration** — Instant permitting in participating jurisdictions = killer feature
4. **Distributor Partnerships** — Bundle with CED Greentech, BayWa r.e., Soligent orders
5. **Referral Program** — Installers talk to each other constantly; $50/referral compounds fast

### Competitive Moat Over Time
- **Data moat:** AHJ requirement database grows with every permit submitted
- **Network moat:** More installers = better shared pricing data, equipment reviews, AHJ intelligence
- **Switching cost:** Once CRM + design + permitting are unified, switching any one piece means switching all

---

## Sources

- Reddit r/solar: Multiple threads on software pain points, Aurora pricing, CRM needs, permitting frustrations (2021-2026)
- Reddit r/solar: "NEM 3 Solar Worker's Guide" — comprehensive industry insider perspective on operational needs
- Reddit r/solar: "Solar pros, tell me your pain points with software" (2025)
- Reddit r/solar: "Building a Solar Software Application - What do you need?" (2025)
- Reddit r/solar: "Permit Frustration" — South Florida installer on AHJ inconsistency
- Industry knowledge: Aurora Solar, OpenSolar, Helioscope, SolarEdge Designer, Enphase pricing and feature comparison
- Solar Power World, Solar Builder Magazine — industry trade publications
- SolarAPP+ program data — standardized permitting initiative

---

*Report compiled by Rex, Research & Intelligence Agent*
*KANIEL TORD LLC — February 2026*
