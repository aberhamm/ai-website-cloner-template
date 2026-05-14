import type { Product, ProductGrid } from "@/types";

const img = (file: string) => `/images/products/${file}`;

export function getProductById(id: string): Product | undefined {
  for (const grid of productGrids) {
    const found = grid.products.find((p) => p.id === id);
    if (found) return found;
  }
  return undefined;
}

export function getAllProductIds(): string[] {
  return productGrids.flatMap((g) => g.products.map((p) => p.id));
}

export const productGrids: ProductGrid[] = [
  {
    layout: "mb-34 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6",
    products: [
      {
        id: "off-by-design",
        title: "Off by Design",
        price: "$33.00",
        category: "Apparel",
        images: [
          img("t-shirt-time-off-outfit_dfee3661-54e4-43ab-8d38-34388179952d.jpg"),
          img("t-shirt-time-off-outfit-2_6ed63e49-09af-4ab5-9994-7f1fef44c587.jpg"),
        ],
      },
      {
        id: "kerned-confidence",
        title: "Kerned Confidence",
        price: "$25.00",
        category: "Apparel",
        images: [
          img("cap-_-black-outfit_9a3389f2-3570-4130-8abc-c7d891c7c073.jpg"),
          img("cap-_-black-outfit-2_a4c86e6e-f97a-455c-ba4e-1bdca4ba2b86.jpg"),
        ],
      },
      {
        id: "specimen-no-hh01",
        title: "Specimen No. HH01",
        price: "$30.00",
        category: "Apparel",
        images: [
          img("jersey-red-square-outfit_d6d9ae9b-b22d-4eed-93e2-8b0913b773f4.jpg"),
          img("jersey-red-square-outfit-2_7d8ec371-d660-43a7-a08d-9ef1eb053caf.jpg"),
        ],
      },
      {
        id: "grid-system-go",
        title: "Grid System Go",
        price: "$30.00",
        category: "Apparel",
        images: [
          img("backpack-recycled-black-outfit-3_e9a01867-b304-4957-bb6f-e92759717401.jpg"),
          img("mochila1.jpg"),
        ],
      },
    ],
  },
  {
    layout: "mb-34 grid grid-cols-8 gap-6 md:grid-cols-16",
    products: [
      {
        id: "neutral-grotesk",
        title: "Neutral Grotesk",
        price: "$30.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [
          img("totebag-sayhello-outfit_f241d637-643f-473c-b0ee-82402efd800a.jpg"),
          img("totebag-sayhello-outfit-2.jpg"),
        ],
      },
      {
        id: "red-dot-not-award",
        title: "Red Dot Not Award",
        price: "$20.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [
          img("beanie-_-red-outfit_2c3b211f-1507-4f73-817f-2b124d7daa33.jpg"),
          img("beanie-_-red-outfit-PLSNOUSAR_d2a91372-9ff5-4285-bff4-4b44bb9b4ff8.jpg"),
        ],
      },
      {
        id: "gridlocked",
        title: "Gridlocked",
        price: "$25.00",
        category: "Apparel",
        colSpan: "col-span-8 col-start-9",
        images: [
          img("metalbag.jpg"),
          img("totebag-metal-outfit-2_e18d8c17-2359-4dc2-9bf1-80277d681c17.jpg"),
        ],
      },
    ],
  },
  {
    layout: "mb-34 grid grid-cols-8 gap-6 md:grid-cols-16",
    products: [
      {
        id: "hello-week-001",
        title: "Hello Week 001",
        price: "$30.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [
          img("t-shirt-hello-week-white-outfit.jpg"),
          img("t-shirt-hello-week-white-outfit-2_cc70839b-bea7-4957-9262-f38ff0e9f505.jpg"),
        ],
      },
      {
        id: "hello-week-002",
        title: "Hello Week 002",
        price: "$30.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [
          img("t-shirt-hello-week-dark-grey-outfit_ec196548-f6da-4682-8c5c-8714bd4ebdf5.jpg"),
          img("t-shirt-hello-week-dark-grey-outfit-2_08bdbb8f-02f4-401d-afed-f07a4d29930d.jpg"),
        ],
      },
      {
        id: "monochrome-manifest",
        title: "Monochrome Manifest",
        price: "$30.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [
          img("totebag-_-black-outfit_850aaa09-ee65-42d9-8236-9579f797a2db.jpg"),
          img("totebag-_-black-outfit-2.jpg"),
        ],
      },
    ],
  },
  {
    layout: "mb-34 grid grid-cols-8 gap-6 md:grid-cols-16",
    products: [
      {
        id: "positive-space",
        title: "Positive Space",
        price: "$30.00",
        category: "Apparel",
        colSpan: "col-span-5",
        images: [
          img("totebag-_-white-outfit_461af856-288d-4e39-9913-4ce3febba67d.jpg"),
          img("totebag-_-white-outfit-2.jpg"),
        ],
      },
      {
        id: "whitespace-matters",
        title: "Whitespace Matters",
        price: "$33.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [
          img("t-shirt-_-white-outfit.jpg"),
          img("t-shirt-_-white-outfit-2_0b43b5d9-98ff-4e64-ada9-a205c95b70f1.jpg"),
        ],
      },
      {
        id: "command-k",
        title: "Command + K",
        price: "$15.00",
        category: "Apparel",
        colSpan: "col-span-3",
        images: [img("keychain-_-black-outfit.jpg"), img("keychain-_-black-outfit-PLSNOUSAR.jpg")],
      },
    ],
  },
];
