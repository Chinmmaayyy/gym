import { site } from "@/lib/site";
import { FAQS } from "@/lib/content";

/** Structured data for rich results (Bible Part 9). */
export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    slogan: site.slogan,
    hasMap: site.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressParts.street,
      addressLocality: site.addressParts.city,
      addressRegion: site.addressParts.region,
      postalCode: site.addressParts.postalCode,
      addressCountry: site.addressParts.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:30",
        closes: "23:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
