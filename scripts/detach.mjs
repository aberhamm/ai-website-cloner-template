#!/usr/bin/env node
/**
 * Detach the cloned site into a portable, self-contained Next.js project
 * under output/<name>/.
 *
 * Usage:
 *   node scripts/detach.mjs [name]
 *   npm run detach -- [name]
 *
 * What it does:
 *   1. Copies src/ + public/ + minimal Next.js config files into output/<name>/.
 *   2. Generates a trimmed package.json containing only deps actually imported.
 *   3. Strips unused @import lines from globals.css (e.g. tw-animate-css).
 *   4. Writes README.md with integration notes for downstream agents.
 *   5. Initializes a fresh git repo with one initial commit.
 *
 * The output folder is gitignored. Move it wherever you want.
 */

import { mkdir, copyFile, readFile, writeFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const OUTPUT_ROOT = join(ROOT, "output");

const DEFAULT_NAME = "clone-export";
const ALWAYS_KEEP_DEPS = new Set([
  "next",
  "react",
  "react-dom",
]);
const ALWAYS_KEEP_DEV_DEPS = new Set([
  "@types/node",
  "@types/react",
  "@types/react-dom",
  "@tailwindcss/postcss",
  "tailwindcss",
  "typescript",
  "eslint",
  "eslint-config-next",
]);

const COPY_PATHS = [
  "src",
  "public",
  "next.config.ts",
  "tsconfig.json",
  "postcss.config.mjs",
  "eslint.config.mjs",
  ".gitignore",
  ".nvmrc",
];

// shadcn config — only copy if shadcn is actually used
const OPTIONAL_PATHS = ["components.json"];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (e) => {
      const p = join(dir, e.name);
      if (e.isDirectory()) return walk(p);
      return [p];
    }),
  );
  return files.flat();
}

async function copyTree(src, dst) {
  const s = await stat(src);
  if (s.isFile()) {
    await mkdir(dirname(dst), { recursive: true });
    await copyFile(src, dst);
    return;
  }
  await mkdir(dst, { recursive: true });
  for (const entry of await readdir(src, { withFileTypes: true })) {
    await copyTree(join(src, entry.name), join(dst, entry.name));
  }
}

