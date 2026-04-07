import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-neutral-950`}
    >
      <body className="min-h-full flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-950 via-neutral-900 to-black text-neutral-100 animate-fade-in">
        <div className="flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
