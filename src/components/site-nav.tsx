import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/scenarios/demo-scenario", label: "Scenarios" },
  { href: "/investors", label: "Investors" },
  { href: "/waitlist", label: "Waitlist" },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-full max-w-[260px] flex-col border-r border-neutral-800 bg-neutral-950/80 px-5 py-6 text-white">
      <Link href="/" className="mb-8 block">
        <div className="text-xs uppercase tracking-[0.28em] text-neutral-500">
          Noaerth
        </div>
        <div className="mt-2 text-2xl font-semibold tracking-tight">
          HappyBlock
        </div>
        <div className="mt-2 text-sm text-neutral-400">
          Spatial intelligence for better neighborhoods
        </div>
      </Link>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-transparent px-3 py-2 text-sm text-neutral-300 transition hover:border-neutral-800 hover:bg-neutral-900 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-neutral-800 bg-black/40 p-4">
        <div className="text-xs uppercase tracking-[0.24em] text-neutral-500">
          Active mode
        </div>
        <div className="mt-2 text-sm font-medium text-white">
          Scenario planning
        </div>
        <p className="mt-2 text-sm leading-6 text-neutral-400">
          Compare redevelopment, corridor, and block-level concepts in one
          dashboard.
        </p>
      </div>
    </aside>
  );
}
