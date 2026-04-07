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
        "relative h-full w-full rounded-[40px] bg-gradient-to-b from-blue-950/20 to-black/90 backdrop-blur-[80px]",
        "transition-all duration-500 group-hover:from-blue-950/30 group-hover:to-black/80",
        "hover:shadow-[0_0_40px_-15px_rgba(56,189,248,0.3)]",
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
