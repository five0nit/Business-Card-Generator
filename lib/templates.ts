export type PrintProfile = {
  recommendedNozzleMm: number;
  minFeatureMm: number;
  minTextHeightMm: number;
  safeDepthRangeMm: [number, number];
  preferredTextScale: number;
  preferredIconScale: number;
};

export type CardTemplate = {
  id: string;
  name: string;
  category: "minimal" | "tech" | "executive";
  description: string;
  monoPlaOptimized: boolean;
  printProfile: PrintProfile;
};

export const CARD_TEMPLATES: CardTemplate[] = [
  {
    id: "mono-minimal-01",
    name: "Mono Minimal",
    category: "minimal",
    description: "Clean emboss-focused layout tuned for single-color PLA.",
    monoPlaOptimized: true,
    printProfile: {
      recommendedNozzleMm: 0.4,
      minFeatureMm: 0.55,
      minTextHeightMm: 1.1,
      safeDepthRangeMm: [0.4, 1.6],
      preferredTextScale: 1,
      preferredIconScale: 1,
    },
  },
  {
    id: "mono-tech-01",
    name: "Mono Tech Grid",
    category: "tech",
    description: "Structured geometry with print-safe spacing for icons and labels.",
    monoPlaOptimized: true,
    printProfile: {
      recommendedNozzleMm: 0.4,
      minFeatureMm: 0.6,
      minTextHeightMm: 1.2,
      safeDepthRangeMm: [0.5, 1.8],
      preferredTextScale: 1.05,
      preferredIconScale: 1.1,
    },
  },
  {
    id: "mono-exec-01",
    name: "Mono Executive",
    category: "executive",
    description: "High-legibility hierarchy with conservative depth for reliable prints.",
    monoPlaOptimized: true,
    printProfile: {
      recommendedNozzleMm: 0.4,
      minFeatureMm: 0.65,
      minTextHeightMm: 1.25,
      safeDepthRangeMm: [0.35, 1.4],
      preferredTextScale: 0.95,
      preferredIconScale: 0.9,
    },
  },
];
