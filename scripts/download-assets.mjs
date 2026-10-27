import { readFile, mkdir, writeFile } from 'node:fs/promises';
const origin = 'https://yukohealth-storefront-v1.21st.app';
const assets = JSON.parse(await readFile('docs/research/assets.json', 'utf8'));
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(async (path) => {
    const target = path.includes('/media/') ? 'public/fonts/inter.ttf' : `public${path}`;
    await mkdir(target.slice(0, target.lastIndexOf('/')), { recursive: true });
    const response = await fetch(origin + path);
    if (!response.ok) throw new Error(`${path}: ${response.status}`);
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
    console.log(target);
  }));
}
