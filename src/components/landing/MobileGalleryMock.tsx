"use client";

import { useCallback, useEffect, useState } from "react";
import { LANDING_MOBILE_GALLERY } from "@/lib/brand";

type MobileGalleryMockProps = {
  className?: string;
};

const AUTO_MS = 4500;

export function MobileGalleryMock({ className = "" }: MobileGalleryMockProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + LANDING_MOBILE_GALLERY.length) % LANDING_MOBILE_GALLERY.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % LANDING_MOBILE_GALLERY.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const slide = LANDING_MOBILE_GALLERY[index];

  return (
    <div className={`mx-auto w-full max-w-72 sm:max-w-80 lg:max-w-96 ${className}`}>
      <div className="rounded-[2.5rem] border border-gray-200/80 bg-gray-950 p-2 shadow-2xl shadow-violet-200/60 ring-1 ring-black/10 lg:rounded-[2.75rem]">
        <div className="overflow-hidden rounded-[2rem] bg-white lg:rounded-[2.25rem]">
          <div className="grid">
            {LANDING_MOBILE_GALLERY.map((item, itemIndex) => (
              <img
                key={item.src}
                src={item.src}
                alt={itemIndex === index ? item.alt : ""}
                aria-hidden={itemIndex !== index}
                draggable={false}
                decoding={itemIndex === 0 ? "sync" : "async"}
                className={[
                  "col-start-1 row-start-1 block h-auto w-full max-w-full transition-opacity duration-700 ease-in-out",
                  itemIndex === index ? "relative z-10 opacity-100" : "pointer-events-none opacity-0",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3">
        <p
          key={slide.label}
          className="min-h-5 animate-[landing-fade-up_0.45s_ease_both] text-sm font-semibold text-violet-700"
        >
          {slide.label}
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Pantallas de Wally en el celular"
        >
          {LANDING_MOBILE_GALLERY.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={item.label}
              onClick={() => goTo(itemIndex)}
              className={[
                "h-2 rounded-full transition-all duration-300",
                itemIndex === index
                  ? "w-6 bg-violet-600"
                  : "w-2 bg-violet-200 hover:bg-violet-300",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
