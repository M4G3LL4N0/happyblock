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
        "rounded-[32px] border border-neutral-800 bg-gradient-to-b from-neutral-950/70 to-neutral-950/90 backdrop-blur-2xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_40px_-10px_rgba(45,212,191,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
}
