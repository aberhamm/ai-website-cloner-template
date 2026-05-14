"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const PRIMARY_LINKS = [
  { label: "Shop", href: "/" },
  { label: "Bag (0)", href: "/bag" },
];

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={cn(
        "fixed inset-0 z-[2] flex h-dvh w-full items-stretch justify-center bg-black text-white red:bg-red red:text-white dark:bg-cream dark:text-black transition-opacity duration-500 ease-out",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="flex h-dvh w-full flex-col justify-between px-4 py-8 lg:px-6">
        <div className="flex items-start justify-between">
          <ul className="flex flex-col gap-2 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {PRIMARY_LINKS.map((link) => (
              <li key={link.href}>
                <a className="link-hover" href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onClose}
            className="link-hover text-2xl"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-2 items-end gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="font-bold">++hellohello</p>
            <p>© 2026</p>
          </div>
          <div>
            <p>Libertad 2529</p>
            <p>Office 102</p>
            <p>Montevideo, Uruguay.</p>
          </div>
          <div className="hidden flex-col gap-1 md:flex">
            <a className="link-hover" href="https://instagram.com/hellohello.is">
              Instagram
            </a>
            <a className="link-hover" href="https://dribbble.com/hellohello">
              Dribbble
            </a>
            <a className="link-hover" href="mailto:hello@hellohello.is">
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
