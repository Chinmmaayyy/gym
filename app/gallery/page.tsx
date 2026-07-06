import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Step inside Key Fitness — explore our modern facilities, premium equipment, CrossFit zone, cardio deck, and training environment.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside Key Fitness</>}
        subtitle="A look at our premium facilities, equipment, and the energy that drives every session."
        breadcrumb="Gallery"
      />

      <Section className="!pt-4">
        <GalleryGrid withFilters />
      </Section>

      <CtaBanner title="See It? Now Experience It." subtitle="Book a free facility tour and feel the Key Fitness difference in person." />
    </>
  );
}
