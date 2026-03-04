"use client";

import { useMemo, useState } from "react";
import { PreviewCanvas3D } from "./PreviewCanvas3D";
import { DEFAULT_CONTROLS, type DesignerControlState } from "./types";

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-300">{label}</span>
        <span className="font-mono text-zinc-400">{value.toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-cyan-400"
      />
    </label>
  );
}

export function DesignerShell() {
  const [controls, setControls] = useState<DesignerControlState>(DEFAULT_CONTROLS);

  const clampedControls = useMemo(
    () => ({
      cameraAngle: Math.min(55, Math.max(10, controls.cameraAngle)),
      depth: Math.min(2, Math.max(0.2, controls.depth)),
      textScale: Math.min(1.8, Math.max(0.7, controls.textScale)),
      iconScale: Math.min(1.8, Math.max(0.7, controls.iconScale)),
    }),
    [controls]
  );

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 md:grid-cols-[340px_1fr]">
      <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
        <h2 className="mb-1 text-lg font-semibold">Design Controls</h2>
        <p className="mb-6 text-sm text-zinc-400">Mono-PLA tuned controls (scaffold)</p>

        <div className="space-y-5">
          <Slider
            label="Camera angle"
            min={10}
            max={55}
            step={1}
            value={clampedControls.cameraAngle}
            onChange={(cameraAngle) => setControls((s) => ({ ...s, cameraAngle }))}
          />
          <Slider
            label="Depth (mm)"
            min={0.2}
            max={2}
            step={0.05}
            value={clampedControls.depth}
            onChange={(depth) => setControls((s) => ({ ...s, depth }))}
          />
          <Slider
            label="Text scale"
            min={0.7}
            max={1.8}
            step={0.05}
            value={clampedControls.textScale}
            onChange={(textScale) => setControls((s) => ({ ...s, textScale }))}
          />
          <Slider
            label="Icon scale"
            min={0.7}
            max={1.8}
            step={0.05}
            value={clampedControls.iconScale}
            onChange={(iconScale) => setControls((s) => ({ ...s, iconScale }))}
          />
        </div>
      </aside>

      <PreviewCanvas3D controls={clampedControls} />
    </section>
  );
}
