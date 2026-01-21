import Image from "next/image";

export default function OurWorkCard() {
  return (
    <article className="max-h-125 h-125 grid grid-cols-2 overflow-hidden p-4 bg-gray-900 rounded-4xl">
      <div className="relative">
        <Image
          src="/work/work-1.png"
          alt="Our Work 1"
          className="w-full absolute right-10 rotate-15"
          width={415}
          height={472}
        />
      </div>

      <div className="text-[rgba(241,241,241,1)] pt-8">
        <h3 className="font-bold text-2xl leading-15.25">
          بــــــــاب زجاجـــــــي
        </h3>
        <p className="">
          باب زجاجي أنيق بإطار من اﻷلمنيوم المعالج ضد الصدأ والرطوبة، يتميز
          بتصميمه العصري وإغﻼقه المحكم الذي يمنع دخول الغبار، يجمع بين البساطة
          والجودة، ويمنح المكان مظهرا واسعا ومضيئاً
        </p>
      </div>
    </article>
  );
}
