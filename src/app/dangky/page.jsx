"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Phone, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// =================== COMPONENT CHÍNH ===================
export default function DangKy() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Vui lòng đồng ý với điều khoản sử dụng trước khi tiếp tục.");
      return;
    }

    // Sau khi đăng ký thành công → chuyển sang đăng nhập
    router.push("/dangnhap");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center font-[Montserrat] overflow-hidden pt-[150px] pb-[110px]"
      style={{
        background: `linear-gradient(to bottom, #FF0579 0%, #0441E7 100%)`,
      }}
    >
      {/* ==== BACKGROUND ANIMATION ==== */}
      <img
        src="/icons/sun.png"
        alt="sun"
        className="absolute top-[60px] left-[6%] w-[130px] animate-sunMove z-[1]"
      />
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
      <img
        src="/icons/car.png"
        alt="car"
        className="absolute bottom-[60px] left-[-200px] w-[160px] z-[20] animate-carMove"
      />

      {/* ==== KHUNG ĐĂNG KÝ ==== */}
      <div
        className="bg-white rounded-[20px] shadow-md flex relative overflow-hidden z-30 animate-fadeIn"
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
          {/* Menu */}
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

          {/* Banner Slider */}
          <BannerSlider />
        </div>

        {/* ===== CỘT PHẢI: FORM ===== */}
        <div className="w-[40%] bg-white flex flex-col pt-[66px] items-center px-6">
          <div className="mb-6 text-center">
            <h2 className="text-[32px] font-extrabold text-[#0441E7]">ĐĂNG KÝ</h2>
            <p className="text-[#0441E7] text-[10px] mt-1">
              Chào mừng bạn đến với nhà thuốc DQHQ
            </p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-[20px] w-[300px]">
            {/* Họ và tên */}
            <InputField icon={<User size={16} />} label="Họ và tên" type="text" placeholder="Nhập họ và tên" />

            {/* Email */}
            <InputField icon={<Mail size={16} />} label="Email" type="email" placeholder="Nhập Email" />

            {/* Số điện thoại */}
            <InputField icon={<Phone size={16} />} label="Số điện thoại" type="tel" placeholder="Nhập số điện thoại" />

            {/* Mật khẩu */}
            <PasswordField
              label="Mật khẩu"
              show={showPassword}
              setShow={setShowPassword}
              placeholder="Nhập mật khẩu"
            />

            {/* Nhập lại mật khẩu */}
            <PasswordField
              label="Nhập lại mật khẩu"
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
              placeholder="Nhập lại mật khẩu"
            />

            {/* Checkbox điều khoản */}
            <div className="flex items-center gap-2 mt-[4px] text-xs select-none">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 appearance-none border-2 border-[#0441E7] rounded cursor-pointer checked:bg-[#FF0579] checked:border-[#FF0579] transition-colors duration-200"
              />
              <label
                htmlFor="terms"
                className="text-[#0441E7] font-semibold cursor-pointer hover:text-[#0441E7] transition-colors"
              >
                Tôi đồng ý với điều khoản sử dụng
              </label>
            </div>

            {/* Nút đăng ký */}
            <button
              type="submit"
              className="w-[300px] h-[30px] bg-[#0441E7] text-white font-semibold rounded-full hover:bg-[#0441E7] transition-all mt-1 text-sm"
            >
              Đăng ký
            </button>

            {/* Đã có tài khoản */}
            <div className="mt-2 text-xs text-center text-gray-600">
              Đã có tài khoản?{" "}
              <Link href="/dangnhap" className="text-[#FF0579] font-semibold hover:underline">
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// =================== COMPONENT INPUT FIELD ===================
function InputField({ icon, label, type, placeholder }) {
  return (
    <div>
      <label className="text-[14px] font-semibold text-[#0441E7]">{label}</label>
      <div className="relative mt-[10px] h-[30px]">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF0579]">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-[300px] h-[30px] pl-9 pr-9 text-[12px] border-2 border-[#0441E7] rounded-full focus:ring-1 focus:ring-[#0441E7] outline-none placeholder-gray-400"
        />
      </div>
    </div>
  );
}

// =================== COMPONENT PASSWORD FIELD ===================
function PasswordField({ label, show, setShow, placeholder }) {
  return (
    <div>
      <label className="text-[14px] font-semibold text-[#0441E7]">{label}</label>
      <div className="relative mt-[10px] h-[30px]">
        <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF0579]" />
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          required
          className="w-[300px] h-[30px] pl-9 pr-9 text-[12px] border-2 border-[#0441E7] rounded-full focus:ring-1 focus:ring-[#0441E7] outline-none placeholder-gray-400"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FF0579]"
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

// =================== COMPONENT BANNER SLIDER ===================
function BannerSlider() {
  const images = [
    "/images/bannerdangnhap/Banner1.jpg",
    "/images/bannerdangnhap/Banner2.jpg",
    "/images/bannerdangnhap/Banner3.jpg",
    "/images/bannerdangnhap/Banner4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
