import Image from "next/image";

interface BlogPost {
  image: string;
  category: string;
  title: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    image: "/images/mymind/newquicknote.jpg",
    category: "New Features",
    title: "The new Quick Note",
  },
  {
    image: "/images/mymind/blog-human-endeavor.jpg",
    category: "Thoughts",
    title: "On the human endeavor, building a brand & old Apple",
  },
  {
    image: "/images/mymind/blog-posters.jpg",
    category: "Uncategorized",
    title: "On posters, silence & watering your own grass",
  },
];

export function BlogSection() {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:py-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={533}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              {/* Category */}
              <p
                className="mt-4"
                style={{
                  fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#FF5924",
                }}
              >
                {post.category}
              </p>

              {/* Title */}
              <h3
                className="mt-2"
                style={{
                  fontFamily:
                    "var(--font-neue-haas), 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "30px",
                  color: "#000",
                }}
              >
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
