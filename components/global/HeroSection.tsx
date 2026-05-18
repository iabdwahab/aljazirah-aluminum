import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function HeroSection({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: {
    href: string;
    text: string;
  };
}) {
  const t = await getTranslations("HeroSection");

  return (
    <main className="relative flex min-h-screen items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9))] bg-cover bg-center bg-no-repeat text-white">
      <span>
        <Image
          src="/home/hero-image.png"
          alt={t("backgroundAlt")}
          fill
          className="absolute -z-10 object-cover"
        />
      </span>
      <div className="container flex min-h-screen flex-col items-center justify-center gap-2.5 text-center md:max-w-[95%] lg:max-w-[70%]">
        <Image
          src="/logo-full-text-bottom.png"
          className="h-40 w-50"
          alt={t("logoAlt")}
          width={171}
          height={171}
        />
        <h1 className="bg-[conic-gradient(from_180deg_at_50%_50%,#ffffff,#999999,#ffffff)] bg-clip-text text-[24px] font-black text-transparent md:text-[30px] lg:text-[40px]">
          {title}
        </h1>
        <p className="mb-4 text-sm font-normal md:text-base">{description}</p>

        <Link
          href={(link?.href as "/" | "/about" | "/products") || "/"}
          className="w-full max-w-62.5 rounded-full border bg-[rgba(255,255,255,0.1)] py-4 text-sm font-bold backdrop-blur-md md:text-base"
        >
          {link?.text || t("defaultCta")}
        </Link>
      </div>
    </main>
  );
}
