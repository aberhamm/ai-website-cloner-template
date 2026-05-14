import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { existsSync } from 'node:fs';

const PUBLIC = new URL('../public/', import.meta.url);

const images = [
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/Gorro-Outfit.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/backpack-recycled-black-outfit-3_e9a01867-b304-4957-bb6f-e92759717401.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/beanie-_-red-outfit-PLSNOUSAR_d2a91372-9ff5-4285-bff4-4b44bb9b4ff8.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/beanie-_-red-outfit_2c3b211f-1507-4f73-817f-2b124d7daa33.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/cap-_-black-outfit-2_a4c86e6e-f97a-455c-ba4e-1bdca4ba2b86.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/cap-_-black-outfit_9a3389f2-3570-4130-8abc-c7d891c7c073.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/jersey-red-square-outfit-2_7d8ec371-d660-43a7-a08d-9ef1eb053caf.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/jersey-red-square-outfit_d6d9ae9b-b22d-4eed-93e2-8b0913b773f4.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/keychain-_-black-outfit-2_02a9a427-baa1-4c60-9d73-cae05294aea0.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/keychain-_-black-outfit-PLSNOUSAR.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/keychain-_-black-outfit.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/metalbag.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/mochila1.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/mochila2.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-_-white-outfit-2_0b43b5d9-98ff-4e64-ada9-a205c95b70f1.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-_-white-outfit.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-hello-week-dark-grey-outfit-2_08bdbb8f-02f4-401d-afed-f07a4d29930d.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-hello-week-dark-grey-outfit_ec196548-f6da-4682-8c5c-8714bd4ebdf5.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-hello-week-white-outfit-2_cc70839b-bea7-4957-9262-f38ff0e9f505.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-hello-week-white-outfit.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/t-shirt-time-off-outfit_dfee3661-54e4-43ab-8d38-34388179952d.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-_-black-outfit-2.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-_-black-outfit_850aaa09-ee65-42d9-8236-9579f797a2db.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-_-white-outfit-2.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-_-white-outfit_461af856-288d-4e39-9913-4ce3febba67d.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-metal-outfit-2_e18d8c17-2359-4dc2-9bf1-80277d681c17.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-sayhello-outfit-2.jpg',
  'cdn.shopify.com/s/files/1/0665/1455/0837/files/totebag-sayhello-outfit_f241d637-643f-473c-b0ee-82402efd800a.jpg',
];

const fonts = [
  'outfit.hellohello.is/_next/static/media/NeueHaasGroteskTextPro-s.p.3b8d8eef.woff2',
  'outfit.hellohello.is/_next/static/media/NeueHaasGroteskTextPro_Medium-s.p.26ed73d7.woff2',
  'outfit.hellohello.is/_next/static/media/NeueHaasGroteskTextPro_Bold-s.p.d9a7309d.woff2',
];

async function download(url, dest) {
  const fileURL = new URL(dest, PUBLIC);
  await mkdir(dirname(fileURL.pathname), { recursive: true });
  if (existsSync(fileURL.pathname)) { return { url, dest, skipped: true }; }
  const res = await fetch(`https://${url}`);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(fileURL, buf);
  return { url, dest, bytes: buf.length };
}

async function batch(items, n = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += n) {
    const slice = items.slice(i, i + n);
    const batch = await Promise.allSettled(slice.map(([u, d]) => download(u, d)));
    batch.forEach((r, idx) => {
      if (r.status === 'fulfilled') {
        const v = r.value;
        console.log(v.skipped ? 'skip' : 'ok', v.bytes ?? '', v.dest);
      } else {
        console.error('FAIL', slice[idx][0], r.reason?.message);
      }
      results.push(r);
    });
  }
  return results;
}

const work = [
  ...images.map(u => [u, `images/products/${u.split('/').pop()}`]),
  ...fonts.map(u => [u, `fonts/${u.split('/').pop()}`]),
];

await batch(work, 6);
console.log('Done.');
