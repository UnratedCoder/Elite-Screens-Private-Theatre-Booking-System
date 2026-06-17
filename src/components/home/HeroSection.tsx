"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HERO_IMAGES } from "./data";

export default function HeroSection() {
  const [heroIndex, setHeroIndex] = useState(0);

  // Hero slideshow auto-changer
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const tickerItems = [
    "Food & Drink",
    "Photography",
    "Birthday",
    "Anniversary",
    "Date Night",
    "Proposal",
    "Bride To Be",
    "Farewell",
    "Decoration",
    "Celebration",
  ];

  return (
    <section className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
              idx === heroIndex ? "opacity-45" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        ))}
        {/* Gradients */}
        <div className="absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Hero Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex justify-center">
        <div className="relative w-full max-w-[500px] sm:max-w-[620px] lg:max-w-[780px] rounded-3xl border border-white/20 bg-white/10 text-center shadow-2xl backdrop-blur-md px-4 py-8 pb-10 sm:px-8 sm:py-12 md:py-16">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-black/60 via-black/45 to-black/35 -z-10" />
          <h1 className="hero-big-title text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-md font-serif">
            Celebrate in Your <br />
            <span className="text-[#FFD700]">Private Theatre</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-lg text-white/90 leading-relaxed font-sans">
            Luxury private cinema moments, crafted for celebrations.
            <span className="block mt-1 text-white/70">
              Birthdays, anniversaries, proposals, and date nights in a premium private screening room.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="group w-[260px] sm:w-auto inline-flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold px-8 py-3.5 text-base transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5"
              href="/booking"
            >
              <span>Book Your Private Theatre</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Ticker Ribbon */}
      <div className="hero-bottom-strip z-20 pointer-events-none">
        <div className="hero-bottom-strip__track">
          {/* Group 1 */}
          <div className="hero-bottom-strip__group">
            {tickerItems.map((item, idx) => (
              <div className="hero-bottom-strip__chunk" key={idx}>
                <span className="hero-bottom-strip__item">{item}</span>
                <span className="hero-bottom-strip__dot">✦</span>
              </div>
            ))}
          </div>
          {/* Group 2 (duplicate) */}
          <div className="hero-bottom-strip__group">
            {tickerItems.map((item, idx) => (
              <div className="hero-bottom-strip__chunk" key={idx}>
                <span className="hero-bottom-strip__item">{item}</span>
                <span className="hero-bottom-strip__dot">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
