import clsx from "clsx";

interface SectionIntroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  children,
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
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className={cn(
            "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
            "transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
            "hover:from-blue-500 hover:to-cyan-500 hover:shadow-[0_0_50px_-10px_rgba(56,189,248,0.4)]",
            "inline-block hover:scale-[1.015] hover:translate-y-[-1px]"
          )}>
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
