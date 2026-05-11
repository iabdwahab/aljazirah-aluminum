// import { ProductCardInterface } from "@/types/productsCards";
// import ProductCard from "./PageProductCard";
// import { getLocale, getTranslations } from "next-intl/server";
// import { getLocalizedText } from "@/lib/i18n-utils";

// export default async function ProductsContainer() {
//   const locale = await getLocale();

//   const productsResponse = await fetch(
//     `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products?per_page=11`,
//   );
//   const productsList: ProductCardInterface[] = await productsResponse.json();

//   const productCardClassNames = [
//     "lg:col-start-1 lg:col-span-2 flex flex-col md:flex-row md:items-center gap-4 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // إطارات
//     "lg:col-start-1 lg:col-span-2 lg:row-start-2 flex flex-col md:flex-row-reverse md:items-center gap-4 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // الستائر الزجاجية الجدارية
//     "lg:col-start-3 lg:row-start-1 lg:row-span-2 flex flex-col md:flex-row lg:flex-col gap-4", // النوافذ القلاب
//     "lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col md:flex-row-reverse lg:flex-col gap-10", // الابواب المفصلية
//     "lg:col-start-2 lg:col-span-2 lg:row-start-1 flex md:items-center flex-col md:flex-row gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // النوافذ المفصلية و ثنائية الأغراض
//     "lg:col-start-2 lg:col-span-2 lg:row-start-2 flex md:items-center flex-col md:flex-row-reverse gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // ألمنيوم ستائر دوارة
//     "lg:col-start-1 lg:col-span-2 lg:row-span-2 flex md:items-center flex-col md:flex-row gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // ألمنيوم ستائر دوارة
//     "lg:col-start-1 lg:col-span-2 lg:row-span-2 flex md:items-center flex-col md:flex-row-reverse gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // النوافذ السحاب
//     "lg:col-start-1 lg:col-span-2 lg:row-span-2 flex md:items-center flex-col md:flex-row gap-10 [&>*:first-child]:basis-1/3 [&>*:last-child]:basis-2/3", // أبواب المروحة
//     "lg:col-start-3 lg:row-start-1 lg:row-span-3 flex flex-col md:flex-row-reverse lg:flex-col gap-10", // القبب السماوية
//     "lg:col-start-3 lg:row-start-4 lg:row-span-3 flex flex-col md:flex-row lg:flex-col  gap-10", // الواجهات الزجاجية
//   ];

//   const finalProductsList = productsList.map(
//     (product: ProductCardInterface, index: number) => ({
//       ...product,
//       className: productCardClassNames[index] || "bg-bg-card",
//     }),
//   );

//   return (
//     <>
//       <div className="my-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
//         {finalProductsList.slice(0, 3).map((product) => (
//           <ProductCard
//             key={product.id}
//             className={product.className}
//             title={getLocalizedText(product.acf.product_name, locale)}
//             description={getLocalizedText(
//               product.acf.product_description,
//               locale,
//             )}
//             image={product.acf.image || `/products/product-1.svg`}
//           />
//         ))}
//       </div>

//       <div className="my-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
//         {finalProductsList.slice(3, 6).map((product) => (
//           <ProductCard
//             key={product.id}
//             className={product.className}
//             title={getLocalizedText(product.acf.product_name, locale)}
//             description={getLocalizedText(
//               product.acf.product_description,
//               locale,
//             )}
//             image={product.acf.image || `/products/product-1.svg`}
//           />
//         ))}
//       </div>

//       <div className="my-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-6">
//         {finalProductsList.slice(6).map((product) => (
//           <ProductCard
//             key={product.id}
//             className={product.className}
//             title={getLocalizedText(product.acf.product_name, locale)}
//             description={getLocalizedText(
//               product.acf.product_description,
//               locale,
//             )}
//             image={product.acf.image || `/products/product-1.svg`}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
