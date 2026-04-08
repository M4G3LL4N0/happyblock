export function ScoreBar({
  label,
  value,
  max = 100,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{value}/100</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-800">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
}
