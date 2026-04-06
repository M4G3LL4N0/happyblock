import { Sidebar } from "@/components/site-nav";
import { SiteHeader } from "@/components/site-header";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
