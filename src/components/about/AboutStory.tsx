"use client";

export default function AboutStory() {
  return (
    <section className="bg-white py-8 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="Private theatre celebration setup"
                className="object-cover w-full h-full absolute inset-0 text-transparent"
                src="/media/site/home/reviews/vaishnavi-puri/3.webp"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#FFD700]/20 blur-2xl pointer-events-none" />
          </div>

          {/* Text Column */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-serif">
              Our Story
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-650 leading-relaxed text-sm sm:text-base">
              Elite Screens was created with a simple belief - special moments deserve more than ordinary spaces. We wanted to give people a private, beautiful, and meaningful way to celebrate life’s milestones.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-650 leading-relaxed text-sm sm:text-base">
              Traditional theatres often lack intimacy and flexibility. So we designed premium private screening spaces where every detail - from décor and lighting to seating and service - feels personal and thoughtfully curated.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-650 leading-relaxed text-sm sm:text-base">
              Over time, Elite Screens has become a trusted place for proposals, birthdays, anniversaries, and unforgettable celebrations - helping our guests turn emotions into memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
