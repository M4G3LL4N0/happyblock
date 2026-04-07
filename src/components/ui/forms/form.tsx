import { ReactNode } from "react";
import clsx from "clsx";

export function Form({
  children,
  className,
  onSubmit,
}: {
  children: ReactNode;
  className?: string;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={clsx("space-y-6", className)}
    >
      {children}
    </form>
  );
}
