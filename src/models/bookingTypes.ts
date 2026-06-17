export interface Slot {
  id: string;
  time: string;
  status: "available" | "booked";
}

export interface Theater {
  id: string;
  name: string;
  basePrice: number;
  limit: string;
  maxCapacity: number;
  screen: string;
  sound: string;
  slots: Slot[];
  image: string;
}

export interface CakeSize {
  name: string;
  price: number;
}

export interface Cake {
  id: string;
  name: string;
  desc: string;
  image: string;
  sizes: CakeSize[];
}

export interface DecorationOption {
  name: string;
  price: number;
}

export interface Decoration {
  id: string;
  name: string;
  desc: string;
  image: string;
  options: DecorationOption[];
}

export interface GiftOption {
  name: string;
  price: number;
}

export interface Gift {
  id: string;
  name: string;
  desc: string;
  image: string;
  options: GiftOption[];
}

export interface Coupon {
  code: string;
  discount: number;
  type: "flat" | "percent";
  minBookingValue?: number;
}

export interface Occasion {
  id: string;
  name: string;
  desc: string;
}

export interface CartItem {
  id: string;      // Unique (e.g. cake-bf-500g)
  itemId: string;  // Database ID (e.g. cake-bf)
  name: string;
  category: "cake" | "decor" | "gift";
  option: string;
  price: number;
  quantity: number;
}
