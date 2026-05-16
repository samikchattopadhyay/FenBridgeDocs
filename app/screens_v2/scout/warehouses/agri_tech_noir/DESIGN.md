---
name: Agri-Tech Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#95d3ba'
  on-secondary: '#003829'
  secondary-container: '#0b513d'
  on-secondary-container: '#83c2a9'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#b0f0d6'
  secondary-fixed-dim: '#95d3ba'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#0b513d'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style
The design system embodies "Agri-Tech Noir"—a high-precision, utilitarian aesthetic tailored for industrial agriculture and supply chain logistics. It targets operational scouts and warehouse managers who require rapid data synthesis in low-light or high-glare environments. 

The style is **Modern/Technical**, leaning into a dark, high-contrast interface. It prioritizes legibility and information density over decorative flair. The emotional response is one of clinical efficiency, reliability, and "at-a-glance" authority. Visual cues are sharp and purposeful, utilizing deep obsidian surfaces punctuated by vibrant emerald accents to signal operational health and precision.

## Colors
The palette is rooted in a "Noir" foundation, utilizing a near-black `#0a0a0a` for the base canvas and `#131313` for primary UI containers. The primary accent is **Emerald 500 (#10b981)**, representing vitality and "Go" states.

### Semantic Operational States
To support complex scout directories, color is used strictly for status and risk assessment:
- **Fitness:** "Fit" uses the primary Emerald. "Unfit" uses Danger Red (#ef4444). "Unchecked" uses Amber (#f59e0b).
- **Lifecycle:** "Verified/Sealed" maps to Emerald. "Pending/Expired" maps to Amber. "Voided/Terminal" maps to Danger Red.
- **Contrast:** All text on dark surfaces must maintain a minimum 7:1 contrast ratio to ensure readability during field operations.

## Typography
This design system utilizes **Hanken Grotesk** for all primary interfaces to provide a sharp, contemporary, and highly legible experience. 

For data-heavy directory tables and multi-step timelines, a secondary monospaced font (JetBrains Mono) is introduced for numerical values and IDs (e.g., Lot IDs, SKU codes) to ensure vertical alignment and quick scanning. Headers use tighter letter spacing and heavier weights to maintain an authoritative, industrial feel. Labels use uppercase styling with increased tracking to differentiate them from actionable body text.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop. 

- **Density:** High. Components are tightly packed to maximize information visibility on a single screen.
- **Rhythm:** An 8px baseline grid is used for vertical rhythm, but 4px increments are allowed for tight data-table spacing.
- **Safe Areas:** On mobile, margins are kept at 16px to allow for one-handed operation in the field. Desktop layouts utilize a 32px outer margin.
- **Tables:** Directory views use "Zebra-striping" with a very subtle difference in surface brightness (`#131313` vs `#171717`) rather than borders to define rows.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Low-Contrast Outlines**. Shadows are avoided to prevent visual "muddiness" in dark mode.

- **Level 0 (Canvas):** `#0a0a0a`.
- **Level 1 (Cards/Tables):** `#131313` with a 1px solid border of `#262626`.
- **Level 2 (Overlays/Modals):** `#1c1c1c` with a 1px solid border of `#404040`.
- **Detail View:** Uses a "sliding pane" metaphor where higher-level details physically sit atop the directory list, distinguished by a slightly brighter border-left in Emerald if the item is active.

## Shapes
Shapes are **Soft (0.25rem)**. This slight rounding provides a hint of modern sophistication without sacrificing the utilitarian, industrial nature of the agri-tech brand. 

Status indicators and "Chips" use a more pronounced rounding (0.5rem) to differentiate them from structural layout blocks like Warehouse cards or Table rows. Interactive buttons maintain the standard 0.25rem radius for a crisp, "tool-like" appearance.

## Components

### Warehouse & Lot Cards
Cards use the `#131313` background. Headers include a `label-md` for the ID and a `headline-sm` for the name. The bottom edge of a Lot card features a "Status Bar"—a 2px thick horizontal line colored by the Fitness or Lifecycle semantic token.

### Tabbable Headers
Used in Detail views. Tabs are underline-style with the active state in Emerald (#10b981). Inactive tabs remain in a muted gray (#737373).

### Chronological History Spine
For lot traceability, the "Spine" is a vertical 2px line in `#262626`. Historical events are marked by dots. If an event represents a "Voided" state, the dot and the subsequent line segment turn Danger Red. Verified milestones use Emerald dots with a subtle outer glow.

### Input Fields & Controls
Fields use a dark fill with a subtle `#262626` border. On focus, the border transitions to Emerald. Checkboxes and Radio buttons are strictly Emerald when active to ensure high visibility against the dark background.

### Data Tables
Rows are high-density (32px-40px height). Columns containing numeric data or IDs must use the `mono-data` typography token for optimal alignment.