import Image from "next/image";

export default function OurWorkCard() {
  return (
    <article className="relative z-10 grid h-125 max-h-125 grid-cols-2 overflow-hidden rounded-4xl rounded-bl-none bg-gray-900 p-4">
      <div className="relative">
        <Image
          src="/work/work-1.png"
          alt="Our Work 1"
          className="absolute right-10 -z-10 w-full rotate-15"
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

      <button className="absolute bottom-0 left-0 z-10 h-20 w-35 rounded-2xl bg-amber-200 text-black">
        ---------
      </button>

      <span className="absolute bottom-0 left-0 -z-10 h-25 w-40 rounded-tr-4xl bg-black"></span>

      <span className="absolute bottom-25 left-0 h-10 w-10 overflow-hidden bg-black">
        <span className="block h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900"></span>
      </span>
      <span className="absolute bottom-0 left-40 h-10 w-10 overflow-hidden bg-black">
        <span className="block h-[200%] w-[200%] translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900"></span>
      </span>
    </article>
  );
}
