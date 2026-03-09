# Solar OS — Brand Guidelines

## 1. Logo Usage

### Clear Space
- Minimum clear space around the logo: equal to the height of the "O" in "OS"
- No other elements (text, images, icons) should intrude into this space

### Minimum Size
- Digital: 120px wide (full logo), 32px (icon mark only)
- Print: 1 inch wide (full logo), 0.25 inch (icon mark only)

### Approved Variants
1. **Full color** — Solar Navy + Sunshine Gold on white/light backgrounds
2. **Reversed** — White + Sunshine Gold on Solar Navy/dark backgrounds
3. **Monochrome dark** — All Solar Navy on light backgrounds
4. **Monochrome light** — All white on dark backgrounds/photos

### Logo Don'ts
- ❌ Don't rotate or skew the logo
- ❌ Don't change the logo colors to off-brand colors
- ❌ Don't add drop shadows or effects
- ❌ Don't stretch or distort proportions
- ❌ Don't place on busy photo backgrounds without contrast overlay
- ❌ Don't rearrange logo elements
- ❌ Don't outline the logo
- ❌ Don't animate the logo (except approved loading animation)

---

## 2. Color Usage Rules

### Primary Actions (CTAs)
- **Background:** Sunshine Gold `#F5A623`
- **Text on gold:** Solar Navy `#1B2E4A`
- **Hover:** Darken to `#E09610`
- Use for: Primary buttons, key CTAs, upgrade prompts

### Secondary Actions
- **Background:** Sky Blue `#3B82F6`
- **Text on blue:** White `#FFFFFF`
- **Hover:** Darken to `#2563EB`
- Use for: Secondary buttons, links, info actions

### Navigation & Headers
- **Background:** Solar Navy `#1B2E4A`
- **Text:** White `#FFFFFF`
- **Active indicator:** Sunshine Gold `#F5A623`

### Content Areas
- **Page background:** White `#FFFFFF` (light) / Gray 900 `#0F172A` (dark)
- **Card background:** White `#FFFFFF` (light) / Gray 800 `#1E293B` (dark)
- **Borders:** Gray 200 `#E2E8F0` (light) / Gray 700 `#334155` (dark)

### Status Colors
- **Success (green):** Completed installs, approved permits, positive revenue
- **Warning (yellow):** Pending permits, overdue follow-ups, attention needed
- **Error (red):** Failed submissions, expired quotes, critical issues
- **Info (blue):** Tips, onboarding prompts, neutral notifications

### Color Don'ts
- ❌ Don't use Sunshine Gold for body text (fails contrast on white)
- ❌ Don't use more than 3 colors in a single component
- ❌ Don't use color as the ONLY way to convey meaning (add icons/text)
- ❌ Don't create new brand colors — use the defined palette

---

## 3. Typography Scale

### Heading Hierarchy

```
Display:  DM Sans Bold     48px / 3rem      — Hero headlines only
H1:       DM Sans Bold     36px / 2.25rem   — Page titles
H2:       DM Sans Bold     30px / 1.875rem  — Section headers
H3:       Inter Semibold   24px / 1.5rem    — Sub-sections
H4:       Inter Semibold   20px / 1.25rem   — Card titles
H5:       Inter Semibold   16px / 1rem      — Group labels
H6:       Inter Semibold   14px / 0.875rem  — Small labels, overlines
```

### Body Text

```
Body:       Inter Regular   16px / 1rem      line-height: 1.6
Body Small: Inter Regular   14px / 0.875rem  line-height: 1.5
Caption:    Inter Medium    12px / 0.75rem   line-height: 1.4
Overline:   Inter Semibold  12px / 0.75rem   line-height: 1.4, uppercase, tracking wide
```

### Text Colors (Light Mode)
- **Primary text:** Gray 800 `#1E293B` — headings, important content
- **Body text:** Gray 600 `#475569` — paragraphs, descriptions
- **Secondary text:** Gray 500 `#64748B` — captions, metadata
- **Disabled text:** Gray 300 `#CBD5E1`
- **Link text:** Sky Blue `#3B82F6`
- **Link hover:** `#2563EB`

