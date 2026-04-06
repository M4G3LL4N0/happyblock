import { DashboardLayout } from "@/components/dashboard-layout";
import { supabase } from "@/lib/supabase";
import { Project, Scenario } from "@/lib/types";
import { ScenarioCard } from "@/components/scenario-card";
import { ScenarioForm } from "@/components/scenario-form";
import { LandUseChart } from "@/components/land-use-chart";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single();

  const { data: scenarios } = await supabase
    .from("scenarios")
    .select("*")
    .eq("project_id", params.id)
    .order("created_at", { ascending: false });

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Total Scenarios</h3>
            <p className="text-2xl font-bold mt-2">{scenarios?.length || 0}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Best HappyScore</h3>
            <p className="text-2xl font-bold mt-2">82%</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Last Updated</h3>
            <p className="text-2xl font-bold mt-2">2 days ago</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Land Use Breakdown</h2>
            <LandUseChart />
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Scenario Comparison</h2>
            <div className="space-y-4">
              {scenarios?.map((scenario) => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario as Scenario}
                  project={project as Project}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Create New Scenario</h2>
          <ScenarioForm projectId={params.id} />
        </div>
      </div>
    </DashboardLayout>
  );
}
