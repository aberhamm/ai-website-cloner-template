"use client";

import { useState, useEffect } from "react";
import { MymindLogo } from "@/components/icons";

const NAV_LINKS = [
  { label: "What", dotColor: "#FF5924" },
  { label: "Why", dotColor: "#FFCF27" },
  { label: "How", dotColor: "#E48ABF" },
  { label: "What's New", dotColor: "#6BC070" },
] as const;

const SCROLL_THRESHOLD = 100;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 120,
        display: "flex",
        justifyContent: "center",
        paddingTop: isScrolled ? 8 : 0,
        transition: "padding-top 0.3s ease",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: isScrolled ? 1100 : "100%",
          height: isScrolled ? 60 : 87,
          paddingTop: isScrolled ? 0 : 33,
          paddingLeft: 32,
          paddingRight: 32,
          backgroundColor: isScrolled ? "#fff" : "transparent",
          borderRadius: isScrolled ? 30 : 0,
          boxShadow: isScrolled
            ? "0px 4px 22px 0px rgba(116, 130, 151, 0.14)"
            : "none",
          transition: "all 0.3s ease",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="mymind home"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <MymindLogo className="w-[100px] h-auto text-black" />
        </a>

        {/* Center nav links — hidden on mobile */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "'Nunito', var(--font-sans), sans-serif",
            fontSize: 20,
            fontWeight: 400,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map(({ label, dotColor }) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#000",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: dotColor,
                    flexShrink: 0,
                  }}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — auth actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexShrink: 0,
          }}
        >
          <a
            href="/login"
            style={{
              fontFamily: "'Nunito', var(--font-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#000",
              textDecoration: "none",
            }}
            className="hidden sm:inline"
          >
            Log in
          </a>
          <a
            href="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Nunito', var(--font-sans), sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "#FF5924",
              borderRadius: 24,
              padding: "12px 24px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s ease",
            }}
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
