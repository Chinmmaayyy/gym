"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Snowflake } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Counter } from "@/components/motion/counter";
import { STATS } from "@/lib/content";
import { EASE } from "@/lib/animations";
import { IMG } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-24 pb-16">
      {/* Cinematic background: deep black → cyan overlay (Bible Part 3 & 11) */}
      <div className="absolute inset-0 -z-10 bg-bg" />
      <div className="ambient-glow -left-32 top-1/4 h-[30rem] w-[30rem] bg-primary/25" />
      <div className="ambient-glow -right-24 bottom-0 h-[26rem] w-[26rem] bg-primary-hover/20" />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/70 to-transparent" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-pill border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Premium Unisex Gym
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,5.5rem)] uppercase leading-[0.92] text-white">
            <RevealLine delay={0.1}>Transform Your Body.</RevealLine>
            <RevealLine delay={0.25}>
              <span className="text-gradient">Transform Your Life.</span>
            </RevealLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Train in a premium fully air-conditioned unisex gym with certified trainers, CrossFit, cardio,
            personal training, steam bath, and massage facilities — all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/membership" size="lg" className="group">
              Join Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/membership" size="lg" variant="secondary">
              <Play size={16} />
              View Membership Plans
            </ButtonLink>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-4xl text-primary sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs uppercase tracking-wider text-faint">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="relative lg:col-span-5"
        >
          <div className="glass glow-primary relative overflow-hidden rounded-section p-1.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#0a0a0a]">
              <Image
                src={IMG.hero}
                alt="Athlete performing a deadlift in the Key Fitness training zone"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholder="blur"
                className="object-cover"
              />
              {/* readability + brand caption */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.3em] text-white/90">
                Train · Transform · Thrive
              </p>
            </div>
          </div>
            {/* Stat chip anchored inside the photo (top-right), over the dark image */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 top-4 flex items-center gap-3 rounded-card border border-white/15 bg-black/55 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <span className="grid h-9 w-9 place-items-center rounded-btn bg-primary/20 text-primary">
                <Snowflake size={18} />
              </span>
              <div>
                <p className="font-display text-2xl leading-none text-highlight">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-white/70">Air Conditioned</p>
              </div>
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
