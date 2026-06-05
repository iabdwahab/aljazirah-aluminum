import SectionTitle from "@/components/global/SectionTitle";
import LatestProductsSection from "@/components/products/LatestProductsSection";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/posts/819`,
  );
  const data: {
    acf: {
      sliding: string | null;
      hinged: string | null;
    };
  } = await response.json();

  return (
    <>
      <section className="container pt-40">
        <SectionTitle
          title={locale === "en" ? `Products: Doors` : `المنتجات: الأبواب`}
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href={`/products/doors/sliding`}
            className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-3/4 w-full items-center justify-center">
              <Image
                src={data.acf.sliding || "/placeholder.png"}
                alt={locale === "en" ? `Sliding Doors` : `أبواب سحاب`}
                width={150}
                height={150}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="text-center text-lg font-bold text-gray-800 dark:text-gray-100">
              {locale === "en" ? `Sliding Doors` : `أبواب سحاب`}
            </span>
          </Link>
          <Link
            href={`/products/doors/hinged`}
            className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-3/4 w-full items-center justify-center">
              <Image
                src={data.acf.hinged || "/placeholder.png"}
                alt={locale === "en" ? `Hinged Doors` : `أبواب مفصلية`}
                width={150}
                height={150}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="text-center text-lg font-bold text-gray-800 dark:text-gray-100">
              {locale === "en" ? `Hinged Doors` : `أبواب مفصلية`}
            </span>
          </Link>
        </div>
      </section>
      <LatestProductsSection locale={locale} />
    </>
  );
}
