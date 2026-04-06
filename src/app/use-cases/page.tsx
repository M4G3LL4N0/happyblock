const useCases = [
  {
    title: "Downtown redevelopment",
    description:
      "Model underused blocks, fragmented land use, and public realm weaknesses to compare stronger mixed-use redevelopment strategies.",
  },
  {
    title: "Transit corridor optimization",
    description:
      "Evaluate how housing, retail, pedestrian experience, and mobility access can be rebalanced along key urban corridors.",
  },
  {
    title: "Parking lot conversion",
    description:
      "Turn low-value asphalt into higher-performing residential, retail, civic, and green space scenarios with clearer tradeoff visibility.",
  },
  {
    title: "Campus and district planning",
    description:
      "Support institutional landowners and district operators with scenario-driven land-use and quality-of-life planning.",
  },
  {
    title: "Developer concept refinement",
    description:
      "Help development teams compare block configurations and improve project narratives around livability, access, and long-term value.",
  },
  {
    title: "Public-private revitalization",
    description:
      "Provide a structured interface for cities, developers, and partners to compare outcomes and communicate decisions more clearly.",
  },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            HappyBlock / Use Cases
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Built for the places where urban decisions matter most.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            HappyBlock is designed for redevelopment, corridor planning, block
            optimization, and spatial decision workflows where tradeoffs need to
            be made visible and outcomes need to be easier to compare.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8"
            >
              <h2 className="text-2xl font-medium tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Who this is for
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-300">
              <p>
                HappyBlock is built for planning teams, developers, district
                operators, campus planners, and public-private groups that need
                a better way to compare spatial strategies.
              </p>
              <p>
                The product is especially useful when projects involve competing
                priorities across density, access, livability, public realm,
                green space, and long-term economic outcomes.
              </p>
              <p>
                Rather than relying only on static decks and fragmented analyses,
                teams can use HappyBlock to structure scenarios, evaluate
                tradeoffs, and communicate stronger decisions.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Why it matters
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Makes tradeoffs visible",
                "Improves scenario comparison",
                "Creates clearer stakeholder narratives",
                "Strengthens planning and redevelopment decisions",
              ].map((item) => (
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

        <section className="mt-14 rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Core thesis
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Better places come from better spatial decisions.
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-300">
            HappyBlock focuses on the planning moments where place, economics,
            and human experience collide. That is where scenario intelligence
            creates the most value.
          </p>
        </section>
      </div>
    </main>
  );
}
