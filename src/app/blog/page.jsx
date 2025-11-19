"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* =======================
   DỮ LIỆU BÀI VIẾT
======================= */
const categories = [
  "Dinh dưỡng",
  "Phòng bệnh",
  "Mẹ và bé",
  "Người cao tuổi",
  "Giới tính",
  "Sức khỏe",
];

const postsByCategory = {
  "Dinh dưỡng": [
    { id: 1, title: "Cách bổ sung vitamin D giúp hấp thu canxi tối ưu cho trẻ em và người lớn", date: "25/09/2025", img: "/images/12297504_4885941.jpg" },
    { id: 2, title: "Bí quyết duy trì chế độ ăn uống lành mạnh, tăng sức đề kháng mỗi ngày", date: "22/09/2025", img: "/images/12242124_4893665.jpg" },
    { id: 3, title: "Tác dụng của Omega-3 với hệ tim mạch và não bộ", date: "20/09/2025", img: "/images/12297534_4917045.jpg" },
  ],
  "Phòng bệnh": [
    { id: 7, title: "Cách phòng tránh cảm cúm hiệu quả trong mùa mưa bằng phương pháp tự nhiên", date: "21/09/2025", img: "/images/blogs/blog4.png" },
    { id: 8, title: "DQHQ đồng hành cùng chiến dịch tiêm chủng mở rộng bảo vệ cộng đồng", date: "19/09/2025", img: "/images/blogs/blog1.png" },
  ],
  "Mẹ và bé": [
    { id: 11, title: "Dấu hiệu nhận biết thiếu vi chất ở trẻ và cách bổ sung an toàn hiệu quả", date: "18/09/2025", img: "/images/blogs/blog2.png" },
    { id: 12, title: "Mẹ sau sinh nên bổ sung thực phẩm gì để lợi sữa và phục hồi nhanh?", date: "16/09/2025", img: "/images/blogs/blog3.png" },
  ],
  "Người cao tuổi": [
    { id: 17, title: "Giải pháp kiểm soát huyết áp và tim mạch cho người cao tuổi bằng thiết bị y tế tại nhà", date: "15/09/2025", img: "/images/blogs/blog4.png" },
    { id: 18, title: "Chế độ ăn uống hợp lý giúp tăng tuổi thọ và sức khỏe xương khớp", date: "13/09/2025", img: "/images/blogs/blog1.png" },
  ],
  "Giới tính": [
    { id: 19, title: "Bí quyết giữ gìn sức khỏe sinh sản cho cả nam và nữ trong đời sống hiện đại", date: "11/09/2025", img: "/images/blogs/blog2.png" },
  ],
  "Sức khỏe": [
    { id: 20, title: "DQHQ hợp tác cùng OMRON ra mắt bộ thiết bị đo huyết áp thông minh mới", date: "10/09/2025", img: "/images/blogs/blog3.png" },
    { id: 21, title: "Top 5 sản phẩm giúp tăng cường hệ miễn dịch tự nhiên mùa dịch", date: "09/09/2025", img: "/images/blogs/blog4.png" },
  ],
};

const featuredPost = {
  id: 999,
  title: "Nhà thuốc DQHQ hợp tác Pfizer xây dựng mạng lưới y tế chuyên nghiệp, nâng tầm chuyên môn đội ngũ vì sức khỏe cộng đồng",
  excerpt: "DQHQ cùng Pfizer hướng đến phát triển mạng lưới y tế hiện đại, góp phần nâng cao chất lượng chăm sóc sức khỏe toàn dân...",
  img: "/images/22166.jpg",
  link: "#",
};

