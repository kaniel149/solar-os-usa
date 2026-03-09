# Solar OS USA Review — Carlos Mendez

**Reviewer:** Carlos Mendez, Operations Director  
**Company:** Green Energy Partners — Commercial Solar Installer, Miami, FL  
**Company Size:** 50 employees, ~30 C&I projects/year (100kW–2MW), some residential  
**Revenue:** ~$25M/year  
**Current Stack:** Helioscope ($200/mo), Salesforce ($2K/mo), Monday.com ($800/mo), per-brand monitoring portals  
**Date:** March 9, 2026

---

## Executive Summary

Solar OS looks like a solid residential solar platform with real potential — but it is **not built for commercial solar**. As it stands today, this product would cover maybe 15% of what my operation needs. Everything from the landing page messaging to the underlying code screams "residential installer with 5-10 employees." My company does $25M in revenue on 30 commercial projects a year. This tool is not ready for us.

---

## Detailed Analysis

### 1. Is This Built for Commercial Solar?

**No.** Not even close.

The landing page opens with "Stop paying for 6 tools" — fine, but the pain points listed (Aurora pricing, SolarAPP+ permitting, Enphase monitoring) are all residential problems. The testimonials reference "10-person crew," "reps closing more deals," and savings of "$1,400/mo." That's a residential shop doing maybe $3M/year. My Salesforce bill alone is $2K/mo and it's worth every penny for managing 30 concurrent commercial projects.

The entire platform is clearly designed around the residential workflow: **Lead → Sale → Design → Permit → Install → PTO**. Commercial solar has a completely different lifecycle:

- **Development** (site feasibility, utility capacity, interconnection study)
- **Financing** (PPA structuring, lease modeling, MACRS depreciation schedules, debt/equity splits)
- **Engineering** (PE-stamped drawings, structural analysis for commercial roofs/carports, electrical one-lines for 480V three-phase)
- **Permitting** (commercial permits are a different animal — zoning, environmental review, fire marshal commercial review)
- **Procurement** (commercial-grade equipment, string inverters, transformers, medium voltage)
- **Construction Management** (prevailing wage tracking, Davis-Bacon compliance, multi-trade coordination, safety plans)
- **Interconnection** (utility engineering study, SCADA integration, revenue-grade metering)
- **Asset Management** (PPA billing, production guarantees, degradation tracking against contractual obligations)

None of this is addressed.

### 2. Can It Handle 500kW+ System Designs?

**No evidence it can.**

The equipment database has only **residential-scale inverters**:
- Enphase microinverters (300–366W) — nobody puts microinverters on a 500kW commercial system
- SolarEdge string inverters up to 10kW — residential-only
- Tesla 3.8kW and 7.6kW inverters — residential
- Fronius up to 10kW — residential
- Generac PWRcell — residential hybrid

**Missing for commercial:**
- No SMA Sunny Tripower CORE2 (50kW–75kW commercial string inverters)
- No SolarEdge SE100K (100kW three-phase commercial)
- No Chint Power CPS (utility-scale)
- No TMEIC (utility-scale)
- No Sungrow SG125HV (commercial/utility)
- No ABB/FIMER commercial inverters
- No central inverters whatsoever
- Only single-phase inverters in the database (one Fronius Symo 3-phase at 10kW)

The panel database is decent for residential (REC, Q CELLS, Jinko, LONGi) but is missing larger-format commercial panels. The Canadian Solar HiKu7 670W is the only commercial-scale module listed. Where are the Trina Vertex, JA Solar DeepBlue, or First Solar thin-film panels that we use on commercial ground-mount and carport projects?

**Bottom line:** You can't design a 500kW system with 300W microinverters and residential racking.

### 3. MACRS Depreciation Calculator?

**Does not exist.**

The ITC calculator handles the federal 30% ITC with bonus adders (domestic content, energy community, low-income) — that's fine for residential. But for commercial solar, the **5-year MACRS depreciation** is often worth more than the ITC itself. On a $1.5M commercial system, MACRS can provide $400K+ in tax benefits over 5 years. Any serious C&I proposal must model:

- MACRS depreciation schedule (5-year accelerated)
- Bonus depreciation (currently 60% in 2026, phasing down)
- ITC + MACRS interaction (basis reduction by 50% of ITC)
- The choice between ITC and PTC (Production Tax Credit) — increasingly relevant for commercial
- Tax equity structures

Without MACRS modeling, no C&I customer's CFO will take a proposal seriously.

### 4. PPA/Lease Financial Modeling?

**Mentioned in passing, not implemented.**

The landing page says "cash/loan/lease/PPA comparisons" in the AI proposal section. The ITC calculator has `quickEstimate()` and `calculatePaybackYears()` functions — both are residential cash-purchase models (simple payback, 25-year ROI).

**What's missing for commercial PPA modeling:**
- Levelized Cost of Energy (LCOE) calculation
- PPA price escalation modeling (1–3%/year)
- Lease vs. PPA vs. direct purchase NPV comparison
- Tax equity flip structures
- Sale-leaseback modeling
- Virtual PPA (VPPA) for multi-site portfolios
- Debt service coverage ratio (DSCR) analysis
- IRR modeling for investors (pre-tax, after-tax)
- Production guarantees and shortfall penalties
- REC (Renewable Energy Certificate) value modeling

PPA structuring is the #1 thing that wins or loses commercial deals. My customers — property management companies, retailers, school districts, municipalities — don't buy systems outright. They sign 20-25 year PPAs. If I can't model that, the tool is useless for sales.

