import { cn } from "@/lib/utils";

type BadgeTone = "primary" | "highlight" | "neutral";

const tones: Record<BadgeTone, string> = {
  primary: "border-primary/30 bg-primary/10 text-primary",
  highlight: "border-highlight/30 bg-highlight/10 text-highlight",
  neutral: "border-line bg-fg/[0.03] text-muted",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
