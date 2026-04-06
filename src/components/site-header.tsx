import { Button } from "@/components/ui/button";
import { UserNav } from "@/components/user-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/50 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold tracking-tight">HappyBlock</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Documentation
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
