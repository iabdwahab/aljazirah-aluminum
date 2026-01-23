import Image from "next/image";
import Link from "next/link";

export default function OurWorkCard() {
  return (
    <article className="relative flex h-[472px] flex-col justify-between space-y-10 overflow-hidden rounded-4xl bg-black text-white">
      <span className="absolute top-0 left-1/4 h-full w-full rounded-full bg-[#ffffff38] blur-[200px]"></span>

      <div className="grid px-4 pt-6 md:grid-cols-2">
        <div className="relative hidden md:block">
          <Image
            src="/work/work-1.png"
            alt="our work 1"
            width={550}
            height={1120}
            className="absolute right-15 w-[90%] rotate-15"
          />
        </div>
        <div className="relative">
          <h3>القبب السماوية (السكاي لايت)</h3>
          <p>
            ⁠تصميم هندسي يسمح بدخول الإضاءة الطبيعية بأفضل توزيع داخل المساحات
            الداخلية. •⁠ ⁠هيكل ألمنيوم عالي الجودة مقاوم للعوامل الجوية والظروف
            المناخية القاسية. •⁠ ⁠زجاج مختار بعناية يوفر عزلًا حراريًا وصوتيًا
            ممتازًا. •⁠ ⁠نظام تركيب محكم يمنع تسرب المياه والغبار. •⁠ ⁠مناسب
            للأسطح، الممرات، الصالات، والمباني السكنية والتجارية
          </p>
        </div>
      </div>

      <div className="relative mr-auto w-fit rounded-tr-4xl bg-black p-4">
        <Link
          href="#"
          className="relative flex h-[80px] w-fit items-center justify-center rounded-[20px] bg-[#FFFFFF1A] px-6"
        >
          <Image
            src="/unlabeled/arrow.svg"
            alt="arrow icon"
            className="w-full"
            width={84}
            height={15}
          />
        </Link>

        <div className="absolute bottom-full left-0 h-8 w-8 overflow-hidden bg-black">
          <span className="block h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080808]"></span>
        </div>
        <div className="absolute bottom-0 left-full h-8 w-8 overflow-hidden bg-black">
          <span className="block h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0E0E0E]"></span>
        </div>
      </div>
    </article>
  );
}
