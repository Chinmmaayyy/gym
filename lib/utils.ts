import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a WhatsApp deep link with an optional prefilled message. */
export function whatsappLink(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

/** Format a rupee amount, e.g. 3000 -> "₹3,000". */
export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
