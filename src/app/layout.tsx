import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HappyBlock - Urban Intelligence Platform",
  description: "The operating system for human-centered urban design. Optimizing cities for happiness, access, and real-life experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-neutral-950"
    >
      <body className="min-h-full flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-violet-900 to-fuchsia-950 text-neutral-100 animate-fade-in selection:bg-primary/80">
        <div className="flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
