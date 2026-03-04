import Link from "next/link";

const nav = [
  { href: "/designer", title: "Open Designer", blurb: "Primary build surface for 3D printable cards." },
  { href: "/templates", title: "Browse Templates", blurb: "Mono-PLA-safe template catalog and print profiles." },
  { href: "/switching-card", title: "Switching-Card Mode", blurb: "Scaffold for swappable variant cards." },
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">3D Business Card Studio</h1>
      <p className="mt-3 max-w-2xl text-zinc-400">
        Consumer-ready rebuild in progress: mono-PLA-aware templates, live 3D preview, and STL export pipeline.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-cyan-400/60 hover:bg-zinc-900"
          >
            <h2 className="text-lg font-medium">{item.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{item.blurb}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
