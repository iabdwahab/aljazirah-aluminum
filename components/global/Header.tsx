import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
      <nav className="flex justify-end md:justify-center">
        <ul className="flex items-center gap-4 text-lg text-[#646464] md:gap-10">
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
    </header>
  );
}
