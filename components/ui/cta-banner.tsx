import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { scaleIn } from "@/lib/animations";

/** Reusable "Ready to Start?" conversion banner — closes every page (Bible Part 4 & 9). */
export function CtaBanner({
  title = "Ready To Begin Your Fitness Journey?",
  subtitle = "Join Key Fitness today and train with certified professionals in a premium, fully air-conditioned space.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        <Reveal variant={scaleIn}>
          <div className="glass relative overflow-hidden rounded-section border border-primary/20 px-6 py-16 text-center md:px-12 md:py-20">
            <div className="ambient-glow -left-10 top-0 h-72 w-72 bg-primary/25" />
            <div className="ambient-glow -right-10 bottom-0 h-72 w-72 bg-primary-hover/20" />
            <div className="grid-overlay absolute inset-0 opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-tight text-fg sm:text-5xl md:text-6xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">{subtitle}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/membership" size="lg">
                  Join Now
                </ButtonLink>
                <ButtonLink href="/contact" size="lg" variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
