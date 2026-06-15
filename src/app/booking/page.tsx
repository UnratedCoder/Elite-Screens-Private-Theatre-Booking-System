import { Suspense } from "react";
import BookingWizard from "@/components/BookingWizard";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#06080c] relative text-white">
      {/* Booking Wizard content wrapped in Suspense */}
      <Suspense
        fallback={
          <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-[#06080c] text-white">
            <div className="w-10 h-10 border-4 border-white/10 border-t-[#FFD700] rounded-full animate-spin" />
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
