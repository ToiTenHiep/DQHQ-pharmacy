"use client";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFDF8] text-[#0441E7] font-[Montserrat]">
      <div className="max-w-[1440px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* === NỬA TRÁI: 3 CỘT === */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Cột 1 */}
          <div>
            <h3 className="text-[#0441E7] font-semibold text-[16px] mb-3">
              Về chúng tôi
            </h3>
            <ul className="space-y-[6px] text-[14px] text-[#0441E7] leading-relaxed">
              <li>Giới thiệu</li>
              <li>Hệ thống cửa hàng</li>
              <li>Giấy phép kinh doanh</li>
              <li>Quy chế hoạt động</li>
              <li>Chính sách đặt cọc</li>
              <li>Chính sách nội dung</li>
              <li>Chính sách đổi trả thuốc</li>
              <li>Chính sách giao hàng</li>
              <li>Chính sách bảo mật dữ liệu cá nhân khách hàng</li>
              <li>Chính sách thanh toán</li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h3 className="text-[#0441E7] font-semibold text-[16px] mb-3">
              Liên hệ
            </h3>
            <ul className="space-y-[8px] text-[14px] text-[#0441E7] leading-relaxed">
              <li>
                Tư vấn mua hàng
                <br />
                <span className="font-regular">0353170533</span>
              </li>
              <li>
                Trung tâm Vắc xin
                <br />
                <span className="font-regular">0353170533</span>
              </li>
              <li>
                Góp ý, khiếu nại và tiếp nhận cảnh báo thông tin vi phạm
                <br />
                <span className="font-regular">0353170533</span>
              </li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className="text-[#0441E7] font-semibold text-[16px] mb-3">
              Danh mục
            </h3>
            <ul className="space-y-[6px] text-[14px] text-[#0441E7] leading-relaxed">
              <li>Thiết bị y tế</li>
              <li>Mẹ và bé</li>
              <li>Dược mỹ phẩm</li>
              <li>Chăm sóc cá nhân</li>
              <li>Tra cứu bệnh</li>
            </ul>
          </div>
        </div>

        {/* === NỬA PHẢI: Logo, mail, line, icons === */}
        <div className="flex flex-col items-end text-right">
          {/* Hàng 1 - Logo */}
          <h2 className="mb-[150px] text-2xl font-bold"> {/* tăng khoảng cách logo */}
            <span className="text-[#0441E7]">NHÀ THUỐC </span>
            <span className="text-[#FF0579]">DQHQ</span>
          </h2>

          {/* Hàng 2 - Gửi mail */}
          <div className="w-full max-w-[360px] mb-4"> {/* thu nhỏ khoảng cách trước line */}
            <p className="text-[#0441E7] text-[14px] font-semibold mb-2 text-right">
              GỬI MAIL CHO CHÚNG TÔI!
            </p>
            <div className="flex justify-end">
              <div className="flex w-full border border-transparent rounded-full overflow-hidden bg-[#e9efff]">
                <input
                  type="email"
                  placeholder=""
                  className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
                />
                <button className="bg-[#0441E7] text-white font-semibold px-5 hover:bg-[#FF0579] transition">
                  Gửi
                </button>
              </div>
            </div>
          </div>

          {/* Hàng 2.5 - Đường line phân cách */}
          <div className="w-[595px] h-[1px] bg-[#0441E7] mb-4"></div>

          {/* Hàng 3 - icon + liên hệ */}
          <div className="flex flex-wrap items-center justify-end gap-4">
            {/* Icon mạng xã hội */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border-2 border-[#0441E7] rounded-full flex items-center justify-center hover:bg-[#F6F2FF] transition">
                <Facebook className="w-4 h-4 text-[#0441E7]" />
              </div>
              <div className="w-9 h-9 border-2 border-[#0441E7] rounded-full flex items-center justify-center hover:bg-[#F6F2FF] transition">
                <Instagram className="w-4 h-4 text-[#0441E7]" />
              </div>
              <div className="w-9 h-9 border-2 border-[#0441E7] rounded-full flex items-center justify-center hover:bg-[#F6F2FF] transition">
                <Youtube className="w-4 h-4 text-[#0441E7]" />
              </div>
            </div>

            {/* Ô số điện thoại */}
            <div className="w-[150px] h-[40px] flex items-center gap-4 border-2 border-[#0441E7] rounded-full px-1 py-[5px]">
              <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#0441E7]">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[13px] font-semibold text-[#0441E7]">
                0353170533
              </span>
            </div>

            {/* Ô địa chỉ */}
            <div className="w-[300px] h-[40px] flex items-center gap-2 border-2 border-[#0441E7] rounded-full px-1 py-[5px] max-w-[280px]">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0441E7] flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-[13px] text-[#0441E7] leading-snug flex-1">
                Số 11 ngõ 402, ngách 19, đường Mỹ Đình, Mỹ Đình 2, Hà Nội
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Đường viền ngọc cuối */}
      <div className="w-full h-[4px] bg-[#FF0579]"></div>

      {/* Bản quyền */}
      <div className="bg-[#0441E7] text-white text-center py-3 text-[13px]">
        Nhà thuốc DQHQ - Giấy chứng nhận ĐKKD
      </div>
    </footer>
  );
}
