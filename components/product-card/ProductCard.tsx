import Image from "next/image";

interface ProductCardProps {
  className?: string;
  title: string;
  features: string[];
  image: string | null;
}

export default function ProductCard({
  className,
  title,
  features,
  image,
}: ProductCardProps) {
  return (
    <article
      className={`${className} bg-[#F5F3F1] relative rounded-[27px] p-7`}
    >
      <div>
        <Image
          src={image || "/default-image.png"}
          alt={title}
          width={500}
          height={300}
          className="max-w-full w-75 max-h-80"
        />
      </div>

      <div>
        <h3 className="text-[#212121] font-bold text-2xl mb-3.5">{title}</h3>
        <ol className="list-inside list-decimal text-[#000000] text-sm space-y-3.5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
