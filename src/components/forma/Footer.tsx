/* eslint-disable @next/next/no-img-element */
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-gutter flex flex-col gap-10 py-10 max-mobile:gap-8 max-mobile:py-8">
        <a
          className="inline-flex max-mobile:[&_.brand-mark]:w-[34px]"
          aria-label="Forma, home"
          href="/"
        >
          <span className="inline-flex items-center gap-3 text-[28px]/9 font-semibold tracking-[-0.05em] max-mobile:gap-1.5 max-mobile:text-[26px] max-[361px]:text-2xl/9">
            <span className="brand-mark" aria-hidden="true"></span>
            <span>{"forma"}</span>
          </span>
        </a>
        <div className="flex justify-between gap-8 max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-5">
          <nav
            className="flex gap-8 text-[13px]/5 max-mobile:flex-col max-mobile:items-start max-mobile:gap-1 max-mobile:text-[15px]/6"
            aria-label="Studio links"
          >
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              data-state="closed"
              data-slot="dialog-trigger"
              className="border-0 bg-transparent p-0 underline-offset-4 hover:underline max-mobile:inline-flex max-mobile:min-h-8 max-mobile:items-center max-mobile:text-left"
            >
              {"Instagram"}
            </button>
            <a
              className="underline-offset-4 hover:underline max-mobile:inline-flex max-mobile:min-h-8 max-mobile:items-center max-mobile:text-left"
              href="mailto:hello@formapilates.example"
            >
              {"Contact"}
            </a>
            <a
              className="underline-offset-4 hover:underline max-mobile:inline-flex max-mobile:min-h-8 max-mobile:items-center max-mobile:text-left"
              href="https://www.google.com/maps/search/?api=1&query=145+Westwood+Avenue+Austin+TX+78704"
              target="_blank"
              rel="noreferrer"
            >
              {"Directions"}
            </a>
          </nav>
          <nav
            className="flex gap-8 text-[13px]/5 max-mobile:flex-col max-mobile:items-start max-mobile:gap-1 max-mobile:text-[15px]/6"
            aria-label="Policies"
          >
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              data-state="closed"
              data-slot="dialog-trigger"
              className="border-0 bg-transparent p-0 underline-offset-4 hover:underline max-mobile:inline-flex max-mobile:min-h-8 max-mobile:items-center max-mobile:text-left"
            >
              {"Privacy"}
            </button>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              data-state="closed"
              data-slot="dialog-trigger"
              className="border-0 bg-transparent p-0 underline-offset-4 hover:underline max-mobile:inline-flex max-mobile:min-h-8 max-mobile:items-center max-mobile:text-left"
            >
              {"Terms"}
            </button>
            <button
              className="border-0 bg-transparent p-0 underline-offset-4 hover:underline max-mobile:inline-flex max-mobile:min-h-8 max-mobile:items-center max-mobile:text-left"
              type="button"
            >
              {"Cancellation policy"}
            </button>
          </nav>
        </div>
        <p className="text-[13px]/5 text-muted-foreground max-mobile:mt-2">
          {"© 2026 "}
          {"Forma Pilates Studio"}
        </p>
      </div>
    </footer>
  );
}
