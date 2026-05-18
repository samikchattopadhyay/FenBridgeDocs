# Scout Module Workflow Pages Restructuring Guide

## Status: Template Established ✓

The **verification.html** has been successfully restructured with the complete template pattern:
- Address bar with path
- Header banner (tag, title, description)
- Backend architecture tabs (API, DB, Validation, Async, Security)
- Stepper navigation panel (sticky, synchronized with scroll)
- Workflow group block with step cards
- Each step card: header (badge + title), left pane (screen placeholder), right pane (specs grid)
- Full JavaScript integration for tab switching and stepper sync

**File Size:** 564 lines | **Lines of CSS:** 200+ | **JavaScript:** 3 functions

---

## Remaining Files to Generate (15 files)

### Quick Reference: File Mapping

#### Lot Verification Workflows (4 files)
```
seal_application.html       → 6 steps: Initiate, Inspect, Materials, Apply, Photos, Submit
storage_recheck.html        → 5 steps: Initialize, Check, Environment, Physical, Submit
reinspection.html           → 5 steps: Initiate, Quality, Defects, Photos, Report
rejection_handling.html     → 5 steps: Reason, Photos, Assessment, Notify, Submit
```

#### Pond & Warehouse Workflows (2 files)
```
pond_inspection.html        → 6 steps: Initiate, Confirm, Conditions, Readiness, Photos, Submit
warehouse_fitness_check.html → 5 steps: Initiate, Structure, Environment, Assessment, Submit
```

#### User Management Workflows (3 files)
```
manage_farmer.html          → 5 steps: Select, Update, Verify, Status, Submit
manage_popper.html          → 5 steps: Select, Update, Verify, Status, Submit
profile.html                → 6 steps: Personal, Contact, Address, Bank, Documents, Preferences
```

#### Operational Task Workflows (4 files)
```
mark_lot_ready.html         → 5 steps: Select, Verify, Quality, Confirm, Submit
submit_bid.html             → 6 steps: Select, Price, Delivery, Terms, Review, Submit
submit_spot_offer.html      → 4 steps: Select, Details, Review, Submit
sync_queue.html             → 1 step:  Queue (simplified single-step layout)
```

#### Directory/Listing Pages (3 files - simplified structure)
```
ponds_directory.html        → 3 screens (simplified, no stepper)
warehouses_directory.html   → 3 screens (simplified, no stepper)
users_directory.html        → 3 screens (simplified, no stepper)
```

---

## Template Structure for Each Workflow Page

### Essential Sections (in order)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Meta tags, title, fonts -->
  <!-- CSS: 200 lines (identical across all pages) -->
</head>
<body>
  <!-- 1. Address Bar (sticky, top) -->
  <div class="address-bar">...</div>

  <!-- 2. Header Banner -->
  <div class="content-wrapper">
    <div class="header-banner">
      <span class="tag">Scout Operations</span>
      <h1 class="title">[PAGE_TITLE]</h1>
      <p class="desc">[DESCRIPTION]</p>
      <p style="...">  [DETAILED_CONTEXT]</p>
    </div>

    <!-- 3. Backend Architecture Tabs -->
    <div class="backend-tabs-container">
      <!-- Tab navigation and panels -->
    </div>

    <!-- 4. Stepper Navigation (sticky) -->
    <div class="stepper-panel-container">
      <div class="stepper-nodes">
        <!-- 1-7 step nodes depending on count -->
      </div>
    </div>

    <!-- 5. Workflow Group with Step Cards -->
    <div class="workflow-group-block">
      <div class="workflow-group-header">...</div>
      <div class="workflow-group-body">
        <!-- 1-6+ step cards -->
      </div>
    </div>
  </div>

  <!-- 6. JavaScript (tab switching + stepper sync) -->
  <script>...</script>
