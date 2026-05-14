"use client";

import { useState } from "react";
import Link from "next/link";
import { PlusPlusLogo } from "@/components/icons";
import { MenuDrawer } from "@/components/MenuDrawer";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-[3] flex w-full items-center justify-between text-white mix-blend-difference red:text-[oklab(0.73_-0.14_-0.1)]">
        <div className="mx-auto flex w-full items-center justify-between px-4 py-8 lg:px-6">
          <Link href="/" className="mr-2 lg:mr-6" aria-label="OUTFIT home">
            <PlusPlusLogo />
            <span className="sr-only">OUTFIT®</span>
          </Link>

          <div className="flex items-center gap-6 text-2xl lg:gap-8">
            <Link href="/" className="link-hover is-active">
              Shop
            </Link>
            <Link href="/bag" className="link-hover">
              Bag (0)
            </Link>
            <button
              type="button"
              className="link-hover min-w-[2.625rem] cursor-pointer text-left"
              onClick={() => setMenuOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
