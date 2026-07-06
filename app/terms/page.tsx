import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${site.name}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title={<>Terms &amp; Conditions</>} breadcrumb="Terms" />
      <Section className="!pt-4">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p className="text-sm text-faint">Last updated: January 2025</p>
          <p>
            By accessing {site.name} and using our facilities, you agree to the following terms. Please read them
            carefully.
          </p>
          <LegalBlock title="Membership">
            Memberships are non-transferable and valid for the period selected. Pricing shown on this website is
            indicative and may be updated. Please confirm current pricing at the gym before purchase.
          </LegalBlock>
          <LegalBlock title="Health & Safety">
            Members train at their own risk and should consult a physician before beginning any exercise program. Please
            follow all safety guidelines and staff instructions while using equipment and facilities.
          </LegalBlock>
          <LegalBlock title="Conduct">
            We reserve the right to refuse service or terminate membership for behaviour that endangers or disrupts
            other members, staff, or the facility.
          </LegalBlock>
          <LegalBlock title="Contact">
            For questions about these terms, email{" "}
            <a href={`mailto:${site.email}`} className="text-primary">
              {site.email}
            </a>
            .
          </LegalBlock>
        </div>
      </Section>
    </>
  );
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 font-display text-2xl uppercase text-fg">{title}</h2>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}
