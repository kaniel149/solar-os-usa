# Solar OS USA — Feature Plan & Pricing

## Positioning
**"The Only All-in-One Solar Platform That's Actually Affordable"**
- Target: Small-mid US residential installers (1-50 employees)
- Price: $49-99/user/month (vs Aurora $170+)
- Message: "Stop paying for 6 tools. Start closing in one."

---

## Phase 1: MVP (Weeks 1-4) — "Win Small Installers"

### 1.1 Integrated CRM (EXISTING — adapt to US)
- Lead → Sale → Design → Permit → Install → PTO pipeline
- US lead sources: EnergySage, Google Ads, Angi, referrals
- USD currency, US date format, Imperial units
- Status: ✅ 70% done from Israel codebase

### 1.2 Instant AI Proposals
- Address + utility bill → proposal in 60 seconds
- ITC 30% calculation + bonus adders (domestic content, low-income)
- Cash / Loan / Lease / PPA comparison
- PDF export + e-signature
- Status: 🔨 Needs US-specific templates

### 1.3 Solar + Battery Design
- Hardware-agnostic panel/inverter/battery selector
- NEM 3.0 aware (CA) — battery sizing, TOU optimization
- PVWatts API for production estimates
- US equipment database (Enphase, SolarEdge, Tesla, REC, Q CELLS)
- Status: 🔨 Partially built in US integrations sprint

### 1.4 AHJ-Aware Permit Generator ⭐ KILLER FEATURE
- Database of AHJ requirements by jurisdiction
- Auto-generate permit packages (site plan, single-line, structural)
- SolarAPP+ integration for instant permits
- Tracks permit status per project
- Status: 🆕 New feature — biggest differentiator

### 1.5 Mobile Site Survey
- Phone-based roof measurement
- Photo documentation with annotations
- Shade analysis from photos
- Syncs to project in CRM
- Status: 🆕 New feature

---

## Phase 2: Growth (Weeks 5-10) — "Replace Their Stack"

### 2.1 Unified Monitoring Dashboard
- Enphase, SolarEdge, Huawei, string inverter APIs
- Fleet view: all systems, one screen
- Alerts: underperformance, offline, errors
- Customer-facing monitoring portal
- Status: ✅ 60% done from Israel codebase

### 2.2 Interconnection Tracking
- Utility-specific forms and requirements
- Status tracking: Application → Review → Approved → PTO
- Automated reminders and follow-ups
- Status: 🆕 New feature

### 2.3 Financing Calculator
- Major lenders: Mosaic, GoodLeap, Sunlight, Dividend
- Dealer fee modeling
- ITC adders calculator
- Monthly payment comparison
- Status: 🆕 New feature

### 2.4 E-Signatures & Docs
- Built-in document signing (no DocuSign needed)
- Contract templates
- Change order management
- Status: 🆕 New feature

### 2.5 Customer Portal
- Homeowner self-service: project status, documents, monitoring
- Referral program built-in
- Status: 🆕 New feature

---

## Phase 3: Moat (Weeks 11-16) — "Lock-in & Scale"

### 3.1 Automated Permit Submission
- Direct integration with SolarAPP+ and AHJ portals
- One-click submit
- Status: 🆕 New feature

### 3.2 Crew Scheduling & Dispatch
- Calendar, route optimization, skill matching
- Status: 🆕 New feature

### 3.3 Inventory & BOM
- Track equipment per project
- Distributor pricing integration (CED, BayWa, Soligent)
- Status: 🆕 New feature

### 3.4 Commercial Module
- C&I design tools
- Helioscope-class accuracy
- Status: 🆕 Future

---

## Pricing Strategy

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | CRM (up to 50 leads), basic pipeline |
| **Pro** | $49/user/mo | CRM + Proposals + Design + Monitoring |
| **Business** | $99/user/mo | Everything + Permitting + Financing + Customer Portal |
| **Enterprise** | Custom | API, white-label, dedicated support |

### Why This Works
- Free tier captures small shops (vs Aurora's $0 → $170 jump)
- $49 undercuts Aurora by 70% for core features
- $99 still cheaper than Aurora + CRM + monitoring separately ($300+/mo)
- Permit generator at $99 tier = strong upsell driver

---

## Go-to-Market (Phase 1)

1. **Reddit r/solar** — Community posts, helpful answers, soft launch
2. **YouTube** — "How I built a solar CRM" content series
3. **SolarAPP+ partnership** — Listed as compatible platform
4. **Distributor partnerships** — Bundle with equipment orders
5. **Referral program** — $50/referral credit

---

## State-Specific Features

| State | Special Needs |
|-------|--------------|
| **California** | NEM 3.0, SGIP battery incentives, Title 24, CPUC compliance |
| **Texas** | ERCOT interconnection, no state income tax (affects ITC pitch), wind load |
| **Florida** | Hurricane wind load calcs, complex AHJ, net metering cap battles |
| **New York** | NYSERDA incentives, ConEd VDER, NY-Sun program |

---

## Build Priority (Next Steps)

1. ✅ Feature plan (this document)
2. → Apply Noa's design system to codebase
3. → US Landing page
4. → AHJ permit database (Phase 1 killer feature)
5. → SolarAPP+ integration research
6. → Pricing page
7. → Deploy to production
