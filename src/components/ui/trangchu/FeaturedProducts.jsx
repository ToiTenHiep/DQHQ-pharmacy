"use client";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
        id: 1,
        name: "Nhiệt kế điện tử Omron MC-246 đo nhiệt độ cho trẻ khi sốt",
        price: "125.000 VNĐ / Hộp",
        image: "/images/Product/00032918_glucosamine_and_chondro.png",
    },
    {
        id: 2,
        name: "Thuốc Glucosamine & Chondro",
        price: "200.000 VNĐ / Hộp",
        image: "/images/Product/00028861_khau_trang_y_te_cncs_4_lop_50_cai_3934_62b9_large_b3b2e21d6f.jpg",
    },
    {
        id: 3,
        name: "Máy đo huyết áp Omron",
        price: "350.000 VNĐ / Hộp",
        image: "/images/Product/DSC_08996_917372c13c.png",
    },
    {
        id: 4,
        name: "Vitamin C 1000mg",
        price: "150.000 VNĐ / Hộp",
        image: "/images/Product/00021529_nhiet_ke_dien_tu_microlife_mt500_9788_62b4_large_0364e21838.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full py-10 section-featured">
      {/* Khung trắng giữa trang */}
      <div className="max-w-[1208px] w-full rounded-[10px] px-[40px] py-[32px] bg-transparent">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-extrabold text-[#0441E7] uppercase">
            Sản phẩm nổi bật
          </h2>
          <a
            href="#"
            className="text-sm text-[#0441E7] font-semibold flex items-center gap-1 hover:underline"
          >
            Xem thêm
            <span className="inline-block w-2 h-2 bg-[#0441E7] rounded-full"></span>
          </a>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="flex flex-wrap justify-between gap-y-6">
             {products.map((p) => (
            <div
            key={p.id}
            className="relative w-[232px] h-[418px] bg-[#FFFFFF] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
            {/* Ảnh */}
            <div className="w-[217px] h-[217px] rounded-[10px] mt-[8px] flex items-center justify-center bg-white shadow-inner overflow-hidden">
                <img
                    src={p.image} // dùng thuộc tính image của product
                    alt={p.name}
                    className="w-[200px] h-[200px] rounded-[10px] object-cover"
                />
                </div>

            {/* Thông tin sản phẩm */}
            <div className="p-4 flex flex-col flex-1 gap-[26px] text-left">
                <p className="text-[16px] font-regular text-[#0441E7] mb-2 line-clamp-2">
                {p.name}
                </p>
                <p className="text-[16px] font-semibold text-[#0441E7]">{p.price}</p>
            </div>

            {/* Nút “Mua ngay” */}
            <Link href="/sanpham">
            <button
                className=" w-[103px] h-[30px] absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-[#FF0579] text-white text-[12px] font-bold py-1 px-5 rounded-full hover:opacity-90 transition"
            >
                Mua ngay
            </button>
            </Link>
            </div>
        ))}
        </div>


      </div>
    </div>
  );
}
