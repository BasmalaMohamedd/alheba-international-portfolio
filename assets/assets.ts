import steelCover from "./steel-cover.png";
import medicalCover from "./medical-cover.jpeg";

export const ASSETS = {
  steelCover,
  medicalCover,
} as const;

export type AssetKey = keyof typeof ASSETS;