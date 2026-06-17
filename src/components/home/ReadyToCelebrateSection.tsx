"use client";

import Link from "next/link";

export default function ReadyToCelebrateSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div
        className="absolute inset-0 pointer-events-none bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/media/site/shared/call-to-action-bg.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        <h2 className="mb-3 text-2xl font-semibold text-white sm:mb-4 sm:text-3xl md:text-4xl font-serif">
          Ready to Celebrate?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-sm text-white/85 sm:mb-8 sm:text-base">
          Book your private theatre experience in just a few clicks. Our team is always available if you need help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-[#FFD700] text-black font-semibold px-6 py-3 text-sm hover:shadow-xl hover:shadow-[#FFD700]/35 transition-all w-[240px] sm:w-auto cursor-pointer"
          >
            <span>Start Booking</span>
          </Link>

          <a
            href="https://wa.me/919853247324"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/5 text-white font-semibold px-6 py-3 text-sm hover:bg-white/10 transition-all w-[240px] sm:w-auto cursor-pointer"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
