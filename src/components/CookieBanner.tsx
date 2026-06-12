"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small timeout to slide up gracefully
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "essential");
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "cookie-consent",
      marketingCookies ? "all" : "essential"
    );
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#0f1115] border-t border-white/10 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.5)] animate-slideUp">
      <div className="max-w-4xl mx-auto">
        {!showCustomize ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <h5 className="font-bold text-base mb-1 tracking-wide flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#FFD700]"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 18v.01" />
                  <path d="M11 12v.01" />
                  <path d="M7 15v.01" />
                </svg>
                We value your privacy
              </h5>
              <p className="text-xs text-white/70 leading-relaxed">
                By clicking &ldquo;Accept All Cookies&rdquo;, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. You may click &ldquo;Customize&rdquo; to personalize the types of cookies you would like to allow.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={() => setShowCustomize(true)}
                type="button"
                className="px-4 py-2 text-xs font-semibold hover:text-[#FFD700] transition"
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                type="button"
                className="px-4 py-2 text-xs font-semibold rounded-full border border-white/20 hover:bg-white/5 transition"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                type="button"
                className="px-5 py-2 text-xs font-semibold rounded-full bg-[#FFD700] text-black hover:bg-[#E6C200] transition-all hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h5 className="font-bold text-base tracking-wide border-b border-white/5 pb-2">Cookie Preferences</h5>
            
            <div className="space-y-3">
              {/* Essential Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <p className="text-xs font-semibold text-white">Essential Cookies</p>
                  <p className="text-[10px] text-white/55">
                    Required for the booking flow, checkout processing, and session security. Always active.
                  </p>
                </div>
                <div className="shrink-0 flex items-center pt-1">
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                    Always On
                  </span>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4 border-t border-white/5 pt-3">
                <div className="flex-grow">
                  <p className="text-xs font-semibold text-white">Marketing Cookies</p>
                  <p className="text-[10px] text-white/55">
                    Helps us understand how users interact with booking pages and measure our campaign effectiveness.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingCookies}
                      onChange={(e) => setMarketingCookies(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-350 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FFD700]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2.5 pt-3 border-t border-white/5">
              <button
                onClick={() => setShowCustomize(false)}
                type="button"
                className="px-4 py-2 text-xs font-semibold hover:text-white/80 transition"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                type="button"
                className="px-5 py-2 text-xs font-semibold rounded-full bg-white text-black hover:bg-gray-100 transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