### 5. Prevailing Wage Tracking?

**Not mentioned anywhere.**

Under the IRA, projects over 1MW (and effectively all commercial projects seeking full ITC/PTC) must comply with **prevailing wage and apprenticeship requirements**. This means:

- Tracking wage rates by trade and locality (Department of Labor rates)
- Certified payroll reporting
- Apprenticeship ratio compliance (percentage of labor hours)
- Good faith effort documentation
- Reporting to IRS for bonus credit qualification

My team deals with this on every project. It's a compliance nightmare. A tool that tracks this integrated with project management would be genuinely valuable — but Solar OS doesn't address it at all.

### 6. Spanish Language Support?

**None visible.**

The entire landing page is English-only. No i18n, no language toggle, no mention of Spanish support. 60% of my installation crew speaks Spanish as their primary language. Site survey tools, safety checklists, work orders, and field documentation need to be available in Spanish. This isn't a nice-to-have — it's an OSHA and operational requirement.

### 7. AHJ Database — Miami-Dade Commercial Permits

**Partially useful.**

The AHJ database has Miami (City) and Miami-Dade County entries with correct HVHZ (175 mph) wind requirements and NOA product approval requirements. That's accurate. But:

- The database is geared toward residential permits (SolarAPP+ references, "express permits," simplified residential processes)
- **Commercial permits in Miami-Dade are a completely different process** — they require PE-stamped structural calculations, fire marshal commercial review, zoning compliance, potentially environmental review, and the review timeline is much longer
- No mention of FPL commercial interconnection study timelines (can take 6+ months for systems over 100kW)
- No utility-scale interconnection tracking
- `maxSystemSizeKw: 10000` for LA is listed but Miami has no such field — what's the max system size the platform can handle?

---

## Scores (1-10)

| Category | Score | Notes |
|----------|-------|-------|
| **Landing Page** | 7/10 | Clean, professional, well-designed. But speaks only to residential installers with <20 employees. Commercial solar is a different world and the page doesn't acknowledge it exists. |
| **Feature Set** | 4/10 | Solid for residential: CRM, AI proposals, permitting, monitoring. But the underlying data (inverters, panels, financial calculations) is entirely residential-scale. No commercial features. |
| **Commercial Readiness** | 2/10 | Not commercial-ready by any measure. No C&I inverters, no MACRS, no PPA modeling, no prevailing wage, no three-phase design, no commercial procurement workflows. Would need a ground-up C&I module. |
| **Would I Try It?** | 3/10 | I'd look at it for our small residential side-business (~10% of revenue), but I would never consider it for our core commercial operations. I'd need Helioscope-level design capability for commercial systems and financial modeling that can handle PPA/MACRS before I'd even demo it. |

**Overall: 4/10** — Promising residential platform, but years away from being viable for C&I solar without a major commercial module.

---

## What Would Make This Viable for C&I Solar?

### Must-Have (Would Consider Trying)

1. **Commercial inverter database** — SMA, Sungrow, TMEIC, SolarEdge commercial, Chint, ABB, with three-phase support and proper string sizing tools
2. **MACRS + bonus depreciation calculator** — Integrated with ITC, showing year-by-year depreciation schedule, with basis reduction math
3. **PPA financial modeling** — LCOE, PPA price escalation, NPV comparison of PPA/lease/purchase, investor IRR modeling, production guarantee modeling
4. **Three-phase electrical design** — 480V systems, transformer selection, medium-voltage interconnection, string sizing for commercial inverters
5. **Spanish language support** — Full bilingual UI, field documentation, and work orders

### Should-Have (Would Pay Premium For)

6. **Prevailing wage tracking** — DOL rate lookups, certified payroll integration, apprenticeship ratio compliance
7. **Commercial permitting workflow** — Separate from residential, with PE stamp tracking, plan review status, commercial inspection scheduling
8. **Interconnection management** — Utility application tracking, engineering study timelines, SCADA/metering requirements
9. **Commercial roof/ground-mount/carport design** — Structural analysis for commercial flat roofs (ballasted and attached), carport structures, ground-mount with tracker support
10. **Asset management / O&M** — PPA billing, production guarantee tracking, degradation analysis against contractual minimums, revenue-grade meter data

### Nice-to-Have (Differentiators)

11. **Tax equity structuring tools** — Partnership flip, sale-leaseback, inverted lease modeling
12. **Multi-site portfolio management** — For customers with 10+ locations
13. **EPC procurement tools** — RFP generation, subcontractor management, material procurement tracking
14. **Construction management** — Gantt charts, trade coordination, safety compliance, daily logs
15. **Salesforce integration** — We're not leaving Salesforce, but a deep two-way sync could work

---

## Final Thoughts

Look, I get it — residential solar is the bigger market by volume. But C&I solar is where the real money is: $1M-$5M per project, 20-year PPA relationships, and customers who don't comparison-shop on EnergySage. The tools we use today (Helioscope + Salesforce + Monday.com + custom spreadsheets) cost us ~$3K/month and still leave gaps. If Solar OS built a legitimate C&I module, I'd pay $150-200/user/month for it without blinking. That's the opportunity they're leaving on the table.

But selling me a tool with 300W microinverters and a simple payback calculator? That's like offering a pickup truck to someone who needs a crane. Different job entirely.

— **Carlos Mendez**, Green Energy Partners, Miami, FL
