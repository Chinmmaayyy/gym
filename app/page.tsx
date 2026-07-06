import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhyChoose } from "@/components/home/why-choose";
import { ServicesSection } from "@/components/home/services-section";
import { MembershipSection } from "@/components/home/membership-section";
import { PersonalTraining } from "@/components/home/personal-training";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ContactPreview } from "@/components/home/contact-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyChoose />
      <ServicesSection />
      <MembershipSection />
      <PersonalTraining />
      <GalleryPreview />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
      <ContactPreview />
    </>
  );
}
