import { chromium } from 'playwright';
import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const TMP_DIR = path.join(__dirname, 'tmp_record');
const DEMO_RECORDINGS_DIR = 'D:\\final_nour\\demo-recordings';

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.mkdirSync(TMP_DIR, { recursive: true });
fs.mkdirSync(DEMO_RECORDINGS_DIR, { recursive: true });

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http
        .get(url, (res) => {
          if (res.statusCode >= 200 && res.statusCode < 400) {
            resolve();
          } else {
            setTimeout(check, 300);
          }
        })
        .on('error', () => {
          if (Date.now() - start > timeoutMs) reject(new Error('Server timeout'));
          else setTimeout(check, 300);
        });
    };
    check();
  });
}

function isServerRunning(url) {
  return new Promise((resolve) => {
    http
      .get(url, (res) => resolve(res.statusCode >= 200 && res.statusCode < 400))
      .on('error', () => resolve(false));
  });
}

async function recordReel() {
  console.log('=== Starting Automated 1080x1920 Vertical Reel Video Recording ===\n');

  let vite = null;
  const alreadyRunning = await isServerRunning('http://localhost:5174');

  if (alreadyRunning) {
    console.log('✓ Vite dev server is already running on http://localhost:5174');
  } else {
    console.log('1. Starting Vite dev server on port 5174...');
    vite = spawn('npx.cmd', ['vite', '--port', '5174', '--strictPort'], {
      cwd: __dirname,
      shell: true,
      stdio: 'pipe',
    });

    vite.stdout.on('data', (d) => {
      const s = d.toString();
      if (s.includes('ready in') || s.includes('Local:')) {
        process.stdout.write(`[Vite] ${s}`);
      }
    });

    await waitForServer('http://localhost:5174');
    console.log('✓ Vite server ready at http://localhost:5174\n');
  }

  console.log('2. Launching Chromium with 1080x1920 viewport...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--autoplay-policy=no-user-gesture-required',
    ],
  });

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: TMP_DIR,
      size: { width: 1080, height: 1920 },
    },
  });

  const page = await context.newPage();

  console.log('3. Loading clean export canvas: http://localhost:5174/?export=true ...');
  await page.goto('http://localhost:5174/?export=true', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  console.log('✓ Fonts and assets rendered.');

  // Wait 1.5s warmup before playback starts
  await page.waitForTimeout(1500);

  console.log('4. Recording reel playback (0:00 to 1:14)...');
  const startTime = Date.now();
  const totalDurationMs = 76000; // 76 seconds (full 74s timeline + buffer)

  // Status ticker every 5 seconds
  const interval = setInterval(() => {
    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(0);
    console.log(`   [Progress] ${elapsedSec}s / 74s recorded...`);
  }, 5000);

  await page.waitForTimeout(totalDurationMs);
  clearInterval(interval);

  console.log('\n5. Finalizing video encoding and writing files to disk...');
  const video = page.video();
  await context.close();

  const outputFiles = [
    path.join(PUBLIC_DIR, 'exported_reel_1080x1920.webm'),
    path.join(__dirname, 'exported_reel_1080x1920.webm'),
    path.join(DEMO_RECORDINGS_DIR, '05_vertical_case_study_reel_1080x1920.webm'),
  ];

  if (video) {
    for (const outPath of outputFiles) {
      await video.saveAs(outPath);
      console.log(`✓ Saved: ${outPath}`);
    }
  }

  // Cleanup temp folder
  try {
    fs.rmSync(TMP_DIR, { recursive: true, force: true });
  } catch {}

  await browser.close();
  if (vite) {
    vite.kill('SIGINT');
  }

  console.log('\n=============================================================');
  console.log('✓ 1080x1920 Vertical Reel Successfully Exported and Ready!');
  console.log('=============================================================\n');
}

recordReel().catch((err) => {
  console.error('Fatal reel recording error:', err);
  process.exit(1);
});
