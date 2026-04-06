export default function InvestorsPage() {
  const pillars = [
    {
      title: "Why now",
      body:
        "Cities, developers, and large landowners are under pressure to deliver more housing, better public realm outcomes, climate resilience, and stronger long-term value. HappyBlock turns those competing goals into a scenario-driven planning system.",
    },
    {
      title: "Category",
      body:
        "HappyBlock sits at the intersection of urban planning software, real estate intelligence, spatial analytics, and AI decision support. The long-term category is human-centered urban operating systems.",
    },
    {
      title: "Initial wedge",
      body:
        "The fastest entry point is block, corridor, and redevelopment scenario optimization for developers, planning teams, districts, campuses, and public-private revitalization projects.",
    },
  ];

  const roadmap = [
    "Scenario builder for block and corridor optimization",
    "HappyScore and supporting livability metrics",
    "Planning recommendation engine with tradeoff analysis",
    "Spatial visualization and map-based intelligence layer",
    "Enterprise reporting, exports, and stakeholder collaboration",
    "Platform APIs for urban intelligence and land-use simulation",
  ];

  const marketVectors = [
    "Housing pressure and redevelopment intensity",
    "Public demand for better livability and walkability",
    "AI adoption inside planning, real estate, and government workflows",
    "Need to justify tradeoffs across density, green space, mobility, and economics",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            HappyBlock / Investors
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
            A human-centered urban intelligence platform.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            HappyBlock helps cities, developers, and planning teams model better
            neighborhoods, corridors, and redevelopment outcomes. The company is
            building the software layer for spatial decisions that optimize for
            human experience, access, resilience, and long-term value.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6"
            >
              <h2 className="text-xl font-medium tracking-tight">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {pillar.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Investment thesis
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              The future of planning is scenario-driven, measurable, and human
              centered.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-300">
              <p>
                Traditional planning workflows are fragmented across consultants,
                spreadsheets, static reports, and disconnected modeling tools.
                HappyBlock consolidates those decisions into a product experience
                that makes tradeoffs visible and recommendations actionable.
              </p>
              <p>
                The initial product wedge is compelling because projects already
                carry real budgets, real deadlines, and real pressure to justify
                design decisions. That makes the product sellable before the
                company reaches its full platform vision.
              </p>
              <p>
                Over time, HappyBlock can expand from a redevelopment and block
                optimization tool into a broader operating layer for district
                planning, development feasibility, public realm intelligence,
                scenario reporting, and urban decision support.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Market vectors
            </p>
            <div className="mt-5 space-y-4">
              {marketVectors.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-800 bg-black/40 p-4 text-sm text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Expansion roadmap
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {roadmap.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-800 bg-black/40 p-5"
              >
                <div className="text-xs uppercase tracking-[0.26em] text-neutral-500">
                  Phase {index + 1}
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Long-term vision
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Design better human life through space.
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-300">
            HappyBlock starts at the block level because that is where planning
            becomes tangible, measurable, and commercially urgent. The larger
            opportunity is to become the operating layer for spatial tradeoffs
            across land use, mobility, green space, redevelopment, and quality
            of life.
          </p>
        </section>
      </div>
    </main>
  );
}
