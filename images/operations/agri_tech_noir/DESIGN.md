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
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
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
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  margin: 20px
  gutter: 12px
---

## Brand & Style

The design system is built on a "Premium Agricultural" aesthetic. It balances the grit of farming with the precision of a high-end financial marketplace. The target audience includes both makhana farmers operating in high-glare outdoor environments and institutional buyers looking for efficiency and scale.

The visual style is **Corporate Modern with Tactile Depth**. It avoids the flatness of typical SaaS platforms in favor of subtle layering and tonal separation. By utilizing a dark-mode-first approach, the system reduces eye strain and emphasizes the "Emerald Green" accent as a beacon of growth and transactional success. The emotional response should be one of reliability, technological sophistication, and clarity.

## Colors

The palette is anchored by a "Deep Charcoal" base to ensure maximum contrast for the Emerald Green primary color. 

- **Primary (#10B981):** Used for calls-to-action, success states, and growth indicators.
- **Secondary (#8B5CF6):** A deep purple inspired by the makhana seed coat, used sparingly for secondary brand moments or specialized "Premium" status indicators.
- **Backgrounds:** The absolute base is `#121212`. Content sits on `#1E1E1E` surfaces to create a clear visual hierarchy.
- **Contrast:** Text contrast ratios must exceed WCAG AA standards significantly to account for farmers viewing screens in direct sunlight. Primary text is pure white, while metadata uses a light silver-grey.

## Typography

The design system utilizes **Hanken Grotesk** for headlines to provide a sharp, contemporary edge, and **Inter** for all functional and body text to ensure maximum legibility at various optical sizes.

- **Legibility:** Body text is sized generously (16px minimum) to ensure accessibility. 
- **Hierarchy:** High-weight headers create a clear scanning path for users who need to move quickly through market data or weather alerts. 
- **Scale:** On mobile devices, headlines scale down to prevent awkward line breaks in local languages or long agricultural terms.

## Layout & Spacing

This design system uses a **Fluid Grid** model optimized for mobile-first interactions. The base unit is 4px, driving an 8pt rhythm for all spatial relationships.

- **Margins:** 20px side margins ensure content does not hit the edge of the screen on modern curved-edge devices.
- **Touch Targets:** All interactive elements maintain a minimum hit area of 48x48px.
- **Vertical Rhythm:** Elements are grouped using 12px or 16px gaps, with larger 32px gaps used to separate distinct content sections (e.g., separating "Market Prices" from "Recent Transactions").

## Elevation & Depth

The design system employs **Tonal Layers** combined with **Ambient Shadows** to define the Z-axis.

- **Level 0 (Base):** `#121212` - The canvas.
- **Level 1 (Cards/Tiles):** `#1E1E1E` - Primary containers for content. These feature a 1px subdued border (`#2D2D2D`) to maintain edge definition in low-light settings.
- **Level 2 (Modals/Popovers):** `#252525` - Elevated surfaces that cast a soft, diffused shadow (Blur: 16px, Opacity: 40%, Color: Black) to signal temporary interaction.
- **Interactive State:** Buttons use a slight inner-glow (0.5px white at 10% opacity) on their top edge to simulate a physical, tactile pressable surface.

## Shapes

The shape language is defined by **Rounded (16px)** corners. This softens the "industrial" nature of agriculture and makes the platform feel approachable and modern.

- **Small Components:** Checkboxes and small tags use a 4px radius.
- **Medium Components:** Buttons and input fields use an 8px radius.
- **Large Components:** Main content cards and tiles use a 16px radius.
- **Iconography:** Icons should feature rounded caps and corners to match the UI's geometry.

## Components

- **Buttons:** Primary buttons are solid `#10B981` with white text. Secondary buttons use a ghost style with an `#10B981` border and text.
- **Cards:** Cards should be the primary vessel for information. They must include a standard 16px padding.
- **Input Fields:** Use a dark background (`#181818`) with a 1px border. On focus, the border transitions to Emerald Green. Label text should always be visible above the field for clarity.
- **Chips/Badges:** Used for status (e.g., "In Transit", "Verified"). These should use low-opacity versions of the status color (e.g., 10% Green background with 100% Green text).
- **Data Tables:** For market prices, use horizontal dividers only (`#2D2D2D`) to maintain a clean, readable list.
- **Icons:** Use 24px "Linear" icons with a 2px stroke weight. Avoid filled icons unless used for active navigation states.