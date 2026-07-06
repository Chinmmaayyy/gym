"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

export function ServiceCard({
  icon,
  title,
  short,
  href = "/services",
}: {
  icon: React.ReactNode;
  title: string;
  short: string;
  href?: string;
}) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Link
        href={href}
        className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-card p-7 transition-colors hover:border-primary/40"
        aria-label={`Learn more about ${title}`}
      >
        <div className="ambient-glow -right-8 -top-8 h-28 w-28 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
        <div className="relative grid h-14 w-14 place-items-center rounded-btn border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        <h3 className="relative mt-5 font-display text-2xl uppercase tracking-wide text-fg">{title}</h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{short}</p>
        <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Learn More
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
