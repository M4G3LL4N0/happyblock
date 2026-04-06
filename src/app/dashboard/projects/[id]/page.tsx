import { supabase } from "@/lib/supabase";
import { Project, Scenario } from "@/lib/types";
import { ScenarioCard } from "@/components/scenario-card";

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
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-8">{project.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios?.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario as Scenario}
            project={project as Project}
          />
        ))}
      </div>
    </div>
  );
}
