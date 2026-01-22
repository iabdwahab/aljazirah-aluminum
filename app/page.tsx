import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import HeroSection from "@/components/global/HeroSection";
import HomeHeroSection from "@/components/HeroSections/HomeHeroSection";
import ProductsSwiperContainer from "@/components/products-swiper/ProductsSwiperContainer";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      {/* <HomeHeroSection />
      <ProductsSwiperContainer className="hidden md:block" />
      <ProductsSection />
      <div className="lg:container">
        <AboutUsSection type="card" className="rounded-none lg:rounded-4xl" />
      </div> */}
    </>
  );
}
