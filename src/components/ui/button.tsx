import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-neutral-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all duration-300",
  secondary:
    "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white border border-violet-500/30 hover:from-violet-700 hover:to-fuchsia-700 shadow-[0_0_20px_-10px_rgba(192,132,252,0.4)] hover:shadow-[0_0_30px_-10px_rgba(192,132,252,0.5)] transition-all duration-300",
  ghost:
    "bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300",
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
    />
  );
}
