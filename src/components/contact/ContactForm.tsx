"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <section className="max-w-4xl mx-auto px-4 pb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">
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
              className="mt-4 text-xs font-bold text-black bg-[#FFD700] hover:bg-[#E6C200] px-5 py-2.5 rounded-full transition cursor-pointer"
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
              className="w-full bg-[#fbfbf9] text-[#0f1115] border border-gray-250 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] placeholder-gray-400 shadow-sm"
            />

            {/* Phone */}
            <input
              type="tel"
              required
              placeholder="Mobile Number"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full bg-[#fbfbf9] text-[#0f1115] border border-gray-250 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] placeholder-gray-400 shadow-sm"
            />

            {/* Message */}
            <textarea
              rows={4}
              required
              placeholder="Tell us about your occasion or details of any custom arrangement you need..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#fbfbf9] text-[#0f1115] border border-gray-250 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] placeholder-gray-400 shadow-sm resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0f1115] hover:bg-[#1e232d] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
