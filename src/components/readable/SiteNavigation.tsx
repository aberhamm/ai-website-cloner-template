"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Hero.css";
const checkout =
  "https://buy.polar.sh/polar_cl_fDPipgYkKQBrQPiTxQvLdLqKdnqoNn1zL41Zj2t24LR";
export function Nav() {
  const pathname = usePathname();
  return (
    <header className="readable-nav">
      <nav aria-label="Main navigation">
        <Link href="/" aria-label="Readable home" className="nav-logo">
          <Image
            src="/readable/aTHWZjlwriiOo8Qpy2DtD6NQD4.png"
            alt=""
            width={32}
            height={32}
          />
        </Link>
        <Link
          href="/blog-index"
          aria-current={pathname === "/blog-index" ? "page" : undefined}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
        <a className="nav-template" href={checkout}>
          Get Template
        </a>
      </nav>
    </header>
  );
}
