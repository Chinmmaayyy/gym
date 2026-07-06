import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

/** Section wrapper — enforces consistent vertical rhythm & surface tones. */
export function Section({
  children,
  id,
  surface = "bg",
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  id?: string;
  surface?: "bg" | "surface";
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-20 md:py-28 lg:py-32",
        surface === "surface" ? "bg-surface" : "bg-bg",
        className,
      )}
    >
      <div className={cn("container-x relative z-10", containerClassName)}>{children}</div>
    </section>
  );
}

/** Standardised eyebrow + title + subtitle block. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Badge tone="primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-display text-4xl uppercase text-fg sm:text-5xl md:text-6xl">{title}</h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-base leading-relaxed text-muted md:text-lg", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
