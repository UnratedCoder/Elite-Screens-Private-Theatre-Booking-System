"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TIME_SLOTS = [
  "09:00 AM - 12:00 PM",
  "12:30 PM - 03:30 PM",
  "04:00 PM - 07:00 PM",
  "07:30 PM - 10:30 PM",
  "11:00 PM - 02:00 AM",
];

const THEATRES = [
  { id: 1, name: "Theatre 1 (Max 2 Pax)", price: 1399 },
  { id: 2, name: "Theatre 2 (Max 6 Pax)", price: 1599 },
  { id: 3, name: "Theatre 3 (Max 10 Pax)", price: 1799 },
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

export default function BookingWizard() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Step state
  const [step, setStep] = useState(1); // 1: Loc/Date, 2: Room/Slot, 3: Occasion/Add-ons, 4: Checkout, 5: Success

  // Form selections
  const [location, setLocation] = useState("Pitampura, Delhi");
  const [date, setDate] = useState("");
  const [theatreId, setTheatreId] = useState(1);
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

  // Pre-fill theatre from search param
  useEffect(() => {
    const queryId = searchParams.get("theatre");
    if (queryId) {
      const parsed = parseInt(queryId);
      if (parsed >= 1 && parsed <= 3) {
        setTheatreId(parsed);
      }
    }
  }, [searchParams]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  const handleToggleExtraDecor = (id: string) => {
    setSelectedExtraDecors(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Pricing calculations
  const baseTheatre = THEATRES.find(t => t.id === theatreId) || THEATRES[0];
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
      discount = 550; // free 0.5kg cake
    } else if (cakeObj && cakeObj.size === "1.0 Kg") {
      discount = 550; // discount of 550 on 1.0kg cake
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
      // Generate mock reservation ID
      const randomId = "DS" + Math.floor(100000 + Math.random() * 900000);
      setBookingId(randomId);
      setStep(5);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Wizard Steps indicator */}
      <div className="flex items-center justify-center mb-8 gap-1.5 sm:gap-3 text-xs sm:text-sm font-semibold">
        <span className={`px-3 py-1.5 rounded-full ${step >= 1 ? "bg-[#FFD700] text-black" : "bg-gray-100 text-gray-400"}`}>
          1. Details
        </span>
        <span className="text-gray-300">→</span>
        <span className={`px-3 py-1.5 rounded-full ${step >= 2 ? "bg-[#FFD700] text-black" : "bg-gray-100 text-gray-400"}`}>
          2. Slot
        </span>
        <span className="text-gray-300">→</span>
        <span className={`px-3 py-1.5 rounded-full ${step >= 3 ? "bg-[#FFD700] text-black" : "bg-gray-100 text-gray-400"}`}>
          3. Custom
        </span>
        <span className="text-gray-300">→</span>
        <span className={`px-3 py-1.5 rounded-full ${step >= 4 ? "bg-[#FFD700] text-black" : "bg-gray-100 text-gray-400"}`}>
          4. Confirm
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Columns - Inputs based on step */}
        <div className="lg:col-span-2 space-y-6">
          {/* STEP 1: LOCATION & DATE */}
          {step === 1 && (
            <div className="bg-white border border-gray-250 p-5 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                1. Select Location & Date
              </h3>
              
              {/* Location selection */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Select Location
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setLocation("Pitampura, Delhi")}
                    className={`p-4 rounded-xl border text-sm font-bold transition ${
                      location === "Pitampura, Delhi"
                        ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950 shadow-sm"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    📍 Pitampura (Delhi)
                    <span className="block text-[10px] text-gray-500 font-normal mt-1">Saraswati Vihar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLocation("Noida Sector 51")}
                    className={`p-4 rounded-xl border text-sm font-bold transition ${
                      location === "Noida Sector 51"
                        ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950 shadow-sm"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    📍 Noida (UP)
                    <span className="block text-[10px] text-gray-500 font-normal mt-1">Sector 51 Hub</span>
                  </button>
                </div>
              </div>

              {/* Date selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Select Celebration Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-white text-gray-800"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#0f1115] hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-full text-sm transition"
                >
                  Continue to Space Selection
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: THEATRE & TIME SLOT */}
          {step === 2 && (
            <div className="bg-white border border-gray-250 p-5 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                2. Select Theatre & Time Slot
              </h3>

              {/* Theatre grid */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Choose Theatre
                </label>
                <div className="space-y-3">
                  {THEATRES.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setTheatreId(room.id)}
                      className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition ${
                        theatreId === room.id
                          ? "border-[#FFD700] bg-[#FFD700]/5 text-yellow-950"
                          : "border-gray-200 bg-white text-gray-850 hover:bg-gray-50"
                      }`}
                    >
                      <div>
                        <strong className="text-sm sm:text-base text-gray-900">{room.name}</strong>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {room.id === 1 ? "Ideal for couples" : room.id === 2 ? "Perfect for groups up to 6" : "Perfect for groups up to 10"}
                        </p>
                      </div>
                      <div className="text-right">
                        <strong className="text-sm sm:text-base text-gray-900 block">₹{room.price}</strong>
                        <span className="text-[10px] text-gray-400">base price</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time slot picker */}
              <div className="space-y-3 pt-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Select Slot Timings
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition ${
                        timeSlot === slot
                          ? "border-black bg-black text-white"
                          : "border-gray-200 bg-white text-gray-750 hover:bg-gray-55"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-6 py-2.5 rounded-full text-xs transition"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#0f1115] hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-full text-sm transition"
                >
                  Continue to Add-ons
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: OCCASION & CUSTOM ADDONS */}
          {step === 3 && (
            <div className="bg-white border border-gray-250 p-5 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                3. Customize Celebration Add-ons
              </h3>

              {/* Occasion */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Celebration Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-white text-gray-800"
                >
                  {OCCASIONS.map((occ, idx) => (
                    <option key={idx} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Standard Decor toggle */}
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-center justify-between gap-4">
                <div>
                  <strong className="text-sm text-gray-900 block">Include Standard Occasion Decoration</strong>
                  <span className="text-xs text-gray-500">Balloons, &ldquo;Happy Birthday/Anniversary&rdquo; banner, LED backdrop lighting (+₹700)</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasStandardDecor}
                    onChange={(e) => setHasStandardDecor(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
                </label>
              </div>

              {/* Extra Decors upgrades */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Upgrade Extra Decoration Decors (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXTRA_DECORS.map((dec) => (
                    <div
                      key={dec.id}
                      onClick={() => handleToggleExtraDecor(dec.id)}
                      className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition ${
                        selectedExtraDecors.includes(dec.id)
                          ? "border-black bg-black/5"
                          : "border-gray-200 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedExtraDecors.includes(dec.id)}
                          readOnly
                          className="accent-black h-4 w-4"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-gray-800">{dec.name}</span>
                      </div>
                      <strong className="text-xs sm:text-sm text-gray-900">+₹{dec.price}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cakes selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Add Celebration Cake (Optional)
                </label>
                <select
                  value={selectedCakeId}
                  onChange={(e) => setSelectedCakeId(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-white text-gray-800"
                >
                  <option value="none">No Cake</option>
                  {CAKES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} - (+₹{c.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Photoshoot selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Add Professional Photography (Optional)
                </label>
                <select
                  value={selectedPhotoshootId}
                  onChange={(e) => setSelectedPhotoshootId(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] bg-white text-gray-800"
                >
                  <option value="none">No Photoshoot</option>
                  {PHOTOSHOOTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - (+₹{p.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Flower Bouquet toggle */}
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-center justify-between gap-4">
                <div>
                  <strong className="text-sm text-gray-900 block">Include Fresh Rose Bouquet</strong>
                  <span className="text-xs text-gray-500">Premium bunch of red/pink roses (+₹399)</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasBouquet}
                    onChange={(e) => setHasBouquet(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
                </label>
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-55 font-bold px-6 py-2.5 rounded-full text-xs transition"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-[#0f1115] hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-full text-sm transition"
                >
                  Continue to Confirm
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: GUEST INFO & PAYMENT PORTAL */}
          {step === 4 && (
            <div className="bg-white border border-gray-250 p-5 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                4. Customer Details & Confirmation
              </h3>

              {isProcessingPayment ? (
                <div className="text-center py-12 space-y-4">
                  <div className="relative w-16 h-16 border-4 border-gray-200 border-t-[#FFD700] rounded-full animate-spin mx-auto" />
                  <h4 className="font-bold text-base text-gray-900">Processing Your Advance Payment...</h4>
                  <p className="text-xs text-gray-500">Do not refresh this page or click back.</p>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter guest name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      WhatsApp Mobile Number
                    </label>
                    <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                      <span className="bg-gray-100 border-r border-gray-300 px-3 flex items-center justify-center text-sm font-semibold text-gray-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="Enter 10-digit mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any particular video link, LED letter requests (e.g. 'HAPPY BDAY NAME'), food requirements..."
                      value={requests}
                      onChange={(e) => setRequests(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] resize-none"
                    />
                  </div>

                  {/* Payment selection */}
                  <div className="space-y-2.5 pt-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Choose Booking Payment Mode
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("upi")}
                        className={`p-3 rounded-lg border text-xs font-bold transition ${
                          paymentMethod === "upi"
                            ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950"
                            : "border-gray-200 bg-white text-gray-700"
                        }`}
                      >
                        UPI / QR Code
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-3 rounded-lg border text-xs font-bold transition ${
                          paymentMethod === "card"
                            ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950"
                            : "border-gray-200 bg-white text-gray-700"
                        }`}
                      >
                        Credit/Debit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("netbank")}
                        className={`p-3 rounded-lg border text-xs font-bold transition ${
                          paymentMethod === "netbank"
                            ? "border-[#FFD700] bg-[#FFD700]/10 text-yellow-950"
                            : "border-gray-200 bg-white text-gray-700"
                        }`}
                      >
                        Net Banking
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-150 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-6 py-2.5 rounded-full text-xs transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-full text-sm transition shadow-lg hover:shadow-emerald-600/35"
                    >
                      Pay ₹{advanceToPay} Advance
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* STEP 5: SUCCESS RECEIPT */}
          {step === 5 && (
            <div className="bg-white border-2 border-emerald-500 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 animate-fadeIn">
              <div className="text-center py-4 border-b border-gray-100">
                <span className="text-5xl">✅</span>
                <h3 className="font-serif font-bold text-2xl text-gray-900 mt-2">Booking Confirmed!</h3>
                <p className="text-xs text-gray-500 mt-1">Your reservation was successfully blocked.</p>
                <div className="mt-4 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl inline-block font-mono text-sm font-bold">
                  Reservation ID: {bookingId}
                </div>
              </div>

              {/* Details table */}
              <div>
                <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Booking Summary</h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm">
                  <span className="text-gray-500">Location:</span>
                  <strong className="text-gray-900 text-right">{location}</strong>
                  
                  <span className="text-gray-500">Date:</span>
                  <strong className="text-gray-900 text-right">{date}</strong>

                  <span className="text-gray-500">Time Slot:</span>
                  <strong className="text-gray-900 text-right">{timeSlot}</strong>

                  <span className="text-gray-500">Private Space:</span>
                  <strong className="text-gray-900 text-right">{baseTheatre.name}</strong>

                  <span className="text-gray-500">Occasion:</span>
                  <strong className="text-gray-900 text-right">{occasion}</strong>

                  <span className="text-gray-500">Guests Name:</span>
                  <strong className="text-gray-900 text-right">{name}</strong>

                  <span className="text-gray-500">Mobile Number:</span>
                  <strong className="text-gray-900 text-right">+91 {phone}</strong>
                </div>
              </div>

              {/* Financial calculations */}
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Financial Summary</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Base Theatre Price:</span>
                    <span>₹{basePrice}</span>
                  </div>
                  {decorPrice > 0 && (
                    <div className="flex justify-between text-gray-500">
                      <span>Standard Decoration:</span>
                      <span>₹{decorPrice}</span>
                    </div>
                  )}
                  {extraDecorPrice > 0 && (
                    <div className="flex justify-between text-gray-500">
                      <span>Decor Upgrades:</span>
                      <span>₹{extraDecorPrice}</span>
                    </div>
                  )}
                  {cakePrice > 0 && (
                    <div className="flex justify-between text-gray-500">
                      <span>Celebration Cake:</span>
                      <span>₹{cakePrice}</span>
                    </div>
                  )}
                  {photoPrice > 0 && (
                    <div className="flex justify-between text-gray-500">
                      <span>Photography Services:</span>
                      <span>₹{photoPrice}</span>
                    </div>
                  )}
                  {bouquetPrice > 0 && (
                    <div className="flex justify-between text-gray-500">
                      <span>Fresh Rose Bouquet:</span>
                      <span>₹{bouquetPrice}</span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Coupon Discount ({appliedCoupon}):</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-gray-900 border-t border-gray-100 pt-2 text-sm sm:text-base">
                    <span>Grand Total:</span>
                    <span>₹{netTotal}</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-600">
                    <span>Advance Paid Online:</span>
                    <span>₹{advanceToPay}</span>
                  </div>
                  <div className="flex justify-between font-bold text-yellow-800 bg-yellow-50 p-2.5 rounded-lg">
                    <span>Remaining Balance (Pay at venue):</span>
                    <span>₹{balanceAtVenue}</span>
                  </div>
                </div>
              </div>

              {/* Crucial Guidelines */}
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <h4 className="font-bold text-xs uppercase text-amber-700 tracking-wider flex items-center gap-1">
                  ⚠️ Important Check-in Rules
                </h4>
                <ul className="list-disc pl-5 text-xs text-gray-650 space-y-2">
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

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/")}
                  className="w-full bg-[#0f1115] hover:bg-gray-800 text-white font-bold py-3 rounded-xl text-sm transition"
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
        </div>

        {/* Right Column - Booking Summary Card (Static values updated dynamically) */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-250 p-5 sm:p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">
              Booking Overview
            </h3>

            <div className="text-xs space-y-2.5 border-b border-gray-100 pb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="font-semibold text-gray-800">{location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="font-semibold text-gray-800">{date || "Not selected"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Space Size:</span>
                <span className="font-semibold text-gray-800">{baseTheatre.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time Slot:</span>
                <span className="font-semibold text-gray-800">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Occasion:</span>
                <span className="font-semibold text-gray-800">{occasion}</span>
              </div>
            </div>

            {/* Calculations summary */}
            <div className="text-xs space-y-2 border-b border-gray-100 pb-4">
              <div className="flex justify-between text-gray-500">
                <span>Base Theatre Cost:</span>
                <span>₹{basePrice}</span>
              </div>
              {decorPrice > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>Standard Decoration:</span>
                  <span>₹{decorPrice}</span>
                </div>
              )}
              {extraDecorPrice > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>Upgrade Decorations:</span>
                  <span>₹{extraDecorPrice}</span>
                </div>
              )}
              {cakePrice > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>Celebration Cake:</span>
                  <span>₹{cakePrice}</span>
                </div>
              )}
              {photoPrice > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>Photography:</span>
                  <span>₹{photoPrice}</span>
                </div>
              )}
              {bouquetPrice > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>Rose Bouquet:</span>
                  <span>₹{bouquetPrice}</span>
                </div>
              )}
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Discounts applied:</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-gray-900 pt-1 text-sm">
                <span>Grand Total:</span>
                <span>₹{netTotal}</span>
              </div>
            </div>

            {/* Bottom summary values */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex justify-between font-bold text-emerald-600">
                <span>Pay Online Advance:</span>
                <span>₹{advanceToPay}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-700">
                <span>Pay at Venue:</span>
                <span>₹{balanceAtVenue}</span>
              </div>
            </div>

            {/* Coupon Code Form */}
            {step < 5 && (
              <div className="pt-4 border-t border-gray-100">
                {appliedCoupon ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-800">Coupon Applied</span>
                      <strong className="block text-xs text-gray-900 font-mono">{appliedCoupon}</strong>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-xs text-red-600 hover:text-red-800 font-bold hover:underline"
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
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#FFD700] uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="bg-black hover:bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && <p className="text-[10px] text-red-500 font-medium mt-1.5">{couponError}</p>}
                {couponSuccessMsg && <p className="text-[10px] text-emerald-600 font-medium mt-1.5">{couponSuccessMsg}</p>}
              </div>
            )}
          </div>

          {/* Quick Notice Panel */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-[11px] text-amber-900 leading-relaxed space-y-1">
            <h4 className="font-bold flex items-center gap-1 text-xs mb-1">ℹ️ Booking Notes:</h4>
            <p>• Only ₹750 advance is paid now to block the slot.</p>
            <p>• Balance amount paid at venue after your session.</p>
            <p>• Free rescheduling is available up to 72 hours before slot timings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
