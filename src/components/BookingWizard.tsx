"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const TIME_SLOTS = [
  "09:00 AM - 12:00 PM",
  "12:30 PM - 03:30 PM",
  "04:00 PM - 07:00 PM",
  "07:30 PM - 10:30 PM",
  "11:00 PM - 02:00 AM",
];

const THEATRES = [
  { id: 1, name: "Theatre 1 (Max 2 Pax)", price: 1399, capacity: "2" },
  { id: 2, name: "Theatre 2 (Max 6 Pax)", price: 1599, capacity: "6" },
  { id: 3, name: "Theatre 3 (Max 10 Pax)", price: 1799, capacity: "10" },
];

const OCCASIONS = [
  "Birthday Celebration",
  "Anniversary Surprise",
  "Romantic Date Night",
  "Marriage Proposal",
  "Bride to Be Party",
  "Farewell Session",
  "Baby Shower",
  "Custom / Congratulations",
];

const EXTRA_DECORS = [
  { id: "rose_heart", name: "Rose Heart Setup", price: 500 },
  { id: "led_decor", name: "LED Decoration Upgrade", price: 400 },
  { id: "candle_path", name: "Candle Pathway", price: 500 },
  { id: "fog_entry", name: "Fog Entry Effect", price: 800 },
];

const CAKES = [
  { id: "chocolate_05", name: "Chocolate Cake (0.5 Kg)", price: 550, size: "0.5 Kg", type: "chocolate" },
  { id: "chocolate_10", name: "Chocolate Cake (1.0 Kg)", price: 950, size: "1.0 Kg", type: "chocolate" },
  { id: "red_velvet_05", name: "Red Velvet Cake (0.5 Kg)", price: 550, size: "0.5 Kg", type: "red_velvet" },
  { id: "red_velvet_10", name: "Red Velvet Cake (1.0 Kg)", price: 950, size: "1.0 Kg", type: "red_velvet" },
  { id: "butterscotch_05", name: "Butterscotch Cake (0.5 Kg)", price: 550, size: "0.5 Kg", type: "butterscotch" },
  { id: "butterscotch_10", name: "Butterscotch Cake (1.0 Kg)", price: 950, size: "1.0 Kg", type: "butterscotch" },
];

const PHOTOSHOOTS = [
  { id: "standard", name: "Standard Photoshoot (15-20 Edited digital photos)", price: 999 },
  { id: "premium", name: "Premium Photoshoot + Video (Photos + 1-min Highlight Reel)", price: 1999 },
];

const THEATRE_BGS: { [key: number]: string } = {
  1: "https://dazzlingscreens.com/media/booking/theatres/theatre-1/theatre-1-1.png",
  2: "https://dazzlingscreens.com/media/booking/theatres/theatre-2/theatre-2-1.png",
  3: "https://dazzlingscreens.com/media/booking/theatres/theatre-3/theatre-3-1.png",
};

