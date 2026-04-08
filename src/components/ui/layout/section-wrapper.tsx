import { ReactNode } from "react";
import clsx from "clsx";

export function SectionWrapper({
  children,
  className,
  eyebrow,
  title,
  description,
  centered = false,
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <section className={clsx("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || description) && (
          <div
            className={clsx(
              centered ? "mx-auto text-center" : "text-left",
              "max-w-3xl mb-12"
            )}
          >
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.32em] text-white/40">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 text-base sm:text-lg leading-7 text-white/60">
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
