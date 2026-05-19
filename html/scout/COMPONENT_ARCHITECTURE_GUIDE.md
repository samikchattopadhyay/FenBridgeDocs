# Scout Module - Unified React Component Architecture

**Last Updated:** 2026-05-19  
**Scope:** All 20 Scout workflows (122 screens)  
**Principle:** Single source of truth for component library across all scout operations

---

## Core Shared Component Library

All scout workflows use the same foundational component library. This ensures consistency, reduces duplication, and makes the codebase maintainable.

### Level 1: Layout Components (Foundation - Used by ALL Screens)

These components are the building blocks of every screen across all workflows.

```
TopAppBar (UNIVERSAL)
├── Props: title, onBack, onMenu, badge?
├── Used in: ALL 122 screens
└── Features: Back navigation, title, menu icon, search icon, shadow

StepperPanel (UNIVERSAL)
├── Props: currentStep, totalSteps, compact? (for dialogs)
├── Used in: All 15-step registration workflows + sequential workflows
└── Features: Progress bar, step counter, sticky positioning, tooltip on hover

ScreenLayout (UNIVERSAL)
├── Props: children, topAppBar, stepper, footer, padding
├── Used in: ALL screens (wrapper component)
└── Features: Consistent margins, responsive grid, max-width container, safe-area padding (mobile)

CTAFooter (UNIVERSAL)
├── Props: primaryLabel, primaryAction, secondaryLabel, secondaryAction, disabled, loading
├── Used in: All workflow screens (except read-only views)
└── Features: Two-button layout, full-width on mobile, adaptive spacing

HeroCard (UNIVERSAL)
├── Props: icon, title, subtitle, description, gradient?, compact?
├── Used in: All registration + major workflow steps
└── Features: Icon rendering, gradient background, responsive typography
```

---

## Level 2: Form Input Components (Reusable Across All Workflows)

Generic input components used across registration, updates, and data entry screens.

```
TextInput
├── Used in: Registration, profile updates, address forms, business details
├── Props: label, value, onChange, placeholder, maxLength, required, helper, error, disabled
├── Variants: password, multiline (textarea), with-counter, masked
└── Patterns: Step 3-5 (popper), Step 3-9 (farmer), manage screens

PhoneInput
├── Used in: OTP screens, contact details, address forms
├── Props: countryCode, value, onChange, required, error, disabled
├── Features: Auto-formatting (+91), validation on blur, copy-able masked display
└── Patterns: Steps 2-3 (popper), Steps 2-3 (farmer), manage screens

SelectInput (Dropdown)
├── Used in: Language selection, district/panchayat lookup, bank names, equipment categories
├── Props: label, options, value, onChange, searchable, required, error, disabled
├── Features: Custom styling, keyboard navigation, async search (district/panchayat)
└── Patterns: Step 4 (popper), Step 4 (farmer), Step 5-7 (fitness checks)

CheckboxInput
├── Used in: Consent screens, equipment selection, capability toggles
├── Props: label, checked, onChange, required, helper, disabled, indeterminate
├── Features: Custom styling, accessibility labels, error states
└── Patterns: Step 1 (consent), Step 11-12 (equipment), verification screens

RadioGroup
├── Used in: Language selection, lot status, equipment type selection
├── Props: label, options, value, onChange, inline, disabled
├── Features: Custom tile styling, icon support, keyboard nav
└── Patterns: Step 4 (language), Lot Verification (grade selection)

DatePickerInput
├── Used in: DoB, inspection dates, warehouse opening dates
├── Props: label, value, onChange, minDate, maxDate, required, error, disabled
├── Features: Native picker (mobile), modal (web), timezone awareness
└── Patterns: Step 3 (popper), Step 3 (farmer), inspection date fields

TimePickerInput
├── Used in: Inspection start/end times, visit times
├── Props: label, value, onChange, required, error, disabled
├── Features: 12/24 hour toggle, interval selection (5/15/30 min)
└── Patterns: Lot Verification, Pond Inspection, Warehouse Fitness

FileUpload
├── Used in: Business documents, equipment photos, inspection photos, reference samples
├── Props: label, multiple, maxFiles, accept, onFilesSelected, preview, error, disabled
├── Features: Camera trigger, compression, preview thumbnails, drag-drop
└── Patterns: Step 6 (documents), Step 11-12 (photos), inspection evidence

RichTextEditor
├── Used in: Inspection notes, audit comments, merchant feedback
├── Props: value, onChange, placeholder, maxLength, required, disabled
├── Features: Text formatting (bold, italic), lists, mentions (@scout), links
└── Patterns: Verification notes, rejection reasons, fitness check findings
```

---

## Level 3: Shared Domain Components (Multi-Step, Cross-Workflow Patterns)

Components that encapsulate common patterns used across multiple workflows.

