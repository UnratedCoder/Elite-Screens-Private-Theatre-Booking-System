"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useBookingController } from "@/controllers/BookingController";

export default function BookingHeader() {
  const { step, location, date, timeLeft, formatDateLabel, goToStep } = useBookingController();
  const isDarkBg = true;

  return (
    <header 
      className={`w-full sticky top-0 z-50 h-[72px] sm:h-[80px] flex items-center shrink-0 transition-all duration-300 ${
        isDarkBg 
          ? "bg-black/35 backdrop-blur-md border-b border-white/10 text-white" 
          : "bg-white border-b border-gray-300 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="logo-container bg-[#1e2330] rounded-xl flex items-center justify-center h-[48px] w-[76px] sm:h-[50px] sm:w-[80px] shadow-sm p-0.5 border border-amber-500/30">
              <img 
                alt="Elite Screens" 
                src="/assets/logo.png"
                className="logo-image h-full w-full object-cover rounded-lg"
              />
            </div>
          </Link>

          {/* Selection indicators on header */}
          <div className="flex items-center gap-2.5">
            {date && (
              <button 
                onClick={() => goToStep(1)}
                title="Click to edit location or date"
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-xs hover:border-[#C85A17] hover:text-[#C85A17] hover:shadow-md transition duration-200 cursor-pointer ${
                  isDarkBg 
                    ? "border-white/15 bg-white/10 text-white" 
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <Calendar size={13} className="text-[#C85A17]" />
                <span>
                  {(() => {
                    if (!date) return "";
                    const parts = date.split("-");
                    if (parts.length !== 3) return date;
                    return `${parts[2]}/${parts[1]}/${parts[0]}`;
                  })()}
                </span>
              </button>
            )}
            {location && (
              <button 
                onClick={() => goToStep(1)}
                title="Click to edit location or date"
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-xs hover:border-[#C85A17] hover:text-[#C85A17] hover:shadow-md transition duration-200 cursor-pointer ${
                  isDarkBg 
                    ? "border-white/15 bg-white/10 text-white" 
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <MapPin size={13} className="text-[#C85A17]" />
                <span>{location}</span>
              </button>
            )}
            {step >= 3 && step <= 8 && (
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 text-xs font-bold shadow-xs">
                <Clock size={14} className="text-emerald-600 animate-pulse" />
                <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60) < 10 ? "0" : ""}{timeLeft % 60}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

