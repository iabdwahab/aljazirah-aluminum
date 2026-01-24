import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import WorkHeroSection from "@/components/HeroSections/WorkHeroSection";
import OurWorkContainer from "@/components/our-work/OurWorkContainer";
import ProductsSwiperContainer from "@/components/products-swiper/ProductsSwiperContainer";

export default function WorkPage() {
  return (
    <>
      <WorkHeroSection />
      <AboutUsSection type="section" />
      <ProductsSwiperContainer />
      <OurWorkContainer />
    </>
  );
}
