import { TRUST_BADGES } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface py-6">
      <div className="container-x">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-muted">
                <Icon size={20} className="text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
