import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/global/HeroSection";
import SectionTitle from "@/components/global/SectionTitle";
import Image from "next/image";

export default async function WindowCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("WindowCategoryPage");

  return (
    <>
      <HeroSection title={t("title")} description={t("description")} />
      <div className="container my-20">
        <SectionTitle title={t("sectionTitle")} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-border-light bg-bg-primary p-10 duration-150 hover:bg-bg-card-hover"
            >
              <Image
                src={"/products_categories/1.png"}
                alt={t("itemName")}
                width={300}
                height={200}
                className="h-50 w-50 rounded-lg object-contain"
                style={{ filter: "var(--filter-category-icon)" }}
              />
              <h3 className="text-lg font-semibold text-text-primary">
                {t("itemName")}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
