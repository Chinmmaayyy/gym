import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { PERSONAL_TRAINING_TIERS, formatPrice } from "@/lib/content";
import { IMG } from "@/lib/images";

export function PersonalTraining() {
  return (
    <Section id="personal-training">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image left (Bible Part 3) */}
        <Reveal variant={fadeLeft}>
          <div className="glass glow-primary overflow-hidden rounded-section p-1.5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
              <Image
                src={IMG.functional}
                alt="Certified trainer coaching a functional training session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Content right */}
        <Reveal variant={fadeRight}>
          <Badge tone="primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Personal Training
          </Badge>
          <h2 className="mt-4 font-display text-4xl uppercase text-fg sm:text-5xl">
            Train Smarter With <span className="text-primary">Expert Coaching</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Whether your goal is weight loss, muscle gain, improved athletic performance, or overall fitness, our
            certified trainers provide personalised programs that keep you motivated and accountable.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PERSONAL_TRAINING_TIERS.map((t) => (
              <div key={t.period} className="rounded-card border border-line bg-card p-4 text-center">
                <p className="font-display text-2xl text-primary">{formatPrice(t.price)}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-faint">{t.period}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ButtonLink href="/contact" size="lg">
              Book Personal Training
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
