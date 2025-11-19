"use client";

import { useState } from "react";
import { MessageCircle, Trash2, CheckCircle } from "lucide-react";

export default function TuVanThuoc() {
  // Danh sách sản phẩm
  const danhSachSanPham = [
    { id: 1, ten: "Viên nén Panangin 140/158mg điều trị suy tim (hộp 50 viên)" },
    { id: 2, ten: "Vitamin C 1000mg tăng đề kháng (lọ 30 viên)" },
    { id: 3, ten: "Dầu cá Omega-3 1000mg tốt cho tim mạch" },
    { id: 4, ten: "Siro ho trẻ em Prospan hương anh đào 100ml" },
    { id: 5, ten: "Thuốc nhỏ mắt Osla bảo vệ mắt, chống mỏi" },
    { id: 6, ten: "Canxi D3 tăng cường xương khớp (lọ 60 viên)" },
  ];

  // Trạng thái
  const [timKiem, setTimKiem] = useState("");
  const [sanPhamChon, setSanPhamChon] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  // Lọc sản phẩm theo từ khóa
  const ketQuaTim = danhSachSanPham.filter((sp) =>
    sp.ten.toLowerCase().includes(timKiem.toLowerCase())
  );

  // Thêm sản phẩm
  const themSanPham = (sp) => {
    if (!sanPhamChon.find((p) => p.id === sp.id)) {
      setSanPhamChon([...sanPhamChon, sp]);
    }
    setTimKiem("");
  };

  // Xóa sản phẩm
  const xoaSanPham = (id) => {
    setSanPhamChon(sanPhamChon.filter((p) => p.id !== id));
    const updatedChecked = { ...checkedItems };
    delete updatedChecked[id];
    setCheckedItems(updatedChecked);
  };

  // Tick chọn sản phẩm
  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const huongDan = [
    {
      step: "Bước 1",
      content: "Bấm vào khung tìm kiếm và nhập tên hoặc thông tin sản phẩm bạn cần.",
      image: "/images/HDan/hd1.png",
    },
    {
      step: "Bước 2",
      content: "Chọn sản phẩm bạn muốn được tư vấn từ kết quả tìm kiếm như hình và bấm xác nhận.",
      image: "/images/HDan/hd2.png",
    },
    {
      step: "Bước 3",
      content: "Xem lại các sản phẩm bạn đã chọn và bấm nút Yêu Cầu Tư Vấn.",
      image: "/images/HDan/hd3.png",
    },
  ];

  return (
    <div className="min-h-full bg-[#ffffff] flex flex-col items-center font-sans text-[#0441E7]">
      {/* ===== PHẦN 1: TƯ VẤN THUỐC ===== */}
      <section className="relative flex flex-col items-center w-full mt-10 overflow-hidden rounded-xl pt-[120px] min-h-[680px]">
        {/* Background cố định */}
        <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage: "url('')",
            transform: "translateZ(0)", // chặn việc repaint
            }}
        />

        {/* Overlay mờ nhẹ để chữ dễ đọc */}
        <div className="absolute inset-0" />

        {/* Nội dung phần tư vấn */}
        <div className="relative z-10 flex flex-col items-center py-10">
            <h2 className="text-[32px] font-extrabold text-[#0441E7] mb-2">
            TƯ VẤN THUỐC
            </h2>
            <p className="text-[#FF0579] text-[14px] text-center leading-relaxed mb-6">
            Gửi thông tin sản phẩm và thuốc,
            <br />
            dược sĩ sẽ gọi điện thoại tư vấn và giao hàng tận nơi.
            </p>

          {/* Nút chức năng */}
          <div className="flex items-center gap-4 mb-6">
            {["Lịch sử tư vấn thuốc", "Gọi tổng đài", "Kê đơn thuốc"].map(
              (label) => (
                <button
                  key={label}
                  className="border border-[#0441E7] text-[#0441E7] bg-white hover:bg-[#0441E7] hover:text-white px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-sm"
                >
                  {label}
                </button>
              )
            )}
          </div>

          {/* Ô tìm kiếm */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Nhập sản phẩm cần tìm kiếm"
              value={timKiem}
              onChange={(e) => setTimKiem(e.target.value)}
              className="w-[480px] border border-[#0441E7] rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0441E7] text-[#0441E7] placeholder-gray-400 shadow-sm"
            />

            {/* Danh sách gợi ý */}
            {timKiem && (
              <div className="absolute top-10 left-0 w-[480px] bg-white rounded-lg shadow-md border border-gray-100 max-h-[200px] overflow-y-auto z-10">
                {ketQuaTim.length > 0 ? (
                  ketQuaTim.map((sp) => (
                    <div
                      key={sp.id}
                      onClick={() => themSanPham(sp)}
                      className="px-4 py-2 hover:bg-[#E6F2FF] cursor-pointer text-sm text-[#0441E7]"
                    >
                      {sp.ten}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm italic text-[#FF0579]">
                    Không tìm thấy sản phẩm
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Danh sách sản phẩm đã chọn */}
          <div className="flex flex-col gap-4 mb-6">
            {sanPhamChon.map((sp) => (
              <div
                key={sp.id}
                className="flex items-center bg-white rounded-xl shadow-md border border-gray-100 w-[720px] py-4 px-5 relative hover:shadow-lg transition-all"
              >
                {/* Checkbox chọn */}
                <button
                  onClick={() => toggleCheck(sp.id)}
                  className="flex items-center justify-center w-[26px] h-[26px] border-2 border-[#0441E7] rounded-full mr-4"
                >
                  {checkedItems[sp.id] && (
                    <CheckCircle className="text-[#FF0579]" size={20} />
                  )}
                </button>

                {/* Ảnh giả */}
                <div className="w-[60px] h-[60px] bg-gray-200 rounded-md flex-shrink-0" />

                {/* Nội dung */}
                <p className="text-[#0441E7] text-[14px] font-semibold leading-snug ml-4 flex-1">
                  {sp.ten}
                </p>

                {/* Nút Xóa */}
                <button
                  onClick={() => xoaSanPham(sp.id)}
                  className="ml-auto flex items-center gap-1 bg-[#FF0579] hover:bg-[#FF2E8A] text-white text-[12px] font-semibold px-3 py-1 rounded-full transition-all"
                >
                  <Trash2 size={14} />
                  Xóa
                </button>
              </div>
            ))}
          </div>

          {/* Nút yêu cầu tư vấn */}
          <button className="bg-[#FF0579] hover:bg-[#e9016e] text-white font-bold py-2 px-8 rounded-full transition-all flex items-center gap-2 shadow-md">
            <MessageCircle size={18} />
            Yêu cầu tư vấn
          </button>
        </div>
      </section>

      {/* ===== PHẦN 2: HƯỚNG DẪN ===== */}
      <section className="flex flex-col items-center bg-[#FFFDF8] mt-16 rounded-xl py-14 w-[1440px] shadow-sm">
        <h3 className="text-[24px] font-bold text-[#0441E7] mb-10 w-full text-left pl-[100px]">
          Hướng dẫn
        </h3>

        <div className="flex items-start justify-center w-full gap-8">
          {huongDan.map(({ step, content, image }) => (
            <div
              key={step}
              className="relative flex flex-col items-center bg-white border border-gray-200 shadow-md rounded-xl w-[400px] h-[320px] transition-all hover:shadow-lg"
            >
              <span className="absolute top-0 right-0 bg-[#0441E7] text-white text-xs font-semibold px-5 py-1.5 rounded-tr-lg rounded-bl-xl">
                {step}
              </span>

              <div className="w-[92%] h-[180px] bg-gray-200 rounded-md mt-8 mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={image}
                  alt={step}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <p className="text-[#0441E7] text-[14px] leading-snug text-center px-5 font-medium">
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PHẦN 3: GIỚI THIỆU NHÀ THUỐC ===== */}
      <section className="flex flex-col items-center mt-[80px] leading-relaxed bg-[#FFFDF8] shadow-md rounded-[10px] py-14 w-full">
        <h3 className="text-[26px] font-extrabold text-[#0441E7] text-center mb-4 uppercase">
          NHÀ THUỐC UY TÍN <br /> HÀNG ĐẦU VIỆT NAM
        </h3>

        <p className="text-center text-[#0441E7] text-[15px] mb-8 max-w-[1050px]">
          Với hơn 12 năm hoạt động, DQHQ tự hào là người bạn đồng hành tin cậy của hàng triệu người dân Việt Nam
          trên hành trình nâng cao chất lượng sức khỏe. Hệ thống gần 1000 nhà thuốc đạt chuẩn GPP trên toàn quốc
          trải dài 40 tỉnh thành, cùng đội ngũ gần 5000 Dược sĩ,
          DQHQ mang đến dịch vụ chăm sóc sức khỏe tận tâm và trải nghiệm mua sắm tiện lợi cho cộng đồng khách hàng.
        </p>

        <div className="relative flex justify-center w-full mb-10">
          <div className="w-[80%] h-[1px] bg-[#FF0579] rounded-full" />
        </div>

        <div className="text-[#0441E7] text-[15px] space-y-8 max-w-[1200px]">
          <div>
            <p className="font-semibold text-[#0441E7] mb-1">
              1. Sản phẩm chính hãng, giá tốt
            </p>
            <p>
              DQHQ cam kết cung cấp sản phẩm chính hãng, đa dạng từ thuốc cho các nhóm bệnh:
              Tiểu Đường, Huyết Áp, Mỡ Máu, Tiêu Hóa, Hô Hấp... đến thực phẩm chức năng, sản phẩm chăm sóc sức khỏe, sắc đẹp,
              thiết bị y tế thuộc các thương hiệu hàng đầu thế giới như: Abbott, GSK, Sanofi, Astrazeneca, Pfizer,
              Mega Lifesciences, Goodlife, L'Oréal, Durex... và các thương hiệu uy tín tại Việt Nam như Dược Hậu Giang, Nam Hà, Traphaco.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#0441E7] mb-1">
              2. Dược sĩ tận tâm, tư vấn chuyên nghiệp
            </p>
            <p>
              Đội ngũ Dược sĩ DQHQ được đào tạo bài bản, có chuyên môn cao và giàu kinh nghiệm.
              Luôn đặt lợi ích khách hàng lên hàng đầu, sẵn sàng tư vấn, giải đáp thắc mắc và hướng dẫn sử dụng sản phẩm hiệu quả, an toàn.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#0441E7] mb-1">
              3. Chính sách ưu đãi dành cho khách hàng thân thiết
            </p>
            <p>
              DQHQ triển khai chương trình DQHQ Thành Viên hấp dẫn. Mỗi giao dịch mua sắm,
              khách hàng đều được tích điểm và có thể sử dụng điểm để trừ tiền cho các lần mua sau.
              Ngoài ra, DQHQ luôn có các chương trình khuyến mãi, ưu đãi dành riêng cho khách hàng thân thiết.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#0441E7] mb-1">
              4. Mua sắm tiện lợi, giao hàng nhanh chóng
            </p>
            <p>
              Thấu hiểu nhu cầu đa dạng của khách hàng, DQHQ mang đến hệ thống mua sắm đa kênh vô cùng tiện lợi:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Mua hàng trực tiếp tại nhà thuốc: Hệ thống gần 1000 nhà thuốc DQHQ trải dài 40 tỉnh thành.</li>
              <li>Mua hàng trực tuyến: Truy cập trang web chính thức hoặc ứng dụng DQHQ.</li>
              <li>Giao hàng siêu tốc: Giao hàng nhanh chóng trong vòng 2 giờ tại các thành phố lớn.</li>
              <li>Hợp tác với đối tác uy tín: Grab, Shopee, Lazada, Tiki...</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
