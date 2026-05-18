// Universal Screen Navigation & Control Logic Engine
// Automatically injected into every static prototype mockup to provide fully interactive client-side routing

(function() {
  // Universal style injection hiding vertical scrollbars across all viewports and inner layouts
  const noScrollbarStyle = document.createElement("style");
  noScrollbarStyle.textContent = `
    ::-webkit-scrollbar { display: none !important; width: 0 !important; background: transparent !important; }
    * { -ms-overflow-style: none !important; scrollbar-width: none !important; }
    html, body { -ms-overflow-style: none !important; scrollbar-width: none !important; }
    
    /* UNIVERSAL PEER-CHECKED DESCENDANT BRIDGING */
    input.peer:checked ~ div [class*="peer-checked:border-primary"] { border-color: #4edea3 !important; }
    input.peer:checked ~ div [class*="peer-checked:bg-primary"] { background-color: #4edea3 !important; }
    input.peer:checked ~ div [class*="peer-checked:opacity-100"] { opacity: 1 !important; }
    input.peer:checked ~ div [class*="peer-checked:text-primary"] { color: #4edea3 !important; }
    input.peer:checked ~ div [class*="peer-checked:bg-primary-container"] { background-color: #10b981 !important; }
    input.peer:checked ~ div [class*="peer-checked:text-on-primary-container"] { color: #00422b !important; }
    input.peer:checked ~ div [class*="peer-checked:bg-surface-container-high"] { background-color: #2a2a2a !important; }
    
    /* Outer container visual highlight overrides */
    input.peer:checked ~ div.border { border-color: #4edea3 !important; }
    
    /* Universal cursor pointer for all back navigation elements */
    .material-symbols-outlined, [data-icon="arrow_back"], [data-icon*="back"] {
      cursor: pointer !important;
    }
  `;
  if (document.head) {
    document.head.appendChild(noScrollbarStyle);
  } else {
    document.addEventListener("DOMContentLoaded", () => document.head.appendChild(noScrollbarStyle));
  }

  // Mapping matrix defining the linear essence flow of the entire application suite
  const flowMap = {
    // Shared Initial Onboarding
    "welcome_to_fenbridge": "../choose_your_language/code.html",
    "choose_your_language": "../streamlined_theme_selection/code.html",
    "streamlined_theme_selection": "../choose_your_role/code.html",

    // Farmer Onboarding (Pond Creation Workflow)
    "choose_your_role": "../you_re_all_set/code.html",
    "pond_address": "../farm_pond_details/code.html",
    "farm_pond_details": "../pond_geo_fencing/code.html",
    "pond_geo_fencing": "../farm_pond_legal_details_high_visibility_uploads/code.html",
    "farm_pond_legal_details_high_visibility_uploads": "../verify_mobile_step_1/code.html",

    // Buyer Onboarding (Business Creation Workflow)
    "business_information_high_visibility_uploads": "../business_address/code.html",
    "business_address": "../address_details/code.html",
    "address_details": "../you_re_all_set/code.html",

    // Shared Onboarding Tail
    "verify_mobile_step_1": "../verify_mobile_step_2/code.html",
    "verify_mobile_step_2": "../../profile/farmer_profile/code.html",
    "you_re_all_set": "../../profile/farmer_profile/code.html",

    // Operations Core
    "farmer_dashboard": "../my_spot_listings/code.html",
    "my_spot_listings": "../request_spot_listing_step_1/code.html",
    "request_spot_listing_step_1": "../request_spot_listing_step_2/code.html",
    "request_spot_listing_step_2": "../request_spot_listing_step_3/code.html",
    "request_spot_listing_step_3": "../request_spot_listing_step_4/code.html",
    "request_spot_listing_step_4": "../spot_listing_detail/code.html",
    "spot_listing_detail": "../bid_invitations/code.html",
    "bid_invitations": "../bid_invitation_detail/code.html",
    "bid_invitation_detail": "../my_active_pos/code.html",
    "my_active_pos": "../po_detail_farmer/code.html",
    "po_detail_farmer": "../mark_lot_ready_step_1/code.html",
    "mark_lot_ready_step_1": "../mark_lot_ready_step_2/code.html",
    "mark_lot_ready_step_2": "../mark_lot_ready_step_3/code.html",
    "mark_lot_ready_step_3": "../mark_lot_ready_step_4/code.html",
    "mark_lot_ready_step_4": "../earnings_summary/code.html",
    "earnings_summary": "../payment_history/code.html",
    "payment_history": "../payment_receipt_detail/code.html",
    "payment_receipt_detail": "../POST_REQUIREMENT/post_requirement_step_1/code.html",

    // Post Requirement Subflow
    "post_requirement_step_1": "../post_requirement_step_2/code.html",
    "post_requirement_step_2": "../post_requirement_step_3/code.html",
    "post_requirement_step_3": "../post_requirement_step_4/code.html",
    "post_requirement_step_4": "../post_requirement_step_5/code.html",
    "post_requirement_step_5": "../requirement_posted_success/code.html",
    "requirement_posted_success": "../../REVISE_REQUIREMENT/revise_requirement_review_changes/code.html",

    // Revise Requirement Subflow
    "revise_requirement_review_changes": "../revise_requirement_edit_fields/code.html",
    "revise_requirement_edit_fields": "../revise_requirement_resubmit/code.html",
    "revise_requirement_resubmit": "../requirement_revised_success/code.html",
    "requirement_revised_success": "../../PO_ACCEPTANCE/review_po_draft/code.html",

    // PO Acceptance Subflow
    "review_po_draft": "../terms_conditions/code.html",
    "terms_conditions": "../insurance_options/code.html",
    "insurance_options": "../advance_payment/code.html",
    "advance_payment": "../digital_signature/code.html",
    "digital_signature": "../../SPOT_PURCHASE/review_lot_seal/code.html",

    // Spot Purchase Subflow
    "review_lot_seal": "../confirm_cargo_insurance/code.html",
    "confirm_cargo_insurance": "../review_accept_terms/code.html",
    "review_accept_terms": "../pay_to_confirm_purchase/code.html",
    "pay_to_confirm_purchase": "../sign_your_purchase/code.html",
    "sign_your_purchase": "../spot_lot_purchased_success/code.html",
    "spot_lot_purchased_success": "../../RESERVE_LOT/reserve_lot_confirmation/code.html",

    // Reserve Lot Subflow
    "reserve_lot_confirmation": "../active_reservation_hold/code.html",
    "active_reservation_hold": "../release_reservation_confirmation/code.html",
    "release_reservation_confirmation": "../reservation_released_success/code.html",
    "reservation_released_success": "../../DELIVERY_ACCEPTANCE/verify_seal_integrity/code.html",

    // Delivery Acceptance Subflow
    "verify_seal_integrity": "../verify_quantity/code.html",
    "verify_quantity": "../upload_delivery_photos/code.html",
    "upload_delivery_photos": "../accept_or_dispute/code.html",
    "accept_or_dispute": "../delivery_accepted_success/code.html",
    "delivery_accepted_success": "../pay_balance_complete/code.html",
    "pay_balance_complete": "../../SUBMIT_FEEDBACK/rate_review/code.html",

    // Submit Feedback Subflow
    "rate_review": "../feedback_submitted_success/code.html",
    "feedback_submitted_success": "../view_your_feedback/code.html",
    "submit_feedback_success": "../view_your_feedback/code.html",
    "view_your_feedback": "../request_a_call/code.html",
    "request_a_call": "../../profile/farmer_profile/code.html",

    // Profile Management
    "farmer_profile": "../buyer_profile/code.html",
    "buyer_profile": "../edit_business_details/code.html",
    "edit_business_details": "../bank_account_details/code.html",
    "bank_account_details": "../edit_bank_account/code.html",
    "edit_bank_account": "../delivery_addresses/code.html",
    "delivery_addresses": "../add_delivery_address/code.html",
    "add_delivery_address": "../capability_tags/code.html",
    "capability_tags": "../manage_ponds/code.html",
    "manage_ponds": "../uploaded_documents/code.html",
    "uploaded_documents": "../notification_preferences/code.html",
    "notification_preferences": "../settings/code.html",
    "settings": "../help_support/code.html",
    "help_support": "../scout/scout_login/code.html",

    // Scout Tracking Module
    "scout_login": "../scout_profile/code.html",
    "scout_profile": "../edit_scout_profile/code.html",
    "edit_scout_profile": "../assigned_farmers/code.html",
    "assigned_farmers": "../farmer_detail_scout/code.html",
    "farmer_detail_scout": "../today_s_tasks/code.html",
    "today_s_tasks": "../task_detail/code.html",
    "task_detail": "../inspection_history/code.html",
    "inspection_history": "../sync_queue/code.html",
    "sync_queue": "../performance_dashboard/code.html",
    "performance_dashboard": "../scout_settings/code.html",
    "scout_settings": "../scout_help_support/code.html",
    "scout_help_support": "../../../farmer_onboarding/welcome_to_fenbridge/code.html",

    // Shared Auth Flow (Common)
    "splash": "common/login/code.html",
    "login": "common/choose_role/code.html", 
    "choose_role": "scout/scout_dashboard/scout_today_dashboard/code.html",

    // Scout Farmer Onboarding Flow (Step 1 to 14)
    "register_a_farmer/intro_consent": "../verify_mobile_send/code.html",
    "register_a_farmer/verify_mobile_send": "../farmer_identity/code.html",
    "register_a_farmer/verify_mobile_entry": "../farmer_identity/code.html",
    "register_a_farmer/farmer_identity": "../language_selection/code.html",
    "register_a_farmer/language_selection": "../residential_address/code.html",
    "register_a_farmer/residential_address": "../pond_details/code.html",
    "register_a_farmer/pond_details": "../pond_documents/code.html",
    "register_a_farmer/pond_documents": "../pond_address/code.html",
    "register_a_farmer/pond_address": "../pond_geo_fencing/code.html",
    "register_a_farmer/pond_geo_fencing": "../bank_account_details/code.html",
    "register_a_farmer/bank_account_details": "../review_submit/code.html",
    "register_a_farmer/review_submit": "../submission_confirmation/code.html",
    "register_a_farmer/submission_confirmation": "../../scout_dashboard/scout_today_dashboard/code.html",

    // Scout Popper Onboarding Flow (Step 1 to 17)
    "register_a_popper/popper_intro_consent": "../popper_language_selection/code.html",
    "register_a_popper/popper_language_selection": "../popper_address_details/code.html",
    "register_a_popper/popper_address_details": "../contact_person_identity/code.html",
    "register_a_popper/contact_person_identity": "../business_basic_details/code.html",
    "register_a_popper/business_basic_details": "../business_legal_documents/code.html",
    "register_a_popper/business_legal_documents": "../business_address_details/code.html",
    "register_a_popper/business_address_details": "../first_warehouse_details/code.html",
    "register_a_popper/first_warehouse_details": "../first_warehouse_address/code.html",
    "register_a_popper/first_warehouse_address": "../first_warehouse_geofencing/code.html",
    "register_a_popper/first_warehouse_geofencing": "../popper_mobile_verification_send/code.html",
    "register_a_popper/popper_mobile_verification_send": "../popper_bank_account_details/code.html",
    "register_a_popper/popper_mobile_verification": "../popper_bank_account_details/code.html",
    "register_a_popper/popper_bank_account_details": "../popper_theme_preference/code.html",
    "register_a_popper/popper_theme_preference": "../popper_review_submit/code.html",
    "register_a_popper/popper_review_submit": "../popper_registration_confirmation/code.html",
    "register_a_popper/popper_registration_confirmation": "../../scout_dashboard/scout_today_dashboard/code.html"
  };

  function getFolderContext() {
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    let folder = "";
    let parent = "";
    // Usually code.html is the last segment, folder name is second to last
    for (let i = segments.length - 1; i >= 0; i--) {
      if (segments[i] && segments[i].toLowerCase() !== "code.html" && segments[i].toLowerCase() !== "index.html") {
        try {
          folder = decodeURIComponent(segments[i]).toLowerCase();
        } catch(e) {
          folder = segments[i].toLowerCase();
        }
        if (i > 0) {
          try {
            parent = decodeURIComponent(segments[i-1]).toLowerCase();
          } catch(e) {
            parent = segments[i-1].toLowerCase();
          }
        }
        break;
      }
    }
    // Prepend parent directory name if it matches key flows to prevent collision of similar steps
    if (parent === "register_a_farmer" || parent === "register_a_popper" || parent === "profile_settings") {
      return parent + "/" + folder;
    }
    return folder;
  }

  function getScreensBase() {
    const href = window.location.href;
    const idx = href.indexOf("screens_v2/");
    if (idx !== -1) {
      return href.substring(0, idx + 11);
    }
    return "../../";
  }

  function resolveNextTarget() {
    const folder = getFolderContext();
    const role = localStorage.getItem("fenbridge_active_role") || "scout";
    const base = getScreensBase();

    const isProfileUser = localStorage.getItem("fenbridge_onboarding_complete") === "true" || 
                          localStorage.getItem("fenbridge_add_pond_flow") === "true";

    // Intercept Add Pond subflow termination universally for established profile users
    if (folder === "farm_pond_legal_details_high_visibility_uploads" && isProfileUser) {
      localStorage.removeItem("fenbridge_add_pond_flow");
      return base + "profile/manage_ponds/code.html";
    }

    // Intercept Edit Bank Account subflow loopback universally
    if (folder === "edit_bank_account") {
      return base + "profile/bank_account_details/code.html";
    }

    // Universal Splash handling
    if (folder === "splash") {
      return base + "common/login/code.html";
    }

    // Universal Login handling
    if (folder === "login") {
      if (role === "scout") {
        return base + "scout/scout_dashboard/scout_today_dashboard/code.html";
      } else {
        return base + "common/choose_role/code.html";
      }
    }

    // Dynamic Role-Based Application Roadmap Sequence Overrides
    if (role === "farmer") {
      // Direct Farmer flow sequence (Pond Creation Workflow)
      if (folder === "welcome_to_fenbridge") {
        return base + "buyer_onboarding/choose_your_language/code.html";
      } else if (folder === "choose_your_language") {
        return base + "buyer_onboarding/streamlined_theme_selection/code.html";
      } else if (folder === "streamlined_theme_selection") {
        return base + "buyer_onboarding/choose_your_role/code.html";
      } else if (folder === "choose_your_role") {
        return base + "buyer_onboarding/you_re_all_set/code.html";
      } else if (folder === "pond_address") {
        return base + "buyer_onboarding/farm_pond_details/code.html";
      } else if (folder === "farm_pond_details") {
        return base + "buyer_onboarding/pond_geo_fencing/code.html";
      } else if (folder === "pond_geo_fencing") {
        return base + "buyer_onboarding/farm_pond_legal_details_high_visibility_uploads/code.html";
      } else if (folder === "farm_pond_legal_details_high_visibility_uploads") {
        if (localStorage.getItem("fenbridge_add_pond_flow") === "true") {
          localStorage.removeItem("fenbridge_add_pond_flow");
          return base + "profile/manage_ponds/code.html";
        }
        return base + "buyer_onboarding/verify_mobile_step_1/code.html";
      } else if (folder === "verify_mobile_step_1") {
        return base + "buyer_onboarding/verify_mobile_step_2/code.html";
      } else if (folder === "verify_mobile_step_2") {
        return base + "profile/farmer_profile/code.html";
      } else if (folder === "you_re_all_set") {
        return base + "profile/farmer_profile/code.html";
      } else if (folder === "request_a_call") {
        return base + "profile/farmer_profile/code.html";
      }
    } else if (role === "scout") {
      // Direct Scout flow sequence
      if (folder === "choose_role") {
        return base + "scout/scout_dashboard/scout_today_dashboard/code.html";
      }
    } else {
      // Direct Buyer flow sequence (Business Creation Workflow)
      if (folder === "welcome_to_fenbridge") {
        return base + "farmer_onboarding/choose_your_language/code.html";
      } else if (folder === "choose_your_language") {
        return base + "farmer_onboarding/streamlined_theme_selection/code.html";
      } else if (folder === "streamlined_theme_selection") {
        return base + "farmer_onboarding/choose_your_role/code.html";
      } else if (folder === "choose_your_role") {
        return base + "farmer_onboarding/business_information_high_visibility_uploads/code.html";
      } else if (folder === "business_information_high_visibility_uploads") {
        return base + "farmer_onboarding/business_address/code.html";
      } else if (folder === "business_address") {
        return base + "farmer_onboarding/address_details/code.html";
      } else if (folder === "address_details") {
        return base + "farmer_onboarding/you_re_all_set/code.html";
      } else if (folder === "verify_mobile_step_1") {
        return base + "farmer_onboarding/verify_mobile_step_2/code.html";
      } else if (folder === "verify_mobile_step_2") {
        return base + "profile/farmer_profile/code.html";
      } else if (folder === "you_re_all_set") {
        return base + "profile/buyer_profile/code.html";
      } else if (folder === "request_a_call") {
        return base + "profile/buyer_profile/code.html";
      }
    }

    // Default flowMap mappings for shared utility screens or operational depths
    if (flowMap[folder]) {
      return flowMap[folder];
    }
    return null;
  }
  window.resolveNextTarget = resolveNextTarget;

  function initializeInteractivity() {
    const currentFolder = getFolderContext();
    const nextTargetUrl = resolveNextTarget();

    // Inject global premium agricultural ambient pattern grid overlay universally
    if (!document.getElementById("premium-grid-ambient")) {
      const gridDiv = document.createElement("div");
      gridDiv.id = "premium-grid-ambient";
      gridDiv.className = "fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0 overflow-hidden";
      gridDiv.innerHTML = `<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="ambient-grid-pattern" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" stroke-width="1"></path>
</pattern>
</defs>
<rect fill="url(#ambient-grid-pattern)" height="100%" width="100%"></rect>
</svg>`;
      if (document.body) {
        document.body.appendChild(gridDiv);
      }
    }

    // Automatically detect profile management phase to distinguish from onboarding phase
    if (window.location.pathname.includes("/profile/") || window.location.pathname.includes("/operations/")) {
      localStorage.setItem("fenbridge_onboarding_complete", "true");
    }

    // 1. Notify Parent Hub of current load context
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "SCREEN_LOADED",
        folder: currentFolder,
        title: document.title || currentFolder,
        path: window.location.pathname
      }, "*");
    }

    // Listen for parent control messages (Simulator Back / Fast Forward actions)
    window.addEventListener("message", function(e) {
      if (!e.data) return;
      if (e.data.type === "GO_BACK") {
        if (window.history.length > 1) {
          window.history.back();
        }
      } else if (e.data.type === "FAST_FORWARD") {
        const dynamicNext = resolveNextTarget();
        if (dynamicNext) window.location.href = dynamicNext;
      }
    });

    // Automatically hide/remove meaningless "Skip" buttons across all screens except where explicitly requested
    document.querySelectorAll("button").forEach(b => {
      if ((b.textContent || "").trim().toLowerCase() === "skip") {
        if (currentFolder !== "business_information_high_visibility_uploads" && currentFolder !== "business_address") {
          b.style.visibility = "hidden";
          b.style.pointerEvents = "none";
        } else {
          b.style.visibility = "visible";
          b.style.pointerEvents = "auto";
          b.style.color = "#4edea3";
        }
      }
    });

    // Persistent state feedback hook for pre-linked WhatsApp profile nodes
    if (localStorage.getItem("fenbridge_wa_linked") === "true") {
      document.querySelectorAll(".group").forEach(group => {
        const txt = (group.textContent || "").trim().toLowerCase();
        if (txt.includes("verify mobile & link whatsapp")) {
          const btnContainer = group.querySelector(".flex.items-center.gap-2");
          if (btnContainer) {
            const firstBtn = btnContainer.querySelector("button");
            const verifyOnClick = firstBtn ? firstBtn.getAttribute("onclick") : "window.location.href='../../buyer_onboarding/verify_mobile_step_1/code.html'";
            btnContainer.className = "flex flex-col items-start gap-2 pl-[48px]";
            btnContainer.innerHTML = `
              <span class="px-2.5 py-1 rounded font-label-sm text-xs font-semibold whitespace-nowrap text-emerald-500 bg-emerald-500/10 border border-emerald-500/20" style="color: #10b981; background-color: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.2);">WhatsApp Linked ✓</span>
              <button onclick="${verifyOnClick}" class="px-3 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-sm whitespace-nowrap cursor-pointer pointer-events-auto">Verify Mobile</button>
            `;
          }
        } else if (txt.includes("link now") || txt.includes("link whatsapp")) {
          const btns = group.querySelectorAll("button");
          if (btns.length === 1) {
            const btn = btns[0];
            btn.textContent = "Linked Successfully ✓";
            btn.style.borderColor = "#10b981";
            btn.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
            btn.style.color = "#10b981";
            btn.setAttribute("data-linked", "true");
          }
        }
      });

      document.querySelectorAll("button").forEach(btn => {
        const txt = (btn.textContent || "").trim().toLowerCase();
        if (txt === "link now" || txt === "link whatsapp") {
          btn.textContent = "Linked Successfully ✓";
          btn.style.borderColor = "#10b981";
          btn.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
          btn.style.color = "#10b981";
          btn.setAttribute("data-linked", "true");
        }
      });
    }

    // Universally enforce pointer cursor inline for all back navigation elements and icons
    document.querySelectorAll(".material-symbols-outlined, [data-icon='arrow_back'], [data-icon*='back']").forEach(el => {
      const txt = (el.textContent || "").trim();
      const icon = el.getAttribute("data-icon") || "";
      if (txt === "arrow_back" || icon === "arrow_back" || txt.toLowerCase().includes("back")) {
        el.style.cursor = "pointer";
      }
    });

    // 2. Attach global delegated click listener to document for bulletproof intercepting
    document.addEventListener("click", function(e) {
      // Absolute priority check for native back buttons and their padding/wrapper headers
      const backNode = e.target.closest(".material-symbols-outlined, [data-icon='arrow_back'], [data-icon*='back']");
      const headerNode = e.target.closest("header");
      const isHeaderLeft = headerNode && e.clientX < 100 && headerNode.querySelector("[data-icon='arrow_back'], [data-icon*='back'], .material-symbols-outlined");
      if (backNode || isHeaderLeft) {
        const targetNode = backNode || isHeaderLeft;
        const bTxt = (targetNode.textContent || "").trim().toLowerCase();
        const bIcon = targetNode.getAttribute("data-icon") || "";
        if (bIcon === "arrow_back" || bTxt === "arrow_back" || bTxt === "back" || bTxt.includes("arrow_back") || bTxt.includes("◀") || bIcon.includes("back") || isHeaderLeft) {
          // If clicked directly on an icon that isn't a back icon, let it process normally
          if (backNode && !bIcon.includes("back") && bIcon !== "arrow_back" && bTxt !== "arrow_back" && !bTxt.includes("back") && !bTxt.includes("◀")) {
            // Fall through
          } else {
            e.preventDefault();
            e.stopPropagation();
            if (window.history.length > 1) {
              window.history.back();
            } else if (window.parent && window.parent !== window) {
              window.parent.postMessage({ type: "GO_BACK" }, "*");
            }
            return;
          }
        }
      }

      // Universal custom handler for theme choice mockup blocks
      const themeCard = e.target.closest('[class*="theme-card"]');
      if (themeCard) {
        const section = themeCard.closest('section') || document;
        section.querySelectorAll('[class*="theme-card"]').forEach(card => {
          if (card === themeCard) {
            if (card.className.includes("theme-card-unselected")) {
              card.className = card.className.replace("theme-card-unselected", "theme-card-selected");
            }
            card.classList.remove("bg-surface-container-low");
            card.classList.add("bg-surface-container");
            const circle = card.querySelector('.rounded-full.border-2');
            if (circle) {
              circle.className = circle.className.replace("border-outline", "border-primary");
              circle.innerHTML = '<div class="w-2 h-2 bg-primary rounded-full"></div>';
            }
          } else {
            if (card.className.includes("theme-card-selected")) {
              card.className = card.className.replace("theme-card-selected", "theme-card-unselected");
            }
            card.classList.remove("bg-surface-container");
            card.classList.add("bg-surface-container-low");
            const circle = card.querySelector('.rounded-full.border-2');
            if (circle) {
              circle.className = circle.className.replace("border-primary", "border-outline");
              circle.innerHTML = '';
            }
          }
        });
        
        const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
        if (contBtn) {
          contBtn.removeAttribute("disabled");
          contBtn.style.cursor = "pointer";
          contBtn.style.opacity = "1";
          contBtn.style.backgroundColor = "#10b981";
          contBtn.style.color = "#ffffff";
        }
        return;
      }

      const labelEl = e.target.closest("label");
      if (labelEl) {
        const lTxt = (labelEl.textContent || "").trim().toLowerCase();
        if (lTxt.includes("farmer") || lTxt.includes("i'm a farmer")) {
          localStorage.setItem("fenbridge_active_role", "farmer");
          const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
          if (contBtn) {
            contBtn.removeAttribute("disabled");
            contBtn.style.cursor = "pointer";
            contBtn.style.opacity = "1";
            contBtn.style.backgroundColor = "#10b981";
            contBtn.style.color = "#ffffff";
          }
        } else if (lTxt.includes("seller") || lTxt.includes("i'm a seller")) {
          localStorage.setItem("fenbridge_active_role", "seller");
          const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
          if (contBtn) {
            contBtn.removeAttribute("disabled");
            contBtn.style.cursor = "pointer";
            contBtn.style.opacity = "1";
            contBtn.style.backgroundColor = "#10b981";
            contBtn.style.color = "#ffffff";
          }
        } else if (lTxt.includes("buyer") || lTxt.includes("i'm a buyer")) {
          localStorage.setItem("fenbridge_active_role", "buyer");
          const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
          if (contBtn) {
            contBtn.removeAttribute("disabled");
            contBtn.style.cursor = "pointer";
            contBtn.style.opacity = "1";
            contBtn.style.backgroundColor = "#10b981";
            contBtn.style.color = "#ffffff";
          }
        }
        
        // Universally verify inner radio button checked state and unlock the flow progress button
        const radio = labelEl.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          if (radio.name) {
            document.querySelectorAll(`input[type="radio"][name="${radio.name}"]`).forEach(r => {
              if (r !== radio) r.checked = false;
            });
          }
          const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
          if (contBtn) {
            contBtn.removeAttribute("disabled");
            contBtn.style.cursor = "pointer";
            contBtn.style.opacity = "1";
            contBtn.style.backgroundColor = "#10b981";
            contBtn.style.color = "#ffffff";
          }
        }
        return;
      }

      // Explicitly allow interacting with form inputs natively without intercepting routing
      if (e.target.closest("input, textarea, select, #upload_photo_action_btn, #avatar_pick_btn")) {
        return;
      }

      const el = e.target.closest("button, a, .group, [data-icon='arrow_back'], .material-symbols-outlined");
      if (!el) return;

      // Respect standard disabled attribute for interactive elements to prevent bypassed routing
      if (el.hasAttribute("disabled") || el.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Ensure that if a generic group section container wraps internal interactive action buttons/links, clicking the empty whitespace area does not trigger section-wide routing
      if (el.classList.contains("group") && el.querySelector("button, a")) {
        if (!e.target.closest("button, a")) {
          return;
        }
      }

      // If the matched container wraps an input/textarea/select, let's focus the element instead of navigating forward
      const innerInput = el.querySelector("input, textarea, select");
      if (innerInput) {
        if (!e.target.closest("input, textarea, select")) {
          innerInput.focus();
        }
        return;
      }

      const txt = (el.textContent || "").trim().toLowerCase();
      const icon = el.getAttribute("data-icon") || "";
      
      // Prevent forward routing for upload actions, resend buttons, or map view containers
      if (txt.includes("upload") || txt.includes("resend") || txt.includes("send otp") || txt.includes("detecting location") || el.closest('[class*="upload"]')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Provide premium state feedback if uploading a document proof
        if (el.tagName.toLowerCase() === "button" && txt.includes("upload")) {
          if (!el.getAttribute("data-uploaded")) {
            el.setAttribute("data-uploaded", "true");
            const labelSpan = el.querySelector(".font-label-lg") || el;
            labelSpan.textContent = "Uploaded Successfully ✓";
            el.style.borderColor = "#10b981";
            el.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
            el.style.color = "#10b981";
            const iconSpan = el.querySelector(".material-symbols-outlined");
            if (iconSpan) iconSpan.textContent = "check_circle";
          }
        }
        return;
      }

      // Let standard native links process normally if fully qualified external destination
      if (el.tagName.toLowerCase() === "a" && el.getAttribute("href") && !el.getAttribute("href").startsWith("#") && !el.getAttribute("href").includes("code.html")) {
        return;
      }

      // Let draft saving and registration recurrence buttons bypass dynamic flow interception
      if (txt.includes("draft") || txt.includes("register another")) {
        return;
      }

      // Explicitly allow manual Skip Intro links to route directly to their target
      if (txt.includes("skip intro")) {
        const targetHref = el.getAttribute("href");
        if (targetHref) {
          window.location.href = targetHref;
          return;
        }
      }

      const dynamicNextUrl = resolveNextTarget();

      // Handle structural role choices dynamically
      if (txt.includes("farmer") || txt.includes("i'm a farmer")) {
        localStorage.setItem("fenbridge_active_role", "farmer");
        el.style.borderColor = "#10b981";
        const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
        if (contBtn) {
          contBtn.removeAttribute("disabled");
          contBtn.style.cursor = "pointer";
          contBtn.style.opacity = "1";
          contBtn.style.backgroundColor = "#10b981";
          contBtn.style.color = "#ffffff";
        }
        return;
      } else if (txt.includes("seller") || txt.includes("i'm a seller")) {
        localStorage.setItem("fenbridge_active_role", "seller");
        el.style.borderColor = "#10b981";
        const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
        if (contBtn) {
          contBtn.removeAttribute("disabled");
          contBtn.style.cursor = "pointer";
          contBtn.style.opacity = "1";
          contBtn.style.backgroundColor = "#10b981";
          contBtn.style.color = "#ffffff";
        }
        return;
      } else if (txt.includes("buyer") || txt.includes("i'm a buyer")) {
        localStorage.setItem("fenbridge_active_role", "buyer");
        el.style.borderColor = "#10b981";
        const contBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.toLowerCase().includes("continue"));
        if (contBtn) {
          contBtn.removeAttribute("disabled");
          contBtn.style.cursor = "pointer";
          contBtn.style.opacity = "1";
          contBtn.style.backgroundColor = "#10b981";
          contBtn.style.color = "#ffffff";
        }
        return;
      }

      // Back behavior mapping
      if (icon === "arrow_back" || txt === "back" || txt.includes("arrow_back") || txt.includes("◀")) {
        e.preventDefault();
        e.stopPropagation();
        if (window.history.length > 1) {
          window.history.back();
        } else if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: "GO_BACK" }, "*");
        }
        return;
      }

      // Forward routing mapping
      const baseScreens = getScreensBase();
      if (icon === "dashboard" || txt.includes("dashboard")) {
        e.preventDefault();
        e.stopPropagation();
        if (window.location.pathname.includes("/scout/")) {
          window.location.href = baseScreens + "scout/scout_dashboard/scout_today_dashboard/code.html";
        } else if (window.location.pathname.includes("buyer_profile") || (localStorage.getItem("fenbridge_active_role") === "buyer")) {
          window.location.href = baseScreens + "operations/my_active_pos/code.html";
        } else {
          window.location.href = baseScreens + "operations/farmer_dashboard/code.html";
        }
        return;
      }
      if (txt.includes("add account") || txt.includes("bank account details") || txt.includes("manage bank accounts")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/bank_account_details/code.html";
        return;
      }
      if (txt.includes("add tags") || txt.includes("capability tags")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/capability_tags/code.html";
        return;
      }
      if (txt.includes("link whatsapp") || txt.includes("link now")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/link_whatsapp/code.html";
        return;
      }
      if (txt.includes("edit farm/pond details") || txt.includes("manage ponds") || txt.includes("view all ponds")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/manage_ponds/code.html";
        return;
      }
      if (txt.includes("add pond") || (txt === "add" && window.location.pathname.includes("manage_ponds"))) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "buyer_onboarding/farm_pond_details/code.html";
        return;
      }
      if (txt.includes("edit business details")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/edit_business_details/code.html";
        return;
      }
      if (txt.includes("delivery addresses")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/delivery_addresses/code.html";
        return;
      }
      if (txt.includes("uploaded documents")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/uploaded_documents/code.html";
        return;
      }
      if (txt.includes("settings")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/settings/code.html";
        return;
      }
      if (txt.includes("notification preferences")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/notification_preferences/code.html";
        return;
      }
      if (txt.includes("help & support") || txt.includes("help support") || txt.includes("request an update") || txt.includes("something missing")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "profile/help_support/code.html";
        return;
      }
      if (txt.includes("logout")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = baseScreens + "farmer_onboarding/welcome_to_fenbridge/code.html";
        return;
      }

      // Intercept: Prevent auto-redirection for login/auth buttons to allow local OTP/Verify logic to show
      const isAuthAction = txt.includes("continue") || txt.includes("verify") || el.onclick;
      if ((currentFolder === "login" || currentFolder === "verify_mobile_step_1") && isAuthAction) {
        return;
      }

      // If we have a dynamic route from flowMap, intercept and navigate!
      if (dynamicNextUrl) {
        e.preventDefault();
        e.stopPropagation();
        el.style.transform = "scale(0.96)";
        el.style.transition = "transform 0.1s";
        setTimeout(() => {
          el.style.transform = "none";
          window.location.href = dynamicNextUrl;
        }, 120);
      } else {
        // If there's no dynamic route, DO NOT prevent default behavior!
        // Let standard inline onclick or standard href work natively!
        console.log("No dynamic target matched for folder:", currentFolder, "- allowing native action");
      }
    });
  }

  // Execute bootstrap setup safely
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeInteractivity);
  } else {
    initializeInteractivity();
  }
})();
