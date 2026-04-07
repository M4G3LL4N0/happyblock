import clsx from "clsx";
import { ReactNode } from "react";

export function PremiumWrapper({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={clsx(
      "relative rounded-[40px] overflow-hidden",
      "border border-white/5 backdrop-blur-[80px]",
      "bg-gradient-to-b from-blue-950/20 to-black",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_40px_-10px_rgba(45,212,191,0.1)]",
      className
    )}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 from-0% to-transparent to-70% pointer-events-none" />
      <div className={clsx(
        "relative z-10",
        innerClassName
      )}>
        {children}
      </div>
    </div>
  );
}
