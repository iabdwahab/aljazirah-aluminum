import SectionDescription from "../global/SectionDescription";
import SectionTitle from "../global/SectionTitle";
import { getLocale } from "next-intl/server";
import { getLocalizedText } from "@/lib/i18n-utils";

export default async function HRSectionHeading() {
  const locale = await getLocale();

  const sectionDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/54`,
  );
  const sectionData = await sectionDataResponse.json();

  const statisticsList: {
    number: string;
    text: string | { en: string; ar: string };
  }[] = Object.values(sectionData?.acf?.statistics);

  return (
    <div className="grid lg:gap-10 xl:grid-cols-2">
      <div>
        <SectionTitle
          title={getLocalizedText(sectionData?.acf?.title, locale)}
        />
        <SectionDescription
          description={getLocalizedText(
            sectionData?.acf?.description,
            locale,
          )}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 xl:grid xl:grid-cols-3">
        {statisticsList.map((statistic, index) => (
          <div key={index} className="mt-6 text-center">
            <h3 className="text-[164px] leading-35 text-brand-gold">
              {statistic.number.padStart(2, "0")}
            </h3>
            <p className="font-medium text-brand-gold">
              {getLocalizedText(statistic.text, locale)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
