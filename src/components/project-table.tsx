import { Project } from "@/lib/types";
import { Card } from "@/components/ui/card";

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:bg-zinc-900 transition-colors">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-zinc-400 line-clamp-3">{project.description}</p>
              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>{project.location}</span>
                <span>
                  Last updated: {new Date(project.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
