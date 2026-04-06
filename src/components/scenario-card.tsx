import Link from "next/link";
import { Scenario } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { ScoreBar } from "@/components/score-bar";

type ProjectLike = {
  id: string;
  name?: string;
};

export function ScenarioCard({
  scenario,
  project,
}: {
  scenario: Scenario;
  project?: ProjectLike;
}) {
  const scores = [
    {
      label: "HappyScore",
      value:
        Number(
          (scenario as { happy_score?: number; total_score?: number })
            .happy_score ??
            (scenario as { happy_score?: number; total_score?: number })
              .total_score ??
            0
        ) || 0,
    },
    {
      label: "Access",
      value:
        Number((scenario as { access_score?: number }).access_score ?? 0) || 0,
    },
    {
      label: "Walkability",
      value:
        Number(
          (scenario as { walkability_score?: number }).walkability_score ?? 0
        ) || 0,
    },
    {
      label: "Safety",
      value:
        Number((scenario as { safety_score?: number }).safety_score ?? 0) || 0,
    },
    {
      label: "Economic",
      value:
        Number((scenario as { economic_score?: number }).economic_score ?? 0) ||
        0,
    },
  ];

  return (
    <Card className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            {(scenario as { scenario_type?: string }).scenario_type ?? "Scenario"}
          </div>
          <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">
            {scenario.name}
          </h3>
          {project?.name ? (
            <p className="mt-2 text-sm text-neutral-400">{project.name}</p>
          ) : null}
        </div>

        <Link
          href={`/dashboard/scenarios/${scenario.id}`}
          className="rounded-xl border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-200 transition hover:border-neutral-700 hover:bg-black/60"
        >
          View
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {scores.map((score) => (
          <div key={score.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-neutral-300">{score.label}</span>
              <span className="text-neutral-500">{score.value}</span>
            </div>
            <ScoreBar label={score.label} value={score.value} />
          </div>
        ))}
      </div>

      {"summary" in scenario && typeof scenario.summary === "string" && scenario.summary ? (
        <p className="mt-6 text-sm leading-7 text-neutral-400">{scenario.summary}</p>
      ) : null}
    </Card>
  );
}
