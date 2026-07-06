import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

/** Cinematic inner-page banner with breadcrumb (Bible Part 4). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="ambient-glow -left-20 top-10 h-80 w-80 bg-primary/20" />
      <div className="ambient-glow right-0 top-0 h-72 w-72 bg-primary-hover/15" />
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg" />

      <div className="container-x relative z-10">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          {eyebrow && (
            <Badge tone="primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </Badge>
          )}
          <h1 className="font-display text-5xl uppercase leading-[0.95] text-fg sm:text-6xl md:text-7xl">{title}</h1>
          {subtitle && <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>}
          <nav aria-label="Breadcrumb" className="mt-2 flex items-center gap-1.5 text-sm text-faint">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-primary">{breadcrumb}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
