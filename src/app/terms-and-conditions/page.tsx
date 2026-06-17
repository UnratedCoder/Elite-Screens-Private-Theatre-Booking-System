import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      {/* Page Banner */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Legal Documents</p>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#FFD700] uppercase tracking-wider bg-black px-4 py-1 rounded-full inline-block">
            Elite Screens LLP
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <article className="space-y-10 text-gray-750 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 mb-4">
              1. Venue Booking Rules & Guidelines
            </h2>
            <p className="mb-4">
              By reserving a private theatre slot at Elite Screens, you agree to comply with the following operational rules. Failure to do so may result in immediate cancellation of your session without a refund.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Outside Food & Beverages:</strong> Outside food and drinks are strictly not allowed inside the theatre premises. In-house kitchen ordering is available throughout your booking slot.
              </li>
              <li>
                <strong>Smoking & Drinking:</strong> Smoking, vaping, and drinking alcoholic beverages are strictly prohibited inside the theatres. If found, a penalty fine of up to <strong>₹2,000</strong> will be charged immediately.
              </li>
              <li>
                <strong>Age Restrictions:</strong> Couples under 18 years of age are not permitted to book the private theatre space.
              </li>
              <li>
                <strong>Aadhaar Card Mandate:</strong> A valid Aadhaar card is mandatory for entry. In the case of couples, both individuals must present their physical or digital Aadhaar card, which will be scanned at the reception before entering.
              </li>
              <li>
                <strong>No Party Accessories:</strong> Party poppers, snow sprays, cold fire, confetti, and other similar items are strictly prohibited inside the theatres due to safety and cleanliness standards.
              </li>
              <li>
                <strong>Pets:</strong> Pets are strictly not allowed inside the theatre.
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 mb-4">
              2. Cleanliness & Damage Policy
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Guests are requested to maintain reasonable cleanliness inside the theatre space. Extreme littering may attract a cleaning surcharge.
              </li>
              <li>
                Any damage caused to the theatre equipment, screens, speakers, recliners, or decorative setups (including custom balloons, LED letters, light fixtures, etc.) by guests must be fully reimbursed.
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 mb-4">
              3. Refund & Cancellation Terms
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                An advance booking payment of <strong>₹750</strong> is collected to reserve a slot.
              </li>
              <li>
                This advance is <strong>fully refundable</strong> if cancellation is requested via WhatsApp chat at least <strong>72 hours</strong> before the scheduled slot time.
              </li>
              <li>
                Cancellations or slot rescheduling requests made less than 72 hours before the booking will not be eligible for a refund or rescheduling under any circumstances.
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 mb-4">
              4. Power Interruption
            </h2>
            <p>
              In the rare event of an electricity disruption or power cut lasting more than 15 minutes that cannot be supported by backup power, your complete booking amount (including advance) will be fully refunded or your slot rescheduled at your convenience.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6 text-xs text-gray-400">
            Last Updated: 10 June 2026
          </div>
        </article>
      </section>
    </div>
  );
}
