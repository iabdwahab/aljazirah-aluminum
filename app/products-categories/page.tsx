import HeroSection from "@/components/global/HeroSection";
import ProductsCategories from "@/components/products-categories/ProductsCategories";

export default function ProductsCategoriesPage() {
  return (
    <>
      <HeroSection
        title="المنتجات"
        description="اكتشف مجموعة متنوعة من المنتجات التي تلبي احتياجاتك"
      />
      <ProductsCategories />
    </>
  );
}