</body>
</html>
```

---

## How to Generate Each File

### For Workflow Pages (14 files):

**Copy verification.html and modify:**

1. **Lines 1-206:** Keep CSS and HTML header identical
2. **Line 6 (title):** `<title>Scout Operations - [PAGE_TITLE]</title>`
3. **Line 204 (address bar path):** `html/scout/operational/[FILENAME].html`
4. **Line 210 (tag):** Keep as `Scout Operations`
5. **Line 211 (title):** Replace with page title
6. **Line 212 (desc):** Replace with short description
7. **Line 213-214 (detail):** Replace with detailed context
8. **Lines 215-388 (backend tabs):** Customize tab content based on workflow
   - Always include: API Architecture, Database Schema
   - Optional: Validation & Error, Async Jobs, Security
9. **Lines 390-400 (stepper):** Generate step nodes based on step count
   - Each step: `<a href="#step-XX" class="stepper-node"><span class="node-num">X</span><span class="node-label">[LABEL]</span></a>`
10. **Lines 402-405 (workflow header):** Update step count pill
11. **Lines 408-506 (step cards):** Generate step cards for each step
    - Each card: header (badge + title) + left pane (placeholder) + right pane (specs grid)
    - Specs grid blocks: Purpose, User Experience, Technical Details, Business Requirement

### For Directory Pages (3 files):

**Use simplified structure (no stepper, no backend tabs):**

```html
<!-- Address bar + header banner (same) -->
<!-- No backend tabs -->
<!-- No stepper -->
<!-- Simple section grid instead of workflow group -->
```

### For sync_queue.html (1 file):

**Single-step simplified layout:**

```html
<!-- Address bar + header banner (same) -->
<!-- Backend tabs (API Architecture only) -->
<!-- No stepper (or single node) -->
<!-- Single workflow section for queue visualization -->
```

---

## Step Card Template

Each workflow step follows this exact structure:

```html
<!-- Step N: [Title] -->
<div class="flow-step-card" id="step-NN">
  <div class="step-header">
    <div style="display: flex; gap: 12px;">
      <span class="step-badge">N</span>
      <span class="step-title">[Step Title]</span>
    </div>
  </div>
  <div class="step-body">
    <div class="step-left-pane">
      <div class="card-image-viewport">
        <div class="screen-placeholder">[Screen name]</div>
      </div>
    </div>
    <div class="step-right-pane">
      <div class="specs-grid">
        <div class="spec-block full-width">
          <div class="spec-label">Purpose</div>
          <div class="spec-value">[Description]</div>
        </div>
        <div class="spec-block full-width">
          <div class="spec-label">User Experience</div>
          <div class="spec-value">[Details]</div>
        </div>
        <div class="spec-block full-width">
          <div class="spec-label">Technical Details</div>
          <div class="spec-value">[Technical info]</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Backend Tabs Template

### Tab Navigation:
```html
<div class="tabs-nav">
  <button class="tab-button active" onclick="showTab(event, 'backend-api')">API ARCHITECTURE</button>
  <button class="tab-button" onclick="showTab(event, 'backend-db')">DATABASE SCHEMA</button>
  <button class="tab-button" onclick="showTab(event, 'backend-async')">ASYNC JOBS</button>
  <!-- Additional tabs as needed -->
</div>
```

### Tab Panels:
```html
<div class="tabs-content">
  <div id="backend-api" class="tab-panel active">
    <h3 class="backend-section-title">tRPC Procedure Architecture</h3>
    <!-- Content -->
  </div>
  <div id="backend-db" class="tab-panel">
    <h3 class="backend-section-title">Core Database Tables</h3>
    <!-- Content -->
  </div>
  <!-- More panels -->
</div>
```

---

## Implementation Checklist

- [ ] seal_application.html (6 steps)
- [ ] storage_recheck.html (5 steps)
- [ ] reinspection.html (5 steps)
- [ ] rejection_handling.html (5 steps)
- [ ] pond_inspection.html (6 steps)
- [ ] warehouse_fitness_check.html (5 steps)
- [ ] manage_farmer.html (5 steps)
- [ ] manage_popper.html (5 steps)
- [ ] profile.html (6 steps)
- [ ] mark_lot_ready.html (5 steps)
- [ ] submit_bid.html (6 steps)
- [ ] submit_spot_offer.html (4 steps)
- [ ] sync_queue.html (1 step - simplified)
- [ ] ponds_directory.html (simplified - 3 screens)
- [ ] warehouses_directory.html (simplified - 3 screens)
- [ ] users_directory.html (simplified - 3 screens)

---

## CSS and JavaScript Notes

All pages use **identical CSS** (lines 10-199):
- Dark theme with cyan accents
- Responsive grid layouts
- Scrollbar styling
- Tab and stepper animations
- Glassmorphism effects

All pages use **identical JavaScript** (3 functions):
1. `Intersection Observer` - Syncs stepper with scroll position
2. `showTab()` - Handles tab switching
3. `DOMContentLoaded` - Updates address bar path

---

## File Generation Order (Recommended)

**Batch 1 - Lot Verification (4 files):**
1. seal_application.html
2. storage_recheck.html
3. reinspection.html
4. rejection_handling.html

**Batch 2 - Pond & Warehouse (2 files):**
5. pond_inspection.html
6. warehouse_fitness_check.html

**Batch 3 - User Management (3 files):**
7. manage_farmer.html
8. manage_popper.html
9. profile.html

**Batch 4 - Operational Tasks (4 files):**
10. mark_lot_ready.html
11. submit_bid.html
12. submit_spot_offer.html
13. sync_queue.html (simplified)

**Batch 5 - Directories (3 files):**
14. ponds_directory.html
15. warehouses_directory.html
16. users_directory.html

---

## Testing & Validation

After generating each file:

1. **Path Check:** Verify address bar shows correct file path
2. **Stepper Test:** Scroll through page, verify stepper nodes highlight correctly
3. **Tab Test:** Click each backend tab, verify content switches
4. **Links Test:** Verify all step links (#step-01, etc.) work correctly
5. **Responsive:** Test on mobile, tablet, desktop viewport sizes
6. **CSS:** Verify dark theme, color accents, spacing are consistent

---

## Next Steps

1. Generate remaining 15 files using this guide
2. Test all pages in browser
3. Verify stepper synchronization on scroll
4. Test tab switching on backend tabs
5. Update index.html navigation if needed
6. Add links from workflow index to individual pages

All pages follow the **exact same template pattern** established in verification.html.
