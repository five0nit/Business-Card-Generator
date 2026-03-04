import { CARD_TEMPLATES } from "@/lib/templates";

export default function TemplatesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Templates</h1>
      <p className="mt-2 text-sm text-zinc-400">Mono-PLA-optimized presets and print-safe defaults.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CARD_TEMPLATES.map((tpl) => (
          <article key={tpl.id} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-cyan-300">{tpl.category}</p>
            <h2 className="mt-1 text-lg font-medium">{tpl.name}</h2>
            <p className="mt-2 text-sm text-zinc-400">{tpl.description}</p>

            <dl className="mt-4 space-y-1 text-xs text-zinc-300">
              <div className="flex justify-between"><dt>Nozzle</dt><dd>{tpl.printProfile.recommendedNozzleMm} mm</dd></div>
              <div className="flex justify-between"><dt>Min feature</dt><dd>{tpl.printProfile.minFeatureMm} mm</dd></div>
              <div className="flex justify-between"><dt>Depth range</dt><dd>{tpl.printProfile.safeDepthRangeMm[0]}–{tpl.printProfile.safeDepthRangeMm[1]} mm</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </main>
  );
}
