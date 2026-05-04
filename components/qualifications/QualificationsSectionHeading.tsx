import SectionDescription from "../global/SectionDescription";
import SectionTitle from "../global/SectionTitle";
import { getLocale } from "next-intl/server";
import { getLocalizedText } from "@/lib/i18n-utils";

export default async function QualificationsSectionHeading() {
  const locale = await getLocale();

  const sectionDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/78`,
  );
  const sectionData = await sectionDataResponse.json();

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-20">
      <SectionTitle
        title={getLocalizedText(sectionData?.acf?.title, locale)}
      />
      <SectionDescription
        description={getLocalizedText(sectionData?.acf?.description, locale)}
        className="col-span-2"
      />
    </div>
  );
}
