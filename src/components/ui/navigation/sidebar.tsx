"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, Settings, BarChart } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: <Map className="w-5 h-5" />,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-64 border-r border-secondary h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold">HappyBlock</h1>
      </div>
      <nav className="space-y-1 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
