import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "secondary" | "ghost" | "premium" | "link";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-white text-black hover:bg-neutral-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all duration-300",
  secondary: "bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300",
  ghost:
    "bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300",
  premium:
    "bg-gradient-to-br from-blue-600 to-cyan-500 text-white border border-blue-500/30 hover:from-blue-700 hover:to-cyan-600 shadow-[0_0_20px_-10px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.5)] transition-all duration-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
  xl: "h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-medium transition",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span className="opacity-80">{loadingText || props.children}</span>
        </span>
      ) : (
        <span className="relative z-10">{props.children}</span>
      )}
      {variant === 'premium' && !isLoading && (
        <span className="absolute inset-0 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%)]" />
      )}
    </button>
  );
}
