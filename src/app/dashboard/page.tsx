import { DashboardLayout } from "@/components/dashboard-layout";
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
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Total Projects</h3>
            <p className="text-2xl font-bold mt-2">{projects?.length || 0}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Active Scenarios</h3>
            <p className="text-2xl font-bold mt-2">12</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-sm font-medium text-secondary-foreground">Average HappyScore</h3>
            <p className="text-2xl font-bold mt-2">78%</p>
          </div>
        </div>
        <ProjectTable projects={projects as Project[]} />
      </div>
    </DashboardLayout>
  );
}
