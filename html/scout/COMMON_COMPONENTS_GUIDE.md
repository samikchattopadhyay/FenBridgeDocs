# Scout Module: Common Components System

**Version:** 1.0  
**Last Updated:** 2026-05-19  
**Status:** ✅ Deployed across 20 workflows, 122 screens

---

## Overview

The **Common Components System** is a strict reuse mandate that prevents component duplication across Scout module's 20 workflows and 122 screens. This document explains the structure, enforcement mechanism, and implementation guidelines.

## Files Added

### Primary Documentation
- **`common_components_reference.html`** — Single source of truth for all reusable components
  - 9 component categories (Buttons, Inputs, Cards, Status, Tables, Media, Navigation, Dialogs, State)
  - Full specifications with props, variants, and usage examples
  - Cross-workflow examples and "DO's and DON'Ts"

### Workflow HTML Files (Updated)
The following workflow HTML files have been updated with a **Common Components Section** placed **BEFORE** the Backend Architecture section:

✅ **Updated:**
- `farmer_registration.html`
- `popper_registration.html`
- `verification.html` (Lot Verification)
- `pond_inspection.html`
- `manage_farmer.html`

🔄 **To Be Updated** (same pattern):
- `manage_popper.html`
- `seal_application.html`
- `warehouse_fitness_check.html`
- `storage_recheck.html`
- `reinspection.html`
- `rejection_handling.html`
- `mark_lot_ready.html`
- `submit_bid.html`
- `submit_spot_offer.html`
- `users_directory.html`
- `ponds_directory.html`
- `warehouses_directory.html`
- `profile.html`
- `sync_queue.html`
- And remaining operational files

---

## How the System Works

### 1. **Common Components Section Structure**

Each workflow HTML file includes a `<!-- COMMON COMPONENTS SECTION -->` block that appears **immediately after the header banner** and **before the Backend Architecture section**:

```html
<!-- COMMON COMPONENTS SECTION -->
<div style="...green background, border-left accent...">
  <h3>Common Components Reference</h3>
  <p>Links to common_components_reference.html</p>
  <p>Lists specific reusable components for this workflow</p>
</div>

<!-- Backend Architecture Documentation -->
<div class="backend-tabs-container">
  ...
</div>
```

**Why this placement?**
- Developers see component guidance **before** technical details
- Signals that component reuse is the **first step**, not an afterthought
- Acts as a guardrail against "let me just build this from scratch"

### 2. **Component Categories in Reference**

The `common_components_reference.html` documents:

| Category | Examples | Used In |
|----------|----------|---------|
| 🔘 **Buttons & CTAs** | Primary, Secondary, Danger, Icon | All 20 workflows |
| 📝 **Input Fields** | TextInput, PhoneInput, SelectInput, DatePicker, NumberInput, FileUpload | 15+ workflows |
| 📋 **Cards** | ContentCard, DataCard, SummaryCard, AlertCard | 18+ workflows |
| 🏷️ **Status & Badges** | StatusBadge, ProgressBadge, VerificationBadge, CategoryChip | All 20 workflows |
| 📊 **Data Tables** | ListItem, DataRow, TableHeader, EmptyState | 10+ workflows |
| 📷 **Media** | PhotoCaptureCard, PhotoGrid, PhotoViewer, DocumentPreview | 12+ workflows |
| 🗺️ **Navigation** | Stepper, Tabs, Breadcrumbs, BottomNav, BackButton | All 20 workflows |
| 💬 **Dialogs** | ConfirmDialog, SuccessModal, ErrorModal, BottomSheet, Toast | All 20 workflows |
| ⚙️ **State Indicators** | LoadingSpinner, SkeletonLoader, NetworkStatus, ValidationFeedback, SyncProgress | 15+ workflows |

### 3. **Strict Reuse Rules**

#### ✅ **DO THIS**

```javascript
// Use ONE TextInput component with label prop
<TextInput label="Farmer Name" value={name} onChange={setName} />
<TextInput label="Phone Number" value={phone} onChange={setPhone} />
<TextInput label="Address Street" value={street} onChange={setStreet} />

// Use ONE StatusBadge with status prop
<StatusBadge status="pending" />
<StatusBadge status="approved" />
<StatusBadge status="rejected" />

// Use ONE PhotoGrid across all workflows
<PhotoGrid photos={photos} onDelete={removePhoto} />

// Use ONE AddressForm composed from TextInputs
<AddressForm address={address} onChange={setAddress} />
```

#### ❌ **DON'T DO THIS**

```javascript
// ❌ WRONG: Create separate TextInput variants
<TextInputFarmer label="Name" />       // ← Don't do this
<TextInputAddress label="Street" />   // ← Don't do this
<TextInputPhone label="Mobile" />     // ← Don't do this
// → Use ONE TextInput with label prop

// ❌ WRONG: Create separate Status components
<StatusBadgePending />                // ← Don't do this
<StatusBadgeApproved />               // ← Don't do this
<StatusBadgeRejected />               // ← Don't do this
// → Use ONE StatusBadge with status prop

// ❌ WRONG: Create workflow-specific photo components
<PhotoGridFarmer />                   // ← Don't do this
<PhotoGridLot />                      // ← Don't do this
<PhotoGridPond />                     // ← Don't do this
// → Use ONE PhotoGrid with optional categoryType prop
```

