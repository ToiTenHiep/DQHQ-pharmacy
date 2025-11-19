"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function ThongTinKhachHang() {
    // ===== Tabs đơn hàng =====
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Tất cả", "Đang xử lý", "Đang giao", "Đã giao", "Đã hủy", "Trả hàng"];
    const tabRefs = useRef([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    // ===== Menu bên trái =====
    const [activeMenu, setActiveMenu] = useState(0);
    const menus = ["Thông tin cá nhân", "Lịch khám của tôi", "Đơn thuốc", "Đăng xuất"];

    // ===== Danh sách đơn hàng mẫu =====
    const orders = [
        {
            id: "#1028901280",
            date: "04/10/2025",
            name: "Thực phẩm bảo vệ sức khỏe Calcium Premium JapanWell bổ sung canxi, giảm nguy cơ loãng xương (120 viên)",
            price: "700.000",
            total: "900.000",
            status: "Đã giao",
        },
        {
            id: "#1028901281",
            date: "02/10/2025",
            name: "Viên uống bổ não DHA Orihiro giúp cải thiện trí nhớ (90 viên)",
            price: "550.000",
            total: "550.000",
            status: "Đang giao",
        },
        {
            id: "#1028901282",
            date: "28/09/2025",
            name: "Thuốc giảm đau Paracetamol 500mg (100 viên)",
            price: "120.000",
            total: "240.000",
            status: "Đang xử lý",
        },
        {
            id: "#1028901283",
            date: "25/09/2025",
            name: "Thực phẩm chức năng tăng đề kháng Vitamin C 1000mg (60 viên)",
            price: "300.000",
            total: "300.000",
            status: "Đã hủy",
        },
    ];

    // ===== Lọc đơn hàng theo tab =====
    const filteredOrders =
        tabs[activeTab] === "Tất cả"
            ? orders
            : orders.filter((order) => order.status === tabs[activeTab]);

    // ===== Cập nhật vị trí thanh trượt =====
    useEffect(() => {
        const currentTab = tabRefs.current[activeTab];
        if (currentTab) {
            const { offsetLeft, offsetWidth } = currentTab;
            const newWidth = offsetWidth * 1.3;
            const newLeft = offsetLeft + (offsetWidth - newWidth) / 2;
            setUnderlineStyle({ left: newLeft, width: newWidth });
        }
    }, [activeTab]);

    // ===== Nội dung phải =====
    const renderContent = () => {
        switch (activeMenu) {
            case 0:
                return (
                    <>
                        <div className="flex items-center justify-between mb-4 border-b border-[#00f6d5] pb-2">
                            <h3 className="text-[#0f1973] font-bold text-[18px]">
                                Thông tin cá nhân
                            </h3>
                            <button className="bg-[#00f6d5] text-white font-semibold px-6 py-1.5 rounded-full text-[14px] hover:bg-[#00e0c2] transition">
                                Chỉnh sửa thông tin cá nhân
                            </button>
                        </div>
                        <div className="space-y-2 text-[#0f1973] text-[15px] leading-relaxed">
                            <p><strong>Họ và tên:</strong> Cẩm Đức Hiệp</p>
                            <p><strong>Số điện thoại:</strong> 035170533</p>
                            <p><strong>Giới tính:</strong> Nam</p>
                            <p><strong>Ngày sinh:</strong> 28/12/2003</p>
                            <p><strong>Địa chỉ:</strong> 19 ngách 180, làng Phú Mỹ, Phú Mỹ, Mỹ Đình, Hà Nội</p>
                            <p><strong>Đang mở cửa:</strong> Đóng cửa lúc 23:00</p>
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="flex items-center justify-between mb-4 border-b border-[#00f6d5] pb-2">
                            <h3 className="text-[#0f1973] font-bold text-[18px]">Lịch khám của tôi</h3>
                        </div>
                        <p className="text-[#0f1973] text-[15px]">
                            Bạn chưa có lịch khám nào được đặt. Hãy chọn “Đặt lịch khám” để bắt đầu nhé!
                        </p>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="flex items-center justify-between mb-4 border-b border-[#00f6d5] pb-2">
                            <h3 className="text-[#0f1973] font-bold text-[18px]">Đơn thuốc</h3>
                        </div>
                        <p className="text-[#0f1973] text-[15px]">
                            Danh sách đơn thuốc của bạn hiện đang trống. Vui lòng đến “Tư vấn thuốc” để được kê đơn nhanh chóng.
                        </p>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="flex items-center justify-between mb-4 border-b border-[#00f6d5] pb-2">
                            <h3 className="text-[#0f1973] font-bold text-[18px]">Đăng xuất</h3>
                        </div>
                        <p className="text-[#0f1973] text-[15px]">Bạn có chắc chắn muốn đăng xuất không?</p>
                        <button className="mt-4 bg-[#ff4fa3] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff2e8a] transition">
                            Xác nhận đăng xuất
                        </button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center bg-[#e8f3ff] py-10"
            style={{ width: "1440px", height: "1695px" }}>
            <div className="flex gap-8 mb-10">
                {/* ===== CỘT TRÁI ===== */}
                <div className="bg-white rounded-xl shadow-md w-[360px] h-[380px] p-6">
                    <div className="flex flex-col items-center mb-4">
                        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full mb-2" />
                        <h4 className="text-[#0f1973] font-semibold text-[15px]">Thông tin khách hàng</h4>
                        <p className="text-sm font-medium text-gray-700">
                            Nguyen Van A{" "}
                            <span className="text-[#00bfa5] font-semibold">Đã xác minh</span>
                        </p>
                    </div>

                    <div className="mt-3 border-t border-gray-200">
                        {menus.map((label, idx) => (
                            <div
                                key={label}
                                onClick={() => setActiveMenu(idx)}
                                className={`flex items-center justify-between px-5 py-3 cursor-pointer border-b border-gray-100 text-[15px] font-medium transition-all duration-200 
                                ${activeMenu === idx
                                        ? "bg-[#00f6d5] text-white rounded-md mt-3 shadow-sm"
                                        : "text-[#0f1973] hover:bg-[#f7faff]"
                                    }`}
                            >
                                <span>{label}</span>
                                <ChevronRight
                                    size={18}
                                    className={`${activeMenu === idx ? "text-white" : "text-[#00f6d5]"}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== CỘT PHẢI ===== */}
                <div className="bg-white rounded-xl shadow-md w-[970px] min-h-[380px] p-8 transition-all duration-300">
                    {renderContent()}
                </div>
            </div>

            {/* ===== KHỐI 2: ĐƠN HÀNG CỦA TÔI ===== */}
            <div className="bg-white rounded-xl shadow-md w-[1360px] p-8 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#00f6d5] pb-2 mb-4">
                    <h3 className="text-[#0f1973] font-bold text-[18px]">Đơn hàng của tôi</h3>
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tên sản phẩm"
                            className="w-[260px] border border-gray-300 rounded-full px-4 py-1.5 text-sm focus:outline-none"
                        />
                        <button className="bg-[#0441E7] hover:bg-[#0441E7] text-white font-semibold px-6 py-1.5 rounded-full text-[14px] transition">
                            Tìm kiếm
                        </button>
                    </div>
                </div>

                {/* ===== Tabs ===== */}
                <div className="relative mb-6 border-b border-gray-200">
                    <div className="relative flex justify-between w-full px-10">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab}
                                ref={(el) => (tabRefs.current[i] = el)}
                                onClick={() => setActiveTab(i)}
                                className={`relative pb-3 font-semibold text-[14px] transition-all duration-200 ${activeTab === i
                                    ? "text-[#0f1973]"
                                    : "text-gray-600 hover:text-[#0f1973]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div
                        className="absolute bottom-0 h-[4px] bg-[#00f6d5] rounded-full transition-all duration-300 ease-in-out"
                        style={{
                            left: `${underlineStyle.left}px`,
                            width: `${underlineStyle.width}px`,
                        }}
                    />
                </div>

                {/* ===== Danh sách đơn hàng (lọc theo tab) ===== */}
                <div className="flex flex-col gap-5">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <div
                                key={order.id}
                                className="flex flex-col p-5 bg-white border border-gray-200 shadow-sm rounded-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-[80px] h-[80px] bg-gray-200 rounded-md" />
                                        <div>
                                            <p className="text-[#0f1973] text-[14px] font-semibold leading-snug max-w-[500px]">
                                                {order.name}
                                            </p>
                                            <a href="#" className="text-[#00bfa5] text-sm font-semibold hover:underline">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-[#0f1973] font-semibold text-[14px]">
                                            {order.price} VND <span className="text-gray-500">x1 Hộp</span>
                                        </p>
                                        <p className="flex items-center justify-end gap-2 text-[14px] mt-1">
                                            <span className="w-2 h-2 bg-[#00f6d5] rounded-full"></span>
                                            <span className="text-[#00bfa5] font-semibold">{order.status}</span>
                                        </p>
                                        <p className="text-[#0f1973] font-bold mt-1">
                                            Thành tiền:{" "}
                                            <span className="text-[#ff4fa3]">{order.total} VND</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-3 text-[13px]">
                                    <p className="text-gray-700">
                                        Đơn hàng {order.date} — Mã đơn hàng:{" "}
                                        <span className="font-semibold text-[#0f1973]">{order.id}</span>
                                    </p>
                                    <button className="bg-[#00f6d5] hover:bg-[#00e0c2] text-white font-semibold px-6 py-1.5 rounded-full text-[13px] transition">
                                        Mua lại
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="mt-4 italic text-center text-gray-500">
                            Không có đơn hàng nào trong mục này.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
