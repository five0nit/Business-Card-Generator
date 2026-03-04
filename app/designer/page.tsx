import Link from "next/link";
import { DesignerShell } from "@/components/designer/DesignerShell";

export default function DesignerPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 pt-8">
        <div>
          <h1 className="text-2xl font-semibold">Designer</h1>
          <p className="text-sm text-zinc-400">Build a mono-PLA printable 3D business card.</p>
        </div>
        <nav className="flex gap-3 text-sm text-zinc-300">
          <Link href="/templates" className="hover:text-cyan-300">Templates</Link>
          <Link href="/switching-card" className="hover:text-cyan-300">Switching-card</Link>
        </nav>
      </header>

      <DesignerShell />
    </main>
  );
}
