import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/** Reusable contact details block (Bible Part 2 & 4). */
export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <InfoRow icon={<MapPin size={20} />} label="Visit Us" value={site.address} href={site.mapsUrl} external />
      <InfoRow
        icon={<Phone size={20} />}
        label="Call Us"
        value={site.phone}
        href={`tel:${site.phone.replace(/\s/g, "")}`}
      />
      <InfoRow icon={<Mail size={20} />} label="Email" value={site.email} href={`mailto:${site.email}`} />
      <InfoRow
        icon={<MessageCircle size={20} />}
        label="WhatsApp"
        value="Chat with our team"
        href={whatsappLink(site.whatsapp, "Hi Key Fitness, I'd like to enquire.")}
        external
      />
      <div className="rounded-card border border-line bg-card p-5">
        <div className="mb-3 flex items-center gap-2 text-primary">
          <Clock size={18} />
          <span className="text-sm font-semibold uppercase tracking-wider text-fg">Opening Hours</span>
        </div>
        {site.hours.map((h) => (
          <div key={h.day} className="flex justify-between py-1 text-sm">
            <span className="text-muted">{h.day}</span>
            <span className="text-fg">{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-card border border-line bg-card p-5 transition-colors hover:border-primary/40">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-btn border border-primary/20 bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-faint">{label}</p>
        <p className="mt-0.5 text-sm text-fg">{value}</p>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}

/** Embedded Google Map (Bible Part 4). */
export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-section border border-line">
      <iframe
        title="Key Fitness location"
        src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[280px] w-full grayscale-[0.3] contrast-125"
      />
    </div>
  );
}
