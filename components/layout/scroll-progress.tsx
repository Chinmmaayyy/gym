"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin cyan reading-progress bar at the top of the viewport (Bible Part 4). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary to-highlight"
      aria-hidden="true"
    />
  );
}
