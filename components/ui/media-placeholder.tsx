import { cn } from "@/lib/utils";

/**
 * Branded gradient placeholder standing in for premium photography until
 * client assets are supplied (Bible Part 10 — "realistic placeholder assets").
 * Uses a deterministic hue offset per `seed` so tiles feel varied, not flat.
 */
export function MediaPlaceholder({
  label,
  seed = 0,
  icon,
  className,
  aspect = "aspect-[4/3]",
}: {
  label?: string;
  seed?: number;
  icon?: React.ReactNode;
  className?: string;
  aspect?: string;
}) {
  const rotate = (seed * 37) % 360;
  return (
    <div
      className={cn("relative overflow-hidden bg-card", aspect, className)}
      style={{
        backgroundImage: `radial-gradient(120% 120% at ${20 + (seed % 3) * 25}% 0%, rgba(44,197,244,0.22), transparent 55%), linear-gradient(${rotate}deg, #0d0d0d, #141414)`,
      }}
    >
      <div className="grid-overlay absolute inset-0 opacity-60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        {icon && <span className="text-primary/70">{icon}</span>}
        {label && (
          <span className="font-display text-lg uppercase tracking-wider text-white/40">{label}</span>
        )}
      </div>
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}
