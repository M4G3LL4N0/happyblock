import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { PremiumWrapper } from "./premium-wrapper";

export function Hero() {
  return (
    <section className="relative pt-32 pb-40 sm:pt-48 sm:pb-56 isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-4xl h-[400px] bg-blue-800/10 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 from-10% via-gray-950/70 via-30% to-gray-950 to-90%" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(56,_189,_248,_0.1)_0%,_rgba(56,_189,_248,_0)_40%)]" />
      </div>

      <div className="px-6 mx-auto max-w-7xl">
        <PremiumWrapper className="mx-4 sm:mx-8">
          <div className="relative py-20 sm:py-28 px-12 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px]" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px]" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide rounded-full bg-blue-900/30 backdrop-blur text-blue-200 border border-blue-800/50 mb-8">
                <Globe className="w-4 h-4" />
                Redesigning urban experience
              </div>
              
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                The Operating System <br/>for Human-Centered Cities
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-blue-100/80 max-w-2xl mx-auto">
                HappyBlock translates urban planning into measurable outcomes. We create neighborhoods that thrive on happiness, access, and real-life experience.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" size="xl">
                  Get Started
                </Button>
                <Button variant="secondary" size="xl">
                  Platform Tour
                </Button>
              </div>
            </div>
          </div>
        </PremiumWrapper>
      </div>
    </section>
  );
}
