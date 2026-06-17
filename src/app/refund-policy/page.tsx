import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      {/* Page Banner */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Legal Documents</p>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif">
            Refund Policy
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#FFD700] uppercase tracking-wider bg-black px-4 py-1 rounded-full inline-block">
            Elite Screens LLP
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <article className="space-y-6 text-gray-750 leading-relaxed text-sm sm:text-base">
          <p>
            This policy outlines how refunds are processed for advance slot reservations made through the Elite Screens LLP website and booking services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl font-serif border-b border-gray-100 pb-2 pt-4">
            Refund Terms
          </h2>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              We collect an advance payment of <strong>₹750</strong> to secure a private theatre slot booking.
            </li>
            <li>
              This advance amount is <strong>fully refundable</strong> (excluding minor transaction convenience charges of the payment gateway, if any) if you notify us about cancellation at least <strong>72 hours</strong> prior to your scheduled slot start time.
            </li>
            <li>
              To initiate a cancellation, you must contact our customer care team via <strong>WhatsApp chat</strong> at <a href="https://wa.me/919853247324" className="text-[#FFD700] hover:underline font-bold">+91 98532 47324</a>.
            </li>
            <li>
              Refunds are initiated within <strong>24 hours</strong> of the approved request and usually take <strong>5 to 7 business days</strong> to reflect in your original payment method (bank account, UPI, or card) depending on your payment provider.
            </li>
            <li>
              If your booking slot is cancelled within 72 hours of its start time, the advance payment will be <strong>forfeited</strong> and no refund or rescheduling will be processed under any circumstances.
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
