import steelCover from "./steel-cover.png";
import medicalCover from "./medical-cover.jpeg";
import rebarImg from "./rebar-steel-01.jpeg";
import billetImg from "./billet-steel-01.jpeg"
export const ASSETS = {
  steelCover,
  medicalCover,
  rebarImg,
  billetImg
} as const;

export type AssetKey = keyof typeof ASSETS;