import { ReactNode } from "react";
import clsx from "clsx";
import { SectionIntro } from "@/components/section-intro";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  introClassName?: string;
  innerClassName?: string;
  container?: boolean;
  variant?: "default" | "highlight" | "subtle";
}

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
}: SectionWrapperProps) {
  const variants = {
    default: clsx(
      "relative py-24 md:py-32 lg:py-40",
      "before:absolute before:inset-0 before:-z-10 before:transition-all before:duration-500",
      "before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
      "before:from-blue-950/80 before:via-blue-950/90 before:to-blue-950",
      "hover:before:from-blue-950/90 hover:before:via-blue-950/95 hover:before:to-blue-950",
      "after:absolute after:inset-0 after:-z-20",
      "after:bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]"
    ),
    highlight: clsx(
      "relative py-32 sm:py-40",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
      "before:from-violet-950/80 before:via-blue-950/90 before:to-indigo-950",
      "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_100%)]"
    ),
    subtle: clsx(
      "relative py-24 sm:py-32",
      "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
      "before:from-neutral-950/90 before:via-neutral-950/95 before:to-black",
      "after:absolute after:inset-0 after:-z-20 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,0)_100%)]"
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
