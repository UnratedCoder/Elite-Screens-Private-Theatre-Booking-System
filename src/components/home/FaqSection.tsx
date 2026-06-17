"use client";

import { useState } from "react";
import { FAQS } from "./data";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f5ef] px-4 py-16 sm:py-20 border-t border-gray-150">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-serif">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500">Everything you need to know before booking</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-3">
            {FAQS.slice(0, 3).map((faq, idx) => {
              const globalIdx = idx;
              const isOpen = openFaq === globalIdx;
              return (
                <div
                  key={globalIdx}
                  className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : globalIdx)}
                    type="button"
                    className="w-full text-left px-4 sm:px-6 py-3 sm:py-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-black focus:outline-none cursor-pointer bg-white"
                  >
                    <span>{faq.q}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down transition-transform duration-300 text-neutral-400 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-neutral-100 pt-3 animate-fadeIn bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {FAQS.slice(3, 6).map((faq, idx) => {
              const globalIdx = idx + 3;
              const isOpen = openFaq === globalIdx;
              return (
                <div
                  key={globalIdx}
                  className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : globalIdx)}
                    type="button"
                    className="w-full text-left px-4 sm:px-6 py-3 sm:py-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-black focus:outline-none cursor-pointer bg-white"
                  >
                    <span>{faq.q}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down transition-transform duration-300 text-neutral-400 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-neutral-100 pt-3 animate-fadeIn bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
