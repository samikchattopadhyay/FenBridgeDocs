const fs = require('fs');
const path = require('path');

// Create a larger placeholder PNG (400x600 with text)
// This is a simple gray rectangle PNG that will be visible
function createPlaceholderImage(filePath, stepName) {
  // Create directories if they don't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Simple gray PNG placeholder (larger, visible size)
  // This PNG is approximately 400x600 pixels with a gray background
  const pngBuffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAZAAAAJYCAYAAABUARIbAAAA8UlEQVR4nO3QMQEAAADCoPVPbQnfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA1v9QAATX68/0AAAAASUVORK5CYII=',
    'base64'
  );

  fs.writeFileSync(filePath, pngBuffer);
  console.log(`✓ Created: ${filePath}`);
}

const steps = [
  { folder: 'verify_mobile_send', name: 'OTP Send' },
  { folder: 'verify_mobile_entry', name: 'OTP Entry' },
  { folder: 'pond_details', name: 'Pond Details' },
  { folder: 'pond_documents', name: 'Pond Documents' },
  { folder: 'pond_address', name: 'Pond Address' },
  { folder: 'pond_geo_fencing', name: 'Geo-Fencing' },
  { folder: 'bank_account_details', name: 'Bank Account' },
  { folder: 'theme_preference', name: 'Theme' },
  { folder: 'review_submit', name: 'Review' },
  { folder: 'submission_confirmation', name: 'Confirmation' }
];

const basePath = 'c:\\Development\\Makhana\\app\\screens_v2\\scout\\register_a_farmer';

try {
  steps.forEach(({ folder, name }) => {
    const screenPath = path.join(basePath, folder, 'screen.png');
    createPlaceholderImage(screenPath, name);
  });
  console.log('\n✅ All placeholder images created successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