/* =======================
   CHUYÊN MỤC NỔI BẬT
======================= */
const featuredCategories = [
  {
    id: 1,
    title: "Tăng sinh môn sau khi sinh: liệu có nên khâu ngay lập tức?",
    date: "23/09/2025",
    excerpt:
      "Sau quá trình sinh nở, tăng sinh môn có thể bị giãn và khó hồi phục như bình thường. Bài viết này chia sẻ cách chăm sóc và phục hồi an toàn cho mẹ bầu...",
    img: "/images/Blog/khoc.jpg",
    category: "Mẹ và bé",
  },
  {
    id: 2,
    title: "Dấu hiệu thiếu máu sau sinh và cách bổ sung sắt an toàn",
    date: "22/09/2025",
    excerpt:
      "Thiếu máu sau sinh là tình trạng phổ biến. Cùng DQHQ tìm hiểu nguyên nhân, dấu hiệu và cách phòng tránh hiệu quả.",
    img: "/images/Blog/sinhcon.jpg",
    category: "Mẹ và bé",
  },
  {
    id: 3,
    title: "Cách phòng tránh cảm cúm trong mùa mưa bằng thảo dược tự nhiên",
    date: "21/09/2025",
    excerpt:
      "Mùa mưa là thời điểm dễ mắc cảm cúm. Dưới đây là những cách phòng tránh đơn giản mà hiệu quả.",
    img: "/images/Blog/benhcum.jpg",
    category: "Phòng bệnh",
  },
  {
    id: 4,
    title: "Chăm sóc sức khỏe tim mạch cho người cao tuổi",
    date: "20/09/2025",
    excerpt:
      "Người cao tuổi cần chế độ sinh hoạt và ăn uống phù hợp để duy trì sức khỏe tim mạch ổn định.",
    img: "/images/Blog/Heart.jpg",
    category: "Người cao tuổi",
  },
];



