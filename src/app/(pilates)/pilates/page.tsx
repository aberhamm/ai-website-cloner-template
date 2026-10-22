import { Header } from "@/components/forma/Header";
import { Hero } from "@/components/forma/Hero";
import { Difference } from "@/components/forma/Difference";
import { Classes } from "@/components/forma/Classes";
import { Schedule } from "@/components/forma/Schedule";
import { Pricing } from "@/components/forma/Pricing";
import { Instructors } from "@/components/forma/Instructors";
import { Testimonials } from "@/components/forma/Testimonials";
import { Visit } from "@/components/forma/Visit";
import { FAQ } from "@/components/forma/FAQ";
import { Intro } from "@/components/forma/Intro";
import { Footer } from "@/components/forma/Footer";
import { Interactions } from "@/components/forma/Interactions";

export default function Home() {
  return (
    <Interactions>
      <a href="#main" className="forma-skip">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Difference />
        <Classes />
        <Schedule />
        <Pricing />
        <Instructors />
        <Testimonials />
        <Visit />
        <FAQ />
        <Intro />
      </main>
      <Footer />
    </Interactions>
  );
}