export default function BookingWizard() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Helper function to deterministically check slot availability
  const isSlotBooked = (slotStr: string, dateStr: string, tId: number) => {
    if (!dateStr) return false;
    const dateVal = dateStr.replace(/-/g, "");
    const dateNum = parseInt(dateVal, 10) || 0;
    const slotIndex = TIME_SLOTS.indexOf(slotStr);
    
    // Deterministic modulo logic: ~40% slots booked
    const val = (dateNum + slotIndex * 3 + tId * 7) % 5;
    return val === 0 || val === 2;
  };

  // Step state
  const [step, setStep] = useState(1); // 1: Loc/Date, 2: Room/Slot, 3: Occasion/Add-ons, 4: Checkout, 5: Success

  // Checking availability state
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [checkingProgress, setCheckingProgress] = useState("");

  // Form selections
  const [location, setLocation] = useState("Pitampura, Delhi");
  const [date, setDate] = useState("");
  const [theatreId, setTheatreId] = useState(2); // default to Theatre 2
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[1]);
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  
  // Add-ons
  const [hasStandardDecor, setHasStandardDecor] = useState(true); // ₹700
  const [selectedExtraDecors, setSelectedExtraDecors] = useState<string[]>([]);
  const [selectedCakeId, setSelectedCakeId] = useState<string>("none");
  const [selectedPhotoshootId, setSelectedPhotoshootId] = useState<string>("none");
  const [hasBouquet, setHasBouquet] = useState(false); // ₹399

  // Coupons
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [couponSuccessMsg, setCouponSuccessMsg] = useState<string | null>(null);

  // Contact Details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");

  // Payment mock state
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Random booking summary state generated on success
  const [bookingId, setBookingId] = useState("");

  // Pre-fill theatre from search param (checking room or theatre query keys)
  useEffect(() => {
    const roomParam = searchParams.get("room");
    const theatreParam = searchParams.get("theatre");
    const queryId = roomParam || theatreParam;
    if (queryId) {
      if (queryId.includes("theatre-1") || queryId === "1") {
        setTheatreId(1);
      } else if (queryId.includes("theatre-2") || queryId === "2") {
        setTheatreId(2);
      } else if (queryId.includes("theatre-3") || queryId === "3") {
        setTheatreId(3);
      }
    }
  }, [searchParams]);

  // Set default date to today
  useEffect(() => {
    const today = new Date();
    setDate(today.toISOString().split("T")[0]);
  }, []);

  // Auto-select the first available slot if the current selection is booked
  useEffect(() => {
    if (isSlotBooked(timeSlot, date, theatreId)) {
      const available = TIME_SLOTS.find((slot) => !isSlotBooked(slot, date, theatreId));
      if (available) {
        setTimeSlot(available);
      }
    }
  }, [date, theatreId]);

  // Format helper functions
  const getWeekDayName = (d: Date) => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays[d.getDay()];
  };

  const getMonthName = (d: Date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[d.getMonth()];
  };

  const formatDatePretty = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const mIndex = parseInt(month) - 1;
    return `${parseInt(day)} ${months[mIndex]}`;
  };

  const formatHeaderDate = (dateStr: string) => {
    if (!dateStr) return "Select Date";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return `${d.getDate()} ${getMonthName(d)} ${d.getFullYear()}`;
  };

  const getShortLocation = (locStr: string) => {
    if (locStr.includes("Pitampura")) return "Pitampura";
    if (locStr.includes("Noida")) return "Noida Sector 51";
    return locStr;
  };

  // Generate date pills (4 days starting from today)
  const datePills = [];
  const today = new Date();
  for (let i = 0; i < 4; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    
    const dayLabel = i === 0 ? "Today" : i === 1 ? "Tomorrow" : getWeekDayName(nextDate);
    const dateText = `${nextDate.getDate()} ${getMonthName(nextDate)}`;
    const dateValue = nextDate.toISOString().split("T")[0];
    
    datePills.push({
      label: dayLabel,
      text: dateText,
      value: dateValue,
    });
  }

  const handleViewAvailableSlots = () => {
    setIsCheckingAvailability(true);
    setCheckingProgress("Checking selected date and location...");
    
    const t1 = setTimeout(() => {
      setCheckingProgress("Connecting to reservation system...");
    }, 400);

    const t2 = setTimeout(() => {
      setCheckingProgress(`Checking slot availability for ${getShortLocation(location)} on ${formatDatePretty(date)}...`);
    }, 800);

    const t3 = setTimeout(() => {
      setCheckingProgress("Finalizing available slots list...");
    }, 1200);

    const t4 = setTimeout(() => {
      setIsCheckingAvailability(false);
      setStep(2);
    }, 1500);
  };

  const handleToggleExtraDecor = (id: string) => {
    setSelectedExtraDecors(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Pricing calculations
  const baseTheatre = THEATRES.find(t => t.id === theatreId) || THEATRES[1];
  const basePrice = baseTheatre.price;
  const decorPrice = hasStandardDecor ? 700 : 0;
  
  const extraDecorPrice = selectedExtraDecors.reduce((sum, id) => {
    const item = EXTRA_DECORS.find(d => d.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const cakeObj = CAKES.find(c => c.id === selectedCakeId);
  const cakePrice = cakeObj ? cakeObj.price : 0;

  const photoObj = PHOTOSHOOTS.find(p => p.id === selectedPhotoshootId);
  const photoPrice = photoObj ? photoObj.price : 0;

  const bouquetPrice = hasBouquet ? 399 : 0;

  const subtotal = basePrice + decorPrice + extraDecorPrice + cakePrice + photoPrice + bouquetPrice;

  // Coupon application logic
  let discount = 0;
  if (appliedCoupon === "WELCOME400") {
    if (subtotal >= 1599) {
      discount = 400;
    }
  } else if (appliedCoupon === "FREECAKE") {
    if (cakeObj && cakeObj.size === "0.5 Kg") {
      discount = 550;
    } else if (cakeObj && cakeObj.size === "1.0 Kg") {
      discount = 550;
    }
  } else if (appliedCoupon === "EXTRA25") {
    const totalDecor = decorPrice + extraDecorPrice;
    discount = Math.round(totalDecor * 0.25);
  }

  const netTotal = Math.max(0, subtotal - discount);
  const fixedAdvance = 750;
  const advanceToPay = Math.min(netTotal, fixedAdvance);
  const balanceAtVenue = Math.max(0, netTotal - advanceToPay);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(null);
    setCouponSuccessMsg(null);

    const upperCode = couponCode.toUpperCase().trim();
    
    if (upperCode === "WELCOME400") {
      if (subtotal < 1599) {
        setCouponError("Minimum subtotal to use WELCOME400 is ₹1,599.");
      } else {
        setAppliedCoupon("WELCOME400");
        setCouponSuccessMsg("WELCOME400 applied! Flat ₹400 Discount.");
      }
    } else if (upperCode === "FREECAKE") {
      if (selectedCakeId === "none") {
        setCouponError("Please add a cake to your booking to use the FREECAKE coupon.");
      } else {
        setAppliedCoupon("FREECAKE");
        setCouponSuccessMsg("FREECAKE applied! Flat ₹550 Cake Discount.");
      }
    } else if (upperCode === "EXTRA25") {
      if (decorPrice + extraDecorPrice === 0) {
        setCouponError("Please add a decoration option to use the EXTRA25 coupon.");
      } else {
        setAppliedCoupon("EXTRA25");
        setCouponSuccessMsg("EXTRA25 applied! 25% Off on decorations.");
      }
    } else {
      setCouponError("Invalid coupon code.");
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponSuccessMsg(null);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsProcessingPayment(true);
    // Simulate transaction
    setTimeout(() => {
      setIsProcessingPayment(false);
      const randomId = "DS" + Math.floor(100000 + Math.random() * 900000);
      setBookingId(randomId);
      setStep(5);
    }, 2000);
  };

  const bgImg = THEATRE_BGS[theatreId] || THEATRE_BGS[2];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#06080c] text-white font-sans pb-16 sm:pb-8">
      {/* 1. Full-screen Background Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 -z-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] -z-10" />

      {/* 2. CUSTOM HEADER */}
      <header className="w-full max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between z-10 pt-4">
        <Link href="/" className="cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="Dazzling Screens Logo"
            className="h-[55px] w-[55px] sm:h-[65px] sm:w-[65px] bg-[#FFD700] rounded-full object-contain p-1 shadow-lg hover:scale-105 transition-all duration-200"
          />
        </Link>

        {/* Selected Indicators in Header */}
        <div className="flex items-center gap-2.5">
          {/* Date Capsule */}
          <div className="bg-[#181515]/70 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>{formatHeaderDate(date)}</span>
          </div>

          {/* Location Capsule */}
          <div className="bg-[#181515]/70 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>{getShortLocation(location)}</span>
          </div>
        </div>
      </header>

      {/* 3. CENTRAL WIZARD CARD CONTROLLER */}
      <main className="flex-grow flex items-center justify-center p-4 py-8 z-10 w-full max-w-7xl mx-auto">
        {step === 1 ? (
          /* STEP 1: SELECT LOCATION & DATE (Centered, No Sidebar) */
          <div className="relative w-full max-w-[500px] bg-black/70 border border-white/10 rounded-3xl p-6 sm:p-7 md:p-8 shadow-2xl backdrop-blur-md flex flex-col animate-fadeIn">
            {/* Real check availability loading overlay */}
            {isCheckingAvailability && (
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 z-20 animate-fadeIn">
                <div className="relative w-16 h-16 mb-4">
                  {/* Outer spinning ring */}
                  <div className="absolute inset-0 border-4 border-white/5 border-t-[#d9531e] rounded-full animate-spin"></div>
                  {/* Inner pulsing icon */}
                  <div className="absolute inset-2 bg-[#d9531e]/20 rounded-full animate-pulse flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9531e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2 text-center">Checking Availability...</h3>
                <p className="text-xs text-gray-400 font-medium tracking-wide text-center animate-pulse min-h-[16px]">
                  {checkingProgress}
                </p>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center text-white mb-1.5 tracking-tight">
              Select Location & Date
            </h2>
            <p className="text-xs sm:text-sm text-gray-300/80 text-center mb-6">
              Choose where and when you want to celebrate
            </p>

            {/* Location selector pills */}
            <div className="flex items-center justify-center gap-3 mb-6 bg-white/5 p-1 rounded-full border border-white/5">
              <button
                type="button"
                onClick={() => setLocation("Pitampura, Delhi")}
                className={`flex-1 py-2 rounded-full flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                  location.includes("Pitampura")
                    ? "bg-white text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={location.includes("Pitampura") ? "#d9531e" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Pitampura</span>
              </button>
              
              <button
                type="button"
                onClick={() => setLocation("Noida Sector 51")}
                className={`flex-1 py-2 rounded-full flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                  location.includes("Noida")
                    ? "bg-white text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={location.includes("Noida") ? "#d9531e" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Noida Sector 51</span>
              </button>
            </div>

            {/* Date Selection Pills */}
            <div className="grid grid-cols-5 gap-2.5 mb-6">
              {datePills.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setDate(p.value)}
                  className={`h-[72px] border rounded-2xl flex flex-col items-center justify-center text-center p-2 transition-all ${
                    date === p.value
                      ? "border-white bg-white text-black font-bold shadow-lg"
                      : "border-white/10 bg-black/40 text-white hover:bg-white/5 hover:border-white/20"
                  }`}
                >
                  <span className={`text-[8.5px] font-bold uppercase tracking-wider mb-1 ${
                    date === p.value ? "text-black/50" : "text-white/40"
                  }`}>
                    {p.label}
                  </span>
                  <span className={`text-xs sm:text-sm font-extrabold leading-none ${
                    date === p.value ? "text-black" : "text-white/95"
                  }`}>
                    {p.text}
                  </span>
                </button>
              ))}

              {/* 5th Pill: Choose More Date */}
              <div className="relative h-[72px]">
                <button
                  type="button"
                  className={`w-full h-full border rounded-2xl flex flex-col items-center justify-center text-center p-2 transition-all ${
                    !datePills.some(p => p.value === date) && date
                      ? "border-white bg-white text-black font-bold shadow-lg"
                      : "border-white/10 bg-black/40 text-white hover:bg-white/5 hover:border-white/20"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={(!datePills.some(p => p.value === date) && date) ? "#d9531e" : "currentColor"}
                    strokeWidth="2.5"
                    className="mb-1"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className={`text-[8px] font-bold uppercase leading-tight ${
                    (!datePills.some(p => p.value === date) && date) ? "text-black" : "text-white/70"
                  }`}>
                    {!datePills.some(p => p.value === date) && date 
                      ? formatDatePretty(date) 
                      : "Choose More Date"}
                  </span>
                </button>
                <input
                  type="date"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={today.toISOString().split("T")[0]}
                />
              </div>
            </div>

            {/* Bottom Row: Pulsing dot + VIEW AVAILABLE SLOTS button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              {/* Pulse status indicator */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] text-gray-300 font-semibold tracking-wide font-sans">
                  51 people are checking availability right now
                </span>
              </div>

              {/* View slots CTA */}
              <button
                type="button"
                onClick={handleViewAvailableSlots}
                className="w-full sm:w-auto bg-[#d9531e] hover:bg-[#c44717] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                VIEW AVAILABLE SLOTS
              </button>
            </div>

            {/* Dot Pagination indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-8">
              <span className="w-5 h-1.5 rounded-full bg-[#d9531e]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>
        ) : step < 5 ? (
          /* STEP 2-4: DYNAMIC GRID LAYOUT (Main Panel + Summary Sidebar) */
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Columns - Step Card */}
            <div className="lg:col-span-2">
              {/* STEP 2: SELECT THEATRE & TIME SLOT */}
              {step === 2 && (
                <div className="bg-black/70 border border-white/10 p-5 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6 text-white animate-fadeIn">
                  <h3 className="font-serif font-bold text-xl text-white border-b border-white/10 pb-3">
                    2. Choose Theatre & Time Slot
                  </h3>

                  {/* Theatre selection */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Choose Private Theatre
                    </label>
                    <div className="space-y-3">
                      {THEATRES.map((room) => (
                        <div
                          key={room.id}
                          onClick={() => setTheatreId(room.id)}
                          className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition ${
                            theatreId === room.id
                              ? "border-[#FFD700] bg-[#FFD700]/10 text-white shadow-sm"
                              : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          <div>
                            <strong className="text-sm sm:text-base text-white">{room.name}</strong>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {room.id === 1 ? "Ideal for couples" : room.id === 2 ? "Perfect for groups up to 6" : "Perfect for groups up to 10"}
                            </p>
                          </div>
                          <div className="text-right">
                            <strong className="text-sm sm:text-base text-white block">₹{room.price}</strong>
                            <span className="text-[10px] text-gray-400">base price</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time slot picker */}
                  <div className="space-y-4 pt-3 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                        Select Available Slot
                      </label>
                      <span className="text-[10px] text-gray-400 font-semibold bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        Selected Date: {formatDatePretty(date)}
                      </span>
                    </div>

                    {/* Waitlist Warning Banner if some slots are booked */}
                    <div className="bg-amber-500/10 border border-amber-500/15 rounded-xl p-3 text-[11px] text-amber-400/90 leading-relaxed flex items-start gap-2.5">
                      <span className="mt-0.5 text-xs">⚠️</span>
                      <div>
                        <strong>Some slots are already booked.</strong> If your preferred timing is unavailable, you can join our <Link href="/waitlist" target="_blank" className="underline font-extrabold hover:text-amber-300 transition-colors">Waitlist</Link> or contact us directly on WhatsApp to check for cancellations.
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {TIME_SLOTS.map((slot, idx) => {
                        const booked = isSlotBooked(slot, date, theatreId);
                        const isSelected = timeSlot === slot;
                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={booked}
                            onClick={() => !booked && setTimeSlot(slot)}
                            className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                              booked
                                ? "border-white/5 bg-white/5 opacity-40 cursor-not-allowed text-gray-400"
                                : isSelected
                                ? "border-white bg-white text-black font-bold shadow-lg"
                                : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                            }`}
                          >
                            <span className={booked ? "line-through text-gray-500" : ""}>{slot}</span>
                            {booked ? (
                              <span className="text-[9px] bg-red-500/15 text-red-400 px-2.5 py-0.5 rounded-full border border-red-500/20 font-extrabold uppercase tracking-wider">
                                Booked
                              </span>
                            ) : (
                              <span className={`text-[9px] px-2.5 py-0.5 rounded-full border font-extrabold uppercase tracking-wider ${
                                isSelected 
                                  ? "bg-[#d9531e]/15 text-[#d9531e] border-[#d9531e]/20" 
                                  : "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
                              }`}>
                                {isSelected ? "Selected" : "Available"}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-white/10 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-white/20 text-white hover:bg-white/10 font-bold px-6 py-2.5 rounded-full text-xs transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#d9531e] hover:bg-[#c44717] text-white font-bold px-8 py-3 rounded-full text-sm transition shadow-lg"
                    >
                      Continue to Add-ons
                    </button>
                  </div>

                  {/* Dot Pagination indicators */}
                  <div className="flex items-center justify-center gap-1.5 mt-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-5 h-1.5 rounded-full bg-[#d9531e]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
              )}

              {/* STEP 3: CUSTOM OCCASION & ADDONS */}
              {step === 3 && (
                <div className="bg-black/70 border border-white/10 p-5 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6 text-white animate-fadeIn">
                  <h3 className="font-serif font-bold text-xl text-white border-b border-white/10 pb-3">
                    3. Customize Celebration Add-ons
                  </h3>

                  {/* Occasion */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Celebration Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      style={{ backgroundColor: "#181515" }}
                      className="w-full border border-white/10 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] text-white"
                    >
                      {OCCASIONS.map((occ, idx) => (
                        <option key={idx} value={occ} className="bg-[#181515] text-white">
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Standard Decor Toggle */}
                  <div className="border border-white/10 rounded-xl p-4 bg-white/5 flex items-center justify-between gap-4">
                    <div>
                      <strong className="text-sm text-white block">Include Standard Occasion Decoration</strong>
                      <span className="text-xs text-gray-400">Balloons, &ldquo;Happy Birthday/Anniversary&rdquo; banner, LED backdrop lighting (+₹700)</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasStandardDecor}
                        onChange={(e) => setHasStandardDecor(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
                    </label>
                  </div>

                  {/* Extra Decors upgrades */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Upgrade Premium Decoration Decors (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {EXTRA_DECORS.map((dec) => (
                        <div
                          key={dec.id}
                          onClick={() => handleToggleExtraDecor(dec.id)}
                          className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition ${
                            selectedExtraDecors.includes(dec.id)
                              ? "border-white bg-white/10"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedExtraDecors.includes(dec.id)}
                              readOnly
                              className="accent-black h-4 w-4 cursor-pointer"
                            />
                            <span className="text-xs sm:text-sm font-semibold text-white/95">{dec.name}</span>
                          </div>
                          <strong className="text-xs sm:text-sm text-white">+₹{dec.price}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cakes selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Add Celebration Cake (Optional)
                    </label>
                    <select
                      value={selectedCakeId}
                      onChange={(e) => setSelectedCakeId(e.target.value)}
                      style={{ backgroundColor: "#181515" }}
                      className="w-full border border-white/10 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] text-white"
                    >
                      <option value="none" className="bg-[#181515] text-white">No Cake</option>
                      {CAKES.map((c) => (
                        <option key={c.id} value={c.id} className="bg-[#181515] text-white">
                          {c.name} - (+₹{c.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Photoshoot selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Add Professional Photography (Optional)
                    </label>
                    <select
                      value={selectedPhotoshootId}
                      onChange={(e) => setSelectedPhotoshootId(e.target.value)}
                      style={{ backgroundColor: "#181515" }}
                      className="w-full border border-white/10 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] text-white"
                    >
                      <option value="none" className="bg-[#181515] text-white">No Photoshoot</option>
                      {PHOTOSHOOTS.map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#181515] text-white">
                          {p.name} - (+₹{p.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Flower Bouquet toggle */}
                  <div className="border border-white/10 rounded-xl p-4 bg-white/5 flex items-center justify-between gap-4">
                    <div>
                      <strong className="text-sm text-white block">Include Fresh Rose Bouquet</strong>
                      <span className="text-xs text-gray-405">Premium bunch of red/pink roses (+₹399)</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasBouquet}
                        onChange={(e) => setHasBouquet(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
                    </label>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-white/10 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-white/20 text-white hover:bg-white/10 font-bold px-6 py-2.5 rounded-full text-xs transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="bg-[#d9531e] hover:bg-[#c44717] text-white font-bold px-8 py-3 rounded-full text-sm transition shadow-lg"
                    >
                      Continue to Confirm
                    </button>
                  </div>

                  {/* Dot Pagination indicators */}
                  <div className="flex items-center justify-center gap-1.5 mt-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-5 h-1.5 rounded-full bg-[#d9531e]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
              )}

              {/* STEP 4: GUEST INFO & PAYMENT PORTAL */}
              {step === 4 && (
                <div className="bg-black/70 border border-white/10 p-5 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6 text-white animate-fadeIn">
                  <h3 className="font-serif font-bold text-xl text-white border-b border-white/10 pb-3">
                    4. Customer Details & Confirmation
                  </h3>

                  {isProcessingPayment ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="relative w-16 h-16 border-4 border-white/10 border-t-[#FFD700] rounded-full animate-spin mx-auto" />
                      <h4 className="font-bold text-base text-white">Processing Your Advance Payment...</h4>
                      <p className="text-xs text-gray-400">Do not refresh this page or click back.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                      {/* Name Input */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter guest name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-white/10 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-white/5 text-white"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                          WhatsApp Mobile Number
                        </label>
                        <div className="flex rounded-lg border border-white/10 overflow-hidden bg-white/5">
                          <span className="bg-white/10 border-r border-white/10 px-3 flex items-center justify-center text-sm font-semibold text-gray-400">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="Enter 10-digit mobile"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                            className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-transparent text-white"
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border border-white/10 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-white/5 text-white"
                        />
                      </div>

                      {/* Special Requests */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Any particular video link, LED letter requests (e.g. 'HAPPY BDAY NAME'), food requirements..."
                          value={requests}
                          onChange={(e) => setRequests(e.target.value)}
                          className="w-full border border-white/10 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] resize-none bg-white/5 text-white"
                        />
                      </div>

                      {/* Payment selection */}
                      <div className="space-y-2.5 pt-3">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                          Choose Booking Payment Mode
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {["upi", "card", "netbank"].map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setPaymentMethod(method)}
                              className={`p-3 rounded-lg border text-xs font-bold transition uppercase tracking-wider ${
                                paymentMethod === method
                                  ? "border-[#FFD700] bg-[#FFD700]/10 text-white"
                                  : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                              }`}
                            >
                              {method === "upi" ? "UPI / QR Code" : method === "card" ? "Debit/Credit" : "Net Banking"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Form CTAs */}
                      <div className="pt-6 border-t border-white/10 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="border border-white/20 text-white hover:bg-white/10 font-bold px-6 py-2.5 rounded-full text-xs transition"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-full text-sm transition shadow-lg hover:shadow-emerald-600/30"
                        >
                          Pay ₹{advanceToPay} Advance
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Dot Pagination indicators */}
                  <div className="flex items-center justify-center gap-1.5 mt-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-5 h-1.5 rounded-full bg-[#d9531e]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Booking Summary Card (Dark-themed, sticky layout) */}
            <div className="space-y-6">
              <div className="bg-black/70 border border-white/10 p-5 sm:p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-4 text-white">
                <h3 className="font-serif font-bold text-lg text-white border-b border-white/10 pb-2">
                  Booking Overview
                </h3>

                <div className="text-xs space-y-2.5 border-b border-white/10 pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-450">Location:</span>
                    <span className="font-semibold text-white">{getShortLocation(location)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-450">Date:</span>
                    <span className="font-semibold text-white">{date ? formatDatePretty(date) : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-450">Space Size:</span>
                    <span className="font-semibold text-white">{baseTheatre.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-450">Time Slot:</span>
                    <span className="font-semibold text-white">{timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-450">Occasion:</span>
                    <span className="font-semibold text-white">{occasion}</span>
                  </div>
                </div>

                {/* Calculations summary */}
                <div className="text-xs space-y-2 border-b border-white/10 pb-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Base Theatre Cost:</span>
                    <span>₹{basePrice}</span>
                  </div>
                  {decorPrice > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>Standard Decoration:</span>
                      <span>₹{decorPrice}</span>
                    </div>
                  )}
                  {extraDecorPrice > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>Upgrade Decorations:</span>
                      <span>₹{extraDecorPrice}</span>
                    </div>
                  )}
                  {cakePrice > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>Celebration Cake:</span>
                      <span>₹{cakePrice}</span>
                    </div>
                  )}
                  {photoPrice > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>Photography:</span>
                      <span>₹{photoPrice}</span>
                    </div>
                  )}
                  {bouquetPrice > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>Rose Bouquet:</span>
                      <span>₹{bouquetPrice}</span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Discounts applied:</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-white pt-1 text-sm border-t border-white/5 mt-1.5">
                    <span>Grand Total:</span>
                    <span>₹{netTotal}</span>
                  </div>
                </div>

                {/* Bottom summary values */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex justify-between font-bold text-emerald-400">
                    <span>Pay Online Advance:</span>
                    <span>₹{advanceToPay}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-300">
                    <span>Pay at Venue:</span>
                    <span>₹{balanceAtVenue}</span>
                  </div>
                </div>

                {/* Coupon Code Form */}
                <div className="pt-4 border-t border-white/10 mt-1">
                  {appliedCoupon ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/35 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-400">Coupon Applied</span>
                        <strong className="block text-xs text-white font-mono">{appliedCoupon}</strong>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-xs text-red-400 hover:text-red-300 font-bold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="ENTER COUPON"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#FFD700] uppercase font-mono bg-white/5 text-white"
                      />
                      <button
                        type="submit"
                        className="bg-white hover:bg-gray-100 text-black text-xs font-bold px-4 py-2 rounded-lg transition"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponError && <p className="text-[10px] text-red-400 font-medium mt-1.5">{couponError}</p>}
                  {couponSuccessMsg && <p className="text-[10px] text-emerald-400 font-medium mt-1.5">{couponSuccessMsg}</p>}
                </div>
              </div>

              {/* Quick Notice Panel */}
              <div className="bg-[#181515]/75 border border-white/10 p-4 rounded-2xl text-[11px] text-gray-300 leading-relaxed space-y-1 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-1 text-xs mb-1 text-white">ℹ️ Booking Notes:</h4>
                <p>• Only ₹750 advance is paid now to block the slot.</p>
                <p>• Balance amount paid at venue after your session.</p>
                <p>• Free rescheduling is available up to 72 hours before slot timings.</p>
              </div>
            </div>
          </div>
        ) : (
          /* STEP 5: SUCCESS RECEIPT (Centered, No Sidebar) */
          <div className="w-full max-w-[500px] bg-black/70 border-2 border-emerald-500/50 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6 text-white animate-fadeIn">
            <div className="text-center py-4 border-b border-white/10">
              <span className="text-5xl">✅</span>
              <h3 className="font-serif font-bold text-2xl text-white mt-2">Booking Confirmed!</h3>
              <p className="text-xs text-gray-400 mt-1">Your reservation was successfully blocked.</p>
              <div className="mt-4 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-xl inline-block font-mono text-sm font-bold">
                Reservation ID: {bookingId}
              </div>
            </div>

            {/* Details Table */}
            <div>
              <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Booking Summary</h4>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm">
                <span className="text-gray-400">Location:</span>
                <strong className="text-white text-right">{getShortLocation(location)}</strong>
                
                <span className="text-gray-400">Date:</span>
                <strong className="text-white text-right">{date ? formatDatePretty(date) : ""}</strong>

                <span className="text-gray-400">Time Slot:</span>
                <strong className="text-white text-right">{timeSlot}</strong>

                <span className="text-gray-400">Private Space:</span>
                <strong className="text-white text-right">{baseTheatre.name}</strong>

                <span className="text-gray-400">Occasion:</span>
                <strong className="text-white text-right">{occasion}</strong>

                <span className="text-gray-400">Guests Name:</span>
                <strong className="text-white text-right">{name}</strong>

                <span className="text-gray-400">Mobile Number:</span>
                <strong className="text-white text-right">+91 {phone}</strong>
              </div>
            </div>

            {/* Financial Calculations */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Financial Summary</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Base Theatre Price:</span>
                  <span>₹{basePrice}</span>
                </div>
                {decorPrice > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>Standard Decoration:</span>
                    <span>₹{decorPrice}</span>
                  </div>
                )}
                {extraDecorPrice > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>Decor Upgrades:</span>
                    <span>₹{extraDecorPrice}</span>
                  </div>
                )}
                {cakePrice > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>Celebration Cake:</span>
                    <span>₹{cakePrice}</span>
                  </div>
                )}
                {photoPrice > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>Photography Services:</span>
                    <span>₹{photoPrice}</span>
                  </div>
                )}
                {bouquetPrice > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>Fresh Rose Bouquet:</span>
                    <span>₹{bouquetPrice}</span>
                  </div>
                )}
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-450 font-bold">
                    <span>Coupon Discount ({appliedCoupon}):</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-white border-t border-white/10 pt-2 text-sm sm:text-base">
                  <span>Grand Total:</span>
                  <span>₹{netTotal}</span>
                </div>
                <div className="flex justify-between font-bold text-emerald-400">
                  <span>Advance Paid Online:</span>
                  <span>₹{advanceToPay}</span>
                </div>
                <div className="flex justify-between font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/15 p-2.5 rounded-lg">
                  <span>Remaining Balance (Pay at venue):</span>
                  <span>₹{balanceAtVenue}</span>
                </div>
              </div>
            </div>

            {/* Check-in Guidelines */}
            <div className="border-t border-white/10 pt-4 space-y-3">
              <h4 className="font-bold text-xs uppercase text-amber-500 tracking-wider flex items-center gap-1">
                ⚠️ Important Check-in Rules
              </h4>
              <ul className="list-disc pl-5 text-xs text-gray-350 space-y-2">
                <li>
                  <strong>Aadhaar Card Mandatory:</strong> In the case of couples, both individuals must present their Aadhaar ID cards (physical or digital) at the reception desk.
                </li>
                <li>
                  <strong>No Outside Food:</strong> Outside food/drinks are strictly prohibited. In-house food service is active.
                </li>
                <li>
                  <strong>No Poppers/Sprays:</strong> Snow sprays, party poppers, and cold fire are not allowed inside due to safety regulations.
                </li>
                <li>
                  <strong>Cancellation Window:</strong> Free cancellations are eligible up to 72 hours prior to the slot. Under 72 hours is non-refundable.
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push("/")}
                className="w-full bg-white hover:bg-gray-100 text-black font-extrabold py-3 rounded-xl text-sm transition"
              >
                Return to Homepage
              </button>
              <a
                href={`https://wa.me/919289289696?text=Hi Dazzling Screens, my booking id is ${bookingId}. Details: ${location}, ${date}, ${timeSlot}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"
              >
                💬 Share on WhatsApp
              </a>
            </div>
          </div>
        )}
      </main>

      {/* 4. FOOTER NOTICE */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end z-10 py-4 border-t border-white/5">
        <span className="text-[10px] sm:text-xs text-gray-500 font-sans tracking-wide">
          &copy; {new Date().getFullYear()} Dazzling Screens. All rights reserved.
        </span>
      </footer>

      {/* 5. BOTTOM-LEFT EXIT BUTTON */}
      <div className="fixed bottom-6 left-4 z-40 sm:bottom-8 sm:left-6">
        <button
          onClick={() => router.push("/")}
          type="button"
          aria-label="Exit booking"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
