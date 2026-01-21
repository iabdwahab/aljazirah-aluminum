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
    <article className="rounded-[27px] border border-[rgba(211,211,211,1)] px-6 pt-9 pb-18">
      <Image
        src={icon || "/hr_section/shield-icon.png"}
        alt="صورة أيقونة القسم"
        className="mb-3 h-25 w-25"
        width={1600}
        height={1600}
      />

      <h3 className="mb-3 font-bold text-[rgba(209,145,1,1)]">{title}</h3>

      <div
        className="space-y-3 leading-8.25 text-[rgba(41,41,41,1)]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </article>
  );
}
