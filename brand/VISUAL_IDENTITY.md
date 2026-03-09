# Solar OS USA — Visual Identity

## Design Philosophy

The visual identity bridges two worlds: **Florida tradesman** and **Silicon Valley SaaS**. It should feel like a modern tech product that a guy in a pickup truck would trust. Clean but not cold. Professional but not corporate. Bright but not childish.

Think: **Stripe's polish** meets **Home Depot's approachability**.

---

## 1. Logo Concepts

### Direction A: "Solar Circuit"
A minimalist sun icon where the rays form a circuit-board pattern — solar energy meets digital technology. The word "Solar OS" sits beside it in a clean sans-serif. The "OS" is subtly differentiated (bolder weight or accent color) to emphasize the "operating system" concept.
- **Feel:** Technical, modern, smart
- **Best for:** SaaS-forward positioning

### Direction B: "The Sun Shield"
A rounded shield/badge shape containing a stylized sun. Evokes trust, protection, and reliability — like a contractor's license badge or a quality seal. "SOLAR OS" in strong, slightly condensed type below.
- **Feel:** Trustworthy, American, established
- **Best for:** Tradesman trust, "built to last" positioning

### Direction C: "Bright Beam"
Abstract sun with a single bold ray extending outward, forming a forward-pointing arrow. Represents progress, growth, and direction. Minimal, geometric. "Solar OS" in a modern geometric sans-serif.
- **Feel:** Forward-moving, energetic, optimistic
- **Best for:** Growth-oriented, startup energy

**Recommended:** Direction B ("The Sun Shield") for primary brand. It builds the most trust with the target audience. Direction C elements could inform secondary/icon marks.

---

## 2. Color Palette

### Primary Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Solar Navy** | `#1B2E4A` | 27, 46, 74 | Primary brand color. Headers, nav bars, hero sections, primary text on light backgrounds. Conveys trust and professionalism. |
| **Sunshine Gold** | `#F5A623` | 245, 166, 35 | Primary accent. CTAs, highlights, important UI elements, pricing callouts. The energy of Florida sunshine. |

### Secondary Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Sky Blue** | `#3B82F6` | 59, 130, 246 | Links, interactive elements, info states, secondary buttons. |
| **Palm Green** | `#16A34A` | 22, 163, 74 | Success states, positive metrics, growth indicators, "active" badges. |
| **Slate** | `#64748B` | 100, 116, 139 | Secondary text, captions, placeholders, subtle borders. |

### Semantic Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Success** | `#16A34A` | 22, 163, 74 | Confirmations, completed states, positive deltas |
| **Warning** | `#EAB308` | 234, 179, 8 | Alerts, pending states, attention needed |
| **Error** | `#DC2626` | 220, 38, 38 | Errors, destructive actions, critical alerts |
| **Info** | `#3B82F6` | 59, 130, 246 | Informational callouts, tips, neutral alerts |

### Neutral Scale

| Name | HEX | Usage |
|------|-----|-------|
| **White** | `#FFFFFF` | Page backgrounds (light mode) |
| **Gray 50** | `#F8FAFC` | Subtle backgrounds, alternating rows |
| **Gray 100** | `#F1F5F9` | Card backgrounds, input backgrounds |
| **Gray 200** | `#E2E8F0` | Borders, dividers |
| **Gray 300** | `#CBD5E1` | Disabled states, subtle elements |
| **Gray 400** | `#94A3B8` | Placeholder text |
| **Gray 500** | `#64748B` | Secondary text |
| **Gray 600** | `#475569` | Body text |
| **Gray 700** | `#334155` | Strong secondary text |
| **Gray 800** | `#1E293B` | Primary text, headings |
| **Gray 900** | `#0F172A` | Darkest text, dark mode backgrounds |

### Dark Mode Palette

| Element | Color |
|---------|-------|
| Background | `#0F172A` (Gray 900) |
| Surface | `#1E293B` (Gray 800) |
| Surface Elevated | `#334155` (Gray 700) |
| Primary Text | `#F1F5F9` (Gray 100) |
| Secondary Text | `#94A3B8` (Gray 400) |
| Borders | `#334155` (Gray 700) |
| Sunshine Gold (dark) | `#FBBF24` (slightly brighter for contrast) |

### WCAG AA Contrast Checks
- Solar Navy on White: **12.5:1** ✅ (AAA)
- Sunshine Gold on Solar Navy: **5.8:1** ✅ (AA)
- Sunshine Gold on White: **2.1:1** ❌ (decorative only on white — use Solar Navy for text)
- Gray 600 on White: **5.4:1** ✅ (AA body text)
- White on Solar Navy: **12.5:1** ✅ (AAA)
- Gray 100 on Gray 900: **15.4:1** ✅ (AAA dark mode)

---

## 3. Typography

