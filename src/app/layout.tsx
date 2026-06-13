import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasGroteskTextPro-s.p.3b8d8eef.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskTextPro_Medium-s.p.26ed73d7.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskTextPro_Bold-s.p.d9a7309d.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mymind is the extension for your mind.",
  description:
    "A private place to save your most precious notes, images, quotes and highlights. Enhanced with AI to help you remember without wasting time on categorizing & organizing.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    title: "mymind is the extension for your mind.",
    description:
      "A private place to save your most precious notes, images, quotes and highlights.",
    images: ["/seo/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${neueHaas.variable} ${nunito.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
