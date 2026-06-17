"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Copy, Check, Ticket } from "lucide-react";

interface Coupon {
  code: string;
  description: string;
  type: string;
  terms: string;
}

const COUPONS: Coupon[] = [
  {
    code: "WELCOME400",
    description: "Get Rs.400 off on your first private theater booking.",
    type: "FLAT 400 OFF",
    terms: "Min. order value ₹1599. Applicable for new accounts.",
  },
  {
    code: "FREECAKE",
    description: "Enjoy a complimentary cake worth up to ₹550.",
    type: "FREE GIFT",
    terms: "Valid on all bookings. Limited time promotion.",
  },
  {
    code: "EXTRA25",
    description: "Get 25% off on decoration custom styling packages.",
    type: "25% OFF DECOR",
    terms: "Applicable on premium and luxury decoration upgrades.",
  },
];

export default function CouponDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("toggle-coupons", handleToggle);
    return () => {
      window.removeEventListener("toggle-coupons", handleToggle);
    };
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      {/* Overlay to click to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Drawer content */}
      <div className="relative h-full w-full max-w-[380px] border-l border-card-border bg-[#0e1017] p-6 shadow-2xl animate-slide-left flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between border-b border-card-border pb-4">
            <div>
              <h3 className="flex items-center gap-1.5 text-base font-bold text-white">
                <Sparkles size={16} className="text-primary animate-pulse" />
                Available Coupons
              </h3>
              <p className="text-xs text-gray-500">Copy code and apply at checkout</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Coupon List */}
          <div className="mt-6 space-y-4 overflow-y-auto max-h-[calc(100vh-160px)] pr-1">
            {COUPONS.map((coupon) => (
              <div
                key={coupon.code}
                className="group rounded-xl border border-card-border bg-card-bg/50 p-4 hover:border-primary/30 transition-all hover:-translate-y-0.5"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <span className="flex items-center gap-1 text-xs font-mono font-bold text-primary tracking-wider">
                      <Ticket size={12} />
                      {coupon.code}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-white leading-snug">
                      {coupon.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">
                    {coupon.type}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-card-border/55 pt-3">
                  <span className="text-[10px] text-gray-500 leading-normal">
                    {coupon.terms}
                  </span>
                  
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="flex items-center gap-1 rounded-lg bg-gray-800 hover:bg-primary hover:text-background px-3 py-1.5 text-xs font-semibold text-white transition-all active:scale-95 shrink-0"
                  >
                    {copiedCode === coupon.code ? (
                      <>
                        <Check size={12} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-card-border pt-4 text-[10px] text-gray-500 text-center">
          Coupons cannot be combined. Advance booking amount rules apply.
        </div>
      </div>
    </div>
  );
}
