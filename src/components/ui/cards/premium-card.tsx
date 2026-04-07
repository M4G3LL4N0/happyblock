import { ReactNode } from "react";
import clsx from "clsx";

export function PremiumCard({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlight" | "subtle";
}) {
  const variants = {
    default: clsx(
      "rounded-[32px] border border-white/5 bg-gradient-to-b from-neutral-950/80 to-neutral-950/95 backdrop-blur-[20px]",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_60px_-15px_rgba(45,212,191,0.15)]",
      "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_80px_-25px_rgba(45,212,191,0.2)] transition-all",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-blue-900/10 before:via-transparent before:to-transparent",
      "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(120deg,_rgba(56,_189,_248,_0.1)_0%,_rgba(56,_189,_248,_0)_40%)]"
    ),
    highlight: clsx(
      "rounded-[32px] border border-white/5 bg-gradient-to-b from-indigo-950/80 to-indigo-950/95 backdrop-blur-[20px]",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_60px_-15px_rgba(99,102,241,0.15)]",
      "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_80px_-25px_rgba(99,102,241,0.2)] transition-all",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-indigo-900/10 before:via-transparent before:to-transparent"
    ),
    subtle: clsx(
      "rounded-[32px] border border-white/5 bg-gradient-to-b from-neutral-950/80 to-neutral-950/95 backdrop-blur-[20px]",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_40px_-10px_rgba(45,212,191,0.1)]",
      "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_60px_-15px_rgba(45,212,191,0.15)] transition-all"
    ),
  };

  return (
    <div className={clsx(variants[variant], "relative overflow-hidden", className)}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
