"use client";

export default function WhyChooseSection() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-4 font-serif">Why Choose a Private Theatre?</h2>
          <p className="text-sm sm:text-base md:text-lg text-black">Turn ordinary moments into unforgettable experiences</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">
          {/* Card 1 */}
          <div className="rounded-xl p-3 sm:p-6 md:p-3.5 lg:p-6 border border-gray-200 hover:shadow-lg transition bg-white flex flex-col justify-start">
            <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-100 text-black rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-2.5 lg:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cake">
                <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                <path d="M2 21h20" />
                <path d="M7 8v3" />
                <path d="M12 8v3" />
                <path d="M17 8v3" />
                <path d="M7 4h.01" />
                <path d="M12 4h.01" />
                <path d="M17 4h.01" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1.5 sm:mb-2 md:mb-1.5 lg:mb-2 font-sans">Perfect for Birthdays</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed">Surprise your loved ones with a unique celebration in a private cinema setting.</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-3 sm:p-6 md:p-3.5 lg:p-6 border border-gray-200 hover:shadow-lg transition bg-white flex flex-col justify-start">
            <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-100 text-black rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-2.5 lg:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1.5 sm:mb-2 md:mb-1.5 lg:mb-2 font-sans">Romantic Anniversaries</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed">Create unforgettable moments with your partner in an intimate theatre experience.</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-3 sm:p-6 md:p-3.5 lg:p-6 border border-gray-200 hover:shadow-lg transition bg-white flex flex-col justify-start">
            <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-100 text-black rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-2.5 lg:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film">
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
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1.5 sm:mb-2 md:mb-1.5 lg:mb-2 font-sans">Premium Movie Experience</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed">Enjoy blockbusters with immersive sound and crystal-clear projection.</p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl p-3 sm:p-6 md:p-3.5 lg:p-6 border border-gray-200 hover:shadow-lg transition bg-white flex flex-col justify-start">
            <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-100 text-black rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-2.5 lg:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1.5 sm:mb-2 md:mb-1.5 lg:mb-2 font-sans">Quality Family Time</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed">Bond with your family in a comfortable and completely private environment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
