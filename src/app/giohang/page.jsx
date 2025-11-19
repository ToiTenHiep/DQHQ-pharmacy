"use client";
import { useState } from "react";
import {
  CheckCircle2,
  Check,
  Minus,
  Plus,
  X as XIcon,
  PlusCircle,
} from "lucide-react";

export default function GioHang() {
  const initialProducts = [
    {
      id: 1,
      name: "Thực phẩm bảo vệ sức khỏe Calcium Premium JpanWell (120 viên)",
      price: 900000,
      quantity: 1,
      checked: false,
    },
    {
      id: 2,
      name: "Viên uống bổ sung Omega-3 tự nhiên JpanWell (100 viên)",
      price: 750000,
      quantity: 1,
      checked: false,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [allChecked, setAllChecked] = useState(false);
  const [showVoucherList, setShowVoucherList] = useState(false);
  const [vouchers, setVouchers] = useState([]);

  const sampleVouchers = [
    { code: "DQHQ100", discount: 100000, desc: "Giảm 100.000đ cho đơn ≥ 1.000.000đ" },
    { code: "DQHQ200", discount: 200000, desc: "Giảm 200.000đ cho đơn ≥ 2.000.000đ" },
  ];

  const handleAddVoucher = (v) => {
    if (vouchers.some((x) => x.code === v.code)) return;
    setVouchers([...vouchers, v]);
    setShowVoucherList(false);
  };

  const handleRemoveVoucher = (code) => {
    setVouchers(vouchers.filter((v) => v.code !== code));
  };

  const handleQuantityChange = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  const handleProductCheck = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, checked: !p.checked } : p))
    );
  };

  const handleCheckAll = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setProducts((prev) => prev.map((p) => ({ ...p, checked: newChecked })));
  };

  const total = products
    .filter((p) => p.checked)
    .reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalDiscount = vouchers.reduce((sum, v) => sum + v.discount, 0);
  const finalTotal = Math.max(total - totalDiscount, 0);

  return (
    <div className="min-h-screen w-full bg-[#FFFDF8] flex flex-col items-center py-12 font-[Inter] pt-[150px]">
      {/* Tiêu đề */}
      <h1 className="text-[#0441E7] font-extrabold text-3xl md:text-4xl mb-10 text-center">
        GIỎ HÀNG CỦA TÔI
      </h1>

      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between gap-10 px-6 md:px-20">
        {/* Cột trái */}
        <div className="w-full lg:w-[750px]">
          <div className="bg-[#0441E7] text-white text-center py-3 rounded-t-xl font-semibold text-sm md:text-base">
            Miễn phí vận chuyển cho đơn hàng trên{" "}
            <span className="font-bold">200.000đ</span>
          </div>

          <div className="p-6 space-y-6 bg-white shadow-lg rounded-b-xl">
            {/* Chọn tất cả */}
            <div className="flex items-center gap-2">
              <div
                onClick={handleCheckAll}
                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center cursor-pointer ${
                  allChecked
                    ? "border-[#FF0579] bg-[#FF0579]"
                    : "border-[#0441E7] bg-white"
                }`}
              >
                {allChecked && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="text-[#001F54] font-semibold text-base">
                Chọn tất cả
              </span>
            </div>

            {/* Danh sách sản phẩm */}
            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-[#E0E0E0] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all bg-white"
              >
                <div className="flex items-center gap-4">
                  <div
                    onClick={() => handleProductCheck(item.id)}
                    className={`w-5 h-5 border-2 rounded-full flex items-center justify-center cursor-pointer ${
                      item.checked
                        ? "border-[#FF0579] bg-[#FF0579]"
                        : "border-[#0441E7] bg-white"
                    }`}
                  >
                    {item.checked && <Check className="w-3 h-3 text-white" />}
                  </div>

                  <div className="flex items-center justify-center w-16 h-16 text-xs text-gray-400 bg-gray-100 rounded-lg">
                    IMG
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="text-[#001F54] text-sm leading-snug max-w-[460px] font-medium">
                      {item.name}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center border border-[#0441E7] text-[#0441E7] rounded-full hover:bg-[#0441E7] hover:text-white transition"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-[#001F54] text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center border border-[#0441E7] text-[#0441E7] rounded-full hover:bg-[#0441E7] hover:text-white transition"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-[#001F54] font-bold text-sm whitespace-nowrap">
                  {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cột phải */}
        <div className="w-full lg:w-[380px] flex flex-col gap-6">
          {/* Thông tin người đặt */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center bg-gray-100 rounded-full w-14 h-14">
                <CheckCircle2 className="text-[#FF0579]" size={24} />
              </div>
              <div>
                <p className="font-semibold text-[#001F54]">Nguyễn Văn A</p>
                <p className="text-xs text-[#00ff5e] font-medium">Đã xác minh</p>
              </div>
            </div>
            <p className="text-sm text-[#001F54] mb-1">
              Số điện thoại: <span className="font-semibold">035170533</span>
            </p>
            <p className="text-sm text-[#001F54] mb-4">
              Địa chỉ: 19 Ngách 180, Làng Phú Mỹ, Mỹ Đình, Hà Nội
            </p>
            <button className="w-full border border-[#0441E7] text-[#0441E7] rounded-full py-2 text-sm font-semibold hover:bg-[#0441E7] hover:text-white transition">
              Thay đổi thông tin người đặt
            </button>
          </div>

          {/* Hóa đơn */}
          <div className="absolute w-full lg:relative">
            {/* Khối xanh */}
            <div className="bg-gradient-to-b from-[#0441E7] to-[#0441E7] rounded-[12px] h-[350px] w-full pt-6 pb-24 text-center shadow-md">
              <h3 className="text-lg font-extrabold text-white">
                HÓA ĐƠN CỦA QUÝ KHÁCH
              </h3>
            </div>

            {/* Khối trắng nổi */}
            <div className="absolute left-1/2 bottom-0 translate-y-[10%] -translate-x-1/2 w-[92%] bg-white rounded-[10px] p-5 shadow-xl">
              <div className="space-y-3 text-sm text-[#001F54]">
                <div className="flex justify-between">
                  <span>Tổng tiền</span>
                  <span className="font-semibold">
                    {total.toLocaleString("vi-VN")}đ
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Giảm giá</span>
                  <span className="font-semibold">
                    {totalDiscount > 0 ? `-${totalDiscount.toLocaleString("vi-VN")}đ` : "0đ"}
                  </span>
                </div>

                <div>
                  <button
                    onClick={() => setShowVoucherList(!showVoucherList)}
                    className="flex items-center gap-2 text-[#0441E7] font-semibold hover:text-[#0034c4] transition"
                  >
                    <Plus size={16} /> Thêm Voucher
                  </button>

                  {showVoucherList && (
                    <div className="mt-2 border border-[#FF0579]/40 rounded-xl p-3 bg-[#F7FFFD] space-y-2 max-h-[160px] overflow-y-auto">
                      {sampleVouchers.map((v, i) => (
                        <button
                          key={i}
                          onClick={() => handleAddVoucher(v)}
                          className="w-full text-left text-[#FF0579] border border-[#FF0579]/30 px-3 py-2 rounded-md hover:bg-[#ffd8ea] transition text-sm font-medium"
                        >
                          {v.code} – Giảm {v.discount.toLocaleString("vi-VN")}đ
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {vouchers.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {vouchers.map((v) => (
                      <div
                        key={v.code}
                        className="flex justify-between items-center bg-[#FF0579] text-white px-4 py-2 rounded-full"
                      >
                        <div>
                          <div className="font-semibold">{v.code}</div>
                          <div className="text-xs opacity-90">
                            Giảm {v.discount.toLocaleString("vi-VN")}đ
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveVoucher(v.code)}
                          className="bg-white text-[#FF0579] w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-[#E0E0E0] pt-3 mt-3">
                  <div className="flex items-end justify-between">
                    <span className="font-semibold">Thành tiền</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#FF0579]">
                        {finalTotal.toLocaleString("vi-VN")}đ
                      </div>
                      {totalDiscount > 0 && (
                        <div className="text-xs text-gray-400 line-through">
                          {total.toLocaleString("vi-VN")}đ
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button className="w-full mt-5 bg-[#0441E7] text-white font-bold py-2 rounded-full hover:bg-[#0033be] transition">
                  Thanh toán
                </button>

                <div className="flex items-start mt-3">
                  <input type="checkbox" className="w-4 h-4 accent-[#0441E7] mt-[2px]" />
                  <p className="text-xs text-[#001F54] ml-2 leading-snug">
                    Tôi đồng ý với Điều khoản dịch vụ và Chính sách xử lý dữ liệu cá nhân
                    của Nhà thuốc DQHQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
