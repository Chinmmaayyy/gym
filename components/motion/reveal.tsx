"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type RevealProps = {
  children: React.ReactNode;
  variant?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span";
};

/** Scroll-triggered reveal wrapper — animates once on enter (Bible Part 6). */
export function Reveal({ children, variant = fadeUp, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/** Staggers direct children that use the `fadeUp` (or provided) child variant. */
export function StaggerGroup({
  children,
  className,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
