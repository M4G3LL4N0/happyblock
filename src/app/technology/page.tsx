const layers = [
  {
    title: "Spatial Input Layer",
    description:
      "Project context begins with the site, corridor, or district itself. HappyBlock structures location, land area, use mix, access conditions, public realm assumptions, and planning goals into a consistent model.",
  },
  {
    title: "Scenario Modeling Layer",
    description:
      "Each project can be tested through multiple spatial strategies, including baseline, mixed-use, green-forward, transit-oriented, or density-optimized concepts. This creates a comparable planning framework instead of disconnected iterations.",
  },
  {
    title: "Human Outcome Scoring",
    description:
      "HappyBlock evaluates spatial options through a score architecture centered on livability, access, walkability, safety, time efficiency, green comfort, and long-term neighborhood vitality.",
  },
  {
    title: "Recommendation Engine",
    description:
      "The product translates score changes and scenario patterns into actionable recommendations so teams can understand what to add, reduce, rebalance, or redesign.",
  },
];

const principles = [
  "Human-centered planning instead of purely financial optimization",
  "Scenario comparison instead of static reporting",
  "Structured tradeoff visibility across major planning decisions",
  "Clear product architecture that can later expand into GIS, map, and AI layers",
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            HappyBlock / Technology
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            A spatial decision system for better urban outcomes.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            HappyBlock combines structured project inputs, scenario modeling,
            human-centered scoring, and recommendation logic into a product
            designed for modern planning and redevelopment workflows.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8"
            >
              <h2 className="text-2xl font-medium tracking-tight">
                {layer.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {layer.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              System design
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-300">
              <p>
                The current HappyBlock architecture is intentionally designed as
                a product system first: project creation, scenario generation,
                score interpretation, and recommendation output.
              </p>
              <p>
                This makes the platform usable now while preserving room for
                future integrations such as map intelligence, parcel layers,
                mobility data, environmental context, report exports, and richer
                AI-assisted planning workflows.
              </p>
              <p>
                The product is built to make planning tradeoffs visible. Instead
                of burying complexity inside consultant decks or fragmented
                spreadsheets, HappyBlock turns those decisions into an
                interactive interface with repeatable logic.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Product principles
            </p>
            <div className="mt-5 space-y-4">
              {principles.map((item) => (
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
            Long-term architecture
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Built to grow from project intelligence into urban operating
            infrastructure.
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-300">
            HappyBlock starts with block, corridor, and redevelopment planning
            because those decisions are concrete, urgent, and commercially
            meaningful. Over time, the same architecture can expand into deeper
            scenario intelligence, map layers, recommendation systems, and
            broader spatial planning infrastructure.
          </p>
        </section>
      </div>
    </main>
  );
}
