"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/booking") return null;

  return (
    <footer className="border-t border-white/10 bg-[#0f1115] text-white px-6 pb-6 pt-12 md:px-8 md:pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-14 md:mb-16">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="logo-container bg-[#1e2330] rounded-xl flex items-center justify-center h-[48px] w-[76px] sm:h-[50px] sm:w-[80px] shadow-md p-0.5 border border-amber-500/30">
                <img 
                  alt="Elite Screens Logo" 
                  src="/assets/logo.png"
                  className="logo-image h-full w-full object-cover rounded-lg"
                />
              </div>
              <span className="font-serif font-bold text-xl tracking-wide text-white">
                Elite<span className="text-[#FFD700]">Screens</span>
              </span>
            </Link>
            <p className="leading-relaxed text-white/70 text-sm">
              Creating unforgettable cinematic experiences for your special moments. Where celebrations meet luxury.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/" className="transition hover:text-[#FFD700] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition hover:text-[#FFD700] hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#FFD700] hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="transition hover:text-[#FFD700] hover:underline">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#FFD700] hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white tracking-wide">Policies</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/terms-and-conditions" className="transition hover:text-[#FFD700] hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-[#FFD700] hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="transition hover:text-[#FFD700] hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="transition hover:text-[#FFD700] hover:underline">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials & Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white tracking-wide">Follow Us</h4>
            <div className="flex items-center gap-4 mb-6">
              {/* Instagram */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elite Screens on Instagram"
                className="text-white/80 transition hover:text-[#FFD700]"
                href="https://www.instagram.com/elitescreens/"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elite Screens on Facebook"
                className="text-white/80 transition hover:text-[#FFD700]"
                href="https://www.facebook.com/elitescreens/"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elite Screens on YouTube"
                className="text-white/80 transition hover:text-[#FFD700]"
                href="https://www.youtube.com/@elitescreens"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.516 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.508 9.388.508 9.388.508s7.516 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <h4 className="mb-3 text-lg font-bold text-white tracking-wide">Address</h4>
            <div className="flex items-start gap-2.5 text-sm text-white/80 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin shrink-0 mt-0.5 text-[#FFD700]">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="leading-relaxed">
                FU-69, First Floor, Sector 4, Noida, Uttar Pradesh, 201301
              </p>
            </div>

            <h4 className="mb-3 text-lg font-bold text-white tracking-wide">Contact</h4>
            <div className="space-y-2.5 text-sm text-white/80">
              <a href="tel:+919853247324" className="flex items-center gap-2.5 transition hover:text-[#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-[#FFD700]">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                +91 98532 47324
              </a>
              <a href="mailto:hello@elitescreens.com" className="flex items-center gap-2.5 transition hover:text-[#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#FFD700]">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                </svg>
                hello@elitescreens.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>© 2026 Elite Screens LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
