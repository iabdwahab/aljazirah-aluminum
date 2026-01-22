"use client";

import { ProductCardInterface } from "@/types/productsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

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
        speed={15000}
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
            className="rounded-3xl border border-[#D3D3D3] bg-[#F5F3F14F] px-5 py-10 md:px-10 lg:px-20"
          >
            <article className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
              <div>
                <h3 className="mb-3.5 text-2xl font-bold text-[#212121]">
                  {product?.acf?.product_name}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.acf?.product_description,
                  }}
                ></div>
              </div>

              <div className="hidden lg:block">
                <Image
                  src={product?.acf?.image || "/products/product-1.svg"}
                  alt="صورة المنتج"
                  width={500}
                  height={300}
                  className="max-h-80 w-75 max-w-full"
                />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
