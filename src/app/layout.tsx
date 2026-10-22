import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Forma — Pilates, redefined",
  description: "Small-group reformer Pilates. Right here in South Austin.",
  icons: { icon: "/images/brand-mark.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
