import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/global/HeroSection";
import ProductsCategories from "@/components/products-categories/ProductsCategories";

export default async function ProductsCategoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ProductsCategoriesPage");

  return (
    <>
      <HeroSection title={t("title")} description={t("description")} />
      <ProductsCategories />
    </>
  );
}
