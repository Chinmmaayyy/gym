/**
 * Central registry of local image assets (static imports → automatic
 * next/image optimization, sizing, and blur placeholders).
 * Swap these files in `assets/` for real gym photography when available.
 */
import hero from "@/assets/hero.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import cardio from "@/assets/cardio.jpg";
import crossfit from "@/assets/crossfit.jpg";
import functional from "@/assets/functional.jpg";
import weights from "@/assets/weights.jpg";
import logo from "@/assets/key-fitness-logo.jpg";

export const IMG = {
  hero,
  gymInterior,
  cardio,
  crossfit,
  functional,
  weights,
  logo,
} as const;
