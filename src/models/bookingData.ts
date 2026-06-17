import { Theater, Cake, Decoration, Gift, Occasion, Coupon } from "@/models/bookingTypes";

export const LOCATIONS = ["Pitampura", "Noida Sector 4"];

export const THEATERS: Theater[] = [
  { 
    id: "theatre-1", 
    name: "Theatre 1", 
    basePrice: 1399, 
    limit: "Up to 2 People", 
    maxCapacity: 2,
    screen: "150\" HD", 
    sound: "600W Sony",
    slots: [
      { id: "t1-s1", time: "09:00 AM - 12:00 PM", status: "booked" },
      { id: "t1-s2", time: "12:30 PM - 03:30 PM", status: "booked" },
      { id: "t1-s3", time: "04:00 PM - 05:30 PM", status: "booked" },
      { id: "t1-s4", time: "06:00 PM - 09:00 PM", status: "booked" },
      { id: "t1-s5", time: "09:30 PM - 12:30 AM", status: "available" },
      { id: "t1-s6", time: "Tomorrow 5 Slot", status: "available" }
    ],
    image: "/media/booking/theatres/theatre-1/theatre-1-1.jpg"
  },
  { 
    id: "theatre-2", 
    name: "Theatre 2", 
    basePrice: 1599, 
    limit: "Up to 7 People", 
    maxCapacity: 7,
    screen: "150\" HD", 
    sound: "600W Sony",
    slots: [
      { id: "t2-s1", time: "09:30 AM - 12:30 PM", status: "booked" },
      { id: "t2-s2", time: "01:00 PM - 04:00 PM", status: "available" },
      { id: "t2-s3", time: "04:30 PM - 07:30 PM", status: "booked" },
      { id: "t2-s4", time: "08:00 PM - 09:30 PM", status: "booked" },
      { id: "t2-s5", time: "10:00 PM - 01:00 AM", status: "available" },
      { id: "t2-s6", time: "Tomorrow 3 Slot", status: "available" }
    ],
    image: "/media/booking/theatres/theatre-2/theatre-2-1.jpg"
  },
  { 
    id: "theatre-3", 
    name: "Theatre 3", 
    basePrice: 1799, 
    limit: "Up to 15 People", 
    maxCapacity: 15,
    screen: "150\" HD", 
    sound: "600W Sony",
    slots: [
      { id: "t3-s1", time: "10:00 AM - 01:00 PM", status: "booked" },
      { id: "t3-s2", time: "01:30 PM - 04:30 PM", status: "available" },
      { id: "t3-s3", time: "05:00 PM - 08:00 PM", status: "available" },
      { id: "t3-s4", time: "08:30 PM - 11:30 PM", status: "booked" },
      { id: "t3-s5", time: "Tomorrow 3 Slot", status: "available" }
    ],
    image: "/media/booking/theatres/theatre-3/theatre-3-1.jpg"
  }
];

export const CAKES: Cake[] = [
  {
    id: "cake-bf",
    name: "Black Forest Cake",
    desc: "Rich chocolate layers with fresh cherries and whipped cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 450 },
      { name: "1kg", price: 800 }
    ]
  },
  {
    id: "cake-sash",
    name: "Occasion Sash / Badge",
    desc: "Celebrate the host with a personalized sash or badge.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "Birthday Girl", price: 150 },
      { name: "Birthday Boy", price: 150 },
      { name: "Bride to Be", price: 150 }
    ]
  },
  {
    id: "cake-cb",
    name: "Chocolate Brownie",
    desc: "Fudgy brownie cake topped with rich chocolate ganache.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "350g", price: 350 },
      { name: "700g", price: 650 }
    ]
  },
  {
    id: "cake-pfc",
    name: "Pinata Heart Cake (with hammer)",
    desc: "Chocolate shell heart pinata cake with edible surprises inside.",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 750 },
      { name: "1kg", price: 1400 }
    ]
  },
  {
    id: "cake-ct",
    name: "Chocolate Truffle",
    desc: "Classic eggless chocolate truffle cake.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 450 },
      { name: "1kg", price: 850 }
    ]
  },
  {
    id: "cake-rv",
    name: "Royal Red Velvet",
    desc: "Luxurious red velvet layers with cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 550 },
      { name: "1kg", price: 1000 }
    ]
  }
];

