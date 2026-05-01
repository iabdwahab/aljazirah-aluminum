import Image from "next/image";
import SectionTitle from "../global/SectionTitle";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "النوافذ",
    image: "/products_categories/1.png",
  },
  {
    id: 2,
    name: "الأبواب",
    image: "/products_categories/2.png",
  },
  {
    id: 3,
    name: "الواجهات المعمارية",
    image: "/products_categories/3.png",
  },
  {
    id: 4,
    name: "الإنارة السماوية",
    image: "/products_categories/4.png",
  },
  {
    id: 5,
    name: "منتجات أخرى",
    image: "/products_categories/5.png",
  },
];

export default function ProductsCategories() {
  return (
    <section className="container my-20">
      <SectionTitle title="أقسام المنتجات" />

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            href={`/products-categories/window`}
            key={category.id}
            className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 p-10 duration-150 hover:bg-gray-100"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={200}
              className="h-50 w-50 rounded-lg object-contain [filter:invert(36%)_sepia(61%)_saturate(3620%)_hue-rotate(28deg)_brightness(88%)_contrast(101%)]"
            />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
