import Link from "next/link";

export default function CancellationPolicy() {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      {/* Page Banner */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Legal Documents</p>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif">
            Cancellation Policy
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
            This policy explains cancellation eligibility, rescheduling limits, and advance booking conditions for bookings made at Dazzling Screens LLP.
          </p>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 pt-4">
            Cancellation Terms
          </h2>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>72-Hour Cancellation Window:</strong> You are eligible for a full refund of your ₹750 advance payment if you cancel your booking at least <strong>72 hours</strong> before the scheduled session start time.
            </li>
            <li>
              <strong>Late Cancellations:</strong> Any cancellation requested within 72 hours of the slot start time will not be eligible for a refund. The advance booking fee of ₹750 will be forfeited to cover setup costs and slot block losses.
            </li>
            <li>
              <strong>Rescheduling Slots:</strong> Rescheduling is treated as a cancellation and re-booking. Rescheduling is only possible if requested at least 72 hours before the original slot time. Within the 72-hour window, rescheduling is not allowed, and a new booking must be placed.
            </li>
            <li>
              <strong>How to Cancel:</strong> To request a cancellation, send a message to our WhatsApp support at <a href="https://wa.me/919289289696" className="text-[#FFD700] hover:underline font-bold">+91 92892 89696</a> with your Name, Booking Date, Slot Time, and Reservation ID.
            </li>
          </ul>

          <div className="border-t border-gray-100 pt-6 text-xs text-gray-400 mt-8">
            Last Updated: 10 June 2026
          </div>
        </article>
      </section>
    </div>
  );
}
