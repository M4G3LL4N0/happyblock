import { Card } from "./ui/card";
import { LayoutGrid, Settings, BarChart, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Define Your Project",
      description: "Set parameters and goals for your urban development project",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Generate Scenarios",
      description: "Create multiple design scenarios with different priorities",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Compare Outcomes",
      description: "Analyze and compare scenario metrics and tradeoffs",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deploy Better Plans",
      description: "Implement the optimal design for your community",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <Card key={index} className="hover:bg-zinc-900 transition-colors">
          <div className="flex flex-col space-y-4 p-6">
            <div className="flex items-center space-x-3">
              {step.icon}
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-zinc-400">{step.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
