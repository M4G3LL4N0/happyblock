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
    <section className={clsx("py-32 sm:py-40", className)}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || description) && (
          <div className="mx-auto max-w-3xl text-center mb-16">
            {eyebrow && (
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 text-lg leading-8 text-neutral-400 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
