"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 z-50 grid w-full grid-cols-[100px_1fr] items-center rounded-2xl border border-[#ffffff] bg-[#ffffff5b] px-4 py-4 backdrop-blur-sm md:right-5 md:w-[calc(100%-40px)] md:grid-cols-[100px_1fr_100px] md:px-6">
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
        <ul className="flex items-center gap-10 text-lg text-[#646464]">
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li>
            <Link href="/about">من نحن</Link>
          </li>
          <li>
            <Link href="/products">منتجاتنا</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-auto flex w-fit justify-end md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]">
          <span
            className={`block h-[2px] w-5 rounded bg-[#646464] transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded bg-[#646464] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded bg-[#646464] transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile nav dropdown */}
      <nav
        className={`col-span-full overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "mt-4 max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg text-[#646464]">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              من نحن
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              منتجاتنا
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
