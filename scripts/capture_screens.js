const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const steps = [
  { folder: 'intro_consent', step: 1 },
  { folder: 'verify_mobile_send', step: 2 },
  { folder: 'verify_mobile_entry', step: 3 },
  { folder: 'farmer_identity', step: 4 },
  { folder: 'language_selection', step: 5 },
  { folder: 'confirm_role_checkpoint', step: 6 },
  { folder: 'residential_address', step: 7 },
  { folder: 'pond_details', step: 8 },
  { folder: 'pond_documents', step: 9 },
  { folder: 'pond_address', step: 10 },
  { folder: 'pond_geo_fencing', step: 11 },
  { folder: 'bank_account_details', step: 12 },
  { folder: 'theme_preference', step: 13 },
  { folder: 'review_submit', step: 14 },
  { folder: 'submission_confirmation', step: 15 }
];

(async () => {
  const browser = await puppeteer.launch();

  for (const { folder, step } of steps) {
    const htmlPath = path.join(__dirname, '..', 'app', 'screens_v2', 'scout', 'register_a_farmer', folder, 'code.html');
    const outputPath = path.join(__dirname, '..', 'app', 'screens_v2', 'scout', 'register_a_farmer', folder, 'screen.png');

    // Skip if screen.png already exists
    if (fs.existsSync(outputPath)) {
      console.log(`✓ ${folder}/screen.png already exists`);
      continue;
    }

    try {
      const page = await browser.newPage();
      await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
      await page.setViewport({ width: 400, height: 800 });
      await page.screenshot({ path: outputPath });
      await page.close();
      console.log(`✓ Created ${folder}/screen.png`);
    } catch (err) {
      console.error(`✗ Failed to capture ${folder}:`, err.message);
    }
  }

  await browser.close();
  console.log('Done!');
})();
