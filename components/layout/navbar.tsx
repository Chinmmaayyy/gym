"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (render-time reset — React's recommended
  // pattern for adjusting state on a changed value, avoids an extra effect pass).
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
  }

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line/70 bg-bg/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:grid" />
          <ButtonLink href="/membership" size="sm" className="hidden sm:inline-flex">
            Join Now
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-btn border border-line text-fg lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-bg/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-1 flex-col gap-1 px-5 py-8">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block border-b border-line/60 py-4 font-display text-3xl uppercase tracking-wide transition-colors",
                        active ? "text-primary" : "text-fg",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="border-t border-line px-5 py-5">
              <div className="flex items-center gap-3">
                <ButtonLink href="/membership" size="lg" className="flex-1">
                  Join Now
                </ButtonLink>
                <ThemeToggle className="h-14 w-14 shrink-0" />
              </div>
              <p className="mt-3 text-center text-xs text-faint">{site.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <Image
        src={IMG.logo}
        alt="Key Fitness logo"
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-btn object-cover ring-1 ring-line"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl uppercase tracking-wide text-fg">Key Fitness</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">The Unisex Gym</span>
      </span>
    </Link>
  );
}
