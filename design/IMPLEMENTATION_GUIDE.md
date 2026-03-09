# Solar OS USA — Implementation Guide
## KANIEL TORD LLC

---

## 1. Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | React 18+ with TypeScript | Strict mode |
| Build | Vite 5 | Fast HMR, optimized bundles |
| Styling | Tailwind CSS 3.4 | Custom config per design system |
| Icons | Lucide React | Tree-shakeable, consistent |
| Charts | Recharts | React-native, composable |
| Routing | React Router v6 | Nested layouts |
| State | Zustand | Lightweight, TypeScript-first |
| Forms | React Hook Form + Zod | Validation |
| Tables | TanStack Table v8 | Sorting, filtering, pagination |
| API | TanStack Query + Axios | Caching, optimistic updates |
| Auth | Clerk or Auth0 | SSO, role-based access |
| Maps | Mapbox GL | For fleet monitoring geographic view |

---

## 2. Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (sidebar + header)
│   ├── dashboard/
│   ├── leads/
│   ├── proposals/
│   ├── projects/
│   ├── monitoring/
│   └── settings/
├── components/
│   ├── ui/                     # Base components (Button, Card, Badge, Input, etc.)
│   ├── charts/                 # Chart wrappers
│   ├── tables/                 # Table components
│   └── layout/                 # Sidebar, Header, MobileNav
├── config/
│   ├── brand.ts                # Colors, company info
│   ├── navigation.ts           # Sidebar nav items
│   └── constants.ts            # US states, utilities, panel brands
├── hooks/
│   ├── useAuth.ts
│   ├── useLeads.ts
│   ├── useMonitoring.ts
│   └── useProposals.ts
├── lib/
│   ├── api.ts                  # Axios instance
│   ├── utils.ts                # Helpers (formatCurrency, formatKWh, etc.)
│   └── types.ts                # Shared TypeScript types
├── stores/
│   ├── uiStore.ts              # Sidebar state, theme
│   └── filterStore.ts          # Table/list filters
└── styles/
    └── globals.css             # Tailwind directives, custom utilities
```

---

## 3. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        solar: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
```

---

## 4. Brand Config

```typescript
// src/config/brand.ts
export const brand = {
  name: 'Solar OS',
  company: 'Kaniel Tord LLC',
  tagline: 'Power Your Solar Business',
  markets: ['CA', 'TX', 'FL', 'NY'] as const,
  colors: {
    primary: '#F59E0B',
    primaryHover: '#FBBF24',
    primaryActive: '#D97706',
  },
  support: {
    email: 'support@solaros.com',
    phone: '1-888-SOLAR-OS',
  },
} as const
```

---

## 5. Key Component Patterns

### StatCard
```tsx
interface StatCardProps {
  label: string
  value: string
  change?: { value: string; positive: boolean }
  accent?: 'solar' | 'blue' | 'green' | 'purple'
}

export function StatCard({ label, value, change, accent = 'solar' }: StatCardProps) {
  const accentColors = {
    solar: 'border-l-solar-500',
    blue: 'border-l-blue-500',
    green: 'border-l-green-500',
    purple: 'border-l-purple-500',
  }
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl p-6 border-l-4 ${accentColors[accent]}
      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all`}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-slate-400">{label}</p>
        {change && (
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            change.positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>{change.value}</span>
        )}
      </div>
      <p className="text-3xl font-bold text-white font-mono">{value}</p>
    </div>
  )
}
```

### StatusBadge
```tsx
const statusStyles = {
  active:    'bg-green-500/10 text-green-400',
  pending:   'bg-yellow-500/10 text-yellow-400',
  offline:   'bg-red-500/10 text-red-400',
  installing:'bg-blue-500/10 text-blue-400',
  survey:    'bg-purple-500/10 text-purple-400',
} as const

export function StatusBadge({ status }: { status: keyof typeof statusStyles }) {
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
```

---

## 6. API Data Models

```typescript
// src/lib/types.ts

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: 'CA' | 'TX' | 'FL' | 'NY'
  source: 'google_ads' | 'referral' | 'website' | 'door_to_door'
  stage: 'new' | 'contacted' | 'qualified' | 'proposal_sent' | 'won' | 'lost'
  estimatedValue: number
  systemSizeKw?: number
  assignedTo: string
  createdAt: string
  updatedAt: string
  notes: Note[]
}

