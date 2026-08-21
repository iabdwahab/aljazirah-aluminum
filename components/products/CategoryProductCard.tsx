import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface CategoryProductCardProps {
  product: {
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
  };
  locale: "en" | "ar";
  category: string;
}

export default function CategoryProductCard({
  product,
  locale,
  category  
}: CategoryProductCardProps) {
  return (
    <div
      key={product.id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg md:flex-row dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="relative flex w-full items-center justify-center bg-gray-50/50 p-6 md:w-5/12 md:shrink-0 dark:bg-zinc-950/50">
        <Image
          src={product.acf.main_image || "/placeholder.png"}
          alt={product.acf.title[locale as "en" | "ar"]}
          width={400}
          height={300}
          className="max-h-72 rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">
          {product.acf.title[locale as "en" | "ar"]}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: product.acf.description[locale as "en" | "ar"],
          }}
          className="mb-8 line-clamp-4 text-gray-600 dark:text-gray-300"
        ></div>
        <div className="mt-auto">
          <Link
            href={`/products/${category}/${product.id}`}
            className="bg-brand-gold-end inline-block rounded-lg px-6 py-2.5 font-semibold text-black shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            {locale === "en" ? "View Details" : "عرض التفاصيل"}
          </Link>
        </div>
      </div>
    </div>
  );
}
