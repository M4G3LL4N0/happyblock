import { Card } from "./ui/card";

export function UseCaseCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="hover:bg-zinc-900 transition-colors">
      <div className="flex flex-col space-y-4 p-6">
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>
    </Card>
  );
}
