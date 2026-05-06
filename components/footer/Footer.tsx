import { FooterInterface } from "@/types/footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { getLocalizedText } from "@/lib/i18n-utils";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("Footer");

  const dataResponse = await fetch(`
    ${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/195`);

  const data: FooterInterface = await dataResponse.json();

  return (
    <footer className="text-text-primary relative py-10">
      <Image
        src={"/footer-background.png"}
        alt={t("backgroundAlt")}
        width={1920}
        height={400}
        className="w-100vw absolute top-0 left-0 -z-10 h-full object-cover object-top opacity-80"
      />
      <div className="container">
        <div className="mb-8 flex items-start justify-center">
          <Image
            src={data?.acf?.footer_logo || "/logo-full-with-text.svg"}
            alt={t("logoAlt")}
            width={311}
            height={102}
            className="h-20 w-40 object-contain md:h-40 md:w-80"
          />
        </div>

        <div className="flex flex-wrap items-start gap-10">
          <div>
            <h3 className="mb-6 text-xl font-bold md:text-2xl">
              {getLocalizedText(
                data?.acf?.footer_column_1?.column_title,
                locale,
              )}
            </h3>

            <ul className="space-y-3">
              {Object.values(
                data?.acf?.footer_column_1?.column_links || {},
              ).map((link, index) => (
                <li key={index}>
                  <Link className="font-bold" href={link.link_url as "/"}>
                    {getLocalizedText(link.link_text, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold md:text-2xl">
              {getLocalizedText(
                data?.acf?.footer_column_2?.column_title,
                locale,
              )}
            </h3>

            <ul className="space-y-3">
              {Object.values(
                data?.acf?.footer_column_2?.column_links || {},
              ).map((link, index) => (
                <li key={index}>
                  <Link className="font-bold" href={link.link_url as "/"}>
                    {getLocalizedText(link.link_text, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
