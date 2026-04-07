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
        <p className="text-xs uppercase tracking-[0.32em] text-neutral-500 mb-6">
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent">
          {title}
        </h2>
      ) : null}

      {description ? (
        <p className="mt-6 text-lg leading-8 text-neutral-300 sm:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
