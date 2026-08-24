import CategoryProductCard from "@/components/products/CategoryProductCard";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-doors?per_page=100`,
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
      type: "sliding" | "hinged";
    };
  }[] = await productsResponse.json();

  if (!Array.isArray(productsList)) {
    return (
      <section className="container min-h-screen pt-40">
        <h1 className="mb-4 text-3xl font-bold">
          {locale === "en"
            ? `Products: Hinged Doors`
            : `المنتجات: أبواب مفصلية `}
          .
        </h1>
        <p className="text-lg text-gray-500">
          {locale === "en" ? "No products found." : "لم يتم العثور على منتجات."}
        </p>
      </section>
    );
  }

  const hingedDoors = productsList.filter((product) => {
    return product.acf.type === "hinged";
  });

  return (
    <section className="container min-h-screen pt-40">
      <h1 className="mb-4 text-3xl font-bold">
        {locale === "en" ? `Products: Hinged Doors` : `المنتجات: أبواب مفصلية `}
      </h1>

      <div className="grid gap-4 lg:grid-cols-2">
        {hingedDoors.length === 0 ? (
          <p className="text-center text-lg text-gray-500 lg:col-span-2">
            {locale === "en"
              ? "No products found."
              : "لم يتم العثور على منتجات."}
          </p>
        ) : (
          hingedDoors.map((product, index) => (
            <CategoryProductCard
              key={index}
              product={product}
              locale={locale}
              category="doors"
            />
          ))
        )}
      </div>
    </section>
  );
}
