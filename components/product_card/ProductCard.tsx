interface ProductCardProps {
  className?: string;
}

export default function ProductCard({ className }: ProductCardProps) {
  return (
    <article
      className={` ${className} bg-[#F5F3F1] relative rounded-[27px] p-7`}
    >
      <h3 className="leading-15.25 text-[#212121] font-bold text-2xl mb-3.5">
        الإطــــــارات
      </h3>
      <ol className="list-inside list-decimal text-[#000000] text-sm leading-5.25 space-y-3.5">
        <li>
          ان الحواجب او الاطارات تعمل على الحفاظ على اطراف الحوائط من الاثار
          الناتجة من بصمات الاصابع او الاثار الناتجة عن عملية نقل وتحريك الاثاث
          داخل المنزل فلذلك تعتبر هى الحل الامثل
        </li>
        <li>
          وضع حلول متميزة للنوافذ من حيث الحواجب وذلك لامكانية تركيب النوافذ على
          الاطراف الخارجية من الجدار وذلك لتفادى تكوين اعشاش الطيور وتوفير مساحة
          حرة
        </li>
      </ol>
    </article>
  );
}
