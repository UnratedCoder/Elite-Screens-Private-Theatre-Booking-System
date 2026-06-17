"use client";

export default function AboutFounderNote() {
  return (
    <section className="bg-white py-11 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left image column */}
          <div className="relative">
            <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="Founder of Elite Screens"
                className="object-cover w-full h-full absolute inset-0 text-transparent"
                src="/media/site/about/elite-logo-on-wall.png"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#ECECEC] blur-2xl pointer-events-none" />
          </div>

          {/* Right text column */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] font-serif">
              A Note from the Founder
            </h2>
            <p className="mt-4 sm:mt-6 text-[#5F6368] text-sm sm:text-base lg:text-lg leading-relaxed">
              Elite Screens was born from a simple thought — celebrations should feel personal, private, and thoughtfully created. I wanted to build a space where people could slow down, be present, and truly enjoy moments that matter.
            </p>
            <p className="mt-3 sm:mt-4 text-[#5F6368] text-sm sm:text-base lg:text-lg leading-relaxed">
              Every experience we design is guided by care, attention to detail, and respect for the emotions behind each celebration. From a quiet proposal to a joyful birthday surprise, our goal has always been the same — to make it feel effortless for you.
            </p>
            <p className="mt-3 sm:mt-4 text-[#5F6368] text-sm sm:text-base lg:text-lg leading-relaxed">
              Thank you for trusting us with your memories. It’s a privilege we never take lightly.
            </p>
            <div className="mt-6 sm:mt-8">
              <p className="text-[#111111] font-medium">— Founder, Elite Screens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
