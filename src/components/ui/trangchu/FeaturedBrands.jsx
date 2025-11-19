"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const brands = [
  { id: 1, name: "Omron", img: "/images/Thuonghieu/20089951_6257267.jpg" },
  { id: 2, name: "GSK", img: "/images/Thuonghieu/34919616_8204677.jpg" },
  { id: 3, name: "Sanofi", img: "/images/Thuonghieu/34004257_8136091.jpg" },
  { id: 4, name: "DHG Pharma", img: "/images/Thuonghieu/12423863_4954210.jpg" },
  { id: 5, name: "Pfizer", img: "/images/Thuonghieu/30839120_7722203.jpg" },
];

export default function FeaturedBrands() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Chỉ bật animation sau khi client đã mount
    setMounted(true);
  }, []);

  return (
    <section className="font-[Montserrat]">
      <div className="w-[1117px] mx-auto items-center justify-between">
        {/* ====== HEADER ====== */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[24px] font-extrabold text-[#0441E7] uppercase">
            THƯƠNG HIỆU NỔI TIẾNG
          </h2>

          <Link
            href="#"
            className="text-sm text-[#0441E7] font-semibold flex items-center gap-2 hover:underline"
          >
            Xem thêm
            <span className="w-2 h-2 bg-[#0441E7] rounded-full inline-block" />
          </Link>
        </div>

        {/* ====== GRID THƯƠNG HIỆU ====== */}
        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
          {brands.slice(0, 2).map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-center transition bg-white shadow-sm rounded-2xl hover:shadow-lg h-44 md:h-56"
            >
              <span className="absolute top-3 right-3 w-4 h-4 bg-[#FF0579] rounded-full" />
              <img
                src={brand.img.trim()}
                alt={brand.name}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {brands.slice(2).map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-center transition bg-white shadow-sm rounded-2xl hover:shadow-lg h-36 md:h-44"
            >
              <span className="absolute top-3 right-3 w-4 h-4 bg-[#FF0579] rounded-full" />
              <img
                src={brand.img.trim()}
                alt={brand.name}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
