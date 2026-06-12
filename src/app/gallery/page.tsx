"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  "All Moments",
  "Birthday Party",
  "Romantic Date",
  "Movie Night",
  "Marriage Proposal",
  "Anniversary",
  "Baby Shower",
  "Congratulations",
  "Farewell",
];

const IMAGES = [
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/reema/1.webp",
    cat: "Birthday Party",
    title: "A surprise that turned into tears of joy"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/reema/2.webp",
    cat: "Birthday Party",
    title: "Celebrating memorable birthday with your bestie"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/reema/3.webp",
    cat: "Birthday Party",
    title: "Create unforgettable birthday moments with us"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/reema/4.webp",
    cat: "Birthday Party",
    title: "Customize birthday theme according to you"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/life-of-paetoo/1.webp",
    cat: "Romantic Date",
    title: "Just two hearts and a private screen"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/life-of-paetoo/2.webp",
    cat: "Romantic Date",
    title: "Fresh mocktails and celebration snacks served at your recliners"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/life-of-paetoo/3.webp",
    cat: "Romantic Date",
    title: "Delicious snacks, finger foods and refreshments ready for your show"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/life-of-paetoo/4.webp",
    cat: "Romantic Date",
    title: "Intimate and cosy private theatre setup with brown leather recliners"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/satinderjit-kaur/2.webp",
    cat: "Movie Night",
    title: "Private theatre setup with decor and projection screen"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/yash-b/1.webp",
    cat: "Movie Night",
    title: "Friends, food, and a perfect movie night"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/pratik-kumar/1.webp",
    cat: "Marriage Proposal",
    title: "She said yes, right here"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/pratik-kumar/2.webp",
    cat: "Marriage Proposal",
    title: "A romantic balloon arch proposal setup"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/yash-b/2.webp",
    cat: "Movie Night",
    title: "Unwinding with family and friends in a cozy theater setting"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/yash-b/3.webp",
    cat: "Movie Night",
    title: "Take memorable group selfies with customized lighting themes"
  },
  {
    url: "https://dazzlingscreens.com/media/site/home/reviews/yash-b/4.webp",
    cat: "Movie Night",
    title: "Perfect private movie night with high-fidelity surround sound"
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All Moments");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Distribute images intelligently across categories so no tab is empty
  const filteredImages = IMAGES.filter(img => {
    if (activeTab === "All Moments") return true;
    if (activeTab === "Birthday Party" && img.cat === "Birthday Party") return true;
    if (activeTab === "Romantic Date" && img.cat === "Romantic Date") return true;
    if (activeTab === "Movie Night" && img.cat === "Movie Night") return true;
    if (activeTab === "Marriage Proposal" && img.cat === "Marriage Proposal") return true;
    if (activeTab === "Anniversary" && (img.cat === "Romantic Date" || img.cat === "Marriage Proposal")) return true;
    if (activeTab === "Baby Shower" && (img.cat === "Birthday Party" || img.cat === "Romantic Date")) return true;
    if (activeTab === "Congratulations" && (img.cat === "Birthday Party" || img.cat === "Movie Night" || img.cat === "Marriage Proposal")) return true;
    if (activeTab === "Farewell" && img.cat === "Movie Night") return true;
    return false;
  });

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. HERO SECTION (Dark banner matching original screenshot) */}
      <section className="relative overflow-hidden pb-12 pt-[140px] sm:pb-14 sm:pt-[160px] lg:pb-16 lg:pt-[180px] bg-black">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-4 text-white">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FFD700]">
            — PRIVATE THEATRE GALLERY —
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif leading-tight text-white">
            Real Celebrations Inside <br className="sm:hidden" />
            <span className="text-[#FFD700]">Your Private Theatre</span>
          </h1>
          
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Explore birthday surprises, romantic date nights, proposals, and custom events hosted in our private cinema spaces with premium screen, sound, and decor.
          </p>

          {/* Bullet Points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-white/80 pt-1">
            <span className="flex items-center gap-1.5">✦ 100% private screening experience</span>
            <span className="flex items-center gap-1.5">✦ Decor, cakes, and add-ons available</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/booking"
              className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/20 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Book Your Slot
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/30 text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm hover:bg-white/5 transition uppercase tracking-wider"
            >
              Plan Custom Event
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-gray-200 scrollbar-none">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 text-xs font-semibold rounded-full border whitespace-nowrap transition cursor-pointer ${
                activeTab === cat
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "bg-gray-100 text-gray-600 border-gray-200 hover:text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. IMAGES GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {filteredImages.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No celebration memories in this category yet. Select another tab!
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group cursor-pointer relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border border-gray-150 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:border-gray-250"
              >
                <img
                  alt={img.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
                  src={img.url}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFD700]">
                    {img.cat}
                  </span>
                  <h4 className="text-white font-serif font-bold text-xs sm:text-sm mt-0.5 leading-snug">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. READY TO CELEBRATE bottom CTA */}
      <section className="relative overflow-hidden py-16 px-4 bg-[#7a7a7a] text-white text-center">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 z-0 bg-black/10 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            Ready to Celebrate?
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/95 leading-relaxed font-sans">
            Book your private theatre experience in just a few clicks. Our team is always available if you need help.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold px-7 py-3 rounded-full text-xs sm:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Start Booking
            </Link>
            <a
              href="https://wa.me/919289289696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold px-7 py-3 rounded-full text-xs sm:text-sm transition flex items-center gap-1.5 uppercase tracking-wider"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 text-xs text-white/80">
            <a href="tel:+919289289696" className="hover:underline flex items-center gap-1.5">
              📞 +91 92892 89696
            </a>
            <a href="mailto:hello@dazzlingscreens.com" className="hover:underline flex items-center gap-1.5">
              ✉️ hello@dazzlingscreens.com
            </a>
            <span className="flex items-center gap-1.5 opacity-80">
              ⏱️ Replies under 5 minutes
            </span>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL WITH HORIZONTAL THUMBNAIL NAV */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-4 md:p-6 backdrop-blur-sm select-none">
          {/* Header */}
          <div className="w-full flex items-center justify-between text-white max-w-5xl border-b border-white/10 pb-3">
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFD700]">
                {filteredImages[lightboxIndex].cat}
              </span>
              <h3 className="text-sm sm:text-base font-semibold truncate max-w-[240px] sm:max-w-md mt-0.5">
                {filteredImages[lightboxIndex].title}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-white/50">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="text-white text-2xl font-semibold hover:text-gray-300 transition cursor-pointer"
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Center Image and Nav Arrows */}
          <div className="relative flex-grow w-full flex items-center justify-center py-4">
            {/* Prev Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white text-2xl flex items-center justify-center hover:bg-black/80 hover:scale-105 active:scale-95 transition cursor-pointer select-none"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Main Image */}
            <div className="relative max-h-[58vh] max-w-[85vw] flex items-center justify-center">
              <img
                alt={filteredImages[lightboxIndex].title}
                className="object-contain max-h-[55vh] max-w-full rounded-lg shadow-2xl transition-all duration-300"
                src={filteredImages[lightboxIndex].url}
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white text-2xl flex items-center justify-center hover:bg-black/80 hover:scale-105 active:scale-95 transition cursor-pointer select-none"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="w-full flex flex-col items-center max-w-4xl border-t border-white/15 pt-3.5">
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 mb-2">
              All Photos ({filteredImages.length})
            </span>
            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full scrollbar-thin px-4">
              {filteredImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-12 h-15 sm:w-16 sm:h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                    idx === lightboxIndex
                      ? "border-[#FFD700] scale-105 opacity-100 shadow-md shadow-[#FFD700]/20"
                      : "border-transparent opacity-40 hover:opacity-75 hover:scale-102"
                  }`}
                >
                  <img
                    alt={img.title}
                    className="object-cover w-full h-full"
                    src={img.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
