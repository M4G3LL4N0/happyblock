import { DashboardLayout } from "@/components/dashboard-layout";
import { supabase } from "@/lib/supabase";
import { Scenario } from "@/lib/types";
import { ScoreBar } from "@/components/score-bar";
import { RecommendationPanel } from "@/components/recommendation-panel";

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
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">HappyScore</h3>
            <p className="text-2xl font-bold mt-2">{scenario.metrics.happy_score}%</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Access Score</h3>
            <p className="text-2xl font-bold mt-2">{scenario.metrics.access_score}%</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Walkability</h3>
            <p className="text-2xl font-bold mt-2">{scenario.metrics.walkability}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Detailed Metrics</h2>
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

          <RecommendationPanel scenario={scenario} />
        </div>
      </div>
    </DashboardLayout>
  );
}
