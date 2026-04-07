import { Globe, Map, Building2, Train, ParkingSquare } from "lucide-react";
import { Button } from "./ui/button";
import { PremiumCard } from "./ui/cards/premium-card";

export function Hero() {
  return (
    <section className="relative pt-32 pb-40 sm:pt-48 sm:pb-56 isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/80 from-0% via-violet-950/90 via-30% to-fuchsia-950/95" />
        <div className="absolute inset-0 bg-[url('/public/window.svg')] bg-[size:1200px] bg-center opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-violet-950/95 to-fuchsia-950" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-4xl h-[400px] bg-indigo-800/30 blur-[140px]" />
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-fuchsia-600/25 blur-[140px]" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-violet-600/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(192,132,252,0.2)_0%,_rgba(192,132,252,0)_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/15 from-0% via-transparent via-50% to-transparent to-100% animate-pulse-slow" />
      </div>

      <div className="px-6 mx-auto max-w-7xl">
        <div className="relative mx-4 sm:mx-8">
          <PremiumCard className="py-24 sm:py-32 px-8 sm:px-12">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px]" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px]" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide rounded-full bg-blue-900/30 backdrop-blur text-blue-200 border border-blue-800/50 mb-8 animate-fade-in">
                <Globe className="w-4 h-4" />
                Redesigning urban experience
              </div>
              
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent animate-fade-in">
                The Operating System <br/>for Human-Centered Cities
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-neutral-300 max-w-2xl mx-auto animate-fade-in">
                HappyBlock translates urban planning into measurable outcomes. We create neighborhoods that thrive on happiness, access, and real-life experience.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
                <Button variant="primary" size="xl">
                  Get Started
                </Button>
                <Button variant="secondary" size="xl">
                  Platform Tour
                </Button>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-900/50 backdrop-blur border border-white/5">
                <Map className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-sm font-medium text-white">Block Planning</div>
                  <div className="text-xs text-neutral-400">Optimize land use</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-900/50 backdrop-blur border border-white/5">
                <Building2 className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-sm font-medium text-white">Mixed-Use</div>
                  <div className="text-xs text-neutral-400">Balanced districts</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-900/50 backdrop-blur border border-white/5">
                <Train className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-sm font-medium text-white">Transit Hubs</div>
                  <div className="text-xs text-neutral-400">Connected corridors</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-900/50 backdrop-blur border border-white/5">
                <ParkingSquare className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="text-sm font-medium text-white">Conversions</div>
                  <div className="text-xs text-neutral-400">Repurpose spaces</div>
                </div>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
}
