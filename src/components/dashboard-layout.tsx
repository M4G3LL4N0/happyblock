"use client";

import { SiteHeader } from "./site-header";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <SiteHeader />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">
                {pathname?.split("/").pop()?.replace("-", " ") || "Dashboard"}
              </h1>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
