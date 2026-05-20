const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, '..', 'html', 'scout', 'operational');
const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

const cssStyles = `    .address-bar { background: #141416; border: 1px solid #27272a; border-radius: 8px; padding: 10px 16px; margin-bottom: 48px; display: flex; align-items: center; gap: 12px; max-width: 1280px; margin-left: auto; margin-right: auto; }
    .address-bar-icon { font-size: 14px; color: #06b6d4; }
    .address-bar-path { font-family: 'Inter', sans-serif; font-size: 13px; color: #9ca3af; word-break: break-all; }`;

const jsScript = `  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const pathElement = document.getElementById('address-path');
      if (pathElement) {
        const pathname = window.location.pathname;
        pathElement.textContent = pathname.replace(/^\//, '').replace(/\/$/, '') || pathname;
      }
    });
  </script>`;

const updatedFiles = [];

files.forEach(filename => {
  const filePath = path.join(htmlDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Add CSS before </style> if not already present
  if (content.includes('.address-bar')) {
    // Already has address bar CSS, remove and re-add to ensure consistency
    content = content.replace(/\s*\.address-bar[\s\S]*?\.address-bar-path[\s\S]*?\}\s*/g, '');
  }

  // Add CSS before </style>
  content = content.replace(/(\s*)<\/style>/g, `\n${cssStyles}\n  </style>`);

  // 2. Add address bar HTML after </header-banner> or after stepper panel
  // Check if address bar already exists
  if (!content.includes('class="address-bar"')) {
    const addressBarHtml = `  <div class="address-bar">
    <div class="address-bar-icon">📁</div>
    <div class="address-bar-path" id="address-path">html/scout/operational/${filename}</div>
  </div>\n`;

    // Try to find the location after header-banner or stepper panel
    if (content.includes('</div>\n\n  <div class="stepper-panel-container">')) {
      content = content.replace('</div>\n\n  <div class="stepper-panel-container">', `</div>\n\n${addressBarHtml}  <div class="stepper-panel-container">`);
    } else if (content.includes('</div>\n  <div class="stepper-panel-container">')) {
      content = content.replace('</div>\n  <div class="stepper-panel-container">', `</div>\n\n${addressBarHtml}  <div class="stepper-panel-container">`);
    } else if (content.includes('</div>\n\n  <div class="workflow-group-block">')) {
      content = content.replace('</div>\n\n  <div class="workflow-group-block">', `</div>\n\n${addressBarHtml}  <div class="workflow-group-block">`);
    } else if (content.includes('</div>\n  <div class="workflow-group-block">')) {
      content = content.replace('</div>\n  <div class="workflow-group-block">', `</div>\n\n${addressBarHtml}  <div class="workflow-group-block">`);
    } else if (content.includes('</div>\n\n  <div class="workflow-grid">')) {
      content = content.replace('</div>\n\n  <div class="workflow-grid">', `</div>\n\n${addressBarHtml}  <div class="workflow-grid">`);
    } else if (content.includes('</div>\n  <div class="workflow-grid">')) {
      content = content.replace('</div>\n  <div class="workflow-grid">', `</div>\n\n${addressBarHtml}  <div class="workflow-grid">`);
    }
  }

  // 3. Add JavaScript before </body> if not already present
  if (!content.includes('document.getElementById(\'address-path\')')) {
    content = content.replace('</body>', `\n${jsScript}\n\n</body>`);
  }

  // Write back
  fs.writeFileSync(filePath, content, 'utf-8');
  updatedFiles.push(filename);
  console.log(`Updated: ${filename}`);
});

console.log(`\nTotal files updated: ${updatedFiles.length}`);
