import { Card } from "@/components/ui/card";

const modules = [
  {
    title: "Scenario Builder",
    description:
      "Create multiple block, corridor, and redevelopment concepts to compare different spatial strategies before capital is deployed.",
    eyebrow: "Planning workflow",
  },
  {
    title: "HappyScore Engine",
    description:
      "Measure livability, access, walkability, safety, green comfort, and long-term vitality through a structured scoring system.",
    eyebrow: "Human-centered scoring",
  },
  {
    title: "Tradeoff Intelligence",
    description:
      "See what improves, what degrades, and what shifts when you change parking ratios, public realm allocation, use mix, or density.",
    eyebrow: "Decision support",
  },
  {
    title: "Recommendation Engine",
    description:
      "Turn scenario outputs into actionable recommendations that help teams refine plans and communicate stronger redevelopment decisions.",
    eyebrow: "Action layer",
  },
  {
    title: "Spatial Optimization",
    description:
      "Model how residential, retail, civic, mobility, and green space elements can be rebalanced for better neighborhood outcomes.",
    eyebrow: "Block intelligence",
  },
  {
    title: "Reporting Foundation",
    description:
      "Prepare planning outputs for future exports, stakeholder review, and enterprise collaboration without relying on fragmented decks.",
    eyebrow: "Operational layer",
  },
];

export function ProductModules() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {modules.map((item) => (
        <Card
          key={item.title}
          className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6"
        >
          <div className="text-xs uppercase tracking-[0.26em] text-neutral-500">
            {item.eyebrow}
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-neutral-400">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
