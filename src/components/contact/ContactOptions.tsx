"use client";

export default function ContactOptions() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1: WhatsApp */}
        <a
          href="https://wa.me/919853247324"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-900">Chat on WhatsApp</h3>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">Fastest way to reach us</p>
          </div>
        </a>

        {/* Card 2: Call */}
        <a
          href="tel:+919853247324"
          className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-900">Call Us</h3>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">+91 98532 47324</p>
          </div>
        </a>

        {/* Card 3: Email */}
        <a
          href="mailto:elitescreens@gmail.com"
          className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-900">Email</h3>
            <p className="text-[11px] text-gray-500 mt-1 font-medium font-mono">elitescreens@gmail.com</p>
          </div>
        </a>

        {/* Card 4: Address */}
        <div className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-900">Visit Us</h3>
            <p className="text-[11.5px] text-gray-655 mt-1 leading-relaxed max-w-[210px] mx-auto font-medium">
              FU-69, First Floor, Sector 4, Noida, Uttar Pradesh, 201301
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
