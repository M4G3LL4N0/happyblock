import type { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPin, Sparkles, TrendingUp, Users, Waypoints } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";
import { PremiumPanel } from "@/components/premium-panel";
import { SectionIntro } from "@/components/section-intro";
import { ProductModules } from "@/components/product-modules";
import { UseCaseCard } from "@/components/use-case-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Urban intelligence for better neighborhoods",
  description:
    "HappyBlock — scenario modeling, HappyScore, and spatial recommendations for cities, developers, and districts.",
};

const useCases = [
  {
    title: "Downtown redevelopment",
    description:
      "Compare mixed-use, public-realm, and parking scenarios on the same block before capital locks in.",
    icon: <Building2 className="h-6 w-6 text-cyan-300" />,
  },
  {
    title: "Transit corridors",
    description:
      "Look at station-area intensity, first-mile comfort, and retail depth as one corridor model.",
    icon: <Waypoints className="h-6 w-6 text-violet-300" />,
  },
  {
    title: "Parking conversion",
    description:
      "Turn surface lots into housing-forward, green-forward, or retail-anchored concepts with visible tradeoffs.",
    icon: <MapPin className="h-6 w-6 text-amber-300" />,
  },
  {
    title: "Mixed-use districts",
    description:
      "Put density, access, and vitality on one surface so planning and finance can argue from the same map.",
    icon: <TrendingUp className="h-6 w-6 text-emerald-300" />,
  },
  {
    title: "Campus planning",
    description:
      "Give institutional landowners a structured view of land use, open space, and mobility options.",
    icon: <Users className="h-6 w-6 text-sky-300" />,
  },
  {
    title: "Public-private revitalization",
    description:
      "Keep agencies, developers, and districts on one comparable scenario set instead of parallel slide decks.",
    icon: <Sparkles className="h-6 w-6 text-fuchsia-300" />,
  },
];

export default function Home() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.22),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(139,92,246,0.18),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
          <PremiumPanel glowPosition="top" className="p-6 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/70">
              Urban intelligence · Noaerth
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Design better neighborhoods through spatial intelligence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              HappyBlock helps cities, developers, and districts compare block
              and corridor scenarios with HappyScore, livability factors, and
              recommendation panels. Scores in the product are model outputs
              for the scenario you load — not published city rankings.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/waitlist">Join the waitlist</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">Open the demo workspace</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/product">Explore the product</Link>
              </Button>
            </div>
            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: "HappyScore", v: "Model output for the loaded scenario" },
                { k: "Tradeoffs", v: "Access, green comfort, vitality on one card" },
                { k: "Workspace", v: "Labeled sample blocks — not a city feed" },
              ].map((item) => (
                <div key={item.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <dt className="text-xs uppercase tracking-[0.18em] text-cyan-100/70">{item.k}</dt>
                  <dd className="mt-2 text-sm text-white/70">{item.v}</dd>
                </div>
              ))}
            </dl>
          </PremiumPanel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <PremiumPanel innerClassName="p-6 sm:p-12" glowPosition="center">
          <SectionIntro
            eyebrow="What you compare"
            title="Scenario cards, not a vanity dashboard"
            description="HappyScore sits beside access, walkability, green comfort, and economic vitality so a corridor conversation stays comparable."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Cities & agencies", v: "One hub for fragmented planning tools" },
              { k: "Developers", v: "Scored tradeoffs you can walk through in a room" },
              { k: "Districts & campuses", v: "Repeatable planning language for the next site" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-medium text-white">{s.k}</p>
                <p className="mt-2 text-sm text-white/55">{s.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/45">
            The demo workspace uses labeled sample blocks. It is not a live
            municipal dataset.
          </p>
        </PremiumPanel>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionIntro
          eyebrow="Platform modules"
          title="Built for block-level decisions"
          description="Each module is for comparing spatial strategies — not generic smart-city charts."
          centered
          className="mb-12"
        />
        <ProductModules />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionIntro
          eyebrow="Use cases"
          title="Where place, capital, and community meet"
          description="From downtown comebacks to parking conversions."
          className="mb-12 max-w-3xl"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((u) => (
            <UseCaseCard
              key={u.title}
              title={u.title}
              description={u.description}
              icon={u.icon}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <PremiumPanel innerClassName="p-8 text-center sm:p-14" glowPosition="center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to model a corridor or block?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
            Join the waitlist for early access and enterprise pilots. No
            customer logos or outcome percentages are claimed here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="xl" asChild>
              <Link href="/waitlist">Join the waitlist</Link>
            </Button>
            <Button size="xl" variant="secondary" asChild>
              <Link href="/investors">Investor overview</Link>
            </Button>
          </div>
        </PremiumPanel>
      </section>
    </MarketingShell>
  );
}
