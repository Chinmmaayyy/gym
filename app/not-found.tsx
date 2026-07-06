import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="ambient-glow left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 bg-primary/20" />
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <div className="relative">
        <p className="font-display text-[8rem] leading-none text-primary sm:text-[12rem]">404</p>
        <h1 className="font-display text-4xl uppercase text-fg sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Looks like this page skipped leg day. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/membership" size="lg" variant="secondary">
            View Plans
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
