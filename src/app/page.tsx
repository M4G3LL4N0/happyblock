import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { ProductPreview } from "@/components/product-preview";
import { HowItWorks } from "@/components/how-it-works";
import { ProductModules } from "@/components/product-modules";
import { UseCaseCard } from "@/components/use-case-card";
import { LayoutGrid, Map, Building2, Train, ParkingSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PremiumPanel } from "@/components/premium-panel";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      
      <SectionWrapper variant="highlight">
        <PremiumPanel className="p-10 sm:p-14">
          <div className="space-y-16">
            <SectionIntro
              title="Product Preview"
              description="See HappyBlock in action with real-world scenario analysis and optimization"
              centered
            />
            <ProductPreview />
          </div>
        </PremiumPanel>
      </SectionWrapper>

      <SectionWrapper className="bg-neutral-950/50">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-neutral-400 text-lg">
              Our four-step process for smarter urban planning decisions
            </p>
          </div>
          <HowItWorks />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Core Product Modules</h2>
            <p className="text-neutral-400 text-lg">
              The building blocks of our spatial intelligence platform
            </p>
          </div>
          <ProductModules />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-neutral-950/50">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
            <p className="text-neutral-400 text-lg">
              Real-world applications of HappyBlock's technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="premium" className="p-6 hover:shadow-xl">
              <UseCaseCard
                icon={<LayoutGrid className="w-6 h-6" />}
                title="Downtown Revitalization"
                description="Transform underutilized urban cores into vibrant mixed-use districts"
              />
            </Card>
            <Card variant="premium" className="p-6 hover:shadow-xl">
              <UseCaseCard
                icon={<Map className="w-6 h-6" />}
                title="Transit Corridors"
                description="Optimize transit-oriented development for better connectivity"
              />
            </Card>
            <Card variant="premium" className="p-6 hover:shadow-xl">
              <UseCaseCard
                icon={<Building2 className="w-6 h-6" />}
                title="Mixed-Use Planning"
                description="Create balanced neighborhoods with diverse land uses"
              />
            </Card>
            <Card variant="premium" className="p-6 hover:shadow-xl">
              <UseCaseCard
                icon={<Train className="w-6 h-6" />}
                title="Station Area Planning"
                description="Maximize the potential of transit hubs"
              />
            </Card>
            <Card variant="premium" className="p-6 hover:shadow-xl">
              <UseCaseCard
                icon={<ParkingSquare className="w-6 h-6" />}
                title="Parking Lot Conversion"
                description="Repurpose underutilized spaces for community benefit"
              />
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
