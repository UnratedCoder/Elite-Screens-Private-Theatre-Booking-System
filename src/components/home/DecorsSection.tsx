"use client";

import { DECORS } from "./data";

export default function DecorsSection() {
  return (
    <section className="py-10 sm:py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-serif">
            Extra Decoration
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Premium decoration upgrades to personalize your private theatre celebration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {DECORS.map((dec, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  alt={dec.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  src={dec.img}
                />
              </div>
              <div className="px-3 sm:px-4 py-3">
                <h3 className="text-base sm:text-lg font-semibold text-black mb-1">{dec.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed">{dec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
