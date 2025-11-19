"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState("/images/ttctsp/00014354_nolvadex_d_9880_63aa_large_72f1b33ad4.webp");
  const [showMore, setShowMore] = useState(false);

  const productImages = [
    "/images/ttctsp/00014354_nolvadex_d_7379_63aa_large_f0e79b6ad4.webp",
    "/images/ttctsp/00014354_nolvadex_d_5090_63aa_large_3cbe7d7cc7.webp",
    "/images/ttctsp/00014354_nolvadex_d_4406_63aa_large_35e0d25882.webp",
    "/images/ttctsp/00014354_nolvadex_d_1000_63aa_large_5803e89764.webp",
  ];

  const [activeTab, setActiveTab] = useState("Thành phần");

  const tabContents = {
    "Thành phần": {
      title: "Thành phần của Viên nén Nolvadex-D",
      content:
        "Nolvadex-D chứa hoạt chất Tamoxifen (dưới dạng Tamoxifen citrat) và tá dược vừa đủ. Đây là thuốc điều trị ung thư vú thuộc nhóm kháng estrogen.",
    },
    "Công dụng": {
      title: "Công dụng của Nolvadex-D",
      content:
        "Thuốc được chỉ định trong điều trị ung thư vú, đặc biệt là ở phụ nữ có thụ thể estrogen dương tính. Ngoài ra, có thể dùng để ngăn ngừa tái phát ung thư vú sau phẫu thuật.",
    },
    "Cách dùng": {
      title: "Cách dùng Nolvadex-D",
      content:
        "Dùng đường uống, có thể uống cùng hoặc không cùng thức ăn. Uống với nước lọc, không nhai hoặc nghiền nát viên thuốc.",
    },
    "Tác dụng phụ": {
      title: "Tác dụng phụ có thể gặp",
      content:
        "Buồn nôn, chóng mặt, rối loạn kinh nguyệt, bốc hỏa, thay đổi tâm trạng, hoặc hiếm hơn là cục máu đông và thay đổi thị lực. Nếu có biểu hiện bất thường, cần ngừng thuốc và liên hệ bác sĩ ngay.",
    },
    "Lưu ý": {
      title: "Lưu ý khi sử dụng Nolvadex-D",
      content:
        "Không tự ý tăng hoặc giảm liều. Tránh dùng thuốc khi đang mang thai hoặc cho con bú. Báo với bác sĩ về các thuốc khác đang dùng để tránh tương tác.",
    },
    "Bảo quản": {
      title: "Bảo quản thuốc Nolvadex-D",
      content:
        "Giữ thuốc nơi khô ráo, tránh ánh sáng trực tiếp, nhiệt độ dưới 30°C. Để xa tầm tay trẻ em.",
    },
  };

  return (
    <>
      {/* --- PHẦN CHI TIẾT SẢN PHẨM --- */}
      <main className="flex-grow bg-[#E6F5FF] py-12 flex justify-center pt-[180px]">
        <div className="w-[1000px] flex gap-4">
          {/* Hình ảnh sản phẩm */}
          <div className="flex flex-col items-center w-1/2">
            {/* Ảnh lớn */}
            <div className="relative w-[380px] h-[380px] bg-[#F2F8FF] rounded-[10px] overflow-hidden mb-6 border border-[#DDEAFD]">
              <Image
                src={selectedImage}
                alt="Sản phẩm chi tiết"
                width={380}
                height={380}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Ảnh nhỏ */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-[85px] h-[85px] bg-white rounded-[10px] overflow-hidden cursor-pointer border transition
                  ${selectedImage === img ? "border-[#0441E7]" : "border-transparent hover:border-[#0441E7]"}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    width={85}
                    height={85}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Thông tin sản phẩm (8 hàng) --- */}
          <div className="w-1/2 text-[#0441E7] font-[500]">
            {/* Hàng 1: Tiêu đề */}
            <h1 className="text-[20px] font-bold leading-snug mb-1">
              Viên nén Nolvadex-D AstraZeneca điều trị ung thư vú (3 vỉ x 10 viên)
            </h1>

            {/* Hàng 2: Ghi chú */}
            <p className="text-[#FF0579] text-[12px] mb-4 font-medium italic">
              Lưu ý: Sản phẩm cần được tư vấn từ dược sĩ
            </p>

            {/* Hàng 3: Đánh giá */}
            <div className="flex items-center gap-3 mb-4">
              <button className="bg-[#0441E7] text-white font-semibold text-[12px] px-5 py-1.5 rounded-full">
                Đánh giá
              </button>
              <span className="text-[13px] font-medium">
                <span className="text-[#0441E7] font-semibold">4.9</span> ⭐
              </span>
              <button className="text-[#0441E7] text-[13px] font-medium underline underline-offset-2 decoration-[#0441E7] hover:opacity-80 transition">
                211 Bình luận
              </button>
            </div>

            {/* Hàng 4: Khối trắng chứa thông tin chính */}
            <div className="bg-[#FFFDF8] rounded-[10px] p-5 shadow-sm text-[13px] mb-3">
              <div className="grid grid-cols-2 gap-y-2">
                <p className="font-semibold">Danh mục:</p>
                <p>Thuốc điều trị ung thư</p>

                <p className="font-semibold">Số đăng ký:</p>
                <p>VN-19007-15</p>

                <p className="font-semibold">Dạng bào chế:</p>
                <p>Viên nén bao phim</p>

                <p className="font-semibold">Quy cách:</p>
                <p>Hộp 3 vỉ x 10 viên</p>

                <p className="font-semibold">Thành phần:</p>
                <p>Tamoxifen</p>
              </div>
            </div>

            {/* Hàng 5: Thanh “Xem thêm thông tin” */}
            <div
              onClick={() => setShowMore(!showMore)}
              className="bg-[#FFFDF8] border border-[#0441E7] rounded-full flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#eef3ff]  transition"
            >
              <span className="text-[#FF0579] text-[12px] font-semibold">
                Xem thêm thông tin
              </span>
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FF0579] rounded-full p-[3px]"
              >
                <ChevronDown size={12} color="white" />
              </motion.div>
            </div>

            {/* Hàng 6: Nội dung mở rộng (ẩn/hiện có animation) */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-[#FFFDF8] rounded-[10px] p-5 shadow-sm text-[13px] mt-3">
                    <div className="grid grid-cols-2 gap-y-2">
                      <p className="font-semibold">Chỉ định:</p>
                      <p>Ung thư vú</p>

                      <p className="font-semibold">Chống chỉ định:</p>
                      <p>Rối loạn chuyển hóa porphyrin</p>

                      <p className="font-semibold">Nhà sản xuất:</p>
                      <p>Astra</p>

                      <p className="font-semibold">Nước sản xuất:</p>
                      <p>Anh</p>

                      <p className="font-semibold">Thuốc cần kê toa:</p>
                      <p>Có</p>

                      <p className="font-semibold">Mô tả:</p>
                      <p>
                        <span className="text-[#0441E7] font-semibold">Nolvadex-D</span> là sản phẩm của AstraZeneca UK Ltd có thành phần chính là Tamoxifen (dưới dạng tamoxifen citrat) dùng điều trị ung thư vú.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hàng 7: Đường line */}
            <div className="w-full h-[1px] bg-[#0441E7] rounded-full my-5"></div>

            {/* Hàng 8: Hai nút hành động */}
            <div className="flex justify-center gap-4">
              <button className="w-[250px] h-[30px] bg-[#0441E7] text-white rounded-full text-[12px] font-semibold hover:opacity-90 transition">
                Tư vấn ngay
              </button>
              <button className="w-[250px] h-[30px] bg-[#FFFFFF] border border-[#FF0579] text-[#FF0579] rounded-full text-[12px] font-semibold hover:bg-[#fff8f8] transition">
                Gửi đơn thuốc
              </button>
            </div>
          </div>
        </div>
      </main>


    {/* Policy/Benefits Bar - Separate Section */}
      <section className="bg-[#FFFDF8] py-6 flex justify-center">
        <div className="w-[1200px]">
          <div
            style={{
              marginLeft: "100px",
              width: "977px",
              borderBottomColor: "#0441E7",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "0",
            }}
            className="border-1 border-[#0441E7] flex items-center justify-around gap-6 px-8 py-5 rounded-lg"
          >
            {/* Đổi trả trong 30 ngày */}
            <div className="flex items-center gap-3">
              <Image
                src="/icons/transfer-motorcycle--motorcycle-shipping-delivery-courier-transfer.svg"
                alt="Đổi trả 30 ngày"
                width={48}
                height={48}
                className="rounded"
              />
              <div>
                <p className="text-[#0441E7] font-bold text-[14px]">
                  Đổi trả trong 30 ngày
                </p>
                <p className="text-[#FF0579] text-[12px]">Kể từ ngày mua hàng</p>
              </div>
            </div>

            {/* Miễn phí 100% */}
            <div className="flex items-center gap-3">
              <Image
                src="/icons/shipping-box-1--box-package-label-delivery-shipment-shipping.svg"
                alt="Miễn phí đổi thuốc"
                width={48}
                height={48}
                className="rounded"
              />
              <div>
                <p className="text-[#0441E7] font-bold text-[14px]">
                  Miễn phí 100%
                </p>
                <p className="text-[#FF0579] text-[12px]">Đổi thuốc</p>
              </div>
            </div>

            {/* Miễn phí vận chuyển */}
            <div className="flex items-center gap-3">
              <Image
                src="/icons/transfer-van--van-shipping-delivery-transfer.svg"
                alt="Miễn phí vận chuyển"
                width={48}
                height={48}
                className="rounded"
              />
              <div>
                <p className="text-[#0441E7] font-bold text-[14px]">
                  Miễn phí vận chuyển
                </p>
                <p className="text-[#FF0579] text-[12px]">
                  Theo chính sách giao hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    {/* Product Detail Section */}
    <section className="bg-[#FFFDF8] py-12 flex justify-center">
      <div className="w-[1200px]">
        <div className="bg-white border-2 border-[#FF0579] rounded-[10px] p-8">
          {/* Title */}
          <h2 className="text-[#0441E7] text-[20px] font-bold text-center mb-5">
            Viên nén Nolvadex-D
          </h2>

          {/* Tabs */}
          <div className="bg-[#0441E7] rounded-[10px] py-3 px-6 flex items-center justify-between mb-6">
            {Object.keys(tabContents).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-[170px] h-[30px] px-5 py-2 rounded-[10px] text-[12px] font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-[#0441E7] shadow-md"
                    : "bg-transparent text-white hover:bg-white hover:text-[#0441E7]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="transition-all duration-300 ease-in-out">
            <h3 className="text-[#0441E7] text-[16px] font-bold mb-3">
              {tabContents[activeTab].title}
            </h3>
            <p className="text-[#042222] text-[13px] leading-relaxed">
              {tabContents[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Product Review Section */}
    <section className="bg-[#FFFDF8] pb-12 flex justify-center">
      <div className="w-[1200px]">
        <div className="bg-white border-2 border-[#0441E7] rounded-lg p-8">
          {/* Title */}
          <h2 className="text-[#0441E7] text-[20px] font-bold mb-6">
            Bình luận về sản phẩm
          </h2>

          {/* Rating Overview */}
          <div className="flex items-start gap-12 mb-6">
            {/* Left Side - Comment Input & Filter */}
            <div className="flex-1">
              <p className="text-[#042222] text-[14px] mb-4">
                Hãy cho chúng tôi biết ý kiến của bạn
              </p>

              {/* Comment Input */}
              <div className="flex gap-3 mb-6">
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 bg-[#f1f4ff] border-none rounded-lg px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FF0579]"
                />
                <button className="bg-[#0441E7] text-white px-8 py-2.5 rounded-lg text-[13px] font-semibold hover:opacity-90 transition">
                  Gửi
                </button>
              </div>

              {/* Filter Tags */}
              <div className="flex items-center gap-3">
                <span className="text-[#003366] text-[13px] font-semibold">Lọc theo</span>
                <button className="border border-[#0441E7] text-[#0441E7] px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-[#ecf1ff] transition">
                  5 sao
                </button>
                <button className="border border-[#0441E7] text-[#0441E7] px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-[#ecf1ff] transition">
                  4 sao
                </button>
                <button className="border border-[#0441E7] text-[#0441E7] px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-[#ecf1ff] transition">
                  3 sao
                </button>
                <button className="border border-[#0441E7] text-[#0441E7] px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-[#ecf1ff] transition">
                  2 sao
                </button>
                <button className="border border-[#0441E7] text-[#0441E7] px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-[#ecf1ff] transition">
                  1 sao
                </button>
              </div>
            </div>

            {/* Right Side - Star Rating Bars */}
            <div className="w-[280px]">
              {/* 5 stars */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[14px]">⭐</span>
                  ))}
                </div>
                <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400" style={{width: '90%'}}></div>
                </div>
                <span className="text-[#0441E7] text-[12px] w-3">5</span>
              </div>

              {/* 4 stars */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[14px]">⭐</span>
                  ))}
                  <span className="text-gray-300 text-[14px]">⭐</span>
                </div>
                <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400" style={{width: '70%'}}></div>
                </div>
                <span className="text-[#0441E7] text-[12px] w-3">4</span>
              </div>

              {/* 3 stars */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[14px]">⭐</span>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-gray-300 text-[14px]">⭐</span>
                  ))}
                </div>
                <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400" style={{width: '50%'}}></div>
                </div>
                <span className="text-[#0441E7] text-[12px] w-3">3</span>
              </div>

              {/* 2 stars */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-[#0441E7] text-[14px]">⭐</span>
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-gray-300 text-[14px]">⭐</span>
                  ))}
                </div>
                <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div className="h-full bg-[#FF0579]" style={{width: '30%'}}></div>
                </div>
                <span className="text-[#FF0579] text-[12px] w-3">2</span>
              </div>

              {/* 1 star */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  <span className="text-[#FF0579] text-[14px]">⭐</span>
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-gray-300 text-[14px]">⭐</span>
                  ))}
                </div>
                <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div className="h-full bg-[#FF0579]" style={{width: '10%'}}></div>
                </div>
                <span className="text-[#FF0579] text-[12px] w-3">1</span>
              </div>

              {/* Send Review Button */}
              <button className="w-full border border-[#FF0579] text-[#FF0579] py-2 rounded-lg text-[13px] font-semibold hover:bg-[#ffeff6] transition mt-2">
                Gửi đánh giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Related Products Section */}
    <section className="bg-[#F0F4F8] pb-12 flex justify-center pt-[50px]">
      <div className="w-[1117px]">
        <div className="w-[1117px] h-[714px] mx-0">
          {/* Header */}
          <div className="w-[1117px] flex items-center justify-between mb-6">
            <h2 className="text-[#0441E7] text-[24px] font-bold">
              CÁC SẢN PHẨM LIÊN QUAN
            </h2>
            <button className="flex items-center gap-2 text-[#0441E7] text-[12px] font-medium hover:opacity-80 transition">
              Xem thêm
              <div className="w-5 h-5 bg-[#0441E7] rounded-full flex items-center justify-center">
                <span className="text-white text-[12px]">→</span>
              </div>
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Product Card 1 */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="p-2 bg-white shadow-sm rounded-[10px] h-[310px] w-[190px]">
                {/* Product Image */}
                <div className="h-[175px] w-[175px] bg-[#D9D9D9] rounded-[8px] mb-2 flex items-center justify-center">
                  <div className="text-[#999] text-[40px]">✕</div>
                </div>

                {/* Product Info */}
                <h3 className="text-[#0441E7] text-[12px] font-medium leading-tight mb-2 h-[32px] overflow-hidden">
                  Nhỏ xá Sanctu Omon MC-266...
                </h3>

                {/* Price */}
                <p className="text-[#FF0579] text-[13px] font-bold mb-3">
                  125.000 VNĐ / Hộp
                </p>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="h-[30px] flex-1 bg-[#0441E7] text-white text-[10px] font-semibold py-1.5 rounded-full hover:opacity-90 transition">
                    Mua ngay
                  </button>
                  <button className="h-[30px] flex-1 border border-[#FF0579] text-[#FF0579] text-[10px] font-semibold py-1 rounded-full hover:bg-[#ffe9f3] transition">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}