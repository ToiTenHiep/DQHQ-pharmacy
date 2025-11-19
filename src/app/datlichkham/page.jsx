"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function DoctorPage() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDays, setShowDays] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("chuyenkhoa");

  const times = [
    "7:00 - 8:00",
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ];

  const today = new Date();
  const [currentMonth, setMonth] = useState(today.getMonth() + 1);
  const [currentYear, setYear] = useState(today.getFullYear());

  const monthNames = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const startDay = new Date(currentYear, currentMonth - 1, 1).getDay();
  const emptyDays = (startDay + 6) % 7;
  const calendarDays = [
    ...Array(emptyDays).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      month: currentMonth,
    })),
  ];

  // Dữ liệu demo (plain object - không dùng TypeScript types)
  const categories = {
    chuyenkhoa: [
      { id: "ck1", title: "Cơ xương khớp", img: "/images/DOCTOR/untitled-xk-4.jpg" },
      { id: "ck2", title: "Thần kinh", img: "/images/DOCTOR/20201201_104938_270027_he-than-kinh.max-1800x1800.jpg" },
      { id: "ck3", title: "Tim mạch", img: "/images/DOCTOR/benh-tim-mach-2.jpg" },
      { id: "ck4", title: "Tiêu hóa", img: "/images/DOCTOR/20190524_042142_717615_NBI-tieu-hoa.max-800x800.jpg" },
      { id: "ck5", title: "Da liễu", img: "/images/DOCTOR/Thiet-ke-chua-co-ten-5.jpg" },
      { id: "ck6", title: "Nhi khoa", img: "/images/DOCTOR/dieu-duong-nhi-khoa.jfif" },
    ],
    cosoyte: [
      { id: "cs1", title: "BV Bạch Mai", img: "/images/DOCTOR/benh-vien-bach-mai-2-1743741213546945053931.webp" },
      { id: "cs2", title: "BV Việt Đức", img: "/images/DOCTOR/benh-vien-bo-hoang-nguoiduatinvn-8.webp" },
      { id: "cs3", title: "BV Vinmec", img: "/images/DOCTOR/dautu.kinhtechungkhoan.vn-stores-news_dataimages-2025-022025-27-10-in_social-_vinmec-220250227102738.jpg" },
      { id: "cs4", title: "Phòng khám A", img: "/images/DOCTOR/thiet-ke-noi-that-phong-kham-da-khoa-son-duong-04.jpg" },
      { id: "cs5", title: "Phòng khám B", img: "/images/DOCTOR/hinh-anh-phong-kham-mediplus-ivie_f778e2bd_d2bc_4acc_9a94_c084223c0b28.png" },
      { id: "cs6", title: "Phòng khám C", img: "/images/DOCTOR/tieu-chuan-dien-tich-phong-kham-da-khoa.png" },
    ],
    video: [
      { id: "v1", title: "Video: Khám từ xa 1", img: "/images/DOCTOR/vinmec-kham-benh-tu-xa-trong-mua-dich-covid-19.jpg" },
      { id: "v2", title: "Video: Khám từ xa 2", img: "/images/DOCTOR/ket_noi_kham_chua_benh_tu_xa.webp" },
      { id: "v3", title: "Video: Khám từ xa 3", img: "/images/DOCTOR/16-tin-y-hoc-telemed-1647954349847632713892.jpg" },
      { id: "v4", title: "Video: Khám từ xa 4", img: "/images/DOCTOR/huong-dan-kham-chua-benh-tu-xa-tai-tuyen-y-te-co-so_1312165706.jpg" },
      { id: "v5", title: "Video: Khám từ xa 5", img: "/images/DOCTOR/IMG_0112.jpg" },
      { id: "v6", title: "Video: Khám từ xa 6", img: "/images/DOCTOR/telemedicine-2.jpg" },
    ],
  };

  const leftItems = [
    { key: "chuyenkhoa", icon: "/images/Danhmuc/medical-search-diagnosis.png", label: "Chuyên khoa" },
    {
      key: "cosoyte",
      icon: "/images/Danhmuc/microscope-observation-sciene.png",
      label: "Cơ sở y tế nổi bật",
    },
    { key: "video", icon: "/images/Danhmuc/brain-cognitive--health-medical-brain-cognitive-specialities.png", label: "Bác sĩ từ xa qua video" },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98 },
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans text-[#0441E7] flex justify-center pt-[120px]">
      <div className="w-[1440px] px-[160px] py-8">
        <h1 className="text-2xl font-extrabold text-[#0441E7] mb-8">
          BÁC SĨ DQHQ
        </h1>

        {/* Top Info Row */}
        <div className="grid grid-cols-5 gap-6">
          <div className="bg-[#0441E7] rounded-[10px] w-full h-[260px] flex items-center justify-center text-white font-semibold text-center text-base">
            Thông tin bác sĩ
          </div>

          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-white border border-[#FF0579] rounded-[10px] w-full h-[260px] flex flex-col items-center justify-between py-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-[180px] h-[180px] rounded-md overflow-hidden bg-gray-100">
                <Image
                  src={`/images/DOCTOR/dt1.jpg`}
                  alt={`Bác sĩ ${n}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <Button className="text-[#FF0579] text-sm border border-[#FF0579] bg-transparent hover:bg-[#FF0579] hover:text-white rounded-full px-5 py-1.5">
                Liên hệ ngay
              </Button>
            </div>
          ))}
        </div>

        {/* Doctor Detail */}
        <div className="mt-12 bg-white rounded-[10px] p-8 flex flex-col md:flex-row justify-between shadow-sm gap-8">
          <div className="flex flex-col w-full gap-4 md:w-1/2">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 overflow-hidden bg-gray-200 rounded-full">
                <Image
                  src="/images/DOCTOR/dt1.jpg"
                  alt="avatar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="font-bold text-[#0441E7] text-lg leading-snug">
                  PGS. TS. BSCKII. TTƯT Hoàng Công Quỳnh
                </h2>
                <div className="flex flex-wrap gap-2 mt-2 text-xs font-medium">
                  <span className="bg-[#0441E7] text-[#FFFFFF] px-3 py-1 rounded-full">
                    Viện Thần kinh
                  </span>
                  <span className="bg-[#0441E7] text-[#FFFFFF] px-3 py-1 rounded-full">
                    Chấn thương
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#042222] leading-relaxed">
              Bác sĩ có 35 năm kinh nghiệm trong lĩnh vực Cột sống, thần kinh,
              cơ xương khớp. Phó chủ tịch hội Phẫu thuật cột sống Việt Nam.
              Khám từ 17 tuổi trở lên.
            </p>

            <p className="text-sm">
              <span className="font-semibold">Giá khám:</span>{" "}
              <span className="text-[#FF0579]">500.000 VNĐ</span>
            </p>

            <p className="text-sm">
              <span className="font-semibold">Địa chỉ khám:</span>
              <span className=" text-[#FF0579]">
                Phòng khám Spinetech Clinic, Tòa nhà GP, 257 Giải Phóng, Hà Nội.
              </span>
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="font-semibold mb-3 text-[#0441E7] text-base">
              Lịch khám
            </h3>

            <div className="mb-4">
              <Button
                onClick={() => setShowDays(!showDays)}
                className="text-[#0441E7] text-sm border border-[#0441E7] bg-transparent hover:bg-[#0441E7] hover:text-white rounded-full px-5 py-1.5 mb-3"
              >
                {showDays ? "Ẩn lịch" : "Chọn ngày"}
              </Button>

              {showDays && (
                <div className="border border-[#FFF1F8] rounded-xl p-4 bg-[#FFF1F8] shadow-sm w-full max-w-sm">
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={() =>
                        setMonth((prev) => (prev === 1 ? 12 : prev - 1))
                      }
                      className="text-[#0441E7] hover:text-[#0441E7] text-lg font-bold"
                    >
                      ‹
                    </button>
                    <span className="text-base font-semibold text-[#0441E7]">
                      {monthNames[currentMonth - 1]} {currentYear}
                    </span>
                    <button
                      onClick={() =>
                        setMonth((prev) => (prev === 12 ? 1 : prev + 1))
                      }
                      className="text-[#0441E7] hover:text-[#0441E7] text-lg font-bold"
                    >
                      ›
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-sm text-center">
                    {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
                      <div key={d} className="text-[#FF0579] font-semibold">
                        {d}
                      </div>
                    ))}

                    {calendarDays.map((day, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDay(day)}
                        disabled={!day}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                          !day
                            ? "opacity-0 cursor-default"
                            : selectedDay?.day === day.day &&
                              selectedDay?.month === currentMonth
                            ? "bg-[#0441E7] text-white border border-[#0441E7]"
                            : "bg-white text-[#0441E7] border border-[#0441E7] hover:bg-[#EAF7FF]"
                        }`}
                      >
                        {day?.day}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-[#333] mb-2">Chọn giờ</h4>
              <div className="flex flex-wrap gap-2">
                {times.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTime(t)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      selectedTime === t
                        ? "bg-[#0441E7] text-white border-[#0441E7]"
                        : "bg-white text-[#0441E7] border-[#0441E7] hover:bg-[#0441E7] hover:text-[#ffffff]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <Button
              disabled={!selectedDay || !selectedTime}
              className={`w-full text-white font-semibold rounded-full py-3 text-sm ${
                selectedDay && selectedTime
                  ? "bg-[#0441E7] hover:bg-[#0139d3]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {selectedDay && selectedTime
                ? "Đặt lịch khám"
                : "Chọn ngày và giờ để đặt lịch"}
            </Button>
          </div>
        </div>

        {/* Nền xanh full width block */}
        <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-[1440px] h-[500px] py-12 mt-12">
          <div className="flex justify-between px-[160px] items-center pr-28">
            <div className="bg-[#0441E7] rounded-[10px] p-4 gap-x-4 flex flex-col items-center justify-between w-[278px] h-[255px] gap-4">
              {leftItems.map((it) => {
                const active = selectedCategory === it.key;
                return (
                  <motion.div
                    key={it.key}
                    layout
                    onClick={() => setSelectedCategory(it.key)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-white rounded-[10px] flex items-center justify-between px-4 shadow-sm hover:shadow-md transition-all cursor-pointer w-[224px] h-[48px] ${
                      active ? "ring-2 ring-[#FF0579]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#0441E7] font-semibold text-sm">
                      <div className="relative w-4 h-4">
                        <Image
                          src={it.icon}
                          alt={it.label}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <span>{it.label}</span>
                    </div>
                    <div
                      className={`w-7 h-7 bg-[#0441E7] text-white flex items-center justify-center rounded-full text-base transform ${
                        active ? "rotate-90" : ""
                      }`}
                    >
                      →
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-x-4 pr-10 gap-y-4 w-[870px] h-[255px] items-center">
              <AnimatePresence mode="popLayout">
                {categories[selectedCategory].map((item) => (
                  <motion.div
                    key={item.id + selectedCategory}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={boxVariants}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-[10px] overflow-hidden border border-[#E0E0E0] shadow-sm hover:shadow-md transition-all cursor-pointer w-[253px] h-[117px] flex flex-col"
                  >
                    <div className="relative flex-1 w-full">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 h-[40px] bg-white">
                      <div className="relative w-4 h-4">
                        <Image
                          src="/images/Danhmuc/medical-cross-sign-healthcare.png"
                          alt="icon"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <span className="font-semibold text-[#0441E7] text-sm">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
