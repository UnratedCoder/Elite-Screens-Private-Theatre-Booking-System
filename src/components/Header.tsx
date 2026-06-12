"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isBooking = pathname === "/booking";
  const isLegal =
    pathname === "/terms-and-conditions" ||
    pathname === "/privacy-policy" ||
    pathname === "/refund-policy" ||
    pathname === "/cancellation-policy";

  const linkColorClass =
    isScrolled || isBooking || isLegal
      ? "text-gray-800 hover:text-yellow-600"
      : "text-white hover:text-[#FFD700]";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if scrolled past a small threshold
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and scrolled past 100px -> hide
        setIsVisible(false);
      } else {
        // Scrolling up or near the top -> show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="w-full fixed top-0 left-0 z-50 flex flex-col pointer-events-none transition-transform duration-300"
      style={{
        transform: !isVisible && !isBooking && !isOpen
          ? "translateY(-100%)"
          : "translateY(0)"
      }}
    >
      {/* 1. TOP SCROLLING ANNOUNCEMENT BAR */}
      {!isBooking && (
        <div className="w-full bg-black text-white border-b border-white/5 overflow-hidden h-[34px] flex items-center pointer-events-auto">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            <div className="flex items-center gap-16 pr-16 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
              <span>HURRY UP !!! BOOK YOUR SLOTS IN ADVANCE AND ENJOY SPECIAL OFFERS. FOR DISCOUNTS, CALL US NOW! 928-928-9696</span>
              <span>✦</span>
              <span>DELHI NCR&apos;S PREMIUM PRIVATE THEATRE CELEBRATION CHANNELS</span>
              <span>✦</span>
            </div>
            <div className="flex items-center gap-16 pr-16 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
              <span>HURRY UP !!! BOOK YOUR SLOTS IN ADVANCE AND ENJOY SPECIAL OFFERS. FOR DISCOUNTS, CALL US NOW! 928-928-9696</span>
              <span>✦</span>
              <span>DELHI NCR&apos;S PREMIUM PRIVATE THEATRE CELEBRATION CHANNELS</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN NAVBAR */}
      <header
        className={`w-full transition-all duration-300 pointer-events-auto ${
          isBooking
            ? "bg-white border-b border-gray-300 py-2.5 shadow-sm text-gray-800"
            : isLegal
            ? "bg-white border-b border-gray-200 py-3 shadow-sm text-gray-800"
            : isScrolled
            ? "bg-white/95 border-b border-gray-200/80 backdrop-blur-md py-3 shadow-md text-gray-800"
            : "bg-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Badge */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="bg-[#FFD700] rounded-full flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:scale-103 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor">
                <circle cx="8" cy="7" r="2.5" />
                <circle cx="16" cy="7" r="2.5" />
                <rect x="5" y="10" width="14" height="6" rx="1" />
                <polygon points="19 11.5 22 9 22 17 19 14.5" />
                <line x1="12" y1="16" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="12" y1="16" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-[5.5px] font-extrabold text-black uppercase tracking-tighter leading-none mt-0.5 font-sans">
                Dazzling Screens
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isBooking && (
            <nav className="hidden md:flex items-center gap-8 font-semibold text-xs sm:text-sm tracking-wide uppercase">
              <Link
                href="/"
                className={`transition-colors ${linkColorClass}`}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className={`transition-colors ${linkColorClass}`}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`transition-colors ${linkColorClass}`}
              >
                About
              </Link>
              <Link
                href="/waitlist"
                className={`transition-colors ${linkColorClass}`}
              >
                Join Waitlist
              </Link>
              <Link
                href="/contact"
                className={`transition-colors ${linkColorClass}`}
              >
                Contact
              </Link>
            </nav>
          )}

          {/* CTA "Book Now" */}
          <div>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold px-6 py-2.5 text-xs sm:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          {!isBooking && (
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`p-2 rounded-lg transition ${
                  isScrolled || isBooking || isLegal
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Drawer */}
        {isOpen && !isBooking && (
          <div
            className={`md:hidden absolute top-full left-0 w-full border-b py-6 px-5 flex flex-col gap-4 shadow-2xl animate-fadeIn pointer-events-auto transition-colors duration-300 ${
              isScrolled || isLegal
                ? "bg-white border-gray-200"
                : "bg-[#0f1115] border-white/10"
            }`}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-sm py-2 border-b uppercase tracking-wider transition-colors ${
                isScrolled || isLegal
                  ? "text-gray-800 border-gray-100 hover:text-yellow-600"
                  : "text-white border-white/5 hover:text-[#FFD700]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-sm py-2 border-b uppercase tracking-wider transition-colors ${
                isScrolled || isLegal
                  ? "text-gray-800 border-gray-100 hover:text-yellow-600"
                  : "text-white border-white/5 hover:text-[#FFD700]"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-sm py-2 border-b uppercase tracking-wider transition-colors ${
                isScrolled || isLegal
                  ? "text-gray-800 border-gray-100 hover:text-yellow-600"
                  : "text-white border-white/5 hover:text-[#FFD700]"
              }`}
            >
              About
            </Link>
            <Link
              href="/waitlist"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-sm py-2 border-b uppercase tracking-wider transition-colors ${
                isScrolled || isLegal
                  ? "text-gray-800 border-gray-100 hover:text-yellow-600"
                  : "text-white border-white/5 hover:text-[#FFD700]"
              }`}
            >
              Join Waitlist
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-sm py-2 border-b uppercase tracking-wider transition-colors ${
                isScrolled || isLegal
                  ? "text-gray-800 border-gray-100 hover:text-yellow-600"
                  : "text-white border-white/5 hover:text-[#FFD700]"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full inline-flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold py-3.5 text-sm transition uppercase tracking-wider"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
