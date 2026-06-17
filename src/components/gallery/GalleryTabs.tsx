"use client";

import { CATEGORIES } from "./data";

interface GalleryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function GalleryTabs({ activeTab, onTabChange }: GalleryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
      {CATEGORIES.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          type="button"
          className={`flex-shrink-0 snap-start px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition border cursor-pointer ${
            activeTab === tab
              ? "bg-[#0f1115] text-[#FFD700] border-[#0f1115]"
              : "bg-white text-gray-600 border-gray-200 hover:text-[#0f1115] hover:border-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
