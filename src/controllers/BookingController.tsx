"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { CartItem, Theater } from "@/models/bookingTypes";
import { THEATERS, LOCATIONS, HERO_IMAGES } from "@/models/bookingData";

interface BookingControllerType {
  mounted: boolean;
  step: number;
  location: string;
  setLocation: (loc: string) => void;
  date: string;
  setDate: (date: string) => void;
  theaterId: string;
  setTheaterId: (id: string) => void;
  selectedTheaterSlots: Record<string, string>;
  setSelectedTheaterSlots: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  slotId: string;
  setSlotId: (id: string) => void;
  guests: number;
  setGuests: (g: number) => void;
  kids: number;
  setKids: (k: number) => void;
  hasDecoration: boolean;
  setHasDecoration: (d: boolean) => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  activeOptions: Record<string, string>;
  setActiveOptions: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  timeLeft: number;
  setTimeLeft: (t: number) => void;
  timerActive: boolean;
  setTimerActive: (a: boolean) => void;
  activeSlide: number;
  setActiveSlide: (s: number) => void;
  occasion: string;
  setOccasion: (o: string) => void;
  occasionMessage: string;
  setOccasionMessage: (m: string) => void;
  showOccasionDetailsCard: boolean;
  setShowOccasionDetailsCard: (s: boolean) => void;
  // Checkout inputs
  name: string;
  setName: (n: string) => void;
  phone: string;
  setPhone: (p: string) => void;
  email: string;
  setEmail: (e: string) => void;
  whatsappNumber: string;
  setWhatsappNumber: (w: string) => void;
  couponCode: string;
  setCouponCode: (c: string) => void;
  appliedDiscount: number;
  setAppliedDiscount: (d: number) => void;
  couponError: string;
  setCouponError: (e: string) => void;
  couponSuccessMsg: string;
  setCouponSuccessMsg: (m: string) => void;
  bookingId: string;
  setBookingId: (id: string) => void;
  partner1Name: string;
  setPartner1Name: (n: string) => void;
  partner2Name: string;
  setPartner2Name: (n: string) => void;
  celebrantName: string;
  setCelebrantName: (n: string) => void;
  isPaid: boolean;
  setIsPaid: (p: boolean) => void;
  notes: string;
  setNotes: (n: string) => void;
  validationError: string;
  setValidationError: (error: string) => void;

  // Calculated values
  dates: Array<{ raw: string; label: string; displayDate: string }>;
  tomorrowStr: string;
  isSelectedDateTomorrow: boolean;
  theaters: Theater[];
  activeTheater: Theater;
  basePrice: number;
  baseIncluded: number;
  extraGuestsCount: number;
  extraGuestsPrice: number;
  kidsPrice: number;
  decorPrice: number;
  cartPrice: number;
  subtotal: number;
  total: number;
  slotTime: string;

  // Methods
  getDates: () => Array<{ raw: string; label: string; displayDate: string }>;
  formatDateLabel: (rawDate: string) => string;
  goToStep: (nextStep: number) => void;
  removeFromCart: (id: string) => void;
  applyCoupon: () => void;
  handleSaveAndContinue: () => void;
  resetBooking: () => void;
}

const BookingControllerContext = createContext<BookingControllerType | undefined>(undefined);

