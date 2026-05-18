# Scout Operations HTML Restructuring Guide

## Project Status
**Completed:** 2/18 pages have been fully restructured to follow the reference template
**Progress:** ~11% (verification.html, seal_application.html)

## Reference Template Structure
All pages MUST follow the structure from `farmer_registration.html` and `popper_registration.html`:

### 1. HTML Document Head (Required)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Scout Operations - [Workflow Name]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Full CSS from farmer_registration.html -->
</head>
<body>
```

### 2. Address Bar (Sticky, Top)
- Fixed position at top of page (z-index: 100)
- Shows file path: html/scout/operational/[filename].html
- Background: #121212, border-bottom: 1px solid #2a2a2f
- Height: 42px, padding: 12px 16px

### 3. Content Wrapper
- Max-width: 1280px, padding: 40px 48px 96px
- Centered with margin: 0 auto

### 4. Header Banner
- Gradient background (135deg, --bg-surface to #082f37)
- Border: 1px solid var(--border-color), border-left: 4px solid var(--accent-primary)
- Border-radius: 16px, padding: 32px 40px
- Contains:
  - **Tag** (SCOUT_OPERATIONS): inline-flex, uppercase, #06b6d4 color
  - **Title**: font-size 28px, font-weight 800, color #fff
  - **Short description** (desc): font-size 14px, color var(--text-muted), max-width 800px
  - **Longer explanation** (paragraph): font-size 14px, color var(--text-muted), margin-top 16px

### 5. Backend Architecture Tabs Container
- Max-width: 1280px, background: var(--bg-surface)
- Border: 1px solid var(--border-color), border-left: 4px solid var(--accent-primary)
- Border-radius: 16px, overflow: hidden
- Contains:
  - **Header**: padding 24px 32px, border-bottom, gradient background
    - Title: "Backend Architecture & Implementation Guide"
    - Subtitle: "For Developers — Complete Specifications for Backend Implementation"
  - **Tab Navigation**: flex, overflow-x: auto, border-bottom
    - Buttons: flex: 0 0 auto, padding: 16px 20px, uppercase, text-transform: uppercase
    - Active state: color var(--accent-primary), border-bottom-color var(--accent-primary)
  - **Tab Content Panels**: display: none unless active
    - Selected tabs: display: block
    - Padding: 32px

#### Backend Tabs by Workflow Type:
- **Full workflows** (Farmer Reg, Popper Reg, Lot Verification): API, DB, Middleware, Validation, Async, Security
- **Lot/Production workflows** (Verification, Seal, Inspection): API, DB, Validation, Async, Security
- **Simple workflows** (Management, Actions): API, DB, Validation
- **Directory workflows**: API, DB, Security

### 6. Stepper Panel (Sticky, Below Address Bar)
- Position: sticky, top: 52px, z-index: 100
- Max-width: 1280px, margin: 0 auto 48px
- Background: rgba(24, 24, 27, 0.95) with backdrop-filter: blur(12px)
- Contains flex stepper-nodes:
  - Each node: flex column, align-items center, gap: 8px
  - Node number: 36px circle, border-radius 50%, transitions on active
  - Node label: font-size 10px, uppercase, transitions on active
  - Connecting lines: ::after pseudo-element, height 2px, background var(--border-light)

### 7. Workflow Group Block
- Max-width: 1280px, margin: 0 auto 48px, background: #141416
- Border: 1px solid var(--border-color), border-radius: 20px
- **Header**: padding 20px 32px, border-bottom, border-left: 5px solid var(--accent-primary)
  - Title: font-size 20px, font-weight 800
  - Step count pill: background var(--bg-base), padding: 4px 12px, border-radius: 20px
- **Body**: padding: 32px, display: flex, flex-direction: column, gap: 48px
  - Contains flow-step-cards (see below)

### 8. Flow Step Card (Repeating Unit)
Each step card contains:
- **Header**:
  - Background: #19191d, border-bottom: 1px solid var(--border-color)
  - Padding: 14px 22px
  - Contains: step-badge (font-size 12px, color var(--accent-primary), background var(--accent-primary-glow)) + step-title (font-size 15px, font-weight 700)

- **Body** (display: flex, flex-wrap: wrap, min-height: 480px):
  - **Left Pane** (width 1, min-width 320px, max-width 380px):
    - Background: #050d11, padding: 24px
    - Contains card-image-viewport (280px width, 500px height, border-radius 12px)
    - Viewport contains either:
      - Real image: `<img class="preview-screen-img" src="..." alt="..."/>`
      - Placeholder: `<div class="screen-placeholder">Text placeholder</div>`

  - **Right Pane** (flex: 2, min-width 380px, padding: 28px):
    - Contains specs-grid: display: grid, grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), gap: 20px
    - Each spec-block: background: var(--bg-base), border: 1px solid var(--border-color), padding: 16px, border-radius: 8px
    - Spec-block contents:
      - Label (spec-label): font-size 11px, font-weight 700, color var(--accent-primary), text-transform: uppercase
      - Value (spec-value): font-size 13.5px, color var(--text-main), line-height: 1.6

### 9. Complete CSS Styling
Must include full CSS from farmer_registration.html (lines 10-199):
- Root variables (colors, typography)
- Body, content-wrapper, scrollbar styling
- Address-bar, header-banner styling
- Stepper panel and nodes styling
- Workflow group and step card styling
- Backend tabs styling
- All text styles, grids, code blocks

### 10. JavaScript (3 Functions)
1. **Intersection Observer** (stepper highlighting):
   - Observes flow-step-cards
   - Updates stepper-nodes active class based on scroll position
   - RootMargin: "-30% 0px -30% 0px"

2. **Address Path Update**:
   - Updates address-path text with current window.location.pathname
   - Strips leading/trailing slashes

3. **Tab Switching**:
   - `showTab(event, tabId)` function
   - Hides all tab-panels, removes active class from all tab-buttons
   - Shows selected panel, marks button active

## Page-by-Page Content Mapping

### Completed
- ✅ **verification.html** (7 steps) - Lot Verification Inspection
- ✅ **seal_application.html** (6 steps) - Seal Application

### Workflow Pages to Complete (14 pages)

#### Production Quality Workflows (5 pages)
1. **reinspection.html** (5 steps)
   - Re-inspect previously rejected lot after corrective action
   - Tabs: API, DB, Validation, Async
   - Steps: Init → Assessment → Photos → Defect Check → Submit

2. **rejection_handling.html** (5 steps)
   - Handle rejected lots, identify issues, plan corrective action
   - Tabs: API, DB, Validation
   - Steps: Init → Rejection Reason → Photos → Corrective Action → Submit

3. **pond_inspection.html** (6 steps)
   - Inspect farmer's pond for makhana farming conditions
   - Tabs: API, DB, Validation, Async
   - Steps: Init → Water Quality → Soil → Photos → GPS → Submit

4. **warehouse_fitness_check.html** (5 steps)
   - Verify warehouse conditions for makhana storage
   - Tabs: API, DB, Validation
   - Steps: Init → Environment → Hygiene → Photos → Submit

#### User Management Workflows (4 pages)
5. **manage_farmer.html** (5 steps)
   - Update farmer profile, ponds, bank details
   - Tabs: API, DB, Validation
   - Steps: Select Farmer → Profile → Ponds → Bank → Submit

6. **manage_popper.html** (5 steps)
   - Update popper profile, warehouses, bank details
   - Tabs: API, DB, Validation
   - Steps: Select Popper → Profile → Warehouses → Bank → Submit

#### On-Behalf Actions (3 pages)
7. **mark_lot_ready.html** (5 steps)
   - Scout marks lot ready for buyer pickup (on farmer's behalf)
   - Tabs: API, DB, Validation
   - Steps: Select Lot → Confirm Details → Quality Check → Photos → Submit

8. **submit_bid.html** (6 steps)
   - Scout submits bid on behalf of farmer during auction
   - Tabs: API, DB, Validation
   - Steps: Select Lot → Review Price → Bid Amount → Confirm → Authorize → Submit

9. **submit_spot_offer.html** (4 steps)
   - Scout accepts spot offer (direct buyer offer) for farmer
   - Tabs: API, DB, Validation
   - Steps: Select Lot → Offer Details → Accept → Submit

#### System Pages (2 pages)
10. **profile.html** (6 steps)
    - Scout updates own profile, settings, preferences
    - Tabs: API, DB, Validation, Security
    - Steps: Basic Info → Address → Bank → Language → Preferences → Submit

11. **sync_queue.html** (1 step)
    - Special page: Shows offline sync queue status, pending operations
    - Tabs: API, DB, Async
    - Single step: Queue Status Overview with manual sync trigger

#### Directory/Listing Pages (3 pages) - Different structure
12. **ponds_directory.html** (3 screens)
    - List all ponds with filters, search, status indicators
    - Structure: Header → Filters/Search → Grid/Table → Details Modal

13. **warehouses_directory.html** (3 screens)
    - List all warehouses with capacity, location, status
    - Structure: Header → Filters/Search → Grid/Table → Details Modal

14. **users_directory.html** (3 screens)
    - List registered farmers/poppers with status, contact info
    - Structure: Header → Filters/Search → Grid/Table → Details Modal

## Implementation Steps for Remaining Pages

### For Each Workflow Page:
1. Copy full HTML structure from farmer_registration.html (lines 1-200)
2. Update in `<head>`:
   - Title attribute
   - Page description and explanation in header banner
3. Update backend tabs:
   - Select appropriate tabs for workflow type
   - Write relevant architecture documentation
4. Update stepper panel:
   - Generate correct number of step nodes (1-6)
   - Use appropriate labels for each step
5. Create step cards:
   - One flow-step-card per step
   - Give each unique `id="step-0X"`
   - Add appropriate step header with badge and title
   - Add specs-grid with relevant field descriptions
6. Update JavaScript:
   - Ensure Intersection Observer targets correct cards
   - Tab switching function remains same

### For Directory Pages:
1. Different structure - use simpler layout (no steppers)
2. Three main sections:
   - Header + description
   - Filters/search controls
   - Grid or table of items
3. Optional: Details sidebar or modal for item inspection

## CSS Variables Reference
```css
--bg-base: #121212;
--bg-surface: #18181b;
--bg-card: #202024;
--bg-active: #27272a;
--accent-primary: #06b6d4;
--accent-primary-hover: #22d3ee;
--accent-primary-glow: rgba(6, 182, 212, 0.15);
--text-main: #f3f4f6;
--text-muted: #9ca3af;
--text-dim: #6b7280;
--border-color: #27272a;
--border-light: #3f3f46;
```

## Testing Checklist Per Page
- [ ] Address bar sticky, shows correct path
- [ ] Header banner displays with correct title and description
- [ ] All backend tabs render without errors
- [ ] Tab switching works correctly (active states update)
- [ ] Stepper panel sticky, highlights active step on scroll
- [ ] Step cards display with correct number of steps
- [ ] Image viewports show placeholder or image correctly
- [ ] Specs grids stack properly on mobile (auto-fit columns)
- [ ] All typography readable (contrast meets WCAG AA)
- [ ] Scrollbar styling applied (thin, with accent color on hover)
- [ ] No layout shifts or overflow issues
- [ ] JavaScript console clear (no errors)

## Files to Update
```
html/scout/operational/
├── ✅ verification.html                 [COMPLETE]
├── ✅ seal_application.html             [COMPLETE]
├── storage_recheck.html                 [READY - structure done]
├── reinspection.html
├── rejection_handling.html
├── pond_inspection.html
├── warehouse_fitness_check.html
├── manage_farmer.html
├── manage_popper.html
├── mark_lot_ready.html
├── submit_bid.html
├── submit_spot_offer.html
├── profile.html
├── sync_queue.html
├── ponds_directory.html
├── warehouses_directory.html
└── users_directory.html
```

## Quick Reference: Step Labels by Workflow

| Workflow | Steps |
|----------|-------|
| Lot Verification (7) | Init → Quality → Photos → Samples → Defects → Grade → Submit |
| Seal Application (6) | Init → Details → Quantity → Photos → Verify → Submit |
| Storage Re-Check (5) | Init → Condition → Metrics → Photos → Submit |
| Re-Inspection (5) | Init → Assessment → Photos → Defect → Submit |
| Rejection Handling (5) | Init → Reason → Photos → Action → Submit |
| Pond Inspection (6) | Init → Water → Soil → Photos → GPS → Submit |
| Warehouse Fitness (5) | Init → Environment → Hygiene → Photos → Submit |
| Manage Farmer (5) | Select → Profile → Ponds → Bank → Submit |
| Manage Popper (5) | Select → Profile → Warehouses → Bank → Submit |
| Mark Lot Ready (5) | Select → Details → Check → Photos → Submit |
| Submit Bid (6) | Select → Review → Amount → Confirm → Auth → Submit |
| Submit Spot Offer (4) | Select → Details → Accept → Submit |
| Profile Settings (6) | Basic → Address → Bank → Language → Prefs → Submit |
| Sync Queue (1) | Status Overview |
