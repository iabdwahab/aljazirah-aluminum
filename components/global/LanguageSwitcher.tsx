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
      className="flex h-9 items-center justify-center rounded-full border border-border-primary bg-bg-overlay px-3 text-xs font-bold text-text-secondary backdrop-blur-sm transition-colors duration-200 hover:bg-bg-card-hover"
      aria-label={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
      title={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
    >
      {locale === "ar" ? "EN" : "ع"}
    </button>
  );
}
