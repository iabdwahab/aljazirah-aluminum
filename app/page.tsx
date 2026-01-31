import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import HomeHeroSection from "@/components/HeroSections/HomeHeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <ProductsSection />
      <div className="container">
        <AboutUsSection type="card" />
      </div>
      <PortfolioSection />
    </>
  );
}
