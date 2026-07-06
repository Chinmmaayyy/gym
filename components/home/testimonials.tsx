"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const paused = useRef(false);

  const go = useCallback((d: 1 | -1) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, 5000);
    return () => clearInterval(id);
  }, [go]);

  const t = TESTIMONIALS[index];

  return (
    <Section id="testimonials" surface="surface">
      <div className="ambient-glow left-1/4 top-10 h-72 w-72 bg-primary/10" />
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            What Our <span className="text-primary">Members Say</span>
          </>
        }
      />

      <div
        className="relative mx-auto mt-14 max-w-3xl"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="relative min-h-[16rem] overflow-hidden rounded-section border border-line bg-card p-8 md:p-12">
          <Quote size={56} className="absolute right-6 top-6 text-primary/10" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-highlight text-highlight" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-fg md:text-xl">“{t.review}”</p>
              <footer className="mt-6">
                <p className="font-display text-xl uppercase tracking-wide text-primary">{t.name}</p>
                <p className="text-sm text-faint">{t.duration}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-6 bg-primary" : "w-2 bg-line hover:bg-muted",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
}
