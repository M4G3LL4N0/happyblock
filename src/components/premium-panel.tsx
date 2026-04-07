import clsx from "clsx";
import { ReactNode } from "react";

export function PremiumPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative isolate overflow-hidden rounded-[40px]",
        "border border-white/5 bg-gradient-to-b from-blue-950/10 to-blue-950/30",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.5)]",
        "hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_50px_-10px_rgba(0,0,0,0.6)]",
        "transition-all duration-500",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
        "before:from-blue-900/20 before:via-blue-950/30 before:to-blue-950/50",
        "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(120deg,_rgba(56,189,248,0.15)_0%,_rgba(56,189,248,0)_50%)]",
        className
      )}
    >
      <div className="absolute inset-0 -z-30 bg-[url('/public/window.svg')] bg-[size:1200px] bg-center opacity-[0.02]" />
      {children}
    </div>
  );
}