```
AddressForm
├── Used in: Steps 7-9 (popper), Steps 5-7 (farmer), pond/warehouse locations
├── Props: prefix, value, onChange, sameAsToggle, error, disabled
├── Fields: District (select), panchayat/village (text/search), full address (textarea), landmark (optional)
├── Features: "Same as..." toggle for pre-fill, validation, error display
└── Patterns: Business address, warehouse address, farmer residence

EquipmentGrid
├── Used in: Step 12 (popper ancillary equipment), warehouse assessments
├── Props: categories, value, onChange, disabled
├── Structure: 4 categories (pre-popping, roasting, post-popping, value-add) with checkbox tiles
├── Features: Icon + label per item, category grouping, scoring calculation
└── Patterns: Equipment capability assessment, facility scoring

DocumentUpload
├── Used in: Step 6 (popper business docs), Step 4-5 (farmer legal docs), license uploads
├── Props: documents, onUpload, onRemove, error, disabled
├── Features: Dynamic list based on previous inputs, thumbnail grid, delete overlay
└── Patterns: Dynamic doc requirements, conditional uploads

PhotoGrid
├── Used in: Steps 6, 11, 12 (popper), Steps 4, 5 (farmer), inspection evidence, lot photos
├── Props: photos, onAdd, onRemove, maxPhotos, disabled
├── Features: Thumbnail grid, delete overlay, loading state, drag-reorder
└── Patterns: Multi-photo evidence, before/after comparisons, lot sample references

LocationPicker
├── Used in: Warehouse geofencing, pond GPS coordinates, inspection location marking
├── Props: initialLocation, onChange, accuracy, required, error, disabled
├── Features: Map view, current location button, coordinate display, radius adjustment
└── Patterns: GPS capture, boundary definition, location-based filtering

GradeDisplay
├── Used in: Lot Verification (grade summary), inspection results, quality assessment
├── Props: grade, quantity, badge?, onClick?
├── Features: Color-coded grades, hover tooltips, clickable for drill-down
└── Patterns: Grade badges, grade stacking, quality summary cards

StatusBadge
├── Used in: All list views, status indicators, approval queue views
├── Props: status, size (sm, md, lg), interactive
├── Statuses: pending_approval, active, suspended, rejected, in_progress, completed
├── Features: Color-coded, icon + label, clickable for detail view
└── Patterns: Status filtering, workflow state display
```

---

## Level 4: Screen Component Templates (Workflow-Specific Patterns)

These follow the same pattern across all workflows but with domain-specific content.

```
RegistrationScreen Pattern (All registration workflows)
├── Structure:
│   ├── TopAppBar (step title)
│   ├── StepperPanel (progress)
│   ├── HeroCard (step purpose)
│   ├── Form (stacked inputs or grid)
│   └── CTAFooter (Continue + Save Draft)
├── State: Local + Context (shared wizard state)
├── Validation: Input-level + form-level
└── Used in: All 15 popper steps, 14 farmer steps

VerificationScreen Pattern (Lot, pond, warehouse assessments)
├── Structure:
│   ├── TopAppBar
│   ├── Status ribbon (pending/approved/rejected)
│   ├── HeroCard (verification type)
│   ├── Form (inputs + evidence upload)
│   ├── Notes/Findings (rich text)
│   └── CTAFooter (Submit/Save Draft)
├── State: Form state + photo queue (offline-safe)
├── Validation: Required fields + photo count
└── Used in: Lot Verification, Pond Inspection, Warehouse Fitness, Reinspection

ListScreen Pattern (Directories, queues, task lists)
├── Structure:
│   ├── TopAppBar (with search/filter)
│   ├── Filter panel (collapsible)
│   ├── Sort dropdown
│   ├── List/Grid of cards
│   └── Floating action button (new)
├── State: Filter state, sort order, pagination, sync status
├── Features: Pull-to-refresh, infinite scroll, cached results
└── Used in: Users Directory, Ponds Directory, Warehouses Directory, Approval Queue

DetailScreen Pattern (View/edit single record)
├── Structure:
│   ├── TopAppBar (back + menu)
│   ├── HeroCard (entity summary)
│   ├── Sections (grouped data)
│   ├── Edit button (if permitted)
│   └── Actions (approve/reject/reassign)
├── State: Record state, audit trail, edit mode toggle
├── Permissions: Show/hide actions based on scout role
└── Used in: Manage Farmer/Popper, Farmer Detail, Pond Detail, Warehouse Detail
```

---

## Component Usage Matrix (All 20 Workflows)

| Workflow | TopAppBar | Stepper | HeroCard | Forms | AddressForm | Equipment | PhotoUpload | Notes | GPS |
|----------|-----------|---------|----------|-------|-------------|-----------|------------|-------|-----|
| **Registration** |
| Popper Register | ✅ (15 steps) | ✅ | ✅ | ✅ | ✅ (3x) | ✅ (2 steps) | ✅ (3x) | ❌ | ✅ |
| Farmer Register | ✅ (14 steps) | ✅ | ✅ | ✅ | ✅ (2x) | ❌ | ✅ (2x) | ❌ | ✅ |
| **Lot & Produce** |
| Lot Verification | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Seal Application | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Storage Re-check | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Re-inspection | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Rejection Handling | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| **Pond & Asset** |
| Pond Inspection | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Warehouse Fitness | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| Ponds Directory | ✅ (no step) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Warehouses Directory | ✅ (no step) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **User Management** |
| Users Directory | ✅ (no step) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Farmer | ✅ (no step) | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Manage Popper | ✅ (no step) | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **On-Behalf Actions** |
| Mark Lot Ready | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Submit Bid | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Submit Spot Offer | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **System** |
| Profile Settings | ✅ (no step) | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Dashboard | ✅ (no step) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Sync Queue | ✅ (no step) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## Implementation Guidelines

