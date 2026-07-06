import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { TrainerCard } from "@/components/ui/trainer-card";
import { StaggerGroup } from "@/components/motion/reveal";
import { TRAINERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet the certified trainers at Key Fitness — experienced professionals in strength, CrossFit, personal training, and conditioning ready to guide your journey.",
  alternates: { canonical: "/trainers" },
};

export default function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>Meet Your Trainers</>}
        subtitle="Certified, experienced, and dedicated professionals who guide your form, programming, and progress every step of the way."
        breadcrumb="Trainers"
      />

      <Section className="!pt-4">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </StaggerGroup>
      </Section>

      <CtaBanner title="Train With A Certified Pro" subtitle="Book a session with our expert trainers and start seeing real results." />
    </>
  );
}
