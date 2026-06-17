"use client";

export default function ContactMap() {
  return (
    <section className="bg-white border-t border-gray-150 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">
            Find Us on Google Maps
          </h2>
        </div>

        <div className="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-md">
          {/* Custom Floating Info Window Overlay (top-left) */}
          <div className="absolute top-4 left-4 z-10 max-w-[280px] bg-black/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl border border-white/10 flex flex-col gap-1 text-[11px] animate-fadeIn pointer-events-none select-none">
            <h4 className="font-bold text-xs text-[#FFD700]">Elite Screens</h4>
            <p className="text-white/80 leading-relaxed">
              FU-69, First Floor, Sector 4, Noida, Uttar Pradesh, 201301
            </p>
            <span className="text-[10px] text-white/50 mt-1">Open 10:00 AM — 11:00 PM</span>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=28.5835,77.3230+(Elite+Screens,+FU-69,+First+Floor,+Sector+4,+Noida,+Uttar+Pradesh,+201301)&t=m&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
