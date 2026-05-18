#!/bin/bash

# Scout Module Workflow Pages Generator
# Generates all 15 remaining pages from verification.html template

cd "c:/Development/Makhana/html/scout/operational"

template="verification.html"

# Function to create workflow page
generate_workflow_page() {
  local filename=$1
  local pagetitle=$2
  local steps=$3

  echo "Generating: $filename ($steps steps)..."

  # Copy template
  cp "$template" "$filename"

  # Update title tag
  sed -i "s|<title>Scout Operations - Lot Verification Inspection</title>|<title>Scout Operations - $pagetitle</title>|g" "$filename"

  # Update address bar path
  sed -i "s|html/scout/operational/verification.html|html/scout/operational/$filename|g" "$filename"

  # Update page title
  sed -i "s|<h1 class=\"title\">Lot Verification Inspection</h1>|<h1 class=\"title\">$pagetitle</h1>|g" "$filename"

  # Update step count in header
  sed -i "s|<div class=\"step-count-pill\">7 Steps</div>|<div class=\"step-count-pill\">$steps Steps</div>|g" "$filename"

  # Update step count in description
  sed -i "s|Complete 7-step workflow|Complete $steps-step workflow|g" "$filename"

  echo "  ✓ Created $filename"
}

# Generate all workflow pages
echo "=========================================="
echo "Scout Module Pages Generator"
echo "=========================================="
echo ""
echo "Lot Verification Workflows..."
generate_workflow_page "seal_application.html" "Seal Application" "6"
generate_workflow_page "storage_recheck.html" "Storage Re-Check" "5"
generate_workflow_page "reinspection.html" "Re-Inspection" "5"
generate_workflow_page "rejection_handling.html" "Rejection Handling" "5"

echo ""
echo "Pond & Warehouse Workflows..."
generate_workflow_page "pond_inspection.html" "Pond Inspection" "6"
generate_workflow_page "warehouse_fitness_check.html" "Warehouse Fitness Check" "5"

echo ""
echo "User Management Workflows..."
generate_workflow_page "manage_farmer.html" "Manage Farmer" "5"
generate_workflow_page "manage_popper.html" "Manage Popper" "5"
generate_workflow_page "profile.html" "Profile Settings" "6"

echo ""
echo "Operational Task Workflows..."
generate_workflow_page "mark_lot_ready.html" "Mark Lot Ready" "5"
generate_workflow_page "submit_bid.html" "Submit Bid" "6"
generate_workflow_page "submit_spot_offer.html" "Submit Spot Offer" "4"
generate_workflow_page "sync_queue.html" "Sync Queue" "1"

echo ""
echo "=========================================="
echo "Generation Complete!"
echo "=========================================="
echo ""
ls -lh *.html | tail -15
echo ""
echo "Next steps:"
echo "1. Create simplified versions for:"
echo "   - ponds_directory.html"
echo "   - warehouses_directory.html"
echo "   - users_directory.html"
echo "2. Test all pages in browser"
echo "3. Verify stepper synchronization"
echo "4. Update index.html navigation"
