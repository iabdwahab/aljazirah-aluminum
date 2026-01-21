import HomeHeroSection from "@/components/HomeHeroSection";
import HRSection from "@/components/hr-section/HRSection";
import HRSectionCard from "@/components/hr-section/HRSectionCard";
import ProductCard from "@/components/product-card/ProductCard";
import { productsList } from "@/local-data/products";

export default function Home() {
  const productCardClassNames = [
    "lg:col-start-1 lg:col-span-2 bg-blue-50 flex flex-row-reverse items-center gap-4 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // إطارات
    "lg:col-start-1 lg:col-span-2 lg:row-start-2 bg-blue-100 flex flex-row items-center gap-4 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // الستائر الزجاجية الجدارية
    "lg:col-start-3 lg:row-start-1 lg:row-span-2 bg-blue-200 flex flex-col gap-4", // النوافذ القلاب
    "lg:col-start-1 lg:row-start-1 lg:row-span-2 bg-green-50 flex flex-col gap-10", // الابواب المفصلية
    "lg:col-start-2 lg:col-span-2 lg:row-start-1 bg-green-100 flex items-center gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // النوافذ المفصلية و ثنائية الأغراض
    "lg:col-start-2 lg:col-span-2 lg:row-start-2 bg-green-200 flex items-center gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // ألمنيوم ستائر دوارة
    "lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-50  flex items-center gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // ألمنيوم ستائر دوارة
    "lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-100  flex items-center gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // النوافذ السحاب
    "lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-200  flex items-center gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // أبواب المروحة
    "lg:col-start-3 lg:row-start-1 lg:row-span-3 bg-red-300 flex flex-col gap-10", // القبب السماوية
    "lg:col-start-3 lg:row-start-4 lg:row-span-3 bg-red-400 flex flex-col gap-10", // الواحات الزجاجية
  ];

  const finalProductsList = productsList.map((product, index) => ({
    ...product,
    className: productCardClassNames[index] || "bg-gray-100",
  }));

  return (
    <>
      <HomeHeroSection />

      <HRSection />

      <div className="container my-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {finalProductsList.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            className={product.className}
            title={product.title}
            features={product.features}
            image={`/products/product-${product.id}.svg`}
          />
        ))}
      </div>

      <div className="container my-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {finalProductsList.slice(3, 6).map((product) => (
          <ProductCard
            key={product.id}
            className={product.className}
            title={product.title}
            features={product.features}
            image={`/products/product-${product.id}.svg`}
          />
        ))}
      </div>

      <div className="container my-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-6">
        {finalProductsList.slice(6).map((product) => (
          <ProductCard
            key={product.id}
            className={product.className}
            title={product.title}
            features={product.features}
            image={`/products/product-${product.id}.svg`}
          />
        ))}
      </div>
    </>
  );
}
