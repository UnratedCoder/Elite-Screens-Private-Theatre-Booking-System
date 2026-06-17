"use client";

import Link from "next/link";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-[150px] sm:pb-14 sm:pt-[170px] lg:pb-16 lg:pt-[190px]">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          alt="Private theatre setup with decor and projection screen"
          className="object-cover object-center w-full h-full"
          src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1200&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0.58)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-6 text-center text-white">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFD700]/95 uppercase">
          Private Theatre Gallery
        </p>
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl text-white font-semibold">
          Real Celebrations Inside
          <span className="block text-[#FFD700]">Your Private Theatre</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
          Take a look at how our guests celebrate proposals, birthdays, anniversaries, and date nights. Every setup is unique, customized, and designed with care.
        </p>
        <div className="mt-8">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FFD700] text-black font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-[#FFD700]/35 transition-all cursor-pointer"
          >
            Start Planning Your Occasion
          </Link>
        </div>
      </div>
    </section>
  );
}
