# Antigravity Agent Configuration & Repository Guide (AGENT.md)

This is the authoritative, single source of truth configuration file for all AI coding agents (such as Google Antigravity, Claude Code, and other systems) and developers working in this repository. It defines directory standards, commands, design systems, and workflow rules.

---

## 1. Project Overview

**Makhana/FenBridge** is a static HTML prototype platform for a multi-role marketplace (Farmer, Popper, Scout, Buyer, Admin). The project generates interactive mockups with client-side routing, showcasing workflows across user onboarding, product verification, asset management, and marketplace operations.

- **Entry Point**: `index.html` (portal landing page)
- **Prototype Screens**: `html/scout/operational/` (Scout module workflows)
- **Architecture**: Node.js scripts + vanilla JavaScript + static HTML
- **Design Accent Color**: Cyan (`#06b6d4`) and Emerald (`#10b981`)
- **Visual Palette**: Premium dark mode theme with glassmorphism overlays and Material Design 3 semantics.

---

## 2. Directory Standards & Organization

To maintain a clean and standardized workspace, agents must strictly adhere to the following directory structure:

- **`.agent/`**: The standard location for agent configurations, rules, and skills.
  - **`rules/`**: Architectural and design directives (e.g., `ui-ux.md` for UI standards).
  - **`skills/`**: Active skill sets (e.g., `antigravity-design-expert`, `antigravity-skill-orchestrator`, `antigravity-workflows`).
- **`scripts/`**: All automation, generation, maintenance, and utility scripts (Node.js, Bash, PowerShell).
- **`docs/`**: Project documentation, analysis, and architecture.
  - **`reports/`**: Staging/migration logs, validation summaries, and completion reports.
  - **`memory/`**: Persistent backend design, offline sync specs, database schemas, and API documentation.
- **`html/scout/operational/`**: Scout dashboard operational HTML workflow templates and files.
- **`app/`**: Core application code and screen assets.
  - **`screens_v2/`**: Automatically generated and routed HTML screens.
- **`images/`**: Source mockup images (processed by build scripts).
- **`bkp/`**: Portal data structure and backup backing files.

*Note: No temporary scripts, configuration logs, or unorganized files should be created in the repository root. Always group files in their designated directories.*

---

## 3. Core Operational Guidelines

Agents must follow these behavioral patterns:
1. **Directory Constraints**: Never write project files, scripts, or scratchpads directly to the root workspace. Always group them into their respective subfolders.
2. **Path Resolution**: When creating or editing scripts, always use relative pathing (e.g., `__dirname` in Node.js, `$PSScriptRoot` in PowerShell) to ensure the scripts can run reliably from any folder.
3. **Execution Guardrails**:
   - For simple tasks (refactoring, small edits), write or edit files directly.
   - For complex tasks requiring specialized workflows, use `antigravity-skill-orchestrator` to discover and coordinate appropriate skills.

---

## 4. Key Scripts & Commands

All build, sync, and validation operations must be executed using the designated scripts:

| Script | Purpose | Run Command |
|--------|---------|-------------|
| `build_app.js` | Inject routing logic into all HTML templates | `node scripts/build_app.js` |
| `update_html_files.js` | Sync headers, address bars, and stylesheets across all HTML files | `node scripts/update_html_files.js` |
| `update_address_bars.ps1` | PowerShell version of address bar sync | `powershell -ExecutionPolicy Bypass -File scripts/update_address_bars.ps1` |
| `generate_workflow_pages.ps1` | Auto-generate missing workflow HTML from templates | `powershell -ExecutionPolicy Bypass -File scripts/generate_workflow_pages.ps1` |
| `capture_screens.js` | Screenshot capture automation | `node scripts/capture_screens.js` |
| `create_placeholder_images.js` | Generate placeholder images for prototypes | `node scripts/create_placeholder_images.js` |

---

## 5. UI/UX Design System Guidelines

All HTML pages inside `html/scout/operational/` must adhere to the standardized visual design system defined in `.agent/rules/ui-ux.md` and modeled after `verification.html`:

### Color Palette (Dark Theme)
- **Base Background**: `#121212` (deep dark grey)
- **Surface/Containers**: `#18181b` (zinc-900)
- **Cards**: `#202024` (slightly lighter surface hover state)
- **Primary Accent**: `#10b981` (emerald for actions) / `#06b6d4` (cyan for secondary actions/info)
- **Text Color**: `#f3f4f6` (high contrast white) / `#9ca3af` (muted grey)

