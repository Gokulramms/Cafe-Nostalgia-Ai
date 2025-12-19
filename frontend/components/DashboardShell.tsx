"use client";

import Link from "next/link";

export default function DashboardShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 p-6 space-y-4">
        <h1 className="text-xl font-bold">Cafe Nostalgia</h1>

        <nav className="space-y-2">
          <Link href="/dashboard" className="block text-neutral-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/ask-ai" className="block text-neutral-300 hover:text-white">
            Ask AI
          </Link>
          <Link href="/history" className="block text-neutral-300 hover:text-white">
            History
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        {children}
      </main>
    </div>
  );
}
