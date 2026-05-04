import { HRSectionCardInterface } from "@/types/hrSectionCards";
import { getLocalizedText } from "@/lib/i18n-utils";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface OurWorkCardProps {
  data: HRSectionCardInterface;
  locale: string;
}

export default async function HRSectionCard({ data, locale }: OurWorkCardProps) {
  const { acf } = data;
  const { icon } = acf;
  const t = await getTranslations("HRSection");

  const title = getLocalizedText(acf.title, locale);
  const description = getLocalizedText(acf.description, locale);

  return (
    <article className="rounded-[27px] border border-border-primary bg-bg-primary px-6 pt-9 pb-18">
      <Image
        src={icon || "/hr_section/shield-icon.png"}
        alt={t("iconAlt")}
        className="mb-3 h-25 w-25"
        width={1600}
        height={1600}
      />

      <h3 className="mb-3 font-bold text-brand-gold">{title}</h3>

      <div
        className="space-y-3 leading-8.25 text-text-primary"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </article>
  );
}
