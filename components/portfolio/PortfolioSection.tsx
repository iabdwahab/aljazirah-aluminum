import Image from "next/image";
import PortfolioHeading from "./PortfolioHeading";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function PortfolioSection() {
  const t = await getTranslations("PortfolioSection");

  const portfolioResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/gallery?per_page=9`,
  );
  const portfolioList: { id: number; acf: { image: string | false } }[] =
    await portfolioResponse.json();

  const firstGroupClassNames = [
    "lg:row-span-2 lg:col-start-1",
    "lg:row-span-2 lg:col-start-1",
    "lg:row-span-1 lg:row-start-1 lg:col-start-2",
    "lg:row-span-2 lg:row-start-2 lg:col-start-2",
    "lg:row-span-1 md:col-span-2 lg:row-start-4 lg:col-start-2 ",
  ];

  const lastGroupClassNames = ["lg:col-span-1", "lg:col-span-2"];

  return (
    <section className="bg-bg-dark py-16">
      <h2 className="hidden">{t("title")}</h2>
      <PortfolioHeading />

      <div className="container space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioList.map((portfolioItem, index) => (
            <div
              key={portfolioItem.id}
              // className={`${firstGroupClassNames[index]}`}
            >
              <Image
                key={portfolioItem.id}
                src={portfolioItem.acf.image || "/portfolio/work-1.png"}
                alt={t("imageAlt")}
                className={`h-[300px] w-full rounded-lg object-fill object-center`}
                width={556}
                height={388}
              />
            </div>
          ))}
        </div>

        {/* <div className="grid grid-rows-[300px] gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[600px]">
          {portfolioList.slice(5).map((portfolioItem, index) => (
            <div
              key={portfolioItem.id}
              className={`${lastGroupClassNames[index]}`}
            >
              <Image
                key={portfolioItem.id}
                src={portfolioItem.acf.image || "/portfolio/work-1.png"}
                alt={t("imageAlt")}
                className={`h-full w-full rounded-lg object-cover object-bottom`}
                width={556}
                height={388}
              />
            </div>
          ))}
        </div> */}
        <Link
          href="/gallery"
          className="bg-brand-gold-end mx-auto mt-8 block w-fit rounded-md px-8 py-3 font-bold text-black hover:opacity-90"
        >
          عرض المزيد
        </Link>
      </div>

      {/* <ContactLink /> */}
    </section>
  );
}
