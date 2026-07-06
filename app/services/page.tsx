import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ButtonLink } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gym Training, CrossFit, Cardio, Personal Training, Steam Bath & Massage at Key Fitness — everything you need to train, recover, and perform.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title={<>Premium Services</>}
        subtitle="Everything you need to train, recover, and perform — under one premium, air-conditioned roof."
        breadcrumb="Services"
      />

      <Section className="!pt-4">
        <div className="flex flex-col gap-20 md:gap-28">
          {SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            const { icon: Icon } = service;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  variant={reversed ? fadeRight : fadeLeft}
                  className={cn(reversed && "lg:order-2")}
                >
                  <div className="glass glow-primary overflow-hidden rounded-section p-1.5">
                    {service.image ? (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                        <Image
                          src={service.image}
                          alt={`${service.title} at Key Fitness`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          placeholder="blur"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <MediaPlaceholder
                        label={service.title}
                        seed={i + 1}
                        aspect="aspect-[4/3]"
                        className="rounded-[18px]"
                        icon={<Icon size={40} />}
                      />
                    )}
                  </div>
                </Reveal>

                <Reveal variant={reversed ? fadeLeft : fadeRight} className={cn(reversed && "lg:order-1")}>
                  <Badge tone="primary">
                    <Icon size={13} />
                    Service
                  </Badge>
                  <h2 className="mt-4 font-display text-4xl uppercase text-fg sm:text-5xl">{service.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-fg">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check size={14} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href="/contact">Enquire Now</ButtonLink>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Section>

      <CtaBanner title="Find The Right Program For You" />
    </>
  );
}
