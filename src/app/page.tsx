import { HeroSection } from "@/components/HeroSection";
import { ProductGrids } from "@/components/ProductGrids";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main id="page">
      <HeroSection />
      <ProductGrids />
      <SiteFooter />
    </main>
  );
}
