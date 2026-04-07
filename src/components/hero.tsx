import { Globe, Map, Building2, Train, ParkingSquare } from "lucide-react";
import { Button } from "./ui/button";
import { PremiumCard } from "./ui/cards/premium-card";

export function Hero() {
  return (
    <section className="relative pt-40 pb-56 sm:pt-56 sm:pb-72 isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/90 from-0% via-violet-950/95 via-30% to-fuchsia-950/95" />
        <div className="absolute inset-0 bg-[url('/public/window.svg')] bg-[size:1200px] bg-center opacity-[0.15]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-5xl h-[500px] bg-indigo-800/40 blur-[160px]" />
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-fuchsia-600/30 blur-[160px]" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-violet-600/30 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(192,132,252,0.25)_0%,_rgba(192,132,252,0)_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 from-0% via-transparent via-50% to-transparent to-100% animate-pulse-slow" />
      </div>

      <div className="px-6 mx-auto max-w-7xl">
        <div className="relative mx-4 sm:mx-8">
          <PremiumCard className="py-32 sm:py-40 px-8 sm:px-16">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-700/15 blur-[100px]" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-700/15 blur-[100px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide rounded-full bg-blue-900/40 backdrop-blur text-blue-200 border border-blue-800/50 mb-8 animate-fade-in">
                <Globe className="w-4 h-4" />
                Redesigning urban experience
              </div>
              
              <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent animate-fade-in">
                The Operating System <br/>for Human-Centered Cities
              </h1>
              
              <p className="mt-8 text-xl leading-8 text-neutral-300 max-w-2xl mx-auto animate-fade-in">
                HappyBlock translates urban planning into measurable outcomes. We create neighborhoods that thrive on happiness, access, and real-life experience.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
                <Button variant="primary" size="xl">
                  Get Started
                </Button>
                <Button variant="secondary" size="xl">
                  Platform Tour
                </Button>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 p-5 rounded-3xl bg-neutral-900/60 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                <Map className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-base font-medium text-white">Block Planning</div>
                  <div className="text-sm text-neutral-400">Optimize land use</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-3xl bg-neutral-900/60 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                <Building2 className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="text-base font-medium text-white">Mixed-Use</div>
                  <div className="text-sm text-neutral-400">Balanced districts</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-3xl bg-neutral-900/60 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                <Train className="w-6 h-6 text-green-400" />
                <div>
                  <div className="text-base font-medium text-white">Transit Hubs</div>
                  <div className="text-sm text-neutral-400">Connected corridors</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-3xl bg-neutral-900/60 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                <ParkingSquare className="w-6 h-6 text-orange-400" />
                <div>
                  <div className="text-base font-medium text-white">Conversions</div>
                  <div className="text-sm text-neutral-400">Repurpose spaces</div>
                </div>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
}
