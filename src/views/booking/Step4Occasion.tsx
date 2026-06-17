"use client";

import React from "react";
import { X } from "lucide-react";
import { useBookingController } from "@/controllers/BookingController";
import { OCCASIONS } from "@/models/bookingData";

const renderOccasionIcon = (id: string) => {
  switch (id) {
    case "Birthday":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M4 10h16v10H4zM4 14h16" />
          <path d="M8 6v4M12 6v4M16 6v4" />
          <path d="M8 3v1M12 3v1M16 3v1" />
        </svg>
      );
    case "Anniversary":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
        </svg>
      );
    case "Romantic Date":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M6 22h12M12 15v7M12 15a4 4 0 0 0 4-4V3H8v8a4 4 0 0 0 4 4z" />
          <path d="M9 7h6M12 3v4" />
        </svg>
      );
    case "Proposal":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <circle cx="12" cy="14" r="5" />
          <path d="M12 9V5M9 6h6" />
          <path d="m10 3 2 2 2-2z" />
        </svg>
      );
    case "Bride to Be":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
          <path d="M6 14v1a6 6 0 0 0 12 0v-1" />
          <path d="M12 2v2" />
        </svg>
      );
    case "Farewell":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "Congratulations":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.2 1.3 4 3 5h8c1.7-1 3-2.8 3-7a7 7 0 0 0-7-7z" />
        </svg>
      );
    case "Baby Shower":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M10 2h4v2h-4z" />
          <path d="M9 8h6v12a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z" />
          <path d="M9 12h6" />
          <path d="M12 4v4" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Step4Occasion() {
  const {
    occasion,
    setOccasion,
    occasionMessage,
    setOccasionMessage,
    showOccasionDetailsCard,
    setShowOccasionDetailsCard,
    partner1Name,
    setPartner1Name,
    partner2Name,
    setPartner2Name,
    celebrantName,
    setCelebrantName,
    validationError
  } = useBookingController();

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#111827]">Select an occasion</h2>
        <p className="text-xs text-gray-500">Pick one option and fill the details inline.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {OCCASIONS.map((occ) => {
          const isActive = occasion === occ.id;
          return (
            <div key={occ.id} className="relative">
              <div
                onClick={() => {
                  if (isActive) {
                    setOccasion("");
                    setShowOccasionDetailsCard(false);
                    setCelebrantName("");
                    setPartner1Name("");
                    setPartner2Name("");
                    setOccasionMessage("");
                  } else {
                    setOccasion(occ.id);
                    setShowOccasionDetailsCard(true);
                    setOccasionMessage("");
                  }
                }}
                className={`rounded-2xl border p-4 flex flex-col justify-between items-center text-center cursor-pointer transition-all h-[155px] relative ${
                  isActive
                    ? "border-zinc-950 bg-white ring-1 ring-zinc-950"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <div className="absolute top-3 right-3">
                  <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-colors ${
                    isActive ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-white"
                  }`}>
                    {isActive && <span className="text-[9px]">✓</span>}
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-center h-8">
                  {renderOccasionIcon(occ.id)}
                </div>
                <div className="flex-1 flex flex-col justify-center my-1.5">
                  <p className="text-xs font-bold text-zinc-900">{occ.name}</p>
                  <p className="text-[9px] text-zinc-400 mt-0.5 line-clamp-2 leading-tight">{occ.desc}</p>
                </div>
                <span className={`text-[9.5px] font-extrabold px-3.5 py-1 rounded-full border transition-all ${
                  isActive 
                    ? "border-zinc-950 bg-zinc-950 text-white shadow-xs" 
                    : "border-zinc-200 text-zinc-400 bg-zinc-50/30 hover:border-zinc-300 hover:text-zinc-600"
                }`}>
                  {isActive ? "✓ Selected" : "Select"}
                </span>
              </div>

              {/* Floating Details Popover Card */}
              {isActive && showOccasionDetailsCard && (
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-[106%] left-1/2 -translate-x-1/2 z-40 w-[290px] xs:w-[325px] bg-white border border-zinc-200 rounded-2xl p-5 shadow-2xl text-left animate-scale-up"
                >
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-zinc-200 rotate-45 z-10" />
                  
                  <button 
                    type="button"
                    onClick={() => setShowOccasionDetailsCard(false)}
                    className="absolute top-3.5 right-3.5 text-zinc-400 hover:text-zinc-600 cursor-pointer h-6 w-6 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors"
                  >
                    <X size={14} />
                  </button>
                  
                  <div className="flex items-center gap-1.5 border-b border-zinc-100 pb-2.5 mb-3.5">
                    <span className="text-xs font-bold text-zinc-800 flex items-center gap-1">
                      {occ.id === "Anniversary" && "💍"}
                      {occ.id === "Birthday" && "🎂"}
                      {occ.id === "Romantic Date" && "💖"}
                      {occ.id === "Proposal" && "✨"}
                      {occ.id === "Bride to Be" && "👰"}
                      {occ.id === "Farewell" && "👋"}
                      {occ.id === "Congratulations" && "🏆"}
                      {occ.id === "Baby Shower" && "🍼"}
                      <span>{occ.name} Details</span>
                    </span>
                  </div>

                  {validationError && (
                    <div className="mb-3 bg-red-50 text-red-600 border border-red-100 rounded-xl p-2.5 text-center text-[10.5px] font-semibold animate-pulse">
                      ⚠️ {validationError}
                    </div>
                  )}

                  <div className="space-y-3.5 text-left">
                    {(occ.id === "Anniversary" || occ.id === "Romantic Date" || occ.id === "Proposal") ? (
                      <>
                        <div>
                          <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Partner 1 Name *
                          </label>
                          <input 
                            type="text"
                            required
                            value={partner1Name}
                            onChange={(e) => setPartner1Name(e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Partner 2 Name *
                          </label>
                          <input 
                            type="text"
                            required
                            value={partner2Name}
                            onChange={(e) => setPartner2Name(e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white"
                          />
                        </div>
                      </>
                    ) : (
                      <div>
                        <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                          Person Name *
                        </label>
                        <input 
                          type="text"
                          required
                          value={celebrantName}
                          onChange={(e) => setCelebrantName(e.target.value)}
                          placeholder="Enter name"
                          className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        Message on Decoration (Optional)
                      </label>
                      <input 
                        type="text"
                        value={occasionMessage}
                        onChange={(e) => setOccasionMessage(e.target.value)}
                        placeholder={
                          occ.id === "Anniversary" ? "Ex: Happy Anniversary" :
                          occ.id === "Romantic Date" ? "Ex: I Love You" :
                          occ.id === "Proposal" ? "Ex: Will You Marry Me?" :
                          occ.id === "Birthday" ? "Ex: Happy Birthday" :
                          `Ex: ${occ.name}`
                        }
                        className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => setShowOccasionDetailsCard(false)}
                      className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-bold px-4 py-1.5 rounded-lg text-[11px] transition-colors shadow-xs cursor-pointer"
                    >
                      Save Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

