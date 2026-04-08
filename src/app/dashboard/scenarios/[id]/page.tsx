import { supabase } from "@/lib/supabase";
import type { Scenario as ScenarioType } from "@/lib/types";
import { ScoreBar } from "@/components/score-bar";
import { notFound } from "next/navigation";
import React from "react";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar";

export default async function ScenarioPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: scenario, error } = await supabase
    .from("scenarios")
    .select("*")
    .eq("id", params.id)
    .single<ScenarioType>();

  if (error || !scenario) {
    console.error("Error fetching scenario:", error);
    return notFound();
  }

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
            <h3 className="text-sm font-medium text-secondary-foreground">HappyScore</h3>
            <p className="text-2xl font-bold mt-2">{scenario.metrics.happy_score}%</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
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
              {scenario.metrics && (
                <>
                  <ScoreBar label="Happy Score" value={scenario.metrics.happy_score} max={100} />
                  <ScoreBar label="Access Score" value={scenario.metrics.access_score} max={100} />
                  <ScoreBar label="Walkability" value={scenario.metrics.walkability} max={100} />
                  <ScoreBar label="Social Density" value={scenario.metrics.social_density} max={100} />
                  {scenario.metrics.green_score && (
                    <ScoreBar label="Green Score" value={scenario.metrics.green_score} max={100} />
                  )}
                  {scenario.metrics.time_efficiency && (
                    <ScoreBar label="Time Efficiency" value={scenario.metrics.time_efficiency} max={100} />
                  )}
                  {scenario.metrics.safety && (
                    <ScoreBar label="Safety" value={scenario.metrics.safety} max={100} />
                  )}
                  {scenario.metrics.economic_score && (
                    <ScoreBar label="Economic Score" value={scenario.metrics.economic_score} max={100} />
                  )}
                </>
              )}
            </div>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <p className="text-secondary-foreground">Coming soon</p>
          </div>
        </div>
      </div>
        </main>
      </div>
    </div>
  );
}
