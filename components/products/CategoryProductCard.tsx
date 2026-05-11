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
}

export default function CategoryProductCard({
  product,
  locale,
}: CategoryProductCardProps) {
  return (
    <div
      key={product.id}
      className="grid grid-cols-2 items-center gap-4 rounded-xl border border-gray-500/50 p-4"
    >
      <div>
        <Image
          src={product.acf.main_image || "/placeholder.png"}
          alt={product.acf.title[locale as "en" | "ar"]}
          width={400}
          height={300}
          className="max-h-100 rounded-xl object-contain"
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
          href={`/products/doors/${product.id}`}
          className="bg-brand-gold-end mt-4 inline-block rounded-md px-4 py-2 font-medium text-black"
        >
          {locale === "en" ? "View Details" : "عرض التفاصيل"}
        </Link>
      </div>
    </div>
  );
}
