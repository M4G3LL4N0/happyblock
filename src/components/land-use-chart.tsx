"use client";

export function LandUseChart() {
  const data = [
    { name: "Residential", value: 40, color: "#3b82f6" },
    { name: "Commercial", value: 25, color: "#f59e0b" },
    { name: "Green Space", value: 20, color: "#10b981" },
    { name: "Public", value: 15, color: "#ef4444" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {data.map((item) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-secondary-foreground">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full h-4 bg-secondary rounded-full overflow-hidden">
        <div className="h-full flex">
          {data.map((item) => (
            <div
              key={item.name}
              style={{
                width: `${item.value}%`,
                backgroundColor: item.color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