interface Proposal {
  id: string
  leadId: string
  customerName: string
  address: string
  systemSizeKw: number
  panelBrand: string
  panelCount: number
  inverterType: string
  batteryType?: string
  grossCost: number
  federalItc: number
  netCost: number
  estimatedAnnualProduction: number
  offsetPercentage: number
  paybackYears: number
  financingType: 'cash' | 'loan' | 'ppa'
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected'
  createdAt: string
}

interface SolarSystem {
  id: string
  customerId: string
  customerName: string
  address: string
  city: string
  state: string
  systemSizeKw: number
  panelCount: number
  inverterType: string
  status: 'online' | 'offline' | 'warning'
  currentOutputKw: number
  todayOutputKwh: number
  efficiencyPercent: number
  installedDate: string
  lastPingAt: string
  alerts: Alert[]
}

interface Alert {
  id: string
  systemId: string
  severity: 'critical' | 'warning' | 'info'
  message: string
  createdAt: string
  resolvedAt?: string
}
```

---

## 7. US Market Considerations

### Compliance
- **NEM 3.0** (California): Show net billing tariff impact in proposals
- **ITC 30%**: Always display federal tax credit prominently
- **State incentives**: Database per state (CA SGIP, TX property tax exemption, FL net metering, NY NYSERDA)
- **Utility rates**: Integrate utility rate databases (OpenEI API)

### Regional Defaults
```typescript
export const stateDefaults = {
  CA: { utility: 'PG&E', avgRate: 0.38, netMetering: 'NEM 3.0', incentives: ['SGIP', 'SOMAH'] },
  TX: { utility: 'Oncor', avgRate: 0.14, netMetering: 'Varies', incentives: ['Property Tax Exemption'] },
  FL: { utility: 'FPL', avgRate: 0.15, netMetering: 'Full Retail', incentives: ['Property Tax Exemption'] },
  NY: { utility: 'ConEd', avgRate: 0.24, netMetering: 'VDER', incentives: ['NYSERDA', 'NY-Sun'] },
}
```

### Currency & Units
- All monetary values in USD, formatted: `$XX,XXX`
- Energy: kW (power), kWh (energy), MWh (fleet)
- Use `Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })`

---

## 8. Build Order (Recommended Sprints)

### Sprint 1 — Foundation (2 weeks)
- [ ] Project setup (Vite + React + TS + Tailwind)
- [ ] Design system components (Button, Card, Badge, Input, Select, Table)
- [ ] Layout shell (Sidebar, Header, MobileNav)
- [ ] Routing structure
- [ ] Auth integration

### Sprint 2 — Dashboard + Leads (2 weeks)
- [ ] Dashboard with stat cards + charts
- [ ] Lead management (list + kanban views)
- [ ] Lead detail/edit forms
- [ ] Lead import (CSV)

### Sprint 3 — Proposals (2 weeks)
- [ ] Proposal builder form
- [ ] Real-time cost calculator
- [ ] PDF generation
- [ ] Email sending (proposal link)
- [ ] E-signature integration (DocuSign/PandaDoc)

### Sprint 4 — Monitoring (2 weeks)
- [ ] Fleet overview dashboard
- [ ] Individual system detail view
- [ ] Real-time data via WebSocket
- [ ] Alert management
- [ ] Geographic map view

### Sprint 5 — Project Tracker + Polish (2 weeks)
- [ ] Project pipeline (permit → install → inspection → PTO)
- [ ] Document management
- [ ] Team assignment
- [ ] Mobile optimization pass
- [ ] Performance audit (Lighthouse > 90)

---

## 9. Mockup Files Reference

| File | Screen | Key Features |
|------|--------|-------------|
| `mockups/dashboard.html` | Main Dashboard | Stat cards, revenue chart, pipeline funnel, recent projects, alerts |
| `mockups/leads.html` | Lead Management | Kanban board (desktop), list view (mobile), filters, source tracking |
| `mockups/proposals.html` | Proposal Builder | System configurator, financing options, live summary with ROI |
| `mockups/monitoring.html` | Fleet Monitoring | Live stats, production curve, system cards with sparklines, alerts |

All mockups use Tailwind CDN and are self-contained HTML files. Open directly in any browser.
