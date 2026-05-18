"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="border-border-primary bg-bg-overlay hover:bg-bg-card-hover flex h-9 items-center justify-center rounded-full border px-3 text-xs font-bold backdrop-blur-sm transition-colors duration-200"
      aria-label={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
      title={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
    >
      {locale === "ar" ? "EN" : "ع"}
    </button>
  );
}
