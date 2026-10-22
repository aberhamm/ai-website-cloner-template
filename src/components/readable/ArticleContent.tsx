import Image from "next/image";
import type { ReadableArticle } from "@/data/readable-articles";
import "./ArticleContent.css";

export function ArticleContent({ article }: { article: ReadableArticle }) {
  return (
    <article className="readable-article">
      <header className="article-top">
        <div className="article-intro" data-motion="rise">
          <h1>{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <div className="article-author">
            <Image
              src={article.portrait}
              alt={article.author}
              width={56}
              height={56}
              className="article-portrait"
            />
            <div>
              <p className="article-author-name">
                {article.author}
                <Image
                  src="/readable/dvZn9oEAQvjk4bBLGEcxyncfDc.svg"
                  alt="Verified author"
                  width={14}
                  height={14}
                />
              </p>
              <p className="article-author-role">{article.role}</p>
            </div>
          </div>
        </div>
        <Image
          src={article.image}
          alt={article.title}
          width={900}
          height={600}
          className="article-cover"
          loading="eager"
          data-motion="rise"
        />
      </header>
      <div className="article-sections">
        {article.sections.map((section) => (
          <section
            className="article-section"
            key={section.label}
            data-motion="rise"
          >
            <div className="article-section-top">
              <span className="article-section-label">{section.label}</span>
              <h2>{section.heading}</h2>
            </div>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
