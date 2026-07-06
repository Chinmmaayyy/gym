import { Section, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/motion/reveal";

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Frequently Asked <span className="text-primary">Questions</span>
          </>
        }
        subtitle="Everything you need to know before you join. Still curious? Reach out on WhatsApp."
      />
      <div className="mt-12">
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </div>
    </Section>
  );
}
