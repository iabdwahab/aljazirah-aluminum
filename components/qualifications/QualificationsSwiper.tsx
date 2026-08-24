"use client";
import { QualificationInterface } from "@/types/qualifications";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QualificationsSlide from "./QualificationsSlide";
import { Autoplay } from "swiper/modules";

export default function QualificationsSwiper({
  qualificationsList,
  locale,
}: {
  qualificationsList: QualificationInterface[];
  locale: string;
}) {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.15}
        spaceBetween={20}
        style={{
          transitionTimingFunction: "linear",
        }}
        speed={6500}
        loop={true}
        className=""
        autoplay={{
          delay: 0,

          disableOnInteraction: false,
          reverseDirection: false,
        }}
        allowTouchMove={false}
      >
        {qualificationsList.map((qualificationItem) => (
          <SwiperSlide key={qualificationItem.id} className="h-full">
            <QualificationsSlide
              slideData={qualificationItem}
              locale={locale}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
