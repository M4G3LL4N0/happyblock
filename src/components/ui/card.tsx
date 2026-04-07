import { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "ghost";
}) {
  const variants = {
    default: clsx(
      "rounded-3xl border border-white/5 bg-gradient-to-b from-neutral-900/30 to-neutral-900/50 backdrop-blur-[10px] p-6",
      "shadow-[0_2px_4px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)]",
      "hover:shadow-[0_4px_12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)]",
      "hover:border-white/10 hover:translate-y-[-2px]",
      "transition-all duration-300 ease-out"
    ),
    secondary: clsx(
      "rounded-3xl border border-white/5 bg-gradient-to-b from-neutral-900/60 to-black/80 backdrop-blur-[10px] p-6",
      "shadow-[0_4px_16px_rgba(0,0,0,0.4)]",
      "hover:shadow-[0_6px_24px_rgba(0,0,0,0.5)]",
      "hover:bg-neutral-900/50",
      "transition-all duration-300 ease-out"
    ),
    ghost: clsx(
      "rounded-3xl border border-transparent bg-transparent p-6",
      "hover:bg-neutral-900/40 hover:border-white/5",
      "transition-all duration-200 ease-in-out"
    ),
  };

  return (
    <div className={clsx(variants[variant], className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 transition-all duration-300">
      {children}
    </div>
  );
}
