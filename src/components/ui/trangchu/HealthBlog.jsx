"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  "Dinh dưỡng",
  "Phòng bệnh",
  "Mẹ và bé",
  "Người cao tuổi",
  "Giới tính",
  "Sức khỏe",
];

// ✅ Mỗi danh mục có bài viết riêng
const postsByCategory = {
  "Dinh dưỡng": [
    {
      id: 1,
      title:
        "Cách bổ sung vitamin D giúp hấp thu canxi tối ưu cho trẻ em và người lớn",
      date: "25/09/2025",
      img: "/images/12297504_4885941.jpg",
    },
    {
      id: 2,
      title:
        "Bí quyết duy trì chế độ ăn uống lành mạnh, tăng sức đề kháng mỗi ngày",
      date: "22/09/2025",
      img: "/images/12242124_4893665.jpg",
    },
    {
      id: 3,
      title: "Tác dụng của Omega-3 với hệ tim mạch và não bộ",
      date: "20/09/2025",
      img: "/images/12297534_4917045.jpg",
    },
    {
      id: 4,
      title: "Tác dụng của Omega-3 với hệ tim mạch và não bộ",
      date: "20/09/2025",
      img: "/images/2149611226.jpg",
    },
    {
      id: 5,
      title: "Tác dụng của Omega-3 với hệ tim mạch và não bộ",
      date: "20/09/2025",
      img: "/images/16251977_rm373batch7-blogbanner-01.jpg",
    },
    {
      id: 6,
      title: "Tác dụng của Omega-3 với hệ tim mạch và não bộ",
      date: "20/09/2025",
      img: "/images/133772391_10290655.jpg",
    },
  ],
  "Phòng bệnh": [
    {
      id: 7,
      title:
        "Cách phòng tránh cảm cúm hiệu quả trong mùa mưa bằng phương pháp tự nhiên",
      date: "21/09/2025",
      img: "/images/blogs/blog4.png",
    },
    {
      id: 8,
      title:
        "DQHQ đồng hành cùng chiến dịch tiêm chủng mở rộng bảo vệ cộng đồng",
      date: "19/09/2025",
      img: "/images/blogs/blog1.png",
    },
    {
      id: 9,
      title:
        "DQHQ đồng hành cùng chiến dịch tiêm chủng mở rộng bảo vệ cộng đồng",
      date: "19/09/2025",
      img: "/images/blogs/blog1.png",
    },
    {
      id: 10,
      title:
        "DQHQ đồng hành cùng chiến dịch tiêm chủng mở rộng bảo vệ cộng đồng",
      date: "19/09/2025",
      img: "/images/blogs/blog1.png",
    },
  ],
  "Mẹ và bé": [
    {
      id: 11,
      title:
        "Dấu hiệu nhận biết thiếu vi chất ở trẻ và cách bổ sung an toàn hiệu quả",
      date: "18/09/2025",
      img: "/images/blogs/blog2.png",
    },
    {
      id: 12,
      title:
        "Mẹ sau sinh nên bổ sung thực phẩm gì để lợi sữa và phục hồi nhanh?",
      date: "16/09/2025",
      img: "/images/blogs/blog3.png",
    },
    {
      id: 13,
      title:
        "Dấu hiệu nhận biết thiếu vi chất ở trẻ và cách bổ sung an toàn hiệu quả",
      date: "18/09/2025",
      img: "/images/blogs/blog2.png",
    },
    {
      id: 14,
      title:
        "Mẹ sau sinh nên bổ sung thực phẩm gì để lợi sữa và phục hồi nhanh?",
      date: "16/09/2025",
      img: "/images/blogs/blog3.png",
    },
    {
      id: 15,
      title:
        "Dấu hiệu nhận biết thiếu vi chất ở trẻ và cách bổ sung an toàn hiệu quả",
      date: "18/09/2025",
      img: "/images/blogs/blog2.png",
    },
    {
      id: 16,
      title:
        "Mẹ sau sinh nên bổ sung thực phẩm gì để lợi sữa và phục hồi nhanh?",
      date: "16/09/2025",
      img: "/images/blogs/blog3.png",
    },
  ],
  "Người cao tuổi": [
    {
      id: 17,
      title:
        "Giải pháp kiểm soát huyết áp và tim mạch cho người cao tuổi bằng thiết bị y tế tại nhà",
      date: "15/09/2025",
      img: "/images/blogs/blog4.png",
    },
    {
      id: 18,
      title: "Chế độ ăn uống hợp lý giúp tăng tuổi thọ và sức khỏe xương khớp",
      date: "13/09/2025",
      img: "/images/blogs/blog1.png",
    },
    {
      id: 19,
      title:
        "Giải pháp kiểm soát huyết áp và tim mạch cho người cao tuổi bằng thiết bị y tế tại nhà",
      date: "15/09/2025",
      img: "/images/blogs/blog4.png",
    },
    {
      id: 20,
      title: "Chế độ ăn uống hợp lý giúp tăng tuổi thọ và sức khỏe xương khớp",
      date: "13/09/2025",
      img: "/images/blogs/blog1.png",
    },
    {
      id: 21,
      title:
        "Giải pháp kiểm soát huyết áp và tim mạch cho người cao tuổi bằng thiết bị y tế tại nhà",
      date: "15/09/2025",
      img: "/images/blogs/blog4.png",
    },
    {
      id: 22,
      title: "Chế độ ăn uống hợp lý giúp tăng tuổi thọ và sức khỏe xương khớp",
      date: "13/09/2025",
      img: "/images/blogs/blog1.png",
    },
    {
      id: 23,
      title:
        "Giải pháp kiểm soát huyết áp và tim mạch cho người cao tuổi bằng thiết bị y tế tại nhà",
      date: "15/09/2025",
      img: "/images/blogs/blog4.png",
    },
    {
      id: 24,
      title: "Chế độ ăn uống hợp lý giúp tăng tuổi thọ và sức khỏe xương khớp",
      date: "13/09/2025",
      img: "/images/blogs/blog1.png",
    },
  ],
  "Giới tính": [
    {
      id: 10,
      title:
        "Bí quyết giữ gìn sức khỏe sinh sản cho cả nam và nữ trong đời sống hiện đại",
      date: "11/09/2025",
      img: "/images/blogs/blog2.png",
    },
  ],
  "Sức khỏe": [
    {
      id: 11,
      title:
        "DQHQ hợp tác cùng OMRON ra mắt bộ thiết bị đo huyết áp thông minh mới",
      date: "10/09/2025",
      img: "/images/blogs/blog3.png",
    },
    {
      id: 12,
      title: "Top 5 sản phẩm giúp tăng cường hệ miễn dịch tự nhiên mùa dịch",
      date: "09/09/2025",
      img: "/images/blogs/blog4.png",
    },
  ],
};

