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
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  introClassName?: string;
  innerClassName?: string;
  container?: boolean;
  variant?: "default" | "highlight" | "subtle";
}) {
  const variants = {
    default: clsx(
      "relative py-40 sm:py-52",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-indigo-950/80 before:via-neutral-950/90 before:to-neutral-950/95",
      "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0)_100%)]"
    ),
    highlight: clsx(
      "relative py-40 sm:py-52",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-indigo-950/80 before:via-violet-950/90 before:to-fuchsia-950/95",
      "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0)_100%)]"
    ),
    subtle: clsx(
      "relative py-40 sm:py-52",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-neutral-950/80 before:via-neutral-950/90 before:to-neutral-950/95",
      "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0)_100%)]"
    ),
  };

  return (
    <section className={clsx(variants[variant], className)}>
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
