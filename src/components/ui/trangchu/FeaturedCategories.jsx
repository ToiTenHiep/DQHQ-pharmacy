"use client";
import { useState, useMemo, useRef } from "react";
import { useEffect } from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Activity,
  HeartPulse,
  Microscope,
  Stethoscope,
  Cross,
  Biohazard,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

export default function FeaturedCategories() {
  const [page, setPage] = useState(1);
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 20 });
  const scale = useTransform(smoothY, [0, 300], [1, 1.1]);

  // Danh sách icon có thể dùng trong nền
  const iconSet = [Biohazard, HeartPulse, Microscope, Stethoscope, Activity, Cross];

  // Tạo vị trí icon phân tán đều, không bị trùng
  const [floatingIcons, setFloatingIcons] = useState([]);

    useEffect(() => {
      const rows = 6;
      const cols = 8;
      const total = rows * cols;
      const icons = [];

      for (let i = 0; i < total; i++) {
        const Icon = iconSet[i % iconSet.length];
        const row = Math.floor(i / cols);
        const col = i % cols;

        icons.push({
          Icon,
          top: `${row * (100 / rows) + Math.random() * 5}%`,
          left: `${col * (100 / cols) + Math.random() * 5}%`,
          size: 18 + Math.random() * 22,
          delay: Math.random() * 4,
          duration: 6 + Math.random() * 6,
          opacity: 0.12 + Math.random() * 0.2,
        });
      }

      setFloatingIcons(icons);
    }, []);


  const allCategories = [
    { name: "Sức khỏe sinh sản", products: 32, icon: "/images/Danhmuc/health-care-2--health-medical-hospital-heart-care-symbol.png" },
    { name: "Mắt", products: 21, icon: "/images/Danhmuc/eye-optic--health-medical-eye-optic.png" },
    { name: "Tai - Mũi - Họng", products: 28, icon: "/images/Danhmuc/ear-hearing--health-medical-hearing-ear.png" },
    { name: "Hô hấp", products: 35, icon: "/images/Danhmuc/medical-cross-symbol--health-sign-medical-symbol-hospital-emergency.png" },
    { name: "Ký sinh trùng", products: 18, icon: "/images/Danhmuc/bacteria-virus-cells-biology.png" },
    { name: "Tâm thần", products: 14, icon: "/images/Danhmuc/brain-cognitive--health-medical-brain-cognitive-specialities.png" },
    { name: "Cơ - Xương - Khớp", products: 26, icon: "/images/Danhmuc/stethoscope--instrument-health-medical-stethoscope.png" },
    { name: "Ung thư", products: 12, icon: "/images/Danhmuc/virus-antivirus--health-medical-covid19-flu-influenza-virus-antivirus.png" },
    { name: "Truyền nhiễm", products: 19, icon: "/images/Danhmuc/flu-mask--health-medical-hospital-mask-flu-vaccine-protection.png" },
    { name: "Nội tiết", products: 30, icon: "/images/Danhmuc/medical-search-diagnosis.png" },
    { name: "Thận - Tiết niệu", products: 16, icon: "/images/Danhmuc/medical-cross-sign-healthcare.png" },
    { name: "Dị ứng", products: 20, icon: "/images/Danhmuc/petri-dish-lab-equipment.png" },
    { name: "Da - Tóc - Móng", products: 27, icon: "/images/Danhmuc/nurse-assistant-emergency.png" },
    { name: "Tim mạch", products: 33, icon: "/images/Danhmuc/heart-rate-pulse-graph.png" },
    { name: "Máu", products: 15, icon: "/images/Danhmuc/blood-bag-donation.png" },
    { name: "Vitamin", products: 22, icon: "/images/Danhmuc/bandage--health-medical-hospital-medicine-capsule-bandage-vaccine.png" },
    { name: "Tiểu đường", products: 17, icon: "/images/Danhmuc/microscope-observation-sciene.png" },
    { name: "Răng - Hàm - Mặt", products: 25, icon: "/images/Danhmuc/tooth--health-medical-tooth.png" },
  ];

  {/* === KHỐI MÔ TẢ (SLIDER) === */}
const descriptions = [
  {
    text: "Khám phá các danh mục nổi bật với sản phẩm chăm sóc sức khỏe và điều trị chuyên biệt cho từng cơ quan trong cơ thể.",
    img: "/images/Doctor-01.png",
  },
  {
    text: "Tư vấn sức khỏe nhanh chóng và chính xác cùng đội ngũ chuyên gia y tế hàng đầu.",
    img: "/images/Doctor-03-02-01.png",
  },
  {
    text: "Theo dõi và quản lý sức khỏe cá nhân mọi lúc mọi nơi với DQHQ.",
    img: "/images/Doctor-04-01-01.png",
  },
];

