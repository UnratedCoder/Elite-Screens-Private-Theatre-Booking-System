"use client";

import { GALLERY_PREVIEWS } from "./data";

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export default function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  return (
    <section className="py-8 sm:py-14 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-serif">Experience Gallery</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500">A glimpse into unforgettable private theatre moments</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {GALLERY_PREVIEWS.map((item, idx) => (
            <button
              type="button"
              onClick={() => onOpenLightbox(idx)}
              key={idx}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-xl transition aspect-[4/3] relative block w-full text-left"
            >
              <img
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={item.img}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
