import { ReactNode } from "react";
import clsx from "clsx";

type CardVariant = "default" | "secondary" | "glass" | "gradient" | "ghost" | "premium" | "featured";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  innerClassName?: string;
  glowPosition?: "top" | "center" | "bottom";
}

const variantClasses: Record<CardVariant, string> = {
  default: "border-white/10 bg-white/5",
  secondary: "border-white/10 bg-neutral-950/70",
  glass: "border-white/10 bg-white/5 backdrop-blur-md",
  gradient: "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-sm",
  ghost: "border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0.01)_100%)] backdrop-blur-sm",
  premium: [
    "border-white/10 bg-gradient-to-b from-blue-950/20 to-black",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.05)]",
    "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_30px_-10px_rgba(56,189,248,0.2)]",
    "backdrop-blur-[80px]"
  ],
  featured: [
    "border-blue-900/20 bg-gradient-to-br from-blue-950/40 via-black/90 to-indigo-950/60",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_-10px_rgba(59,130,246,0.25)]",
    "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_25px_50px_-10px_rgba(59,130,246,0.35)]",
    "backdrop-blur-[20px] backdrop-saturate-150",
    "transition-all duration-500 ease-out"
  ].join(" "),
};

export function Card({
  children,
  className,
  variant = "default",
  innerClassName,
  glowPosition = "center",
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 group",
        "hover:shadow-lg hover:border-white/20 hover:scale-[1.01]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className={clsx("relative z-10", innerClassName)}>
        {children}
      </div>
      {variant === "premium" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(56,189,248,0.15)_0%,_rgba(56,189,248,0)_50%)]" />
          <div 
            className={cn(
              "absolute -z-10 w-full h-48 blur-[100px] rounded-full bg-blue-600/40",
              glowPosition === "top" && "top-0 left-0",
              glowPosition === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              glowPosition === "bottom" && "bottom-0 right-0"
            )}
          />
        </>
      )}
    </div>
  );
}
