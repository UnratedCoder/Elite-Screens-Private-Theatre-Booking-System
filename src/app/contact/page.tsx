"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function Contact() {
  return (
    <div className="bg-[#fcfbf9] text-gray-800 min-h-screen">
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* 2. CONTACT OPTIONS */}
      <ContactOptions />

      {/* 3. CONTACT FORM */}
      <ContactForm />

      {/* 4. GOOGLE MAPS LOCATION */}
      <ContactMap />
    </div>
  );
}
