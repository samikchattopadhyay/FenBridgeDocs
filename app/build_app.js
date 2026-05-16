const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../images');
const destDir = path.join(__dirname, 'screens_v2');
const logicScriptPath = path.join(__dirname, 'app_logic.js');

console.log("====================================================");
console.log("Starting FenBridge App Screens Processing & Assembly");
console.log("Source: " + sourceDir);
console.log("Target: " + destDir);
console.log("====================================================");

function walkDir(currentPath) {
  let items = [];
  try { items = fs.readdirSync(currentPath); } catch(rdErr) { return; }
  
  items.forEach(item => {
    const fullPath = path.join(currentPath, item);
    let stat;
    try { stat = fs.statSync(fullPath); } catch(stErr) { return; }
    
    // Calculate relative path from base sourceDir
    const relPath = path.relative(sourceDir, fullPath);
    const targetPath = path.join(destDir, relPath);

    if (stat.isDirectory()) {
      try { walkDir(fullPath); } catch(wdErr) {}
    } else {
      const ext = path.extname(item).toLowerCase();
      if (ext === '.html') {
        // Ensure target directory exists purely on demand with drive placeholder fault tolerance
        const parentDir = path.dirname(targetPath);
        try {
          fs.mkdirSync(parentDir, { recursive: true });
        } catch(mkErr) {
          console.error(`[Mkdir Error] -> ${parentDir}: ${mkErr.message}`);
        }

        // Read HTML content and intelligently inject client routing script
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          
          // Compute precise cross-platform relative path to app_logic.js
          let relativeLogicPath = path.relative(parentDir, logicScriptPath);
          // Normalize directory separators for web standard script tags
          relativeLogicPath = relativeLogicPath.split(path.sep).join('/');

          const scriptTag = `<script src="${relativeLogicPath}"></script>\n</body>`;
          
          // Avoid duplicate script insertion
          if (!content.includes('app_logic.js')) {
            if (content.includes('</body>')) {
              content = content.replace('</body>', scriptTag);
            } else {
              // Append gracefully if closing body tag omitted
              content += `\n<script src="${relativeLogicPath}"></script>`;
            }
          }

          fs.writeFileSync(targetPath, content, 'utf8');
          console.log(`[Injected] -> ${relPath}`);
        } catch (err) {
          console.error(`[Skipped/Error] -> ${relPath}: ${err.message}`);
        }
      }
    }
  });
}

// Clean slate recreation of target screens repository structure
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
} else {
  console.log("Cleaning staging screens output subdirectories...");
  const subfolders = ['splash', 'buyer_onboarding', 'farmer_onboarding', 'operations', 'profile'];
  subfolders.forEach(sf => {
    const sfPath = path.join(destDir, sf);
    try {
      if (fs.existsSync(sfPath)) {
        fs.rmSync(sfPath, { recursive: true, force: true });
      }
    } catch (rmErr) {
      // If folder removal is blocked by Google Drive sync locks, selectively delete contained files rather than creating orphan trash directories
      function cleanDirectoryContents(dir) {
        try {
          if (!fs.existsSync(dir)) return;
          fs.readdirSync(dir).forEach(file => {
            const curPath = path.join(dir, file);
            try {
              if (fs.statSync(curPath).isDirectory()) {
                cleanDirectoryContents(curPath);
                try { fs.rmdirSync(curPath); } catch(e) {}
              } else {
                fs.unlinkSync(curPath);
              }
            } catch(e) {}
          });
        } catch(e) {}
      }
      cleanDirectoryContents(sfPath);
    }
  });
}

walkDir(sourceDir);

console.log("====================================================");
console.log("Successfully assembled all connected mockup screens!");
console.log("====================================================");
