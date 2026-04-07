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
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      )}

      {description && (
        <p className="mt-6 text-lg leading-8 text-blue-100 sm:text-xl max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
