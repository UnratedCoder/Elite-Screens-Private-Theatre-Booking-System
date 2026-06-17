"use client";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-[150px] sm:pb-14 sm:pt-[170px] lg:pb-16 lg:pt-[190px]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          alt="Elite Screens team support"
          src="/media/site/contact/niidhi-singh.webp"
          className="object-cover object-[center_18%] w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-[#0f1115]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight">
          Let’s Plan Something Special
        </h1>
        <p className="text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
          Whether you’re planning a celebration or need help with a booking, our team is here to guide you — quickly and personally.
        </p>
      </div>
    </section>
  );
}
