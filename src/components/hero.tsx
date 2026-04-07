import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { PremiumPanel } from "./premium-panel";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] w-full bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-neutral-950/70 via-neutral-950 to-neutral-950" />
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      <PremiumPanel className="relative z-10 mx-4 p-8 sm:p-12 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur">
            <Globe className="w-5 h-5 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-400">
              Designing happier cities
            </span>
          </div>
          
          <h1 className="text-6xl font-semibold tracking-tight bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent sm:text-7xl">
            The Operating System <br className="hidden sm:block" />
            for Human-Centered Urban Design
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl">
            HappyBlock optimizes blocks, corridors, and developments for happiness, access, and real-life experience. 
            We design neighborhoods people actually want to live in.
          </p>
          
          <div className="flex gap-4 mt-6">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </PremiumPanel>
    </div>
  );
}
