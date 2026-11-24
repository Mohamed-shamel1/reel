import { chromium } from 'playwright';
import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, 'public', 'screenshots');
fs.mkdirSync(outDir, { recursive: true });

function waitServer(url, timeout = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) resolve();
        else setTimeout(check, 300);
      }).on('error', () => {
        if (Date.now() - start > timeout) reject(new Error('Server timeout'));
        else setTimeout(check, 300);
      });
    };
    check();
  });
}

async function capture() {
  console.log('1. Starting Frontend Vite server on port 5173...');
  const feDir = 'D:\\final_nour\\noor_elshefaa_FE\\frontend';
  const vite = spawn('npx.cmd', ['vite', '--port', '5173'], {
    cwd: feDir,
    shell: true,
    stdio: 'ignore'
  });

  await waitServer('http://localhost:5173');
  console.log('✓ Frontend server ready on 5173');

  console.log('2. Launching Edge browser...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 780 } });

  // 1. Installments Calculator
  console.log('3. Capturing Installments Calculator...');
  await page.goto('http://localhost:5173/installments?demo=true&clean=true', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, 'real_installments.png') });
  console.log('✓ Saved real_installments.png');

  // 2. Credit Requests & Approvals
  console.log('4. Capturing Credit Requests...');
  await page.goto('http://localhost:5173/credit/requests?demo=true&clean=true', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, 'real_credit_requests.png') });
  console.log('✓ Saved real_credit_requests.png');

  // 3. Vault & Shifts
  console.log('5. Capturing Vault Treasury...');
  await page.goto('http://localhost:5173/clinic-manager/vault?demo=true&clean=true', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, 'real_vault.png') });
  console.log('✓ Saved real_vault.png');

  await browser.close();
  vite.kill();
  console.log('✓ All real screenshots captured successfully!');
  process.exit(0);
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
