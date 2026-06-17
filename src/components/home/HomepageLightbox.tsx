"use client";

import { GALLERY_PREVIEWS } from "./data";

interface HomepageLightboxProps {
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function HomepageLightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: HomepageLightboxProps) {
  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 select-none"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white/75 hover:text-white transition cursor-pointer z-20"
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Main Image content wrapper */}
      <div
        className="w-full max-w-5xl px-12 sm:px-16 flex flex-col items-center justify-center min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          alt={GALLERY_PREVIEWS[index].alt}
          className="rounded-xl object-contain max-w-full max-h-[75vh] mx-auto shadow-2xl"
          src={GALLERY_PREVIEWS[index].img}
        />
        <p className="mt-3 text-center text-xs sm:text-sm text-white/70">
          {index + 1} / {GALLERY_PREVIEWS.length}
        </p>
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
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
