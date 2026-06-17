"use client";

export default function HowItWorksSection() {
  return (
    <section className="py-8 sm:py-14 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-serif">How It Works</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">Book your private theatre experience in just a few easy steps</p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
          <div className="grid grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto shadow-xl shadow-[#FFD700]/35 mb-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-black">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Choose Location &amp; Date</h3>
              <p className="text-xs sm:text-sm text-gray-550 max-w-xs mx-auto">Select your city and preferred date for the celebration</p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto shadow-xl shadow-[#FFD700]/35 mb-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film text-black">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 3v18" />
                  <path d="M3 7.5h4" />
                  <path d="M3 12h18" />
                  <path d="M3 16.5h4" />
                  <path d="M17 3v18" />
                  <path d="M17 7.5h4" />
                  <path d="M17 16.5h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Pick Theatre &amp; Slot</h3>
              <p className="text-xs sm:text-sm text-gray-550 max-w-xs mx-auto">Choose a private theatre and available time slot</p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto shadow-xl shadow-[#FFD700]/35 mb-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand-sparkles text-black">
                  <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                  <path d="m14 7 3 3" />
                  <path d="M5 6v4" />
                  <path d="M19 14v4" />
                  <path d="M10 2v2" />
                  <path d="M7 8H3" />
                  <path d="M21 16h-4" />
                  <path d="M11 3H9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Customize Experience</h3>
              <p className="text-xs sm:text-sm text-gray-550 max-w-xs mx-auto">Add guests, decor, cakes &amp; special moments</p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto shadow-xl shadow-[#FFD700]/35 mb-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-black">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Pay &amp; Celebrate</h3>
              <p className="text-xs sm:text-sm text-gray-550 max-w-xs mx-auto">Confirm booking and enjoy your private screening</p>
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="block md:hidden space-y-8 pl-4 border-l-2 border-[#FFD700] ml-2">
          {/* Mobile Step 1 */}
          <div className="relative pl-6">
            <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-xs font-bold text-black shadow-md">1</div>
            <h3 className="font-bold text-black text-base mb-1 font-sans">Choose Location &amp; Date</h3>
            <p className="text-xs text-gray-550">Select your city and preferred date for the celebration</p>
          </div>
          {/* Mobile Step 2 */}
          <div className="relative pl-6">
            <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-xs font-bold text-black shadow-md">2</div>
            <h3 className="font-bold text-black text-base mb-1 font-sans">Pick Theatre &amp; Slot</h3>
            <p className="text-xs text-gray-550">Choose a private theatre and available time slot</p>
          </div>
          {/* Mobile Step 3 */}
          <div className="relative pl-6">
            <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-xs font-bold text-black shadow-md">3</div>
            <h3 className="font-bold text-black text-base mb-1 font-sans">Customize Experience</h3>
            <p className="text-xs text-gray-550">Add guests, decor, cakes &amp; special moments</p>
          </div>
          {/* Mobile Step 4 */}
          <div className="relative pl-6">
            <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-xs font-bold text-black shadow-md">4</div>
            <h3 className="font-bold text-black text-base mb-1 font-sans">Pay &amp; Celebrate</h3>
            <p className="text-xs text-gray-550">Confirm booking and enjoy your private screening</p>
          </div>
        </div>
      </div>
    </section>
  );
}
