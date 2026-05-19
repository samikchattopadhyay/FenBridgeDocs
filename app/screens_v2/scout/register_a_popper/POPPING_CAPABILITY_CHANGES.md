# Popping Capability Profile Pages - Updates Summary

## Files Updated
- `popping_capability_profile_detailed_breakdown/code.html`
- `ancillary_equipment_optional/code.html`

---

## Page 1: Popping Capability Profile

**Step:** 11 of 15 (73.33% complete)  
**File Path:** `register_a_popper/popping_capability_profile_detailed_breakdown/code.html`

### Changes Made
✅ **Header:** Replaced old FenBridge header with new TopAppBar pattern
- Back button with history navigation
- Title: "Popping Capability"
- More options menu

✅ **Stepper Panel:** Added sticky stepper below header
- Progress bar showing 73.33% (11/15)
- Step counter label

✅ **Hero Card:** Updated with icon and clear description
- Icon: inventory_2
- Title: "Storage Specifications" → "Popping Capability Profile"
- Subtitle: "Document equipment and production capacity"

✅ **Content Structure:**
- Section 1: Traditional chulas (iron/earthen pots)
- Section 2: Semi-mechanized popping machines
- Section 3: Industrial/automated popping units
- Section 4: Equipment photos (optional, multi-photo)
- Section 5: Total daily capacity summary (read-only)
- Section 6: Producible grades (multi-select)
- Section 7: Quality assurance (optional)

✅ **Footer:** Updated CTA buttons
- Continue button → Links to `ancillary_equipment_optional/code.html`
- Save Draft button → Links to dashboard

---

## Page 2: Ancillary Equipment (Optional)

**Step:** 12 of 15 (80% complete)  
**File Path:** `register_a_popper/ancillary_equipment_optional/code.html`

### Changes Made
✅ **Header:** Replaced Scout Enrollment header with new TopAppBar pattern
- Back button with history navigation
- Title: "Ancillary Equipment"
- More options menu

✅ **Stepper Panel:** Added sticky stepper below header
- Progress bar showing 80% (12/15)
- Step counter label

✅ **Hero Card:** Updated with icon and description
- Icon: precision_manufacturing
- Title: "Ancillary Equipment & Services"
- Subtitle: "Document additional processing machinery and value-add capabilities"

✅ **Content Structure (Reorganized):**
- Equipment Grid (responsive mobile-first layout)
  - Pre-Popping Equipment
    - Cleaning/Winnowing Machine
    - Drying Equipment
    - Pre-roast Grading Machine
  - Roasting Equipment
    - Sand Roaster
    - Rotary/Air Roaster
  - Post-Popping Equipment
    - De-shelling Machine
    - Polishing Machine
    - Post-pop Grading Machine
  - Value-Add Equipment
    - Flavor Coating Drum
    - Packaging Machine (Vacuum)
    - Packaging Machine (Nitrogen)
- Equipment Photos (optional, up to 5)

✅ **Footer:** Updated CTA buttons
- Continue button → Links to `popper_bank_account_details/code.html`
- Skip (Optional) button → Links to dashboard (allows skipping optional section)

---

## Workflow Navigation Flow

```
first_warehouse_geofencing (Step 10)
         ↓
popping_capability_profile_detailed_breakdown (Step 11 of 15)
         ↓
ancillary_equipment_optional (Step 12 of 15) ← OPTIONAL
         ↓
popper_bank_account_details (Step 13)
```

---

## Design Consistency

Both pages now match the design pattern from `first_warehouse_details`:
- ✅ Fixed TopAppBar header (back + title + menu)
- ✅ Sticky stepper panel below header
- ✅ Hero instruction card with icon
- ✅ Responsive content area
- ✅ CTA footer with primary action + secondary action
- ✅ Background texture overlay
- ✅ Proper spacing and typography alignment

---

## Step Counter Calculations

| Page | Step | Total | Percentage | Progress Width |
|------|------|-------|-----------|-----------------|
| Popping Capability | 11 | 15 | 73.33% | 73.33% |
| Ancillary Equipment | 12 | 15 | 80% | 80% |

---

## Navigation Links

**Step 11 (Popping Capability):**
- Continue → `../ancillary_equipment_optional/code.html`
- Save Draft → `../../scout_dashboard/scout_today_dashboard/code.html`

**Step 12 (Ancillary Equipment):**
- Continue → `../popper_bank_account_details/code.html`
- Skip (Optional) → `../../scout_dashboard/scout_today_dashboard/code.html`

---

## Form Data Fields

### Popping Capability Page
- `chula_count` (number: 0-50)
- `chula_throughput_kg_per_day` (number: 5-10)
- `machine_count` (number: 0-20)
- `machine_throughput_kg_per_day` (number: 50-250)
- `unit_count` (number: 0-10)
- `unit_throughput_kg_per_day` (number: 500-2000)
- `equipment_photos` (array of image files, max 5)
- `producible_grades` (array: SUTA6P, SUTA5, SUTA45, MURRAH, CHIPTA)
- `qa_capability` (boolean)
- `qa_methods` (array: MANUAL, MOISTURE, SORTING, ICAR_CERTIFIED)

### Ancillary Equipment Page
- `cleaning_winnowing_available` (boolean)
- `drying_equipment_available` (boolean)
- `pre_roast_grading_available` (boolean)
- `sand_roaster_available` (boolean)
- `rotary_roaster_available` (boolean)
- `de_shelling_available` (boolean)
- `polishing_available` (boolean)
- `post_pop_grading_available` (boolean)
- `flavor_coating_available` (boolean)
- `packaging_vacuum_available` (boolean)
- `packaging_nitrogen_available` (boolean)
- `ancillary_equipment_photos` (array of image files, max 5)

---

**Last Updated:** 2026-05-19  
**Status:** ✅ Complete - Pages updated and connected