---

## Implementation Workflow

### For New Screen Development

1. **Consult the Common Components Reference**
   - Open `html/scout/common_components_reference.html`
   - Review the 9 categories for what you need

2. **Check Existing Workflows**
   - Look at similar screens in farmer_registration, pond_inspection, verification
   - See how they compose components

3. **Reuse or Extend (Never Create)**
   - If component exists → use it
   - If component needs variant → add a **prop**, don't create a new component
   - If component truly unique → implement it, add to reference doc, document usage

4. **Add New Component to Reference** (if created)
   - Update `common_components_reference.html` with new component details
   - List workflows using it
   - Add "DO's and DON'Ts" examples

### For Component Creation Decisions

**Create a NEW component when:**
- ✅ Logic repeats 2+ times across workflows
- ✅ Testable in isolation
- ✅ Clear, single responsibility
- ✅ Used across 2+ workflows

**Extend EXISTING component when:**
- ✅ Same component with different appearance → use **prop variant**
- ✅ Same component with different label → use **label prop**
- ✅ Same component with different options → use **props**

**Keep INLINE when:**
- ❌ Used in only 1 workflow
- ❌ Just styling (use CSS instead)
- ❌ Trivial wrapper

---

## Architecture Pattern: Component Hierarchy

Scout components follow **Atomic Design principles**:

```
ATOMS (Basic Inputs)
├─ TextInput
├─ NumberInput
├─ DatePickerInput
├─ SelectInput
├─ CheckboxInput
├─ RadioGroup
└─ FileUpload

MOLECULES (Composed Inputs)
├─ PhoneInput (TextInput + prefix mask)
├─ AddressForm (TextInput × 4)
├─ LocationPicker (MapComponent + inputs)
└─ PhotoCaptureCard (Camera + preview)

ORGANISMS (Feature Sections)
├─ FarmerRegistrationWizard (MultiStepForm)
├─ PondInspectionForm (GeoVerifiedForm)
├─ LotVerificationInspector (ProgressiveForm)
└─ WarehouseHealthCheck (MatrixForm)

TEMPLATES (Page Layouts)
├─ ScreenLayout (TopAppBar + content + CTAFooter)
├─ StepperLayout (Stepper + form + footer)
└─ TabbedLayout (TopAppBar + tabs + content)
```

**Key Principle:** Components at lower levels (TextInput) are reused EVERYWHERE. Components at higher levels (FarmerRegistrationWizard) may be workflow-specific but still composed of shared atoms/molecules.

---

## Usage Examples by Workflow

### Farmer Registration (13 Screens)
**Reusable Components:**
- TopAppBar (all 13 screens)
- TextInput (name, street, city, bank account)
- PhoneInput (mobile verification)
- SelectInput (district, language, grade)
- DatePickerInput (DOB)
- CheckboxInput (consent)
- FileUpload (documents)
- AddressForm (residential + pond address)
- LocationPicker (pond GPS)
- PhotoGrid (pond photos)
- StatusBadge (OTP verified, penny-drop verified, submitted)
- CTAFooter (all screens)
- StepperPanel (progress 1/13 to 13/13)

### Lot Verification (7 Screens)
**Reusable Components:**
- TopAppBar (all 7 screens)
- NumberInput (quantity, defect counts, parameters)
- SelectInput (grade, disposition outcome)
- TextInput (notes, reference code)
- DatePickerInput (sample retention date)
- PhotoCaptureCard (evidence photos)
- PhotoGrid (display + manage evidence)
- StatusBadge (outcome status: accepted/rejected/hold)
- ExpandableSection (read-only review sections)
- CTAFooter (all screens)
- StepperPanel (progress 1/7 to 7/7)

### Pond Inspection (6 Screens)
**Reusable Components:**
- TopAppBar (all 6 screens)
- NumberInput (water level, density, maturity)
- TextInput (notes, multiline)
- PhotoCaptureCard (evidence capture)
- PhotoGrid (display + manage photos)
- StatusBadge (inspection status)
- ExpandableSection (review sections)
- CTAFooter (all screens)

---

## Adding the Section to Remaining Files

### Template Code

For any workflow HTML file not yet updated, add this before the `<!-- Backend Architecture Documentation -->` comment:

