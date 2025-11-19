"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ======================= COMPONENT CHÍNH =======================
export default function DangNhap() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Hiện form sau 3 giây
  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Khi nhấn Đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/"); // chuyển về trang chủ
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center font-[Montserrat] overflow-hidden transition-all duration-500 pt-[150px] pb-[110px]"
      style={{
        background: `linear-gradient(to bottom, #FF0579 0%, #0441E7 100%)`,
      }}
    >
      {/* ==== ANIMATION BACKGROUND ==== */}
      <img
        src="/icons/sun.png"
        alt="sun"
        className="absolute top-[60px] left-[6%] w-[130px] animate-sunMove z-[1]"
      />

      {/* 7 đám mây */}
      {Array.from({ length: 7 }).map((_, i) => (
        <img
          key={i}
          src={`/icons/cloud${i + 1}.png`}
          alt={`cloud${i + 1}`}
          className={`absolute z-[2] animate-cloudMove${i + 1}`}
          style={{
            opacity: 0.6 + i * 0.05,
            top: `${80 + i * 30}px`,
            left: i % 2 === 0 ? `-${200 + i * 30}px` : "auto",
            right: i % 2 !== 0 ? `-${200 + i * 40}px` : "auto",
            width: `${200 + i * 20}px`,
          }}
        />
      ))}

      {/* Xe chạy */}
      <img
        src="/icons/car.png"
        alt="car"
        className="absolute bottom-[60px] left-[-200px] w-[160px] z-[20] animate-carMove"
      />

      {/* ==== KHUNG ĐĂNG NHẬP ==== */}
      {showForm && (
        <div
          className="bg-white rounded-[10px] shadow-md flex relative overflow-hidden z-30 animate-fadeIn"
          style={{ width: "1118px", height: "829px" }}
        >
          {/* Nút quay lại */}
          <div
            onClick={() => router.back()}
            className="absolute top-4 left-6 flex items-center gap-1 text-sm text-[#0441E7] hover:text-[#FF0579] cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Quay lại</span>
          </div>

          {/* ===== CỘT TRÁI ===== */}
          <div className="w-[60%] flex flex-col justify-start items-center pt-[66px] px-8">
            {/* MENU */}
            <div className="bg-[#0441E7] rounded-[10px] py-2 px-4 flex gap-4 justify-center items-center mb-4 w-full">
              {["Tin tức HOT", "Có gì mới?", "Fanpage", "..."].map((text) => (
                <button
                  key={text}
                  className="bg-white text-[#0441E7] hover:bg-[#e8ebff] px-2 py-[4px] w-[120px] rounded-full text-[12px] font-semibold transition-all"
                >
                  {text}
                </button>
              ))}
            </div>

            {/* BANNER SLIDER */}
            <BannerSlider />
          </div>

          {/* ===== CỘT PHẢI: FORM ===== */}
          <div className="w-[40%] bg-white flex flex-col pt-[66px] items-center px-6">
            <div className="mb-6 text-center">
              <h2 className="text-[32px] font-extrabold text-[#0441E7]">ĐĂNG NHẬP</h2>
              <p className="text-[#0441E7] text-[10px] mt-1">
                Chào mừng bạn đến với nhà thuốc DQHQ
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-[25px] w-[300px]"
            >
              {/* Email */}
              <div>
                <label className="text-[14px] font-semibold text-[#0441E7]">
                  Email
                </label>
                <div className="relative mt-[10px] h-[30px]">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF0579]"
                  />
                  <input
                    type="email"
                    placeholder="Nhập Email"
                    required
                    className="w-[300px] h-[30px] pl-9 pr-3 text-[12px] border-2 border-[#0441E7] rounded-full focus:ring-1 focus:ring-[#0441E7] outline-none placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Mật khẩu */}
              <div>
                <label className="text-[14px] font-semibold text-[#0441E7]">
                  Mật khẩu
                </label>
                <div className="relative mt-[10px] h-[30px]">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF0579]"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    required
                    className="w-[300px] h-[30px] pl-9 pr-9 text-[12px] border-2 border-[#0441E7] rounded-full focus:ring-1 focus:ring-[#0441E7] outline-none placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FF0579]"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Nhớ tài khoản + Quên mật khẩu */}
              <div className="flex items-center justify-between mt-1 text-xs">
                <label className="flex items-center gap-2 text-[#0441E7]">
                  <input
                    type="checkbox"
                    className="w-4 h-4 appearance-none border-2 border-[#0441E7] rounded cursor-pointer checked:bg-[#FF0579] checked:border-[#FF0579] transition-colors duration-200"
                  />
                  Nhớ tài khoản
                </label>
                <Link
                  href="#"
                  className="text-[#0441E7] hover:underline font-semibold"
                >
                  Quên mật khẩu?
                </Link>
              </div>

              {/* Nút đăng nhập */}
              <button
                type="submit"
                className="w-[300px] h-[30px] bg-[#0441E7] text-white font-semibold rounded-full hover:bg-[#033cda] transition-all mt-2 text-sm"
              >
                Đăng nhập
              </button>

              {/* Gạch chia và đăng ký */}
              <div className="flex items-center justify-center my-2 text-xs text-[#FF0579]">
                <span className="flex-1 h-[1px] bg-[#FF0579]"></span>
                <span className="mx-2">Chưa có tài khoản?</span>
                <span className="flex-1 h-[1px] bg-[#FF0579]"></span>
              </div>

              <Link
                href="/dangky"
                className="w-[300px] h-[30px] flex items-center justify-center border-2 border-[#FF0579] text-[#FF0579] font-semibold rounded-full hover:bg-[#FF0579] hover:text-white transition-all text-sm"
              >
                Đăng ký ngay
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ======================= COMPONENT SLIDER ẢNH =======================
function BannerSlider() {
  const images = [
    "/images/bannerdangnhap/Banner1.jpg",
    "/images/bannerdangnhap/Banner2.jpg",
    "/images/bannerdangnhap/Banner3.jpg",
    "/images/bannerdangnhap/Banner4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Tự động chuyển ảnh mỗi 4 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Chuyển thủ công
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full h-[534px] bg-[#0441E7] rounded-[10px] relative flex flex-col items-center justify-center overflow-hidden">
      {/* Khung ảnh */}
      <div className="bg-gray-100 w-[95%] h-[500px] rounded-[8px] overflow-hidden shadow-inner flex items-center justify-center">
        <img
          src={images[current]}
          alt={`banner-${current}`}
          className="w-full h-full object-cover rounded-[10px] transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Thanh line tím */}
      <div className="absolute bottom-10 left-[250px] -translate-x-1/2 w-[70%] h-[2px] bg-[#ffffff] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF0579] rounded-full transition-all duration-500"
          style={{
            width: `${100 / images.length}%`,
            transform: `translateX(${current * 100}%)`,
          }}
        ></div>
      </div>

      {/* Nút điều hướng */}
      <div className="absolute flex gap-3 bottom-8 right-10">
        <button
          onClick={prevSlide}
          className="w-7 h-7 rounded-full bg-white text-[#FF0579] hover:bg-[#e8ebff] flex items-center justify-center"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="w-7 h-7 rounded-full bg-white text-[#FF0579] hover:bg-[#e8ebff] flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
