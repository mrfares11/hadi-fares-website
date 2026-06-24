"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#publications", label: "Papers" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
        >
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="font-mono text-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "close ✕" : "menu ☰"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-line bg-background px-5 py-2 font-mono md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-muted transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
