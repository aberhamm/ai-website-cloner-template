"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import type { StudioDialog } from "@/types/forma";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

const classDetails: Record<string, StudioDialog> = {
  "Reformer Foundations": {
    title: "Reformer Foundations",
    subtitle: "Beginner · 50 minutes",
    description:
      "A welcoming introduction to the reformer. Learn the essentials of breath, alignment, and controlled movement with plenty of personal guidance.",
    action: "Find your class",
  },
  "Reformer Flow": {
    title: "Reformer Flow",
    subtitle: "All levels · 50 minutes",
    description:
      "A flowing, full-body session that connects thoughtful movement with breath. Build strength, explore your range, and leave feeling a little more like yourself.",
    action: "Find your class",
  },
  "Reformer Sculpt": {
    title: "Reformer Sculpt",
    subtitle: "Intermediate · 50 minutes",
    description:
      "A focused challenge for those comfortable on the reformer. Expect creative sequences, added resistance, and an emphasis on precise, intentional movement.",
    action: "Find your class",
  },
  "Private Pilates": {
    title: "Private Pilates",
    subtitle: "All levels · 55 minutes",
    description:
      "Dedicated one-on-one time with an instructor. We tailor the pace and movement to your experience and goals. Contact the studio to arrange your session.",
    action: "Arrange a private session",
  },
};
const menuLinks = [
  ["Classes", "classes"],
  ["Instructors", "instructors"],
  ["Schedule", "schedule"],
  ["Pricing", "pricing"],
  ["Visit the studio", "visit"],
  ["Your first class", "faq"],
];

export function Interactions({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<StudioDialog | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = document.querySelector("header");
    const onScroll = () =>
      header?.setAttribute("data-scrolled", String(window.scrollY > 20));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onDialog = (event: Event) =>
      setContent((event as CustomEvent<StudioDialog>).detail);
    window.addEventListener("forma:dialog", onDialog);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = document.querySelectorAll(
      "main h1, main h2, #classes button, #pricing article, #instructors article, blockquote",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("forma-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    if (!reduced)
      elements.forEach((el) => {
        el.classList.add("forma-reveal");
        observer.observe(el);
      });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("forma:dialog", onDialog);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (content) dialog.current?.showModal();
    else dialog.current?.close();
  }, [content]);
  useEffect(() => {
    if (menuOpen) menu.current?.showModal();
    else menu.current?.close();
    document
      .querySelector('[aria-label="Open menu"]')
      ?.setAttribute("aria-expanded", String(menuOpen));
  }, [menuOpen]);
  useEffect(() => {
    if (!content && !menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [content, menuOpen]);

  function onClick(event: MouseEvent<HTMLDivElement>) {
    const button = (event.target as HTMLElement).closest("button");
    if (!button || button.disabled) return;
    const label = button.textContent?.trim() ?? "";
    trigger.current = button;
    if (button.closest("#classes")) {
      const name = Object.keys(classDetails).find((name) =>
        label.startsWith(name),
      );
      if (name) setContent(classDetails[name]);
    } else if (button.getAttribute("aria-label") === "Open menu")
      setMenuOpen(true);
    else if (
      button.closest("main > section:first-child") ||
      button.closest("main > section:last-child")
    ) {
      setContent({
        title: "Your first three. A stronger start.",
        subtitle: "3 classes for $49",
        description:
          "New clients only. Use within 21 days. No experience needed. Contact the studio to book your first class.",
        action: "Find your class",
      });
    } else if (button.closest("footer")) {
      if (label === "Cancellation policy") {
        window.dispatchEvent(new Event("forma:faq-cancel"));
      } else {
        const descriptions: Record<string, string> = {
          Instagram:
            "Stay connected with Forma. Contact the studio for our latest news and updates.",
          Privacy:
            "Your privacy matters. Contact hello@formapilates.example with questions about your personal information. Booking information is handled by the studio's booking provider.",
          Terms:
            "Class bookings are subject to availability. Please cancel at least 12 hours before class. Late cancellations and missed classes use a class credit. New client offers are available once per person.",
        };
        setContent({
          title: label === "Privacy" ? "Privacy policy" : label,
          description:
            descriptions[label] || "Contact the studio for more information.",
        });
      }
    }
  }
  function closeDialog() {
    setContent(null);
    trigger.current?.focus();
  }
  function closeMenu() {
    setMenuOpen(false);
    trigger.current?.focus();
  }

  return (
    <div onClick={onClick}>
      {children}
      <dialog
        ref={dialog}
        className="forma-dialog"
        aria-labelledby="forma-dialog-title"
        aria-describedby="forma-dialog-description"
        onCancel={() => setContent(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
      >
        {content && (
          <div className="forma-dialog-content">
            <div className="flex flex-col gap-4 text-left">
              <h2
                id="forma-dialog-title"
                className="pr-4 text-[32px]/9 font-medium tracking-[-0.035em]"
              >
                {content.title}
              </h2>
              {content.subtitle && (
                <p className="text-[15px]/6 text-muted-foreground">
                  {content.subtitle}
                </p>
              )}
            </div>
            <p id="forma-dialog-description">{content.description}</p>
            {content.action && (
              <a
                className="forma-action"
                href={
                  content.action === "Find your class"
                    ? "#schedule"
                    : "mailto:hello@formapilates.example"
                }
                onClick={closeDialog}
              >
                {content.action}
                <ArrowUpRight size={16} />
              </a>
            )}
            <button
              type="button"
              className="forma-close"
              aria-label="Close"
              onClick={closeDialog}
            >
              <X size={16} />
            </button>
          </div>
        )}
      </dialog>
      <dialog
        ref={menu}
        className="forma-menu"
        aria-label="Menu"
        onCancel={() => setMenuOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
      >
        <button
          className="forma-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <X size={16} />
        </button>
        <nav aria-label="Mobile navigation">
          {menuLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
              <ArrowRight size={20} />
            </a>
          ))}
        </nav>
      </dialog>
    </div>
  );
}
