"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function DiseaseByTargetZoom() {
  const [selectedId, setSelectedId] = useState("nam");

  const targets = [
    {
      id: "nam",
      title: "Bệnh nam giới",
      image:
        "/images/Benhtheodoituong/man-sits-bed-with-stomachache-presses-his-stomach-with-his-hands.jpg",
      diseases: [
        "Loãng xương ở nam",
        "Di tinh, mộng tinh",
        "Hẹp bao quy đầu",
        "Yếu sinh lý",
      ],
    },
    {
      id: "nu",
      title: "Bệnh nữ giới",
      image:
        "/images/Benhtheodoituong/uncomfortable-woman-sits-bed-has-medicine-table.jpg",
      diseases: [
        "Rối loạn nội tiết",
        "Thiếu máu",
        "Đau bụng kinh",
        "Loãng xương",
      ],
    },
    {
      id: "old",
      title: "Bệnh người già",
      image:
        "/images/Benhtheodoituong/old-senior-asian-male-hand-nasal-swab-testing-rapid-tests-by-himself-detection-sars-co2-virus-home-isolate-quarantine-concept.jpg",
      diseases: ["Tăng huyết áp", "Tim mạch", "Tiểu đường", "Đau khớp"],
    },
    {
      id: "child",
      title: "Bệnh trẻ em",
      image: "/images/Benhtheodoituong/child-wearing-face-mask.jpg",
      diseases: ["Sốt virus", "Tay chân miệng", "Ho gà", "Suyễn"],
    },
  ];

  const layoutSpring = { type: "spring", stiffness: 250, damping: 25 };

  return (
    <section className="bg-[#FFFDF8] w-full flex flex-col items-center justify-center font-[Montserrat] py-8">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <h2 className="text-[20px] sm:text-[24px] font-extrabold text-[#0441E7] uppercase mb-6">
          Bệnh theo đối tượng
        </h2>

        {/* Container: mobile -> horizontal scroll; md+ -> show as row with spacing */}
        <div className="w-full">
          <div
            className="flex gap-4 py-2 overflow-x-auto md:gap-5 md:overflow-visible"
            role="list"
          >
            {targets.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ layout: layoutSpring }}
                  onClick={() => setSelectedId(item.id)}
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }
                  }}
                  className={`flex-shrink-0 cursor-pointer rounded-[10px] p-3 font-semibold flex flex-col items-start shadow-sm transition-all duration-300 ease-out
                    ${
                      isSelected
                        ? "bg-white border border-[#0441E7] text-[#0441E7] md:w-[350px] w-[85%]"
                        : "bg-[#0441E7] text-white md:w-[220px] w-[65%]"
                    }`}
                >
                  <motion.h4
                    layout="position"
                    className={`text-[16px] font-bold mb-3 ${
                      isSelected ? "text-[#0441E7]" : "text-white"
                    }`}
                  >
                    {item.title.replace("Bệnh ", "")}
                  </motion.h4>

                  <motion.div
                    layout="position"
                    className={`w-full rounded-[10px] flex items-center justify-center transition-all duration-500 overflow-hidden
                      ${isSelected ? "bg-[#F4F8FF] h-[180px]" : "bg-[#00B3FE] h-[220px]"}`}
                  >
                    {/* Next.js Image để tối ưu, giữ aspect ratio bằng object-cover */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full rounded-[10px]"
                      priority={false}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between flex-1 w-full mt-3 text-left"
                      >
                        <ul className="list-disc list-inside text-[#0441E7] text-[14px] leading-relaxed m-0 mb-3">
                          {item.diseases.map((d, i) => (
                            <li key={i} className="mb-1">
                              {d}
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-end w-full">
                          <button className="border border-[#0441E7] text-[#0441E7] text-[13px] px-4 py-2 rounded-full hover:bg-[#0441E7] hover:text-white transition">
                            Tìm hiểu thêm
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mô tả chung */}
        <motion.div
          layout
          transition={{ layout: layoutSpring }}
          className="bg-[#FF0579] text-white rounded-[10px] p-4 text-[13px] leading-relaxed shadow-sm mt-6"
        >
          Khám phá danh mục bệnh theo từng đối tượng: nam giới, nữ giới, người
          già và trẻ em – mỗi nhóm có đặc điểm sức khỏe riêng, giúp bạn chọn sản
          phẩm phù hợp nhất.
        </motion.div>
      </div>
    </section>
  );
}
