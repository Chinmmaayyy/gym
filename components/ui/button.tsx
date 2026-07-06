import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-btn transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-primary to-primary-hover text-black shadow-[0_8px_30px_-8px_rgba(44,197,244,0.5)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(44,197,244,0.7)] active:translate-y-0 active:scale-[0.98]",
  secondary:
    "border border-fg/25 text-fg hover:border-primary hover:text-primary hover:-translate-y-0.5 active:scale-[0.98] bg-fg/[0.03]",
  ghost: "text-muted hover:text-primary relative",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base min-w-[44px]",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => (
    <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />
  ),
);
Button.displayName = "Button";

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
}

/** A Next.js <Link> styled as a button. Handles internal & external hrefs. */
export function ButtonLink({ variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonVariants({ variant, size, className })} {...props} />;
}
