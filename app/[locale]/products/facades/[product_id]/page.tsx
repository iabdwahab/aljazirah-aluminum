import PageProductCard from "@/components/products/PageProductCard";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const productsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-facades`,
    );
    if (!productsResponse.ok) {
      return [{ product_id: "682" }];
    }

    const productsList: {
      id: number;
    }[] = await productsResponse.json();

    if (!Array.isArray(productsList) || productsList.length === 0) {
      return [{ product_id: "682" }];
    }

    return productsList.map((product) => ({
      product_id: product.id.toString(),
    }));
  } catch (error) {
    return [{ product_id: "682" }];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar"; product_id: string }>;
}) {
  const { locale, product_id } = await params;
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-facades/${product_id}`,
  );
  const productData: {
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
  } = await productsResponse.json();

  if (Array.isArray(productData)) {
    return (
      <section className="container flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-5xl font-bold">
          {locale === "en" ? "Product not found." : "لم يتم العثور على المنتج."}
        </h1>
        <Link
          href="/products/facades"
          className="bg-brand-gold-end mx-auto inline-block rounded-md px-4 py-2 font-medium text-black"
        >
          {locale === "en"
            ? "Back to Facades Products"
            : "العودة إلى منتجات الواجهات"}
        </Link>
      </section>
    );
  }

  console.log(productData);
  return (
    <section className="container min-h-screen pt-40">
      <h1 className="mb-4 text-3xl font-bold">
        {locale === "en" ? `Product: Facades / ` : `المنتج: الواجهات / `}
        <span className="text-brand-gold-end">
          {productData.acf.title[locale as "en" | "ar"]}.
        </span>
      </h1>

      <div className="">
        <PageProductCard
          acf={productData.acf}
          locale={locale}
          id={product_id}
        />
      </div>
    </section>
  );
}
