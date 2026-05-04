import { getTranslations } from "next-intl/server";

export default async function PortfolioHeading() {
  const t = await getTranslations("PortfolioSection");

  return (
    <div className="mb-15 overflow-x-clip bg-linear-to-b from-brand-gold-start to-brand-gold-end bg-clip-text text-4xl leading-15.25 font-black text-transparent lg:text-5xl">
      <p className="mx-auto w-fit max-w-full pr-10 whitespace-nowrap lg:pr-20">
        {t("heading1")}
      </p>
      <p className="block md:hidden">{t("heading2_mobile")}</p>
      <p className="hidden md:block lg:hidden">{t("heading2_tablet")}</p>
      <p className="hidden lg:block">{t("heading2_desktop")}</p>
    </div>
  );
}
