import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA, Glow, Nav } from "./Hero";
import { Footer } from "./Footer";
import { Motion } from "./Motion";
import { WordHeading } from "./WordHeading";
import "./BlogIndex.css";

const articles = [
  {
    title: "Why Your Mood Deserves Better Content",
    description:
      "Your state of mind changes—and your reading list should change with it.",
    image: "YtBNnctAaK8lfsFbQ75lrDNZ2o.png",
    slug: "why-your-mood-deserves-better-content",
    color: "lavender",
  },
  {
    title: "Article Summaries That Make Sense",
    description:
      "Save time, skip the fluff, and get straight to what matters with AI.",
    image: "ZAYWdkz5FfXxjVTZea2UrR2ka4.png",
    slug: "article-summaries-that-make-sense",
    color: "pink",
  },
  {
    title: "Why Scrolling Is Out and Speaking Is In",
    description:
      "Discover how voice-powered search is reshaping the way we read articles.",
    image: "5cN3ZeEcXxbQ3ldWSVp5N2UkPY.png",
    slug: "why-scrolling-is-out-and-speaking-is-in",
    color: "blue",
  },
  {
    title: "How To Do Online Dating As Weebs",
    description:
      "Is Sharing Anime Love a Match Made in Heaven? Feel free to check it out.",
    image: "ODqFvAtsFJ7r6eNp2bdHjpxHnz4.png",
    slug: "how-to-do-online-dating-as-weebs",
    color: "lavender",
  },
];

export function BlogIndex() {
  return (
    <>
      <Motion />
      <Nav />
      <main className="readable-blog-index">
        <section className="blog-index-hero" aria-labelledby="blog-index-title">
          <div className="blog-index-panel">
            <Glow />
            <div
              data-motion="fade"
              data-motion-trigger="mount"
              className="blog-index-heading"
            >
              <div className="blog-index-eyebrow">
                <span>
                  <Image
                    src="/readable/s2MHfZebUoon0iQxB2MiLlw6S0.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  Blog
                </span>
              </div>
              <WordHeading id="blog-index-title">
                Seamless Activity Planning with Voice-Activated AI
              </WordHeading>
              <p>
                Our pre recorded sessions contain all the essentials to help you
                fix your mood in few sessions
              </p>
            </div>
          </div>
        </section>
        <section className="blog-index-grid" aria-label="Articles">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog-index/${article.slug}`}
              className={`blog-index-card blog-index-${article.color}`}
              data-motion="rise"
              data-motion-trigger="mount"
              data-motion-delay="0.6"
            >
              <div className="blog-index-card-copy">
                <div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
                <span className="blog-index-read-more">
                  Read More
                  <span aria-hidden="true"><ArrowUpRight size={20} /></span>
                </span>
              </div>
              <Image
                src={`/readable/${article.image}`}
                width={524}
                height={524}
                alt=""
                className="blog-index-illustration"
              />
            </Link>
          ))}
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
