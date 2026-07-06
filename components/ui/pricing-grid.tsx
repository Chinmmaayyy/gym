"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { PLANS, formatPrice } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const PERIODS = ["3 Months", "6 Months", "1 Year"] as const;

export function PricingGrid() {
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>("1 Year");

  return (
    <div>
      {/* Billing period toggle */}
      <div className="mx-auto mb-12 flex w-fit rounded-pill border border-line bg-card p-1">
        {PERIODS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPeriod(p)}
            className={cn(
              "relative rounded-pill px-5 py-2 text-sm font-semibold transition-colors",
              period === p ? "text-black" : "text-muted hover:text-fg",
            )}
          >
            {period === p && (
              <motion.span
                layoutId="period-pill"
                className="absolute inset-0 rounded-pill bg-gradient-to-b from-primary to-primary-hover"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative">{p}</span>
          </button>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {PLANS.map((plan) => {
          const tier = plan.tiers.find((t) => t.period === period)!;
          return (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={cn(
                "relative flex flex-col rounded-card border p-7",
                plan.featured
                  ? "border-primary/50 bg-gradient-to-b from-primary/[0.08] to-card glow-primary"
                  : "border-line bg-card hover:border-primary/30",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-pill bg-gradient-to-r from-highlight to-[#ffb300] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
                  <Star size={12} className="fill-black" />
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl uppercase tracking-wide text-fg">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl text-primary">{formatPrice(tier.price)}</span>
                <span className="mb-1.5 text-sm text-faint">/ {period.toLowerCase()}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {inc}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="/contact"
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-7 w-full"
              >
                Join Now
              </ButtonLink>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
