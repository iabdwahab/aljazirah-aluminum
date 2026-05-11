import { Link } from "@/i18n/navigation";
import SectionTitle from "../global/SectionTitle";
import Image from "next/image";

export default async function ProductsCategories({
  locale,
}: {
  locale: "en" | "ar";
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products-catlist`,
  );
  const productsCategories: {
    acf: {
      slug: string;
      title: {
        en: string;
        ar: string;
      };
      image: string | false;
    };
  }[] = await res.json();

  console.log("Fetched products categories:", productsCategories);

  return (
    <section className="container my-20">
      <SectionTitle
        title={locale === "en" ? "Products Categories" : "أقسام المنتجات"}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {productsCategories.map((category) => (
          <Link
            key={category.acf.slug}
            href={`/products/${category.acf.slug}`}
            className="flex h-64 flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-3/4 w-full items-center justify-center p-4">
              <Image
                src={category.acf.image || "/placeholder.png"}
                alt={category.acf.title[locale]}
                width={150}
                height={150}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="mt-4 text-center text-lg font-bold text-gray-800 dark:text-gray-100">
              {category.acf.title[locale]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
