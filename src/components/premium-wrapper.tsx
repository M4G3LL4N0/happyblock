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
      "bg-gradient-to-b from-blue-950/70 to-gray-950/90",
      "shadow-[0_8px_60px_-20px_rgba(101,122,255,0.15)]",
      className
    )}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/10 from-0% to-transparent to-70% pointer-events-none" />
      <div className={clsx(
        "relative z-10",
        innerClassName
      )}>
        {children}
      </div>
    </div>
  );
}