### 1. Component Consistency Across Workflows

When implementing components for a new workflow:
- ✅ Use existing components from the shared library
- ✅ Reuse component props interface (no workflow-specific variants)
- ✅ Add new variants to existing components (don't create duplicates)
- ❌ Don't create workflow-specific versions of shared components

Example:
```typescript
// ✅ GOOD: Reuse SelectInput with consistent props
<SelectInput
  label="District"
  options={districts}
  value={formData.district}
  onChange={(v) => handleChange('district', v)}
/>

// ❌ BAD: Don't create WarehouseSelectInput or FarmerSelectInput
<WarehouseSelectInput ... />
```

### 2. Component Library Organization

```
src/shared/
├── components/
│   ├── layout/ (TopAppBar, StepperPanel, ScreenLayout, CTAFooter, HeroCard)
│   ├── inputs/ (TextInput, PhoneInput, SelectInput, DatePickerInput, etc.)
│   ├── domain/ (AddressForm, EquipmentGrid, PhotoGrid, etc.)
│   └── index.ts (Exports all for consistency)
├── hooks/
│   ├── useForm.ts (Global form state + validation)
│   ├── useAddressSearch.ts (District/panchayat lookup - shared)
│   ├── useFileUpload.ts (Photo compression, upload queue)
│   └── useOfflineSync.ts (Sync queue management)
├── types/
│   ├── forms.ts (FormData, InputValue, ValidationError)
│   ├── workflows.ts (WorkflowStep, WorkflowState)
│   └── index.ts
├── utils/
│   ├── validation.ts (Shared Zod schemas)
│   ├── formatters.ts (Phone, PAN, GSTIN, grades)
│   ├── calculations.ts (Capacity, scoring, quality metrics)
│   └── offline.ts (Sync logic, conflict resolution)
└── styles/
    ├── theme.css (Colors, spacing, typography - shared)
    ├── animations.css (Transitions, loading states)
    └── responsive.css (Breakpoints, mobile-first)
```

### 3. Cross-Workflow Consistency Checklist

Before implementing a new workflow, verify:

- [ ] **TopAppBar**: Same back button, title, menu behavior
- [ ] **StepperPanel**: Correct step count, consistent styling
- [ ] **HeroCard**: Icon selection, title format, subtitle/description pattern
- [ ] **Form Inputs**: Use shared components, no custom input types
- [ ] **CTAFooter**: Primary + secondary buttons, same disabled/loading states
- [ ] **Photo Upload**: Compression, preview, deletion same across all workflows
- [ ] **Address Form**: District/panchayat lookup, landmark, same-as toggle
- [ ] **Notes/Comments**: Rich text editor, character limit, mentions support
- [ ] **Validation**: Input-level validation consistent, error messages uniform
- [ ] **Offline Handling**: All form data syncs to queue, same retry logic
- [ ] **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### 4. Adding New Workflows

When adding a new workflow:

1. Identify reusable components from existing workflows
2. Check if new component needed or can reuse/extend existing
3. If extending: Update base component, document new variant
4. If creating: Add to appropriate level (input, domain, or screen template)
5. Update this matrix and component usage documentation
6. Ensure all props interfaces match existing components
7. Test cross-workflow consistency

### 5. Variant Management

Components have variants, not duplicates:

```typescript
// TextInput variants:
<TextInput variant="default" />        // Standard text
<TextInput variant="textarea" />       // Multi-line
<TextInput variant="masked" />         // Phone, PAN, GSTIN formatting
<TextInput variant="with-counter" />   // Character count

// SelectInput variants:
<SelectInput searchable={true} />      // District lookup
<SelectInput async={true} />           // Panchayat search
<SelectInput creatable={true} />       // (Future: custom values)

// PhotoGrid variants:
<PhotoGrid maxPhotos={1} />            // Single photo
<PhotoGrid maxPhotos={5} />            // Multiple photos
<PhotoGrid reorderable={true} />       // Drag-reorder for evidence sequences
```

---

## Cross-Workflow Data Consistency

All workflows use the same validation schemas and data formats:

```typescript
// Shared Zod schemas (src/shared/utils/validation.ts)
export const phoneSchema = z.string().regex(/^\d{10}$/);
export const panSchema = z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
export const districtSchema = z.enum(['district1', 'district2', ...]); // Centralized
export const addressSchema = z.object({
  district: districtSchema,
  panchayat_village: z.string().min(1),
  full_address: z.string().min(10),
  landmark: z.string().optional()
});

// Used consistently across:
// - Popper Registration (Step 7: business address)
// - Farmer Registration (Step 5: farm address)
// - Manage Farmer (edit address)
// - Pond Inspection (pond location)
// - Warehouse Fitness (warehouse location)
```

---

**Principle:** One component library, twenty workflows, consistent experience.

