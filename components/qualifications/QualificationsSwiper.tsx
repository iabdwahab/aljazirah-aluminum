"use client";
import { QualificationInterface } from "@/types/qualifications";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QualificationsSlide from "./QualificationsSlide";

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
        slidesPerView={1.15}
        spaceBetween={20}
        style={{
          transitionTimingFunction: "linear",
        }}
        className=""
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
