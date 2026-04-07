import clsx from "clsx";

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        centered ? "mx-auto text-center" : "text-left",
        "max-w-3xl",
        className
      )}
    >
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
  );
}
