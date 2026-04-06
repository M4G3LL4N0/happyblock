import { supabase } from "@/lib/supabase";
import { Scenario } from "@/lib/types";
import { ScoreBar } from "@/components/score-bar";

export default async function ScenarioPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: scenario } = await supabase
    .from("scenarios")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!scenario) {
    return <div>Scenario not found</div>;
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{scenario.name}</h1>
        <p className="text-zinc-400 mt-2">{scenario.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Metrics</h2>
          <div className="space-y-4">
            <ScoreBar label="Happy Score" value={scenario.metrics.happy_score} />
            <ScoreBar label="Access Score" value={scenario.metrics.access_score} />
            <ScoreBar label="Walkability" value={scenario.metrics.walkability} />
            <ScoreBar label="Social Density" value={scenario.metrics.social_density} />
            <ScoreBar label="Green Score" value={scenario.metrics.green_score} />
            <ScoreBar label="Time Efficiency" value={scenario.metrics.time_efficiency} />
            <ScoreBar label="Safety" value={scenario.metrics.safety} />
            <ScoreBar label="Economic Score" value={scenario.metrics.economic_score} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Analysis</h2>
          <div className="p-6 bg-zinc-900 rounded-lg">
            <p className="text-zinc-400">
              Based on the metrics, this scenario scores {scenario.metrics.happy_score}% on 
              overall happiness. The access score of {scenario.metrics.access_score}% indicates 
              good connectivity, while the walkability score of {scenario.metrics.walkability}% 
              suggests pedestrian-friendly design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
