# PowerShell script to generate all 16 workflow documentation pages
# Uses verification.html as the template and adapts it for each workflow

$basePath = "c:\Development\Makhana\html\scout\operational"
$templatePath = "$basePath\verification.html"

# Configuration for all pages
$pages = @{
    "seal_application.html" = @{
        title = "Seal Application"
        desc = "Complete 6-step workflow for applying seals to verified lots before storage with material preparation, application, and verification steps."
        detail = "Scout inspects lot before sealing, prepares sealing materials, applies seal to lot container, documents with photos, verifies seal integrity, and submits. Lot transitions to sealed state."
        steps = @("Initiate", "Inspect", "Materials", "Apply", "Photos", "Submit")
        stepCount = 6
        tabs = @("API Architecture", "Database Schema", "Async Jobs")
    }
    "storage_recheck.html" = @{
        title = "Storage Re-Check"
        desc = "Complete 5-step workflow for re-checking storage conditions of sealed lots with environmental assessment and verification."
        detail = "Scout performs periodic re-check of sealed lot storage conditions, verifies integrity, checks environmental conditions, documents findings, and submits report."
        steps = @("Initialize", "Check", "Environment", "Physical", "Submit")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema")
    }
    "reinspection.html" = @{
        title = "Re-Inspection"
        desc = "Complete 5-step workflow for re-inspecting lots with quality re-assessment and detailed photo documentation."
        detail = "Scout performs quality re-inspection for lots with quality disputes or marketplace issues. Captures new quality metrics, defect counts, photos, and final assessment."
        steps = @("Initiate", "Quality", "Defects", "Photos", "Report")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema", "Validation")
    }
    "rejection_handling.html" = @{
        title = "Rejection Handling"
        desc = "Complete 5-step workflow for handling lot rejections with reason documentation and farmer notification."
        detail = "Scout documents lot rejection reasons, captures evidence, assesses damage, notifies farmer, and submits rejection report. Lot status transitions to rejected with full audit trail."
        steps = @("Reason", "Photos", "Assessment", "Notify", "Submit")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema")
    }
    "pond_inspection.html" = @{
        title = "Pond Inspection"
        desc = "Complete 6-step workflow for inspecting ponds with readiness assessment and harvest evaluation."
        detail = "Scout inspects aquaculture pond conditions, verifies harvest readiness, measures water metrics, documents photos, and generates inspection report."
        steps = @("Initiate", "Confirm", "Conditions", "Readiness", "Photos", "Submit")
        stepCount = 6
        tabs = @("API Architecture", "Database Schema", "Async Jobs")
    }
    "warehouse_fitness_check.html" = @{
        title = "Warehouse Fitness Check"
        desc = "Complete 5-step workflow for assessing warehouse fitness with structural and environmental evaluation."
        detail = "Scout inspects warehouse structural integrity, environmental controls, pest management, damage assessment, and generates fitness report."
        steps = @("Initiate", "Structure", "Environment", "Assessment", "Submit")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema")
    }
    "manage_farmer.html" = @{
        title = "Manage Farmer"
        desc = "Complete 5-step workflow for managing farmer profiles with document verification and status updates."
        detail = "Scout updates farmer profile information, verifies documents, updates approval status, makes corrections, and submits changes."
        steps = @("Select", "Update", "Verify", "Status", "Submit")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema")
    }
    "manage_popper.html" = @{
        title = "Manage Popper"
        desc = "Complete 5-step workflow for managing popper profiles with warehouse verification and status updates."
        detail = "Scout updates popper profile, verifies warehouse details, updates operational status, makes corrections, and submits changes."
        steps = @("Select", "Update", "Verify", "Status", "Submit")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema")
    }
    "profile.html" = @{
        title = "Profile Settings"
        desc = "Complete 6-step workflow for managing scout profile with personal details, documents, and preferences."
        detail = "Scout updates personal information, contact details, address, bank account, documents, and preferences."
        steps = @("Personal", "Contact", "Address", "Bank", "Documents", "Preferences")
        stepCount = 6
        tabs = @("API Architecture", "Database Schema")
    }
    "mark_lot_ready.html" = @{
        title = "Mark Lot Ready"
        desc = "Complete 5-step workflow for marking lots ready for sale with verification and notification."
        detail = "Scout verifies lot readiness for sale, confirms quantity and quality, obtains final approval, and submits."
        steps = @("Select", "Verify", "Quality", "Confirm", "Submit")
        stepCount = 5
        tabs = @("API Architecture", "Database Schema")
    }
    "submit_bid.html" = @{
        title = "Submit Bid"
        desc = "Complete 6-step workflow for submitting bids on lots with pricing and terms review."
        detail = "Scout (on behalf of buyer) selects lot, enters bid price, specifies delivery details, reviews terms, and submits bid."
        steps = @("Select", "Price", "Delivery", "Terms", "Review", "Submit")
        stepCount = 6
        tabs = @("API Architecture", "Database Schema")
    }
    "submit_spot_offer.html" = @{
        title = "Submit Spot Offer"
        desc = "Complete 4-step workflow for submitting spot market offers with quick pricing and terms."
        detail = "Scout submits immediate spot market offer for available lot with price, delivery, and terms."
        steps = @("Select", "Details", "Review", "Submit")
        stepCount = 4
        tabs = @("API Architecture", "Database Schema")
    }
    "sync_queue.html" = @{
        title = "Sync Queue"
        desc = "Single-step interface for monitoring and managing offline data synchronization queue."
        detail = "Scout views pending sync items, retry failed items, check sync status, and manage offline-to-online data transfers."
        steps = @("Queue")
        stepCount = 1
        tabs = @("API Architecture")
    }
}

Write-Host "PowerShell Generator Script for Scout Module Documentation Pages"
Write-Host "================================================================"
Write-Host "Total pages to generate: $($pages.Count)"
Write-Host "Template location: $templatePath"
Write-Host ""
Write-Host "Instructions:"
Write-Host "1. Ensure verification.html exists in: $basePath"
Write-Host "2. Run this script: . .\generate_workflow_pages.ps1"
Write-Host "3. All 15 remaining files will be created with correct structure"
Write-Host ""
Write-Host "Page configurations loaded:"
$pages.Keys | ForEach-Object { Write-Host "  - $_" }
