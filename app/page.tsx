import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import CustomersSection from "@/components/customers/CustomersSection";
import HomeHeroSection from "@/components/HeroSections/HomeHeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ProductsCategories from "@/components/products-categories/ProductsCategories";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <ProductsCategories />
      {/* <ProductsSection /> */}
      <div className="container">
        <AboutUsSection type="card" />
      </div>
      <CustomersSection />
      <PortfolioSection />
    </>
  );
}
