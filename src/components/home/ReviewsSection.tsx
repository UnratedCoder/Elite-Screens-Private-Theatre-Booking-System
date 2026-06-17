"use client";

import React, { useState, useEffect, useRef } from "react";
import { REVIEWS } from "./data";

export default function ReviewsSection() {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [activeReviewDot, setActiveReviewDot] = useState(0);
  const [activeReviewImgIndices, setActiveReviewImgIndices] = useState<Record<number, number>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (reviewsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = reviewsRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;
        const percentage = scrollLeft / maxScroll;
        const activeDot = Math.min(3, Math.round(percentage * 3));
        setActiveReviewDot(activeDot);
      }
    };

    const ref = reviewsRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollReviews = (direction: "left" | "right") => {
    if (reviewsRef.current) {
      const { scrollLeft, clientWidth } = reviewsRef.current;
      const offset = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      reviewsRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const scrollToReviewDot = (dotIdx: number) => {
    if (reviewsRef.current) {
      const { scrollWidth, clientWidth } = reviewsRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (dotIdx / 3) * maxScroll;
      reviewsRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-serif">Loved by Our Guests on Google Reviews</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Thousands of premium private theatre experiences
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl font-bold text-black">4.9</span>
            <div className="flex text-[#FFD700]">
              {"★★★★★".split("").map((star, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#FFD700]"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm sm:text-lg">· 394 reviews</span>
          </div>
        </div>

        <div className="relative group/main">
          {/* Left Chevron Button */}
          <button
            type="button"
            onClick={() => scrollReviews("left")}
            className="absolute left-[-20px] top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-150 flex items-center justify-center text-black hover:bg-gray-50 transition cursor-pointer md:flex hidden"
            aria-label="Previous reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div
            ref={reviewsRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory px-2"
          >
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full max-w-[340px] sm:max-w-[400px] snap-start bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between relative"
              >
                {/* Google Logo on top-right */}
                <div className="absolute top-4 right-4">
                  <svg width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.5 24.5c0-1.61-.15-3.16-.41-4.69H24v8.87h12.63c-.55 2.87-2.17 5.3-4.61 6.94l7.15 5.54c4.18-3.85 6.58-9.52 6.58-16.66z"/>
                    <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.98-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.15-5.54c-1.98 1.33-4.51 2.1-8.74 2.1-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>
                
                <div>
                  {/* User Profile */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8ecef] flex items-center justify-center font-bold text-[#5f6368] text-sm">
                      {rev.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{rev.name}</h4>
                      <span className="text-[10px] text-gray-400">{rev.age}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#FFD700] text-xs mb-3">
                    {"★★★★★".split("").map((star, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p 
                    className="text-xs sm:text-sm text-gray-600 leading-relaxed overflow-hidden italic"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      minHeight: "4.5rem"
                    }}
                  >
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Nested Image Carousel */}
                {rev.images && rev.images.length > 0 && (
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mt-4 bg-gray-50 group/img">
                    <img
                      src={rev.images[activeReviewImgIndices[idx] || 0]}
                      alt={`${rev.name} review photo`}
                      className="w-full h-full object-cover select-none"
                    />
                    {rev.images.length > 0 && (
                      <>
                        {/* Left Image Chevron */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIdx = activeReviewImgIndices[idx] || 0;
                            const nextIdx = (currentIdx - 1 + rev.images.length) % rev.images.length;
                            setActiveReviewImgIndices((prev) => ({ ...prev, [idx]: nextIdx }));
                          }}
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 flex items-center justify-center backdrop-blur-[2px] transition-all z-10 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        
                        {/* Right Image Chevron */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIdx = activeReviewImgIndices[idx] || 0;
                            const nextIdx = (currentIdx + 1) % rev.images.length;
                            setActiveReviewImgIndices((prev) => ({ ...prev, [idx]: nextIdx }));
                          }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 flex items-center justify-center backdrop-blur-[2px] transition-all z-10 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Chevron Button */}
          <button
            type="button"
            onClick={() => scrollReviews("right")}
            className="absolute right-[-20px] top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-150 flex items-center justify-center text-black hover:bg-gray-50 transition cursor-pointer md:flex hidden"
            aria-label="Next reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {[0, 1, 2, 3].map((dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToReviewDot(dotIdx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeReviewDot === dotIdx ? "bg-[#FFD700]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
