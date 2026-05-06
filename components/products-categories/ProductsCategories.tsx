import { Link } from "@/i18n/navigation";
import SectionTitle from "../global/SectionTitle";
import { productsCategories } from "@/local-data/products-categories";
export default function ProductsCategories({
  locale,
}: {
  locale: "en" | "ar";
}) {
  return (
    <section className="container my-20">
      <SectionTitle
        title={locale === "en" ? "Products Categories" : "أقسام المنتجات"}
      />

      <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {productsCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="rounded-md border p-4 text-center"
          >
            {category.title[locale as "en" | "ar"]}
          </Link>
        ))}
      </div>
    </section>
  );
}
