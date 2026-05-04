"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 z-50 grid w-full grid-cols-[100px_1fr] items-center rounded-2xl border border-border-header px-4 py-4 transition-colors duration-300 md:right-5 md:w-[calc(100%-40px)] md:grid-cols-[100px_1fr_auto] md:px-6 ${
        scrolled
          ? "bg-bg-header-scrolled backdrop-blur-md"
          : "bg-bg-header backdrop-blur-sm"
      }`}
    >
      <div>
        <Image
          src="/logo-white.svg"
          alt="Logo"
          width={171}
          height={171}
          className="w-15"
        />
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex md:justify-center">
        <ul className="flex items-center gap-10 text-lg text-text-secondary">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
          <li>
            <Link href="/products">{t("products")}</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop controls */}
      <div className="hidden items-center gap-2 md:flex">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-auto flex w-fit justify-end md:hidden"
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
      >
        <div className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]">
          <span
            className={`block h-[2px] w-5 rounded bg-text-secondary transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded bg-text-secondary transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded bg-text-secondary transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile nav dropdown */}
      <nav
        className={`col-span-full overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg text-text-secondary">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              {t("products")}
            </Link>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
