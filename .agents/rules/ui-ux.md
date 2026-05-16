# UI/UX Pro Max Rules

Always follow these design intelligence guidelines for building professional UI/UX across all platforms and frameworks.

## Core Workflow
When user requests UI/UX work (design, build, create, implement, review, fix, improve):

1. **Extract Requirements**: Product type, style keywords, industry, and tech stack.
2. **Generate Design System**: 
   - Run `python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -f markdown`.
   - Use the outputted Pattern, Style, Colors, Typography, and Effects.
3. **Follow UX Guidelines**: Search for specific UX best practices if needed using `--domain ux`.
4. **Implementation**: Use the recommended colors, fonts, and spacing. Default to `html-tailwind` if not specified.

## Pre-Delivery Checklist
Before delivering any UI code, verify:

### Visual Quality
- [ ] No emojis as icons (use SVG: Heroicons/Lucide).
- [ ] Brand logos are correct (SVG from Simple Icons).
- [ ] Hover states don't cause layout shift.

### Interaction
- [ ] `cursor-pointer` on all clickable/hoverable elements.
- [ ] Visual feedback on hover (color, shadow, border).
- [ ] Smooth transitions (150-300ms).

### Accessibility
- [ ] Text contrast (4.5:1 minimum).
- [ ] `prefers-reduced-motion` respected.
- [ ] Form inputs have labels.

## Anti-Patterns to Avoid
- Harsh neon colors for professional/corporate apps.
- Instant state changes (no transition).
- Guessing brand colors/logos.
- Inconsistent max-widths.

## Rule Activation & Mentioning
- **Skill Usage**: Always mention the `ui-ux-pro-max` skill when invoking it.
- **Reporting**: When reporting UI/UX changes, specify that they were guided by the UI/UX Pro Max intelligence system.
- **Hierarchical Check**: Always check for `design-system/pages/<page>.md` before falling back to `design-system/MASTER.md`.
