"use client";

import { Scenario } from "@/lib/types";

export function RecommendationPanel({ scenario }: { scenario: Scenario }) {
  const recommendations = [
    {
      title: "Increase Green Space",
      description: "Adding 10% more green space could improve happiness by 5%",
      impact: "+5% HappyScore",
    },
    {
      title: "Improve Walkability",
      description: "Adding pedestrian paths could improve walkability by 15%",
      impact: "+15% Walkability",
    },
    {
      title: "Enhance Public Transport",
      description: "Adding a bus route could improve access by 10%",
      impact: "+10% Access Score",
    },
  ];

  return (
    <div className="bg-secondary p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">AI Recommendations</h2>
      
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.title} className="p-4 rounded-lg bg-background">
            <h3 className="font-medium">{rec.title}</h3>
            <p className="text-sm text-secondary-foreground mt-1">
              {rec.description}
            </p>
            <div className="text-sm text-primary mt-2">{rec.impact}</div>
          </div>
        ))}
      </div>

      <button
        className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
        onClick={() => {
          // TODO: Implement scenario generation
        }}
      >
        Generate Optimized Scenario
      </button>
    </div>
  );
}
