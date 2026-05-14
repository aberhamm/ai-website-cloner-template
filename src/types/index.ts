export type ColorMode = "default" | "red" | "dark";

export interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  /** [defaultImage, hoverImage] — both rendered, hover swaps via opacity */
  images: [string, string];
  /** Optional Tailwind col-span classes for irregular grid layout */
  colSpan?: string;
  /** Optional aspect ratio for the image area (default 1/1) */
  aspectRatio?: string;
}

export interface ProductGrid {
  /** Tailwind grid template classes for this row */
  layout: string;
  products: Product[];
}
