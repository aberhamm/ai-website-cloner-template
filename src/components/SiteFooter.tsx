import { MymindLogo } from "@/components/icons";
import Image from "next/image";

const FOOTER_LINKS_LEFT = [
  { label: "Why people love mymind", href: "#" },
  { label: "Our pricing", href: "#" },
  { label: "See how it works", href: "#" },
  { label: "mymind & ADHD", href: "#" },
];

const APP_LINKS = [
  { label: "iOS app", href: "#" },
  { label: "Android app", href: "#" },
  { label: "Browser extension", href: "#" },
  { label: "MacOS app", href: "#" },
];

const ABOUT_LINKS = [
  { label: "Our manifesto", href: "#" },
  { label: "Our promise", href: "#" },
];

const HELP_LINKS = [
  { label: "@mymind on Twitter", href: "#" },
  { label: "Guides & contact form", href: "#" },
  { label: "Video tutorials", href: "#" },
];

const AUTH_LINKS = [
  { label: "Sign in to mymind", href: "#" },
  { label: "Create an account", href: "#" },
];

export function SiteFooter() {
  return (
    <footer
      className="relative"
      style={{
        background:
          "linear-gradient(#FFF1F1 0%, rgba(255,241,241,0) 30%)",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/images/mymind/footer_bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-[1100px] px-6 pt-20 pb-10">
        {/* Top section */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <MymindLogo className="h-6 w-auto text-black" />
            <span className="text-[#748297]">·</span>
            <span
              className="text-[#FF5924] text-lg"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Enjoy the silence.
            </span>
          </div>

          {/* See how it works CTA card */}
          <div className="rounded-2xl bg-[#F4F5F7] px-12 py-10 text-center">
            <p
              className="mb-2 text-3xl font-bold text-black"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              See how it works
            </p>
            <p className="text-[#748297]" style={{ fontFamily: "Inter, sans-serif", fontSize: 16 }}>
              mymind walkthroughs
            </p>
          </div>
        </div>

        {/* Footer links grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Left column - main links */}
          <div className="flex flex-col gap-3">
            {FOOTER_LINKS_LEFT.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-black transition-colors hover:text-[#FF5924]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Our Apps */}
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[2px] text-[#748297]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              OUR APPS
            </p>
            <div className="flex flex-col gap-2">
              {APP_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#748297] transition-colors hover:text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[2px] text-[#748297]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              ABOUT US
            </p>
            <div className="flex flex-col gap-2">
              {ABOUT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#748297] transition-colors hover:text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Help and Contact */}
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[2px] text-[#748297]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              HELP AND CONTACT
            </p>
            <div className="flex flex-col gap-2">
              {HELP_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#748297] transition-colors hover:text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                {AUTH_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#748297] transition-colors hover:text-black"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px w-full bg-[#ddd]" />

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 text-[13px] text-[#748297] md:flex-row"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>© mymind, inc. 2025</p>
          <p>Made with love ♡ from New York City, NY</p>
          <div className="flex gap-2">
            <a href="#" className="hover:text-black">Terms &amp; Conditions</a>
            <span>·</span>
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-black">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
