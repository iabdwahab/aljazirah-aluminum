import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
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
  return (
    <main className="relative flex min-h-screen items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9))] bg-cover bg-center bg-no-repeat text-white">
      <span>
        <Image
          src="/home/hero-image.png"
          alt="خلفية الهيرو"
          fill
          className="absolute -z-10 object-cover"
        />
      </span>
      <div className="container flex min-h-screen flex-col items-center justify-center gap-2.5 text-center md:max-w-[95%] lg:max-w-[70%]">
        <Image
          src="/logo-white.svg"
          className="h-25 w-25 md:h-30 md:w-30 lg:h-35 lg:w-35"
          alt="لوجو مصنع ألمنيوم الجزيرة"
          width={171}
          height={171}
        />
        <h1 className="text-[24px] font-black md:text-[30px] lg:text-[40px]">
          {title}
        </h1>
        <p className="mb-4 text-sm font-normal md:text-base">{description}</p>

        <Link
          href={link?.href || "#contact"}
          className="bg-[rgba(255, 255, 255, 0.1)] w-full max-w-62.5 rounded-full border py-4 text-sm font-bold backdrop-blur-md md:text-base"
        >
          {link?.text || "تواصل معنا"}
        </Link>
      </div>
    </main>
  );
}
