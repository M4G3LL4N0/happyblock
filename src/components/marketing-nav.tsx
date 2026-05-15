"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/technology", label: "Technology" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/investors", label: "Investors" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/waitlist", label: "Waitlist" },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/40 shadow-[0_0_24px_rgba(34,211,238,0.25)] ring-1 ring-white/10" />
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">Noaerth</span>
            <span className="text-lg font-semibold tracking-tight text-white group-hover:text-cyan-100/90 transition-colors">
              HappyBlock
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/waitlist"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-cyan-300/25 hover:bg-cyan-500/10 sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Join waitlist
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="happyblock-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="happyblock-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <p className="mt-2 px-3 text-xs text-white/45">
            Scenario outputs are planning aids — not certified planning or engineering advice.
          </p>
        </nav>
      )}
    </header>
  );
}