### Primary Font: Inter
- **Why:** Clean, highly legible, excellent at small sizes, free, variable font. Feels modern but not trendy. Great for data-heavy interfaces.
- **Source:** Google Fonts / Variable font file
- **Weights used:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Secondary Font: DM Sans
- **Why:** Slightly warmer and more distinctive than Inter. Used for marketing headlines and hero text to add personality without sacrificing readability.
- **Source:** Google Fonts
- **Weights used:** 500 (Medium), 700 (Bold)

### Monospace: JetBrains Mono
- **Why:** For code snippets, API docs, technical data, system IDs
- **Weight:** 400 only

### Type Scale

| Level | Font | Weight | Size (desktop) | Size (mobile) | Line Height | Letter Spacing |
|-------|------|--------|----------------|---------------|-------------|----------------|
| Display | DM Sans | 700 | 48px / 3rem | 36px / 2.25rem | 1.1 | -0.02em |
| H1 | DM Sans | 700 | 36px / 2.25rem | 28px / 1.75rem | 1.2 | -0.02em |
| H2 | DM Sans | 700 | 30px / 1.875rem | 24px / 1.5rem | 1.25 | -0.01em |
| H3 | Inter | 600 | 24px / 1.5rem | 20px / 1.25rem | 1.3 | -0.01em |
| H4 | Inter | 600 | 20px / 1.25rem | 18px / 1.125rem | 1.35 | 0 |
| H5 | Inter | 600 | 16px / 1rem | 16px / 1rem | 1.4 | 0 |
| H6 | Inter | 600 | 14px / 0.875rem | 14px / 0.875rem | 1.4 | 0.01em |
| Body | Inter | 400 | 16px / 1rem | 16px / 1rem | 1.6 | 0 |
| Body Small | Inter | 400 | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 0 |
| Caption | Inter | 500 | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 0.02em |
| Overline | Inter | 600 | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 0.08em |

---

## 4. Photography & Illustration Style

### Photography
- **Subject matter:** Real solar installations, real crews, real rooftops. Florida landscapes (blue sky, palm trees, suburban roofs). Diverse crews. Pickup trucks with company wraps.
- **Style:** Natural light, warm tones (golden hour preferred). Not overly staged or stock-photo-perfect. Should feel like it was shot by a good photographer visiting a real job site.
- **Color grading:** Warm, slightly high contrast. Blues should feel like Florida sky, not corporate blue. Greens should feel like palm trees, not money.
- **Avoid:** Generic handshake photos. Suited executives. Cold blue corporate stock. Obviously non-American settings. AI-generated faces.

### Illustration Style
- **When to use:** Onboarding flows, empty states, feature explanations, error pages
- **Style:** Clean line illustrations with spot color (Sunshine Gold + Solar Navy). Slightly rounded, friendly geometry. NOT flat corporate illustration (no "Blush" or "unDraw" generic style).
- **Complexity:** Simple, focused on one concept per illustration. 2-3 colors max.

---

## 5. Icon Style

### Primary: Line Icons (1.5px stroke)
- Style: Rounded line icons, consistent 24x24 grid
- Stroke: 1.5px, round caps, round joins
- Color: Inherits from text color (currentColor)
- Library recommendation: Lucide Icons (open source, consistent, extensive)

### When to Use Filled Icons
- Active/selected navigation states
- Status indicators (filled circle for "active")
- Small sizes below 16px where line icons lose clarity

### Duotone (marketing only)
- Use duotone (Solar Navy + Sunshine Gold) for feature icons on marketing pages
- Not for in-app UI

---

## 6. Motion & Animation

### Philosophy: Purposeful, Not Decorative
Motion should guide attention and confirm actions. Never animate just to be fancy.

### Timing
| Type | Duration | Easing |
|------|----------|--------|
| Micro (button hover, toggle) | 150ms | ease-out |
| Small (dropdown, tooltip) | 200ms | ease-out |
| Medium (modal, panel) | 300ms | ease-in-out |
| Large (page transition) | 400ms | ease-in-out |

### Standard Animations
- **Button hover:** Subtle lift (translateY -1px) + shadow increase
- **Card hover:** Slight lift (translateY -2px) + shadow increase
- **Modal entry:** Fade in + scale from 0.95
- **Dropdown:** Slide down + fade in
- **Loading:** Pulsing skeleton screens (not spinners)
- **Success:** Brief scale pop (1.05) + checkmark draw

### Rules
1. Never animate more than 2 properties simultaneously
2. No animation longer than 500ms (except loading states)
3. Respect `prefers-reduced-motion` — disable all non-essential animation
4. No auto-playing animations on scroll (parallax, counters, etc.)
5. Skeleton loaders over spinners — always

---

## 7. Imagery Guidelines Summary

### Do
- Show real solar work environments
- Use warm, natural lighting
- Include diverse crews and customers
- Feature recognizable Florida/US settings
- Use screenshots of the actual product

### Don't
- Use generic SaaS illustrations with no personality
- Use cold, blue-tinted corporate photography
- Show obviously non-US settings (European roofs, Asian cities)
- Use AI-generated people
- Over-polish to the point of feeling fake