### Component Layout Rules
- **No CSS Frameworks**: Use plain CSS and custom classes.
- **Address Bar**: Sticky file path bar at the top (`.address-bar`) showing mock location.
- **Header Banner**: Dynamic tag, title, and descriptive workflow metadata.
- **Backend Architecture Tabs**: Horizontal tab buttons (`API`, `Database`, `Sync`, `Security`) to switch panel display toggles.
- **Sticky Stepper Panel**: Scroll-synchronized stepper mapping user progress to active nodes via `IntersectionObserver`.
- **Flex Layout**: 380px max-width left pane (screenshot preview/placeholder) and a flexible columns specs grid on the right pane.
- **Icons**: Material Symbols Outlined (web font) or custom inline SVG—never emoji for UI.
- **Hover States**: All clickable elements must have `cursor-pointer` and visual transitions/feedback.

---

## 6. Using `.agent/skills/` for Complex Tasks

The `.agent/skills/` folder contains specialized tools. Use these only when needed to avoid over-engineering simple tasks.

### Skill Mapping

| Skill | Use When | How |
|-------|----------|-----|
| **`antigravity-skill-orchestrator`** | Task is multi-step, multi-domain, or you're unsure which approach fits. | Call skill to discover & coordinate appropriate tools. |
| **`ui-ux-pro-max`** | Designing new Scout HTML, choosing colors/typography, or reviewing UX. | Use `/ui-ux-pro-max` to generate design system, color palettes, and accessibility guidelines. |
| **`antigravity-design-expert`** | Complex design workflows involving branding, component systems, or visual polish. | Call skill for specialized design guidance. |
| **`antigravity-workflows`** | Automating complex task sequences or multi-step workflows. | Use for workflow orchestration beyond simple scripts. |

### Guard Rails
- **Don't use skills for simple tasks**: Direct file modifications (e.g. changing variables, typos, small components) should be done directly.
- **Reference `.agent/rules/ui-ux.md` first**: Scout HTML design rules are already defined locally.

---

## 7. Application Flow & Routing

### Routing Mechanism
1. **User navigates** → HTML page loads.
2. **`app_logic.js` injects** → Universal client-side routing engine is initialized.
3. **flowMap lookup** → Maps current page ID to next page URL.
4. **Navigation controller** → Handles back/forward navigation and stepper progress tracking.
5. **Build phase** → `build_app.js` compiles HTML from `html/scout/operational/` into `app/screens_v2/` with injected routing logic.

### flowMap Structure
Defined in `app/app_logic.js`. Maps screen ID to next screen:
```javascript
const flowMap = {
  "welcome_to_fenbridge": "../choose_your_language/code.html",
  "choose_your_language": "../streamlined_theme_selection/code.html",
  // ... workflow sequences
};
```
*Rule: When adding new screens or workflows, update `flowMap` to maintain navigation continuity.*

---

## 8. Key Architectural Decisions

- **Static HTML + Client-Side Routing**: Provides instant prototyping and CDN-ready builds without backend dependencies.
- **Universal Routing in `app_logic.js`**: A single script is injected into all templates to ensure consistent navigation UX.
- **Immediate Script Injection on Build**: Prevents manual script tag errors and updates.
- **Separate Source & Built Directories**:
  - **Source**: `html/scout/operational/` (clean, hand-edited source templates).
  - **Built**: `app/screens_v2/` (generated output with injected chrome/address bar logic).

---

## 9. Common Issues & Troubleshooting

- **Google Drive Sync Lock Errors**: If `build_app.js` fails to delete directories due to sync locks, it falls back to file-by-file deletion to avoid orphaned files.
- **Address Bar Sync Failures**: If `update_html_files.js` fails to inject address bars, verify that the HTML source template has `</style>` and either `</header-banner>` or `<div class="stepper-panel-container">`.
- **Navigation Loops**: Avoid circular loops in `flowMap`. Always map terminal steps to dashboard exit points.

---

## 10. Developer Onboarding Checklist

1. **Understand the platform**: Read `docs/memory/01-makhana-platform-overview.md`.
2. **Learn Scout scope**: Skim `docs/memory/02-scout-module-complete-scope.md` (20 workflows, 122 screens).
3. **Review existing HTML**: Open `html/scout/operational/verification.html` as the template reference.
4. **Pick a task**: Update or add a workflow (ensure you update the `flowMap`).
5. **Run validation**: Execute `node scripts/update_html_files.js`.
6. **Verify Git status**: Ensure no untracked or temp files are present before committing.
