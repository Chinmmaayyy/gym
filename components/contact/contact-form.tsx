"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number").regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  goal: z.string().min(1, "Please select a goal"),
  message: z.string().min(5, "Tell us a little more").max(1000, "Message is too long"),
});

type FormValues = z.infer<typeof schema>;

const GOALS = ["Weight Loss", "Muscle Gain", "General Fitness", "CrossFit", "Personal Training", "Other"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // No backend yet (Bible Part 8 — future API). Simulate submission.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(data);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-section border border-success/30 bg-success/5 p-10 text-center"
      >
        <CheckCircle2 size={48} className="text-success" />
        <h3 className="font-display text-3xl uppercase text-fg">Thank You, {submitted.name.split(" ")[0]}!</h3>
        <p className="max-w-md text-muted">
          Thank you for contacting Key Fitness. Our team will get back to you shortly. For a faster response, message us
          on WhatsApp.
        </p>
        <ButtonLink
          href={whatsappLink(
            site.whatsapp,
            `Hi Key Fitness, I'm ${submitted.name}. My goal is ${submitted.goal}. ${submitted.message}`,
          )}
          target="_blank"
          className="mt-2"
        >
          Continue on WhatsApp
        </ButtonLink>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-section border border-line bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} placeholder="Your name" className={inputCls} autoComplete="name" />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} placeholder="+91 ..." className={inputCls} autoComplete="tel" inputMode="tel" />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input {...register("email")} placeholder="you@email.com" className={inputCls} autoComplete="email" inputMode="email" />
        </Field>
        <Field label="Fitness Goal" error={errors.goal?.message}>
          <select {...register("goal")} className={inputCls} defaultValue="">
            <option value="" disabled>
              Select a goal
            </option>
            {GOALS.map((g) => (
              <option key={g} value={g} className="bg-card">
                {g}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your fitness goals..."
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-btn bg-gradient-to-b from-primary to-primary-hover font-semibold text-black transition-all hover:-translate-y-0.5 disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
        <ButtonLink
          href={whatsappLink(site.whatsapp, "Hi Key Fitness, I'd like to enquire about memberships.")}
          target="_blank"
          variant="secondary"
          className="h-12 flex-1"
        >
          WhatsApp Now
        </ButtonLink>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-input border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-primary focus:outline-none";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-error">{error}</span>}
    </label>
  );
}
