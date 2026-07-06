import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { NAV_LINKS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV_LINKS.map((l) => l.href), "/privacy", "/terms"];
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/membership" || path === "/contact" ? 0.9 : 0.7,
  }));
}
