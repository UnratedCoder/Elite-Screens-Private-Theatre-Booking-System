"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutImpactStats from "@/components/about/AboutImpactStats";
import AboutFounderNote from "@/components/about/AboutFounderNote";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. HERO SECTION */}
      <AboutHero />

      {/* 2. OUR STORY */}
      <AboutStory />

      {/* 3. WHY CHOOSE ELITE SCREENS */}
      <AboutWhyChoose />

      {/* 4. OUR IMPACT */}
      <AboutImpactStats />

      {/* 5. A NOTE FROM THE FOUNDER */}
      <AboutFounderNote />

      {/* 6. BOTTOM CALL TO ACTION */}
      <AboutCTA />
    </div>
  );
}
