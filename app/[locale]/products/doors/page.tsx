import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  return (
    <section className="container min-h-screen pt-40">
      <h1 className="mb-6 text-3xl font-bold">
        {locale === "en" ? `Products: Doors` : `المنتجات: الأبواب`}
      </h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href={`/products/doors/sliding`}
          className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          {/* <div className="flex h-3/4 w-full items-center justify-center p-4">
            <Image
              src={"/placeholder.png"}
              alt={locale === "en" ? `Sliding Doors` : `أبواب سحاب`}
              width={150}
              height={150}
              className="max-h-full max-w-full object-contain"
            />
          </div> */}
          <span className="text-center text-lg font-bold text-gray-800 dark:text-gray-100">
            {locale === "en" ? `Sliding Doors` : `أبواب سحاب`}
          </span>
        </Link>
        <Link
          href={`/products/doors/hinged`}
          className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          {/* <div className="flex h-3/4 w-full items-center justify-center p-4">
            <Image
              src={"/placeholder.png"}
              alt={locale === "en" ? `Hinged Doors` : `أبواب مفصلية`}
              width={150}
              height={150}
              className="max-h-full max-w-full object-contain"
            />
          </div> */}
          <span className="text-center text-lg font-bold text-gray-800 dark:text-gray-100">
            {locale === "en" ? `Hinged Doors` : `أبواب مفصلية`}
          </span>
        </Link>
      </div>
    </section>
  );
}
