"use client";
import { useState } from "react";

// Dữ liệu mẫu tỉnh/thành và quận/huyện
const dataVN = {
  "Thành phố Hồ Chí Minh": [
    "Quận 1",
    "Quận 3",
    "Quận 5",
    "Quận 10",
    "Quận Gò Vấp",
    "Quận Bình Thạnh",
    "Thành phố Thủ Đức",
  ],
  "Hà Nội": [
    "Quận Hoàn Kiếm",
    "Quận Ba Đình",
    "Quận Cầu Giấy",
    "Quận Hai Bà Trưng",
    "Quận Hoàng Mai",
    "Huyện Đông Anh",
  ],
  "Đà Nẵng": ["Quận Hải Châu", "Quận Sơn Trà", "Quận Thanh Khê", "Huyện Hòa Vang"],
  "Cần Thơ": ["Quận Ninh Kiều", "Quận Cái Răng", "Huyện Phong Điền"],
  "Bình Dương": ["Thành phố Thủ Dầu Một", "Thị xã Bến Cát", "Huyện Dĩ An"],
};

export default function TimNhaThuoc() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [openCity, setOpenCity] = useState(false);
  const [openDistrict, setOpenDistrict] = useState(false);

  const pharmacies = Array(10).fill({
    name: "Dương Quảng Hàm",
    address:
      "392A Dương Quảng Hàm, Phường 05, Quận Gò Vấp, Thành phố Hồ Chí Minh",
  });

  return (
    <div className="w-full flex flex-col items-center bg-[#FFFDF8] text-[#0441E7] font-sans ">
      {/* ===== PHẦN TIÊU ĐỀ ===== */}
      <div className="w-full max-w-[1440px] text-center pt-20 pb-10">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
          TÌM NHÀ THUỐC
        </h1>
      </div>

      {/* ===== PHẦN NỘI DUNG ===== */}
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-10">
        {/* ==== CỘT TRÁI ==== */}
        <div className="flex flex-col flex-1 ">
          {/* Ô chọn địa điểm */}
          <div className="flex flex-wrap gap-5 mb-10">
            {/* Combobox Thành phố */}
            <div className="relative w-[350px]">
              <div
                className="bg-white border-[1px] border-[#0441E7]  rounded-full px-5 py-3 text-[#0441E7] font-semibold text-sm shadow-md cursor-pointer hover:shadow-lg transition-all"
                onClick={() => {
                  setOpenCity(!openCity);
                  setOpenDistrict(false);
                }}
              >
                {selectedCity || "Chọn thành phố, tỉnh"}
              </div>

              {openCity && (
                <div className="absolute mt-2 w-full bg-white border border-[#0441E7] rounded-2xl shadow-lg z-20 animate-fadeIn">
                  {Object.keys(dataVN).map((city) => (
                    <div
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setSelectedDistrict("");
                        setOpenCity(false);
                      }}
                      className="px-5 py-2 text-[#0441E7] text-[14px] hover:bg-[#E8FFF8] cursor-pointer transition-all"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Combobox Quận/Huyện */}
            <div className="relative w-[350px]">
              <div
                className={`bg-white border-[1px] ${
                  selectedCity ? "border-[#0441E7]" : "border-gray-300"
                }  rounded-full px-5 py-3 text-[#0441E7] font-semibold text-sm shadow-md cursor-pointer hover:shadow-lg transition-all ${
                  !selectedCity ? "opacity-60 cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (selectedCity) setOpenDistrict(!openDistrict);
                }}
              >
                {selectedDistrict
                  ? selectedDistrict
                  : selectedCity
                  ? "Chọn quận, huyện"
                  : "Vui lòng chọn thành phố trước"}
              </div>

              {openDistrict && selectedCity && (
                <div className="absolute mt-2 w-full bg-white border border-[#0441E7] rounded-2xl shadow-lg z-20 animate-fadeIn">
                  {dataVN[selectedCity].map((district) => (
                    <div
                      key={district}
                      onClick={() => {
                        setSelectedDistrict(district);
                        setOpenDistrict(false);
                      }}
                      className="px-5 py-2 text-[#0441E7] text-[14px] hover:bg-[#E8FFF8] cursor-pointer transition-all"
                    >
                      {district}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ô nhập vị trí */}
            <input
              type="text"
              placeholder="Nhập vị trí của bạn"
              className="bg-[#FFFFFF] w-[720px] border border-[#0441E7] rounded-full px-6 py-3 text-sm text-[#0441E7] placeholder-gray-400 font-medium focus:ring-2 focus:ring-[#00E5B0]/50 focus:outline-none shadow-sm"
            />
          </div>

          {/* Vị trí hiện tại */}
          <div className="mb-3 font-semibold text-[#0441E7] text-base flex items-center gap-2">
            Vị trí hiện tại
          </div>

          {/* Bản đồ */}
          <div className="w-[720px] h-[400px] rounded-xl overflow-hidden shadow-md mb-10">
            <iframe
              src="https://www.google.com/maps?q=392A+Dương+Quảng+Hàm,+Gò+Vấp,+Hồ+Chí+Minh&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* ==== CỘT PHẢI ==== */}
        <div className=" flex-[0.8] flex flex-col pl-0 lg:pl-6 border-t-0 lg:border-l lg:border-[#FF0579]">
          <h2 className="mb-2 text-2xl font-extrabold">Nhà thuốc gần tôi</h2>
          <p className="text-sm text-[#FF0579] mb-6">
            Danh sách các nhà thuốc có vị trí gần nhất
          </p>

          {/* Danh sách nhà thuốc */}
          <div className="bg-[#F2F6FF] grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-3 rounded-[10px] scrollbar-thin scrollbar-thumb-[#00E5B0]/60 scrollbar-track-transparent p-2">
            {pharmacies.map((p, i) => (
              <div
                key={i}
                className="flex flex-col p-4 transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg"
              >
                <div className="w-full h-[120px] bg-gray-200 rounded-lg mb-3"></div>
                <h3 className="text-[16px] font-bold text-[#0441E7] mb-1">
                  {p.name}
                </h3>
                <div className="flex items-start gap-2 text-sm text-[#0441E7] leading-snug mb-2">
                  <span className="mt-[6px] w-[6px] h-[6px] bg-[#FF0579] rounded-full flex-shrink-0"></span>
                  <p>{p.address}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    p.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF0579] font-semibold text-sm mt-auto flex items-center gap-1 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#FF0579]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 12l4.243-4.243M12 12h8.485M3 12h9"
                    />
                  </svg>
                  Xem chỉ đường
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiệu ứng mượt cho dropdown */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
