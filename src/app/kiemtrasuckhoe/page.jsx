"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Biohazard,
  HeartPulse,
  Microscope,
  Stethoscope,
  Activity,
  Cross,
} from "lucide-react";

export default function KiemTraSucKhoe() {
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const iconSet = [Biohazard, HeartPulse, Microscope, Stethoscope, Activity, Cross];
    const icons = [];

    // tạo 20 icon ngẫu nhiên cho nền
    for (let i = 0; i < 20; i++) {
      const Icon = iconSet[i % iconSet.length];
      icons.push({
        Icon,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 20 + Math.random() * 20,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 6,
        opacity: 0.01 + Math.random() * 0.6,
      });
    }

    setFloatingIcons(icons);
  }, []);

  const assessments = [
    {
      title: "Đánh giá nguy cơ mắc bệnh hen",
      image: "/images/iconkiemtrasuckhoe/Group-18.png",
    },
    {
      title: "Đánh giá nguy cơ mắc COPD (phổi tắc nghẽn mạn tính)",
      image: "/images/iconkiemtrasuckhoe/Group-15.png",
    },
    {
      title: "Đánh giá nguy cơ tăng huyết áp",
      image: "/images/iconkiemtrasuckhoe/Group-22.png",
    },
    {
      title: "Đánh giá nguy cơ tiểu đường type 2",
      image: "/images/iconkiemtrasuckhoe/Group-9.png",
    },
    {
      title: "Đánh giá nguy cơ loãng xương",
      image: "/images/iconkiemtrasuckhoe/Group-1.png",
    },
    {
      title: "Đánh giá tình trạng trào ngược dạ dày - thực quản",
      image: "/images/iconkiemtrasuckhoe/Group-10.png",
    },
    {
      title: "Đánh giá sức khỏe tim mạch tổng quát",
      image: "/images/iconkiemtrasuckhoe/Group-6.png",
    },
    {
      title: "Đánh giá nguy cơ lạm dụng thuốc cắt cơn hen",
      image: "/images/iconkiemtrasuckhoe/Group-12.png",
    },
    {
      title: "Đánh giá tình trạng căng thẳng - stress",
      image: "/images/iconkiemtrasuckhoe/Group-24.png",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-[100px] font-[Montserrat] overflow-hidden">
      {/* === NỀN ĐỘNG === */}
      <div className="relative flex flex-col items-center justify-center w-full py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#FFFDF8] via-[#FFFDF8] to-[#FFFDF8]"
        >
          {floatingIcons.map(({ Icon, top, left, size, delay, duration, opacity }, i) => (
            <motion.div
              key={i}
              className="absolute text-[#FF0579]"
              style={{ top, left, opacity }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, -8, 0],
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

        {/* === NỘI DUNG CHÍNH === */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-[24px] font-extrabold text-[#0441E7] mb-3 text-center uppercase tracking-wide">
            Kiểm tra sức khỏe
          </h1>

          <p className="text-sm text-[#FF0579] mb-6 text-center leading-tight">
            Đánh giá sức khỏe dựa trên <br /> những câu hỏi
          </p>

          {/* Khối xanh */}
          <div className="bg-[#0441E7] rounded-[10px] w-full max-w-[1000px] h-[350px] flex justify-center items-center shadow-sm">
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-x-10
                gap-y-6
                w-full
                max-w-[900px]
              "
            >
              {assessments.map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[80px] flex items-center px-1 py-5 transition-all duration-300 bg-[#FFFDF8] shadow-md cursor-pointer rounded-xl hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-[70px] h-[70px] mr-3 bg-[#0441E7] rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-medium text-[#0441E7] text-sm leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === PHẦN MÔ TẢ === */}
      <div className="flex justify-center w-full px-6 py-20 bg-[#FFFDF8]">
        <div className="w-full max-w-[1118px] text-[#0441E7] space-y-10">
          <section>
            <h2 className="mb-2 text-lg font-bold">1. Kiểm tra sức khỏe</h2>
            <p className="text-[#0441E7] leading-relaxed">
              Chào mừng bạn đến với tính năng Kiểm tra Sức Khỏe của DQHQ! Chỉ với vài phút trả lời các câu hỏi tâm soát về những vấn đề như hen,
              bệnh phổi tắc nghẽn mạn tính, nguy cơ lạm dụng thuốc cắt cơn trong điều trị hen, trào ngược dạ dày thực quản,... bạn sẽ nhận được
              các đánh giá bước đầu và những lời khuyên hữu ích để đảm bảo sức khỏe tốt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold">2. Miễn trừ trách nhiệm</h2>
            <p className="text-[#0441E7] leading-relaxed">
              Các thông tin từ công cụ tâm soát này chỉ mang tính tham khảo, không thay thế cho chẩn đoán và điều trị của bác sĩ chuyên khoa.
              Nếu biết rõ về tình trạng và nguy cơ mắc bệnh, vui lòng liên hệ ngay với bác sĩ, dược sĩ hoặc chuyên viên y tế để được tư vấn cụ thể.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold">3. Cam kết của DQHQ</h2>
            <p className="text-[#0441E7] leading-relaxed">
              DQHQ cam kết đồng hành cùng bạn trong hành trình sống khỏe. Sứ mệnh của chúng tôi là giúp mọi người dễ dàng tiếp cận các công cụ chăm sóc
              sức khỏe hiện đại, đưa ra những giải pháp chủ động phòng ngừa và nâng cao sức khỏe toàn diện.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
