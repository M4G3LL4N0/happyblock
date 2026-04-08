import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-slate-950 hover:bg-slate-100 shadow-[0_10px_30px_rgba(255,255,255,0.12)]",
  secondary:
    "border border-white/15 bg-white/8 text-white hover:bg-white/12 backdrop-blur-md",
  ghost:
    "border border-transparent bg-transparent text-white/85 hover:bg-white/8 hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm rounded-lg",
  md: "h-10 px-4 text-sm rounded-xl",
  lg: "h-11 px-5 text-base rounded-xl",
  xl: "h-12 px-6 text-base rounded-2xl sm:h-14 sm:px-8 sm:text-lg",
};

export function Button({
  children,
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
        "inline-flex items-center justify-center font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
