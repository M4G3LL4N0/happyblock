import Link from "next/link";

const demoProjects = [
  {
    id: "downtown-redevelopment",
    name: "Downtown Redevelopment",
    location: "Redwood City, CA",
    type: "Mixed-use district",
    status: "Active",
  },
  {
    id: "transit-corridor-optimization",
    name: "Transit Corridor Optimization",
    location: "San Mateo County, CA",
    type: "Corridor plan",
    status: "Scenario testing",
  },
  {
    id: "parking-lot-conversion",
    name: "Parking Lot Conversion",
    location: "Mountain View, CA",
    type: "Infill development",
    status: "Draft",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
              HappyBlock Dashboard
            </p>
            <h1 className="text-4xl font-semibold tracking-tight">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">
              Review active redevelopment, corridor, and site optimization
              projects. Compare spatial strategies, livability outcomes, and
              scenario readiness from one workspace.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-800"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="grid gap-4">
          {demoProjects.map((project) => (
            <Link
              key={project.id}
              href={`/dashboard/projects/${project.id}`}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.24em] text-neutral-500">
                    {project.type}
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400">
                    {project.location}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-emerald-800 bg-emerald-950/60 px-3 py-1 text-xs font-medium text-emerald-300">
                    {project.status}
                  </span>
                  <span className="text-sm text-neutral-500">
                    Open project →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
