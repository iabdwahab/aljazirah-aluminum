import { setRequestLocale } from "next-intl/server";
import AboutUsSection from "@/components/aboutus-section/AboutUsSection";
import CustomersSection from "@/components/customers/CustomersSection";
import HomeHeroSection from "@/components/HeroSections/HomeHeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ProductsCategories from "@/components/products-categories/ProductsCategories";
import ProductCard from "@/components/products/PageProductCard";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHeroSection />

      <ProductsCategories locale={locale as "en" | "ar"} />
      {/* <ProductsSection /> */}
      <div className="container">
        <AboutUsSection type="card" />
      </div>
      <CustomersSection />
      <PortfolioSection />
    </>
  );
}
