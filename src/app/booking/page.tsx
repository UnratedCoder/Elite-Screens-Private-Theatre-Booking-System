import { Suspense } from "react";
import BookingWizard from "@/components/BookingWizard";

export default function BookingPage() {
  return (
    <div className="bg-white pt-24 sm:pt-28 min-h-screen">
      {/* Page Header banner */}
      <section className="bg-gray-50 border-b border-gray-200 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif">
            Book Your Private Theatre Experience
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Reserve your cinema slot in just a few clicks. Complete the steps to choose your decors, cakes, and add-ons.
          </p>
        </div>
      </section>

      {/* Booking Wizard content wrapped in Suspense */}
      <Suspense
        fallback={
          <div className="min-h-[40vh] flex flex-col items-center justify-center space-y-4">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[#FFD700] rounded-full animate-spin" />
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
              Loading Booking System...
            </p>
          </div>
        }
      >
        <BookingWizard />
      </Suspense>
    </div>
  );
}
