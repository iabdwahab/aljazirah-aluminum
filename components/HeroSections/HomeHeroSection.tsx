import HeroSection from "../global/HeroSection";
import { getLocale } from "next-intl/server";
import { getLocalizedText } from "@/lib/i18n-utils";

export default async function HomeHeroSection() {
  const locale = await getLocale();
  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/108`,
  );
  const sectionData: {
    acf: {
      title: string | { en: string; ar: string };
      description: string | { en: string; ar: string };
    };
  } = await dataResponse.json();

  return (
    <HeroSection
      title={getLocalizedText(sectionData.acf.title, locale)}
      description={getLocalizedText(sectionData.acf.description, locale)}
    />
  );
}
