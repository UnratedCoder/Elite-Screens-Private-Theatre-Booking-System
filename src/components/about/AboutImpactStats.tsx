"use client";

import { useEffect, useState, useRef } from "react";

export default function AboutImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [celebrations, setCelebrations] = useState(0);
  const [screenings, setScreenings] = useState(0);
  const [rating, setRating] = useState(0.0);
  const [cities, setCities] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress); // ease out quad

      setCelebrations(Math.round(easeProgress * 3500));
      setScreenings(Math.round(easeProgress * 5000));
      setRating(parseFloat((easeProgress * 4.9).toFixed(1)));
      setCities(Math.round(easeProgress * 1));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCelebrations(3500);
        setScreenings(5000);
        setRating(4.9);
        setCities(1);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-[#FAFAF8] py-11 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] font-serif">
            Our Impact, Built with Care
          </h2>
          <p className="mt-4 text-[#5F6368] text-sm sm:text-base lg:text-lg leading-relaxed">
            These numbers represent real people trusting us with their most meaningful celebrations — each one handled with attention and care.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Stat 1 */}
          <div className="relative">
            <div className="mb-4 sm:mb-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-party-popper text-[#2A2A2E]"
                aria-hidden="true"
              >
                <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                <path d="M4 3h.01"></path>
                <path d="M22 8h.01"></path>
                <path d="M15 2h.01"></path>
                <path d="M22 20h.01"></path>
                <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
                <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path>
                <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path>
                <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
              </svg>
            </div>
            <p className="text-[#5F6368] text-xs sm:text-sm uppercase tracking-wide">Celebrations Curated</p>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]">
              {celebrations}+
            </p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#8B8F9A] leading-relaxed">
              Birthdays, proposals, anniversaries &amp; surprises
            </p>
          </div>

          {/* Stat 2 */}
          <div className="relative">
            <div className="mb-4 sm:mb-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-film text-[#2A2A2E]"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 3v18"></path>
                <path d="M3 7.5h4"></path>
                <path d="M3 12h18"></path>
                <path d="M3 16.5h4"></path>
                <path d="M17 3v18"></path>
                <path d="M17 7.5h4"></path>
                <path d="M17 16.5h4"></path>
              </svg>
            </div>
            <p className="text-[#5F6368] text-xs sm:text-sm uppercase tracking-wide">Private Screenings Hosted</p>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]">
              {screenings}+
            </p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#8B8F9A] leading-relaxed">
              Intimate, distraction-free cinema experiences
            </p>
          </div>

          {/* Stat 3 */}
          <div className="relative">
            <div className="mb-4 sm:mb-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-[#2A2A2E]"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <p className="text-[#5F6368] text-xs sm:text-sm uppercase tracking-wide">Average Guest Rating</p>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]">
              {rating.toFixed(1)} / 5
            </p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#8B8F9A] leading-relaxed">
              Based on verified Google reviews
            </p>
          </div>

          {/* Stat 4 */}
          <div className="relative">
            <div className="mb-4 sm:mb-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin text-[#2A2A2E]"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <p className="text-[#5F6368] text-xs sm:text-sm uppercase tracking-wide">Cities Served</p>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]">
              {cities}+
            </p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#8B8F9A] leading-relaxed">
              Expanding carefully while maintaining quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
