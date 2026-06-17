"use client";

import React from "react";
import { ChevronLeft, MapPin, Sparkles, ShieldCheck, Heart, Utensils, Calendar, User } from "lucide-react";
import { useBookingController } from "@/controllers/BookingController";

export default function Step2TheatreSlots() {
  const {
    location,
    date,
    setDate,
    tomorrowStr,
    theaterId,
    setTheaterId,
    selectedTheaterSlots,
    setSelectedTheaterSlots,
    setSlotId,
    goToStep,
    isSelectedDateTomorrow,
    theaters
  } = useBookingController();

  const [toast, setToast] = React.useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const toastTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const triggerToast = (message: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ show: true, message });
    toastTimerRef.current = setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  React.useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const getNextDateStr = (currentDateStr: string) => {
    if (!currentDateStr) return "";
    const parts = currentDateStr.split("-");
    if (parts.length !== 3) return "";
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // 0-indexed
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    d.setDate(d.getDate() + 1);
    
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dayStr = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dayStr}`;
  };

  return (
    <div className="space-y-6">
      {toast.show && (
        <>
          <style>{`
            @keyframes slideDown {
              from { transform: translate(-50%, -20px); opacity: 0; }
              to { transform: translate(-50%, 0); opacity: 1; }
            }
          `}</style>
          <div 
            style={{ animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#C85A17] text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 text-xs font-extrabold flex items-center gap-2"
          >
            <span>📅</span>
            <span>{toast.message}</span>
          </div>
        </>
      )}
      <div className="flex justify-start">
        <button
          onClick={() => goToStep(1)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3.5 py-1.5 text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <ChevronLeft size={14} />
          <span>Back</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {theaters.map((t) => {
          const availableCount = t.slots.filter(s => s.status === 'available' && !s.time.toLowerCase().startsWith('tomorrow')).length;
          const isLowAvailability = availableCount <= 2;

          return (
            <div 
              key={t.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-xs bg-white h-full"
            >
              {/* Image Header with Info Badges & Play Video overlay */}
              <div className="relative h-[200px] overflow-hidden bg-slate-100">
                <div className="absolute left-2.5 top-2.5 z-10 flex gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-0.5 text-[9px] font-semibold text-white">
                    {t.screen}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-0.5 text-[9px] font-semibold text-white">
                    {t.sound}
                  </span>
                </div>
                {/* Expand Button */}
                <button className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/75 transition border border-white/10 cursor-pointer shadow-sm">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
                  </svg>
                </button>
                <img 
                  alt={t.name} 
                  src={t.image} 
                  className="object-cover w-full h-full"
                />
                <button className="absolute left-2.5 bottom-2.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/55 hover:bg-black/75 transition px-2.5 py-1 text-[9px] font-bold text-white border border-white/10 cursor-pointer shadow-sm">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-white text-black text-[7px] font-extrabold">▶</span>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Theatre Details */}
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight font-sans">{t.name}</h3>
                      <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                        isLowAvailability 
                          ? "bg-rose-50 text-rose-700 border-rose-200/50" 
                          : "bg-emerald-50 text-emerald-700 border-emerald-200/50"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${isLowAvailability ? "bg-rose-500" : "bg-emerald-500"}`}></span>
                        <span>{availableCount} Slots Available</span>
                      </div>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1 text-gray-500 text-xs font-semibold">
                      <MapPin size={12} className="text-[#C85A17]" />
                      <span>{location}</span>
                    </div>
                  </div>

                  {/* Navigation buttons: Map & Menu */}
                  <div className="flex gap-2 shrink-0">
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col items-center gap-0.5 text-gray-500 hover:text-black transition"
                    >
                      <div className="h-7 w-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400 group-hover:text-gray-700 transition">
                        <MapPin size={12} />
                      </div>
                      <span className="text-[8.5px] font-bold">Map</span>
                    </a>
                    <a 
                      href="/menu.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col items-center gap-0.5 text-gray-500 hover:text-black transition"
                    >
                      <div className="h-7 w-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400 group-hover:text-gray-700 transition">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="text-[8.5px] font-bold">Menu</span>
                    </a>
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-1.5 text-xs text-gray-500 font-semibold mb-4 border-t border-gray-100 pt-3 flex-1">
                  <div className="grid grid-cols-2 gap-2 text-[10px] leading-tight">
                    <div className="flex items-center gap-1">
                      <User size={12} className="text-gray-400 shrink-0" />
                      <span>{t.limit}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils size={12} className="text-gray-400 shrink-0" />
                      <span>Food</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles size={12} className="text-gray-400 shrink-0" />
                      <span>Decor ₹750 Only</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={12} className="text-gray-400 shrink-0" />
                      <span>Free Cancellation*</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={12} className="text-gray-400 shrink-0" />
                      <span>Ideal for couple and family</span>
                    </div>
                  </div>
                </div>

                {/* Next steps preview */}
                <div className="border-t border-gray-100 pt-3 mb-4 text-[10px] text-gray-400 font-semibold flex items-center justify-between">
                  <span>Next Step:</span>
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold text-gray-400/80">
                    <span className="inline-flex items-center gap-0.5"><User size={10} /> Add Details</span>
                    <span>&gt;</span>
                    <span className="inline-flex items-center gap-0.5"><Sparkles size={10} /> Fog Entry</span>
                    <span>&gt;</span>
                    <span className="inline-flex items-center gap-0.5"><Calendar size={10} /> Gifts</span>
                  </div>
                </div>

                {/* Slots + Bottom Bar Container aligned to bottom */}
                <div className="mt-auto border-t border-gray-100 pt-3">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Choose Your Time Slot</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {t.slots.map((s) => {
                      const isAvailable = s.status === 'available';
                      const isSelected = selectedTheaterSlots[t.id] === s.id;
                      const isTomorrow = s.time.startsWith("Tomorrow");

                      if (!isAvailable) {
                        return (
                          <div 
                            key={s.id}
                            className="border-none bg-gray-100 text-gray-400 cursor-not-allowed text-[10px] py-2 px-1.5 rounded-xl text-center font-medium"
                          >
                            {s.time}
                          </div>
                        );
                      }

                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            if (isTomorrow) {
                              // Change date to tomorrow relative to currently selected date
                              const nextDate = getNextDateStr(date);
                              setDate(nextDate);
                              
                              // Select the corresponding actual slot
                              let targetSlotId = s.id;
                              if (t.id === "theatre-1") targetSlotId = "t1-s5"; // Slot 5
                              if (t.id === "theatre-2") targetSlotId = "t2-s3"; // Slot 3
                              if (t.id === "theatre-3") targetSlotId = "t3-s3"; // Slot 3

                              setSelectedTheaterSlots(prev => ({
                                ...prev,
                                [t.id]: targetSlotId
                              }));
                              setTheaterId(t.id);
                              setSlotId(targetSlotId);

                              // Trigger toast popup notification
                              const parts = nextDate.split("-");
                              const formattedNextDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : nextDate;
                              triggerToast(`Date updated to ${formattedNextDate}!`);
                            } else {
                              setSelectedTheaterSlots(prev => ({
                                ...prev,
                                [t.id]: s.id
                              }));
                              setTheaterId(t.id);
                              setSlotId(s.id);
                            }
                          }}
                          className={`border text-[10px] py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer font-bold flex items-center justify-center gap-1 ${
                            isSelected
                              ? "border-emerald-600 bg-emerald-600 text-white shadow-xs"
                              : "border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50/45"
                          }`}
                        >
                          {isTomorrow && <Calendar size={11} className="shrink-0" />}
                          <span>{s.time}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Price & Reserve Button Bar */}
                  <div className="border-t border-gray-100 pt-3.5 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xl font-extrabold text-gray-950">₹{t.basePrice.toLocaleString()}</span>
                      <span className="block text-[9px] text-gray-400 font-bold">For up to {t.id === "theatre-1" ? 2 : 4} Person</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const activeSlotId = selectedTheaterSlots[t.id];
                        setTheaterId(t.id);
                        setSlotId(activeSlotId);
                        goToStep(3); // Go to customizations (Contact)
                      }}
                      className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-extrabold py-2.5 px-4.5 rounded-full text-xs transition-all cursor-pointer shadow-xs hover:scale-102 active:scale-98"
                    >
                      Reserve This Slot
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

