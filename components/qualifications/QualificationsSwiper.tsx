"use client";
import { QualificationInterface } from "@/types/qualifications";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QualificationsSlide from "./QualificationsSlide";

export default function QualificationsSwiper({
  qualificationsList,
}: {
  qualificationsList: QualificationInterface[];
}) {
  return (
    <div>
      <Swiper
        slidesPerView={1.15}
        spaceBetween={20}
        loop
        speed={5000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{
          transitionTimingFunction: "linear",
        }}
        className=""
      >
        {qualificationsList.map((qualificationItem, index) => (
          <SwiperSlide key={qualificationItem.id} className="h-full">
            {/* <article className="h-full rounded-3xl bg-amber-200 px-28 py-16">
              {qualificationItem.acf?.title}
            </article> */}
            <QualificationsSlide slideData={qualificationItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
