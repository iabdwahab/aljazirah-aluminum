import CategoryProductCard from "@/components/products/CategoryProductCard";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-rollshutter?per_page=100`,
  );
  const productsList: {
    id: number;
    acf: {
      title: { en: string; ar: string };
      description: { en: string; ar: string };
      main_image: string | false;
      more_images: {
        image_1: string | false;
        image_2: string | false;
        image_3: string | false;
        image_4: string | false;
        image_5: string | false;
        image_6: string | false;
      };
    };
  }[] = await productsResponse.json();

  if (!Array.isArray(productsList)) {
    return (
      <section className="container min-h-screen pt-40">
        <h1 className="mb-4 text-3xl font-bold">
          {locale === "en" ? `Products: Rollshutter` : `المنتجات: ستائر معدنية`}
          .
        </h1>
        <p className="text-lg text-gray-500">
          {locale === "en" ? "No products found." : "لم يتم العثور على منتجات."}
        </p>
      </section>
    );
  }

  console.log(productsList);
  return (
    <section className="container min-h-screen pt-40">
      <h1 className="mb-4 text-3xl font-bold">
        {locale === "en" ? `Products: Rollshutter.` : `المنتجات: ستائر معدنية.`}
      </h1>

      <div className="grid gap-4 lg:grid-cols-2">
        {productsList.length === 0 ? (
          <p className="text-center text-lg text-gray-500 lg:col-span-2">
            {locale === "en"
              ? "No products found."
              : "لم يتم العثور على منتجات."}
          </p>
        ) : (
          productsList.map((product, index) => (
            <CategoryProductCard
              key={product.id}
              locale={locale}
              product={product}
              category="rollshutter"
            />
          ))
        )}
      </div>
    </section>
  );
}
