import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import { ProjectTable } from "@/components/project-table";

export default async function DashboardPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return <div>Error loading projects</div>;
  }

  return (
    <div className="flex flex-col flex-1">
      <ProjectTable projects={projects as Project[]} />
    </div>
  );
}
