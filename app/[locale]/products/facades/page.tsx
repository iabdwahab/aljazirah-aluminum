import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-facades`,
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
          {locale === "en" ? `Products: Facades` : `المنتجات: الواجهات`}.
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
        {locale === "en" ? `Products: Facades` : `المنتجات: الواجهات`}.
      </h1>

      <div className="grid lg:grid-cols-2">
        {productsList.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center rounded-xl border border-gray-500/50 p-4"
          >
            <div>
              <Image
                src={product.acf.main_image || "/placeholder.png"}
                alt={product.acf.title[locale as "en" | "ar"]}
                width={400}
                height={300}
                className="max-h-100 object-contain"
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
                href={`/products/facades/${product.id}`}
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
