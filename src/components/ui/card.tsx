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
        "rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
