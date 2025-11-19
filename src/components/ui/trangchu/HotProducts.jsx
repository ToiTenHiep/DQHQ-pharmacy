"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HotProducts() {
  const products = [
  { id: 1, name: "Vitamin C 1000mg", image: "/images/sanphambanchay/vien-uong-vitamin-c-1000mg-eundan.jpg" },
  { id: 2, name: "Dầu cá Omega-3", image: "/images/sanphambanchay/now-omega-3-200v-1.jpg" },
  { id: 3, name: "Siro ho trẻ em", image: "/images/sanphambanchay/b20e574fc22ed4c4f8ec570656328490.jpg" },
  { id: 4, name: "Kem chống nắng", image: "/images/sanphambanchay/00013491_kem_chong_nang_la_roche.png" },
  { id: 5, name: "Máy đo huyết áp", image: "/images/sanphambanchay/DSC_09885_d6bc560548.jpg" },
  { id: 6, name: "Khẩu trang y tế", image: "/images/sanphambanchay/00028861_khau_trang_y_te_cncs_4_lop_50_cai_3934_62b9_large_b3b2e21d6f.jpg" },
  { id: 7, name: "Nhiệt kế điện tử", image: "/images/sanphambanchay/00021529_nhiet_ke_dien_tu_microlife_mt500_9788_62b4_large_0364e21838.jpg" },
  { id: 8, name: "Viên sủi Multivitamin", image: "/images/sanphambanchay/demosana-multivitamin-total-refr.png" },
];

  const [index, setIndex] = useState(0);
  const visibleCount = 5;

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < products.length - visibleCount) setIndex(index + 1);
  };

  return (
    <div className="section-hot-products w-full h-[540px] flex items-center justify-center">
      <div className="bg-[#FFFDF8] w-[1208px] h-[480px] rounded-[10px] flex flex-col justify-between px-[40px] py-[32px] shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] font-extrabold text-[#0441E7] uppercase">
            Sản phẩm bán chạy
          </h2>
          <a
            href="#"
            className="text-sm text-[#0441E7] font-semibold flex items-center gap-1 hover:underline"
          >
            Xem thêm
            <span className="inline-block w-2 h-2 bg-[#0441E7] rounded-full"></span>
          </a>
        </div>

        {/* Slider */}
        <div className="relative w-full h-[300px] overflow-hidden mt-4 flex items-center p-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 200}px)`,
            }}
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="w-[180px] h-[240px] bg-white rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col mr-5 flex-shrink-0 overflow-hidden"
              >
                {/* Ảnh sản phẩm */}
                <div className="w-full h-[150px] bg-white rounded-t-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Tên + Nút */}
                <div className="flex flex-col items-center justify-between flex-1 p-3 bg-white rounded-[10px]">
                  <span className="text-[13px] font-semibold text-[#0441E7] text-center leading-tight">
                    {p.name}
                  </span>

                  <button className="mt-2 w-[103px] h-[30px] bg-[#FF0579] text-white text-[12px] font-semibold px-5 py-1.5 rounded-full shadow-md hover:bg-[#f10171] transition-all">
                    Mua ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thanh tiến trình + Nút */}
        <div className="flex items-center justify-between mt-6">
          {/* Thanh tiến trình */}
          <div className="flex-1 h-[2px] bg-gray-300 relative">
            <div
              className="absolute left-0 top-0 h-[2px] bg-[#FF0579] transition-all duration-300"
              style={{
                width: `${((index + 5) / products.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="flex gap-3 ml-4">
          {/* Nút trái */}
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
              index === 0
                ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                : "bg-[#0441E7] text-white hover:bg-[#0038d2]"
            }`}
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>

          {/* Nút phải */}
          <button
            onClick={handleNext}
            disabled={index >= products.length - visibleCount}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
              index >= products.length - visibleCount
                ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                : "bg-[#0441E7] text-white hover:bg-[#0038d2]"
            }`}
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
