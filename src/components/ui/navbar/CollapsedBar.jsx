"use client";
import { ChevronDown } from "lucide-react";

export default function CollapsedBar({ onExpand }) {
  return (
    <div className="h-[28px] bg-[#0441E7] flex items-center justify-end px-[45px] shadow-md">
      <button
        onClick={() => {
          onExpand(); // khi bấm -> hiện navbar
          // Scroll lên nhẹ để đảm bảo navbar không bị che
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#FF0579] shadow-sm hover:bg-[#e0d5ff] transition"
        aria-label="Hiện navbar"
      >
        <ChevronDown size={18} className="text-[#5B00F8]" />
      </button>
    </div>
  );
}
