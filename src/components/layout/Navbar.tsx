"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Tag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const toggleCoupons = () => {
    window.dispatchEvent(new Event("toggle-coupons"));
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      const spacesEl = document.getElementById("spaces");
      const whyChooseUsEl = document.getElementById("why-choose-us");

      const spacesOffset = spacesEl ? spacesEl.offsetTop : 0;
      const whyChooseUsOffset = whyChooseUsEl ? whyChooseUsEl.offsetTop : 0;

      if (whyChooseUsOffset && scrollPosition >= whyChooseUsOffset) {
        setActiveSection("about");
      } else if (spacesOffset && scrollPosition >= spacesOffset) {
        setActiveSection("theatres");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isBookingPage = pathname === "/booking";

  if (isBookingPage) {
    return (
      <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50 h-[72px] sm:h-[80px] flex items-center">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="logo-container bg-[#1e2330] rounded-xl flex items-center justify-center h-[48px] w-[76px] sm:h-[50px] sm:w-[80px] shadow-md p-0.5 border border-amber-500/30">
                <img 
                  alt="Elite Screens" 
                  src="/assets/logo.png"
                  className="logo-image h-full w-full object-cover rounded-lg"
                />
              </div>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50 h-[72px] sm:h-[80px] flex items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Container */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="logo-container bg-[#1e2330] rounded-xl flex items-center justify-center h-[48px] w-[76px] sm:h-[50px] sm:w-[80px] shadow-md p-0.5 border border-amber-500/30">
              <img 
                alt="Elite Screens" 
                src="/assets/logo.png"
                className="logo-image h-full w-full object-cover rounded-lg"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link 
              href="/" 
              className={`relative text-sm py-1 transition-all duration-200 ${
                pathname === "/" && activeSection === "home"
                  ? "text-[#C85A17] font-bold border-b-2 border-[#C85A17]"
                  : "font-semibold text-gray-800 hover:text-[#A04000]"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className={`relative text-sm py-1 transition-all duration-200 ${
                pathname === "/gallery"
                  ? "text-[#C85A17] font-bold border-b-2 border-[#C85A17]"
                  : "font-semibold text-gray-800 hover:text-[#A04000]"
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/#spaces" 
              className={`relative text-sm py-1 transition-all duration-200 ${
                pathname === "/" && activeSection === "theatres"
                  ? "text-[#C85A17] font-bold border-b-2 border-[#C85A17]"
                  : "font-semibold text-gray-800 hover:text-[#A04000]"
              }`}
            >
              Theatres
            </Link>
            <Link 
              href="/#why-choose-us" 
              className={`relative text-sm py-1 transition-all duration-200 ${
                pathname === "/" && activeSection === "about"
                  ? "text-[#C85A17] font-bold border-b-2 border-[#C85A17]"
                  : "font-semibold text-gray-800 hover:text-[#A04000]"
              }`}
            >
              About Us
            </Link>
            
            <button
              onClick={toggleCoupons}
              className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-[#C85A17] hover:text-white hover:border-[#C85A17] transition-all cursor-pointer"
            >
              <Tag size={13} className="text-[#A04000]" />
              Coupons
            </button>

            <a
              href="tel:9853247324"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-[#A04000] transition-colors"
            >
              <Phone size={14} className="text-[#A04000]" />
              <span>9853247324</span>
            </a>

            <Link
              href="/booking"
              className="rounded-full bg-[#C85A17] text-white px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#C85A17]/25 transition-all hover:scale-102"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={toggleCoupons}
              className="rounded-full border border-gray-300 p-2 text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
            >
              <Tag size={15} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[72px] sm:top-[80px] left-0 w-full border-b border-gray-300 bg-white px-4 pt-2 pb-6 space-y-2.5 shadow-lg z-50 transition-all">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/" && activeSection === "home"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/gallery"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/#spaces"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/" && activeSection === "theatres"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Theatres
          </Link>
          <Link
            href="/#why-choose-us"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/" && activeSection === "about"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            About Us
          </Link>
          
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-150 mt-2">
            <a
              href="tel:9853247324"
              className="flex items-center gap-2 text-base font-semibold text-gray-800 px-3"
            >
              <Phone size={16} className="text-[#A04000]" />
              <span>9853247324</span>
            </a>
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-full bg-[#C85A17] py-3 text-base font-bold text-white hover:bg-[#A04000] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
