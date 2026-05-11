import { setRequestLocale } from "next-intl/server";
import WorkHeroSection from "@/components/HeroSections/WorkHeroSection";
import ProductsCategories from "@/components/products-categories/ProductsCategories";
import LatestProductsSection from "@/components/products/LatestProductsSection";

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
      <LatestProductsSection locale={locale as "en" | "ar"} />
      <ProductsCategories locale={locale as "en" | "ar"} />
    </>
  );
}
