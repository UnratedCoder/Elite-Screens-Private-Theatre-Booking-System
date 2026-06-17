"use client";

import WaitlistHero from "@/components/waitlist/WaitlistHero";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

export default function Waitlist() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. HERO SECTION */}
      <WaitlistHero />

      {/* 2. WAITLIST FORM SECTION */}
      <WaitlistForm />
    </div>
  );
}
