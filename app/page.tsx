import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <ProductsSection />
      <div className="container">
        <AboutUsSection type="card" />
      </div>
    </>
  );
}
