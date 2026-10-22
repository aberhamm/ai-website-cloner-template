"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("folio-theme", callback);
  return () => window.removeEventListener("folio-theme", callback);
}

function currentTheme() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  window.dispatchEvent(new Event("folio-theme"));
}

export function FolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dark = useSyncExternalStore(subscribeToTheme, currentTheme, () => true);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        applyTheme(savedTheme === "dark");
      }
    } catch {
      // Theme controls still work when storage is unavailable.
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  function chooseTheme(nextDark: boolean) {
    applyTheme(nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // Keep the chosen theme for this page when storage is unavailable.
    }
  }

  return (
    <header>
      <nav className="fixed z-20 w-full px-2" data-state={menuOpen ? "active" : "false"}>
        <div className={`mx-auto mt-2 px-6 transition-all duration-300 ${scrolled ? "max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5" : "max-w-6xl lg:px-12"}`}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link aria-label="Folio home" className="flex items-center gap-2" href="/">
                <img alt="Folio" className="object-contain dark:invert size-8 folio-s0" decoding="async" height="64" loading="lazy" src="/folio/logo.png" width="64" />
                <span className="font-semibold text-foreground text-sm">
{"Folio"}
                </span>
              </Link>
              <button aria-label={menuOpen ? "Close Menu" : "Open Menu"} aria-expanded={menuOpen} aria-controls="folio-mobile-menu" onClick={() => setMenuOpen(!menuOpen)} className="-m-2.5 -mr-4 relative z-20 block cursor-pointer p-2.5 lg:hidden" type="button">
                <svg className="lucide lucide-menu m-auto size-6 duration-200 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
                <svg className="lucide lucide-x -rotate-180 absolute inset-0 m-auto size-6 scale-0 opacity-0 duration-200 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                <li>
                  <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/#features" onClick={() => setMenuOpen(false)}>
                    <span>
{"Features"}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/#solution" onClick={() => setMenuOpen(false)}>
                    <span>
{"Solution"}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/pricing" onClick={() => setMenuOpen(false)}>
                    <span>
{"Pricing"}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/#about" onClick={() => setMenuOpen(false)}>
                    <span>
{"About"}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div id="folio-mobile-menu" className="mb-6 hidden w-full flex-wrap items-stretch justify-end gap-6 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:items-center lg:gap-6 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <li>
                    <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/#features" onClick={() => setMenuOpen(false)}>
                      <span>
{"Features"}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/#solution" onClick={() => setMenuOpen(false)}>
                      <span>
{"Solution"}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/pricing" onClick={() => setMenuOpen(false)}>
                      <span>
{"Pricing"}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="block text-muted-foreground duration-150 hover:text-accent-foreground" href="/#about" onClick={() => setMenuOpen(false)}>
                      <span>
{"About"}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
                <div aria-label="Toggle Theme" className="relative flex items-center rounded-full p-1 ring-1 ring-border self-start sm:self-auto" data-theme-toggle="">
                  <button aria-label="Light theme" aria-pressed={!dark} onClick={() => chooseTheme(false)} className={`relative size-6.5 rounded-full p-1.5 text-fd-muted-foreground ${!dark ? "text-fd-accent-foreground" : ""}`} type="button">
                    {!dark && <div className="absolute inset-0 rounded-full bg-accent folio-s1" />}
                    <svg className="lucide lucide-sun relative m-auto size-full" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  </button>
                  <button aria-label="Dark theme" aria-pressed={dark} onClick={() => chooseTheme(true)} className={`relative size-6.5 rounded-full p-1.5 text-fd-muted-foreground ${dark ? "text-fd-accent-foreground" : ""}`} type="button">
                    {dark && <div className="absolute inset-0 rounded-full bg-accent folio-s1" />}
                    <svg className="lucide lucide-moon relative m-auto size-full" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  </button>
                </div>
                <a className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-border dark:bg-input/30 dark:hover:bg-input/50 h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5 w-full sm:w-auto${scrolled ? " lg:hidden" : ""}`} data-slot="button" onClick={() => setMenuOpen(false)} href="#">
                  <span>
{"Login"}
                  </span>
                </a>
                <a className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5 w-full sm:w-auto${scrolled ? " lg:hidden" : ""}`} data-slot="button" onClick={() => setMenuOpen(false)} href="/pricing">
                  <span>
{"Sign Up"}
                  </span>
                </a>
                <a className={`shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5 hidden${scrolled ? " lg:inline-flex" : ""}`} data-slot="button" onClick={() => setMenuOpen(false)} href="/pricing">
                  <span>
{"Get Started"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
