import { Card } from "./ui/card";
import { LayoutTemplate, Brain, Scale, Target, Sparkles } from "lucide-react";

export function ProductModules() {
  const modules = [
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Scenario Builder",
      description: "Create and compare urban design scenarios",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "HappyScore Engine",
      description: "Measure neighborhood happiness potential",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Tradeoff Intelligence",
      description: "Understand design decision impacts",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Recommendation Engine",
      description: "Get optimized design suggestions",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Spatial Optimization",
      description: "Maximize land use efficiency",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module, index) => (
        <Card key={index} className="hover:bg-zinc-900 transition-colors">
          <div className="flex flex-col space-y-4 p-6">
            <div className="flex items-center space-x-3">
              {module.icon}
              <h3 className="text-xl font-semibold">{module.module}</h3>
            </div>
            <p className="text-zinc-400">{module.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
