import clsx from "clsx";

type SectionIntroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionIntroProps) {
  return (
    <div
      className={clsx(
        centered ? "mx-auto text-center" : "text-left",
        "max-w-3xl",
        className
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
  );
}
