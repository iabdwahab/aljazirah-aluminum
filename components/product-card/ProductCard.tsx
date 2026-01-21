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
      className={`${className} relative rounded-[27px] bg-[#F5F3F1] p-7`}
    >
      <div>
        <Image
          src={image || "/default-image.png"}
          alt={title}
          width={500}
          height={300}
          className="max-h-80 w-75 max-w-full"
        />
      </div>

      <div>
        <h3 className="mb-3.5 text-2xl font-bold text-[#212121]">{title}</h3>
        <ol className="list-inside list-decimal space-y-3.5 text-sm text-[#000000]">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
