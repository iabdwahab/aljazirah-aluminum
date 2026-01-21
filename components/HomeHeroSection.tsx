import Image from "next/image";

export default function HomeHeroSection() {
  return (
    <main className="flex min-h-screen items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url('/home/hero-image.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="container flex min-h-screen flex-col items-center justify-center gap-2.5 text-center md:max-w-[95%] lg:max-w-[70%]">
        <Image
          src="/logo-white.svg"
          className="h-30 w-30 lg:h-40 lg:w-40"
          alt="لوجو مصنع ألمنيوم الجزيرة"
          width={171}
          height={171}
        />
        <h1 className="bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,#999999_360deg)] bg-clip-text text-[20px] font-black text-transparent lg:text-[40px]">
          منذ ما يقارب من نصــــــف قرن من الالتـــــــزام بالجودة
          والارتقـــــاء بالتصاميـــــــم
        </h1>
        <p className="mb-4 text-sm font-normal md:text-base">
          مواكبة أحدث التطورات التي تتناسب مع المواصفات الخليجية. ولذلك يعد مصنع
          ألمنيوم الجزيرة من أهم المصانع التي يمكن الوثوق بها لالتزامها بالدرجة
          العالية من التصنيع والتركيب والتسليم ومن ثم الخدمة. لذا مازال مصنع
          ألمنيوم الجزيرة من أكبر الرواد في تلك الصناعة
        </p>
        <button className="bg-[rgba(255, 255, 255, 0.1)] rounded-full border px-30 py-4 text-base font-bold backdrop-blur-md">
          تواصل معنا
        </button>
      </div>
    </main>
  );
}
