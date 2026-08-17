"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/content";

// Root-relative so the nav also works from subpages like /community/nac.
const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Work" },
  { href: "/#publications", label: "Papers" },
  { href: "/#community", label: "Community" },
  { href: "/#gallery", label: "Photos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="font-serif text-lg font-semibold uppercase tracking-tight">
          {site.name}
        </Link>

        <div className="flex items-center gap-6">
          <ul className="label hidden items-center gap-6 text-white/60 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="label hidden rounded-full border border-white/40 px-4 py-2 transition-colors hover:border-white hover:bg-white hover:text-black sm:inline-block"
          >
            Contact me
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="label md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="label flex flex-col border-t border-white/10 bg-black/95 px-5 py-2 md:hidden">
          {[...links, { href: "/#contact", label: "Contact" }].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