### Text Colors (Dark Mode)
- **Primary text:** Gray 100 `#F1F5F9`
- **Body text:** Gray 300 `#CBD5E1`
- **Secondary text:** Gray 400 `#94A3B8`
- **Disabled text:** Gray 600 `#475569`
- **Link text:** `#60A5FA`
- **Link hover:** `#93BBFD`

---

## 4. Button Styles

### Primary Button
```
Background: #F5A623 (Sunshine Gold)
Text: #1B2E4A (Solar Navy)
Font: Inter Semibold 14px
Padding: 10px 20px
Border Radius: 8px
Hover: #E09610 background, translateY(-1px), shadow-md
Active: #CC8508, translateY(0)
Disabled: #CBD5E1 bg, #94A3B8 text
```

### Secondary Button
```
Background: transparent
Border: 1.5px solid #E2E8F0
Text: #1E293B
Hover: #F8FAFC background, border #CBD5E1
Active: #F1F5F9 background
Dark mode: border #475569, text #F1F5F9, hover bg #334155
```

### Ghost Button
```
Background: transparent
Border: none
Text: #3B82F6
Hover: #F1F5F9 background
Active: #E2E8F0 background
```

### Danger Button
```
Background: #DC2626
Text: white
Hover: #B91C1C
Active: #991B1B
```

### Button Sizes
| Size | Padding | Font Size | Min Height |
|------|---------|-----------|------------|
| Small | 6px 12px | 12px | 32px |
| Default | 10px 20px | 14px | 40px |
| Large | 12px 28px | 16px | 48px |

### Icon Buttons
- Square aspect ratio with same padding as text buttons
- Icon size: 16px (sm), 20px (default), 24px (lg)

---

## 5. Card Styles

### Default Card
```
Background: white (light) / #1E293B (dark)
Border: 1px solid #E2E8F0 (light) / #334155 (dark)
Border Radius: 12px
Padding: 24px
Shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)
```

### Interactive Card (clickable)
```
Same as default +
Hover: shadow-md, translateY(-2px), border-color #CBD5E1
Transition: all 200ms ease-out
Cursor: pointer
```

### Stat Card
```
Same as default card
Contains: Label (overline style), Value (H2), Delta (caption + color)
```

### Feature Card (marketing)
```
Background: white
Border Radius: 16px
Shadow: 0 4px 6px rgba(0,0,0,0.07), 0 10px 15px rgba(0,0,0,0.05)
Padding: 32px
Icon: 48px, Sunshine Gold background circle
```

---

## 6. Form Styles

### Text Input
```
Height: 40px
Padding: 8px 12px
Border: 1.5px solid #E2E8F0
Border Radius: 8px
Font: Inter Regular 14px
Background: white (light) / #1E293B (dark)
Focus: border #3B82F6, ring 3px #3B82F620
Error: border #DC2626, ring 3px #DC262620
Disabled: bg #F1F5F9, text #94A3B8
```

### Select
```
Same as text input + chevron-down icon right
Option padding: 8px 12px
```

### Checkbox
```
Size: 18px x 18px
Border: 1.5px solid #CBD5E1
Border Radius: 4px
Checked: bg #3B82F6, border #3B82F6, white checkmark
```

### Toggle/Switch
```
Track: 44px x 24px, border-radius 12px
Off: bg #CBD5E1
On: bg #3B82F6
Thumb: 20px circle, white, shadow-sm
Transition: 200ms ease-out
```

### Radio Button
```
Size: 18px x 18px
Border: 1.5px solid #CBD5E1
Border Radius: 50%
Selected: border #3B82F6, inner dot #3B82F6 (10px)
```

### Labels
```
Font: Inter Medium 14px
Color: Gray 700 #334155
Margin bottom: 6px
Required indicator: * in Error red
```

---

