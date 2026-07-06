import { Section, SectionHeading } from "@/components/ui/section";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ButtonLink } from "@/components/ui/button";

export function GalleryPreview() {
  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title={
          <>
            Inside <span className="text-primary">Key Fitness</span>
          </>
        }
        subtitle="Explore our modern facilities, premium equipment, and training environment."
      />
      <div className="mt-14">
        <GalleryGrid limit={6} />
      </div>
      <div className="mt-12 flex justify-center">
        <ButtonLink href="/gallery" variant="secondary" size="lg">
          View Full Gallery
        </ButtonLink>
      </div>
    </Section>
  );
}
