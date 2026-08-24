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
                  >
                    <path
                      fill="#ffffff"
                      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                    ></path>
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
              {data.acf.social_media.snapchat && (
                <a
                  href={data.acf.social_media.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <span className="sr-only">Snapchat</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M21.93 16.56c-.14-.38-.43-.56-.71-.75c-.05-.03-.11-.06-.15-.08c-.07-.05-.18-.09-.27-.14c-.94-.5-1.68-1.13-2.19-1.87a6.15 6.15 0 0 1-.37-.66c-.04-.13-.04-.2-.01-.26c.03-.05.07-.1.12-.13c.15-.11.33-.21.44-.29c.21-.13.36-.23.46-.3c.39-.27.66-.58.83-.88c.24-.45.27-.98.08-1.45c-.25-.67-.89-1.09-1.66-1.09c-.16 0-.32.02-.5.05c0 .01-.06.02-.1.03c0-.46-.01-.94-.05-1.42c-.14-1.68-.73-2.56-1.35-3.26c-.39-.44-.85-.82-1.36-1.11c-.93-.53-1.99-.8-3.14-.8s-2.2.27-3.13.8c-.52.29-.98.67-1.37 1.11c-.62.7-1.2 1.58-1.35 3.26c-.04.48-.05.96-.04 1.42c-.05-.01-.11-.02-.11-.03c-.18-.03-.34-.05-.5-.05c-.77 0-1.41.42-1.66 1.09c-.19.47-.16 1 .08 1.45c.17.3.44.61.83.88c.1.07.25.17.46.31l.42.27c.06.04.1.09.14.14c.03.07.03.14-.02.27c-.1.23-.22.43-.36.65c-.5.73-1.21 1.35-2.12 1.84c-.49.26-.99.44-1.2 1c-.16.44-.07.94.35 1.35c.15.15.32.28.51.38c.4.21.82.39 1.25.5c.09.03.18.06.25.12c.15.12.13.32.33.59c.1.16.24.29.37.39c.41.29.87.3 1.37.32c.44.02.94.04 1.5.23c.26.06.5.23.79.41c.71.42 1.63 1 3.21 1c1.57 0 2.5-.58 3.22-1.01c.28-.17.53-.34.78-.4c.55-.19 1.06-.21 1.5-.23c.5-.01.96-.03 1.37-.32c.17-.12.31-.28.42-.46c.14-.24.14-.43.27-.52c.07-.05.15-.09.24-.11c.44-.12.86-.3 1.26-.51c.21-.11.39-.25.54-.42h.01c.39-.41.47-.87.32-1.31m-1.4.75c-.86.47-1.43.42-1.87.69c-.16.12-.21.28-.24.44l-.03.2c-.02.14-.05.26-.15.33c-.34.23-1.33-.02-2.61.4c-1.06.35-1.73 1.36-3.63 1.36s-2.55-1-3.63-1.36c-1.27-.42-2.27-.17-2.6-.4c-.27-.19-.05-.71-.43-.97c-.44-.27-1.01-.22-1.84-.69c-.31-.16-.36-.31-.32-.38c.04-.09.16-.16.24-.2c1.65-.79 2.58-1.82 3.05-2.63c.44-.72.53-1.27.56-1.35c.03-.21.06-.37-.17-.58c-.22-.21-1.2-.81-1.47-1c-.46-.32-.65-.63-.51-1.02c.12-.27.35-.37.62-.37c.08 0 .16.01.24.03c.5.1.98.35 1.26.42c.03.01.06.01.1.01c.09 0 .14-.03.17-.09c.01-.04.02-.09.02-.15c-.04-.54-.11-1.59-.03-2.58c.04-.42.11-.78.2-1.09c.2-.68.54-1.13.88-1.54c.25-.29 1.41-1.52 3.66-1.52c1.85 0 2.96.84 3.44 1.29c.1.1.18.18.22.23c.38.44.72.92.92 1.68c.07.27.13.59.16.95c.08.98.01 2.04-.03 2.58c0 .04 0 .08.01.11c.01.09.07.13.18.13c.04 0 .07 0 .1-.01c.28-.07.76-.32 1.26-.43c.08-.01.16-.02.24-.02c.25 0 .5.09.6.32l.01.04h.01v.01c.15.38-.05.7-.5 1.01c-.27.19-1.26.8-1.48 1c-.23.22-.2.38-.17.59c.03.1.21 1.05 1.11 2.11c.55.64 1.34 1.31 2.5 1.87c.07.03.16.08.21.14c.03.05.05.09.04.13c-.01.1-.1.2-.3.31Z"
                    ></path>
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
