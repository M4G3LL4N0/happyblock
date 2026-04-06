import { Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-4 max-w-4xl">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur">
          <Globe className="w-5 h-5 text-zinc-400" />
          <span className="text-sm font-medium text-zinc-400">
            Designing happier cities
          </span>
        </div>
        
        <h1 className="text-6xl font-semibold tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
          AI-Powered Urban Planning
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl">
          HappyBlock optimizes blocks, corridors, and developments for happiness, access, and real-life experience. 
          We design neighborhoods people actually want to live in.
        </p>
        
        <div className="flex gap-4 mt-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
