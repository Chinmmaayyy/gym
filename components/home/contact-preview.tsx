import { Section, SectionHeading } from "@/components/ui/section";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { fadeLeft, fadeRight } from "@/lib/animations";

export function ContactPreview() {
  return (
    <Section id="contact" surface="surface">
      <SectionHeading
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s Begin Your <span className="text-primary">Fitness Journey</span>
          </>
        }
        subtitle="Have questions about memberships or training programs? Our team is here to help."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <Reveal variant={fadeLeft} className="lg:col-span-2">
          <ContactInfo />
        </Reveal>
        <Reveal variant={fadeRight} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
