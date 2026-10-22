import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "YukoHealth — For the days you live in",
  description: "Daily supplements and hand care. Explore a thoughtfully chosen range of probiotics, hand lotion and hair supplements, and find what fits your routine.",
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
