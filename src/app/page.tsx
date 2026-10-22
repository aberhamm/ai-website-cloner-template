import { Nav, Hero, CTA } from "@/components/readable/Hero";
import { HowItWorks } from "@/components/readable/HowItWorks";
import { Features } from "@/components/readable/Features";
import { WhyChooseUs } from "@/components/readable/WhyChooseUs";
import { Testimonials } from "@/components/readable/Testimonials";
import { Footer } from "@/components/readable/Footer";
import { Blog } from "@/components/readable/Blog";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
