import { HRSectionCardInterface } from "@/types/hrSectionCards";
import Image from "next/image";

interface OurWorkCardProps {
  data: HRSectionCardInterface;
}

export default function HRSectionCard({ data }: OurWorkCardProps) {
  const { acf } = data;
  const { icon, title, description } = acf;

  console.log(data);

  return (
    <article className="px-6 pt-9 pb-18 rounded-[27px] border border-[rgba(211,211,211,1)]">
      <Image
        src={icon || "/hr_section/shield-icon.png"}
        alt="صورة أيقونة القسم"
        className="w-25 h-25 mb-3"
        width={1600}
        height={1600}
      />

      <h3 className="text-[rgba(209,145,1,1)] font-bold mb-3">{title}</h3>

      <div
        className="leading-8.25 text-[rgba(41,41,41,1)] space-y-3"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </article>
  );
}
