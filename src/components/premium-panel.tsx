import { ReactNode } from "react";
import clsx from "clsx";

type GlowPosition = "top" | "center" | "bottom";

type PremiumPanelProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  glowPosition?: GlowPosition;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return clsx(classes);
}

export function PremiumPanel({
  children,
  className,
  innerClassName,
  glowPosition = "center",
}: PremiumPanelProps) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-[40px] p-px",
        "bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_80px_rgba(0,0,0,0.45)]",
        "transition-all duration-500",
        className
      )}
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />

      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[40px]",
          "bg-[linear-gradient(180deg,rgba(5,10,20,0.92),rgba(3,7,18,0.96))]",
          "backdrop-blur-xl",
          innerClassName
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)] pointer-events-none" />

        {children}

        <div
          className={cn(
            "pointer-events-none absolute -z-10 h-48 w-48 rounded-full blur-[110px]",
            "bg-gradient-to-br from-cyan-400/20 via-blue-500/18 to-violet-500/20",
            glowPosition === "top" && "-top-8 left-8",
            glowPosition === "center" &&
              "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            glowPosition === "bottom" && "-bottom-8 right-8"
          )}
        />
      </div>
    </div>
  );
}
