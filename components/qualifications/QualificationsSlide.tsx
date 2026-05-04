"use client";

import { QualificationInterface } from "@/types/qualifications";
import { getLocalizedText } from "@/lib/i18n-utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function QualificationsSlide({
  slideData,
  locale,
}: {
  slideData: QualificationInterface;
  locale: string;
}) {
  const t = useTranslations("QualificationsSection");
  const {
    acf: { slide_type, image },
  } = slideData;

  const title = getLocalizedText(slideData.acf.title, locale);
  const description = getLocalizedText(slideData.acf.description, locale);

  if (slide_type === "grid") {
    return (
      <article
        className={`relative z-10 grid h-full grid-rows-3 gap-4 overflow-hidden rounded-3xl bg-cover bg-center px-6 py-10 text-white lg:grid-cols-2 lg:gap-10 lg:px-28 lg:py-16`}
      >
        <Image
          src={image || "/qualifications/work-1.jpg"}
          alt={t("backgroundAlt")}
          className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
          width={4096}
          height={2731}
        />

        <span className="absolute top-0 left-0 -z-10 h-full w-full bg-linear-to-b from-[#00000000] to-[#292929]"></span>

        {Object.values(slideData.acf.grid_data || {}).map((item, index) => (
          <div
            key={index}
            className="text-xl text-white md:text-2xl"
            dangerouslySetInnerHTML={{
              __html: getLocalizedText(item, locale),
            }}
          ></div>
        ))}
      </article>
    );
  }

  return (
    <article
      className={`${slide_type === "one_column" ? "space-y-10" : "grid lg:grid-cols-2"} relative z-10 h-full overflow-hidden rounded-3xl bg-cover bg-center px-6 py-10 text-white lg:px-28 lg:py-16`}
    >
      <Image
        src={image || "/qualifications/work-1.jpg"}
        alt={t("backgroundAlt")}
        className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
        width={4096}
        height={2731}
      />
      <span className="absolute top-0 left-0 -z-10 h-full w-full bg-linear-to-b from-[#00000000] to-[#292929]"></span>

      <h3 className="mb-6 text-4xl font-black">{title}</h3>
      {description && (
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={`${slide_type === "one_column" ? "" : "space-y-2"} text-xl font-bold md:text-2xl`}
        ></div>
      )}
    </article>
  );
}
