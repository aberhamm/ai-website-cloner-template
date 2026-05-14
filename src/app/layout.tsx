import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { SiteHeader } from "@/components/SiteHeader";
import { ColorModeToggle } from "@/components/ColorModeToggle";
import { IntroLoader } from "@/components/IntroLoader";

const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasGroteskTextPro-s.p.3b8d8eef.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskTextPro_Medium-s.p.26ed73d7.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskTextPro_Bold-s.p.d9a7309d.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OUTFIT® by ++hellohello",
  description:
    "Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={neueHaas.variable}>
      <body className="red antialiased">
        <PageTransition>
          <SiteHeader />
          <ColorModeToggle />
          {children}
        </PageTransition>
        <IntroLoader />
      </body>
    </html>
  );
}
