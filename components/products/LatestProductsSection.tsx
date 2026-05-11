import SectionTitle from "../global/SectionTitle";
import CategoryProductCard from "./CategoryProductCard";

export default async function LatestProductsSection({
  locale,
}: {
  locale: "en" | "ar";
}) {
  const res = await fetch(
    `https://alumjaz.com/wp/wp-json/mytheme/v1/products-all?per_page=6`,
  );
  const latestProducts: {
    id: number;
    type: string;
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
  }[] = await res.json();

  return (
    <section className="container my-20">
      <SectionTitle
        title={locale === "en" ? "Latest Products" : "أحدث المنتجات"}
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {latestProducts.map((product) => (
          <CategoryProductCard
            key={product.id}
            locale={locale}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
