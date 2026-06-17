"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { useBookingController } from "@/controllers/BookingController";
import { LOCATIONS } from "@/models/bookingData";

export default function Step1LocationDate() {
  const {
    location,
    setLocation,
    date,
    setDate,
    goToStep,
    getDates
  } = useBookingController();

  const isCustomDate = date && !getDates().some((d) => d.raw === date);
  const getCustomDisplayDate = () => {
    if (!isCustomDate) return "Date";
    const parts = date.split("-");
    if (parts.length !== 3) return "Date";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = parseInt(parts[2], 10);
    const month = months[parseInt(parts[1], 10) - 1];
    return `${day} ${month}`;
  };

  return (
    <div className="rounded-2xl border border-white/20 bg-black/60 p-6 sm:p-8 shadow-2xl backdrop-blur-md text-white text-center max-w-[580px] mx-auto relative z-10">
      <h2 className="font-serif text-3xl font-bold text-white mb-2 leading-tight">Select Location & Date</h2>
      <p className="text-xs text-white/85 mb-6">Choose where and when you want to celebrate</p>
      
      {/* Location Select (Capsule slider style) */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-2 bg-[#b5b2b2] p-1.5 rounded-full w-full max-w-[420px] mx-auto border border-white/10">
          {LOCATIONS.map((loc) => {
            const isActive = location === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => setLocation(loc)}
                className={`flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-md"
                    : "text-zinc-800 hover:text-black hover:bg-white/5"
                }`}
              >
                <MapPin size={13} className={isActive ? "text-[#C85A17]" : "text-zinc-700"} />
                <span>{loc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Date selection grid (5 boxes) */}
      <div className="mb-6">
        <div className="grid grid-cols-5 gap-2.5">
          {getDates().map((d) => {
            const isActive = date === d.raw;
            return (
              <button
                key={d.raw}
                type="button"
                onClick={() => setDate(d.raw)}
                className={`flex flex-col items-center justify-center rounded-xl border py-2.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black border-white shadow-md"
                    : "border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                }`}
              >
                <span className={`text-[10px] font-bold tracking-wide ${isActive ? "text-gray-500" : "text-white/60"}`}>{d.label}</span>
                <span className="text-xs sm:text-sm font-bold mt-0.5">{d.displayDate}</span>
              </button>
            );
          })}
          
          {/* Choose More Date with Calendar Input */}
          <div className={`relative flex flex-col items-center justify-center rounded-xl border py-2.5 transition-all cursor-pointer ${
            isCustomDate
              ? "bg-white text-black border-white shadow-md"
              : "border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
          }`}>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              onClick={(e) => {
                try {
                  e.currentTarget.showPicker();
                } catch (err) {}
              }}
              onChange={(e) => {
                if (e.target.value) setDate(e.target.value);
              }}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
            />
            <span className={`text-[10px] font-bold tracking-wide ${isCustomDate ? "text-gray-500" : "text-white/60"}`}>
              Choose More
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <Calendar size={12} className={isCustomDate ? "text-black" : "text-white/80"} />
              <span className="text-xs sm:text-sm font-bold">{getCustomDisplayDate()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: availability notice and view slots button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-5">
        <div className="flex items-center gap-2 text-left">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-white/95 font-medium">45 people are checking availability right now</span>
        </div>
        
        <button
          type="button"
          disabled={!date}
          onClick={() => goToStep(2)}
          className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white font-bold px-6 py-2.5 text-xs uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md hatch-btn"
        >
          View Available Slots
        </button>
      </div>
    </div>
  );
}

