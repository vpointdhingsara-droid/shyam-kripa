// app/HeroSlider.tsx (debug version: shows FAILED badge and logs)
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Slide = { src: string; title?: string; subtitle?: string; alt?: string };

const defaultSlides: Slide[] = [
  { src: "/slider1.jpeg", title: "Pure Ayurvedic Solutions" },
  { src: "/slider2.jpeg", title: "Pure Ayurvedic Solutions" },
  { src: "/slider3.jpg", title: "Pure Wood-Pressed Oils" },
  { src: "/slider4.jpg", title: "Beat the Heat with Natural Oils" },
];

export default function HeroSlider({
  slides = defaultSlides,
  autoPlayMs = 5000,
  className = "h-64 md:h-[420px]",
  showOverlayText = false,
}: {
  slides?: Slide[];
  autoPlayMs?: number;
  className?: string;
  showOverlayText?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const timerRef = useRef<number | null>(null);
  const count = slides.length;

  // preload and detect errors
  useEffect(() => {
    slides.forEach((s, i) => {
      const img = new Image();
      img.src = s.src;
      img.onload = () => {
        setLoaded((p) => ({ ...p, [i]: true }));
        console.log(`[slider] loaded: ${s.src}`);
      };
      img.onerror = () => {
        setErrored((p) => ({ ...p, [i]: true }));
        console.error(`[slider] failed to load: ${s.src}`);
      };
    });
  }, [slides]);

  useEffect(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = window.setInterval(() => setCurrent((p) => (p + 1) % count), autoPlayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [count, autoPlayMs]);

  const next = () => setCurrent((p) => (p + 1) % count);
  const prev = () => setCurrent((p) => (p - 1 + count) % count);

  return (
    <div className={`relative w-full ${className} overflow-hidden`} aria-roledescription="carousel">
      {slides.map((slide, idx) => {
        const posClass = idx === current ? "translate-x-0" : idx < current ? "-translate-x-full" : "translate-x-full";
        const src = slide.src;

        return (
          <div key={idx} className={`absolute inset-0 transition-transform duration-500 ease-in-out ${posClass}`}>
            {/* background image */}
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url("${src}")` }}
              role="img"
              aria-label={slide.alt ?? slide.title ?? `slide-${idx + 1}`}
            />

            {/* overlay text if needed */}
            {showOverlayText && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="mt-2">{slide.subtitle}</p>}
                </div>
              </div>
            )}

            {/* debug badges: show index and FAILED if errored */}
            <div className="absolute left-3 top-3 z-30 flex items-center gap-2">

              {errored[idx] && (
                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">FAILED</div>
              )}
              {!loaded[idx] && !errored[idx] && (
                <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">loading</div>
              )}
            </div>
          </div>
        );
      })}

      {/* controls */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full ${i === current ? "bg-white" : "bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}
