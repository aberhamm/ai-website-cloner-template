import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HeaderVideo } from "@/components/HeaderVideo";
import { ManifestoSection } from "@/components/ManifestoSection";
import { PlatformIcons } from "@/components/PlatformIcons";
import { ExtensionSection } from "@/components/ExtensionSection";
import { AISection } from "@/components/AISection";
import { SearchSection } from "@/components/SearchSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { StatementSection } from "@/components/StatementSection";
import { BlogSection } from "@/components/BlogSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HeaderVideo />
        <ManifestoSection />
        <PlatformIcons />
        <ExtensionSection />
        <AISection />
        <SearchSection />
        <FeaturesSection />
        <ReviewsSection />
        <UseCasesSection />
        <StatementSection />
        <PlatformIcons />
        <BlogSection />
        <SiteFooter />
      </main>
    </>
  );
}
