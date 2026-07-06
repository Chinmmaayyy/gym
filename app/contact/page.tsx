import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo, ContactMap } from "@/components/contact/contact-info";
import { Reveal } from "@/components/motion/reveal";
import { fadeLeft, fadeRight } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Key Fitness — visit, call, or WhatsApp us today. Enquire about memberships, personal training, and free facility tours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let&apos;s Begin Your Journey</>}
        subtitle="Have questions about memberships or training programs? Our team is here to help. Contact us or visit Key Fitness to experience our facilities."
        breadcrumb="Contact"
      />

      <Section className="!pt-4">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal variant={fadeLeft} className="lg:col-span-2">
            <ContactInfo />
          </Reveal>
          <Reveal variant={fadeRight} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <ContactMap />
        </Reveal>
      </Section>
    </>
  );
}
