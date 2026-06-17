"use client";

import React from "react";
import { useBookingController } from "@/controllers/BookingController";
import { CAKES } from "@/models/bookingData";
import { CartItem } from "@/models/bookingTypes";

export default function Step5Cakes() {
  const {
    cart,
    setCart,
    activeOptions,
    setActiveOptions,
    goToStep
  } = useBookingController();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b pb-3.5">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#111827]">Add Cake</h2>
          <p className="text-xs text-gray-500">Choose a cake to make your celebration sweeter.</p>
        </div>
        <button
          type="button"
          onClick={() => goToStep(6)}
          className="rounded-lg border border-gray-300 hover:border-gray-400 bg-white text-gray-600 px-4 py-1.5 text-xs font-bold transition cursor-pointer"
        >
          Skip
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {CAKES.map((cake) => {
          const selectedOption = activeOptions[cake.id] || cake.sizes[0].name;
          const sizePriceObj = cake.sizes.find(s => s.name === selectedOption) || cake.sizes[0];
          const price = sizePriceObj.price;
          const cartItemId = `${cake.id}-${selectedOption}`;
          const isAdded = cart.some(c => c.id === cartItemId);
          
          return (
            <div key={cake.id} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-xs flex flex-col justify-between">
              <div className="relative h-[130px] w-full bg-gray-50">
                <img alt={cake.name} src={cake.image} className="object-cover w-full h-full" />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 leading-tight">{cake.name}</h3>
                  <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-snug">{cake.desc}</p>
                </div>
                
                <div className="space-y-3">
                  {/* Option selection pills */}
                  <div className="flex gap-1.5 flex-wrap">
                    {cake.sizes.map((s) => (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => {
                          setActiveOptions(prev => ({ ...prev, [cake.id]: s.name }));
                        }}
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold border transition ${
                          selectedOption === s.name
                            ? "bg-gray-800 border-gray-800 text-white"
                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                    <div>
                      <p className="text-[9px] text-gray-400 font-bold uppercase leading-none">Price</p>
                      <p className="text-sm font-black text-gray-800 mt-0.5">₹{price}</p>
                    </div>
                    {isAdded ? (
                      <div className="flex items-center border border-[#C85A17] rounded-lg overflow-hidden bg-white select-none">
                        <button
                          type="button"
                          onClick={() => {
                            setCart(prev => {
                              const item = prev.find(c => c.id === cartItemId);
                              if (item && item.quantity > 1) {
                                return prev.map(c => c.id === cartItemId ? { ...c, quantity: c.quantity - 1 } : c);
                              } else {
                                return prev.filter(c => c.id !== cartItemId);
                              }
                            });
                          }}
                          className="px-2 py-1.5 text-xs font-black text-[#C85A17] hover:bg-[#C85A17]/10 transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-xs font-black text-[#C85A17] bg-[#C85A17]/5 min-w-[20px] text-center">
                          {cart.find(c => c.id === cartItemId)?.quantity || 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setCart(prev => prev.map(c => c.id === cartItemId ? { ...c, quantity: c.quantity + 1 } : c));
                          }}
                          className="px-2 py-1.5 text-xs font-black text-[#C85A17] hover:bg-[#C85A17]/10 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const selectedOptionObj = cake.sizes.find(s => s.name === selectedOption) || cake.sizes[0];
                          const newItem: CartItem = {
                            id: cartItemId,
                            itemId: cake.id,
                            name: `${cake.name} (${selectedOption})`,
                            category: "cake",
                            option: selectedOption,
                            price: selectedOptionObj.price,
                            quantity: 1
                          };
                          setCart(prev => [...prev, newItem]);
                        }}
                        className="rounded-lg py-1.5 px-3 text-[10px] font-bold uppercase transition-all bg-gray-800 text-white hover:bg-black cursor-pointer"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

