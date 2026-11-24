import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const refVideoPath = 'C:/Users/Qeema/.gemini/antigravity/brain/3cdaa5c4-d213-4a43-8cd7-534aa0f8001a/.user_uploaded/media_1795522012834_1c70384e.mp4';
const outputDir = path.join(__dirname, 'reference_frames');
fs.mkdirSync(outputDir, { recursive: true });

// Copy video to public for easy serving
const publicVideo = path.join(__dirname, 'public', 'ref_video.mp4');
fs.copyFileSync(refVideoPath, publicVideo);
console.log('Copied reference video to public/ref_video.mp4');

// Simple static file server
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url.replace(/^\//, ''));
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': filePath.endsWith('.mp4') ? 'video/mp4' : 'text/html',
      'Accept-Ranges': 'bytes',
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(5199, async () => {
  console.log('Local server running on 5199');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });

  // HTML with video element
  const html = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:black; display:flex; justify-content:center; align-items:center; width:1080px; height:1920px;">
        <video id="v" src="http://localhost:5199/ref_video.mp4" playsinline style="width:1080px; height:1920px; object-fit:contain;"></video>
      </body>
    </html>
  `;

  await page.setContent(html);

  const duration = await page.evaluate(async () => {
    const v = document.getElementById('v');
    await new Promise((r) => {
      v.onloadedmetadata = r;
    });
    return v.duration;
  });

  console.log('Video duration:', duration, 'seconds');

  // Sample timestamps across video (every ~5-8s and the end CTA)
  const timestamps = [1, 5, 12, 18, 25, 32, 40, 48, 55, Math.max(0, duration - 3), Math.max(0, duration - 1)];

  for (const t of timestamps) {
    await page.evaluate(async (time) => {
      const v = document.getElementById('v');
      v.currentTime = time;
      await new Promise((r) => {
        v.onseeked = r;
      });
    }, t);

    // wait a moment for render
    await page.waitForTimeout(300);

    const outPath = path.join(outputDir, `frame_${String(Math.round(t)).padStart(2, '0')}s.png`);
    await page.screenshot({ path: outPath });
    console.log(`Saved frame at ${t}s to ${outPath}`);
  }

  await browser.close();
  server.close();
  console.log('Done extracting frames!');
  process.exit(0);
});
