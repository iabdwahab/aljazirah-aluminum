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
    <main className="flex min-h-screen items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url('/home/hero-image.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="container flex min-h-screen flex-col items-center justify-center gap-2.5 text-center md:max-w-[95%] lg:max-w-[70%]">
        <Image
          src="/logo-white.svg"
          className="h-25 w-25 md:h-30 md:w-30 lg:h-35 lg:w-35"
          alt="لوجو مصنع ألمنيوم الجزيرة"
          width={171}
          height={171}
        />
        <h1 className="bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,#999999_360deg)] bg-clip-text text-[20px] font-black text-transparent lg:text-[40px]">
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
