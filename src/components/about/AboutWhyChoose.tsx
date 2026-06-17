"use client";

export default function AboutWhyChoose() {
  return (
    <section className="bg-section-light py-10 sm:py-14 lg:py-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-serif">
            Why Choose Elite Screens
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-650 text-sm sm:text-base lg:text-lg">
            We combine privacy, personalization, and premium service to create celebrations that feel effortless and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-film text-[#2A2A2E]"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 3v18"></path>
                  <path d="M3 7.5h4"></path>
                  <path d="M3 12h18"></path>
                  <path d="M3 16.5h4"></path>
                  <path d="M17 3v18"></path>
                  <path d="M17 7.5h4"></path>
                  <path d="M17 16.5h4"></path>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-black text-sm sm:text-base">Private Premium Theatres</h3>
                <p className="mt-1 text-gray-650 text-xs sm:text-sm leading-relaxed">
                  Enjoy a completely private cinema experience designed for comfort, intimacy, and exclusivity.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-party-popper text-[#2A2A2E]"
                  aria-hidden="true"
                >
                  <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                  <path d="M4 3h.01"></path>
                  <path d="M22 8h.01"></path>
                  <path d="M15 2h.01"></path>
                  <path d="M22 20h.01"></path>
                  <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
                  <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path>
                  <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path>
                  <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-black text-sm sm:text-base">Celebration-First Experience</h3>
                <p className="mt-1 text-gray-650 text-xs sm:text-sm leading-relaxed">
                  From birthdays to proposals, every setup is thoughtfully curated to match your occasion.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles text-[#2A2A2E]"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-black text-sm sm:text-base">Personalized Touch</h3>
                <p className="mt-1 text-gray-650 text-xs sm:text-sm leading-relaxed">
                  Customized LED messages, décor themes, and ambience that make your moment truly yours.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-handshake text-[#2A2A2E]"
                  aria-hidden="true"
                >
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-black text-sm sm:text-base">Warm &amp; Support</h3>
                <p className="mt-1 text-gray-650 text-xs sm:text-sm leading-relaxed">
                  Our team handles everything seamlessly so you can focus on enjoying your celebration.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-check text-[#2A2A2E]"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-black text-sm sm:text-base">Hygiene &amp; Quality Assured</h3>
                <p className="mt-1 text-gray-650 text-xs sm:text-sm leading-relaxed">
                  Clean, comfortable spaces with high-quality food and refreshments you can trust.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECECEC] border border-[#D6D6D6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock text-[#2A2A2E]"
                  aria-hidden="true"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-black text-sm sm:text-base">Effortless Booking</h3>
                <p className="mt-1 text-gray-650 text-xs sm:text-sm leading-relaxed">
                  Simple booking flow with quick confirmations and transparent pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="Premium private theatre celebration"
                className="object-cover w-full h-full absolute inset-0 text-transparent"
                src="/media/site/home/reviews/life-of-paetoo/5.webp"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#FFD700]/20 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
