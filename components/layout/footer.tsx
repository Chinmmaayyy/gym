import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { NAV_LINKS, site } from "@/lib/site";
import { SERVICES } from "@/lib/content";
import { IMG } from "@/lib/images";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  const year = 2025;
  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="ambient-glow left-1/4 top-0 h-64 w-64 bg-primary/10" />
      <div className="container-x relative z-10 grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={IMG.logo}
              alt="Key Fitness logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-btn object-cover ring-1 ring-line"
            />
            <span className="font-display text-xl uppercase tracking-wide text-fg">Key Fitness</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            A premium fully air-conditioned unisex gym. {site.slogan}
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={site.social.instagram} label="Instagram">
              <InstagramIcon size={18} />
            </SocialIcon>
            <SocialIcon href={site.social.facebook} label="Facebook">
              <FacebookIcon size={18} />
            </SocialIcon>
            <SocialIcon href={site.social.youtube} label="YouTube">
              <YoutubeIcon size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* Quick links */}
        <FooterCol title="Quick Links">
          {NAV_LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Services */}
        <FooterCol title="Services">
          {SERVICES.map((s) => (
            <FooterLink key={s.slug} href="/services">
              {s.title}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Contact */}
        <FooterCol title="Contact">
          <li className="flex items-start gap-2.5 text-sm text-faint">
            <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
            <span>{site.address}</span>
          </li>
          <li>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 text-sm text-faint transition-colors hover:text-primary"
            >
              <Phone size={16} className="shrink-0 text-primary" />
              {site.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 text-sm text-faint transition-colors hover:text-primary"
            >
              <Mail size={16} className="shrink-0 text-primary" />
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={whatsappLink(site.whatsapp, "Hi Key Fitness, I'd like to know more about memberships.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex text-sm font-semibold text-primary hover:text-primary-hover"
            >
              Chat on WhatsApp →
            </a>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-faint sm:flex-row">
          <p>© {year} Key Fitness. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-fg">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-fg">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg">{title}</h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-faint transition-colors hover:text-primary">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-btn border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
