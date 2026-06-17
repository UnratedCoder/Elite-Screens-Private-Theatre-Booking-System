"use client";

import { useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryTabs from "@/components/gallery/GalleryTabs";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { IMAGES } from "@/components/gallery/data";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All Moments");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images to show all if "All Moments" is active, or filter by exact occasion match
  const filteredImages = activeTab === "All Moments"
    ? IMAGES
    : IMAGES.filter(img => img.occasion === activeTab);

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
      {/* 1. HERO SECTION */}
      <GalleryHero />

      {/* 2. TAB FILTERS & PHOTO GRID */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 md:py-16">
        <GalleryTabs activeTab={activeTab} onTabChange={(tab) => {
          setActiveTab(tab);
          setLightboxIndex(null);
        }} />

        <div className="mt-8 sm:mt-10">
          <GalleryGrid images={filteredImages} onOpenLightbox={(idx) => setLightboxIndex(idx)} />
        </div>
      </main>

      {/* 3. LIGHTBOX MODAL OVERLAY */}
      <GalleryLightbox
        index={lightboxIndex}
        images={filteredImages}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
}
