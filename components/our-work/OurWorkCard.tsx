import Image from "next/image";

export default function OurWorkCard() {
  return (
    <article className="grid h-125 max-h-125 grid-cols-2 overflow-hidden rounded-4xl bg-gray-900 p-4">
      <div className="relative">
        <Image
          src="/work/work-1.png"
          alt="Our Work 1"
          className="absolute right-10 w-full rotate-15"
          width={415}
          height={472}
        />
      </div>

      <div className="pt-8 text-[rgba(241,241,241,1)]">
        <h3 className="text-2xl leading-15.25 font-bold">
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
