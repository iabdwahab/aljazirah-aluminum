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
        <div className="mb-8 flex flex-col justify-center gap-6">
          <Image
            src={data?.acf?.footer_logo || "/logo-full-with-text.svg"}
            alt={t("logoAlt")}
            width={311}
            height={102}
            className="m-auto h-20 w-40 object-contain md:h-40 md:w-80"
          />
          {data?.acf?.social_media && (
            <div className="flex items-center gap-4">
              {data.acf.social_media.facebook && (
                <a
                  href={data.acf.social_media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
              {data.acf.social_media.x && (
                <a
                  href={data.acf.social_media.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">X</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
              )}
              {data.acf.social_media.instagram && (
                <a
                  href={data.acf.social_media.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {data.acf.social_media.linkedin && (
                <a
                  href={data.acf.social_media.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
              {data.acf.social_media.youtube && (
                <a
                  href={data.acf.social_media.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              )}
              {data.acf.social_media.whatsapp && (
                <a
                  href={data.acf.social_media.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">WhatsApp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              )}
              {data.acf.social_media.tiktok && (
                <a
                  href={data.acf.social_media.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">TikTok</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              )}
            </div>
          )}
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
