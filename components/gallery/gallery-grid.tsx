"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, CATEGORY_IMAGE, type GalleryItem } from "@/lib/content";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

const spanClasses: Record<GalleryItem["span"], string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/9]",
  normal: "aspect-square",
};

export function GalleryGrid({ withFilters = false, limit }: { withFilters?: boolean; limit?: number }) {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = GALLERY_ITEMS.filter((g) => active === "All" || g.category === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

  const openAt = lightbox !== null ? items[lightbox] : null;
  const go = (dir: 1 | -1) =>
    setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length));

  return (
    <div>
      {withFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setActive(c);
                setLightbox(null);
              }}
              className={cn(
                "rounded-pill border px-4 py-2 text-sm font-medium transition-colors",
                active === c
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-line text-muted hover:border-primary/40 hover:text-white",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              layout
              type="button"
              onClick={() => setLightbox(idx)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "group relative overflow-hidden rounded-img border border-line",
                spanClasses[item.span],
              )}
            >
              {CATEGORY_IMAGE[item.category] ? (
                <Image
                  src={CATEGORY_IMAGE[item.category]!}
                  alt={`${item.label} — ${item.category}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <MediaPlaceholder seed={item.id} label={item.label} aspect="h-full w-full" className="h-full" />
              )}
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.label}</span>
                <span className="text-xs uppercase tracking-wider text-primary">{item.category}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {openAt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-line text-white hover:border-primary hover:text-primary"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-4 grid h-11 w-11 place-items-center rounded-full border border-line text-white hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-4 grid h-11 w-11 place-items-center rounded-full border border-line text-white hover:border-primary hover:text-primary sm:right-20"
            >
              <ChevronRight size={24} />
            </button>
            <motion.div
              key={openAt.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-section"
            >
              {CATEGORY_IMAGE[openAt.category] ? (
                <div className="relative aspect-[16/10]">
                  <Image
                    src={CATEGORY_IMAGE[openAt.category]!}
                    alt={`${openAt.label} — ${openAt.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    placeholder="blur"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-5">
                    <span className="font-display text-xl uppercase tracking-wide text-white">{openAt.label}</span>
                    <span className="text-xs uppercase tracking-wider text-primary">{openAt.category}</span>
                  </span>
                </div>
              ) : (
                <MediaPlaceholder seed={openAt.id} label={openAt.label} aspect="aspect-[16/10]" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
