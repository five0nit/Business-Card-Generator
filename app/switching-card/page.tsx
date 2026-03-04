export default function SwitchingCardPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Switching-Card Mode</h1>
      <p className="mt-2 text-zinc-400">
        Scaffold route for multi-variant card sets (e.g. role-specific fronts with shared contact back).
      </p>

      <section className="mt-8 rounded-2xl border border-dashed border-zinc-700 p-6">
        <h2 className="text-lg font-medium">Planned capabilities</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-400">
          <li>Variant set manager (A/B/C faces)</li>
          <li>Shared baseline template + per-variant overrides</li>
          <li>Batch STL export with print-profile lock</li>
        </ul>
      </section>
    </main>
  );
}
