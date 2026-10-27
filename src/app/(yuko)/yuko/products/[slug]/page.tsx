import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/yuko/Header";
import { Footer } from "@/components/yuko/Footer";
import { ProbioticsContent } from "@/components/yuko/ProbioticsContent";
import { HandLotionContent } from "@/components/yuko/HandLotionContent";
import { HairGrowthContent } from "@/components/yuko/HairGrowthContent";
import { products } from "@/types/product";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  return {
    title: p ? `${p.name} — YukoHealth` : "Product not found",
    description: p?.longDescription,
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!products.some((p) => p.slug === slug)) notFound();
  return (
    <div
      className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-gutter pt-15 pb-6 md:pt-12 md:pb-4"
      id="top"
    >
      <a
        className="fixed top-3 left-3 z-30 -translate-y-[150%] rounded-3xl bg-foreground px-5 py-3 text-white focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      {slug === "probiotics" ? (
        <ProbioticsContent />
      ) : slug === "hand-lotion" ? (
        <HandLotionContent />
      ) : (
        <HairGrowthContent />
      )}
      <Footer />
    </div>
  );
}
