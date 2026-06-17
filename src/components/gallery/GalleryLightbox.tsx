"use client";

interface ImageItem {
  id: string;
  src: string;
  occasion: string;
  caption: string;
}

interface GalleryLightboxProps {
  index: number | null;
  images: ImageItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  index,
  images,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  if (index === null || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 select-none"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white/70 hover:text-white transition cursor-pointer z-20"
        aria-label="Close image lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Left Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition cursor-pointer z-20"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Main Image content wrapper */}
      <div
        className="w-full max-w-4xl px-12 sm:px-16 flex flex-col items-center justify-center min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          alt={currentImage.caption}
          className="rounded-2xl object-contain max-w-full max-h-[72vh] mx-auto shadow-2xl border border-white/10"
          src={currentImage.src}
        />
        {/* Caption & Occasion info details */}
        <div className="mt-4 text-center max-w-xl">
          <span className="text-[10px] font-bold tracking-widest text-[#FFD700] uppercase font-mono">
            {currentImage.occasion}
          </span>
          <p className="mt-1 text-sm sm:text-base text-white font-medium leading-relaxed">
            {currentImage.caption}
          </p>
          <p className="mt-2 text-xs text-white/50">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition cursor-pointer z-20"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
