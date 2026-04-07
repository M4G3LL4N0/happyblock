import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumPanelProps {
  children: ReactNode;
  className?: string;
  glowPosition?: "top" | "center" | "bottom";
  innerClassName?: string;
}
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[40px] p-px",
        "bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-blue-800/5",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_40px_-10px_rgba(45,212,191,0.1)]",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_60px_-15px_rgba(45,212,191,0.2)]",
        "transition-all duration-500",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-950/40 to-blue-950/60" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,_rgba(56,189,248,0.2)_0%,_rgba(56,189,248,0)_50%)]" />
      <div className="absolute inset-0 -z-30 bg-[url('/public/window.svg')] bg-[size:1200px] bg-center opacity-[0.03]" />
      
      <div className={cn(
        "relative h-full w-full rounded-[40px] bg-gradient-to-b from-blue-950/30 via-blue-950/25 to-black/95 opacity-[0.99]",
        "backdrop-blur-[80px] transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
        "group-hover:from-blue-950/40 group-hover:to-black/90 group-hover:shadow-[0_0_60px_-15px_rgba(56,189,248,0.4)]",
        "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
        "before:from-blue-900/30 before:via-blue-950/40 before:to-blue-950/60 before:opacity-60",
        "before:transition-all before:duration-700",
        "group-hover:before:opacity-80 group-hover:before:blur-[1px]",
        innerClassName
      )}>
        {children}
        <div 
          className={cn(
            "absolute -z-10 w-full h-48 blur-[100px] rounded-full bg-blue-600/40",
            glowPosition === "top" && "top-0 left-0",
            glowPosition === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            glowPosition === "bottom" && "bottom-0 right-0"
          )}
        />
      </div>
    </div>
  );
}
