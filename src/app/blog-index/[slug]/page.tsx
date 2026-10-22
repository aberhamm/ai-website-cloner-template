import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readableArticles } from "@/data/readable-articles";
import { ArticleContent } from "@/components/readable/ArticleContent";
import { Nav, CTA } from "@/components/readable/Hero";
import { Blog } from "@/components/readable/Blog";
import { Footer } from "@/components/readable/Footer";
import { Motion } from "@/components/readable/Motion";
export const dynamicParams = false;
export function generateStaticParams() {
  return readableArticles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = readableArticles.find((article) => article.slug === slug);
  return article
    ? { title: article.title + " — Readable", description: article.description }
    : {};
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = readableArticles.find((article) => article.slug === slug);
  if (!article) notFound();
  return (
    <>
      <Motion />
      <Nav />
      <main>
        <ArticleContent article={article} />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
