import { AboutUsSectionInterface } from "@/types/aboutUsSection";
import { getLocalizedText } from "@/lib/i18n-utils";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function AboutUsSectionTypeSection({
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
      className={`text-text-primary relative my-4 overflow-hidden px-10 pt-18.75 lg:px-18.75 lg:pb-60 ${className}`}
    >
      <div className="lg:max-w-3/5">
        <h3 className="from-brand-gold-start to-brand-gold-end mb-4 bg-linear-to-b bg-clip-text text-4xl leading-15.25 font-black text-transparent">
          {title || t("defaultTitle")}
        </h3>
        <p className="mb-8 leading-6.75">
          {description || t("defaultDescription")}
        </p>

        <Link
          href={(data?.acf?.section_link?.href as "/") || "/"}
          className={`bg-bg-dark text-text-on-dark block w-full rounded-full px-8 text-center leading-15.25 font-bold backdrop-blur-sm md:w-fit md:px-32`}
        >
          {ctaText || t("defaultCta")}
        </Link>
      </div>

      {/* Side Image */}
      <Image
        src={data?.acf?.hero_image || "/unlabeled/about-section-hero-image.png"}
        alt={t("sideImageAlt")}
        className={`absolute top-0 -z-10 w-1/3 max-lg:hidden ltr:right-0 rtl:left-0`}
        width={521}
        height={876}
      />
    </section>
  );
}
