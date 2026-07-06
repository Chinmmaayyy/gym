"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";
const EVENT = "themechange";

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
function getSnapshot(): Theme {
  return (document.documentElement.dataset.theme as Theme) || "light";
}
function getServerSnapshot(): Theme {
  return "light"; // matches the SSR default in RootLayout
}

/** Light/dark theme toggle. Default is light (set by the no-flash script in layout). */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore storage errors (private mode) */
    }
    // Notify every mounted toggle so they all re-read the snapshot.
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title="Toggle theme"
      className={cn(
        "grid h-11 w-11 place-items-center rounded-btn border border-line text-fg transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
