import { ReactNode } from "react";
import clsx from "clsx";

type CardVariant =
  | "default"
  | "secondary"
  | "glass"
  | "gradient"
  | "ghost"
  | "premium";
type GlowPosition = "top" | "center" | "bottom";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  glowPosition?: GlowPosition;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return clsx(classes);
}

const variantClasses: Record<CardVariant, string> = {
  default: "border-white/10 bg-white/5",
  secondary: "border-white/10 bg-neutral-950/70",
  glass: "border-white/10 bg-white/5 backdrop-blur-md",
  gradient:
    "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-sm",
  ghost:
    "border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0.01)_100%)] backdrop-blur-sm",
  premium:
    "border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.90),rgba(4,8,20,0.96))] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]",
};

export function Card({
  children,
  className,
  variant = "default",
  glowPosition = "center",
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl border backdrop-blur-sm",
        variantClasses[variant],
        className
      )}
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(56,189,248,0.10),transparent_35%,rgba(139,92,246,0.08))]" />

      <div
        className={cn(
          "pointer-events-none absolute -z-10 h-48 w-full rounded-full blur-[100px] bg-blue-600/40",
          glowPosition === "top" && "left-0 top-0",
          glowPosition === "center" &&
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          glowPosition === "bottom" && "bottom-0 right-0"
        )}
      />

      {children}
    </div>
  );
}
