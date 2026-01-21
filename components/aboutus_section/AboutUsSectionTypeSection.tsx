import { AboutUsSectionInterface } from "@/types/aboutUsSection";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsSectionTypeSection({
  data,
}: {
  data: AboutUsSectionInterface;
}) {
  return (
    <section
      className={`bg-white text-black overflow-hidden px-10 lg:px-18.75 pt-18.75 pb-30 relative rounded-[53px] my-4`}
    >
      <div className="lg:max-w-3/5">
        <h3 className="bg-linear-to-b from-[#8A5F00] to-[#F0A500] text-transparent bg-clip-text font-black text-4xl leading-15.25 mb-4">
          {data?.acf?.title || "من نحـــــــــــــــــــــــــــــــــــن"}
        </h3>
        <p className="leading-6.75 mb-8">
          {data?.acf?.description ||
            `
            منذ ما يقارب من نصف قرن من الالتزام بالجودة والارتقاء بالتصاميم، والتنوع في المنتجات والابتكارات، ومواكبة أحدث التطورات التي تتناسب مع المواصفات الخليجية. ولذلك يعد مصنع ألمنيوم الجزيرة من أهم المصانع التي يمكن الوثوق بها لالتزامها بالدرجة العالية من التصنيع والتركيب والتسليم ومن ثم الخدمة. لذا مازال مصنع ألمنيوم الجزيرة من أكبر الرواد في تلك الصناعة لجهوده المستمرة في تطوير الذات وتحسينها مما أدى إلى اكتسابنا الاحترام الفائق في عالم البناء والتشييد.
            ارتباطك بمصنع ألمنيوم الجزيرة يغنيك عن البحث عن مكان آخر من أجل حل مشاكل التقنية الخاصة بك، ومن ثم حسن اختيار المنتجات والتصاميم الدقيقة.
        `}
        </p>

        <Link
          href={data?.acf?.section_link?.href || "/"}
          className={`bg-black text-white w-full text-center px-8 md:px-32 leading-15.25 font-bold block md:w-fit rounded-full backdrop-blur-sm `}
        >
          {data?.acf?.section_link?.text || "تواصل معنا"}
        </Link>
      </div>

      {/* Side Image */}
      <Image
        src={data?.acf?.hero_image || "/unlabeled/about-section-hero-image.png"}
        alt="صورة القسم الجانبية"
        className={` absolute left-0 -bottom-3 w-full lg:w-2/5 h-full object-contain max-lg:hidden`}
        width={521}
        height={876}
      />
    </section>
  );
}
