"use client";

import { Suspense } from "react";
import Link from "next/link";
import { BookingControllerProvider, useBookingController } from "@/controllers/BookingController";
import { HERO_IMAGES } from "@/models/bookingData";

// Step components
import BookingHeader from "@/views/booking/BookingHeader";
import BookingSidebar from "@/views/booking/BookingSidebar";
import Step1LocationDate from "@/views/booking/Step1LocationDate";
import Step2TheatreSlots from "@/views/booking/Step2TheatreSlots";
import Step3ContactInfo from "@/views/booking/Step3ContactInfo";
import Step4Occasion from "@/views/booking/Step4Occasion";
import Step5Cakes from "@/views/booking/Step5Cakes";
import Step6Decorations from "@/views/booking/Step6Decorations";
import Step7Gifts from "@/views/booking/Step7Gifts";
import Step8BookingDetails from "@/views/booking/Step8BookingDetails";
import Step9Success from "@/views/booking/Step9Success";

function BookingContent() {
  const {
    mounted,
    step,
    activeSlide,
    setActiveSlide,
    isPaid
  } = useBookingController();

  const isDarkBg = true;

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] text-[#6b7280]">
        Loading booking parameters...
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between relative transition-colors duration-500 ${
        isDarkBg 
          ? "text-white" 
          : "bg-[#f8f5ef] text-gray-900"
      }`}
    >
      {/* Fullscreen Functional Background Slideshow for Step 1 & 2 */}
      {isDarkBg && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none print:hidden">
          {HERO_IMAGES.map((imgUrl, index) => (
            <img
              key={index}
              alt={`Theatre Background Slide ${index + 1}`}
              src={imgUrl}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Vignette & Contrast Overlays */}
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.55)_100%)]"></div>
        </div>
      )}

      {/* Pagination Dots */}
      {isDarkBg && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/5 print:hidden">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === activeSlide 
                  ? "w-6 h-2 bg-[#C85A17]" 
                  : "w-2 h-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Sticky Custom Header */}
      <div className="print:hidden">
        <BookingHeader />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className={`w-full ${step === 1 ? "max-w-4xl" : "max-w-7xl"} mx-auto`}>
          
          {step >= 3 && step <= 8 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-2xl border border-gray-150 p-5 sm:p-7 shadow-xl text-gray-800">
              
              {/* Left Column: Form Fields depending on step */}
              <div className="lg:col-span-8 space-y-4">
                {step === 3 && <Step3ContactInfo />}
                {step === 4 && <Step4Occasion />}
                {step === 5 && <Step5Cakes />}
                {step === 6 && <Step6Decorations />}
                {step === 7 && <Step7Gifts />}
                {step === 8 && <Step8BookingDetails />}
              </div>

              {/* Right Column: Booking Summary Sidebar */}
              <BookingSidebar />
            </div>
          ) : (
            <>
              {step === 1 && <Step1LocationDate />}
              {step === 2 && <Step2TheatreSlots />}
              {step === 9 && isPaid && <Step9Success />}
            </>
          )}

        </div>
      </main>

      {/* Minimal Footer */}
      <footer 
        className={`w-full border-t py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 z-10 relative transition-all duration-300 print:hidden ${
          isDarkBg 
            ? "bg-black/45 border-white/10 text-white/50" 
            : "bg-[#0d0e12] border-white/10 text-white/50"
        }`}
      >
        <div className="mx-auto max-w-7xl w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="logo-container bg-[#1e2330] rounded-xl flex items-center justify-center h-[36px] w-[58px] shadow-sm p-0.5 border border-amber-500/30">
              <img 
                alt="Elite Screens" 
                src="/assets/logo.png"
                className="logo-image h-full w-full object-cover rounded-lg"
              />
            </div>
          </Link>
          <span className="text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} Elite Screens. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] text-[#6b7280]">Loading booking parameters...</div>}>
      <BookingControllerProvider>
        <BookingContent />
      </BookingControllerProvider>
    </Suspense>
  );
}
