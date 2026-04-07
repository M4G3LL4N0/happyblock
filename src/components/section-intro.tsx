export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx(
      centered ? "mx-auto text-center" : "text-left",
      "max-w-3xl",
      className
    )}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-[0.2em] text-blue-400/80 uppercase mb-4">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          {description}
        </p>
      )}
    </div>
  );
}
