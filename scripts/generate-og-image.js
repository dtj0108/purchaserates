const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas with OG image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Create gradient background (green theme)
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#16a34a');
gradient.addColorStop(1, '#15803d');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Draw house icon background
ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
roundRect(ctx, 480, 140, 80, 80, 20);
ctx.fill();

// Draw house icon (simple representation)
ctx.fillStyle = 'white';
ctx.font = '48px Arial';
ctx.textAlign = 'center';
ctx.fillText('🏠', 520, 200);

// Draw brand name
ctx.fillStyle = 'white';
ctx.font = 'bold 56px Arial';
ctx.textAlign = 'center';
ctx.fillText('PurchaseRates.com', 600, 290);

// Draw tagline
ctx.font = '600 36px Arial';
ctx.fillText('Find the Best Mortgage Rates', 600, 360);

// Draw subtitle
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
ctx.font = '24px Arial';
ctx.fillText('Compare rates and get matched with licensed loan experts.', 600, 410);
ctx.fillText('No spam, no pressure.', 600, 445);

// Draw CTA button
ctx.fillStyle = 'white';
roundRect(ctx, 400, 490, 400, 70, 16);
ctx.fill();

ctx.fillStyle = '#16a34a';
ctx.font = '600 28px Arial';
ctx.fillText('See the starting rates now →', 600, 535);

// Helper function for rounded rectangles
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Save to public folder
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log(`✅ OG image generated: ${outputPath}`);
console.log(`   Dimensions: ${width}x${height}`);

