"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    // Simulate delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields
      setName("");
      setPhone("");
      setEmail("");
      setTime("");
      setCity("");
      setLocation("");
      setDate("");
      setPeopleCount("");
      setOccasion("");
      setNotes("");
    }, 1200);
  };

  return (
    <section className="bg-white py-11 sm:py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-3 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] text-center font-serif">
          Tell Us What You’re Looking For
        </h2>
        <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-500">
          We’ll contact you as soon as something opens up.
        </p>

        {isSubmitted ? (
          <div className="mt-8 sm:mt-10 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-6 sm:p-10 text-center space-y-4 animate-fadeIn">
            <span className="text-5xl block">🎟️</span>
            <h3 className="font-serif font-bold text-xl text-gray-900">Waitlist Registered!</h3>
            <p className="text-sm text-gray-650 max-w-sm mx-auto leading-relaxed">
              We have registered your details for the waitlist. As soon as a slot becomes available on your requested date, our reservation manager will reach out to you.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-sm font-semibold bg-[#FFD700] hover:bg-[#E6C200] text-black px-6 py-2.5 rounded-full transition cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} autoComplete="on" className="mt-8 sm:mt-10 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              <input
                type="text"
                required
                autoComplete="name"
                autoCapitalize="words"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full self-start px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              />

              <div className="relative pt-1 sm:pt-0">
                <p className="pointer-events-none absolute right-1 -top-3 text-right text-xs text-gray-400 sm:-top-5">
                  {phone.length}/10 digits
                </p>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    autoComplete="tel-national"
                    inputMode="numeric"
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-14 pr-4 text-sm sm:py-3.5 sm:pl-14 sm:pr-5 sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                autoComplete="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              />
              
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              />
            </div>

            {/* Row 3: City and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              >
                <option value="" disabled>Select City *</option>
                <option value="Delhi NCR">Delhi NCR</option>
              </select>

              <select
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              >
                <option value="" disabled>Select Preferred Location *</option>
                <option value="Noida Sector 4">Noida (Sector 4)</option>
              </select>
            </div>

            {/* Row 4: Date and People Count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              />

              <input
                type="number"
                required
                min={1}
                placeholder="Number of People *"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              />
            </div>

            {/* Row 5: Occasion */}
            <div>
              <select
                required
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-900"
              >
                <option value="" disabled>Select Occasion *</option>
                <option value="Birthday">Birthday Celebration</option>
                <option value="Anniversary">Anniversary Celebration</option>
                <option value="Proposal">Romantic Proposal</option>
                <option value="Date Night">Intimate Date Night</option>
                <option value="Other">Other Celebration</option>
              </select>
            </div>

            {/* Row 6: Notes */}
            <div>
              <textarea
                rows={3}
                placeholder="Any special requests or instructions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 text-gray-905 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#0f1115] hover:bg-[#1e232d] text-[#FFD700] py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              {isSubmitting ? "Submitting..." : "Submit Waitlist Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
