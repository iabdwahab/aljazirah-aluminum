import Image from "next/image";
import Link from "next/link";

export default function OurWorkCard({
  image,
  title,
  description,
  href,
}: {
  image: string | false;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <article className="relative flex min-h-118 flex-col justify-between space-y-10 overflow-hidden rounded-4xl bg-black text-white">
      <span className="absolute top-0 left-1/6 h-full w-full rounded-full bg-[#ffffff38] blur-[150px]"></span>

      <div className="grid px-4 pt-6 md:grid-cols-2">
        <div className="relative hidden md:block">
          <Image
            src={image || "/work/work-1.png"}
            alt={`صورة العمل ${title}`}
            width={550}
            height={1120}
            className="absolute right-10 w-[90%] rotate-15"
          />
        </div>
        <div className="relative pt-6">
          <h3 className="mb-3 text-2xl font-bold text-[#F1F1F1]">{title}</h3>
          <div
            className="text-[15px]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>

      <div className="relative mr-auto w-fit rounded-tr-4xl bg-black p-4 pl-0">
        <Link
          href={href || "#"}
          className="relative flex h-20 w-fit items-center justify-center rounded-[20px] bg-[#FFFFFF1A] px-6 transition duration-100 hover:opacity-85"
        >
          <Image
            src="/unlabeled/arrow.svg"
            alt="arrow icon"
            className="w-full"
            width={84}
            height={15}
          />
        </Link>

        <div className="absolute bottom-full left-0 hidden h-8 w-8 overflow-hidden bg-black md:block">
          <span className="block h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0A0A0A]"></span>
        </div>
        <div className="absolute bottom-0 left-full hidden h-8 w-8 overflow-hidden bg-black md:block">
          <span className="block h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]"></span>
        </div>
      </div>
    </article>
  );
}
