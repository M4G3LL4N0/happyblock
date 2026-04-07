import { Card } from "@/components/ui/card";

const scenarios = [
  {
    name: "Baseline",
    score: 61,
    access: 58,
    walkability: 55,
    green: 42,
    economic: 74,
  },
  {
    name: "Mixed-Use Optimized",
    score: 84,
    access: 82,
    walkability: 88,
    green: 73,
    economic: 79,
  },
  {
    name: "Green-Forward",
    score: 78,
    access: 74,
    walkability: 80,
    green: 91,
    economic: 63,
  },
];

const recommendations = [
  "Reduce surface parking by 22% and reallocate space to shaded pedestrian frontage.",
  "Shift ground-floor frontage toward neighborhood retail and community-serving uses.",
  "Add a mid-block public space connection to improve walkability and family usability.",
];

function MiniBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-800">
      <div
        className="h-full rounded-full bg-white"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export function ProductPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <Card className="overflow-hidden rounded-[28px] p-0">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
          <div className="relative border-b border-white/5 px-6 py-4 backdrop-blur-[1px]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Active project
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Downtown Revitalization Initiative
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Redwood City, CA · Mixed-use corridor redesign
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-black/40 px-4 py-3 text-right">
              <div className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                Best scenario
              </div>
              <div className="mt-1 text-3xl font-semibold text-white">84</div>
              <div className="text-sm text-neutral-400">HappyScore</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-neutral-800 bg-black/40 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white">Block composition</p>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                Spatial view
              </p>
            </div>

            <div className="mt-5 grid grid-cols-6 gap-2">
              <div className="col-span-3 h-24 rounded-2xl bg-neutral-200/95 p-3 text-xs font-medium text-black">
                Residential
              </div>
              <div className="col-span-2 h-24 rounded-2xl bg-neutral-700 p-3 text-xs font-medium text-white">
                Retail
              </div>
              <div className="col-span-1 h-24 rounded-2xl bg-neutral-800 p-3 text-[10px] font-medium uppercase tracking-wide text-neutral-300">
                Plaza
              </div>

              <div className="col-span-2 h-20 rounded-2xl bg-neutral-900 p-3 text-xs font-medium text-neutral-300">
                Mobility Hub
              </div>
              <div className="col-span-2 h-20 rounded-2xl bg-neutral-800 p-3 text-xs font-medium text-neutral-200">
                Civic Space
              </div>
              <div className="col-span-2 h-20 rounded-2xl bg-neutral-700 p-3 text-xs font-medium text-white">
                Green Edge
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3">
                <div className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Housing
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">240</div>
                <div className="text-sm text-neutral-400">units planned</div>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3">
                <div className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Public realm
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">18%</div>
                <div className="text-sm text-neutral-400">open space allocation</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-neutral-800 bg-black/40 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white">Scenario comparison</p>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Live analysis
                </p>
              </div>

              <div className="mt-4 space-y-4">
                {scenarios.map((scenario) => (
                  <div
                    key={scenario.name}
                    className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-white">
                          {scenario.name}
                        </div>
                        <div className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                          HappyScore {scenario.score}
                        </div>
                      </div>
                      <div className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-300">
                        {scenario.score >= 80 ? "Recommended" : "Alternative"}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-neutral-400">
                          <span>Access</span>
                          <span>{scenario.access}</span>
                        </div>
                        <MiniBar value={scenario.access} />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-neutral-400">
                          <span>Walkability</span>
                          <span>{scenario.walkability}</span>
                        </div>
                        <MiniBar value={scenario.walkability} />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-neutral-400">
                          <span>Green</span>
                          <span>{scenario.green}</span>
                        </div>
                        <MiniBar value={scenario.green} />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-neutral-400">
                          <span>Economic</span>
                          <span>{scenario.economic}</span>
                        </div>
                        <MiniBar value={scenario.economic} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-5">
              <p className="text-sm font-medium text-white">
                Recommendation engine
              </p>
              <div className="mt-4 space-y-3">
                {recommendations.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-neutral-800 bg-black/40 p-4 text-sm leading-6 text-neutral-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
