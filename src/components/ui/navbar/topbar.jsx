"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFDF8] border-b">
      {/* Lớp ngoài: full width, giữ border và căn giữa */}
      <div className="w-full h-[70px] flex items-center justify-center">
        {/* Lớp trong: giới hạn chiều rộng nhưng không thay đổi trên desktop */}
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-[45px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold whitespace-nowrap">
            <span className="text-[#0441E7]">NHÀ THUỐC</span>
            <span className="text-[#FF0579]">DQHQ</span>
          </Link>

          {/* Thanh tìm kiếm (Desktop: hiển thị, Mobile: ẩn) */}
          <div className="hidden md:flex items-center w-1/2 max-w-[700px] bg-[#FFF1F8] rounded-full overflow-hidden">
            <div className="px-3 text-[#0441E7]">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Tìm sản phẩm, thuốc, dược sĩ..."
              className="flex-1 bg-transparent outline-none px-2 text-[#042222] font-medium text-sm"
            />
            <Button className="bg-[#0441E7] hover:bg-[#0039d5] text-white text-sm font-bold rounded-r-full">
              Tìm kiếm
            </Button>
          </div>

          {/* Mobile search icon + Hamburger (visible on small screens) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Search icon mở input dạng overlay */}
            <button
              aria-label="Search"
              onClick={() => setMobileSearchOpen((s) => !s)}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0441E7]"
            >
              <Search size={20} />
            </button>

            {/* Giỏ hàng (icon) */}
            <Link href="/giohang" className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0441E7]">
              <ShoppingCart size={20} />
            </Link>

            {/* Menu toggle */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0441E7]"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Nút Giỏ hàng + Đăng nhập (Desktop) */}
          <div className="items-center hidden gap-3 md:flex">
            <Link href="/giohang">
              <Button
                variant="outline"
                className="text-[#0441E7] font-bold border-[#0441E7] hover:bg-[#fdc9e2] rounded-full"
              >
                Giỏ hàng
              </Button>
            </Link>
            <Link href="/dangnhap">
              <Button className="bg-[#0441E7] hover:bg-[#0039d5] text-white font-bold rounded-full">
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile search overlay (xuất hiện khi bấm icon tìm kiếm trên mobile) */}
      {mobileSearchOpen && (
        <div className="px-4 pb-3 md:hidden">
          <div className="w-full bg-[#FFF1F8] rounded-full flex items-center overflow-hidden">
            <div className="px-3 text-[#0441E7]">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Tìm sản phẩm, thuốc, dược sĩ..."
              className="flex-1 bg-transparent outline-none px-2 text-[#042222] font-medium text-sm"
              autoFocus
            />
            <Button className="bg-[#0441E7] hover:bg-[#0039d5] text-white text-sm font-bold rounded-r-full">
              Tìm
            </Button>
          </div>
        </div>
      )}

      {/* Mobile menu (xuất hiện khi bấm hamburger) */}
      {mobileOpen && (
        <nav className="px-4 pb-4 md:hidden">
          <div className="p-3 space-y-2 bg-white border rounded-lg shadow-sm">
            <Link href="/giohang" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50">
              <ShoppingCart size={18} />
              <span className="font-medium">Giỏ hàng</span>
            </Link>
            <Link href="/dangnhap" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50">
              <User size={18} />
              <span className="font-medium">Đăng nhập</span>
            </Link>
            {/* Nếu cần: thêm link khác ở đây */}
          </div>
        </nav>
      )}
    </header>
  );
}
