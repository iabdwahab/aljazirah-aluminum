"use client";

import { ProductCardInterface } from "@/types/productsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ProductsSwiper({
  productsList,
}: {
  productsList?: ProductCardInterface[];
}) {
  return (
    <div className="my-20 space-y-5">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        loop
        speed={20000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{
          transitionTimingFunction: "linear",
        }}
      >
        {productsList?.map((product) => (
          <SwiperSlide
            key={product.id}
            className="rounded-3xl border border-[#D3D3D3] bg-[#F5F3F14F] px-36 py-24"
          >
            <div>
              <h3>{product.acf.product_name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        loop
        speed={20000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        style={{
          transitionTimingFunction: "linear",
        }}
      >
        {productsList?.map((product) => (
          <SwiperSlide
            key={product.id}
            className="rounded-3xl border border-[#D3D3D3] bg-[#F5F3F14F] px-36 py-24"
          >
            <div>
              <h3>{product.acf.product_name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
