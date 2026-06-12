"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="bg-[#fcfbf9] text-gray-800 min-h-screen">
      {/* 1. HERO TOP BANNER (Dark with background image overlay) */}
      <section className="relative overflow-hidden pb-12 pt-[140px] sm:pb-14 sm:pt-[160px] lg:pb-16 lg:pt-[180px]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-[#0f1115]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Let&apos;s Plan Something Special
          </h1>
          <p className="text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re planning a celebration or need help with a booking, our team is here to guide you — quickly and personally.
          </p>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS (4 Column Cards on Light Background) */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/919289289696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-gray-900">Chat on WhatsApp</h3>
              <p className="text-[11px] text-gray-500 mt-1">Fastest way to reach us</p>
            </div>
          </a>

          {/* Card 2: Call */}
          <a
            href="tel:+919289289696"
            className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-gray-900">Call Us</h3>
              <p className="text-[11px] text-gray-500 mt-1">+91 92892 89696</p>
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:dazzlingscreens@gmail.com"
            className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-gray-900">Email</h3>
              <p className="text-[11px] text-gray-500 mt-1">dazzlingscreens@gmail.com</p>
            </div>
          </a>

          {/* Card 4: Address */}
          <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-gray-900">Visit Us</h3>
              <p className="text-sm text-gray-550 mt-1 leading-relaxed max-w-[200px] mx-auto">
                B-299, Outer Ring Rd, Block B, Saraswati Vihar, Pitampura, Delhi, 110034
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEND MESSAGE FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">
            Send Us a Message
          </h2>
        </div>

        <div className="bg-transparent max-w-[620px] mx-auto">
          {isSubmitted ? (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center space-y-3 shadow-md animate-fadeIn">
              <span className="text-4xl">🎉</span>
              <h3 className="font-serif font-bold text-lg text-gray-900">Message Sent Successfully!</h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Thank you for your enquiry. Our celebration coordinator will connect with you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs font-bold text-black bg-[#FFD700] hover:bg-[#E6C200] px-5 py-2.5 rounded-full transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#fbfbf9] text-[#0f1115] border border-gray-250 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] placeholder-gray-400 shadow-sm"
              />

              {/* Mobile */}
              <div className="flex rounded-xl border border-gray-250 overflow-hidden bg-[#fbfbf9] shadow-sm">
                <span className="bg-gray-50 border-r border-gray-200 px-4 flex items-center justify-center text-sm font-semibold text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full px-4 py-3 bg-transparent text-[#0f1115] text-sm focus:outline-none placeholder-gray-400"
                />
              </div>
              <span className="text-[10px] text-gray-400 block -mt-3 pl-2">{phone.length}/10 digits</span>

              {/* Message */}
              <textarea
                required
                rows={5}
                placeholder="Tell us what you're planning..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#fbfbf9] text-[#0f1115] border border-gray-250 rounded-xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] placeholder-gray-400 shadow-sm resize-none"
              />

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold py-3.5 rounded-full text-xs sm:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 uppercase tracking-wider"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. MAP SECTION (Centered light layout) */}
      <section className="max-w-7xl mx-auto px-4 pb-20 border-t border-gray-100 pt-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">
            Visit Our Location
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Find us easily and experience Dazzling Screens in person.
          </p>
        </div>

        {/* Real Interactive Google Map Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=Dazzling+Screens+-+Private+Theater+Celebration+Space,+Pitampura,+Delhi&t=h&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
