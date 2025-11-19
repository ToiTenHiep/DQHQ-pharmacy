"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import TopBar from "./topbar";
import MenuBar from "./menubar";
import CollapsedBar from "./CollapsedBar";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [forceExpanded, setForceExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // control mobile drawer
  const pathname = usePathname();

  useEffect(() => {
    // Nếu đang ở trang kiểm tra sức khỏe -> dùng logic scroll
    if (pathname === "/kiemtrasuckhoe") {
      let lastScrollY = 0;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100 && currentScrollY > lastScrollY && !forceExpanded) {
          setIsCollapsed(true);
        } else if (currentScrollY < lastScrollY) {
          setIsCollapsed(false);
        }

        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    // Còn các trang khác -> dùng IntersectionObserver với banner
    const banner = document.querySelector(".section-banner");
    if (!banner) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCollapsed(false);
          setForceExpanded(false);
        } else {
          if (!forceExpanded) setIsCollapsed(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(banner);
    return () => observer.disconnect();
  }, [forceExpanded, pathname]);

  // Biến hiệu ứng cho Framer Motion
  const fullNavVariants = {
    open: { y: 0, opacity: 1, pointerEvents: "auto" },
    closed: { y: -130, opacity: 0, pointerEvents: "none" },
  };

  const collapsedVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -40, opacity: 0 },
  };

  return (
    <>
      {/* FULL NAV - show on md+ */}
      <motion.div
        animate={!isCollapsed ? "open" : "closed"}
        variants={fullNavVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ willChange: "transform, opacity" }}
      >
        <nav className="w-full bg-[#FFFDF8]">
          {/* TopBar: hidden trên mobile (sm) */}
          <div className="hidden md:block">
            <TopBar />
          </div>

          {/* thin separator line */}
          <div className="w-full h-[4px] bg-[#0441E7]" />

          {/* MenuBar: hidden trên mobile, shown on md+ */}
          <div className="hidden md:block">
            <MenuBar />
          </div>

          {/* MOBILE: simple header with hamburger - visible only on sm */}
          <div className="flex items-center justify-between px-4 py-3 md:hidden">
            <div className="flex items-center gap-3">
              {/* Logo area - keep same look as desktop but compact */}
              <div className="text-[#0441E7] font-bold text-lg">DQHQ</div>
            </div>

            <div className="flex items-center gap-3">
              {/* Action icons could go here (cart, search) */}
              <button
                aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
                onClick={() => setMobileOpen((s) => !s)}
                className="p-2 bg-white border rounded-md shadow-sm"
              >
                {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* COLLAPSED BAR - shown when isCollapsed true (desktop behaviour) */}
      <motion.div
        animate={isCollapsed ? "open" : "closed"}
        variants={collapsedVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ willChange: "transform, opacity" }}
      >
        {/* CollapsedBar should be compact; on mobile we reuse mobileOpen drawer instead */}
        <div className="bg-white shadow-sm">
          <div className="max-w-screen-xl px-4 mx-auto">
            <div className="flex items-center justify-between h-14">
              <div className="text-[#0441E7] font-bold">DQHQ</div>
              <div className="flex items-center gap-3">
                {/* On md+ show small actions */}
                <div className="items-center hidden gap-2 md:flex">
                  <button className="text-sm px-3 py-1 rounded-full bg-[#0441E7] text-white">Giỏ hàng</button>
                </div>

                {/* On mobile show nothing here; hamburger handled in fullNav mobile area */}
                <div className="md:hidden" />
                {/* Provide a way for collapsedBar to expand (desktop) */}
                <button
                  onClick={() => {
                    setForceExpanded(true);
                    setIsCollapsed(false);
                    // auto remove forceExpanded after a short timeout so scroll logic resumes
                    setTimeout(() => setForceExpanded(false), 3000);
                  }}
                  className="px-3 py-1 text-sm border rounded-full"
                >
                  Mở
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MOBILE DRAWER / SIDEBAR (for mobileOpen) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-[90%] max-w-xs bg-white shadow-xl p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold text-[#0441E7]">Menu</div>
              <button
                aria-label="Đóng"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md"
              >
                <XIcon size={18} />
              </button>
            </div>

            {/* You can reuse MenuBar here or create a mobile-specific menu */}
            <div className="space-y-3">
              {/* MenuBar likely renders full menu; if it's not mobile-friendly, create a compact list here */}
              <MenuBar mobile />
            </div>

            <div className="mt-6">
              <CollapsedBar onExpand={() => { setMobileOpen(false); setForceExpanded(true); }} />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
