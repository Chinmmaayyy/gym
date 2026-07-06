import { Section, SectionHeading } from "@/components/ui/section";
import { PricingGrid } from "@/components/ui/pricing-grid";

export function MembershipSection() {
  return (
    <Section id="membership" surface="surface">
      <div className="ambient-glow left-1/3 top-0 h-80 w-80 bg-primary/10" />
      <SectionHeading
        eyebrow="Membership"
        title={
          <>
            Membership Plans That <span className="text-primary">Fit Your Goals</span>
          </>
        }
        subtitle="Choose the plan that works best for your schedule and begin your transformation today."
      />
      <div className="mt-14">
        <PricingGrid />
      </div>
    </Section>
  );
}
