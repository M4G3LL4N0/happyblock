import { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/5 bg-gradient-to-b from-neutral-900/20 to-neutral-900/40 backdrop-blur-2xl p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_80px_-20px_rgba(192,132,252,0.3)]",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_100px_-30px_rgba(192,132,252,0.4)] transition-all duration-300",
        "hover:border-violet-500/20 hover:bg-neutral-900/40",
        className
      )}
    >
      {children}
    </div>
  );
}
