import { HeroSection } from '@/components/folio/HeroSection';
import { LogoCloud } from '@/components/folio/LogoCloud';
import { HowItWorks } from '@/components/folio/HowItWorks';
import { FeatureGrid } from '@/components/folio/FeatureGrid';
import { ShowcaseSection } from '@/components/folio/ShowcaseSection';
import { Testimonials } from '@/components/folio/Testimonials';
import { FaqSection } from '@/components/folio/FaqSection';
export default function HomePage() { return <main className="flex min-h-screen flex-col"><div className="min-h-screen"><HeroSection /><LogoCloud /><HowItWorks /><FeatureGrid /><ShowcaseSection /><Testimonials /><FaqSection /></div></main>; }
