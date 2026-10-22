import productData from "@/data/products.json";
export type Product = (typeof productData)[number];
export type PurchaseMode = "one-time" | "subscription";
export type SubscriptionFrequency = "monthly" | "bi-weekly";
export interface CartItem {
  id: string;
  quantity: number;
  purchaseMode: PurchaseMode;
  subscriptionFrequency?: SubscriptionFrequency;
}
export const products: Product[] = productData;
export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}
