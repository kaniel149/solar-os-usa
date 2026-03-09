# Solar OS USA — Design System v1.0
## KANIEL TORD LLC

---

## 1. Brand Identity

**Product Name:** Solar OS  
**Tagline:** "Power Your Solar Business"  
**Market:** US residential & commercial solar (CA, TX, FL, NY)  
**Personality:** Professional, trustworthy, modern, data-driven

---

## 2. Color Palette

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `solar-500` | `#F59E0B` | Primary accent, CTAs, solar/energy identity |
| `solar-400` | `#FBBF24` | Hover states, highlights |
| `solar-600` | `#D97706` | Active/pressed states |

### Neutral (Dark Mode First)
| Token | Hex | Usage |
|-------|-----|-------|
| `slate-950` | `#020617` | App background |
| `slate-900` | `#0F172A` | Card backgrounds |
| `slate-800` | `#1E293B` | Elevated surfaces, inputs |
| `slate-700` | `#334155` | Borders, dividers |
| `slate-400` | `#94A3B8` | Secondary text |
| `slate-200` | `#E2E8F0` | Primary text (dark mode) |
| `white` | `#FFFFFF` | Headings, emphasis |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#22C55E` | Active systems, completed, positive kWh |
| `warning` | `#F59E0B` | Alerts, pending actions |
| `danger` | `#EF4444` | Errors, offline, critical |
| `info` | `#3B82F6` | Links, informational badges |

### Gradient
- **Hero gradient:** `from-solar-500 to-orange-600` (energy feel)
- **Card accent:** `from-blue-500/10 to-purple-500/10` (subtle glass)

---

## 3. Typography

**Font Stack:**  
- Headings: `Inter, system-ui, sans-serif` (weight 600-700)  
- Body: `Inter, system-ui, sans-serif` (weight 400-500)  
- Mono/Data: `JetBrains Mono, monospace` (for kWh, $, metrics)

### Scale
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `display` | 36px / 2.25rem | 700 | Dashboard hero numbers |
| `h1` | 30px / 1.875rem | 700 | Page titles |
| `h2` | 24px / 1.5rem | 600 | Section headers |
| `h3` | 20px / 1.25rem | 600 | Card titles |
| `body` | 16px / 1rem | 400 | Default text |
| `body-sm` | 14px / 0.875rem | 400 | Table cells, secondary |
| `caption` | 12px / 0.75rem | 500 | Labels, badges, timestamps |

---

## 4. Spacing & Layout

- **Base unit:** 4px  
- **Grid:** 12-column, 1280px max content width  
- **Sidebar:** 256px (expanded) / 64px (collapsed)  
- **Card padding:** 24px  
- **Section gap:** 24px  
- **Border radius:** `rounded-xl` (12px) for cards, `rounded-lg` (8px) for inputs/buttons

---

## 5. Component Library

### Buttons
```
Primary:   bg-solar-500 hover:bg-solar-400 text-slate-950 font-semibold rounded-lg px-6 py-2.5
Secondary: bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg
Ghost:     hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg
Danger:    bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg
```

### Cards
```
Base:      bg-slate-900 border border-slate-800 rounded-xl p-6
Elevated:  bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg shadow-black/20
Stat:      bg-slate-900 border border-slate-800 rounded-xl p-6 + accent left border
```

### Stat Card Pattern
```html
<div class="bg-slate-900 border border-slate-800 rounded-xl p-6 border-l-4 border-l-solar-500">
  <p class="text-sm text-slate-400">Total Revenue</p>
  <p class="text-3xl font-bold text-white font-mono">$1.2M</p>
  <p class="text-sm text-green-400">↑ 12% vs last month</p>
</div>
```

### Badges
```
Active:    bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full
Pending:   bg-yellow-500/10 text-yellow-400 ...
Inactive:  bg-slate-700 text-slate-400 ...
```

### Tables
- Header: `bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider`
- Rows: `border-b border-slate-800 hover:bg-slate-800/50`
- Zebra striping optional

### Sidebar Navigation
- Active: `bg-solar-500/10 text-solar-400 border-r-2 border-solar-500`
- Default: `text-slate-400 hover:text-white hover:bg-slate-800`
- Icons: 20px, Lucide icon set

---

## 6. Data Visualization

- **Chart library:** Recharts or Chart.js
- **Chart palette:** `#F59E0B, #3B82F6, #22C55E, #8B5CF6, #EC4899`
- **Grid lines:** `slate-800`
- **Axis text:** `slate-400`, 12px
- **Tooltip:** `bg-slate-800 border-slate-700 rounded-lg shadow-xl`

---

## 7. Iconography

- **Set:** Lucide React (consistent, clean, MIT licensed)
- **Size:** 20px default, 16px in badges/buttons, 24px in nav
- **Key icons:**
  - Dashboard: `LayoutDashboard`
  - Leads: `Users`
  - Proposals: `FileText`
  - Projects: `FolderKanban`
  - Monitoring: `Activity`
  - Settings: `Settings`
  - Solar: `Sun`

---

## 8. Motion & Interaction

- **Transitions:** `transition-all duration-200 ease-out`
- **Page transitions:** Fade-in 200ms
- **Hover lift:** `hover:-translate-y-0.5 hover:shadow-lg`
- **Loading:** Skeleton shimmer (`animate-pulse bg-slate-800`)
- **Charts:** 600ms ease-out entrance animation

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| `sm` | 640px | Single column, bottom nav |
| `md` | 768px | Collapsed sidebar |
| `lg` | 1024px | Full sidebar |
| `xl` | 1280px | Max content width |

---

## 10. Accessibility

- Contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- Focus rings: `ring-2 ring-solar-500 ring-offset-2 ring-offset-slate-950`
- All interactive elements keyboard-navigable
- ARIA labels on icon-only buttons
- Screen reader support for charts (sr-only data tables)

---

## 11. Dark / Light Mode

**Default: Dark mode** (industry standard for monitoring dashboards)

Light mode available via toggle:
- `slate-950` → `white`
- `slate-900` → `gray-50`
- `slate-800` → `gray-100`
- Text: invert accordingly
- Solar accent unchanged
