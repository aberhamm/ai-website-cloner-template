"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export type ColorMode = "dark" | "default" | "red";
export const COLOR_MODES: ColorMode[] = ["dark", "default", "red"];

const STORAGE_KEY = "outfit-color-mode";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function notify() {
  for (const cb of listeners) cb();
}

function getClientSnapshot(): ColorMode | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY) as ColorMode | null;
    if (v && COLOR_MODES.includes(v)) return v;
  } catch {
    // ignore
  }
  return null;
}

export function useColorMode(initial: ColorMode = "red") {
  // Server snapshot is the deterministic `initial` mode. Client snapshot
  // reads localStorage; if missing, it also returns `initial` so the
  // hydrated render matches server. After hydration the effect below is
  // free to apply the persisted mode.
  const stored = useSyncExternalStore(
    subscribe,
    () => getClientSnapshot() ?? initial,
    () => initial,
  );

  const setMode = useCallback((next: ColorMode) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    notify();
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.toggle("dark", stored === "dark");
    body.classList.toggle("red", stored === "red");
  }, [stored]);

  return [stored, setMode] as const;
}
