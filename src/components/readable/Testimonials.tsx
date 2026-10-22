import Image from "next/image";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "“This app changed how I read. It finds the right content without me lifting a finger. I don’t waste time anymore—just speak, and it delivers. Super intuitive and honestly addictive.”",
    name: "Draco Washington",
    role: "Product Designer",
    portrait: "/readable/wjz5X5w39pFJufed6tclHevfarY.png",
  },
  {
    quote:
      '“I just talk and boom—something relevant and surprisingly deep every time. It feels like the app really listens. The results are spot-on, never random. I highly recommend it"',
    name: "Harry James",
    role: "College Student",
    portrait: "/readable/fGMII2DZxHfMG5shcSEK1AnhYvw.png",
  },
  {
    quote:
      "“Finally, no more endless scrolling. It brings exactly what I want to read in seconds. I use it during work breaks to stay sharp without zoning out. The perfect mix of ease and intelligence.”",
    name: "Harry James",
    role: "Software Engineer",
    portrait: "/readable/z8HX4TxnpdwjkNU0ggAXymzcOg.jpg",
  },
  {
    quote:
      "“I love how it matches articles with my mood. It's like it actually gets me. Even on rough days, it recommends something that lifts me up. Way more personal than any app I’ve used.”",
    name: "Chris Roman",
    role: "Copywriter",
    portrait: "/readable/pEuH6A7oLEFb7FXtrQeRR85y8.png",
  },
  {
    quote:
      "“Voice input makes everything so fast. I use it while I cook, walk, or just chill. It’s hands-free, stress-free, and super smart. I can’t imagine going back to typing searches.”",
    name: "Jack Hammer",
    role: "UX Intern",
    portrait: "/readable/I61QNxVc6uFejjoLGHJHnP1oE.jpg",
  },
  {
    quote:
      "“Simple design, no ads, and content that fits me better than any news app I’ve tried. It’s clean, quick, and always relevant. I feel like it’s made for people like me.”",
    name: "Sheldon Nimoy",
    role: "Marketer",
    portrait: "/readable/nSoxT2I1tjWrBHGXgDrJKSqN99w.png",
  },
  {
    quote:
      "“I discovered niche articles I’d never find on my own. It feels tailored and fresh. Even the summaries are surprisingly detailed. It’s like having a personal content scout.”",
    name: "Lara Cooper",
    role: "Content Creator",
    portrait: "/readable/jkhqSIjKPCryk6IyE7etXBbHis4.png",
  },
  {
    quote:
      "“Sometimes I don’t even know what I want to read. This app figures it out for me. It reads my tone and finds something that matches it. Every session feels effortless and curated.”",
    name: "Duke Page",
    role: "Fitness Trainer",
    portrait: "/readable/jKYaRrUffvKWAyq2Elqcr1i3cLU.jpg",
  },
  {
    quote:
      "“It understands natural speech so well—it’s like chatting with a smart, chill friend. There’s no pressure to search the ‘right’ way. And the voice experience is buttery smooth.”",
    name: "Penny Potter",
    role: "Data Analyst",
    portrait: "/readable/9udeXbXCRtr2FaF78UvkqLcMzc.png",
  },
  {
    quote:
      "“I send summaries to my friends all the time. They’re quick, smart, and share-worthy. It saves me from info overload while still learning stuff. Feels like a shortcut to knowledge.”",
    name: "Ron Downey",
    role: "Research Assistant",
    portrait: "/readable/zWDQkwvDwvaParUnJMokuUcNYI.png",
  },
  {
    quote:
      "“I never thought I’d enjoy an AI app this much. It’s part of my daily routine now. Even the interface feels calming and fun. I look forward to using it every day.”",
    name: "Steve Zuckerberg",
    role: "Tech Blogger",
    portrait: "/readable/dGKUMTYbIiN4M5d9219fOlDKI.jpg",
  },
  {
    quote:
      "“Perfect for lazy readers like me who still want to learn something every day. It keeps things short, sharp, and digestible. Honestly, it makes me feel smarter.”",
    name: "Mark Jobs",
    role: "Law Student",
    portrait: "/readable/GS7HuOVJOBQp6fKrWKy8uGltpc.png",
  },
] as const;

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure className="testimonial-card">
      <blockquote>{item.quote}</blockquote>
      <figcaption>
        <div>
          <p className="testimonial-name">
            {item.name}
            <svg aria-label="Verified user" viewBox="0 0 20 20">
              <path
                d="m10 0 2.6 2 3.3.1 1 3.2 2.6 2-1.2 3.1.1 3.3-3.1 1.1-2 2.6-3.2-1.1-3.2 1.1-2-2.6L1.8 14l.1-3.3L.7 7.6l2.6-2 1-3.2L7.6 2Z"
                fill="currentColor"
              />
              <path
                d="m6 9.8 2.5 2.4L14 7"
                fill="none"
                stroke="white"
                strokeWidth="1.7"
              />
            </svg>
          </p>
          <p className="testimonial-role">{item.role}</p>
        </div>
        <Image src={item.portrait} alt={item.name} width={56} height={56} />
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section
      className="section readable-testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container testimonials-container">
        <div
          data-motion="rise"
          className="section-heading testimonials-heading"
        >
          <div className="eyebrow">
            <span>
              <Image
                src="/readable/5Ieu0U5tFQEs0CRkbbuDNIlOE.svg"
                alt=""
                width={24}
                height={24}
              />
              Testimonials
            </span>
          </div>
          <div className="testimonials-heading-row">
            <h2 id="testimonials-title">What Our Users Are Saying</h2>
            <p>
              From daily readers to curious minds—hear how our AI-powered
              article app is changing the way people discover and enjoy content.
            </p>
          </div>
        </div>
        <div className="testimonials-panel">
          <div className="testimonials-lanes">
            {[0, 1, 2].map((lane) => (
              <div
                data-motion={lane === 1 ? "lane-down" : "lane-up"}
                className={`testimonials-lane testimonials-lane-${lane}`}
                key={lane}
              >
                <div className="testimonials-track">
                  {[0, 1].map((copy) => (
                    <div
                      className="testimonials-group"
                      key={copy}
                      aria-hidden={copy === 1 ? true : undefined}
                    >
                      {testimonials
                        .slice(lane * 4, lane * 4 + 4)
                        .map((item) => (
                          <TestimonialCard key={item.quote} item={item} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
