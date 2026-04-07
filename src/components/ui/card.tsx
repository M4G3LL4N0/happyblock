import { ReactNode } from "react";
import clsx from "clsx";

type CardVariant = "default" | "secondary" | "glass" | "gradient" | "ghost" | "premium";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  innerClassName?: string;
};

const variantClasses: Record<CardVariant, string> = {
  default: "border-white/10 bg-white/5",
  secondary: "border-white/10 bg-neutral-950/70",
  glass: "border-white/10 bg-white/5 backdrop-blur-md",
  gradient: "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-sm",
  ghost: "border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0.01)_100%)] backdrop-blur-sm",
  premium: clsx(
    "border-white/10 bg-gradient-to-b from-blue-950/20 to-black",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.05)]",
    "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_30px_-10px_rgba(56,189,248,0.2)]",
    "backdrop-blur-[80px]"
  ),
};

export function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300",
        "hover:shadow-lg",
        variantClasses[variant],
        className
      )}
    >
      <div className={clsx("relative z-10", innerClassName)}>
        {children}
      </div>
      {variant === "premium" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(56,189,248,0.15)_0%,_rgba(56,189,248,0)_50%)]" />
        </>
      )}
    </div>
  );
}
