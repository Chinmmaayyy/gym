import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { PricingGrid } from "@/components/ui/pricing-grid";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { PERSONAL_TRAINING_TIERS, formatPrice } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Choose your Key Fitness membership — Gym, CrossFit, Cardio and combo plans with transparent pricing. Join today and start your transformation.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title={<>Choose Your Fitness Journey</>}
        subtitle="Transparent, flexible plans built around your goals and schedule. No hidden fees — just results."
        breadcrumb="Membership"
      />

      <Section className="!pt-4">
        <PricingGrid />
      </Section>

      {/* Personal Training pricing */}
      <Section surface="surface">
        <SectionHeading
          eyebrow="Personal Training"
          title={
            <>
              1-on-1 <span className="text-primary">Coaching Plans</span>
            </>
          }
          subtitle="Personalised programming and dedicated accountability from our certified trainers."
        />
        <Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAL_TRAINING_TIERS.map((t) => (
              <div key={t.period} className="rounded-card border border-line bg-card p-6 text-center">
                <p className="font-display text-4xl text-primary">{formatPrice(t.price)}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-faint">{t.period}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact" size="lg">
              Book Personal Training
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Membership <span className="text-primary">Questions</span>
            </>
          }
        />
        <div className="mt-12">
          <Reveal>
            <FaqAccordion />
          </Reveal>
        </div>
      </Section>

      <CtaBanner title="Start Your Transformation Today" />
    </>
  );
}