// Bài nổi bật (giữ cố định)
const featuredPost = {
  id: 1,
  title:
    "Nhà thuốc DQHQ hợp tác Pfizer xây dựng là chân y tế, nâng tầm chuyên môn đội ngũ tiêm chủng và nhà thuốc, vì sức khỏe cộng đồng",
  excerpt:
    "DQHQ cùng Pfizer hướng đến phát triển mạng lưới y tế chuyên nghiệp, hiện đại, góp phần nâng cao sức khỏe cộng đồng...",
  img: "/images/22166.jpg",
  link: "#",
};

export default function HealthBlog() {
  const [activeTab, setActiveTab] = useState("Dinh dưỡng");

  const currentPosts = postsByCategory[activeTab] || [];

  return (
    <section className="h-[720px] py-16 font-[Montserrat]">
      <div className="max-w-[1208px] mx-auto px-4">
        {/* ===== HEADER ===== */}
        <div className="bg-[#0441E7] h-[54px] rounded-[10px] flex items-center justify-between px-6 mb-10 shadow-sm">
          {/* Tiêu đề + Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[24px] font-extrabold text-white uppercase mr-3">
              BLOG SỨC KHỎE
            </h2>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`w-[120px] h-[30px] py-[6px] rounded-full text-[12px] font-bold border transition-all duration-200 ${
                  activeTab === cat
                    ? "bg-[#FF0579] text-white border-[#ffffff]"
                    : "bg-white text-[#0441E7] border-white hover:bg-[#e5f2ff]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Xem thêm */}
          <Link
            href="/blog"
            className="text-sm text-[#ffffff] font-semibold flex items-center gap-2 hover:underline px-3 py-1 rounded-full"
          >
            Xem thêm
            <span className="w-2 h-2 bg-[#ffffff] rounded-full inline-block" />
          </Link>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="h-[678px] grid grid-cols-1 md:grid-cols-3 gap-x-[16px] px-[20px]">
          {/* Bài viết nổi bật bên trái */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-[10px]"
          >
            <div className="w-full h-[368px] bg-[#ffffff] rounded-[10px] overflow-hidden mb-4 flex items-center justify-center">
              <img
                src={featuredPost.img}
                alt={featuredPost.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="px-[10px]">
              <h3 className="text-lg font-semibold text-[#0441E7] mb-2 leading-snug">
                {featuredPost.title}
              </h3>
              <p className="text-sm text-[#042222] mb-3 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <a
                href={featuredPost.link}
                className="text-[#FF0579] text-sm font-semibold hover:underline"
              >
                Xem thêm
              </a>
            </div>
          </motion.div>

          {/* Danh sách bài nhỏ — đổi theo từng toggle */}
          <div
            className="flex flex-col gap-3 h-[500px] overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-[#00F0BB] scrollbar-track-[#E5F2FF] scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-[10px]">
            <AnimatePresence mode="wait">
              {currentPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-[10px] w-full h-[131px] shadow-sm p-[15px] flex gap-[12px] hover:shadow-md hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="w-[160px] h-[101px] bg-[#9c9c9c] rounded-[10px] flex-shrink-0 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="text-[11px] text-[#0441E7]">
                      {post.date}
                    </span>
                    <h4 className="text-sm font-semibold text-[#0441E7] line-clamp-2">
                      {post.title}
                    </h4>
                    <a
                      href="#"
                      className="text-[#FF0579] text-xs font-semibold hover:underline"
                    >
                      Xem ngay
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
