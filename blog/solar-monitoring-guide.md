# Solar System Monitoring: What Installers Need to Track Post-Installation

For most solar installers, the job ends when the inspection passes and the system is turned on. The crew moves to the next install. The sales team moves to the next lead. The monitoring conversation — if it happens at all — is a brief mention during the final walkthrough.

That's a mistake. Post-installation monitoring isn't just a customer service feature. It's a business strategy that drives referrals, prevents warranty headaches, catches problems before they escalate, and creates upsell opportunities.

This guide covers what solar installers should be monitoring, why it matters for your business, and how to set up a monitoring workflow that scales without consuming your time.

## Why Monitoring Matters for Installers (Not Just Homeowners)

Most installers think of monitoring as a homeowner feature — an app where customers check their production. That's one benefit, but the installer-side value is far greater.

### Prevent Warranty Claims from Becoming Disasters

A solar system producing 20% below expected output for three months is an inconvenience. A system that's been underperforming for a year — discovered when the homeowner gets their utility bill — is a warranty claim, a negative review, and a lost referral. Proactive monitoring catches issues early when they're cheap to fix.

### Drive Referrals Through Proactive Service

When you call a homeowner to say "We noticed your system's production dipped last week — it looks like a panel needs attention, and we're scheduling a service visit" — that homeowner tells their neighbors. Proactive service is the single most powerful referral driver in residential solar.

### Create Upsell Opportunities

Monitoring data reveals upsell opportunities:

- **Increased consumption** — "Your electricity use has grown 30% since installation. An additional 4 panels would cover the increase."
- **Battery storage** — "Your system exports 40% of its production to the grid. A battery would let you use that energy during peak hours instead."
- **Panel degradation** — "After 8 years, your panels are producing at 88%. Upgrading to newer panels would boost production by 15%."

### Reduce Support Costs

A monitored system that triggers automatic alerts costs you one proactive service call. An unmonitored system that fails silently costs you an angry phone call, an emergency site visit, potential panel replacement, and reputation damage.

## The Five Metrics Every Installer Should Track

### 1. Energy Production (kWh)

The foundational metric. Track daily, monthly, and annual production against expected output.

**What to watch for:**

- **Sudden drops** (>20% below expected in a single day) — Usually indicates an inverter fault, tripped breaker, or communication failure
- **Gradual decline** (5–10% below expected over weeks) — Could indicate soiling, partial shading from new tree growth, or panel degradation
- **Seasonal patterns** — Production naturally varies with sun angle and daylight hours. Florida sees about 25–30% less production in December versus June. Compare against expected seasonal curves, not flat averages.

**Alert threshold:** Set alerts for daily production below 70% of expected output (adjusted for weather) and monthly production below 85% of expected.

### 2. Inverter Performance

The inverter is the most failure-prone component in a solar system. Most inverter warranties are 12–25 years, but failures can happen at any time.

**What to watch for:**

