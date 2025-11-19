"use client";
import React, { useState, useMemo } from "react";
import { List, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const diseaseTabs = [
  { id: "sotxuathuyet", label: "Sốt xuất huyết" },
  { id: "taychanmieng", label: "Tay chân miệng" },
  { id: "cum", label: "Cúm" },
  { id: "hoga", label: "Ho gà" },
];

// Dữ liệu giả lập
const productData = {
  sotxuathuyet: [
    { id: 1, name: "Oresol Gói bù nước điện giải", price: "45.000 VND / Hộp", image: "/images/Benhtheomua/oresol-441g-hd-pharma-h-20g-thumb-1-1-600x600.jpg" },
    { id: 2, name: "Vitamin C Sủi tăng đề kháng", price: "120.000 VND / Hộp", image: "/images/Benhtheomua/417e4113a5ed29fedc422635266eca27.jpg" },
    { id: 3, name: "Nhiệt kế điện tử Omron MC-246", price: "125.000 VND / Hộp", image: "/images/Benhtheomua/21-nhiet-ke-dien-tu-omron-mc-246.jpg" },
    { id: 4, name: "Paracetamol Hạ sốt người lớn", price: "80.000 VND / Hộp", image: "/images/Benhtheomua/92f3821f-16f6-47f0-8931-c80a6294ff33.jpg" },
    { id: 5, name: "Thuốc ho Prospan", price: "95.000 VND / Chai", image: "/images/Benhtheomua/siro-prospan-duc-100ml-cho-tre-tu-1-thang-tuoi-622071ab402da-03032022144339.jpg" },
    { id: 6, name: "Khẩu trang y tế 4 lớp", price: "25.000 VND / Hộp", image: "/images/Benhtheomua/00502011_khau_trang_y_te_ilt_4_lop_trang_liworldco_1156_6323_large_f628763e55.jpg" },
    { id: 7, name: "Xịt họng trẻ em Eugica", price: "65.000 VND / Chai", image: "/images/Benhtheomua/xit-hong-thao-duoc-eugica-chai-10ml-02.png" },
    { id: 8, name: "Kem chống ngứa Dexeryl", price: "180.000 VND / Tuýp", image: "/images/Benhtheomua/Kem-duong-Dexeryl-Phap-50g-1m.jpg" },
    { id: 9, name: "Vitamin tổng hợp trẻ nhỏ", price: "230.000 VND / Hộp", image: "/images/Benhtheomua/Buonavit_Baby_Bo_sung_vitamin_thiet_yeu_giup_be_an_ngon_tang_suc_de_khang_b6fddc85ac.jpg" },
    { id: 10, name: "Dung dịch sát khuẩn Betadine", price: "75.000 VND / Chai", image: "/images/Benhtheomua/1_k52e-e8.png" },
  ],
  taychanmieng: [
    { id: 11, name: "Paracetamol trẻ em", price: "65.000 VND / Hộp" },
    { id: 12, name: "Trà gừng mật ong thiên nhiên", price: "90.000 VND / Hộp" },
    { id: 13, name: "Khẩu trang y tế 4 lớp", price: "25.000 VND / Hộp" },
    { id: 14, name: "Thuốc ho Prospan", price: "95.000 VND / Chai" },
    { id: 15, name: "Sirô ho Tussin", price: "115.000 VND / Chai" },
    { id: 16, name: "Viên ngậm ho Eugica", price: "65.000 VND / Hộp" },
    { id: 17, name: "Thuốc cảm cúm Tiffy", price: "40.000 VND / Vỉ" },
    { id: 18, name: "Dầu gió xanh Thiên Thảo", price: "35.000 VND / Lọ" },
    { id: 19, name: "Paracetamol Hạ sốt người lớn", price: "80.000 VND / Hộp" },
    { id: 20, name: "Nước muối sinh lý 0.9%", price: "30.000 VND / Chai" },
  ],
  cum: [
    { id: 21, name: "Trà gừng mật ong thiên nhiên", price: "90.000 VND / Hộp" },
    { id: 22, name: "Khẩu trang y tế 4 lớp", price: "25.000 VND / Hộp" },
    { id: 23, name: "Thuốc ho Prospan", price: "95.000 VND / Chai" },
    { id: 24, name: "Sirô ho Tussin", price: "115.000 VND / Chai" },
    { id: 25, name: "Viên ngậm ho Eugica", price: "65.000 VND / Hộp" },
    { id: 26, name: "Trà gừng mật ong thiên nhiên", price: "90.000 VND / Hộp" },
    { id: 27, name: "Khẩu trang y tế 4 lớp", price: "25.000 VND / Hộp" },
    { id: 28, name: "Thuốc ho Prospan", price: "95.000 VND / Chai" },
    { id: 29, name: "Sirô ho Tussin", price: "115.000 VND / Chai" },
    { id: 30, name: "Viên ngậm ho Eugica", price: "65.000 VND / Hộp" },
  ],
  hoga: [
    { id: 31, name: "Thuốc cảm cúm Tiffy", price: "40.000 VND / Vỉ" },
    { id: 32, name: "Dầu gió xanh Thiên Thảo", price: "35.000 VND / Lọ" },
    { id: 33, name: "Paracetamol Hạ sốt người lớn", price: "80.000 VND / Hộp" },
    { id: 34, name: "Nước muối sinh lý 0.9%", price: "30.000 VND / Chai" },
    { id: 35, name: "Viên ngậm ho Eugica", price: "65.000 VND / Hộp" },
    { id: 36, name: "Thuốc cảm cúm Tiffy", price: "40.000 VND / Vỉ" },
    { id: 37, name: "Dầu gió xanh Thiên Thảo", price: "35.000 VND / Lọ" },
    { id: 38, name: "Paracetamol Hạ sốt người lớn", price: "80.000 VND / Hộp" },
    { id: 39, name: "Nước muối sinh lý 0.9%", price: "30.000 VND / Chai" },
    { id: 40, name: "Viên ngậm ho Eugica", price: "65.000 VND / Hộp" },
  ],
};

export default function SeasonalDiseases() {
  const [activeTab, setActiveTab] = useState("sotxuathuyet");
  const [page, setPage] = useState(0);

  const products = productData[activeTab] || [];
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const productGroups = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, i) =>
        products.slice(i * productsPerPage, (i + 1) * productsPerPage)
      ),
    [products]
  );

  const handlePrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const handleNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="bg-[#FFFDF8] font-[Montserrat] flex items-center justify-center py-10">
      <div className="w-full max-w-[1208px] rounded-[10px] px-[40px] py-[32px]">
        {/* ===== HEADER ===== */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-[24px] font-extrabold text-[#0441E7] uppercase">
            BỆNH THEO MÙA
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            {diseaseTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setPage(0);
                  }}
                  className={`w-[180px] h-[32px] flex items-center gap-2 px-[8px] py-[6px] rounded-full text-[12px] font-semibold border transition-all duration-200 ${
                    active
                      ? "bg-[#0441E7] text-white shadow-sm"
                      : "bg-white text-[#FF0579] border-[#FF0579] hover:bg-[#EFFFF9]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                      active ? "border-white" : "border-[#FF0579]"
                    }`}
                  >
                    <List
                      size={12}
                      className={active ? "text-white" : "text-[#FF0579]"}
                      strokeWidth={2}
                    />
                  </div>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== MÔ TẢ ===== */}
        <p className="text-[#0441E7] text-center text-[16px] font-medium mb-8 leading-relaxed">
          {activeTab === "sotxuathuyet" &&
            "Sốt xuất huyết đang gia tăng nhanh chóng, nhiều ca trở nặng vì phát hiện trễ hoặc chủ quan. Đừng để đến khi sốt cao mới lo bù nước hay tăng đề kháng."}
          {activeTab === "taychanmieng" &&
            "Bệnh tay chân miệng thường gặp ở trẻ nhỏ. Giữ vệ sinh tay chân và môi trường sống sạch sẽ để hạn chế lây lan."}
          {activeTab === "cum" &&
            "Cúm mùa có thể bùng phát bất cứ lúc nào. Hãy tiêm vắc xin đầy đủ và uống nhiều nước, nghỉ ngơi hợp lý."}
          {activeTab === "hoga" &&
            "Ho gà là bệnh truyền nhiễm dễ lây, đặc biệt ở trẻ em. Nên tiêm phòng đầy đủ và giữ vệ sinh cá nhân."}
        </p>

        {/* ===== KHUNG SẢN PHẨM ===== */}
        <div className="relative bg-[#0441E7] w-full h-[460px] rounded-[10px] flex items-center justify-center overflow-hidden">
          {/* Nút trái */}
          <button
            onClick={handlePrev}
            className="absolute left-[8px] z-10 w-10 h-10 bg-[#FF0579] text-white rounded-full flex items-center justify-center hover:opacity-80 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Nội dung sản phẩm có animation */}
          <div className="w-[90%] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${page}`}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="flex justify-between gap-6"
              >
                {productGroups[page]?.map((p) => (
                  <div
                    key={p.id}
                    className="relative w-[260px] h-[418px] bg-[#FFFFFF] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                  >
                    {/* Ảnh */}
                    <div className="w-[217px] h-[217px] rounded-[10px] mt-[8px] flex items-center justify-center bg-white shadow-inner overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="object-contain w-full h-full"
                      />
                    </div>


                    {/* Thông tin */}
                    <div className="p-4 flex flex-col flex-1 gap-[12px] text-left w-full">
                      <p className="text-[14px] font-medium text-[#0441E7] line-clamp-2">
                        {p.name}
                      </p>
                      <p className="text-[14px] font-semibold text-[#0441E7]">
                        {p.price}
                      </p>
                    </div>

                    {/* Nút mua */}
                    <button className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-[#FF0579] text-white text-[12px] font-bold py-1 px-5 rounded-full hover:opacity-90 transition">
                      Mua ngay
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nút phải */}
          <button
            onClick={handleNext}
            className="absolute right-[8px] z-10 w-10 h-10 bg-[#FF0579] text-white rounded-full flex items-center justify-center hover:opacity-80 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
