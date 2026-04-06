const modules = [
  {
    title: "Scenario Builder",
    description:
      "Create and compare multiple spatial strategies for any block, corridor, or district. Test variations in density, land use, green space, and public realm design.",
    icon: "📊",
    features: [
      "Block-level planning",
      "Corridor optimization",
      "Mixed-use scenarios",
      "Public realm modeling",
      "Comparative analysis"
    ]
  },
  {
    title: "HappyScore Engine",
    description:
      "Measure livability through a structured scoring system that evaluates access, walkability, safety, green comfort, and neighborhood vitality.",
    icon: "🏆",
    features: [
      "Human-centered metrics",
      "Scenario comparison",
      "Tradeoff visualization",
      "Long-term outlook",
      "Customizable weights"
    ]
  },
  {
    title: "Tradeoff Intelligence",
    description:
      "Understand the impacts of planning decisions through clear visualizations of tradeoffs across density, access, green space, and economic viability.",
    icon: "⚖️",
    features: [
      "Impact analysis",
      "Risk assessment",
      "Optimization paths",
      "Stakeholder alignment",
      "Decision support"
    ]
  },
  {
    title: "Planning Recommendations",
    description:
      "Get AI-backed suggestions for improving block designs, corridor layouts, and neighborhood plans based on your goals and constraints.",
    icon: "🤖",
    features: [
      "Actionable insights",
      "Optimization paths",
      "Risk mitigation",
      "Best practices",
      "Scenario generation"
    ]
  }
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
              Product Workflow
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                    1
                  </div>
                  <h3 className="text-sm font-medium text-white">
                    Define the Project
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Input site context, planning goals, and constraints. Set priorities for housing, access, green space, and economic vitality.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                    2
                  </div>
                  <h3 className="text-sm font-medium text-white">
                    Generate Scenarios
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Create and compare multiple spatial strategies - from baseline to optimized, green-forward to density-maximized concepts.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                    3
                  </div>
                  <h3 className="text-sm font-medium text-white">
                    Evaluate Tradeoffs
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Review score changes, planning impacts, and recommendation panels to understand what each scenario improves or sacrifices.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                    4
                  </div>
                  <h3 className="text-sm font-medium text-white">
                    Share a Stronger Plan
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Turn scenario outputs into clearer decisions for internal teams, public-private partners, and stakeholder review.
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
            Core Thesis
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            The Future of Planning is Measurable, Visual, and Human-Centered
          </h2>
          <div className="mt-5 max-w-4xl text-sm leading-7 text-neutral-300 space-y-4">
            <p>
              HappyBlock transforms abstract planning conversations into structured scenarios with visible outcomes and clearer tradeoffs. We believe better places come from better spatial decisions.
            </p>
            <p>
              Our platform helps planning teams, developers, and urban operators test scenarios, compare tradeoffs, and design places that improve livability, access, and long-term value.
            </p>
            <p>
              By making planning decisions more measurable and visual, we're creating a new standard for urban intelligence that balances human experience with economic viability.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
