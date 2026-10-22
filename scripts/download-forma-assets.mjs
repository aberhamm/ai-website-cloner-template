import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const source = 'https://21st-pilates.vercel.app';
const fonts = [
  'inter-cyrillic-ext-wght-normal.1zrieox9119mb.woff2',
  'inter-cyrillic-wght-normal.2whpih27xg_2r.woff2',
  'inter-greek-ext-wght-normal.1xlj4-0oa5zql.woff2',
  'inter-greek-wght-normal.1fxkn-ggzj93z.woff2',
  'inter-latin-ext-wght-normal.2ktx6yqc-sbf1.woff2',
  'inter-latin-wght-normal.0rpdhg_4ubdtf.woff2',
  'inter-vietnamese-wght-normal.1ahvy37o8m5gt.woff2',
];
const files = [
  'images/pilates-hero.png', 'images/brand-mark.svg', 'images/contactless-waves.svg',
  ...['maya-bennett', 'sofia-martinez', 'chloe-nguyen'].map(name => `images/instructors/${name}.png`),
].map(file => ({ url: `${source}/${file}`, file }));
files.push(...fonts.map(name => ({ url: `${source}/_next/static/media/${name}`, file: `fonts/${name}` })));
for (let i = 0; i < files.length; i += 4) {
  await Promise.all(files.slice(i, i + 4).map(async ({ url, file }) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not download ${url}: ${response.status}`);
    const target = path.resolve('public', file);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
  }));
}
console.log(`Downloaded ${files.length} Forma assets.`);
