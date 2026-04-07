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
    "bg-neutral-900/80 text-white border border-neutral-700 hover:bg-neutral-800/90 hover:border-neutral-600 shadow-[0_0_20px_-10px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.4)] transition-all duration-300",
  ghost:
    "bg-transparent text-white border border-transparent hover:bg-neutral-900/50 hover:border-neutral-800 transition-all duration-300",
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
