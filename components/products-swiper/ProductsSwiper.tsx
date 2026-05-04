"use client";

import { ProductCardInterface } from "@/types/productsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { getLocalizedText } from "@/lib/i18n-utils";
import { useTranslations } from "next-intl";

export default function ProductsSwiper({
  productsList,
  locale,
}: {
  productsList?: ProductCardInterface[];
  locale: string;
}) {
  const t = useTranslations("ProductsSection");

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
            className="rounded-3xl border border-product-card-border bg-swiper-card-bg px-5 py-10 md:px-10 lg:px-20"
          >
            <article className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
              <div>
                <h3 className="mb-3.5 text-2xl font-bold text-text-heading">
                  {getLocalizedText(product?.acf?.product_name, locale)}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: getLocalizedText(
                      product?.acf?.product_description,
                      locale,
                    ),
                  }}
                ></div>
              </div>

              <div className="hidden lg:block">
                <Image
                  src={product?.acf?.image || "/products/product-1.svg"}
                  alt={t("imageAlt")}
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
