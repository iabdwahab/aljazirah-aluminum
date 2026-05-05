import { Link } from "@/i18n/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-heavillum`,
  );
  const productsList: {
    id: number;
  }[] = await productsResponse.json();

  if (!Array.isArray(productsList)) {
    return [];
  }

  return productsList.map((product) => ({
    product_id: product.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar"; product_id: string }>;
}) {
  const { locale, product_id } = await params;
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-heavillum/${product_id}`,
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
          href="/products/heavillum"
          className="bg-brand-gold-end mx-auto inline-block rounded-md px-4 py-2 font-medium text-black"
        >
          {locale === "en"
            ? "Back to Heavenly Illumination Products"
            : "العودة إلى منتجات الإضاءات السماوية"}
        </Link>
      </section>
    );
  }

  console.log(productData);
  return (
    <section className="container min-h-screen pt-40">
      <h1 className="mb-4 text-3xl font-bold">
        {locale === "en"
          ? `Product: Heavenly Illumination / `
          : `المنتج: الإضاءات السماوية / `}
        <span className="text-brand-gold-end">
          {productData.acf.title[locale as "en" | "ar"]}.
        </span>
      </h1>

      <div className="">
        <div
          key={product_id}
          className="grid items-start rounded-xl border border-gray-500/50 px-4 py-10 lg:grid-cols-2"
        >
          <div className="lg:sticky lg:top-40">
            <Image
              src={productData.acf.main_image || "/placeholder.png"}
              alt={productData.acf.title[locale as "en" | "ar"]}
              width={400}
              height={300}
              className="mx-auto max-h-100 object-contain"
            />
          </div>
          <div>
            <h3 className="mb-4 text-3xl font-semibold">
              {productData.acf.title[locale as "en" | "ar"]}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: productData.acf.description[locale as "en" | "ar"],
              }}
            ></div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {Object.values(productData.acf.more_images).map((img, idx) =>
                img ? (
                  <Image
                    key={idx}
                    src={img}
                    alt={productData.acf.title[locale as "en" | "ar"]}
                    width={400}
                    height={300}
                    className="h-100 w-full object-cover"
                  />
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
