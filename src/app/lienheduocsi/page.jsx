"use client";
import Image from "next/image";

export default function LienHeDuocSi() {
  return (
    <div className="bg-[#E9F4FF] py-10 pl-16 pr-16 pt-[160px]">
      <div className="max-w-[1440px] mx-auto px-[160px] md:px-20 sm:px-6 flex flex-col lg:flex-row gap-8 justify-between">
        {/* Khối trái */}
        <div className="bg-white rounded-xl shadow-sm flex-1 min-w-[320px] overflow-hidden">
          {/* Header */}
          <div className="bg-[#0441E7] text-center py-2 rounded-t-xl">
            <span className="text-[#FFFFFF] font-semibold text-lg">
              Liên hệ với dược sĩ
            </span>
          </div>

          {/* Nội dung chính */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 pt-10 pb-10">
            <div className="flex items-center gap-4">
              {/* Ảnh đại diện */}
              <div className="w-[60px] h-[60px] bg-gray-300 rounded-full" />

              {/* Tên + mô tả */}
              <div>
                <p className="text-[#0A0A4A] font-bold text-base">
                  Nhà thuốc DQHQ
                </p>
                <p className="text-[#0A0A4A] text-sm opacity-80">
                  Dược phẩm, y tế
                </p>
              </div>
            </div>

            {/* Nút nhắn tin */}
            <button className="bg-[#0441E7] text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition">
              Nhắn tin
            </button>
          </div>

          {/* Gạch ngang */}
          <div className="border-t border-[#FF0579] mx-6"></div>

          {/* Thông tin liên hệ */}
          <div className="px-6 py-4 space-y-2 text-[#0A0A4A]">
            <p>
              <span className="font-semibold">Số điện thoại:</span> 035170533
            </p>
            <p>
              <span className="font-semibold">Địa chỉ:</span> 19 ngách 180, làng Phú Mỹ, Phú Mỹ, Mỹ Đình, Hà Nội
            </p>
            <p>
              <span className="font-semibold">Đang mở cửa:</span> Đóng cửa lúc 23:00
            </p>
          </div>
        </div>

        {/* Khối phải */}
        <div className="bg-white rounded-xl shadow-sm flex flex-col justify-between overflow-hidden w-full lg:w-[360px]">
          <div className="flex items-center justify-center flex-1 py-6">
            {/* Khung QR */}
            <div className="w-[220px] h-[220px] border-2 border-[#1E90FF] rounded-lg bg-gray-300" />
          </div>

          <div className="bg-[#FF0579] text-center py-2  rounded-b-xl">
            <p className="px-4 text-sm text-white">
              Mở Zalo, bấm quét QR để quét và xem trên điện thoại
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
