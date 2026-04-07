import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { PremiumWrapper } from "./premium-wrapper";

export function Hero() {
  return (
    <section className="relative pt-32 pb-40 sm:pt-48 sm:pb-56 isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/25 from-0% via-neutral-950/85 via-30% to-neutral-950 to-90%" />
        <div className="absolute inset-0 bg-[url('/public/window.svg')] bg-[size:1200px] bg-center opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/25 via-neutral-950/95 to-neutral-950" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-4xl h-[400px] bg-blue-800/25 blur-[140px]" />
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-700/20 blur-[140px]" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-700/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(56,_189,_248,_0.15)_0%,_rgba(56,_189,_248,_0)_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 from-0% via-transparent via-50% to-transparent to-100% animate-pulse-slow" />
      </div>

      <div className="px-6 mx-auto max-w-7xl">
        <div className="relative mx-4 sm:mx-8">
          <div className="relative py-20 sm:py-28 px-8 sm:px-12 overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-b from-blue-950/20 to-black backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_40px_-10px_rgba(45,212,191,0.1)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
