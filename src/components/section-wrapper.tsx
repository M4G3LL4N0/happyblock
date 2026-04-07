import { ReactNode } from "react";
import clsx from "clsx";

export function SectionWrapper({
  children,
  className,
  eyebrow,
  title,
  description,
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className={clsx("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6">
        {eyebrow || title || description ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-7 text-neutral-400 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
