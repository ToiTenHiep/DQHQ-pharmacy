"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getBannerData } from "@/lib/banner"; // import helper

export default function BannerDQHQ() {
  const slides = getBannerData(); // Lấy dữ liệu từ JSON

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[618px] overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={slide.id}
          src={slide.bg}
          alt={slide.title}
          fill
          priority={i === 0}
          className={`object-cover transition-all duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        />
      ))}

      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`w-[1200px] max-w-[90%] mx-auto flex ${
              slide.position === "left"
                ? "justify-between items-center"
                : "flex-col items-center text-center"
            }`}
          >
            {slide.position === "center" && (
              <div className="text-[#FFFFFF] px-6">
                <div className="inline-block py-1 mb-3 rounded-lg backdrop-blur-md">
                  <span className="text-[32px] font-bold text-[#FF0579] mr-2">DQHQ</span>
                  <span className="text-[32px] font-bold text-[#FFFFFF]">{slide.title}</span>
                </div>
                <p className="text-sm md:text-base text-[#FFFFFF] leading-relaxed mb-6 max-w-xl mx-auto">
                  {slide.desc}
                </p>
                <Link href={slide.link}>
                  <button className="bg-[#0441E7] hover:bg-[#003ad8] text-white font-semibold rounded-full px-8 py-2 transition-all">
                    {slide.button}
                  </button>
                </Link>
              </div>
            )}

            {slide.position === "left" && (
              <div className="max-w-lg text-[#ffffff]">
                <div className="inline-block py-1 mb-6 rounded-[10px] backdrop-blur-md">
                  <span className="text-[32px] font-bold text-[#FF0579] mr-2">DQHQ</span>
                  <span className="text-[32px] font-bold text-[#ffffff]">{slide.title}</span>
                </div>
                <p className="text-sm md:text-base text-[#ffffff] leading-relaxed mb-6">{slide.desc}</p>
                <Link href={slide.link}>
                  <button className="bg-[#ffffff] hover:bg-[#003ad8] text-[#FF0579] font-semibold rounded-full px-8 py-2 transition-all">
                    {slide.button}
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="absolute flex justify-center w-full gap-4 bottom-6">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block w-10 h-[3px] rounded-full transition-all duration-300 ${
              i === current ? "bg-[#FF0579]" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
