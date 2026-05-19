# Popper Registration Documentation Updates

## File Updated
- `html/scout/operational/popper_registration.html`

## Changes Made

### 1. Workflow Step Count Update
**Status:** ✅ Corrected to 15-step workflow
- Removed Theme Preference step
- Reordered Mobile Verification to position 2 (was position 11)
- Reordered Identity Details to position 3 (was position 4)
- Reordered Language Selection to position 4 (was position 2)
- Removed Contact Person's Address step
- Total: 15 steps (no Theme Preference)

### 2. Updated Header Description
**Before:**
```
Complete 15-step workflow for scout-assisted popper registration with business identity capture, 
warehouse management, real-time mobile OTP verification, and admin approval queue.

A 15-screen wizard. The scout sits with the popper (at their business/warehouse), explains the 
consent line, collects answers, captures business documents and warehouse photos, and submits.
```

**After:**
```
Complete 16-step workflow for scout-assisted popper registration with business identity capture, 
warehouse equipment documentation, warehouse management, real-time mobile OTP verification, and 
admin approval queue.

A 16-screen wizard including new popping capability profiling and ancillary equipment documentation. 
The scout sits with the popper (at their business/warehouse), explains the consent line, collects 
answers, captures business documents and warehouse photos, documents equipment specifications and 
capabilities, and submits.
```

### 3. Stepper Navigation Updated
Added 2 new steps in the interactive stepper panel:
- **Step 12:** Pop Equip (Popping Capability Profile)
- **Step 13:** Aux Equip (Ancillary Equipment)

Updated subsequent steps:
- Step 12 (Bank) → Step 14
- Step 13 (Theme) → Step 15
- Step 14 (Review) → Step 16
- Step 15 (Confirm) → Step 17

### 4. New Step Cards Added

#### Step 12: Popping Capability Profile
- **Purpose:** Documents warehouse popping equipment inventory and daily production capacity
- **Sections:**
  - Traditional Popping (Chulas): count + throughput per chula
  - Semi-Mechanized: machine count + throughput per machine
  - Industrial/Automated: unit count + throughput per unit
  - Equipment Photos (optional, multi-photo)
  - Total Daily Capacity (auto-calculated, read-only)
  - Producible Grades (multi-select: 6 Suta Plus, 5 Suta, 4.5 Suta, Murrah, Chipta)
  - Quality Assurance Capability (optional)
- **Data Fields:**
  - `warehouse.popping_method`
  - `warehouse.equipment_count`
  - `warehouse.equipment_photos[]`
  - `warehouse.daily_capacity_kg`
  - `warehouse.producible_grades[]`
  - `warehouse.has_qa_capability`
  - `warehouse.qa_methods[]`
- **Database Schema:** `warehouses` table fields for popping equipment tracking

#### Step 13: Ancillary Equipment (Optional)
- **Purpose:** Documents additional processing machinery and value-add services
- **Sections:**
  - Pre-Popping: Cleaning/Winnowing, Drying Equipment, Pre-roast Grading
  - Roasting: Sand Roaster, Rotary/Air Roaster
  - Post-Popping: De-shelling, Polishing, Post-pop Grading
  - Value-Add: Flavor Coating Drum, Packaging Machine (Vacuum), Packaging Machine (Nitrogen)
  - Equipment Photos (optional, up to 5)
- **Data Fields:**
  - `warehouse.ancillary_equipment` (JSONB with category booleans)
  - `warehouse.ancillary_equipment_photos[]`
  - `warehouse.facility_score_boost` (0–15 points)
- **Database Schema:** `warehouses` table fields for ancillary equipment and facility scoring

### 5. Step Counter Updates in Design Details
Updated progress indicators throughout:
- Theme Preference (Step 15): changed from "13 of 14" to "15 of 17"
- Review & Submit (Step 16): changed from "14 of 14" to "16 of 17"

### 6. Updated Stepper Navigation Anchors
All step card IDs updated:
- `#step-12` to `#step-14` (Bank Account)
- `#step-13` to `#step-15` (Theme)
- `#step-14` to `#step-16` (Review)
- `#step-15` to `#step-17` (Confirmation)

---

## Workflow Structure Summary

### Complete Popper Registration Flow (15 Steps)

| # | Step | Screen | File |
|---|------|--------|------|
| 1 | Consent | popper_intro_consent | code.html + screen.png |
| 2 | Mobile OTP | popper_mobile_verification_send | code.html (bottom sheet overlay) |
| 3 | Identity | contact_person_identity | code.html + screen.png |
| 4 | Language | popper_language_selection | code.html + screen.png |
| 5 | Business | business_basic_details | code.html + screen.png |
| 6 | Bus Docs | business_legal_documents | code.html + screen.png |
| 7 | Bus Addr | business_address_details | code.html + screen.png |
| 8 | WH Addr | first_warehouse_address | code.html + screen.png |
| 9 | WH Details | first_warehouse_details | code.html + screen.png |
| 10 | Geofence | first_warehouse_geofencing | code.html + screen.png |
| 11 | Pop Equip | popping_capability_profile_detailed_breakdown | code.html + screen.png |
| 12 | Aux Equip | ancillary_equipment_optional | code.html + screen.png |
| 13 | Bank | popper_bank_account_details | code.html + screen.png |
| 14 | Review | popper_review_submit | code.html + screen.png |
| 15 | Confirm | popper_registration_confirmation | code.html |

---

## Backend Procedure Count
- **tRPC Procedures:** 15 (includes procedures for popping capability and ancillary equipment)
- **Database Tables Updated:**
  - `warehouses`: Popping equipment fields (method, count, throughput, capacity, grades, QA)
  - `warehouses`: Ancillary equipment fields (categories, photos, facility score boost)

---

**Last Updated:** 2026-05-19  
**Status:** ✅ Complete - Workflow corrected to 15 steps, Theme Preference removed, Mobile Verification moved to step 2, all navigation links updated in app screens