/* =======================
   COMPONENT CHÍNH
======================= */
export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("Dinh dưỡng");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const currentPosts = postsByCategory[activeTab] || [];
  const totalPages = 3;

  const filteredFeatured = activeCategory === "Tất cả"
    ? featuredCategories
    : featuredCategories.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FFFDF8] font-[Montserrat] pt-30">
      {/* ===== PHẦN BLOG ===== */}
      <section className="py-16">
        <div className="max-w-[1208px] mx-auto px-4">
          {/* Header */}
          <div className="bg-[#0441E7] h-[54px] rounded-[10px] flex items-center justify-between px-6 mb-10 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-[24px] font-extrabold text-white uppercase mr-3">
                BLOG SỨC KHỎE
              </h2>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`w-[120px] h-[30px] rounded-full text-[12px] font-bold border transition-all duration-200 ${
                    activeTab === cat
                      ? "bg-[#FF0579] text-white border-[#ffffff]"
                      : "bg-white text-[#0441E7] border-white hover:bg-[#EFFFF9]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Nội dung */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[16px] px-[20px]">
            {/* Bài nổi bật */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 rounded-[10px]"
            >
              <div className="w-full h-[368px] bg-[#FFF1F8] rounded-[10px] overflow-hidden mb-4">
                <img src={featuredPost.img} alt={featuredPost.title} className="object-cover w-full h-full" />
              </div>

              <div className="px-[10px]">
                <h3 className="text-lg font-semibold text-[#0441E7] mb-2 leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-[#042222] mb-3 leading-relaxed">{featuredPost.excerpt}</p>
                <a href={featuredPost.link} className="text-[#FF0579] text-sm font-semibold hover:underline">
                  Xem thêm
                </a>
              </div>
            </motion.div>

            {/* Danh sách bài viết nhỏ */}
            <div className="flex flex-col gap-3 h-[500px] overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-[#00F0BB] scrollbar-track-[#E5F2FF] rounded-[10px]">
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
                    <div className="w-[160px] h-[101px] rounded-[10px] overflow-hidden">
                      <img src={post.img} alt={post.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="text-[11px] text-[#0441E7]">{post.date}</span>
                      <h4 className="text-sm font-semibold text-[#0441E7] line-clamp-2">{post.title}</h4>
                      <a href="#" className="text-[#FF0579] text-xs font-semibold hover:underline">Xem ngay</a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHUYÊN MỤC NỔI BẬT ===== */}
      <section className="py-16 bg-[#FFF1F8]">
        <div className="max-w-[1208px] mx-auto px-4">
          <h2 className="text-[22px] md:text-[26px] font-extrabold text-[#0441E7] uppercase mb-8">
            Chuyên mục nổi bật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[2.3fr_1fr] gap-8">
            {/* CỘT TRÁI */}
            <div className="flex flex-col gap-4">
              {filteredFeatured.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-[10px] shadow-sm hover:shadow-md p-2 flex gap-4 items-start"
                >
                  <div className="w-[100px] h-[100px] bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="text-[12px] text-[#0441E7]">{item.date}</span>
                    <h3 className="text-sm md:text-base font-semibold text-[#0441E7] leading-snug line-clamp-2 pb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#042222] line-clamp-2 pb-1">{item.excerpt}</p>
                    <Link href="#" className="text-[#FF0579] text-xs font-semibold hover:underline">
                      Xem ngay
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* PHÂN TRANG */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 rounded-full text-[12px] border font-semibold transition ${
                      page === i + 1
                        ? "bg-[#0441E7] text-white border-[#0441E7]"
                        : "bg-white text-[#0441E7] hover:bg-[#EFFFF9]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* CỘT PHẢI */}
            <div className="bg-[#0441E7] h-[560px] rounded-[10px] p-6 text-white flex flex-col items-center shadow-md">
              <h3 className="mb-4 text-lg font-bold">Danh mục</h3>
              <div className="flex flex-col w-full gap-6">
                {["Tất cả", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full h-[40px] rounded-[10px] bg-white text-[#0441E7] text-[12px] font-semibold transition hover:bg-[#EFFFF9] ${
                      activeCategory === cat ? "border-2 border-[#0441E7]" : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <Link href="#" className="mt-6 text-white font-semibold text-sm underline hover:text-[#FF0579]">
                Xem tất cả
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHẦN KHÁC DƯỚI BLOG ===== */}
      <section className="py-20 mt-10 text-center bg-[#FFFDF8]">
        <h2 className="text-3xl font-bold text-[#0441E7] mb-4">Tin tức & Cập nhật</h2>
        <p className="max-w-2xl mx-auto mb-10 text-[#FF0579]">
          Chúng tôi luôn mang đến cho bạn thông tin y tế, sức khỏe và sản phẩm mới nhất từ DQHQ.
        </p>
        <button className="bg-[#0441E7] hover:bg-[#033ddd] text-white font-semibold px-6 py-3 rounded-full transition">
          Đăng ký nhận tin
        </button>
      </section>
            {/* ===== VIDEO NỔI BẬT ===== */}
      <section className="py-16 bg-[#FFFDF8]">
        <div className="max-w-[1208px] mx-auto px-4">
          <div className="bg-white rounded-[10px] shadow-sm p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[20px] md:text-[22px] font-extrabold text-[#0441E7] uppercase">
                Video nổi bật
              </h2>
              <a
                href="#"
                className="text-[#0441E7] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                Xem thêm <span className="text-[#0441E7] text-[18px]">●</span>
              </a>
            </div>

            {/* Danh sách video */}
            <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: 1,
                  title: "DQHQ hướng dẫn đo huyết áp tại nhà đúng cách",
                  thumb: "/images/Blog/dau-hieu-benh-phu-khoa-phu-nu-nen-biet-1.jpg",
                },
                {
                  id: 2,
                  title: "Chia sẻ kiến thức chăm sóc sức khỏe mẹ và bé",
                  thumb: "/images/Blog/old-senior-asian-male-hand-nasal-swab-testing-rapid-tests-by-himself-detection-sars-co2-virus-home-isolate-quarantine-concept.jpg",
                },
                {
                  id: 3,
                  title: "Phương pháp tập luyện cho người cao tuổi",
                  thumb: "/images/Blog/2149611193.jpg",
                },
                {
                  id: 4,
                  title: "Tư vấn dinh dưỡng cùng chuyên gia DQHQ",
                  thumb: "/images/Blog/22166.jpg",
                },
              ].map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#EDEDED] rounded-[10px] h-[260px] flex flex-col justify-between p-2 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-full h-full rounded-[10px] bg-gray-300 overflow-hidden relative">
                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black-opacity-10">
                      <div className="w-12 h-12 bg-[#FF0579] rounded-full flex items-center justify-center text-white text-xl">
                        ▶
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Thanh tiến trình + Nút chuyển */}
            <div className="flex items-center justify-between">
              <div className="w-[80%] h-[2px] bg-gray-200 relative">
                <div className="absolute top-0 left-0 h-[2px] w-[30%] bg-[#FF0579] transition-all duration-500"></div>
              </div>
              <div className="flex gap-3">
                <button className="w-6 h-6 bg-[#0441E7] rounded-full hover:scale-110 transition"></button>
                <button className="w-6 h-6 bg-[#0441E7] rounded-full hover:scale-110 transition"></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG SỨC KHỎE ===== */}
        <section className="py-16 bg-[#FFFEFA] font-[Montserrat]">
        <div className="max-w-[1208px] mx-auto flex flex-col lg:flex-row gap-8 px-4">
            
            {/* --- CỘT TRÁI: DANH MỤC --- */}
            <div className="w-full lg:w-[220px] flex flex-col">
            <h2 className="text-[#0441E7] text-[24px] font-extrabold mb-4 uppercase">
                Blog sức khỏe
            </h2>
            <div className="flex flex-col gap-3">
                {[
                "Ung thư",
                "Tim mạch",
                "Nội tiết chuyển hóa",
                "Cơ - xương - khớp",
                "Tiêm chủng",
                "Tâm lý - tâm thần",
                "Kế hoạch mang thai",
                ].map((topic, index) => (
                <button
                    key={index}
                    className="bg-[#0441E7] hover:bg-[#003ada] text-white font-semibold py-2 px-3 rounded-full text-[13px] text-left transition"
                >
                    {topic}
                </button>
                ))}
            </div>
            </div>

            {/* --- CỘT PHẢI: 3 KHỐI BÀI VIẾT --- */}
            <div className="flex flex-col flex-1 gap-6 lg:flex-row">
            {/* Biến lưu trạng thái khối đang mở */}
            {(() => {
                const blogs = [
                {
                    id: 1,
                    title: "Bạn có biết: Có đến 3 dạng béo phì!",
                    desc: "5 nhóm giải pháp chính giúp phòng ngừa béo phì.",
                    img: "/images/Blog/Fat.jpg",
                },
                {
                    id: 2,
                    title: "7 dấu hiệu cảnh báo bệnh tim sớm bạn không nên bỏ qua",
                    desc: "Nhận biết sớm để bảo vệ trái tim của bạn.",
                    img: "/images/Blog/Heart.jpg",
                },
                {
                    id: 3,
                    title: "Tác hại của stress đến hệ thần kinh và cách cân bằng cuộc sống",
                    desc: "Tìm hiểu nguyên nhân và cách giải tỏa căng thẳng hiệu quả.",
                    img: "/images/Blog/Stress.jpg",
                },
                ];

                const [active, setActive] = React.useState(1);

                return (
                <>
                    {blogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        onClick={() => setActive(blog.id)}
                        layout
                        transition={{ layout: { duration: 0.5, type: "spring" } }}
                        className={`cursor-pointer border border-[#0441E7] rounded-[10px] overflow-hidden shadow-sm ${
                        active === blog.id
                            ? "flex-1 p-4 bg-white"
                            : "flex-1 h-[300px] bg-white max-w-[250px]"
                        }`}
                    >
                        <AnimatePresence mode="wait">
                        {active === blog.id ? (
                            // Khi khối được chọn (mở rộng)
                            <motion.div
                            key="expanded"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col h-full"
                            >
                            <div className="w-full h-[180px] bg-gray-200 rounded-[8px] overflow-hidden mb-3">
                                <img
                                src={blog.img}
                                alt={blog.title}
                                className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-[#0441E7] font-bold text-sm mb-1">
                                {blog.title}
                            </h3>
                            <p className="text-[#0441E7] text-xs mb-3">{blog.desc}</p>
                            <button className="mt-auto text-[#FF0579] border border-[#FF0579] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#FF0579] hover:text-white transition">
                                Xem ngay
                            </button>
                            </motion.div>
                        ) : (
                            // Khi khối bị thu nhỏ
                            <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center w-full h-full bg-gray-100"
                            >
                            <img
                                src={blog.img}
                                alt={blog.title}
                                className="object-cover w-full h-full"
                            />
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </motion.div>
                    ))}
                </>
                );
            })()}
            </div>
        </div>
        </section>


    </main>
  );
}
