#!/usr/bin/env node

/**
 * Download all mymind.com assets to the public/ directory.
 * - Downloads 4 files at a time in parallel
 * - Skips files that already exist
 * - Logs progress and handles errors gracefully
 */

import { mkdir, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Asset manifest ──────────────────────────────────────────────────────────

const ASSETS = [
  // Images → public/images/mymind/
  { url: "https://mymind.com/wp-content/uploads/2023/06/iphone-video-mockup.webp", dest: "public/images/mymind/iphone-video-mockup.webp" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/newmymind_type.svg", dest: "public/images/mymind/newmymind_type.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/NOTE.png", dest: "public/images/mymind/NOTE.png" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/BKMRK.webp", dest: "public/images/mymind/BKMRK.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/READ.webp", dest: "public/images/mymind/READ.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/COL.webp", dest: "public/images/mymind/COL.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/AI.webp", dest: "public/images/mymind/AI.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/LNKS.webp", dest: "public/images/mymind/LNKS.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/SEREN.webp", dest: "public/images/mymind/SEREN.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/TOMFIN.webp", dest: "public/images/mymind/TOMFIN.webp" },
  { url: "https://mymind.com/wp-content/uploads/2025/08/Badges.svg", dest: "public/images/mymind/Badges.svg" },
  { url: "https://mymind.com/wp-content/uploads/2023/06/mymind-review-001.png", dest: "public/images/mymind/mymind-review-001.png" },
  { url: "https://mymind.com/wp-content/uploads/2023/06/mymind-review-002.png", dest: "public/images/mymind/mymind-review-002.png" },
  { url: "https://mymind.com/wp-content/uploads/2023/06/mymind-review-003.png", dest: "public/images/mymind/mymind-review-003.png" },
  { url: "https://mymind.com/wp-content/uploads/2023/06/mymind-review-004.png", dest: "public/images/mymind/mymind-review-004.png" },
  { url: "https://mymind.com/wp-content/uploads/2024/04/mymind-review-005.png", dest: "public/images/mymind/mymind-review-005.png" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/mymind_review_neue-1.jpg", dest: "public/images/mymind/mymind_review_neue-1.jpg" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/statement_mymind_guy.svg", dest: "public/images/mymind/statement_mymind_guy.svg" },
  { url: "https://mymind.com/wp-content/uploads/2026/05/newquicknote.jpg", dest: "public/images/mymind/newquicknote.jpg" },
  { url: "https://mymind.com/wp-content/uploads/2026/05/On-the-human-endeavor-building-a-brand-old-Apple.jpg", dest: "public/images/mymind/blog-human-endeavor.jpg" },
  { url: "https://mymind.com/wp-content/uploads/2026/04/on-posters.jpg", dest: "public/images/mymind/blog-posters.jpg" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/mymind_footer_logo.svg", dest: "public/images/mymind/mymind_footer_logo.svg" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/mymind_manifesto_neue-1.jpg", dest: "public/images/mymind/mymind_manifesto_neue-1.jpg" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/optimised_footer_bg-1.jpg", dest: "public/images/mymind/footer_bg.jpg" },
  { url: "https://mymind.com/wp-content/uploads/2025/12/mobile.webp", dest: "public/images/mymind/mobile.webp" },

  // SVG Icons → public/images/mymind/icons/
  { url: "https://mymind.com/wp-content/uploads/2025/06/App-Store.svg", dest: "public/images/mymind/icons/App-Store.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/Browsers.svg", dest: "public/images/mymind/icons/Browsers.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/Play-Store.svg", dest: "public/images/mymind/icons/Play-Store.svg" },
  { url: "https://mymind.com/wp-content/uploads/2023/11/Arrow-button-white.svg", dest: "public/images/mymind/icons/Arrow-button-white.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/Astore.svg", dest: "public/images/mymind/icons/Astore.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/PStore.svg", dest: "public/images/mymind/icons/PStore.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/Google-Chrome.svg", dest: "public/images/mymind/icons/Google-Chrome.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/Explorer.svg", dest: "public/images/mymind/icons/Explorer.svg" },
  { url: "https://mymind.com/wp-content/uploads/2025/06/Safari.svg", dest: "public/images/mymind/icons/Safari.svg" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/vid_button_icon.svg", dest: "public/images/mymind/icons/vid_button_icon.svg" },
  { url: "https://mymind.com/wp-content/uploads/2023/04/VIDEO_button.svg", dest: "public/images/mymind/icons/VIDEO_button.svg" },
  { url: "https://mymind.com/wp-content/uploads/2023/04/arrow.svg", dest: "public/images/mymind/icons/arrow.svg" },
  { url: "https://mymind.com/wp-content/uploads/2022/11/backtotop_arrow_alt.svg", dest: "public/images/mymind/icons/backtotop_arrow_alt.svg" },

  // Videos → public/videos/mymind/
  { url: "https://carbon-media.accelerator.net/00000000001/iOt8YOTZL5jdyQMI5It4iw;2160x2160/frame(1).mp4", dest: "public/videos/mymind/hero-video.mp4" },
  { url: "https://carbon-media.accelerator.net/00000000001/ji9KfXI5e4Bby7egHtQulR;2200x1560/frame(1).mp4", dest: "public/videos/mymind/extension-video.mp4" },
  { url: "https://carbon-media.accelerator.net/00000000001/ePBtdSh5uc6bzPsGyzxVy3;456x972/frame(1).mp4", dest: "public/videos/mymind/phone-video.mp4" },
  { url: "https://carbon-media.accelerator.net/00000000001/a83yZfIzIHJezqfSiaBF7W;2880x2000/frame(1).webm", dest: "public/videos/mymind/ai-video.webm" },
  { url: "https://carbon-media.accelerator.net/00000000001/jzpbnTdXEOLcwLdnXy7RcE;1440x1222/frame(1).webm", dest: "public/videos/mymind/search-video.webm" },
  { url: "https://carbon-media.accelerator.net/00000000001/lGf6kOyeDKjeAZdenRgWv2;original.webm", dest: "public/videos/mymind/serendipity-video.webm" },

  // Favicon / SEO → public/seo/
  { url: "https://mymind.com/wp-content/uploads/2020/04/favicon.png", dest: "public/seo/favicon.png" },
  { url: "https://mymind.com/wp-content/uploads/2023/05/Mymind_2023_F-1024x538.jpg", dest: "public/seo/og-image.jpg" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

const CONCURRENCY = 4;

async function fileExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadFile(url, destPath) {
  const fullPath = join(ROOT, destPath);

  // Skip if already downloaded
  if (await fileExists(fullPath)) {
    console.log(`  SKIP  ${destPath} (already exists)`);
    return { status: "skipped", dest: destPath };
  }

  // Ensure parent directory exists
  await mkdir(dirname(fullPath), { recursive: true });

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept: "*/*",
        Referer: "https://mymind.com/",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(fullPath, buffer);

    const sizeKB = (buffer.byteLength / 1024).toFixed(1);
    console.log(`  OK    ${destPath} (${sizeKB} KB)`);
    return { status: "ok", dest: destPath, size: buffer.byteLength };
  } catch (error) {
    console.error(`  FAIL  ${destPath} — ${error.message}`);
    return { status: "failed", dest: destPath, error: error.message };
  }
}

/**
 * Process items with bounded concurrency.
 */
async function pooled(items, concurrency, fn) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\nDownloading ${ASSETS.length} mymind.com assets (concurrency: ${CONCURRENCY})\n`);

  const results = await pooled(ASSETS, CONCURRENCY, (asset) =>
    downloadFile(asset.url, asset.dest)
  );

  // Summary
  const ok = results.filter((r) => r.status === "ok");
  const skipped = results.filter((r) => r.status === "skipped");
  const failed = results.filter((r) => r.status === "failed");

  const totalBytes = ok.reduce((sum, r) => sum + (r.size || 0), 0);
  const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);

  console.log(`\n${"─".repeat(60)}`);
  console.log(`  Downloaded: ${ok.length} files (${totalMB} MB)`);
  console.log(`  Skipped:    ${skipped.length} files (already existed)`);
  console.log(`  Failed:     ${failed.length} files`);

  if (failed.length > 0) {
    console.log(`\nFailed downloads:`);
    for (const f of failed) {
      console.log(`  - ${f.dest}: ${f.error}`);
    }
  }

  console.log();
  process.exit(failed.length > 0 ? 1 : 0);
}

main();