## 7. Spacing System (4px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0px | Reset |
| `space-0.5` | 2px | Micro adjustments |
| `space-1` | 4px | Tight inner spacing |
| `space-1.5` | 6px | Input label gap |
| `space-2` | 8px | Inline element gap |
| `space-3` | 12px | Related item spacing |
| `space-4` | 16px | Standard component padding |
| `space-5` | 20px | Button padding, form gaps |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section inner padding |
| `space-10` | 40px | Section gaps |
| `space-12` | 48px | Large section padding |
| `space-16` | 64px | Page section margins |
| `space-20` | 80px | Hero padding |
| `space-24` | 96px | Major page sections |

### Rules
- Always use 4px increments for spacing
- Consistent padding within component types (all cards = 24px)
- Double the internal spacing for the external gap (card padding 24px → gap between cards 48px... or use 24-32px gap)

---

## 8. Border Radius System

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Badges, tags, small elements |
| `rounded` | 6px | Inline code, small chips |
| `rounded-md` | 8px | Buttons, inputs, dropdowns |
| `rounded-lg` | 12px | Cards, modals, panels |
| `rounded-xl` | 16px | Feature cards, marketing sections |
| `rounded-2xl` | 20px | Hero cards, promotional banners |
| `rounded-full` | 9999px | Avatars, pills, toggles |

### Rules
- Nested elements should have progressively smaller radii
- Card (12px) → Button inside card (8px) → Badge inside button (4px)
- Never mix sharp corners and rounded corners in the same component

---

## 9. Shadow System

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle depth (inputs, badges) |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Default cards, resting state |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)` | Hover states, dropdowns |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Modals, popovers |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)` | Marketing feature cards |

### Dark Mode Shadows
- Reduce opacity by 50% (shadows less visible on dark backgrounds)
- Consider using subtle light borders instead of shadows in dark mode
- Elevated surfaces use lighter background color rather than shadow

---

## 10. Dark Mode Rules

### Principles
1. **Surface hierarchy through lightness:** Darker = further back, lighter = elevated
2. **Reduce contrast slightly:** Don't use pure white (#FFFFFF) text — use Gray 100 (#F1F5F9)
3. **Brighten accent colors:** Sunshine Gold shifts from #F5A623 → #FBBF24 for better contrast
4. **Shadows → Borders:** Replace box shadows with subtle borders in dark mode
5. **Desaturate backgrounds:** Never use saturated colors as large backgrounds in dark mode

### Color Mapping

| Element | Light | Dark |
|---------|-------|------|
| Page bg | `#FFFFFF` | `#0F172A` |
| Surface 1 | `#FFFFFF` | `#1E293B` |
| Surface 2 | `#F8FAFC` | `#334155` |
| Border | `#E2E8F0` | `#334155` |
| Primary text | `#1E293B` | `#F1F5F9` |
| Body text | `#475569` | `#CBD5E1` |
| Muted text | `#64748B` | `#94A3B8` |
| Primary accent | `#F5A623` | `#FBBF24` |
| Primary CTA bg | `#F5A623` | `#F5A623` (same) |

### Implementation
- Use CSS custom properties (variables) for all color tokens
- Toggle via `class="dark"` on `<html>` element
- Respect `prefers-color-scheme` as default, allow manual override
- Store preference in `localStorage`

---

## 11. Do's and Don'ts

### ✅ Do
- Use consistent spacing from the 4px grid
- Maintain clear visual hierarchy with the type scale
- Use Sunshine Gold sparingly — it's an accent, not a background
- Test everything in both light and dark mode
- Use the icon library consistently (don't mix icon sets)
- Align text and elements to the grid
- Use the defined color palette for all UI elements

### ❌ Don't
- Don't use more than 2 font families in a single view
- Don't create new "one-off" colors — everything comes from the palette
- Don't make text smaller than 12px
- Don't use thin font weights (300 or below) for body text
- Don't use pure black (#000000) — use Gray 900 (#0F172A)
- Don't center-align body paragraphs
- Don't mix border-radius sizes within the same component level
- Don't use Sunshine Gold text on white backgrounds (fails contrast)
- Don't use decorative animations that serve no functional purpose
- Don't forget focus states — every interactive element needs a visible focus ring
