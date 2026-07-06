import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/ui/service-card";
import { ButtonLink } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Offer"
        title={
          <>
            Premium <span className="text-primary">Services</span>
          </>
        }
        subtitle="Everything you need to train, recover, and perform — designed for people serious about their fitness journey."
      />

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.slug}
            icon={<service.icon size={26} />}
            title={service.title}
            short={service.short}
          />
        ))}
      </StaggerGroup>

      <div className="mt-12 flex justify-center">
        <ButtonLink href="/services" variant="secondary" size="lg">
          Explore All Services
        </ButtonLink>
      </div>
    </Section>
  );
}
