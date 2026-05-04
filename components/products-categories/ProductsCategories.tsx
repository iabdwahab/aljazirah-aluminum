import Image from "next/image";
import SectionTitle from "../global/SectionTitle";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const categories = [
  {
    id: 1,
    nameKey: "windows" as const,
    image: "/products_categories/1.png",
  },
  {
    id: 2,
    nameKey: "doors" as const,
    image: "/products_categories/2.png",
  },
  {
    id: 3,
    nameKey: "facades" as const,
    image: "/products_categories/3.png",
  },
  {
    id: 4,
    nameKey: "skylights" as const,
    image: "/products_categories/4.png",
  },
  {
    id: 5,
    nameKey: "other" as const,
    image: "/products_categories/5.png",
  },
];

export default async function ProductsCategories() {
  const t = await getTranslations("ProductsCategories");

  return (
    <section className="container my-20">
      <SectionTitle title={t("title")} />

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            href={`/products-categories/window`}
            key={category.id}
            className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border-light bg-bg-primary p-10 duration-150 hover:bg-bg-card-hover"
          >
            <Image
              src={category.image}
              alt={t(category.nameKey)}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain"
              style={{ filter: "var(--filter-category-icon)" }}
            />
            <h3 className="text-lg font-semibold text-text-primary">
              {t(category.nameKey)}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
