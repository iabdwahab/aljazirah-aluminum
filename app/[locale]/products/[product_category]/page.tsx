import { productsCategories } from "@/local-data/products-categories";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  return productsCategories.map((category) => ({
    product_category: category.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ product_category: string }>;
}) {
  const { product_category } = await params;

  const locale = await getLocale();
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-${product_category}`,
  );
  const productsList: {
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
          {locale === "en"
            ? `Products: ${productsCategories.find((c) => c.slug === product_category)?.title.en}`
            : `المنتجات: ${productsCategories.find((c) => c.slug === product_category)?.title.ar}`}
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
        {locale === "en"
          ? `Products: ${productsCategories.find((c) => c.slug === product_category)?.title.en}`
          : `المنتجات: ${productsCategories.find((c) => c.slug === product_category)?.title.ar}`}
        .
      </h1>

      <div className="grid lg:grid-cols-2">
        {productsList.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center rounded-xl border border-gray-500/50 p-4"
          >
            <div>
              <Image
                src={
                  product.acf.main_image ||
                  "https://via.placeholder.com/400x300?text=No+Image"
                }
                alt={product.acf.title[locale as "en" | "ar"]}
                width={400}
                height={300}
              />
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-semibold">
                {product.acf.title[locale as "en" | "ar"]}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: product.acf.description[locale as "en" | "ar"],
                }}
                className="line-clamp-4"
              ></div>
              <Link
                href={`/products/${product_category}/${index}`}
                className="bg-brand-gold-end mt-4 inline-block rounded-md px-4 py-2 font-medium text-black"
              >
                {locale === "en" ? "View Details" : "عرض التفاصيل"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
