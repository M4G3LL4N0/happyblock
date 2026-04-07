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
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_60px_-15px_rgba(45,212,191,0.15)]",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_80px_-25px_rgba(45,212,191,0.2)] transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}
