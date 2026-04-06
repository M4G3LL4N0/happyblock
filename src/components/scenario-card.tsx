import { Scenario } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { ScoreBar } from "@/components/score-bar";

export function ScenarioCard({
  scenario,
}: {
  scenario: Scenario;
}) {
  return (
    <Card className="hover:bg-zinc-900 transition-colors">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{scenario.name}</h3>
          <p className="text-zinc-400 line-clamp-3">{scenario.description}</p>
        </div>
        
        <div className="space-y-3">
          <ScoreBar label="Happy Score" value={scenario.metrics.happy_score} />
          <ScoreBar label="Access Score" value={scenario.metrics.access_score} />
          <ScoreBar label="Walkability" value={scenario.metrics.walkability} />
          <ScoreBar label="Green Score" value={scenario.metrics.green_score} />
        </div>
        
        <div className="text-sm text-zinc-500">
          Created: {new Date(scenario.created_at).toLocaleDateString()}
        </div>
      </div>
    </Card>
  );
}
