import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, Dumbbell, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { STATS } from "@/lib/content";
import { IMG } from "@/lib/images";
import { Counter } from "@/components/motion/counter";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Key Fitness — a premium fully air-conditioned unisex gym built to help you build a stronger, healthier life with certified trainers and modern equipment.",
  alternates: { canonical: "/about" },
};

const CORE_VALUES = [
  { icon: ShieldCheck, title: "Discipline", text: "Consistency and structure are the foundation of every transformation." },
  { icon: HeartHandshake, title: "Community", text: "A supportive environment where every member feels they belong." },
  { icon: Sparkles, title: "Excellence", text: "Premium equipment, hygiene, and coaching held to the highest standard." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Key Fitness"
        title={<>Built To Make You Stronger</>}
        subtitle="We're on a mission to build stronger, healthier lives through world-class training, expert guidance, and a premium fitness environment."
        breadcrumb="About"
      />

      {/* Our Story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant={fadeLeft}>
            <div className="glass glow-primary overflow-hidden rounded-section p-1.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                <Image
                  src={IMG.gymInterior}
                  alt="Inside the Key Fitness training floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal variant={fadeRight}>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  More Than A <span className="text-primary">Gym</span>
                </>
              }
            />
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>
                Key Fitness was founded on a simple belief: great results come from the right environment, expert
                guidance, and consistent effort. We built a space where beginners and experienced athletes can train
                with confidence.
              </p>
              <p>
                From our fully air-conditioned floors and premium equipment to our certified trainers and recovery
                facilities, every detail is designed to help you perform at your best — and keep coming back.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label} className="rounded-card border border-line bg-card p-4 text-center">
                  <dd className="font-display text-3xl text-primary">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-wider text-faint">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section surface="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal variant={fadeLeft}>
            <div className="h-full rounded-section border border-line bg-card p-8">
              <span className="grid h-14 w-14 place-items-center rounded-btn border border-primary/20 bg-primary/10 text-primary">
                <Target size={26} />
              </span>
              <h3 className="mt-5 font-display text-3xl uppercase text-fg">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted">
                To make premium fitness accessible — empowering every member to build strength, lose weight, improve
                endurance, and achieve their goals in a motivating, world-class space.
              </p>
            </div>
          </Reveal>
          <Reveal variant={fadeRight}>
            <div className="h-full rounded-section border border-line bg-card p-8">
              <span className="grid h-14 w-14 place-items-center rounded-btn border border-highlight/20 bg-highlight/10 text-highlight">
                <Eye size={26} />
              </span>
              <h3 className="mt-5 font-display text-3xl uppercase text-fg">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted">
                To become the most trusted premium fitness destination — known for exceptional coaching, spotless
                facilities, and a community that transforms lives, one member at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeading
          eyebrow="Core Values"
          title={
            <>
              What We <span className="text-primary">Stand For</span>
            </>
          }
        />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {CORE_VALUES.map((v) => (
            <FeatureCard key={v.title} icon={<v.icon size={26} />} title={v.title} text={v.text} />
          ))}
        </StaggerGroup>
      </Section>

      {/* Equipment & Trainers */}
      <Section surface="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <FeatureCard
              icon={<Dumbbell size={26} />}
              title="Premium Equipment"
              text="High-quality machines, free weights, and functional gear maintained to the highest standard so you always train with the best."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureCard
              icon={<ShieldCheck size={26} />}
              title="Certified Trainers"
              text="Experienced, certified professionals who guide your form, programming, and progress every step of the way."
            />
          </Reveal>
        </div>
      </Section>

      <CtaBanner title="Ready To Train With The Best?" />
    </>
  );
}
