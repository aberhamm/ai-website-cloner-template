"use client";
import { useState } from "react";
export function Footer() {
  const [message, setMessage] = useState("");
  return (
    <>
      <footer className="mt-section flex flex-col gap-6">
        <div className="grid grid-cols-1 [&>*]:min-w-0 min-h-64 gap-7 rounded-card bg-surface px-6 pt-7 pb-8 max-[360px]:px-[18px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-8 md:p-8 xl:grid-cols-3 xl:gap-column xl:p-0 xl:pb-20">
          <h2 className="text-2xl leading-8 tracking-[-0.03em] xl:p-8">
            {"Good things,"}
            <br />
            {"occasionally."}
          </h2>
          <div className="text-[13px] leading-6 xl:py-8">
            <p>
              {"News from YukoHealth, new additions and things"}
              <br className="max-[1199px]:hidden" />
              {" we think you’ll enjoy. A note now and then."}
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setMessage(
                  "Thanks for your interest. Newsletter signup is coming soon.",
                );
              }}
              className="mt-5 min-[768px]:mt-6"
            >
              <div className="flex min-h-10 items-center gap-1 rounded-full bg-white p-1 pl-3 focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-focus md:gap-2 md:pl-4">
                <label className="sr-only" htmlFor="newsletter-email">
                  {"Your email address"}
                </label>
                <input
                  onChange={() => setMessage("")}
                  id="newsletter-email"
                  type="email"
                  className="min-w-0 flex-1 border-0 bg-transparent text-base leading-6 outline-0 placeholder:text-xs placeholder:text-muted placeholder:opacity-100 max-md:w-full md:text-[13px] md:placeholder:text-[13px]"
                  placeholder="Your email address"
                  required={true}
                  autoComplete="email"
                  name="email"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-foreground text-white hover:bg-[#454545] max-md:px-3"
                  tabIndex={0}
                >
                  {"Subscribe"}
                </button>
              </div>
              <output
                aria-live="polite"
                className="not-empty:block not-empty:px-1 not-empty:pt-3 not-empty:text-muted"
              >
                {message}
              </output>
            </form>
          </div>
          <div className="flex justify-start gap-12 text-[13px] leading-6 md:col-start-2 md:gap-16 xl:col-auto xl:justify-end xl:gap-10 xl:p-8 [&_a]:hover:underline [&_a]:hover:underline-offset-[3px] max-md:[&_a]:flex max-md:[&_a]:min-h-8 max-md:[&_a]:items-center">
            <nav
              className="flex flex-col items-start gap-0 md:gap-2"
              aria-label="Explore"
            >
              <a href="#shop">{"Shop"}</a>
              <a href="#science">{"Science"}</a>
              <a href="#about">{"About"}</a>
            </nav>
            <nav
              className="flex flex-col items-start gap-0 md:gap-2"
              aria-label="Support"
            >
              <a href="mailto:contact@example.invalid">{"Contact"}</a>
              <a href="#shipping">{"Shipping & returns"}</a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                {"Instagram ↗"}
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 px-1 text-[13px] leading-6 text-muted md:flex-row md:gap-6 md:px-0">
          <p>{"© 2026 YukoHealth"}</p>
          <nav className="flex gap-6" aria-label="Legal">
            <a href="https://yukohealth-storefront-v1.21st.app/privacy">
              {"Privacy"}
            </a>
            <a href="https://yukohealth-storefront-v1.21st.app/terms">
              {"Terms"}
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