export function BookingControllerProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const initialRoom = searchParams.get("room") || "theatre-1";
  const stepParam = searchParams.get("step");
  const dateParam = searchParams.get("date");

  // State machine
  const [step, setStep] = useState(1);

  // Booking inputs
  const [location, setLocation] = useState(LOCATIONS[1]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [theaterId, setTheaterId] = useState(initialRoom);
  
  const [selectedTheaterSlots, setSelectedTheaterSlots] = useState<Record<string, string>>({
    "theatre-1": "t1-s5",
    "theatre-2": "t2-s2",
    "theatre-3": "t3-s2",
  });

  const [slotId, setSlotId] = useState(
    initialRoom === "theatre-2" ? "t2-s2" : initialRoom === "theatre-3" ? "t3-s2" : "t1-s5"
  );
  
  // Customizations
  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);
  const [hasDecoration, setHasDecoration] = useState(true);

  // Cart for Cakes, Decorations & Gifts
  const [cart, setCart] = useState<CartItem[]>([]);

  // Active options selected for each item card (defaults)
  const [activeOptions, setActiveOptions] = useState<Record<string, string>>({
    "cake-bf": "500g",
    "cake-sash": "Birthday Girl",
    "cake-cb": "350g",
    "cake-pfc": "500g",
    "cake-ct": "500g",
    "cake-rv": "500g",
    "dec-photo": "15 Min",
    "dec-candle": "Standard",
    "dec-led": "Standard",
    "dec-rh": "Standard",
    "dec-fog": "Standard",
    "dec-walk": "Standard",
    "gift-rose": "Standard",
    "gift-teddy": "Standard",
    "gift-music": "Standard",
    "gift-choc": "Standard",
    "gift-card": "Standard",
  });

  // Countdown timer (10 mins)
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerActive, setTimerActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [occasion, setOccasion] = useState("");
  const [occasionMessage, setOccasionMessage] = useState("");
  const [showOccasionDetailsCard, setShowOccasionDetailsCard] = useState(false);

  // Checkout inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccessMsg, setCouponSuccessMsg] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [partner1Name, setPartner1Name] = useState("");
  const [partner2Name, setPartner2Name] = useState("");
  const [celebrantName, setCelebrantName] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [notes, setNotes] = useState("");
  const [validationError, setValidationError] = useState("");

  // Helpers
  const getDates = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const list = [];
    for (let i = 0; i < 4; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      let label = weekdays[d.getDay()];
      if (i === 0) label = "Today";
      if (i === 1) label = "Tomorrow";
      const monthName = d.toLocaleString('en-US', { month: 'short' });
      list.push({
        raw: d.toISOString().split("T")[0],
        label: label,
        displayDate: `${d.getDate()} ${monthName}`
      });
    }
    return list;
  };

  const dates = getDates();
  const tomorrowObj = dates.find(d => d.label === "Tomorrow");
  const tomorrowStr = tomorrowObj ? tomorrowObj.raw : "";
  const isSelectedDateTomorrow = date === tomorrowStr;

  const isSlotAvailable = (tId: string, slotId: string, dateStr: string, slotTime: string) => {
    if (slotTime.startsWith("Tomorrow")) {
      return true;
    }
    if (!dateStr) return true;
    const dateVal = dateStr.replace(/-/g, "");
    const dateNum = parseInt(dateVal, 10) || 0;
    const slotMatch = slotId.match(/s(\d+)/);
    const slotIndex = slotMatch ? parseInt(slotMatch[1], 10) : 0;
    const theaterMatch = tId.match(/(\d+)/);
    const theaterIndex = theaterMatch ? parseInt(theaterMatch[1], 10) : 1;
    const val = (dateNum + slotIndex * 3 + theaterIndex * 7) % 5;
    return val !== 0 && val !== 2;
  };

  const theaters = THEATERS.map(t => ({
    ...t,
    slots: t.slots.map(s => {
      const available = isSlotAvailable(t.id, s.id, date, s.time);
      return {
        ...s,
        status: available ? ("available" as const) : ("booked" as const)
      };
    })
  }));

  const formatDateLabel = (rawDate: string) => {
    if (!rawDate) return "";
    const parts = rawDate.split("-");
    if (parts.length !== 3) return rawDate;
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    
    // Find if it matches one of our pre-calculated dates
    const match = dates.find(d => d.raw === rawDate);
    if (match) {
      return `${day}/${month}/${year} (${match.label})`;
    }
    
    // Fallback format
    return `${day}/${month}/${year}`;
  };

  // Navigate steps with URL pushes for back-button integration
  const goToStep = (nextStep: number) => {
    setStep(nextStep);
    
    // Sync to URL
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("step", nextStep.toString());
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  // Sync step state when URL param changes
  useEffect(() => {
    if (!mounted) return;
    if (stepParam) {
      const parsed = parseInt(stepParam, 10);
      if (!isNaN(parsed) && parsed !== step) {
        setStep(parsed);
      }
    } else {
      setStep(1);
    }
  }, [stepParam, mounted]);

  // Sync default guests and active slot based on theaterId
  useEffect(() => {
    if (theaterId === "theatre-1") setGuests(2);
    if (theaterId === "theatre-2") setGuests(4);
    if (theaterId === "theatre-3") setGuests(8);

    const nextSlot = selectedTheaterSlots[theaterId];
    if (nextSlot && slotId !== nextSlot) {
      setSlotId(nextSlot);
    }
  }, [theaterId, selectedTheaterSlots, slotId]);

  // Sync theaterId state to the URL search parameter 'room'
  useEffect(() => {
    if (!mounted) return;
    const currentParams = new URLSearchParams(window.location.search);
    const roomParam = currentParams.get("room");
    if (roomParam !== theaterId) {
      currentParams.set("room", theaterId);
      router.push(`${pathname}?${currentParams.toString()}`);
    }
  }, [theaterId, mounted, pathname, router]);

  // Auto-clear validation errors when form fields change or step changes
  useEffect(() => {
    setValidationError("");
  }, [name, phone, email, partner1Name, partner2Name, celebrantName, occasion, step]);

  // Background slideshow transition loop for all steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  useEffect(() => {
    if (step >= 3 && step <= 8) {
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
  }, [step]);

  useEffect(() => {
    if (!timerActive) return;
    if (timeLeft <= 0) {
      alert("Time expired! Your slot reservation has released. Please select a slot again.");
      goToStep(2);
      setTimeLeft(600);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  // Handle date change to reset slots if a "Tomorrow" slot was selected but the date is not tomorrow
  useEffect(() => {
    if (!date) return;
    const isTomorrow = date === tomorrowStr;

    setSelectedTheaterSlots(prev => {
      const updated = { ...prev };
      let changed = false;

      theaters.forEach(t => {
        const currentSlotId = prev[t.id];
        const currentSlot = t.slots.find(s => s.id === currentSlotId);
        
        if (currentSlot) {
          const isSlotTomorrow = currentSlot.time.toLowerCase().includes("tomorrow");
          if (isSlotTomorrow && !isTomorrow) {
            const fallbackSlot = t.slots.find(s => !s.time.toLowerCase().includes("tomorrow") && s.status === "available");
            if (fallbackSlot) {
              updated[t.id] = fallbackSlot.id;
              changed = true;
              if (theaterId === t.id) {
                setSlotId(fallbackSlot.id);
              }
            }
          }
        }
      });

      return changed ? updated : prev;
    });
  }, [date, tomorrowStr, theaterId]);

  // Parse AI Event Planner recommendations from URL query params
  useEffect(() => {
    if (!mounted) return;

    const room = searchParams.get("room");
    const occasionParam = searchParams.get("occasion");
    const guestsParam = searchParams.get("guests");
    const kidsParam = searchParams.get("kids");
    const decorParam = searchParams.get("decor");
    const cakeParam = searchParams.get("cake");
    const decorItemsParam = searchParams.get("decorItems");
    const giftsParam = searchParams.get("gifts");

    if (room || occasionParam || cakeParam || decorItemsParam || giftsParam || stepParam || dateParam) {
      if (room && theaters.some(t => t.id === room)) {
        setTheaterId(room);
        if (room === "theatre-1") setGuests(2);
        if (room === "theatre-2") setGuests(4);
        if (room === "theatre-3") setGuests(8);
      }
      
      if (dateParam) {
        setDate(dateParam);
      }

      if (occasionParam) {
        setOccasion(occasionParam);
      }
      
      if (guestsParam) {
        setGuests(parseInt(guestsParam, 10));
      }
      
      if (kidsParam) {
        setKids(parseInt(kidsParam, 10));
      }

      if (decorParam) {
        setHasDecoration(decorParam === "true");
      }

      const newCart: CartItem[] = [];

      if (cakeParam) {
        // Preload default cake
        newCart.push({
          id: "cake-bf-500g",
          itemId: "cake-bf",
          name: "Black Forest Cake (500g)",
          category: "cake",
          option: "500g",
          price: 450,
          quantity: 1
        });
      }

      if (decorItemsParam) {
        const itemIds = decorItemsParam.split(",");
        itemIds.forEach(itemId => {
          if (itemId === "dec-photo") {
            newCart.push({
              id: "dec-photo-15 Min",
              itemId: "dec-photo",
              name: "Photoshoot Session (15 Min)",
              category: "decor",
              option: "15 Min",
              price: 300,
              quantity: 1
            });
          } else if (itemId === "dec-candle") {
            newCart.push({
              id: "dec-candle-Standard",
              itemId: "dec-candle",
              name: "Candle Path Layout (Standard)",
              category: "decor",
              option: "Standard",
              price: 300,
              quantity: 1
            });
          }
        });
      }

      if (giftsParam) {
        const itemIds = giftsParam.split(",");
        itemIds.forEach(itemId => {
          if (itemId === "gift-rose") {
            newCart.push({
              id: "gift-rose-Standard",
              itemId: "gift-rose",
              name: "Golden Foil Rose (Standard)",
              category: "gift",
              option: "Standard",
              price: 200,
              quantity: 1
            });
          }
        });
      }

      if (newCart.length > 0) {
        setCart(newCart);
      }

      if (stepParam) {
        setStep(parseInt(stepParam, 10));
      } else {
        setStep(2); // Auto-jump to slot selection
      }
    }
  }, [mounted]);


  // Price calculations
  const activeTheater = theaters.find((t) => t.id === theaterId) || theaters[0];
  const basePrice = activeTheater.basePrice;
  const baseIncluded = activeTheater.id === "theatre-1" ? 2 : 4;
  const extraGuestsCount = Math.max(0, guests - baseIncluded);
  const extraGuestsPrice = 0;
  const kidsPrice = kids * 200;
  const decorPrice = hasDecoration ? 750 : 0;
  const cartPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const subtotal = basePrice + extraGuestsPrice + kidsPrice + decorPrice + cartPrice;
  const total = Math.max(0, subtotal - appliedDiscount);

  // Retrieve selected slot text dynamically
  const activeSlot = activeTheater.slots.find((s) => s.id === slotId);
  const slotTime = activeSlot ? activeSlot.time : "";

  // Apply Coupon Action
  const applyCoupon = () => {
    setCouponError("");
    setCouponSuccessMsg("");
    
    const code = couponCode.toUpperCase().trim();
    
    if (code === "WELCOME400") {
      if (subtotal >= 1599) {
        setAppliedDiscount(400);
        setCouponSuccessMsg("WELCOME400 applied! Flat ₹400 discount added.");
      } else {
        setCouponError("Minimum order value to use WELCOME400 is ₹1,599.");
      }
    } else if (code === "FREECAKE") {
      const cakeInCart = cart.find(item => item.category === "cake");
      if (cakeInCart) {
        const discountAmount = Math.min(cakeInCart.price, 550);
        setAppliedDiscount(discountAmount);
        setCouponSuccessMsg(`FREECAKE applied! Saved ₹${discountAmount} on cake.`);
      } else {
        setCouponError("Please select a cake first to apply this coupon.");
      }
    } else if (code === "EXTRA25") {
      const decorCartTotal = cart.filter(item => item.category === "decor").reduce((acc, item) => acc + item.price * item.quantity, 0);
      const totalDecorPrice = decorCartTotal + (hasDecoration ? 750 : 0);
      if (totalDecorPrice > 0) {
        const discountAmount = Math.round(totalDecorPrice * 0.25);
        setAppliedDiscount(discountAmount);
        setCouponSuccessMsg(`EXTRA25 applied! Saved ₹${discountAmount} on decorations.`);
      } else {
        setCouponError("Please select a decoration package to apply this coupon.");
      }
    } else {
      setCouponError("Invalid coupon code. Try WELCOME400, FREECAKE or EXTRA25.");
    }
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveAndContinue = () => {
    if (step === 3) {
      if (!name.trim()) {
        setValidationError("Please enter your name.");
        return;
      }
      if (phone.length !== 10) {
        setValidationError("Please enter a valid 10-digit mobile number.");
        return;
      }
      goToStep(4);
    } else if (step === 4) {
      if (!occasion) {
        setValidationError("Please select an occasion.");
        return;
      }
      if (["Anniversary", "Romantic Date", "Proposal"].includes(occasion)) {
        if (!partner1Name.trim() || !partner2Name.trim()) {
          setValidationError("Please enter both Partner 1 and Partner 2 names.");
          return;
        }
      } else {
        if (!celebrantName.trim()) {
          setValidationError("Please enter the Person Name.");
          return;
        }
      }
      goToStep(5);
    } else if (step === 5) {
      goToStep(6);
    } else if (step === 6) {
      goToStep(7);
    } else if (step === 7) {
      goToStep(8);
    } else if (step === 8) {
      if (!name.trim() || !phone.trim() || !email.trim()) {
        setValidationError("Please fill in all mandatory fields.");
        return;
      }
      const generatedId = "DS" + Math.floor(100000 + Math.random() * 900000);
      setBookingId(generatedId);
      setIsPaid(true);
      goToStep(9);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setCart([]);
    setGuests(activeTheater.id === "theatre-1" ? 2 : 4);
    setKids(0);
    setHasDecoration(true);
    setCouponCode("");
    setAppliedDiscount(0);
    setCouponError("");
    setCouponSuccessMsg("");
    setName("");
    setPhone("");
    setEmail("");
    setWhatsappNumber("");
    setBookingId("");
    setPartner1Name("");
    setPartner2Name("");
    setCelebrantName("");
    setIsPaid(false);
    setNotes("");
    setTimeLeft(600);
    setTimerActive(false);
    
    // Clear URL params
    router.push(pathname);
  };

  return (
    <BookingControllerContext.Provider
      value={{
        mounted,
        step,
        location,
        setLocation,
        date,
        setDate,
        theaterId,
        setTheaterId,
        selectedTheaterSlots,
        setSelectedTheaterSlots,
        slotId,
        setSlotId,
        guests,
        setGuests,
        kids,
        setKids,
        hasDecoration,
        setHasDecoration,
        cart,
        setCart,
        activeOptions,
        setActiveOptions,
        timeLeft,
        setTimeLeft,
        timerActive,
        setTimerActive,
        activeSlide,
        setActiveSlide,
        occasion,
        setOccasion,
        occasionMessage,
        setOccasionMessage,
        showOccasionDetailsCard,
        setShowOccasionDetailsCard,
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        whatsappNumber,
        setWhatsappNumber,
        couponCode,
        setCouponCode,
        appliedDiscount,
        setAppliedDiscount,
        couponError,
        setCouponError,
        couponSuccessMsg,
        setCouponSuccessMsg,
        bookingId,
        setBookingId,
        partner1Name,
        setPartner1Name,
        partner2Name,
        setPartner2Name,
        celebrantName,
        setCelebrantName,
        isPaid,
        setIsPaid,
        notes,
        setNotes,
        validationError,
        setValidationError,
        
        // Calculated
        dates,
        tomorrowStr,
        isSelectedDateTomorrow,
        theaters,
        activeTheater,
        basePrice,
        baseIncluded,
        extraGuestsCount,
        extraGuestsPrice,
        kidsPrice,
        decorPrice,
        cartPrice,
        subtotal,
        total,
        slotTime,

        // Methods
        getDates,
        formatDateLabel,
        goToStep,
        removeFromCart,
        applyCoupon,
        handleSaveAndContinue,
        resetBooking,
      }}
    >
      {children}
    </BookingControllerContext.Provider>
  );
}

export function useBookingController() {
  const context = useContext(BookingControllerContext);
  if (context === undefined) {
    throw new Error("useBookingController must be used within a BookingControllerProvider");
  }
  return context;
}
