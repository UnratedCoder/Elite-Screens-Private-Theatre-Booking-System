"use client";

import Link from "next/link";
import { THEATRES } from "./data";

export default function TheatresSection() {
  return (
    <section className="bg-[#f8f5ef] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Choose your private space
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Luxury private theatres designed for birthdays, proposals, anniversaries and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-10">
          {THEATRES.map((room) => (
            <div
              key={room.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg sm:rounded-2xl sm:shadow-xl bg-white"
            >
              {/* Card Top Image & Badges */}
              <div className="booking-theatre-carousel relative h-[190px] sm:h-[210px] md:h-[220px] lg:h-[260px]">
                <div className="pointer-events-none absolute left-2 top-2 z-10 flex gap-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor" aria-hidden="true">
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                    150&quot; HD
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" aria-hidden="true">
                      <path d="M8 9v6h3l4 3V6l-4 3H8z" fill="currentColor" opacity="0.95" />
                      <path d="M17.5 9.5a4 4 0 010 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                      <path d="M19 7a7 7 0 010 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                    </svg>
                    600W Sony
                  </span>
                </div>
                <div className="relative h-full w-full">
                  <img
                    alt={`${room.name} image`}
                    className="object-cover w-full h-full absolute inset-0"
                    src={room.img}
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-2.5 sm:p-3.5 lg:p-4">
                {/* Title and Top Actions */}
                <div className="mb-1 flex items-start justify-between gap-2">
                  <div className="min-w-0 flex items-center gap-2">
                    <h3 className="truncate text-lg font-bold text-black sm:text-xl md:text-[22px] lg:text-2xl font-sans">
                      {room.name}
                    </h3>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#FFD700]/25 bg-[#FFD700]/8 px-1.5 py-0.5 text-[9px] font-semibold text-[#9a6b00] sm:px-2 sm:text-[10px] font-sans">
                      Premium
                    </span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    {/* Map Link */}
                    <a
                      href="https://maps.google.com/?q=FU-69, First Floor, Sector 4, Noida, Uttar Pradesh, 201301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-0.5 text-gray-700 transition-colors hover:text-black font-sans"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-gray-300 group-hover:shadow sm:h-8 sm:w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-medium sm:text-[10px]">Map</span>
                    </a>
                    
                    {/* Menu Link */}
                    <a
                      href="/documents/menus/elite-screens-menu.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-0.5 text-gray-700 transition-colors hover:text-black font-sans"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-gray-300 group-hover:shadow sm:h-8 sm:w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils" aria-hidden="true">
                          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                          <path d="M7 2v20" />
                          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-medium sm:text-[10px]">Menu</span>
                    </a>
                  </div>
                </div>

                {/* Specifications List */}
                <div className="mb-2 space-y-1 text-[10px] text-gray-600 sm:mb-1 sm:text-[12px] font-sans">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-gray-500" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Noida, Sector 4
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-gray-500" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      Up to {room.capacity} People
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils text-gray-500" aria-hidden="true">
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                        <path d="M7 2v20" />
                        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                      </svg>
                      Food
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-balloon text-gray-500" aria-hidden="true">
                        <path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
                        <path d="M12 6a2 2 0 0 1 2 2" />
                        <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" />
                      </svg>
                      Decor ₹700 Only
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-gray-500" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      Free Cancellation*
                    </span>
                    
                    {/* Ideal for (with heart and user icons and hover tooltip) */}
                    <div aria-label="Ideal for couples, family and friends" className="group relative inline-flex min-w-0 cursor-help items-center gap-1">
                      <span className="truncate">Ideal for</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart shrink-0 text-gray-500" aria-hidden="true">
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                      </svg>
                      <span className="truncate">couple and</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users shrink-0 text-gray-500" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      <span className="truncate">family</span>
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-0.5 text-[9px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 shadow-lg">
                        Ideal for couples, family and friends
                      </span>
                    </div>
                  </div>

                  {/* Progress Flow Steps */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-gray-500 pt-1.5 border-t border-gray-100/50 mt-1.5">
                    <span className="font-semibold text-gray-600">Next Step:</span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Add Details
                    </span>
                    <span aria-hidden="true" className="text-gray-400">&gt;</span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cake" aria-hidden="true">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                        <path d="M2 21h20" />
                        <path d="M7 8v3" />
                        <path d="M12 8v3" />
                        <path d="M17 8v3" />
                        <path d="M7 4h.01" />
                        <path d="M12 4h.01" />
                        <path d="M17 4h.01" />
                      </svg>
                      Add Cake
                    </span>
                    <span aria-hidden="true" className="text-gray-400">&gt;</span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand-sparkles" aria-hidden="true">
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                        <path d="m14 7 3 3" />
                        <path d="M5 6v4" />
                        <path d="M19 14v4" />
                        <path d="M10 2v2" />
                        <path d="M7 8H3" />
                        <path d="M21 16h-4" />
                        <path d="M11 3H9" />
                      </svg>
                      Fog Entry
                    </span>
                    <span aria-hidden="true" className="text-gray-400">&gt;</span>
                    <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift" aria-hidden="true">
                        <rect x="3" y="8" width="18" height="4" rx="1" />
                        <path d="M12 8v13" />
                        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                      </svg>
                      Gifts
                    </span>
                  </div>
                </div>

                {/* Price and Check Availability Button */}
                <div className="mt-auto flex items-end justify-between gap-2 border-t border-gray-150 pt-2 sm:pt-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="text-xl font-bold leading-none text-black sm:text-2xl md:text-2xl lg:text-3xl font-sans">
                      ₹{room.price}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-[10px] leading-tight text-gray-500 sm:text-xs lg:text-sm font-sans">
                      For up to {room.capacity} Person
                    </p>
                  </div>

                  <Link
                    href={`/booking?theatre=${room.id}`}
                    className="group inline-flex items-center justify-center rounded-full border border-black bg-transparent font-bold text-black transition-all hover:bg-black hover:text-white min-w-[118px] shrink-0 px-3.5 py-2 text-xs sm:min-w-[132px] sm:px-4 sm:py-2.5 sm:text-sm lg:min-w-[150px] lg:px-6 lg:py-3 lg:text-base font-sans cursor-pointer"
                  >
                    <span>Check Availability</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-200 group-hover:ml-2 group-hover:w-[18px] group-hover:opacity-100"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
