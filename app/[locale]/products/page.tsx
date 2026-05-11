import { setRequestLocale } from "next-intl/server";
import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import WorkHeroSection from "@/components/HeroSections/WorkHeroSection";
import OurWorkContainer from "@/components/our-work/OurWorkContainer";
import ProductsSwiperContainer from "@/components/products-swiper/ProductsSwiperContainer";
import ProductsCategories from "@/components/products-categories/ProductsCategories";

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
      <ProductsCategories locale={locale as "en" | "ar"} />

      {/* <AboutUsSection type="section" /> */}
      {/* <ProductsSwiperContainer /> */}
      <OurWorkContainer />
    </>
  );
}
