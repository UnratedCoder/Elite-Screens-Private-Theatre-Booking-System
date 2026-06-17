"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Ticket, Calendar, Users, MapPin, Receipt, Check, CreditCard, Download } from "lucide-react";
import { useBookingController } from "@/controllers/BookingController";

export default function Step9Success() {
  const {
    bookingId,
    activeTheater,
    formatDateLabel,
    date,
    slotTime,
    guests,
    kids,
    location,
    cart,
    phone,
    basePrice,
    kidsPrice,
    hasDecoration,
    appliedDiscount,
    total,
    name,
    email,
    whatsappNumber,
    occasion,
    occasionMessage,
    partner1Name,
    partner2Name,
    celebrantName
  } = useBookingController();

  const remainingBalance = Math.max(0, total - 750);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = () => {
    if (typeof window !== "undefined") {
      setIsDownloading(true);
      
      const generate = async () => {
        let wrapper: HTMLDivElement | null = null;
        try {
          // Dynamic import of modules to avoid SSR/Next.js compiler issues
          const html2canvas = (await import("html2canvas-pro")).default;
          const { jsPDF } = await import("jspdf");

          const element = document.getElementById("print-invoice");
          if (!element) {
            setIsDownloading(false);
            return;
          }

          // Clone original print-invoice node to isolate layout styles
          const clone = element.cloneNode(true) as HTMLElement;
          clone.id = "print-invoice-clone";
          // Remove offscreen absolute positioning class
          clone.className = "text-zinc-900 bg-white text-xs font-sans space-y-3 p-6 rounded-none";
          
          // Create temporary wrapper to paint clone in the active DOM viewport
          wrapper = document.createElement("div");
          wrapper.style.position = "fixed";
          wrapper.style.left = "0";
          wrapper.style.top = "0";
          wrapper.style.width = "794px"; // Standard A4 width at 96 DPI
          wrapper.style.height = "auto";
          wrapper.style.zIndex = "-9999";
          wrapper.style.opacity = "0.01";
          wrapper.style.pointerEvents = "none";
          
          wrapper.appendChild(clone);
          document.body.appendChild(wrapper);

          // Use html2canvas to capture the clone
          const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff"
          });

          // Clean up DOM wrapper immediately
          if (wrapper && document.body.contains(wrapper)) {
            document.body.removeChild(wrapper);
            wrapper = null;
          }

          // Generate PDF page using jsPDF
          const imgData = canvas.toDataURL("image/jpeg", 0.98);
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
          });

          const imgWidth = 210; // A4 size width in mm
          const pageHeight = 297; // A4 size height in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          // Add image to first page
          pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          // Add extra pages if the content overflows A4 height
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          pdf.save(`RECEIPT-${bookingId}.pdf`);
          setIsDownloading(false);
        } catch (error: unknown) {
          console.error("PDF generation failed:", error);
          if (wrapper && document.body.contains(wrapper)) {
            document.body.removeChild(wrapper);
          }
          setIsDownloading(false);
          // Safe fallback to native browser printing
          window.print();
        }
      };

      generate();
    }
  };

  return (
    <>
      {/* SCREEN-ONLY VIEW: Matches the website design exactly */}
      <div className="print:hidden max-w-md mx-auto rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 text-center shadow-lg animate-fade-in text-gray-800 space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <CheckCircle2 size={36} className="animate-bounce" />
        </div>

        <div>
          <h2 className="font-serif text-3xl font-bold text-[#111827] leading-tight">Booking Confirmed!</h2>
          <p className="text-xs text-gray-500 font-semibold mt-1">Your private cinema slot has been successfully reserved.</p>
        </div>

        {/* Booking Metadata Cards */}
        <div className="rounded-2xl border border-gray-150 bg-gray-50/50 p-4 text-left text-xs space-y-3 shadow-2xs">
          <div className="flex justify-between items-center pb-2 border-b border-gray-150">
            <span className="text-gray-400 font-medium flex items-center gap-1.5">
              <Ticket size={14} className="text-[#C85A17]" />
              <span>Booking ID</span>
            </span>
            <span className="font-mono font-extrabold text-[#C85A17]">{bookingId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium flex items-center gap-1.5">
              <Ticket size={14} className="text-gray-400" />
              <span>Theater</span>
            </span>
            <span className="font-bold text-gray-800">{activeTheater.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" />
              <span>Date & Slot</span>
            </span>
            <span className="font-bold text-gray-800">{formatDateLabel(date)} ({slotTime})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium flex items-center gap-1.5">
              <Users size={14} className="text-gray-400" />
              <span>Guests</span>
            </span>
            <span className="font-bold text-gray-800">
              {guests} Adults{kids > 0 ? `, ${kids} Kids` : ""}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium flex items-center gap-1.5">
              <MapPin size={14} className="text-gray-400" />
              <span>Location</span>
            </span>
            <span className="font-bold text-gray-800">{location}</span>
          </div>
        </div>

        {/* Itemized Digital Invoice Receipt */}
        <div className="relative rounded-2xl border border-gray-200 bg-white p-5 text-left text-xs space-y-4 shadow-xs overflow-hidden">
          {/* Receipt Header Style */}
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <Receipt size={16} className="text-gray-500" />
            <span className="font-black text-gray-700 uppercase tracking-wider text-[10px]">Payment Receipt</span>
          </div>

          {/* Itemized list */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center font-medium">
              <span className="text-gray-500">{activeTheater.name} Slot Charge</span>
              <span className="font-bold text-gray-850">₹{basePrice}</span>
            </div>

            {kids > 0 && (
              <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Extra Kids (3-10 yrs) (x{kids})</span>
                <span className="font-bold text-gray-855">₹{kidsPrice}</span>
              </div>
            )}

            {hasDecoration && (
              <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">🎈 Balloon Decoration</span>
                <span className="font-bold text-gray-855">₹750</span>
              </div>
            )}

            {cart.length > 0 && (
              <div className="space-y-2 pt-1.5 pb-1.5 border-t border-b border-gray-50">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Cakes & Add-ons</p>
                <div className="space-y-1.5">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center font-medium pl-1 text-[11px] text-gray-650">
                      <span className="truncate pr-2">• {item.name} {item.quantity > 1 ? `(x${item.quantity})` : ""}</span>
                      <span className="font-bold text-gray-750 shrink-0">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {appliedDiscount > 0 && (
              <div className="flex justify-between items-center font-medium text-emerald-600">
                <span>Coupon Discount</span>
                <span className="font-bold">-₹{appliedDiscount}</span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-gray-200 my-4" />

          {/* Price Math Summaries */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-baseline">
              <span className="font-extrabold text-gray-500">Grand Total</span>
              <span className="font-black text-base text-gray-900">₹{total}</span>
            </div>

            <div className="flex justify-between items-center text-[11.5px] bg-emerald-50 text-emerald-800 rounded-lg p-2 border border-emerald-100">
              <span className="font-semibold flex items-center gap-1">
                <Check size={14} strokeWidth={3} className="text-emerald-600" />
                <span>Advance Paid</span>
              </span>
              <span className="font-bold">₹750</span>
            </div>

            <div className="flex justify-between items-center text-[11.5px] bg-amber-50 text-amber-805 rounded-lg p-2 border border-amber-100">
              <span className="font-semibold flex items-center gap-1">
                <CreditCard size={14} className="text-amber-600" />
                <span>Remaining at Theatre</span>
              </span>
              <span className="font-bold">₹{remainingBalance}</span>
            </div>
          </div>
        </div>

        {/* SMS Trigger Notice Block */}
        <div className="text-[11px] text-[#4b5563] leading-normal flex gap-2.5 items-start justify-center p-3.5 rounded-xl bg-[#C85A17]/5 border border-[#C85A17]/10">
          <ShieldCheck size={16} className="text-[#A04000] shrink-0 mt-0.5" />
          <p className="text-left leading-relaxed">
            A confirmation text has been triggered to your phone number **{phone}**. Please carry your Aadhaar Card at the check-in time.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            type="button"
            disabled={isDownloading}
            onClick={handleDownloadPDF}
            className={`flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-gray-800 py-3.5 px-6 text-sm font-bold shadow-xs transition-all flex-1 ${
              isDownloading 
                ? "opacity-60 cursor-not-allowed" 
                : "hover:border-gray-400 hover:bg-gray-50 hover:scale-101 active:scale-98 cursor-pointer"
            }`}
          >
            <Download size={16} className={isDownloading ? "animate-spin" : ""} />
            <span>{isDownloading ? "Downloading..." : "Download Receipt"}</span>
          </button>
          <Link
            href="/"
            className="inline-block text-center rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white py-3.5 px-6 text-sm font-bold shadow-md hover:scale-101 active:scale-98 transition-all flex-1"
          >
            Go to Home Page
          </Link>
        </div>
      </div>

      {/* PRINT-ONLY VIEW: Formatted as a high-fidelity A4 document invoice with cards matching standard screen UI styling */}
      <div id="print-invoice" className="print-invoice-offscreen text-zinc-900 bg-white text-xs font-sans space-y-3 p-4">
        {/* Invoice Top Brand Header */}
        <div className="flex justify-between items-start border-b border-zinc-300 pb-3 mb-1">
          <div>
            <h1 className="text-3xl font-serif font-black tracking-wider uppercase text-zinc-950">
              ELITE SCREENS
            </h1>
            <p className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest mt-1">
              Privé Private Theatre Experience
            </p>
            <p className="text-[10px] text-zinc-650 mt-1">
              FU-69, Sector 4, Noida, UP | Support: +91 98532 47324
            </p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-emerald-50 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-200 mb-1">
              BOOKING CONFIRMED
            </div>
            <p className="text-[10px] text-zinc-500 font-mono">Invoice Ref: #{bookingId}</p>
            <p className="text-[10px] text-zinc-650 mt-0.5">Date: {new Date().toLocaleDateString('en-GB')}</p>
          </div>
        </div>

        {/* Info header */}
        <div className="text-left font-serif text-lg font-bold text-[#111827] pb-0.5">
          Booking Confirmed!
        </div>

        {/* Customer & Booking Information Grid */}
        <div className="grid grid-cols-2 gap-3.5 print-avoid-break">
          {/* Column 1: Customer Details */}
          <div className="border border-zinc-200 rounded-2xl p-3 bg-zinc-50/20 text-left space-y-1">
            <h3 className="font-bold text-[9px] uppercase text-zinc-400 tracking-wider">Customer Details</h3>
            <p className="text-[13px] font-extrabold text-zinc-900">{name || "Valued Customer"}</p>
            <p className="text-zinc-650"><span className="text-zinc-500 font-medium">Phone:</span> {phone || "N/A"}</p>
            <p className="text-zinc-650 truncate"><span className="text-zinc-500 font-medium">Email:</span> {email || "N/A"}</p>
            {whatsappNumber && <p className="text-zinc-650"><span className="text-zinc-500 font-medium">WhatsApp:</span> {whatsappNumber}</p>}
          </div>

          {/* Column 2: Booking Info */}
          <div className="border border-zinc-200 rounded-2xl p-3 bg-zinc-50/20 text-left space-y-1">
            <h3 className="font-bold text-[9px] uppercase text-zinc-400 tracking-wider">Booking Info</h3>
            <div className="space-y-0.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-zinc-550 font-medium">Theatre:</span>
                <span className="font-bold text-zinc-900">{activeTheater.name}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-zinc-550 font-medium shrink-0">Date & Slot:</span>
                <span className="font-bold text-zinc-900 text-right">{formatDateLabel(date)} ({slotTime})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-550 font-medium">Guests:</span>
                <span className="font-bold text-zinc-900">{guests} Adults{kids > 0 ? `, ${kids} Kids` : ""}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-550 font-medium">Location:</span>
                <span className="font-bold text-zinc-900">{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Occasion / Celebration Banner */}
        {occasion && (
          <div className="border border-zinc-200 rounded-2xl p-3 bg-zinc-50/20 flex justify-between items-start text-left print-avoid-break">
            <div>
              <h3 className="font-bold text-[9px] uppercase text-orange-700 tracking-wider mb-1">Celebration Occasion</h3>
              <p className="text-[13px] font-extrabold text-zinc-900">{occasion}</p>
              {(occasion === "Anniversary" || occasion === "Romantic Date" || occasion === "Proposal") ? (
                <p className="text-zinc-550 text-[10px] mt-0.5">Celebrants: {partner1Name} & {partner2Name}</p>
              ) : celebrantName ? (
                <p className="text-zinc-550 text-[10px] mt-0.5">Celebrated by: {celebrantName}</p>
              ) : null}
            </div>
            {occasionMessage && (
              <div className="text-right max-w-[50%]">
                <h3 className="font-bold text-[9px] uppercase text-zinc-400 tracking-wider mb-1">Message on Decor</h3>
                <p className="text-[12px] font-bold text-zinc-800 italic">&quot;{occasionMessage}&quot;</p>
              </div>
            )}
          </div>
        )}

        {/* Payment Receipt Card */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-left text-xs space-y-3 print-avoid-break">
          {/* Receipt Header Style */}
          <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-100">
            <Receipt size={15} className="text-zinc-500" />
            <span className="font-black text-zinc-800 uppercase tracking-wider text-[10px]">Payment Receipt</span>
          </div>

          {/* Itemized list */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-medium">
              <span className="text-zinc-500">{activeTheater.name} Slot Charge</span>
              <span className="font-bold text-zinc-900">₹{basePrice}</span>
            </div>

            {kids > 0 && (
              <div className="flex justify-between items-center font-medium">
                <span className="text-zinc-500">Extra Kids (3-10 yrs) (x{kids})</span>
                <span className="font-bold text-zinc-900">₹{kidsPrice}</span>
              </div>
            )}

            {hasDecoration && (
              <div className="flex justify-between items-center font-medium">
                <span className="text-zinc-500">🎈 Balloon Decoration</span>
                <span className="font-bold text-zinc-900">₹750</span>
              </div>
            )}

            {cart.length > 0 && (
              <div className="space-y-1.5 pt-1.5 pb-1.5 border-t border-b border-zinc-100">
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Cakes & Add-ons</p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-0.5">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center font-medium text-[10px] text-zinc-700">
                      <span className="truncate pr-2">• {item.name} {item.quantity > 1 ? `(x${item.quantity})` : ""}</span>
                      <span className="font-bold text-zinc-900 shrink-0">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {appliedDiscount > 0 && (
              <div className="flex justify-between items-center font-medium text-emerald-700">
                <span>Coupon Discount</span>
                <span className="font-bold">-₹{appliedDiscount}</span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-zinc-200 my-2" />

          {/* Price Math Summaries */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="font-extrabold text-zinc-500">Grand Total</span>
              <span className="font-black text-base text-zinc-955">₹{total}</span>
            </div>

            <div className="flex justify-between items-center text-[10.5px] bg-emerald-50 text-emerald-800 rounded-lg p-1.5 border border-emerald-100">
              <span className="font-semibold flex items-center gap-1">
                <Check size={13} strokeWidth={3} className="text-emerald-600" />
                <span>Advance Paid</span>
              </span>
              <span className="font-bold">₹750</span>
            </div>

            <div className="flex justify-between items-center text-[10.5px] bg-amber-50 text-amber-800 rounded-lg p-1.5 border border-amber-100">
              <span className="font-semibold flex items-center gap-1">
                <CreditCard size={13} className="text-amber-600" />
                <span>Remaining at Theatre</span>
              </span>
              <span className="font-bold">₹{remainingBalance}</span>
            </div>
          </div>
        </div>

        {/* Invoice Footer */}
        <div className="border-t border-zinc-200 pt-2.5 text-center text-[8.5px] text-zinc-400 print-avoid-break">
          <p>Thank you for choosing Elite Screens for your private cinema celebration!</p>
          <p className="mt-0.5">This is a system generated booking receipt invoice and does not require physical signature.</p>
        </div>
      </div>
    </>
  );
}
