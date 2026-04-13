// screenshot.mjs — Puppeteer screenshot utility
// Usage: node screenshot.mjs <url> [label]
// Example: node screenshot.mjs http://localhost:3000 hero
// Saves to: ./temporary screenshots/screenshot-N[-label].png

import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url   = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3] ?? null;

const outDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Auto-increment: find next available N
const existing = fs.readdirSync(outDir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.replace('screenshot-', '').split(/[-\.]/)[0], 10)).filter(n => !isNaN(n));
const next = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath  = path.join(outDir, filename);

(async () => {
  console.log(`[screenshot] Launching browser...`);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log(`[screenshot] Navigating to ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

  // Allow fonts/animations to settle
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`[screenshot] Saved: ${outPath}`);

  await browser.close();
})().catch(err => {
  console.error('[screenshot] Error:', err.message);
  process.exit(1);
});
