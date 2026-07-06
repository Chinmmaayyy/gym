import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup } from "@/components/motion/reveal";
import { FeatureCard } from "@/components/ui/feature-card";
import { WHY_CHOOSE } from "@/lib/content";

export function WhyChoose() {
  return (
    <Section id="why" surface="surface">
      <div className="ambient-glow right-0 top-10 h-72 w-72 bg-primary/10" />
      <SectionHeading
        eyebrow="Why Key Fitness"
        title={
          <>
            Why Thousands Choose <span className="text-primary">Key Fitness</span>
          </>
        }
        subtitle="Great results come from the right environment, expert guidance, and consistent effort. We've created a space where beginners and experienced athletes train with confidence."
      />

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE.map((item) => (
          <FeatureCard key={item.title} icon={<item.icon size={26} />} title={item.title} text={item.text} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
