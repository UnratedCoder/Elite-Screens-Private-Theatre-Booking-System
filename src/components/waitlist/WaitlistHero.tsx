"use client";

export default function WaitlistHero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F4F6] pb-11 pt-[150px] sm:pb-14 lg:pb-20 lg:pt-[180px]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          alt="Waitlist hero background"
          className="object-cover object-center w-full h-full absolute inset-0 text-transparent"
          src="/media/site/waitlist/151067070.avif"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif">
          Join the Waitlist
        </h1>
        <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
          If your preferred slot is unavailable or you have a special request, leave your details here. Our team will reach out as soon as we can accommodate you.
        </p>
      </div>
    </section>
  );
}
