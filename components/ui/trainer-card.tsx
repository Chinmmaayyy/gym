"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";
import { InstagramIcon } from "@/components/ui/social-icons";
import type { Trainer } from "@/lib/content";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-card border border-line bg-card"
    >
      {/* Portrait */}
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(120% 120% at 50% 0%, rgba(44,197,244,0.25), transparent 55%), linear-gradient(180deg, #101418, #0b0b0b)",
        }}
      >
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <span className="absolute inset-0 grid place-items-center font-display text-7xl text-white/20 transition-transform duration-500 group-hover:scale-110">
          {trainer.initials}
        </span>

        {/* Hover glass overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {trainer.instagram && (
            <a
              href={trainer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${trainer.name} on Instagram`}
              className="mb-3 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon size={18} />
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Book Training <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-display text-2xl uppercase tracking-wide text-white">{trainer.name}</h3>
        <p className="text-sm text-primary">{trainer.role}</p>
        <p className="mt-3 text-sm text-muted">
          {trainer.specialization} · {trainer.experience}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-faint">
          <Award size={13} className="text-highlight" />
          {trainer.certifications}
        </p>
      </div>
    </motion.article>
  );
}
