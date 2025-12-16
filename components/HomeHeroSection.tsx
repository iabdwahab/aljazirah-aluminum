import Image from "next/image";

export default function HomeHeroSection() {
  return (
    <main className="min-h-screen text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url('/home/hero-image.png')] bg-cover bg-center bg-no-repeat flex items-center">
      <div className="container min-h-screen flex flex-col gap-2.5 items-center justify-center text-center md:max-w-[95%] lg:max-w-[70%]">
        <Image
          src="/logo-white.svg"
          className="w-30 h-30 lg:w-40 lg:h-40"
          alt="لوجو مصنع ألمنيوم الجزيرة"
          width={171}
          height={171}
        />
        <h1 className="font-black text-[20px] lg:text-[40px] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,#999999_360deg)] bg-clip-text text-transparent">
          منذ ما يقارب من نصــــــف قرن من الالتـــــــزام بالجودة
          والارتقـــــاء بالتصاميـــــــم
        </h1>
        <p className="font-normal text-sm md:text-base mb-4">
          مواكبة أحدث التطورات التي تتناسب مع المواصفات الخليجية. ولذلك يعد مصنع
          ألمنيوم الجزيرة من أهم المصانع التي يمكن الوثوق بها لالتزامها بالدرجة
          العالية من التصنيع والتركيب والتسليم ومن ثم الخدمة. لذا مازال مصنع
          ألمنيوم الجزيرة من أكبر الرواد في تلك الصناعة
        </p>
        <button className="border px-30 py-4 font-bold text-base backdrop-blur-md rounded-full bg-[rgba(255, 255, 255, 0.1)]">
          تواصل معنا
        </button>
      </div>
    </main>
  );
}
