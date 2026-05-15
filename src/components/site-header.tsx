"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserNav } from "@/components/user-nav";

const links = [
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/product", label: "Marketing site" },
  { href: "/waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050a14]/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex min-w-0 items-center gap-4">
          <Link href="/" className="text-xl font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
            HappyBlock
          </Link>
          <nav className="hidden items-center gap-3 text-sm text-white/55 md:flex">
            {links.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/waitlist" onClick={() => setOpen(false)}>
              Waitlist
            </Link>
          </Button>
          <UserNav />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="happyblock-dash-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="happyblock-dash-mobile-nav"
          className="container flex flex-col gap-2 border-t border-white/10 py-3 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-2 py-2 text-sm text-white/75 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