const [descIndex, setDescIndex] = useState(0);
const handleNextDesc = () =>
  setDescIndex((prev) => (prev + 1) % descriptions.length);

  const categoriesPerPage = 8;
  const totalPages = Math.ceil(allCategories.length / categoriesPerPage);

  const categoryGroups = Array.from({ length: totalPages }, (_, i) =>
    allCategories.slice(i * categoriesPerPage, (i + 1) * categoriesPerPage)
  );

  const handleNext = () => setPage((prev) => (prev === totalPages ? prev : prev + 1));
  const handlePrev = () => setPage((prev) => (prev === 1 ? prev : prev - 1));

  // Theo dõi hiển thị của khối mô tả
  const descRef = useRef(null);
  const isInView = useInView(descRef, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full h-[540px] flex flex-col items-center justify-center overflow-hidden font-[Montserrat]">
      {/* 🩺 Animated Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFFDF8] via-[#FFFDF8] to-[#FFFDF8]"
      >
        {floatingIcons.map(({ Icon, top, left, size, delay, duration, opacity }, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FF0579]"
            style={{ top, left, opacity }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} strokeWidth={1.2} />
          </motion.div>
        ))}
      </motion.div>

      {/* Nội dung chính */}
      <div className="relative z-10 w-full max-w-[1117px]">
        <h2 className="text-[22px] font-extrabold text-[#0441E7] mb-6 uppercase text-left">
          Danh mục nổi bật
        </h2>

        <div className="flex bg-white rounded-[10px] shadow-sm overflow-hidden w-[1117px] h-[360px]">
          {/* === CỘT ĐIỀU HƯỚNG === */}
          <div className="flex flex-col justify-between items-center w-[50px] py-5 bg-[#ffffff] rounded-l-2xl">
            <div
              className="w-[30px] h-[80px] bg-[#0441E7] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90"
              onClick={handlePrev}
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </div>

            <div className="flex flex-col items-center gap-3">
              {Array.from({ length: totalPages }, (_, n) => (
                <button
                  key={n}
                  onClick={() => setPage(n + 1)}
                  className={`w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-200 
                    ${
                      n + 1 === page
                        ? "bg-[#0441E7] border-[#0441E7] text-white text-[12px]"
                        : "border-[#0441E7] text-[#0441E7] hover:bg-[#ffc4e0] text-[12px]"
                    }`}
                >
                  {n + 1}
                </button>
              ))}
            </div>

            <div
              className="w-[30px] h-[80px] bg-[#0441E7] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90"
              onClick={handleNext}
            >
              <ArrowDown className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* === DANH SÁCH DANH MỤC === */}
          <div className="relative flex-1 bg-[#F2F6FF] px-2 py-2 w-[560px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-x-6 gap-y-6"
              >
                {categoryGroups[page - 1].map((cat, i) => (
                  <div
                    key={i}
                    className="bg-[#ffffff] flex items-center gap-[15px] border border-[#FF0579] text-[#FF0579] rounded-full px-4 py-2 w-[220px] h-[48px] cursor-pointer hover:bg-[#FF0579] hover:text-white transition"
                  >
                    <img src={cat.icon} alt={cat.name} className="object-contain w-6 h-6" />
                    <div className="flex flex-col leading-tight">
                      <span className="font-semibold text-[15px]">{cat.name}</span>
                      <span className="text-[12px] opacity-80">{cat.products} sản phẩm</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* === KHỐI MÔ TẢ === */}
            <div
              ref={descRef}
              className="relative flex flex-col items-center justify-between bg-[#0441E7] w-[536px] p-6 rounded-r-2xl text-[#0441E7] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={descIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative flex items-center justify-between w-full h-full"
                >
                  {/*BOX THOẠI TRẮNG */}
                  <div className="relative bg-white text-[#FF0579] rounded-2xl p-5 w-[270px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] leading-relaxed text-[15px] font-medium before:content-[''] before:absolute before:top-1/2 before:right-[-12px] before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-l-[12px] before:border-t-transparent before:border-b-transparent before:border-l-white">
                    {descriptions[descIndex].text}
                  </div>

                  {/*ẢNH NHÂN VẬT */}
                  <img
                    src={descriptions[descIndex].img}
                    alt="Bác sĩ DQHQ"
                    className="w-[230px] h-[330px] object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Nút mũi tên */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                onClick={handleNextDesc}
                className="absolute bottom-5 left-6 w-[36px] h-[36px] bg-white text-[#FF0579] rounded-full flex items-center justify-center shadow hover:bg-[#0441E7] hover:text-white transition"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
        </div>
      </div>
    </section>
  );
}
