import { setRequestLocale } from "next-intl/server";
import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import AboutHeroSection from "@/components/HeroSections/AboutHeroSection";
import HRSection from "@/components/hr-section/HRSection";
import QualificationsSection from "@/components/qualifications/QualificationsSection";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHeroSection />
      <QualificationsSection />
      <HRSection />
    </>
  );
}