/** Extract bare-specifier imports from JS/TS source files. */
function extractImports(source) {
  const out = new Set();
  // ES module imports
  const re1 = /(?:^|\s|;)import\s+(?:[^"']+from\s+)?["']([^"']+)["']/g;
  // require()
  const re2 = /\brequire\(["']([^"']+)["']\)/g;
  for (const re of [re1, re2]) {
    let m;
    while ((m = re.exec(source))) {
      const spec = m[1];
      if (!spec) continue;
      if (spec.startsWith(".") || spec.startsWith("/") || spec.startsWith("@/")) continue;
      // bare specifier — extract package name (handle scoped packages)
      const parts = spec.split("/");
      const name = spec.startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
      out.add(name);
    }
  }
  return out;
}

function extractCssImports(source) {
  const out = new Set();
  const re = /@import\s+["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(source))) out.add(m[1]);
  return out;
}

async function main() {
  const argName = process.argv[2];
  const name = (argName || DEFAULT_NAME).replace(/[^a-z0-9._-]/gi, "-").toLowerCase();
  const dst = join(OUTPUT_ROOT, name);

  if (existsSync(dst)) {
    console.error(`✗ ${dst} already exists. Remove it first or pick a different name.`);
    process.exit(1);
  }

  console.log(`→ Detaching to ${relative(ROOT, dst)}/`);

  // 1. Copy required tree
  for (const p of COPY_PATHS) {
    const src = join(ROOT, p);
    if (!existsSync(src)) {
      console.warn(`  · skip (missing): ${p}`);
      continue;
    }
    await copyTree(src, join(dst, p));
    console.log(`  · copied ${p}`);
  }

  // 2. Determine actual deps in use by scanning src/ imports
  const srcFiles = await walk(join(dst, "src"));
  const codeFiles = srcFiles.filter((f) => /\.(tsx?|jsx?|mjs|cjs)$/.test(f));
  const cssFiles = srcFiles.filter((f) => /\.css$/.test(f));

  const usedJs = new Set();
  for (const f of codeFiles) {
    extractImports(await readFile(f, "utf8")).forEach((d) => usedJs.add(d));
  }
  const usedCss = new Set();
  for (const f of cssFiles) {
    extractCssImports(await readFile(f, "utf8")).forEach((d) => usedCss.add(d));
  }
  // CSS @import "tailwindcss" is the framework itself — already handled by ALWAYS_KEEP_DEV_DEPS.
  // Only treat additional @import as dependencies that need to be in package.json.
  const cssDeps = [...usedCss].filter((d) => d !== "tailwindcss" && !d.startsWith("./") && !d.startsWith("../"));
  cssDeps.forEach((d) => usedJs.add(d));

  // 3. Read root package.json + build trimmed version
  const rootPkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
  const allDeps = { ...rootPkg.dependencies, ...rootPkg.devDependencies };
  const allDevOnly = new Set(Object.keys(rootPkg.devDependencies || {}));

  const trimmedDeps = {};
  const trimmedDevDeps = {};

  for (const dep of [...usedJs]) {
    if (!allDeps[dep]) continue; // unknown — skip silently
    if (ALWAYS_KEEP_DEV_DEPS.has(dep) || allDevOnly.has(dep)) {
      trimmedDevDeps[dep] = allDeps[dep];
    } else {
      trimmedDeps[dep] = allDeps[dep];
    }
  }
  for (const dep of ALWAYS_KEEP_DEPS) {
    if (allDeps[dep]) trimmedDeps[dep] = allDeps[dep];
  }
  for (const dep of ALWAYS_KEEP_DEV_DEPS) {
    if (allDeps[dep]) trimmedDevDeps[dep] = allDeps[dep];
  }

  const sortedKeys = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));

  const newPkg = {
    name,
    version: "0.1.0",
    private: true,
    description: rootPkg.description || `Detached clone — ${name}`,
    engines: rootPkg.engines || { node: ">=24" },
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "eslint",
      typecheck: "tsc --noEmit",
      check: "npm run lint && npm run typecheck && npm run build",
    },
    dependencies: sortedKeys(trimmedDeps),
    devDependencies: sortedKeys(trimmedDevDeps),
  };
  await writeFile(join(dst, "package.json"), JSON.stringify(newPkg, null, 2) + "\n", "utf8");
  console.log(
    `  · wrote package.json (${Object.keys(trimmedDeps).length} deps + ${Object.keys(trimmedDevDeps).length} devDeps)`,
  );

  // 4. Optionally copy components.json (only if a shadcn dep is in use)
  if (existsSync(join(ROOT, "components.json")) && (usedJs.has("@base-ui/react") || usedJs.has("class-variance-authority") || usedJs.has("lucide-react"))) {
    for (const p of OPTIONAL_PATHS) {
      const src = join(ROOT, p);
      if (existsSync(src)) {
        await copyTree(src, join(dst, p));
        console.log(`  · copied ${p}`);
      }
    }
  }

  // 5. Strip unused @import lines from globals.css
  const cssPath = join(dst, "src", "app", "globals.css");
  if (existsSync(cssPath)) {
    const css = await readFile(cssPath, "utf8");
    const cleaned = css
      .split("\n")
      .filter((line) => {
        const m = /@import\s+["']([^"']+)["']/.exec(line);
        if (!m) return true;
        const spec = m[1];
        if (spec === "tailwindcss" || spec.startsWith(".") || spec.startsWith("/")) return true;
        return allDeps[spec] !== undefined;
      })
      .join("\n");
    if (cleaned !== css) {
      await writeFile(cssPath, cleaned, "utf8");
      console.log("  · cleaned unused @imports from globals.css");
    }
  }

  // 6. Write README.md with integration notes
  const components = await readdir(join(dst, "src", "components")).catch(() => []);
  const componentList = components
    .filter((f) => /\.tsx$/.test(f))
    .map((f) => `- \`${f}\``)
    .join("\n");

  const readme = `# ${name}

Self-contained Next.js project, detached from the website-cloner template.

## Run standalone

\`\`\`bash
npm install
npm run dev    # http://localhost:3000
\`\`\`

\`\`\`bash
npm run check  # lint + typecheck + build
\`\`\`

Requires Node ≥ 24.

## What's in here

- \`src/app/\` — Next.js App Router pages and globals.css
- \`src/components/\` — UI components:
${componentList || "  (none)"}
- \`src/data/\`, \`src/types/\`, \`src/hooks/\`, \`src/lib/\` — shared modules used by the components
- \`public/\` — static assets (fonts, images)

## Importing into another Next.js + Tailwind v4 app

1. Copy \`src/components/\`, \`src/data/\`, \`src/hooks/\`, \`src/types/\`, \`src/lib/utils.ts\` into the
   target's matching paths. Update the \`@/\` import alias if the target uses a different one.
2. Copy \`public/fonts/\` and \`public/images/\` into the target's \`public/\`.
3. Merge \`src/app/globals.css\` blocks into the target's globals — particularly the \`@theme\`
   color tokens, any \`@custom-variant\` blocks, and \`@utility\` declarations. If the target has
   conflicting tokens, scope this app's blocks under a wrapper class.
4. Wire local fonts in your root \`layout.tsx\` (see this app's \`src/app/layout.tsx\` for the
   exact \`localFont\` config).
5. Mount global chrome components (header, color toggle, intro loader, etc.) in your layout
   only if you want them — skip if your target already has its own chrome.
6. Render page sections (Hero, Grid, Footer, etc.) in your route file.

## Importing into a non-Next.js project

- \`next/image\` → plain \`<img>\` (image paths use absolute \`/images/...\` paths)
- \`next/link\` → \`<a>\` or your router's link
- \`next/font/local\` → \`@fontsource\` package or vanilla \`@font-face\` rules
- Remove all \`'use client'\` directives — they're Next.js-specific

## Trimmed dependencies

This package.json contains only the dependencies actually imported by code under \`src/\`:

${Object.keys(trimmedDeps).map((d) => `- \`${d}\``).join("\n") || "(no runtime deps beyond next/react)"}
`;
  await writeFile(join(dst, "README.md"), readme, "utf8");
  console.log("  · wrote README.md");

  // 7. Fresh git repo
  const gitInit = spawnSync("git", ["init", "-q"], { cwd: dst, stdio: "inherit" });
  if (gitInit.status === 0) {
    spawnSync("git", ["add", "-A"], { cwd: dst, stdio: "inherit" });
    const commit = spawnSync(
      "git",
      ["commit", "-q", "-m", `Initial commit: ${name} detached from website-cloner`],
      { cwd: dst, stdio: "inherit" },
    );
    if (commit.status === 0) console.log("  · git init + initial commit");
  }

  console.log("");
  console.log(`✓ Detached. Next steps:`);
  console.log(`  cd ${relative(process.cwd(), dst) || "."}`);
  console.log(`  npm install && npm run check`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
