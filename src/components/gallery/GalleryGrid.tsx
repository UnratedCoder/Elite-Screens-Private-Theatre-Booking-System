"use client";

interface ImageItem {
  id: string;
  src: string;
  occasion: string;
  caption: string;
}

interface GalleryGridProps {
  images: ImageItem[];
  onOpenLightbox: (index: number) => void;
}

export default function GalleryGrid({ images, onOpenLightbox }: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <p className="text-gray-500 font-medium text-sm">No photos found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {images.map((img, idx) => (
        <button
          key={img.id}
          type="button"
          onClick={() => onOpenLightbox(idx)}
          className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-150 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer aspect-[3/4] block w-full text-left"
        >
          <img
            alt={img.caption}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={img.src}
          />
          {/* Overlay info */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 pt-16 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-bold tracking-wider text-[#FFD700] uppercase font-mono mb-1">
              {img.occasion}
            </span>
            <p className="text-xs text-white/90 font-medium leading-snug">
              {img.caption}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
