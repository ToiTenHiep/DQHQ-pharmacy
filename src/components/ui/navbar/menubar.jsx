"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuBar() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeToggle, setActiveToggle] = useState(0);

  // ===============================
  //   DỮ LIỆU DANH MỤC CHI TIẾT
  // ===============================
  const categories = [
  {
    name: "Thực phẩm chức năng",
    toggles: [
      {
        name: "Vitamin & khoáng chất",
        related: [
          { name: "Vitamin tổng hợp A-Z", image: "/images/Navbar/buonavit-baby-vitamin-tong-hop-cho-tre-tu-0-thang-tuoi_935d8897b23e43a5bb0475c7b08b6f26_grande.png" },
          { name: "Canxi & D3 viên sủi", image: "/images/Navbar/64c837f6c5ca66ab7e3ed67a992a1b07.jpg_720x720q80.jpg" },
          { name: "Kẽm & Magie", image: "/images/Navbar/1_uk8r-9t.png" },
          { name: "Vitamin nhóm B", image: "/images/Navbar/9bca9715-048b-43c4-b013-95fe845f.png" },
          { name: "Sắt & Axit folic", image: "/images/Navbar/momfolic-zt.jpg" },
          { name: "Vitamin C các loại", image: "/images/Navbar/Vitamin-C-Chewable-Tablet-100mg.png" },
        ],
        featured: [
          { name: "Vitamin tổng hợp Centrum", image: "/images/Navbar/product_image_-_2024-03-13t161932.527_dfa09ec8249b42ce8857ddc4528d98d5_master.png" },
          { name: "Canxi Corbiere 10ml", image: "/images/Navbar/thuoc-canxi-corbie-extra-10ml-sanofi-bo-sung-caxi-62f9b5d893f94.jpg" },
          { name: "Dầu cá Omega 3", image: "/images/Navbar/1680-p2-1541382996.jpg" },
          { name: "Axit folic 400mcg", image: "/images/Navbar/00022515_puritans_pride_folic_acid_400mcg_250v_7182_60ab_large_e057b15ec7.png" },
        ],
      },
      {
        name: "Dầu cá, Omega 3, DHA",
        related: [
          { name: "Dầu cá Alaska Omega 3" },
          { name: "Viên uống DHA BioIsland" },
          { name: "Dầu cá Blackmores 1000mg" },
        ],
        featured: [
          { name: "Viên uống Omega 3 Puritan" },
          { name: "DHA cho trẻ em Healthy Care" },
        ],
      },
      {
        name: "Sắt & Axit folic",
        related: [
          { name: "Viên sắt Ferrovit" },
          { name: "Axit folic 400mcg" },
        ],
        featured: [
          { name: "Sắt Nature Made" },
          { name: "Axit Folic Blackmores" },
        ],
      },
    ],
  },

  {
    name: "Dược mỹ phẩm",
    toggles: [
      {
        name: "Chăm sóc da",
        related: [
          { name: "Sữa rửa mặt dịu nhẹ" },
          { name: "Kem dưỡng ẩm ban đêm" },
          { name: "Serum Vitamin C" },
        ],
        featured: [
          { name: "Kem chống nắng La Roche-Posay" },
          { name: "Serum The Ordinary" },
        ],
      },
      {
        name: "Chống nắng",
        related: [
          { name: "Kem chống nắng SPF50+" },
          { name: "Xịt chống nắng Body" },
        ],
        featured: [
          { name: "Kem chống nắng Anessa" },
          { name: "Xịt chống nắng Bioderma" },
        ],
      },
    ],
  },

  {
    name: "Thuốc",
    toggles: [
      {
        name: "Giảm đau, hạ sốt",
        related: [
          { name: "Paracetamol 500mg" },
          { name: "Ibuprofen 200mg" },
        ],
        featured: [
          { name: "Panadol Extra" },
          { name: "Efferalgan viên sủi" },
        ],
      },
      {
        name: "Thuốc cảm cúm",
        related: [
          { name: "Decolgen Forte" },
          { name: "Rhumenol Flu" },
        ],
        featured: [
          { name: "Coldacmin Flu" },
          { name: "Tiffy siro cảm cúm" },
        ],
      },
    ],
  },

  {
    name: "Chăm sóc cá nhân",
    toggles: [
      {
        name: "Vệ sinh cá nhân",
        related: [
          { name: "Bàn chải điện Oral-B" },
          { name: "Kem đánh răng Sensodyne" },
        ],
        featured: [
          { name: "Nước súc miệng Listerine" },
          { name: "Bàn chải P/S" },
        ],
      },
      {
        name: "Chăm sóc tóc",
        related: [
          { name: "Dầu gội Head & Shoulders" },
          { name: "Dầu xả TRESemmé" },
        ],
        featured: [
          { name: "Serum dưỡng tóc Olexrs" },
          { name: "Tinh dầu Moroccanoil" },
        ],
      },
    ],
  },

  {
    name: "Thiết bị y tế",
    toggles: [
      {
        name: "Đo huyết áp",
        related: [
          { name: "Máy đo huyết áp Omron" },
          { name: "Vòng đo cổ tay Beurer" },
        ],
        featured: [
          { name: "Omron Hem 8712" },
          { name: "Beurer BM28" },
        ],
      },
      {
        name: "Đo đường huyết",
        related: [
          { name: "Máy đo đường huyết Accu-Chek" },
          { name: "Que thử đường huyết On Call Plus" },
        ],
        featured: [
          { name: "Accu-Chek Instant" },
          { name: "Contour Plus One" },
        ],
      },
    ],
  },

  {
    name: "Tiêm chủng",
    toggles: [
      {
        name: "Vắc-xin cho trẻ em",
        related: [
          { name: "Vắc-xin 6 trong 1" },
          { name: "Vắc-xin viêm gan B" },
        ],
        featured: [
          { name: "Vắc-xin cúm" },
          { name: "Vắc-xin HPV" },
        ],
      },
      {
        name: "Vắc-xin cho người lớn",
        related: [
          { name: "Vắc-xin phế cầu" },
          { name: "Vắc-xin viêm gan A" },
        ],
        featured: [
          { name: "Vắc-xin Zona" },
          { name: "Vắc-xin viêm phổi" },
        ],
      },
    ],
  },

  {
    name: "Blog - Góc sức khỏe",
    toggles: [
      {
        name: "Tin tức sức khỏe",
        related: [
          { name: "Dinh dưỡng & sức khỏe" },
          { name: "Cách tăng sức đề kháng" },
        ],
        featured: [
          { name: "Bí quyết sống khỏe mỗi ngày" },
          { name: "Top 10 thực phẩm tốt cho tim mạch" },
        ],
      },
    ],
  },
];


  const otherMenuItems = [
    { href: "/tuvanmuathuoc", icon: "ri-capsule-line", label: "Tư vấn mua thuốc" },
    { href: "/kiemtrasuckhoe", icon: "ri-heart-pulse-line", label: "Kiểm tra sức khỏe" },
    { href: "/datlichkham", icon: "ri-calendar-line", label: "Đặt lịch khám" },
    { href: "/timnhathuoc", icon: "ri-map-pin-2-line", label: "Tìm nhà thuốc" },
    { href: "/lienheduocsi", icon: "ri-user-3-line", label: "Liên hệ dược sĩ" },
  ];

  const active = categories[activeCategory];
  const currentToggle = active.toggles[activeToggle];

  // ===============================
  //        GIAO DIỆN CHÍNH
  // ===============================
  return (
    <div className="w-full border-t border-[#FF0579] bg-[#FFFDF8] relative">
      <div className="w-[1440px] mx-auto flex px-[45px] py-[10px]">
        {/* Nút mở dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="h-[30px] flex items-center gap-2 px-4 py-2 border border-[#FF0579] rounded-full bg-[#ffffff] text-[#FF0579] text-[12px] font-semibold hover:bg-[#FF0579] hover:text-white transition"
          >
            <i className="ri-menu-line text-[16px]"></i>
            Danh mục sản phẩm
            <ChevronDown
              size={14}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 mt-3 flex bg-white rounded-[10px] shadow-xl z-50 w-[1310px] overflow-hidden"
              >
                {/* Cột trái */}
                <div className="w-[240px] bg-[#0441E7] p-3 flex flex-col gap-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveCategory(idx);
                        setActiveToggle(0);
                      }}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-[10px] text-left text-[12px] font-semibold transition ${
                        activeCategory === idx
                          ? "bg-white text-[#0441E7]"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      <span>
                        <i className="mr-2 ri-capsule-line"></i>
                        {cat.name}
                      </span>
                      <i
                        className={`ri-check-line text-xs ${
                          activeCategory === idx ? "text-[#0441E7]" : "text-transparent"
                        }`}
                      ></i>
                    </button>
                  ))}
                </div>

                {/* Phần phải */}
                <div className="flex-1 bg-[#F8FFFF] p-5 flex flex-col justify-start h-full">
                  {/* Hàng 1: toggles */}
                  <div className="flex flex-wrap gap-2 border-b border-[#FF0579] bg-[#0441E7] p-3 rounded-[10px]">
                    {active.toggles.map((t, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveToggle(i)}
                        className={`px-3 py-1 rounded-full border text-[12px] font-medium transition ${
                          i === activeToggle
                            ? "bg-[#FF0579] text-white border-[#ffffff]"
                            : "bg-white text-[#0441E7] border-[#ffffff] hover:bg-[#ffe3f0]"
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>

                  {/* Hàng 2: danh mục liên quan */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentToggle?.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="flex gap-8 flex-nowrap overflow-x-auto py-3 border-b border-[#FF0579]"
                    >
                      {(currentToggle?.related || []).map((rel, i) => (
                        <Link
                          key={i}
                          href="#"
                          className="flex flex-col items-center w-[100px] shrink-0 cursor-pointer"
                        >
                          <div className="w-[90px] h-[90px] rounded-[10px] mb-2 overflow-hidden shadow-sm">
                            <img
                              src={rel.image || "/images/default-placeholder.png"}
                              alt={rel.name}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          <span className="text-[12px] text-[#0441E7] text-left leading-tight">
                            {rel.name}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* Hàng 3: sản phẩm nổi bật */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentToggle?.name + "-featured"}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#0441E7] text-[13px]">
                          SẢN PHẨM NỔI BẬT
                        </h4>
                        <Link
                          href="#"
                          className="text-[#0441E7] text-[12px] font-semibold"
                        >
                          Xem thêm •
                        </Link>
                      </div>

                      <div className="flex gap-3 overflow-x-auto">
                        {(currentToggle?.featured || []).map((prod, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="min-w-[140px] max-w-[160px] bg-white rounded-[10px] flex flex-col justify-between items-center p-2 hover:shadow-md transition"
                          >
                            <div className="w-[140px] h-[140px] rounded-md mb-2 overflow-hidden shadow-sm">
                              <img
                                src={prod.image || "/images/default-placeholder.png"}
                                alt={prod.name}
                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                              />
                            </div>
                            <span className="text-[12px] text-center text-[#0441E7] font-medium px-2 leading-tight line-clamp-2">
                              {prod.name}
                            </span>
                            <button className="text-[#FF0579] text-[11px] mt-2 hover:underline">
                              Xem ngay
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MENU NGANG CHÍNH */}
        <div className="flex justify-center items-center divide-x divide-[#E4E4E4] text-[#0441E7] font-semibold text-[12px] ml-8">
          {otherMenuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-2 px-6 hover:text-[#FF0579] transition-all"
            >
              <i className={`${item.icon} text-[16px]`}></i>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
