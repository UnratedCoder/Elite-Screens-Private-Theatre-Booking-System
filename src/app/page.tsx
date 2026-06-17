"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CouponsDrawer from "@/components/home/CouponsDrawer";
import ServicesSection from "@/components/home/ServicesSection";
import VideosSection from "@/components/home/VideosSection";
import TheatresSection from "@/components/home/TheatresSection";
import DecorsSection from "@/components/home/DecorsSection";
import GallerySection from "@/components/home/GallerySection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import ReadyToCelebrateSection from "@/components/home/ReadyToCelebrateSection";
import HomepageLightbox from "@/components/home/HomepageLightbox";
import { GALLERY_PREVIEWS } from "@/components/home/data";

export default function Home() {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [homepageLightboxIndex, setHomepageLightboxIndex] = useState<number | null>(null);

  const handlePrevLightbox = () => {
    if (homepageLightboxIndex !== null) {
      setHomepageLightboxIndex(
        (homepageLightboxIndex - 1 + GALLERY_PREVIEWS.length) % GALLERY_PREVIEWS.length
      );
    }
  };

  const handleNextLightbox = () => {
    if (homepageLightboxIndex !== null) {
      setHomepageLightboxIndex((homepageLightboxIndex + 1) % GALLERY_PREVIEWS.length);
    }
  };

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. COUPON TOGGLE BUTTON & DRAWER */}
      <button
        onClick={() => setIsCouponOpen(true)}
        type="button"
        className="fixed top-1/2 right-0 z-40 -translate-y-1/2 inline-flex items-center gap-1 border border-emerald-200 bg-white px-2 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700 shadow-xl rounded-l-2xl border-r-0 hover:bg-emerald-50 transition-colors cursor-pointer"
      >
        <span className="rotate-180 [writing-mode:vertical-lr] [text-orientation:mixed] flex items-center gap-1">
          🎟️ View Coupons
        </span>
      </button>

      <CouponsDrawer isOpen={isCouponOpen} onClose={() => setIsCouponOpen(false)} />

      {/* 3. OUR SERVICES */}
      <ServicesSection />

      {/* 4. A LOOK INSIDE ELITE SCREENS */}
      <VideosSection />

      {/* 5. CHOOSE YOUR PRIVATE SPACE */}
      <TheatresSection />

      {/* 6. EXTRA DECORATIONS */}
      <DecorsSection />

      {/* 7. EXPERIENCE GALLERY */}
      <GallerySection onOpenLightbox={(idx) => setHomepageLightboxIndex(idx)} />

      {/* 8. WHY CHOOSE A PRIVATE THEATRE */}
      <WhyChooseSection />

      {/* 9. HOW IT WORKS */}
      <HowItWorksSection />

      {/* 10. LOVED BY OUR GUESTS ON GOOGLE REVIEWS */}
      <ReviewsSection />

      {/* 11. FAQ ACCORDION */}
      <FaqSection />

      {/* 12. READY TO CELEBRATE bottom CTA */}
      <ReadyToCelebrateSection />

      {/* GALLERY LIGHTBOX OVERLAY */}
      <HomepageLightbox
        index={homepageLightboxIndex}
        onClose={() => setHomepageLightboxIndex(null)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}
