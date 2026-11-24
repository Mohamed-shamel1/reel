import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SNAPSHOT_DIR = path.join(__dirname, 'public', 'verified_frames');
fs.mkdirSync(SNAPSHOT_DIR, { recursive: true });

async function takeSnapshots() {
  console.log('Launching browser for visual verification snapshots...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-web-security'],
  });

  const page = await browser.newPage({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
  });

  const timestamps = [
    { name: 'scene0_hook_question_14s', t: 14 },
    { name: 'scene1_problem_22s', t: 22 },
    { name: 'scene2_solution_agreement_42s', t: 42 },
    { name: 'scene3_proof_receipt_58s', t: 58 },
    { name: 'scene4_whatsapp_mockup_69s', t: 69 },
  ];

  for (const item of timestamps) {
    const url = `http://localhost:5174/?clean=true&t=${item.t}`;
    console.log(`Loading: ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1000); // Wait for framer-motion animations
    const outPath = path.join(SNAPSHOT_DIR, `${item.name}.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`✓ Saved snapshot: ${outPath}`);
  }

  await browser.close();
  console.log('Visual snapshots capture complete!');
}

takeSnapshots().catch(console.error);
