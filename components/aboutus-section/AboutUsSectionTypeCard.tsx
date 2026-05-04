import { AboutUsSectionInterface } from "@/types/aboutUsSection";
import { getLocalizedText } from "@/lib/i18n-utils";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function AboutUsSectionTypeCard({
  data,
  className = "",
  locale,
}: {
  data: AboutUsSectionInterface;
  className?: string;
  locale: string;
}) {
  const t = await getTranslations("AboutUsSection");

  const title = getLocalizedText(data?.acf?.title, locale);
  const description = getLocalizedText(data?.acf?.description, locale);
  const ctaText = getLocalizedText(data?.acf?.section_link?.text, locale);

  return (
    <section
      className={`relative z-10 my-4 overflow-hidden rounded-4xl bg-bg-dark px-8 pt-18.75 pb-20 text-text-on-dark lg:px-18.75 lg:pb-30 ${className}`}
    >
      {/* Blurry corner */}
      <span className="absolute -right-1/2 -bottom-1/2 -z-10 h-full w-full bg-linear-to-b from-brand-gold-start to-brand-gold-end blur-[661px] lg:w-1/2"></span>

      <div className="lg:max-w-3/5">
        <Image
          src={data?.acf?.logo || "/logo.svg"}
          alt={t("logoAlt")}
          className="mb-3"
          width={117}
          height={117}
        />

        <div>
          <h3 className="mb-4 hidden bg-linear-to-b from-brand-gold-start to-brand-gold-end bg-clip-text text-4xl leading-15.25 font-black text-transparent md:block">
            {title || t("defaultTitle")}
          </h3>
          <h3 className="mb-4 block bg-linear-to-b from-brand-gold-start to-brand-gold-end bg-clip-text text-4xl leading-15.25 font-black text-transparent md:hidden">
            {(title || t("defaultTitleMobile")).split("ـ").join("")}
          </h3>
        </div>

        <p className="mb-8 leading-6.75 max-md:text-justify">
          {description || t("defaultDescription")}
        </p>

        <Link
          href={(data?.acf?.section_link?.href as "/") || "/"}
          className={`block w-full rounded-full bg-bg-overlay px-8 text-center leading-15.25 font-bold backdrop-blur-sm md:w-fit md:px-32`}
        >
          {ctaText || t("defaultCta")}
        </Link>
      </div>

      {/* Side Image */}
      <Image
        src={data?.acf?.hero_image || "/unlabeled/about-section-hero-image.png"}
        alt={t("sideImageAlt")}
        className={`absolute -bottom-3 left-0 h-full w-full object-contain max-lg:hidden lg:w-2/5`}
        width={521}
        height={876}
      />
    </section>
  );
}
