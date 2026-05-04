import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function PortfolioHeading() {
  const t = await getTranslations("PortfolioSection");

  return (
    <div className="mb-15 overflow-x-clip bg-linear-to-b from-[#8A5F00] to-[#F0A500] bg-clip-text text-4xl leading-15.25 font-black text-transparent lg:text-5xl">
      <div className="text-center rtl:hidden">
        <p>Our Portfolio</p>
      </div>
      <div className="ltr:hidden">
        <p className="mx-auto w-fit max-w-full pr-10 whitespace-nowrap lg:pr-20">
          معرض
          أعمالـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
        </p>
        <p className="block md:hidden">ـــــــــــــــــــنا</p>
        <p className="hidden md:block lg:hidden">
          ــــــــــــــــــــــــــــــــــــــــــــــــــــنا
        </p>

        <p className="hidden lg:block">
          ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــنا
        </p>
      </div>
    </div>
  );
}
