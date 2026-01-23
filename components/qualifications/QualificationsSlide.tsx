import { QualificationInterface } from "@/types/qualifications";
import Image from "next/image";

export default function QualificationsSlide({
  slideData,
}: {
  slideData: QualificationInterface;
}) {
  const {
    acf: { slide_type, image },
  } = slideData;

  if (slide_type === "grid") {
    return (
      <article
        className={`relative z-10 grid h-full grid-cols-2 grid-rows-3 gap-10 overflow-hidden rounded-3xl bg-cover bg-center px-28 py-16 text-white`}
      >
        <Image
          src={image || "/qualifications/work-1.jpg"}
          alt="Background Image"
          className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
          width={4096}
          height={2731}
        />

        <span className="absolute top-0 left-0 -z-10 h-full w-full bg-linear-to-b from-[#00000000] to-[#292929]"></span>

        {Object.values(slideData.acf.grid_data || {}).map((item, index) => (
          <div
            key={index}
            className="text-2xl text-white"
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        ))}
      </article>
    );
  }

  return (
    <article
      className={`relative z-10 grid h-full grid-cols-2 grid-rows-3 gap-10 overflow-hidden rounded-3xl bg-cover bg-center px-28 py-16 text-white`}
    >
      <Image
        src={image || "/qualifications/work-1.jpg"}
        alt="Background Image"
        className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
        width={4096}
        height={2731}
      />

      <span className="absolute top-0 left-0 -z-10 h-full w-full bg-linear-to-b from-[#00000000] to-[#292929]"></span>

      {Object.values(slideData.acf.grid_data || {}).map((item, index) => (
        <div
          key={index}
          className="text-2xl text-white"
          dangerouslySetInnerHTML={{ __html: item }}
        ></div>
      ))}
    </article>
  );
}
