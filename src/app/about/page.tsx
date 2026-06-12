import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. HERO SECTION (Dark theme matching original website) */}
      <section className="relative overflow-hidden pb-16 pt-[140px] sm:pb-20 sm:pt-[160px] lg:pb-24 lg:pt-[180px] bg-black">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-4">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FFD700]">
            — OUR CELEBRATIONS, YOUR WAY —
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif leading-tight text-white">
            Creating Moments That Last a Lifetime
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-white/80 leading-relaxed font-sans pt-2">
            Dazzling Screens is a premium private theatre experience designed for celebrations, surprises, and intimate moments. We combine cinema, comfort, and customization to turn special occasions into unforgettable memories.
          </p>
          <p className="max-w-xl mx-auto text-[11px] sm:text-xs text-white/60 leading-relaxed">
            Trusted by thousands of happy guests for proposals, birthdays, anniversaries, and private screenings.
          </p>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold px-7 py-3 rounded-full text-xs sm:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Start Your Celebration
            </Link>
            <a
              href="https://wa.me/919289289696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-extrabold px-7 py-3 rounded-full text-xs sm:text-sm transition uppercase tracking-wider"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-5 relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
            <img
              alt="Romantic private setup lights"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800"
            />
          </div>

          {/* Right Column: Text */}
          <div className="md:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              Our Story
            </h2>
            <p className="text-sm text-gray-650 leading-relaxed font-sans">
              Dazzling Screens was created with a simple belief - special moments deserve more than ordinary spaces. We wanted to give people a private, beautiful, and meaningful way to celebrate life&apos;s milestones.
            </p>
            <p className="text-sm text-gray-655 leading-relaxed font-sans">
              Traditional theatres often lack intimacy and flexibility. That&apos;s why we designed premium private screening spaces where every detail - from custom décor and lighting to seating and service - feels personal and thoughtfully curated.
            </p>
            <p className="text-sm text-gray-655 leading-relaxed font-sans">
              Over time, Dazzling Screens has become a trusted place for proposals, birthdays, anniversaries, and unforgettable celebrations - helping our guests turn emotions into memories.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-gray-100">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
            Why Choose Dazzling Screens
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            We combine privacy, personalization, and premium service to create celebrations that feel effortless and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 6 Features (2 cols x 3 rows) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-base">
                🔒
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">Private Premium Theatres</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Enjoy a completely private cinema experience designed for comfort, intimacy, and exclusivity.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-base">
                🎉
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">Celebration-First Experience</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  From decorations to presents, every detail is thoughtfully curated to match your occasion.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-base">
                ✨
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">Personalized Touch</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Customized LED messages, decor themes, and add-ons that make your moment truly yours.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-base">
                👥
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">Warm & Professional Support</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Our host handles everything from food to photography support, so you can focus on enjoying your celebration.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-base">
                🛡️
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">Hygiene & Quality Assured</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Clean, comfortable spaces with high-quality snacks, cakes, and mocktails.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-base">
                ⏱️
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">Effortless Booking</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Simple online booking with instant confirmation, transparent packages, and 24/7 help desk support.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
            <img
              alt="Theatre celebration setup"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT */}
      <section className="bg-[#fcfbf9] border-y border-gray-150/70 py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              Our Impact, Built with Care
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              These numbers represent real people trusting us with their most meaningful celebrations — each one handled with attention and care.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Celebrations Created
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">3500+</h3>
              <p className="text-xs text-gray-500">Birthdays, proposals, anniversaries & more</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Private Screening Sessions
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">5000+</h3>
              <p className="text-xs text-gray-500">Intimate, comfortable cinema experiences</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Average Client Rating
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">4.9 / 5</h3>
              <p className="text-xs text-gray-500">Based on verified Google reviews</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                Cities Served
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">1+</h3>
              <p className="text-xs text-gray-500">Delivering joy daily with uncompromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A NOTE FROM THE FOUNDER */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
            <img
              alt="Dazzling Screens sign board"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
            />
          </div>

          {/* Right Column: Text */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              A Note from the Founder
            </h2>
            <p className="text-sm text-gray-650 leading-relaxed font-sans">
              Dazzling Screens was born from a simple thought — celebrations should feel personal, private, and thoughtfully created. I wanted to build a space where people could slow down, be present, and truly enjoy moments that matter.
            </p>
            <p className="text-sm text-gray-655 leading-relaxed font-sans">
              Every experience we design is guided by care, attention to detail, and respect for the emotions behind each celebration. From a quiet proposal to a joyful birthday surprise, our goal has always been the same — to make it feel effortless for you.
            </p>
            <p className="text-sm text-gray-655 leading-relaxed font-sans">
              Thank you for trusting us with your memories, it&apos;s a privilege we never take lightly.
            </p>
            <p className="text-sm font-semibold text-gray-900 pt-2 font-sans">
              — Founder, Dazzling Screens
            </p>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="relative overflow-hidden py-16 px-4 bg-[#7a7a7a] text-white text-center">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 z-0 bg-black/10 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            — OUR CELEBRATIONS, YOUR WAY —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            Turn Every Occasion Into a Lasting Memory
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
            From private movie nights to rose-petal proposal setups, Dazzling Screens offers private theatre experience that focuses around emotion, comfort, and customized details.
          </p>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold px-7 py-3 rounded-full text-xs sm:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Start Your Booking
            </Link>
            <a
              href="https://wa.me/919289289696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold px-7 py-3 rounded-full text-xs sm:text-sm transition uppercase tracking-wider"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
