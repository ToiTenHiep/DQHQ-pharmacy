"use client";

import Image from "next/image";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import BannerDQHQ from "@/components/ui/trangchu/BannerDQHQ";
import HotProducts from "../components/ui/trangchu/HotProducts";
import FeaturedProducts from "../components/ui/trangchu/FeaturedProducts";
import SeasonalDiseases from "../components/ui/trangchu/SeasonalDiseases";
import FeaturedBrands from "@/components/ui/trangchu/FeaturedBrands";
import HealthBlog from "@/components/ui/trangchu/HealthBlog";
import FeaturedCategories from "@/components/ui/trangchu/FeaturedCategories";
import DiseaseByTarget from "@/components/ui/trangchu/DiseaseByTarget";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#FFFDF8] ">
      <main className="flex flex-col">
        {/* Banner giới thiệu */}
        <div className="section-banner w-full h-[700px]   pt-[100px]">
          <BannerDQHQ />
        </div> 
        {/* Sản phẩm bán chạy */}     
        <div className="section-hot-products bg-[#FFFDF8] w-full h-[540px] flex items-center relative overflow-hidden justify-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <AnimatedBackground />
          </div>

          {/* Nội dung */}
          <div className="relative z-10">
            <HotProducts />
          </div>
        </div>
        {/* Sản phẩm nổi bật */}    
        <div className="section-featured-products w-full h-[540px] flex items-center justify-center relative overflow-hidden bg-[#FFFDF8]">
            <FeaturedProducts />
        </div>
        {/* Bệnh theo mùa */}    
        <div className="section-seasonal-diseases w-full h-[750px] mx-auto">
          <SeasonalDiseases />
        </div>
        {/* Thương hiệu nổi tiếng */}
        <div className="section-famous-brand relative w-full h-[540px] flex items-center justify-center overflow-hidden">
          {/* Ảnh nền full trang */}
          <Image
            src="/images/background3.png"
            alt="Background thương hiệu nổi tiếng"
            fill
            quality={100}
            unoptimized
            className="object-cover object-center"
            priority
          />

          {/* Lớp phủ mờ nhẹ để giúp nội dung nổi bật hơn */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-[#FFFDF8]/60"></div>

          {/* Nội dung chính */}
          <div className="relative z-10 w-[1440px] max-w-full flex items-center justify-center">
            <FeaturedBrands />
          </div>
        </div>

        {/* Danh mục nổi bật */}    
        <div className="section-featured-categories w-full h-[540px]">
          <FeaturedCategories />
        </div>
        {/* Blog sức khỏe */}
        <div className="section-blog flex items-center justify-center mx-auto w-full h-[700px]">
          <HealthBlog />  
        </div>   
        {/* Bệnh theo đối tượng */}      
        <div className="section-disease-by-subject w-full h-[600px] mb-24">
          <DiseaseByTarget />
        </div>
      </main>
      <footer className="...">
        ...
      </footer>
    </div>
  );
}

