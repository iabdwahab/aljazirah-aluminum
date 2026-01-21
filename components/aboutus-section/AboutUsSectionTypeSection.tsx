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
      className={`bg-reds-300 relative my-4 overflow-hidden px-10 pt-18.75 text-black lg:px-18.75 lg:pb-60`}
    >
      <div className="lg:max-w-3/5">
        <h3 className="mb-4 bg-linear-to-b from-[#8A5F00] to-[#F0A500] bg-clip-text text-4xl leading-15.25 font-black text-transparent">
          {data?.acf?.title || "من نحـــــــــــــــــــــــــــــــــــن"}
        </h3>
        <p className="mb-8 leading-6.75">
          {data?.acf?.description ||
            `
            منذ ما يقارب من نصف قرن من الالتزام بالجودة والارتقاء بالتصاميم، والتنوع في المنتجات والابتكارات، ومواكبة أحدث التطورات التي تتناسب مع المواصفات الخليجية. ولذلك يعد مصنع ألمنيوم الجزيرة من أهم المصانع التي يمكن الوثوق بها لالتزامها بالدرجة العالية من التصنيع والتركيب والتسليم ومن ثم الخدمة. لذا مازال مصنع ألمنيوم الجزيرة من أكبر الرواد في تلك الصناعة لجهوده المستمرة في تطوير الذات وتحسينها مما أدى إلى اكتسابنا الاحترام الفائق في عالم البناء والتشييد.
            ارتباطك بمصنع ألمنيوم الجزيرة يغنيك عن البحث عن مكان آخر من أجل حل مشاكل التقنية الخاصة بك، ومن ثم حسن اختيار المنتجات والتصاميم الدقيقة.
        `}
        </p>

        <Link
          href={data?.acf?.section_link?.href || "/"}
          className={`block w-full rounded-full bg-black px-8 text-center leading-15.25 font-bold text-white backdrop-blur-sm md:w-fit md:px-32`}
        >
          {data?.acf?.section_link?.text || "تواصل معنا"}
        </Link>
      </div>

      {/* Side Image */}
      <Image
        src={data?.acf?.hero_image || "/unlabeled/about-section-hero-image.png"}
        alt="صورة القسم الجانبية"
        className={`absolute top-0 left-0 -z-10 w-1/3 max-lg:hidden`}
        width={521}
        height={876}
      />
    </section>
  );
}
