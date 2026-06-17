"use client";

import { useState } from "react";

interface CouponsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CouponsDrawer({ isOpen, onClose }: CouponsDrawerProps) {
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-[380px] h-full bg-white p-6 shadow-2xl overflow-y-auto flex flex-col justify-between animate-slideInRight">
        <div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                🎁 Available Coupons
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Click a code to copy and save instantly</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition"
              aria-label="Close coupons panel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Coupon 1 */}
            <div className="border border-emerald-100 rounded-2xl p-4 bg-emerald-50/50 hover:bg-emerald-50 transition">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-mono text-base font-bold text-[#0f1115]">WELCOME400</p>
                  <p className="text-xs text-gray-600 mt-1">Get Rs.400 off on your first order.</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  FLAT 400 OFF
                </span>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-emerald-100/50 pt-3">
                <span className="text-[10px] text-gray-500">Min. order ₹1,599</span>
                <button
                  onClick={() => handleCopyCoupon("WELCOME400")}
                  className="text-xs font-bold bg-white border border-gray-300 text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition active:scale-95 cursor-pointer"
                >
                  {copiedCoupon === "WELCOME400" ? "Copied! ✓" : "Copy Code"}
                </button>
              </div>
            </div>

            {/* Coupon 2 */}
            <div className="border border-emerald-100 rounded-2xl p-4 bg-emerald-50/50 hover:bg-emerald-50 transition">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-mono text-base font-bold text-[#0f1115]">FREECAKE</p>
                  <p className="text-xs text-gray-600 mt-1">Enjoy a free celebration cake worth ₹550.</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  FREE GIFT
                </span>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-emerald-100/50 pt-3">
                <span className="text-[10px] text-gray-500">No minimum spending limit</span>
                <button
                  onClick={() => handleCopyCoupon("FREECAKE")}
                  className="text-xs font-bold bg-white border border-gray-300 text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition active:scale-95 cursor-pointer"
                >
                  {copiedCoupon === "FREECAKE" ? "Copied! ✓" : "Copy Code"}
                </button>
              </div>
            </div>

            {/* Coupon 3 */}
            <div className="border border-emerald-100 rounded-2xl p-4 bg-emerald-50/50 hover:bg-emerald-50 transition">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-mono text-base font-bold text-[#0f1115]">EXTRA25</p>
                  <p className="text-xs text-gray-600 mt-1">Get 25% off on premium decoration upgrades.</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  25% DECOR OFF
                </span>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-emerald-100/50 pt-3">
                <span className="text-[10px] text-gray-500">Applicable only to decors</span>
                <button
                  onClick={() => handleCopyCoupon("EXTRA25")}
                  className="text-xs font-bold bg-white border border-gray-300 text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition active:scale-95 cursor-pointer"
                >
                  {copiedCoupon === "EXTRA25" ? "Copied! ✓" : "Copy Code"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full mt-6 bg-[#0f1115] hover:bg-[#1e232d] text-white py-3 rounded-xl font-semibold text-sm transition cursor-pointer"
        >
          Close Panel
        </button>
      </div>
    </div>
  );
}
