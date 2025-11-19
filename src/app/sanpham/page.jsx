"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(400000);

  const handleMinPriceChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxPriceChange = (e) => setMaxPrice(Number(e.target.value));

  return (
    <main className="flex flex-col items-center bg-[#F5FAFF] text-[#0441E7] pt-[120px]">

      {/* Danh mục ngắn (THUỐC) */}
      {/* --- Danh mục ngắn: THUỐC --- */}
      <section className="flex justify-center w-full py-10 bg-white">
        <div className="w-[1440px] flex items-center justify-between relative">
          {/* --- Cột trái: menu --- */}
          <div className="flex flex-col justify-center items-start w-[25%] pl-10 relative">
            <h2 className="font-bold text-[#0441E7] text-xl mb-6">THUỐC</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Thuốc kê đơn",
                "Thuốc không kê đơn",
                "Thuốc khác",
                "Vitamin & TPCN",
              ].map((item, index) => (
                <li
                  key={index}
                  className=" w-[220px] h-[30px] flex items-center gap-3 border border-[#0441E7] rounded-full px-2 py-[6px] text-sm text-[#0441E7] font-medium hover:bg-[#E6F5FF] cursor-pointer transition"
                >
                  <div className="w-5 h-5 flex items-center justify-center bg-[#0441E7] rounded-full text-white">
                    <Menu size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Đường phân cách dọc */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#FF0579] opacity-40"></div>
          </div>

          {/* --- Cột phải: ô sản phẩm --- */}
          {/* --- Cột phải: ô sản phẩm (ảnh thay ô xám) --- */}
            <div className="flex flex-col justify-center items-center w-[75%]">
              <div className="flex items-center justify-center gap-5 mb-6">
                {[
                  { id: 1, name: "Thuốc cảm cúm", img: "/images/Product/00032918_glucosamine_and_chondro.png" },
                  { id: 2, name: "Thuốc đau đầu", img: "/images/Product/product1.jpg" },
                  { id: 3, name: "Thuốc kháng sinh", img: "/images/Product/product6.jpg" },
                  { id: 4, name: "Vitamin tổng hợp", img: "/images/Product/product2.jpg" },
                  { id: 5, name: "Thuốc ho - cảm lạnh", img: "/images/Product/00028861_khau_trang_y_te_cncs_4_lop_50_cai_3934_62b9_large_b3b2e21d6f.jpg" },
                  { id: 6, name: "Thuốc tiêu hóa", img: "/images/Product/product5.jpg" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="w-[140px] h-[140px] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={140}
                      height={140}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay text */}
                    <div className="absolute inset-0 flex items-center justify-center transition opacity-0 bg-black/30 group-hover:opacity-100">
                      <span className="px-2 text-sm font-semibold text-center text-white">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* --- Dấu chấm chuyển slide --- */}
              <div className="left-0 flex gap-3">
                <div className="w-5 h-5 bg-[#0441E7] rounded-full"></div>
                <div className="w-5 h-5 bg-[#0441E7] rounded-full"></div>
              </div>
            </div>
        </div>
      </section>


      {/* --- Phần chính: bộ lọc + danh sách sản phẩm --- */}
      <section className="w-[1440px] flex gap-8 py-10 px-10">
        {/* Bộ lọc */}
        <aside className="w-[240px] bg-white rounded-[10px] p-5">
          {/* Tiêu đề chính */}
          <h3 className="text-[#0441E7] text-lg font-extrabold mb-5 border-b-2 border-[#FF0579] pb-2">
            Bộ lọc
          </h3>

          {/* --- GIÁ BÁN --- */}
          <div className="mb-8">
            <h4 className="text-[#0441E7] font-bold mb-3 text-sm uppercase">
              Giá bán
            </h4>

            <div className="flex justify-between text-xs text-[#0441E7] mb-1">
              <span>Trên</span>
              <span>{minPrice.toLocaleString()} VND</span>
            </div>
            <input
              type="range"
              min="0"
              max="700000"
              step="50000"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full accent-[#FF0579] h-[4px] rounded-full mb-2"
            />

            <div className="flex justify-between text-xs text-[#0441E7] mb-1">
              <span>Dưới</span>
              <span>{maxPrice.toLocaleString()} VND</span>
            </div>
            <input
              type="range"
              min="0"
              max="700000"
              step="50000"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full accent-[#FF0579] h-[4px] rounded-full mb-3"
            />

            <ul className="space-y-2 text-sm text-[#0441E7]">
              {["100.000 - 300.000", "300.000 - 500.000", "500.000 - 700.000"].map(
                (range) => (
                  <li key={range} className="flex items-center gap-2 ">
                    <input
                      type="checkbox"
                      className="accent-[#FF0579] w-4 h-4 rounded-[10px] border-2"
                    />
                    {range} VND
                  </li>
                )
              )}
            </ul>
          </div>

          {/* --- ĐỐI TƯỢNG SỬ DỤNG --- */}
          <div className="mb-8">
            <h4 className="text-[#0441E7] font-bold mb-3 text-sm uppercase">
              Đối tượng sử dụng
            </h4>
            {["Tất cả", "Trẻ em", "Người lớn", "Người cao tuổi", "Thanh thiếu niên"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2 mb-2 text-sm text-[#0441E7]">
                  <input type="checkbox" className="accent-[#FF0579] w-4 h-4 rounded-full" />
                  {item}
                </label>
              )
            )}
          </div>

          {/* --- NƯỚC SẢN XUẤT --- */}
          <div className="mb-8">
            <h4 className="text-[#0441E7] font-bold mb-3 text-sm uppercase">
              Nước sản xuất
            </h4>
            {["Tất cả", "Việt Nam", "Nhật Bản", "Hàn Quốc", "Cuba"].map((item) => (
              <label key={item} className="flex items-center gap-2 mb-2 text-sm text-[#0441E7]">
                <input type="checkbox" className="accent-[#FF0579] w-4 h-4 rounded-full" />
                {item}
              </label>
            ))}
            <button className="text-[#FF0579] text-xs font-medium hover:underline mt-1">
              Xem thêm +
            </button>
          </div>

          {/* --- THƯƠNG HIỆU --- */}
          <div>
            <h4 className="text-[#0441E7] font-bold mb-3 text-sm uppercase">
              Thương hiệu
            </h4>
            {["Tất cả", "STELLA", "DHG Pharma", "Domesco"].map((item) => (
              <label key={item} className="flex items-center gap-2 mb-2 text-sm text-[#0441E7]">
                <input type="checkbox" className="accent-[#FF0579] w-4 h-4 rounded-full" />
                {item}
              </label>
            ))}
            <button className="text-[#FF0579] text-xs font-medium hover:underline mt-1">
              Xem thêm +
            </button>
          </div>
        </aside>


        {/* Danh sách sản phẩm */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="mb-1 text-2xl font-bold">Danh sách sản phẩm</h2>
              <p className="text-sm text-gray-500">
                Lưu ý: Một số thuốc cần được tư vấn từ dược sĩ.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#0441E7] text-white rounded-full px-4 py-2 text-sm hover:opacity-90">
                Giá giảm dần
              </button>
              <button className="bg-[#0441E7] text-white rounded-full px-4 py-2 text-sm hover:opacity-90">
                Giá tăng dần
              </button>
            </div>
          </div>

          {/* Lưới sản phẩm */}
          <div className="grid grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="border border-[#E6F5FF] rounded-lg p-4 text-center shadow-sm hover:shadow-md bg-white transition"
              >
                <div className="w-full h-[150px] bg-gray-100 rounded-md mb-3 overflow-hidden">
                  <Image
                    src={`/images/Product/product${(i % 8) + 1}.jpg`}
                    alt={`Sản phẩm ${i + 1}`}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mb-1 text-sm font-medium">
                  Nhiệt kế điện tử Omron MC-246
                </p>
                <p className="text-[#FF0579] font-semibold text-sm mb-3">
                  125.000 VND / Hộp
                </p>
                <div className="flex justify-center gap-2">
                  <Link href="/thongtinchitiet">
                    <button className="bg-[#FF0579] text-white text-xs px-3 py-1 rounded-full hover:opacity-90">
                      Mua ngay
                    </button>
                  </Link>
                  <button className="border border-[#0441E7] text-[#0441E7] text-xs px-3 py-1 rounded-full hover:bg-[#E6F5FF]">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
