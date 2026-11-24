import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, 'reference_frames');
fs.mkdirSync(outputDir, { recursive: true });

async function run() {
  console.log('1. Starting Vite...');
  const vite = spawn('npx.cmd', ['vite', '--port', '5174'], {
    cwd: __dirname,
    shell: true,
    stdio: 'ignore'
  });

  // Wait 2s for vite to boot
  await new Promise(r => setTimeout(r, 2000));

  console.log('2. Launching Edge via Playwright...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required']
  });

  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });

  console.log('3. Loading video player page...');
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:#000; width:1080px; height:1920px; overflow:hidden;">
        <video id="v" src="http://localhost:5174/ref_video.mp4" playsinline style="width:1080px; height:1920px; object-fit:contain;"></video>
      </body>
    </html>
  `);

  await page.waitForFunction(() => {
    const v = document.getElementById('v');
    return v && v.readyState >= 1;
  }, { timeout: 15000 });

  const duration = await page.evaluate(() => document.getElementById('v').duration);
  console.log(`Video loaded successfully! Duration: ${duration}s`);

  const times = [2, 6, 12, 18, 25, 32, 40, 48, 55, Math.max(0, duration - 4), Math.max(0, duration - 1)];

  for (const t of times) {
    await page.evaluate(async (time) => {
      const v = document.getElementById('v');
      v.currentTime = time;
      await new Promise(res => {
        v.onseeked = res;
      });
    }, t);

    await page.waitForTimeout(400);

    const outPath = path.join(outputDir, `frame_${String(Math.round(t)).padStart(2, '0')}s.png`);
    await page.screenshot({ path: outPath });
    console.log(`✓ Saved frame at ${t}s to ${outPath}`);
  }

  await browser.close();
  vite.kill();
  console.log('All reference frames extracted successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error('Error extracting frames:', err);
  process.exit(1);
});
