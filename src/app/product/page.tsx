const modules = [
  {
    title: "Scenario Builder",
    description:
      "Create and compare redevelopment, corridor, and block-level strategies across density, access, green space, and public realm outcomes.",
  },
  {
    title: "HappyScore Engine",
    description:
      "Measure livability through a structured scoring system spanning access, walkability, safety, green comfort, time efficiency, and long-term vitality.",
  },
  {
    title: "Tradeoff Intelligence",
    description:
      "Reveal what improves, what degrades, and what shifts when a project changes housing mix, parking ratios, retail allocation, or public space design.",
  },
  {
    title: "Planning Recommendations",
    description:
      "Generate structured AI-backed suggestions for how to improve a block, corridor, or development concept based on stated goals and scenario outcomes.",
  },
];

const useCases = [
  "Downtown redevelopment strategy",
  "Transit-oriented corridor optimization",
  "Parking lot conversion into mixed-use districts",
  "Campus and district land-use planning",
  "Developer feasibility and concept refinement",
  "Public-private revitalization planning",
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            HappyBlock / Product
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Spatial intelligence for better neighborhoods.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            HappyBlock helps planning teams, developers, and urban operators test
            scenarios, compare tradeoffs, and design places that improve
            livability, access, and long-term value.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8"
            >
              <h2 className="text-2xl font-medium tracking-tight">
                {module.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {module.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Product workflow
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="text-sm font-medium text-white">
                  1. Define the project
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Input the site, corridor, or district context along with goals
                  such as housing, access, family usability, public realm
                  quality, or economic vitality.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="text-sm font-medium text-white">
                  2. Generate scenarios
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Compare baseline, optimized, green-heavy, density-heavy, or
                  mixed-use strategies in one structured workspace.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="text-sm font-medium text-white">
                  3. Evaluate tradeoffs
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Review score changes, planning tradeoffs, and recommendation
                  panels to understand what each scenario improves or sacrifices.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="text-sm font-medium text-white">
                  4. Share a stronger plan
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Turn scenario outputs into clearer decisions for internal
                  teams, public-private partners, or stakeholder review.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Ideal use cases
            </p>
            <div className="mt-5 space-y-4">
              {useCases.map((item) => (
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
            The future of planning is measurable, visual, and human centered.
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-300">
            HappyBlock is built around a simple idea: better places come from
            better spatial decisions. The product transforms abstract planning
            conversations into structured scenarios with visible outcomes and
            clearer tradeoffs.
          </p>
        </section>
      </div>
    </main>
  );
}
