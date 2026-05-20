# Antigravity Agent Configuration (AGENT.md)

This file serves as the authoritative instruction set for all AI agents operating on the Makhana / FenBridge project repository. It ensures parity in behavior, workflow execution, and design standards across all developer environments.

---

## 1. Repository Directory Standard

To maintain a clean and standardized workspace, agents must strictly adhere to the following directory structure:

- **`.agent/`**: The standard location for agent configurations, rules, and skills.
  - **`rules/`**: Architectural and design directives (e.g., `ui-ux.md` for UI standards).
  - **`skills/`**: Active skill sets (e.g., `antigravity-design-expert`, `antigravity-skill-orchestrator`, `antigravity-workflows`).
- **`scripts/`**: All automation, generation, maintenance, and utility scripts (Node.js, Bash, PowerShell).
- **`docs/`**: Project documentation, analysis, and architecture.
  - **`reports/`**: Staging/migration logs, validation summaries, and completion reports.
  - **`memory/`**: Persistent backend design, offline sync specs, database schemas, and API documentation.
- **`html/scout/operational/`**: Scout dashboard operational HTML workflow templates and files.
- **`app/`**: Core application codes and screen assets.

*Note: No temporary scripts, configuration logs, or unorganized files should be created in the repository root.*

---

## 2. Core Operational Guidelines

Agents must follow these behavioral patterns:
1. **Directory Constraints**: Never write project files, scripts, or scratchpads directly to the root workspace. Always group them into their respective subfolders (`scripts/`, `docs/reports/`, etc.).
2. **Path Resolution**: When creating or editing scripts, always use relative pathing (e.g., `__dirname` in Node.js, `$PSScriptRoot` in PowerShell) to ensure the scripts can run reliably from any folder.
3. **Execution Guardrails**:
   - For simple tasks, write or edit files directly.
   - For complex tasks requiring specialized workflows, use `antigravity-skill-orchestrator` to discover and coordinate appropriate skills.

---

## 3. UI/UX Design System Guidelines

All HTML pages inside `html/scout/operational/` must adhere to the standardized visual design system defined in `.agent/rules/ui-ux.md` and modeled after `verification.html`:

- **Theme Palette**:
  - **Base Background**: `#121212` (deep dark grey)
  - **Surface/Containers**: `#18181b` (zinc-900)
  - **Cards**: `#202024` (slightly lighter surface)
  - **Primary Accent**: `#06b6d4` (cyan)
  - **Text Color**: `#f3f4f6` (high contrast white) / `#9ca3af` (muted grey)
- **Component Layout Rules**:
  - **Address Bar**: Sticky file path bar at the top (`.address-bar`).
  - **Header Banner**: Dynamic tag, title, and descriptive workflow meta details.
  - **Backend Architecture Tabs**: Horizontal tab buttons to switch panel display toggles (API, Database, Sync, Security).
  - **Sticky Stepper Panel**: Scroll-synchronized intersection observer mapping user progress to active nodes.
  - **Flex Layout**: 380px max-width left pane (screenshot preview/placeholder) and a flexible columns specs grid on the right pane.

---

## 4. Maintenance & Validation Procedures

Prior to marking any development task as complete, agents must execute the following validation steps:

1. **Verify HTML Files**: Run `node scripts/update_html_files.js` to ensure the consistent header, address bar, stylesheet references, and scripts are synchronized.
2. **Generate Missing Steps**: Ensure all steps defined in `docs/reports/WORKFLOW_RESTRUCTURING_GUIDE.md` are correctly mapped to workflow HTML templates.
3. **Check Version Control Status**: Use Git commands to confirm that changes are staged, committed, and pushed without residual files or merge conflicts.
