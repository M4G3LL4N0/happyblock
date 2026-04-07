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
        "relative py-24 sm:py-32",
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
