import type { DesignerControlState } from "./types";

type PreviewCanvas3DProps = {
  controls: DesignerControlState;
};

export function PreviewCanvas3D({ controls }: PreviewCanvas3DProps) {
  const perspective = 900;
  const rotationX = controls.cameraAngle;
  const depthVisual = Math.max(2, controls.depth * 8);

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
        <span>3D Preview (Scaffold)</span>
        <span>Perspective: {perspective}px</span>
      </div>

      <div
        className="relative h-[20rem] w-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 to-black md:h-[24rem]"
        style={{ perspective: `${perspective}px` }}
      >
        <div
          className="absolute left-1/2 top-1/2 w-[92%] max-w-[560px] -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: "preserve-3d",
            transform: `translate(-50%, -50%) rotateX(${rotationX}deg) rotateZ(-8deg)`,
          }}
        >
          <div
            className="relative aspect-[1.59/1] w-full rounded-xl border border-zinc-600 bg-zinc-100 text-zinc-900"
            style={{ boxShadow: `0 ${depthVisual}px 24px rgba(0,0,0,0.45)` }}
          >
            <div className="absolute inset-0 p-5">
              <div
                className="font-semibold tracking-tight"
                style={{ fontSize: `${1.15 * controls.textScale}rem` }}
              >
                Alex Rivera
              </div>
              <div
                className="mt-1 text-zinc-600"
                style={{ fontSize: `${0.8 * controls.textScale}rem` }}
              >
                Product Engineer
              </div>

              <div className="mt-8 grid grid-cols-[30px_1fr] gap-x-3 gap-y-2.5">
                {[
                  ["✉", "alex@brand.dev"],
                  ["☎", "+61 400 000 000"],
                  ["⌂", "sydney.brand.dev"],
                ].map(([icon, text]) => (
                  <div key={`${icon}-${text}`} className="contents">
                    <div style={{ fontSize: `${1.35 * controls.iconScale}rem`, lineHeight: 1 }}>{icon}</div>
                    <div className="text-sm text-zinc-700">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="absolute inset-x-0 bottom-0 h-2 rounded-b-xl bg-zinc-300"
              style={{ transform: `translateZ(-${controls.depth}px)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
