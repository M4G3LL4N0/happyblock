import { Card } from "@/components/ui/card";

const scenarios = [
  {
    name: "Baseline",
    score: 61,
    access: 58,
    walkability: 55,
    green: 42,
    economic: 74,
    tint: "from-slate-500/20 to-slate-700/10",
    badge: "Existing condition",
  },
  {
    name: "Mixed-Use Optimized",
    score: 84,
    access: 82,
    walkability: 88,
    green: 73,
    economic: 79,
    tint: "from-cyan-400/20 to-blue-500/10",
    badge: "Recommended",
  },
  {
    name: "Green-Forward",
    score: 78,
    access: 74,
    walkability: 80,
    green: 91,
    economic: 63,
    tint: "from-emerald-400/20 to-teal-500/10",
    badge: "Alternative",
  },
];

const recommendations = [
  "Reduce surface parking by 22% and reallocate frontage toward shaded pedestrian movement.",
  "Shift ground-floor frontage toward neighborhood retail and community-serving uses.",
  "Add a mid-block public space connection to increase walkability and family usability.",
];

function MiniBar({
  label,
  value,
  toneClass,
}: {
  label: string;
  value: number;
  toneClass?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/55">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${toneClass ?? "bg-white"}`}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

      <Card className="relative overflow-hidden rounded-[32px] border-white/10 bg-[#07111f]/85 p-0 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,122,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(61,208,255,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

        <div className="relative border-b border-white/10 px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                Active project
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Downtown Revitalization Initiative
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                Redwood City, CA · Mixed-use corridor redesign focused on
                walkability, family livability, retail activation, and public
                realm quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:min-w-[260px]">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Best scenario
                </div>
                <div className="mt-2 text-3xl font-semibold text-white">84</div>
                <div className="text-sm text-white/55">HappyScore</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Expected uplift
                </div>
                <div className="mt-2 text-3xl font-semibold text-white">+23</div>
                <div className="text-sm text-white/55">vs baseline</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid gap-6 px-6 py-6 sm:px-8 sm:py-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    Block composition
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                    Spatial mix
                  </p>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                  Live scenario
                </div>
              </div>

              <div className="mt-5 grid grid-cols-6 gap-2.5">
                <div className="col-span-3 h-24 rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-200 p-3 text-xs font-semibold text-slate-900">
                  Residential
                </div>
                <div className="col-span-2 h-24 rounded-2xl bg-gradient-to-br from-sky-500/80 to-blue-700/80 p-3 text-xs font-semibold text-white">
                  Retail
                </div>
                <div className="col-span-1 h-24 rounded-2xl bg-gradient-to-br from-violet-500/70 to-indigo-700/80 p-3 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Plaza
                </div>

                <div className="col-span-2 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-3 text-xs font-medium text-white/85">
                  Mobility Hub
                </div>
                <div className="col-span-2 h-20 rounded-2xl bg-gradient-to-br from-teal-700/80 to-cyan-800/80 p-3 text-xs font-medium text-white">
                  Civic Space
                </div>
                <div className="col-span-2 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/80 to-teal-700/80 p-3 text-xs font-medium text-white">
                  Green Edge
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Housing
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    240
                  </div>
                  <div className="text-sm text-white/55">units planned</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Public realm
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    18%
                  </div>
                  <div className="text-sm text-white/55">open space allocation</div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-medium text-white">Score profile</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <MiniBar label="Access" value={82} toneClass="bg-cyan-300" />
                <MiniBar
                  label="Walkability"
                  value={88}
                  toneClass="bg-blue-300"
                />
                <MiniBar label="Green" value={73} toneClass="bg-emerald-300" />
                <MiniBar
                  label="Economic"
                  value={79}
                  toneClass="bg-amber-300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    Scenario comparison
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                    Tradeoff intelligence
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                  3 strategies
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {scenarios.map((scenario) => (
                  <div
                    key={scenario.name}
                    className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${scenario.tint} p-4`}
                  >
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                          {scenario.badge}
                        </div>
                        <div className="mt-3 text-lg font-semibold text-white">
                          {scenario.name}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-center">
                        <div className="text-2xl font-semibold text-white">
                          {scenario.score}
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                          HappyScore
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <MiniBar
                        label="Access"
                        value={scenario.access}
                        toneClass="bg-cyan-300"
                      />
                      <MiniBar
                        label="Walkability"
                        value={scenario.walkability}
                        toneClass="bg-blue-300"
                      />
                      <MiniBar
                        label="Green"
                        value={scenario.green}
                        toneClass="bg-emerald-300"
                      />
                      <MiniBar
                        label="Economic"
                        value={scenario.economic}
                        toneClass="bg-amber-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-violet-500/10 via-cyan-400/10 to-transparent p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    Recommendation engine
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                    Highest-leverage moves
                  </p>
                </div>
                <div className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-violet-100">
                  AI-assisted
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {recommendations.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm leading-6 text-white/75"
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
