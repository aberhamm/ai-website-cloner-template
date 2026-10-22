import fs from "node:fs/promises";
import path from "node:path";
const directory = "docs/research/readable/pages";
const urls = new Set();
for (const filename of await fs.readdir(directory)) {
  if (!filename.endsWith(".json")) continue;
  const page = JSON.parse(
    await fs.readFile(path.join(directory, filename), "utf8"),
  );
  for (const image of page.images ?? [])
    if (image.src?.startsWith("https:")) urls.add(image.src);
}
await fs.mkdir("public/readable", { recursive: true });
const assets = [...urls];
for (let i = 0; i < assets.length; i += 4)
  await Promise.all(
    assets.slice(i, i + 4).map(async (url) => {
      const destination = path.join(
        "public/readable",
        path.basename(new URL(url).pathname),
      );
      try {
        await fs.access(destination);
        return;
      } catch {}
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Asset request failed: ${url}`);
      await fs.writeFile(
        destination,
        Buffer.from(await response.arrayBuffer()),
      );
    }),
  );
console.log(`Verified ${assets.length} referenced asset URLs.`);
