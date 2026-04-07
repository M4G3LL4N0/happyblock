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
        "rounded-3xl border border-white/5 bg-gradient-to-b from-neutral-950/50 to-neutral-950/80 backdrop-blur-2xl p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_40px_-10px_rgba(45,212,191,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
}
