import { ReactNode } from "react";
import clsx from "clsx";

type CardVariant = "default" | "secondary" | "glass" | "gradient" | "ghost";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  default: "border-white/10 bg-white/5",
  secondary: "border-white/10 bg-neutral-950/70",
  glass: "border-white/10 bg-white/5 backdrop-blur-md",
  gradient:
    "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-sm",
  ghost:
    "border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0.01)_100%)] backdrop-blur-sm",
};

export function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border backdrop-blur-sm",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
