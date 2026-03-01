import { FooterInterface } from "@/types/footer";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const dataResponse = await fetch(`
    ${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/195`);

  const data: FooterInterface = await dataResponse.json();
  console.log("Footer: ", data);

  return (
    <footer className="relative py-10 text-[#292929]">
      <Image
        src={"/footer-image.png"}
        alt={"خلفية الفوتر"}
        width={1920}
        height={400}
        className="w-100vw absolute top-0 left-0 -z-10 h-full object-cover object-top opacity-80"
      />
      <div className="container">
        <div className="mb-8 flex items-center justify-center">
          <Image
            src={data?.acf?.footer_logo || "/logo-full-with-text.svg"}
            alt={"لوجو الشركة"}
            width={311}
            height={102}
            className="h-20 w-40 object-contain md:h-40 md:w-80"
          />
        </div>

        <div className="flex flex-wrap items-center gap-10">
          <div>
            <h3 className="mb-6 text-xl font-bold md:text-2xl">
              {data?.acf?.footer_column_1?.column_title}
            </h3>

            <ul className="space-y-3">
              {Object.values(
                data?.acf?.footer_column_1?.column_links || {},
              ).map((link, index) => (
                <li key={index}>
                  <Link className="font-bold" href={link.link_url}>
                    {link.link_text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold md:text-2xl">
              {data?.acf?.footer_column_2?.column_title}
            </h3>

            <ul className="space-y-3">
              {Object.values(
                data?.acf?.footer_column_2?.column_links || {},
              ).map((link, index) => (
                <li key={index}>
                  <Link className="font-bold" href={link.link_url}>
                    {link.link_text}
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
