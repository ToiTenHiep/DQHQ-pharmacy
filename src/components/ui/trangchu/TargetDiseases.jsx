"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Baby, HeartPulse, Stethoscope, Activity, Users } from "lucide-react";

const targets = [
  {
    id: 1,
    title: "Nam giới",
    icon: <User size={36} />,
    color: "#00C4FF",
  },
  {
    id: 2,
    title: "Nữ giới",
    icon: <HeartPulse size={36} />,
    color: "#00C4FF",
  },
  {
    id: 3,
    title: "Người già",
    icon: <User size={36} />,
    color: "#00C4FF",
  },
  {
    id: 4,
    title: "Trẻ em",
    icon: <Baby size={36} />,
    color: "#00C4FF",
  },
];

export default function TargetDiseases() {
  return (
    <section className="bg-[#E5F2FF] py-16 font-[Montserrat]">
      <div className="max-w-[1208px] mx-auto px-4">
        {/* Tiêu đề */}
        <h2 className="text-[28px] font-extrabold text-[#001B48] uppercase mb-8 text-center">
          BỆNH THEO ĐỐI TƯỢNG
        </h2>

        {/* Nội dung chính */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bệnh nam giới */}
          <div className="flex-1 max-w-[300px] bg-white p-4 rounded-lg shadow-md border border-gray-200 mx-auto md:mx-0">
            <h3 className="font-semibold mb-4 text-[#001B48]">Bệnh nam giới</h3>
            <ul className="list-disc list-inside text-sm mb-4 text-[#333]">
              <li>Loãng xương ở nam</li>
              <li>Di tỉnh, mộng tỉnh</li>
              <li>Hẹp bao quy đầu</li>
              <li>Yếu sinh lý</li>
            </ul>
            <button className="w-full bg-[#00CFCF] text-white px-4 py-2 rounded hover:bg-[#009999] text-sm">
              Tìm hiểu thêm
            </button>
          </div>

          {/* Phần bên phải: các ô đối tượng và mô tả */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Các ô đối tượng */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {targets.map((target, i) => (
                <motion.div
                  key={target.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#00C4FF33] border border-[#00C4FF] rounded-[16px] p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                    style={{ backgroundColor: "#00C4FF33" }}
                  >
                    <div style={{ color: "#00C4FF" }}>{target.icon}</div>
                  </div>
                  <h4 className="text-sm font-semibold text-[#001B48]">{target.title}</h4>
                </motion.div>
              ))}
            </div>

            {/* Mô tả văn bản */}
            <div className="bg-gradient-to-r from-[#4e00ff] to-[#6600ff] p-4 rounded-lg text-white mt-4">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
