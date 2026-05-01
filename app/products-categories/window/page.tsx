import HeroSection from "@/components/global/HeroSection";
import SectionTitle from "@/components/global/SectionTitle";
import Image from "next/image";

export default function page() {
  return (
    <>
      <HeroSection
        title="المنتجات"
        description="اكتشف مجموعة متنوعة من المنتجات التي تلبي احتياجاتك"
      />
      <div className="container my-20">
        <SectionTitle title="النوافذ" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100">
            <Image
              src={"/products_categories/1.png"}
              alt={"النوافذ"}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">نافذة</h3>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100">
            <Image
              src={"/products_categories/1.png"}
              alt={"النوافذ"}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">نافذة</h3>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100">
            <Image
              src={"/products_categories/1.png"}
              alt={"النوافذ"}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">نافذة</h3>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100">
            <Image
              src={"/products_categories/1.png"}
              alt={"النوافذ"}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">نافذة</h3>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100">
            <Image
              src={"/products_categories/1.png"}
              alt={"النوافذ"}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">نافذة</h3>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100">
            <Image
              src={"/products_categories/1.png"}
              alt={"النوافذ"}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">نافذة</h3>
          </div>
        </div>
      </div>
    </>
  );
}
