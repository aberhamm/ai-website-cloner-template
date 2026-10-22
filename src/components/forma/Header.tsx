import Link from "next/link";
export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-20 bg-transparent backdrop-blur-none transition-[background-color,backdrop-filter] duration-300 ease-in-out data-[scrolled=true]:bg-white/30 data-[scrolled=true]:backdrop-blur-[24px]"
      data-scrolled="false"
    >
      <div className="mx-auto w-full max-w-[1600px] px-gutter flex min-h-[52px] items-center justify-between py-2 max-mobile:min-h-14 max-mobile:px-4">
        <Link
          className="inline-flex max-mobile:[&_.brand-mark]:w-[34px]"
          aria-label="Forma, home"
          href="/"
        >
          <span className="inline-flex items-center gap-3 text-[28px]/9 font-semibold tracking-[-0.05em] max-mobile:gap-1.5 max-mobile:text-[26px] max-[361px]:text-2xl/9">
            <span className="brand-mark" aria-hidden="true"></span>
            <span>{"forma"}</span>
          </span>
        </Link>
        <nav
          className="flex items-center gap-6 text-sm/4 max-mobile:hidden"
          aria-label="Main navigation"
        >
          <a
            className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-control-hover focus-visible:bg-control-hover"
            href="#classes"
          >
            {"Classes"}
          </a>
          <a
            className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-control-hover focus-visible:bg-control-hover"
            href="#schedule"
          >
            {"Schedule"}
          </a>
          <a
            href="#schedule"
            data-slot="button"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2"
            tabIndex={0}
          >
            {"Book a class "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </nav>
        <div className="hidden max-mobile:flex max-mobile:items-center max-mobile:gap-2 max-[361px]:gap-0.5">
          <a
            href="#schedule"
            data-slot="button"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-transparent font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] gap-2 p-3 text-xs"
            tabIndex={0}
          >
            {"Book a class "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <button
            data-slot="sheet-trigger"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-transparent font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-transparent hover:bg-foreground/4 focus-visible:bg-foreground/4 size-9 p-2 gap-2 text-xs"
            aria-label="Open menu"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            data-state="closed"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