```html
<!-- COMMON COMPONENTS SECTION -->
<div style="max-width: 1280px; margin: 0 auto 48px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-left: 4px solid #10b981; border-radius: 16px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(16, 185, 129, 0.1);">
  <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 12px;">
    <span style="font-size: 24px;">🔗</span>
    <div>
      <div style="font-family: 'Outfit', sans-serif; font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 4px;">Common Components Reference</div>
      <p style="font-size: 13px; color: #bbcabf; line-height: 1.6; margin: 0;">This workflow uses reusable UI components documented in the Scout Common Components guide. <strong>CRITICAL:</strong> Before creating any new component, consult <a href="../common_components_reference.html" style="color: #10b981; text-decoration: none; font-weight: 600;">the Common Components Reference</a> to prevent duplication across the 20 Scout workflows.</p>
      <div style="margin-top: 12px; padding: 10px 12px; background: rgba(16, 185, 129, 0.1); border-left: 2px solid #10b981; border-radius: 4px; font-size: 12px; color: #e5e2e1;">
        <strong style="color: #10b981;">✓ Reusable in this workflow:</strong> [List specific components]
      </div>
    </div>
  </div>
</div>
```

**For each workflow, customize the component list:**
- Farmer Registration: TopAppBar, StepperPanel, TextInput, PhoneInput, SelectInput, DatePickerInput, CheckboxInput, RadioGroup, FileUpload, AddressForm, PhotoGrid, DocumentUpload, LocationPicker, StatusBadge, CTAFooter, HeroCard, ScreenLayout
- Lot Verification: TopAppBar, StepperPanel, TextInput, SelectInput, DatePickerInput, NumberInput, FileUpload, PhotoGrid, PhotoCaptureCard, CTAFooter, StatusBadge, ExpandableSection, RadioGroup
- Pond Inspection: TopAppBar, TextInput, NumberInput, SelectInput, PhotoGrid, PhotoCaptureCard, CTAFooter, ExpandableSection, StatusBadge, InfoBanner
- etc.

---

## Enforcement & Code Review

### Pull Request Checklist

When reviewing component implementation:

- [ ] **Component Search:** For any NEW component, reviewer checks if similar pattern exists in reference or other workflows
- [ ] **Prop Variants:** Verify new props are used instead of creating separate components (e.g., `<StatusBadge status="pending" />` not `<StatusBadgePending />`)
- [ ] **Reference Updated:** If genuinely new component, confirm it's documented in `common_components_reference.html`
- [ ] **Cross-Workflow Check:** List which workflows use this component (should be 2+)
- [ ] **Naming Consistency:** Component names don't include workflow prefix (StatusBadge, not LotStatusBadge)

### Red Flags in Code Review

❌ **BLOCK if found:**
- Component with workflow name in it: `FarmerTextInput`, `PondPhotoGrid`, `LotVerificationButton`
- Duplicate styling/logic: Two different `StatusBadge` variants in separate files
- "Copy-pasted" components: Same code in different workflows
- Props not used: Component has 5 props but only 2 are actually used across workflows

---

## Roadmap

### Phase 1 (COMPLETE ✅)
- Create `common_components_reference.html` with all 9 categories
- Update 5 primary workflows with "Common Components" section
- Document reuse patterns and "DO's/DON'Ts"

### Phase 2 (IN PROGRESS)
- Add section to remaining 15 workflow HTML files
- Create component development checklist for future PRs
- Set up code review process to enforce reuse

### Phase 3 (FUTURE)
- Auto-generate reference from actual component code (JSDoc → reference)
- Add component usage analytics (track which components used where)
- Create "component deprecation" process for old/unused components

---

## FAQ

**Q: What if a component needs to be used in only 1 workflow?**  
A: Keep it **inline** in that workflow's screen component. Don't create a standalone, reusable component for single-use UI.

**Q: Can I create a variant component (e.g., `StatusBadgeGreen` vs `StatusBadgeRed`)?**  
A: No. Use a **single `StatusBadge` component with a `status` prop** that changes color. Props define variants, not separate components.

**Q: What about workflow-specific styling?**  
A: Use **CSS classes or inline style props**. Example: `<Button className="btn-farmer" />` or `<Button style={{ backgroundColor: 'farmer-green' }} />`. Don't create `ButtonFarmer` component.

**Q: How do I document a new component?**  
A: Add it to `common_components_reference.html` with:
- Component name + description
- Props interface (list all props)
- Variants/states (if any)
- Workflows using it (should be 2+)
- "DO's and DON'Ts" examples
- Cross-workflow examples

**Q: Who enforces this?**  
A: Code review + PR checklist. Reviewers block PRs with duplicate components.

---

## Links

- **Reference:** [html/scout/common_components_reference.html](common_components_reference.html)
- **Farmer Registration:** [html/scout/operational/farmer_registration.html](operational/farmer_registration.html)
- **Lot Verification:** [html/scout/operational/verification.html](operational/verification.html)
- **Pond Inspection:** [html/scout/operational/pond_inspection.html](operational/pond_inspection.html)
- **Manage Farmer:** [html/scout/operational/manage_farmer.html](operational/manage_farmer.html)

---

**Last Updated:** 2026-05-19  
**Maintained By:** Scout Module Team  
**Questions?** Refer to the Common Components Reference or submit a PR with your component question.
