"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { deck } from "@/content/deck";
import { Slide } from "./slide";
import { SlideBody, sectionLabel } from "./slide-body";

const TOTAL = deck.length;

/** 1-based case number for each slide, 0 for slides that are not case studies. */
const CASE_INDEX: number[] = (() => {
  let c = 0;
  return deck.map((s) => (s.kind === "case-study" ? ++c : 0));
})();

function clamp(n: number): number {
  if (Number.isNaN(n)) return 1;
  return Math.min(TOTAL, Math.max(1, n));
}

function readHash(): number {
  if (typeof window === "undefined") return 1;
  return clamp(parseInt(window.location.hash.slice(1), 10) || 1);
}

/**
 * Keyboard and click driven deck. The current slide lives in the URL hash so
 * `/deck#7` is shareable. Without JavaScript it is a scrollable list of slides.
 */
export function Deck() {
  const [current, setCurrent] = useState(1);
  const rootRef = useRef<HTMLDivElement>(null);

  const go = useCallback((n: number) => {
    const next = clamp(n);
    window.location.hash = `#${next}`;
  }, []);

  // Hash is the source of truth: scroll to it on load and whenever it changes.
  useEffect(() => {
    const apply = () => {
      const n = readHash();
      setCurrent(n);
      document.getElementById(String(n))?.scrollIntoView({ block: "start", behavior: "instant" });
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  // Keep the counter honest when the reader scrolls instead of pressing keys.
  useEffect(() => {
    const slides = rootRef.current?.querySelectorAll<HTMLElement>("[data-slide]");
    if (!slides || slides.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(Number(e.target.getAttribute("data-slide")));
        }
      },
      { threshold: 0.6 },
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          go(readHash() + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          go(readHash() - 1);
          break;
        case "Home":
          e.preventDefault();
          go(1);
          break;
        case "End":
          e.preventDefault();
          go(TOTAL);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button, summary")) return;
    if (window.getSelection()?.toString()) return;
    const half = window.innerWidth / 2;
    go(e.clientX > half ? current + 1 : current - 1);
  };

  return (
    <div ref={rootRef} onClick={onClick} className="snap-y snap-mandatory">
      {deck.map((slide, i) => {
        const n = i + 1;
        return (
          <Slide
            key={n}
            n={n}
            total={TOTAL}
            section={sectionLabel(slide, CASE_INDEX[i])}
            ruled={slide.kind === "title" || slide.kind === "next"}
          >
            <SlideBody slide={slide} n={n} />
          </Slide>
        );
      })}
      <div className="no-print fixed bottom-4 right-4 flex items-center gap-4 border border-ink bg-paper px-3 py-2 font-mono text-[11px] text-ink">
        <Link href="/" className="text-ink-muted hover:text-ink">
          Exit
        </Link>
        <span className="tabular">
          {String(current).padStart(2, "0")} / {TOTAL}
        </span>
        <span className="text-ink-muted">&larr; &rarr;</span>
      </div>
    </div>
  );
}
