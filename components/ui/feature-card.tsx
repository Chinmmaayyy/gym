"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

/** Reusable premium feature card with hover lift + cyan glow (Bible Part 5 & 6). */
export function FeatureCard({
  icon,
  title,
  text,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-card p-7 transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="ambient-glow -right-10 -top-10 h-32 w-32 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
      <div className="relative grid h-14 w-14 place-items-center rounded-btn border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
        {icon}
      </div>
      <h3 className="relative mt-5 font-display text-2xl uppercase tracking-wide text-fg">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </motion.article>
  );
}
