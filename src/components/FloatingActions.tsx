"use client";

import { useState } from "react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-40 sm:bottom-8 sm:right-6 pointer-events-none">
      <div className="flex flex-col items-center gap-3 pointer-events-auto md:items-end">
        {/* Hide Button for Mobile (optional matching) */}
        <button
          onClick={() => setIsVisible(false)}
          type="button"
          aria-label="Hide quick actions"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white transition md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Call Link */}
        <a
          href="tel:+919289289696"
          aria-label="Call Dazzling Screens"
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-slate-900 shadow-[0_16px_35px_rgba(15,23,42,0.18)] backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone-call text-slate-800"
          >
            <path d="M13 2a9 9 0 0 1 9 9" />
            <path d="M13 6a5 5 0 0 1 5 5" />
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
        </a>

        {/* WhatsApp Link */}
        <a
          href="https://wa.me/919289289696"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500 text-white shadow-[0_16px_35px_rgba(22,163,74,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="text-white"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
