import Image from "next/image";
import "./Features.css";

const asset = (name: string) => `/readable/${name}`;

export function Features() {
  return (
    <section
      id="features"
      className="section readable-features"
      aria-labelledby="features-title"
    >
      <div className="container">
        <div
          data-motion="rise"
          className="section-heading readable-features-heading"
        >
          <div className="eyebrow">
            <span>
              <Image
                src={asset("0fnpgGw2fQQkJod5JVuxzWjDnk.svg")}
                width={24}
                height={24}
                alt=""
              />
              Features
            </span>
          </div>
          <div className="readable-features-heading-row">
            <h2 id="features-title">
              Effortless Learning with Voice-Activated AI
            </h2>
            <p>
              From hands-free voice interaction to tailored article summaries
            </p>
          </div>
        </div>
        <div className="readable-features-bento">
          <article
            data-motion="rise"
            data-motion-delay="0.2"
            className="readable-feature-smart"
          >
            <Image
              className="readable-feature-gradient"
              src={asset("UH0Ycf3jr6Lbwyn8QMDSBsNX2GY.png")}
              width={1287}
              height={1287}
              alt=""
            />
            <div className="readable-feature-smart-content">
              <div>
                <span className="readable-feature-label">
                  Smart Recommendations
                </span>
                <h3>Discover articles that matter most to you</h3>
                <p className="readable-feature-description">
                  with our intelligent algorithm that learns your interests and
                  delivers personalized content daily.
                </p>
              </div>
              <div className="readable-feature-points">
                <div className="readable-feature-point">
                  <span className="readable-feature-icon">
                    <Image
                      src={asset("z9cXo6fU25tjyawzoutWH7CXpc.png")}
                      width={32}
                      height={32}
                      alt=""
                    />
                  </span>
                  <h4>Private &amp; Secure</h4>
                  <p>
                    Your data stays yours. We prioritize your privacy with
                    secure processing and no tracking
                  </p>
                </div>
                <div className="readable-feature-point">
                  <span className="readable-feature-icon">
                    <Image
                      src={asset("7awLmRRK8Tg4R6OYASzKUphIy8.svg")}
                      width={32}
                      height={32}
                      alt=""
                    />
                  </span>
                  <h4>Personalized Feed</h4>
                  <p>
                    Our AI learns what you like and curates a custom feed of
                    articles, so you&apos;re always reading.
                  </p>
                </div>
              </div>
            </div>
            <Image
              className="readable-feature-smart-phone"
              src={asset("caIbuA14IPud7VuW2KKgPE7Tg08.png")}
              width={393}
              height={852}
              alt="Readable personalized article recommendations"
            />
          </article>
          <span
            className="readable-features-joint"
            data-motion="scale"
            data-motion-delay="0.6"
            data-motion-threshold="1"
            data-motion-loop="true"
          >
            <Image
              src={asset("m6i9HHtWPD7nb4cfZVIkXpxDWoI.png")}
              width={67}
              height={67}
              alt=""
            />
          </span>
          <div className="readable-features-bottom">
            <article
              data-motion="rise"
              data-motion-delay="0.2"
              className="readable-feature-card readable-feature-voice"
            >
              <h3>Voice Assistant Built-In</h3>
              <p className="readable-feature-description">
                Talk, don&apos;t type. Our hands-free voice assistant makes it
                easy to search, summarize, and interact.
              </p>
              <Image
                className="readable-feature-card-phone"
                src={asset("MmTpUfyObppRM1jgYT1mX4ihc40.png")}
                width={393}
                height={852}
                alt="Readable voice assistant article view"
              />
            </article>
            <article
              data-motion="rise"
              data-motion-delay="0.4"
              className="readable-feature-card readable-feature-summary"
            >
              <h3>On-Demand Summaries</h3>
              <p className="readable-feature-description">
                Pressed for time? Get clear, concise summaries of any article,
                tailored to your needs or deep dives.
              </p>
              <Image
                className="readable-feature-card-phone"
                src={asset("lGXalFq0h2cU7KSIRP6XgYOPCC4.png")}
                width={393}
                height={852}
                alt="Readable AI article summary"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
