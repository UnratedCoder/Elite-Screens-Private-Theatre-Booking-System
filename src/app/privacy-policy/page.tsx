import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      {/* Page Banner */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Legal Documents</p>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#FFD700] uppercase tracking-wider bg-black px-4 py-1 rounded-full inline-block">
            Dazzling Screens LLP
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <article className="space-y-6 text-gray-750 leading-relaxed text-sm sm:text-base">
          <p>
            At Dazzling Screens LLP, accessible from dazzlingscreens.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Dazzling Screens and how we use it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 pt-4">
            Information We Collect
          </h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you use our Booking Wizard, we collect your Name, Email Address, Phone Number, preferred Location, Date, and Occasion details to handle your reservation request.</li>
            <li>If you contact us directly via WhatsApp or phone, we may receive additional information about you such as your name, email address, phone number, and the contents of any message.</li>
            <li>We require you to present physical Aadhaar cards at the reception during check-in for identity scanning and verification purposes. We do not store or share scans of these IDs; they are strictly processed at the venue desk for compliance and security checks.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 pt-4">
            How We Use Your Information
          </h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our booking services.</li>
            <li>Improve, personalize, and expand our website experience.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you via WhatsApp, email, or telephone for booking confirmations, changes, notifications, and customer support.</li>
            <li>Prevent fraudulent bookings or site activities.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 pt-4">
            Cookies and Web Beacons
          </h2>
          <p>
            Like any other website, Dazzling Screens uses &ldquo;cookies&rdquo;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>
          <p>
            You can choose to customize or disable cookies through our cookie consent banner at the bottom of the page or through your individual browser options.
          </p>

          <div className="border-t border-gray-100 pt-6 text-xs text-gray-400 mt-8">
            Last Updated: 10 June 2026
          </div>
        </article>
      </section>
    </div>
  );
}
