import { setRequestLocale } from "next-intl/server";
import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import WorkHeroSection from "@/components/HeroSections/WorkHeroSection";
import OurWorkContainer from "@/components/our-work/OurWorkContainer";
import ProductsSwiperContainer from "@/components/products-swiper/ProductsSwiperContainer";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <WorkHeroSection />
      <AboutUsSection type="section" />
      <ProductsSwiperContainer />
      <OurWorkContainer />
    </>
  );
}