export const DECORATIONS_DB: Decoration[] = [
  {
    id: "dec-photo",
    name: "Photoshoot Session",
    desc: "Professional photographer captures your special moments.",
    image: "/images/service_photoshoot.jpg",
    options: [
      { name: "15 Min", price: 300 },
      { name: "30 Min", price: 500 }
    ]
  },
  {
    id: "dec-candle",
    name: "Candle Path Layout",
    desc: "Romantic candle light pathway from entrance to recliners.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 300 }
    ]
  },
  {
    id: "dec-led",
    name: "LED Numbers / Letters",
    desc: "Glowing LED marquee numbers representing age or anniversary year.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 100 }
    ]
  },
  {
    id: "dec-rh",
    name: "Romantic Rose Heart",
    desc: "Floor heart boundary of red roses with candle lighting.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 1200 }
    ]
  },
  {
    id: "dec-fog",
    name: "Heavy Fog Entry",
    desc: "Thick fog cloud entry effect on room entry.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 1000 }
    ]
  },
  {
    id: "dec-walk",
    name: "Rose Walkway Pathway",
    desc: "Rose petals scattered path along the candles.",
    image: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 500 }
    ]
  }
];

export const GIFTS_DB: Gift[] = [
  {
    id: "gift-rose",
    name: "Golden Foil Rose",
    desc: "Elegant 24k gold foil artificial rose flower.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 200 }
    ]
  },
  {
    id: "gift-teddy",
    name: "Teddy with Mystery Box",
    desc: "Cute purple teddy bear holding a surprise jewelry box.",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 449 }
    ]
  },
  {
    id: "gift-music",
    name: "Vintage Wind-Up Music Box",
    desc: "Mechanical wooden wind-up film projector music box.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 1299 }
    ]
  },
  {
    id: "gift-choc",
    name: "Premium Chocolate Box",
    desc: "Assorted dairy milk silk and premium chocolates.",
    image: "/images/premium_chocolate_box.jpg",
    options: [
      { name: "Standard", price: 150 }
    ]
  },
  {
    id: "gift-card",
    name: "Personalized Greeting Card",
    desc: "Custom printed greeting card with your message.",
    image: "/images/personalized_greeting_card.jpg",
    options: [
      { name: "Standard", price: 50 }
    ]
  }
];

export const HERO_IMAGES = [
  "/media/site/home/hero/ANMC3603.avif",
  "/media/site/home/hero/ANMC3885.avif",
  "/media/site/home/hero/candel-pathANMC3778.avif",
  "/media/site/home/hero/happy-birthday-decor.avif",
  "/media/site/home/hero/hero-background-1.jpg"
];

export const OCCASIONS: Occasion[] = [
  { id: "Birthday", name: "Birthday", desc: "Celebrate a memorable birthday" },
  { id: "Anniversary", name: "Anniversary", desc: "Celebrate years of togetherness" },
  { id: "Romantic Date", name: "Romantic Date", desc: "A private and romantic experience" },
  { id: "Proposal", name: "Marriage Proposal", desc: "Plan the perfect proposal" },
  { id: "Bride to Be", name: "Bride to Be", desc: "Celebrate the bride-to-be" },
  { id: "Farewell", name: "Farewell", desc: "A warm farewell celebration" },
  { id: "Congratulations", name: "Congratulations", desc: "Celebrate a special achievement" },
  { id: "Baby Shower", name: "Baby Shower", desc: "Celebrate the upcoming arrival" }
];

export const COUPONS: Coupon[] = [
  { code: "WELCOME400", discount: 400, type: "flat" },
  { code: "FREECAKE", discount: 0, type: "flat" }, // Special logic: free cake up to 450
  { code: "EXTRA25", discount: 0.25, type: "percent" } // 25% discount on decorations
];
