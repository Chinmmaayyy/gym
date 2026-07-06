import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title={<>Privacy Policy</>} breadcrumb="Privacy" />
      <Section className="!pt-4">
        <div className="prose-legal mx-auto max-w-3xl space-y-6 text-muted">
          <p className="text-sm text-faint">Last updated: January 2025</p>
          <p>
            {site.name} respects your privacy. This policy explains how we collect, use, and protect the information you
            share when you enquire through our website.
          </p>
          <LegalBlock title="Information We Collect">
            When you submit an enquiry form, we may collect your name, phone number, email address, fitness goal, and
            message. We only use this information to respond to your enquiry and provide membership details.
          </LegalBlock>
          <LegalBlock title="How We Use Your Information">
            Your information is used solely to contact you regarding memberships, training, and services. We do not sell
            or share your personal data with third parties for marketing purposes.
          </LegalBlock>
          <LegalBlock title="Data Security">
            We take reasonable measures to protect your personal information. Enquiries are transmitted securely and
            stored only as long as necessary to serve your request.
          </LegalBlock>
          <LegalBlock title="Contact">
            For any privacy questions, email us at{" "}
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
