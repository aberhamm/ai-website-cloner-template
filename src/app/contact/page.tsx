import type { Metadata } from "next";
import { Nav, CTA } from "@/components/readable/Hero";
import { ContactContent } from "@/components/readable/ContactContent";
import { Testimonials } from "@/components/readable/Testimonials";
import { Footer } from "@/components/readable/Footer";
import { Motion } from "@/components/readable/Motion";

export const metadata: Metadata = {
  title: "Contact | Readable",
  description: "Whether it’s a question, suggestion, or just a hello—drop it below.",
};

export default function ContactPage() {
  return (
    <>
      <Motion />
      <Nav />
      <main>
        <ContactContent />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