- **Error codes** — Each inverter manufacturer has specific fault codes. Know them for the brands you install.
- **Efficiency drops** — A healthy inverter converts 96–99% of DC power to AC. Drops below 95% warrant investigation.
- **Communication failures** — If the inverter stops reporting data, it may be a monitoring communication issue or a system failure. Either way, investigate.
- **Clipping** — Frequent clipping (inverter limiting output because it's undersized for the array) indicates the system design may benefit from a battery or inverter upgrade.

**Alert threshold:** Any inverter error code triggers an immediate alert. Communication failures longer than 24 hours trigger a check-in.

### 3. Panel-Level Performance (Microinverters and Optimizers)

If you install microinverters (Enphase) or power optimizers (SolarEdge), you have panel-level visibility. Use it.

**What to watch for:**

- **Underperforming individual panels** — One panel producing 30% less than its neighbors likely has a shading issue, a cracked cell, or a connector problem
- **String-level patterns** — All panels on one string underperforming could indicate an optimizer failure, wiring issue, or breaker problem
- **Mismatch between panels** — Some variation is normal (5–10%). Consistent mismatches above 15% need investigation.

**Alert threshold:** Any single panel producing less than 75% of the string average for more than 3 consecutive days.

### 4. Grid Export and Self-Consumption

Understanding how much energy is consumed on-site versus exported to the grid matters for customer satisfaction and upsell opportunities.

**What to watch for:**

- **High export ratios** — If more than 50% of production is exported, the homeowner is essentially giving away energy (especially important as net metering rates decrease). This is a battery storage upsell opportunity.
- **High grid import during production hours** — Could indicate a system sizing issue or a change in household consumption patterns.
- **Time-of-use patterns** — In utility territories with time-of-use rates, understanding when energy is consumed versus produced affects savings calculations.

### 5. System Health and Communication

The monitoring system itself needs monitoring. If your communication gateway goes offline, you lose visibility.

**What to watch for:**

- **Communication gaps** — Periods where no data is reported. Could be a WiFi issue at the home, a cellular gateway failure, or an inverter communication fault.
- **Data anomalies** — Spikes, negative values, or impossible readings usually indicate a sensor or communication issue rather than an actual system problem.
- **Firmware status** — Keep inverters and monitoring gateways on current firmware. Outdated firmware can cause communication failures and miss important bug fixes.

## Setting Up a Scalable Monitoring Workflow

### The Dashboard Approach

Once you've installed 20+ systems, checking each one individually doesn't work. You need a fleet-level dashboard that shows:

- All systems ranked by performance ratio (actual production / expected production)
- Systems currently in alert status
- Systems with communication failures
- Upcoming warranty expiration dates
- Service tickets linked to monitoring alerts

### Tiered Alert System

Not every alert requires the same response:

**Tier 1 — Immediate (respond within 24 hours):**
- Complete system shutdown
- Inverter critical fault
- Production at zero for 24+ hours

**Tier 2 — Soon (respond within one week):**
- Production below 70% of expected for 3+ days
- Inverter warning codes
- Single panel failure

**Tier 3 — Scheduled (address within 30 days):**
- Production below 85% of expected for 30 days
- Communication intermittent
- Gradual efficiency decline

### Automation Requirements

To scale monitoring without hiring dedicated staff:

- **Automated alert generation** — The system flags issues, not your team
- **Automated customer notification** — "We've detected a potential issue with your system and are looking into it" — sent automatically when a Tier 1 alert triggers
- **Service ticket creation** — Alerts automatically create service tickets assigned to the appropriate technician
- **Performance reports** — Monthly or quarterly reports sent automatically to homeowners showing their system's performance

## Choosing a Monitoring Approach

### Option 1: Manufacturer Monitoring Only

Every major inverter manufacturer provides free monitoring:

- **Enphase Enlighten** — Panel-level monitoring for Enphase microinverter systems
- **SolarEdge Monitoring** — Panel-level monitoring for SolarEdge optimizer systems
- **SMA Sunny Portal** — String-level monitoring for SMA inverter systems

**Pros:** Free, detailed equipment-specific data
**Cons:** Multiple dashboards if you install multiple brands, no unified fleet view, limited alerting customization, no CRM integration

### Option 2: Third-Party Monitoring Platform

Platforms like Also Energy, PowerTrack, or Locus Energy aggregate data across inverter brands.

**Pros:** Unified view, brand-agnostic, advanced analytics
**Cons:** Expensive ($5–$15/system/month), typically designed for commercial/utility-scale

### Option 3: Integrated CRM + Monitoring

Platforms like Solar OS integrate monitoring data into the same system where you manage sales, projects, and customer relationships.

**Pros:** Single platform, alerts tied to customer records, service tickets auto-created, fleet view alongside business data
**Cons:** May not offer the same depth as manufacturer-specific tools for advanced diagnostics

For most residential installers doing 5–150 installs per year, Option 3 makes the most sense. You get fleet-level visibility without juggling multiple platforms, and monitoring data lives next to customer history and service records.

## Key Takeaways

- **Monitoring is a business tool, not just a customer feature** — it drives referrals, prevents warranty disasters, and creates upsell opportunities
- **Track five core metrics:** energy production, inverter performance, panel-level output, grid export ratios, and system communication health
- **Set tiered alerts** so you respond to critical issues immediately and schedule less urgent items appropriately
- **Automate everything possible** — alert generation, customer notifications, service tickets, and performance reports
- **Proactive monitoring calls generate referrals** — calling a homeowner before they notice a problem builds extraordinary trust
- **Unify your monitoring** — one dashboard for all systems, all brands, tied to customer records

## Monitor Every System from One Dashboard with Solar OS

Solar OS integrates system monitoring with your CRM, project management, and service workflow. Track all your installed systems from one dashboard, receive automated alerts, and turn monitoring into a referral and upsell engine — without juggling multiple platforms.

**Start your free trial at [solaros.app](https://solaros.app) — see all your systems in one place.**
