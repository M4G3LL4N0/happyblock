import { ReactNode } from "react";
import clsx from "clsx";
import { SectionIntro } from "../section-intro";

export function SectionWrapper({
  children,
  className,
  eyebrow,
  title,
  description,
  introClassName,
  innerClassName,
  container = true,
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  introClassName?: string;
  innerClassName?: string;
  container?: boolean;
}) {
  return (
    <section 
      className={clsx(
        "relative py-40 sm:py-52",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-blue-900/25 before:via-neutral-950/90 before:to-neutral-950/95",
        "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0)_100%)]",
        "hover:before:opacity-95 hover:after:opacity-95 transition-all duration-500",
        className
      )}
    >
      {container ? (
        <div className={clsx("mx-auto max-w-7xl px-6", innerClassName)}>
          {(eyebrow || title || description) && (
            <SectionIntro
              eyebrow={eyebrow}
              title={title}
              description={description}
              className={introClassName}
            />
          )}
          {children}
        </div>
      ) : (
        <>
          {(eyebrow || title || description) && (
            <div className="mx-auto max-w-7xl px-6">
              <SectionIntro
                eyebrow={eyebrow}
                title={title}
                description={description}
                className={introClassName}
              />
            </div>
          )}
          {children}
        </>
      )}
    </section>
  );
}
