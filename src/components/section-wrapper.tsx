import { ReactNode } from "react";
import clsx from "clsx";
import { SectionIntro } from "@/components/section-intro";

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
        "relative py-32 sm:py-40",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-neutral-900/30 before:via-transparent before:to-transparent",
        "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_100%)]",
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
