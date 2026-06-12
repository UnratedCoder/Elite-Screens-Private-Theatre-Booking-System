"use client";

import { useState } from "react";

const OCCASIONS = [
  "Birthday",
  "Anniversary",
  "Romantic Date",
  "Marriage Proposal",
  "Bride to Be",
  "Farewell",
  "Congratulations",
  "Baby Shower",
  "Other / Custom Celebration",
];

export default function Waitlist() {
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Pitampura, Delhi");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!date) {
      alert("Please choose your preferred date.");
      return;
    }

    setIsSubmitting(true);
    // Simulate delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhone("");
      setDate("");
    }, 1200);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden pb-12 pt-[140px] sm:pb-14 sm:pt-[160px] lg:pb-16 lg:pt-[180px]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115]/80 via-[#0f1115]/50 to-[#0f1115]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-3 text-white">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">Slot Request</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Join the Waitlist
          </h1>
          <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            If your preferred slot is unavailable or you have a special request, leave your details here. Our team will reach out as soon as we can accommodate you.
          </p>
        </div>
      </section>

      {/* 2. FORM BLOCK */}
      <section className="max-w-2xl mx-auto px-4 pb-20 pt-6">
        <div className="bg-white border border-gray-200 p-6 sm:p-10 rounded-3xl shadow-xl">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 font-serif border-b border-gray-150 pb-3">
            Tell Us What You&apos;re Looking For
          </h2>

          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <span className="text-5xl">🎟️</span>
              <h3 className="font-serif font-bold text-xl text-gray-900">Waitlist Registered!</h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                We have registered your details for the waitlist. As soon as a slot becomes available on your requested date, our reservation manager will reach out to you.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs font-bold bg-yellow-50 border border-yellow-250 text-yellow-755 px-5 py-2.5 rounded-xl hover:bg-yellow-100 transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-650">
                  Mobile Number (WhatsApp)
                </label>
                <div className="flex rounded-lg border border-gray-250 overflow-hidden shadow-sm bg-gray-50">
                  <span className="bg-gray-100 border-r border-gray-250 px-3 flex items-center justify-center text-sm font-semibold text-gray-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="w-full px-3 py-2 bg-transparent text-gray-900 text-sm focus:outline-none"
                  />
                </div>
                <span className="text-[10px] text-gray-400 block">{phone.length}/10 digits</span>
              </div>

              {/* Location Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-650">
                  Preferred Location
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLocation("Pitampura, Delhi")}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition ${
                      location === "Pitampura, Delhi"
                        ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950"
                        : "border-gray-250 bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Pitampura, Delhi
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocation("Noida Sector 51")}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition ${
                      location === "Noida Sector 51"
                        ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950"
                        : "border-gray-250 bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Noida Sector 51
                  </button>
                </div>
              </div>

              {/* Date Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-655">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-50 text-gray-900 border border-gray-250 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] shadow-sm"
                />
              </div>

              {/* Occasion dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-655">
                  Occasion (Optional)
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-gray-50 text-gray-900 border border-gray-250 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] shadow-sm"
                >
                  {OCCASIONS.map((occ, idx) => (
                    <option key={idx} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black py-3 rounded-xl font-bold text-sm transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Registering..." : "Join Waitlist"}
              </button>

              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                We respect your privacy. Your details are used only to contact you regarding availability or your request.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
