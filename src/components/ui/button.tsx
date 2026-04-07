import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-gray-950 hover:bg-white/95 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all",
  secondary: "bg-transparent text-white border border-white/10 hover:border-white/20 hover:bg-white/5 backdrop-blur-md",
  ghost: "bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-base",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-lg",
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
