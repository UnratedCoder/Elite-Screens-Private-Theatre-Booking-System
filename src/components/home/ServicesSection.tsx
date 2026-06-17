"use client";

import { useEffect, useRef } from "react";
import { SERVICES } from "./data";

export default function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement>(null);

  // Services carousel auto-scroller
  useEffect(() => {
    const timer = setInterval(() => {
      if (servicesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = servicesRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          servicesRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          servicesRef.current.scrollTo({ left: scrollLeft + 304, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f8f5ef] px-4 py-16 sm:px-6 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1115] font-serif inline-block">
            Our Services
          </h2>
        </div>

        <div
          id="home-celebration-carousel"
          className="relative overflow-hidden rounded-2xl border border-black/15 bg-white px-6 py-8 sm:px-10 lg:px-12"
        >
          {/* Film perforations for aesthetic film-strip look */}
          <div className="home-celebration-carousel__perforation home-celebration-carousel__perforation--left" />
          <div className="home-celebration-carousel__perforation home-celebration-carousel__perforation--right" />

          <div
            ref={servicesRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory"
          >
            {SERVICES.map((srv) => (
              <article
                key={srv.id}
                className="flex-shrink-0 w-[240px] sm:w-[280px] snap-start border border-black/5 rounded-xl p-3 bg-white"
              >
                <header className="mb-2 flex items-center justify-between text-xs tracking-wider text-black/60 font-mono">
                </header>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-black/5">
                  <img
                    alt={srv.title}
                    loading="lazy"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    src={srv.img}
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#0f1115]">
                    {srv.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
