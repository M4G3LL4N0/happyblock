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
    <Card variant="ghost" className="hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col space-y-4 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>
    </Card>
  );
}
