"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { useBookingController } from "@/controllers/BookingController";

export default function Step8BookingDetails() {
  const {
    name,
    phone,
    email,
    occasion,
    date,
    slotTime,
    formatDateLabel,
    activeTheater,
    total,
    handleSaveAndContinue,
    guests,
    kids,
    kidsPrice,
    setBookingId,
    setIsPaid,
    goToStep
  } = useBookingController();

  const [paymentMethod, setPaymentMethod] = React.useState<"card" | "upi" | "netbanking">("card");
  const [upiMethod, setUpiMethod] = React.useState<"gpay" | "phonepe" | "paytm" | "upi_id">("gpay");
  const [upiId, setUpiId] = React.useState("");
  const [selectedBank, setSelectedBank] = React.useState("sbi");
  const [upiError, setUpiError] = React.useState("");
  const [upiSuccess, setUpiSuccess] = React.useState("");

  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [cardHolder, setCardHolder] = React.useState(name);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted.substring(0, 19));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setExpiryDate(value.substring(0, 5));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCvv(value.substring(0, 3));
  };

  const getCardType = (num: string) => {
    const cleanNum = num.replace(/\s/g, "");
    if (cleanNum.startsWith("4")) return "visa";
    if (/^5[1-5]/.test(cleanNum) || /^222[1-9]/.test(cleanNum) || /^22[3-9]/.test(cleanNum) || /^2[3-6]/.test(cleanNum) || /^27[0-1]/.test(cleanNum) || /^2720/.test(cleanNum)) return "mastercard";
    if (/^6[05]/.test(cleanNum) || /^8[12]/.test(cleanNum)) return "rupay";
    return "unknown";
  };

  return (
    <div className="space-y-6 animate-fade-in text-gray-800">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#111827] tracking-tight">Secure Checkout</h2>
        <p className="text-xs text-gray-500 font-medium">Complete your reservation payment securely using our mock sandbox gateway.</p>
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); handleSaveAndContinue(); }} className="space-y-6">
        {/* Receipt-style Billing Details Box */}
        <div className="p-5 rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50/50 to-white/30 space-y-4 shadow-xs">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <p className="font-extrabold text-xs text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
              <svg className="h-4 w-4 text-[#C85A17]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Booking Invoice Summary</span>
            </p>
            <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#C85A17] select-none tracking-wide uppercase">Sandbox draft</span>
          </div>
          
          <div className="space-y-3.5 text-xs text-gray-600 font-semibold max-w-2xl mx-auto">
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Customer Name</span>
              <span className="font-bold text-gray-800">{name || "Not entered"}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Mobile Number</span>
              <span className="font-bold text-gray-800">+91 {phone || "Not entered"}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Email Address</span>
              <span className="font-bold text-gray-800">{email || "Not entered"}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Cinema Room</span>
              <span className="font-bold text-[#C85A17]">{activeTheater.name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Selected Slot</span>
              <span className="font-bold text-gray-800 text-right leading-tight">
                {formatDateLabel(date)} &nbsp;•&nbsp; {slotTime}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Celebration Occasion</span>
              <span className="font-bold text-gray-800">{occasion || "None"}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
              <span className="text-gray-400">Adult Guests</span>
              <span className="font-bold text-gray-800">{guests} (Included in Slot Amount)</span>
            </div>
            {kids > 0 && (
              <div className="flex justify-between items-center border-b border-gray-100/60 pb-2.5">
                <span className="text-gray-400">Kids (3-10 yrs)</span>
                <span className="font-bold text-gray-800">{kids} ({kids} * ₹200) ₹{kidsPrice}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-5">
          {/* Payment Method Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                id: "card" as const,
                label: "Card",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                )
              },
              {
                id: "upi" as const,
                label: "UPI ID / QR",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                )
              },
              {
                id: "netbanking" as const,
                label: "Net Banking",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 22v-4h18v4H3zM12 2v4M4.5 6h15v12h-15V6zM3 2h18M6 6v12M18 6v12" />
                  </svg>
                )
              }
            ].map(method => {
              const isSelected = paymentMethod === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`py-3.5 px-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 select-none ${
                    isSelected
                      ? "border-[#C85A17] bg-[#C85A17]/5 text-[#C85A17] font-bold shadow-xs scale-102 ring-2 ring-[#C85A17]/10"
                      : "border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {method.icon}
                  <span className="text-[10px] font-black uppercase tracking-wider leading-none">{method.label}</span>
                </button>
              );
            })}
          </div>

          {/* 1. CARD METHOD PANEL */}
          {paymentMethod === "card" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-50/20 p-5 rounded-2xl border border-gray-150 shadow-2xs">
              {/* Interactive Credit Card Visualization Graphic */}
              <div className="w-full max-w-[310px] mx-auto aspect-[1.586/1] bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden border border-neutral-700/60 select-none">
                {/* Decorative radial gradients */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#C85A17]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black tracking-widest opacity-75 uppercase">Elite Screens</p>
                    <p className="text-[7px] tracking-widest font-extrabold uppercase opacity-40">Privé Card</p>
                  </div>
                  <div className="h-6 w-9 rounded-md bg-yellow-400/20 flex items-center justify-center border border-yellow-500/30">
                    {/* Metallic Card Chip SVG */}
                    <svg className="h-4.5 w-6 text-yellow-500/70" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="8" y1="5" x2="8" y2="19" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="16" y1="5" x2="16" y2="19" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                {/* Simulated Card Number */}
                <div className="my-2 select-all">
                  <p className="font-mono text-sm sm:text-base tracking-widest text-center py-1 bg-black/10 rounded-lg text-neutral-100">
                    {cardNumber || "•••• •••• •••• ••••"}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-0.5 truncate max-w-[160px]">
                    <p className="text-[6px] uppercase tracking-widest opacity-40 font-black">Card Holder</p>
                    <p className="font-sans text-[10.5px] font-extrabold tracking-wide uppercase truncate">
                      {cardHolder || name || "YOUR NAME"}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center shrink-0">
                    <div className="space-y-0.5 text-center">
                      <p className="text-[6px] uppercase tracking-widest opacity-40 font-black">Expiry</p>
                      <p className="font-mono text-[10.5px] font-extrabold">
                        {expiryDate || "MM/YY"}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      {(() => {
                        const type = getCardType(cardNumber);
                        if (type === "visa") return <span className="text-[#1A1F71] bg-white px-2 py-0.5 rounded text-[10px] font-black italic tracking-widest shadow-2xs select-none">VISA</span>;
                        if (type === "mastercard") return (
                          <div className="flex -space-x-1.5 items-center bg-white/10 p-1.5 rounded-md shadow-2xs">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B] opacity-90"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90"></div>
                          </div>
                        );
                        if (type === "rupay") return <span className="text-[#0A5FA4] bg-white px-2 py-0.5 rounded font-black italic text-[9px] shadow-2xs select-none"><span className="text-[#E27D18]">Ru</span>Pay</span>;
                        return (
                          <div className="h-5 w-7 bg-white/10 rounded flex items-center justify-center">
                            <span className="text-[7px] font-bold opacity-50">CARD</span>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Input fields */}
              <div className="space-y-3.5 flex-1">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Card Holder Name *</label>
                  <input
                    type="text"
                    required
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Name on card"
                    className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs font-bold text-[#111827] focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/10 focus:outline-hidden transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Card Number *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="4532 7182 9011 8844"
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-4 pr-12 text-xs font-bold text-[#111827] focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/10 focus:outline-hidden transition-all font-mono tracking-wider"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                      {(() => {
                        const type = getCardType(cardNumber);
                        if (type === "visa") return <span className="text-[#1A1F71] font-black italic text-[10px] tracking-wider">VISA</span>;
                        if (type === "mastercard") return (
                          <div className="flex -space-x-1 items-center">
                            <div className="w-3 h-3 rounded-full bg-[#EB001B] opacity-90"></div>
                            <div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-90"></div>
                          </div>
                        );
                        if (type === "rupay") return <span className="text-[#0A5FA4] font-black italic text-[9.5px]"><span className="text-[#E27D18]">Ru</span>Pay</span>;
                        return (
                          <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Expiry Date *</label>
                    <input
                      type="text"
                      required
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="MM/YY"
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs font-bold text-[#111827] focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/10 focus:outline-hidden transition-all font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">CVV *</label>
                    <input
                      type="text"
                      required
                      value={cvv}
                      onChange={handleCvvChange}
                      placeholder="***"
                      style={{ WebkitTextSecurity: 'disc' } as React.CSSProperties}
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs font-bold text-[#111827] focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/10 focus:outline-hidden transition-all font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* 2. UPI METHOD PANEL */}
        {paymentMethod === "upi" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { 
                  id: "gpay", 
                  renderLogo: () => (
                    <div className="flex items-center gap-1.5 justify-center">
                      <svg className="h-4.5 w-4.5 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="font-extrabold text-gray-800 text-[11.5px] tracking-tight shrink-0">Google Pay</span>
                    </div>
                  )
                },
                { 
                  id: "phonepe", 
                  renderLogo: () => (
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="h-4.5 w-4.5 shrink-0 bg-[#5f259f] rounded flex items-center justify-center text-white font-extrabold text-[9px]">
                        pe
                      </div>
                      <span className="font-black text-[#5f259f] text-[11.5px] shrink-0">PhonePe</span>
                    </div>
                  )
                },
                { 
                  id: "paytm", 
                  renderLogo: () => (
                    <div className="flex items-center justify-center">
                      <span className="font-black text-[#00baf2] text-[13px] italic tracking-tighter shrink-0">pay</span>
                      <span className="font-black text-[#002e6e] text-[13px] italic tracking-tighter shrink-0">tm</span>
                    </div>
                  )
                },
                { 
                  id: "upi_id", 
                  renderLogo: () => (
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="flex items-center gap-0.5 bg-gray-50 border border-gray-200 px-1 py-0.5 rounded text-[8px] font-black text-[#0f8a5f] shrink-0 leading-none select-none">
                        UPI
                      </div>
                      <span className="font-extrabold text-gray-700 text-xs shrink-0">UPI ID</span>
                    </div>
                  )
                }
              ].map((item) => {
                const isSelected = upiMethod === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUpiMethod(item.id as "gpay" | "phonepe" | "paytm" | "upi_id")}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer h-12 ${
                      isSelected
                        ? "border-[#C85A17] bg-orange-50/20 text-[#C85A17] font-bold shadow-xs scale-102"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600 font-medium"
                    }`}
                  >
                    {item.renderLogo()}
                  </button>
                );
              })}
            </div>

            {upiMethod === "upi_id" ? (
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Enter UPI ID *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={upiId}
                    onChange={(e) => {
                      setUpiId(e.target.value);
                      setUpiError("");
                      setUpiSuccess("");
                    }}
                    placeholder="username@upi"
                    className="flex-1 rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs font-bold text-[#111827] focus:border-[#C85A17] focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setUpiError("");
                      setUpiSuccess("");
                      if (upiId.trim() === "") {
                        setUpiError("Please enter a UPI ID first.");
                      } else if (upiId.includes("@")) {
                        setUpiSuccess("UPI ID verified successfully! ✅");
                      } else {
                        setUpiError("Please enter a valid UPI ID (e.g., name@upi).");
                      }
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 cursor-pointer transition-colors"
                  >
                    Verify
                  </button>
                </div>
                {upiError && <p className="text-[10px] text-red-500 font-bold mt-1">⚠️ {upiError}</p>}
                {upiSuccess && <p className="text-[10px] text-emerald-600 font-bold mt-1">{upiSuccess}</p>}
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-center gap-6">
                {/* QR Code Graphic Column */}
                <div className="flex flex-col items-center space-y-2 shrink-0">
                  <div className="relative bg-white p-3 rounded-2xl border border-gray-100 shadow-md">
                    {/* Tiny Center Brand Badge */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
                        {upiMethod === "gpay" && (
                          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        )}
                        {upiMethod === "phonepe" && (
                          <div className="h-5 w-5 bg-[#5f259f] rounded-full flex items-center justify-center text-white font-extrabold text-[8px]">pe</div>
                        )}
                        {upiMethod === "paytm" && (
                          <span className="font-extrabold text-[#002e6e] text-[9.5px] italic tracking-tighter">ptm</span>
                        )}
                      </div>
                    </div>
                    {/* Real Generated QR Code */}
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                        `upi://pay?pa=8905678768@okaxis&pn=Elite%20Screens&am=${Math.min(750, total)}&cu=INR&tn=Cinema%20Suite%20Booking`
                      )}`} 
                      alt="Payment QR Code"
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold border border-emerald-100 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Live UPI Scanner</span>
                  </span>
                </div>

                {/* Scan Instruction Column */}
                <div className="flex-1 text-left space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Scan to Pay with {upiMethod === "gpay" ? "Google Pay" : upiMethod === "phonepe" ? "PhonePe" : "Paytm"}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                      Open your UPI app, select the scanner tool, and scan this QR code. The payment amount of <span className="font-extrabold text-[#C85A17]">₹{Math.min(750, total)}</span> will be auto-filled.
                    </p>
                  </div>

                  {/* Simulator Button & Countdown timer */}
                  <div className="pt-1 flex flex-wrap gap-3 items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        const generatedId = "DS" + Math.floor(100000 + Math.random() * 900000);
                        setBookingId(generatedId);
                        setIsPaid(true);
                        goToStep(9);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3 rounded-lg text-[10px] transition-all cursor-pointer shadow-xs hover:scale-102 flex items-center gap-1"
                    >
                      ⚡ Simulate Scan Success
                    </button>
                    <div className="text-[10px] text-gray-400 font-bold">
                      Expires in: <span className="text-[#C85A17] font-mono">04:59</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. NET BANKING METHOD PANEL */}
        {paymentMethod === "netbanking" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { 
                  id: "sbi", 
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <svg className="h-6 w-6 mb-1" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="#00a1e4" />
                        <circle cx="50" cy="50" r="12" fill="#ffffff" />
                        <rect x="46" y="50" width="8" height="40" fill="#ffffff" />
                      </svg>
                      <span className="text-[9px] font-extrabold text-[#00a1e4]">SBI</span>
                    </div>
                  )
                },
                { 
                  id: "hdfc", 
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-[#004c8f] text-white px-2 py-0.5 rounded text-[9px] font-black tracking-tight flex items-center justify-center h-6 w-14 mb-1">
                        HDFC
                      </div>
                      <span className="text-[9px] font-extrabold text-[#004c8f]">HDFC BANK</span>
                    </div>
                  )
                },
                { 
                  id: "icici", 
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-[#bc5a00] text-white px-2 py-0.5 rounded text-[8px] font-black tracking-tight flex items-center justify-center h-6 w-14 mb-1">
                        ICICI
                      </div>
                      <span className="text-[9px] font-extrabold text-[#bc5a00]">ICICI BANK</span>
                    </div>
                  )
                },
                { 
                  id: "axis", 
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-[#800020] text-white px-2 py-0.5 rounded text-[8px] font-bold flex items-center justify-center h-6 w-14 mb-1">
                        AXIS
                      </div>
                      <span className="text-[9px] font-extrabold text-[#800020]">AXIS BANK</span>
                    </div>
                  )
                }
              ].map((bank) => {
                const isSelected = selectedBank === bank.id;
                return (
                  <button
                    key={bank.id}
                    type="button"
                    onClick={() => setSelectedBank(bank.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer h-16 ${
                      isSelected
                        ? "border-[#C85A17] bg-orange-50/20 text-[#C85A17] font-bold shadow-xs scale-102"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600 font-medium"
                    }`}
                  >
                    {bank.render()}
                  </button>
                );
              })}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Select Other Bank</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-sm text-[#111827] focus:border-[#C85A17] focus:outline-hidden"
              >
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
                <option value="pnb">Punjab National Bank</option>
                <option value="bob">Bank of Baroda</option>
                <option value="yes">Yes Bank</option>
                <option value="indusind">IndusInd Bank</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* SSL Secure checkout badges */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[10px] text-gray-400 font-bold py-3 border-t border-gray-100 mt-4 select-none">
        <div className="flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>256-Bit SSL Secure Connection</span>
        </div>
        <span className="hidden sm:inline text-gray-300">•</span>
        <div className="flex items-center gap-1">
          <span className="text-emerald-600 text-xs font-black">✓</span>
          <span>PCI-DSS Compliant Gateway</span>
        </div>
      </div>

      <button
          type="submit"
          className="w-full rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white py-3 px-6 text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
        >
          <ShieldCheck size={16} />
          <span>Confirm and Pay ₹{Math.min(750, total)}</span>
        </button>
      </form>
    </div>
  );
}

